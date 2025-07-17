FROM node:18 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --only=production=false
COPY . .
RUN npm run build

FROM node:18-slim AS runner
ENV NODE_ENV=production

WORKDIR /app

# standalone モードを利用すると、publicと.next/staticはデフォルトでは含まれないので明示的にコピーする必要があります
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/.next/standalone ./
CMD ["node", "server.js"]
