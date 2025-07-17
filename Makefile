deploy:
	gcloud run deploy \
		manslater-lp \
		--region asia-northeast2 \
		--allow-unauthenticated \
		--source .
