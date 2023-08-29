.PHONY: help env.local env.test

help:
	@grep -E '^[a-zA-Z0-9_.$$()-/%]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install.application: ## install dependency for the application
	npm install

start.frontend: ## start frontend
	npm run dev

start.backend: ## start server
	cd server && go run main.go

build.frontend: ## build frontend
	npm run build