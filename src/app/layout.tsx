import type { Metadata } from "next";
import "./globals.css";
import MuiThemeProvider from './theme-provider';

export const metadata: Metadata = {
  title: "Manslater - 本音翻訳",
  description: "日常のコミュニケーションをスムーズに。最新AIが言葉の裏に隠された本音を暴き、候補を提示する翻訳アプリ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  );
}
