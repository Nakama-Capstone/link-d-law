.DEFAULT_GOAL := hello
.PHONY: run

show-banner:
	@echo "=================================================="
	@echo "   __   _____  ____ __  ___ _   __   ___ _      __"
	@echo "  / /  /  _/ |/ / //_/ / _ ( ) / /  / _ | | /| / /"
	@echo " / /___/ //    / ,<   / // // / /__/ __ | |/ |/ / "
	@echo "/____/___/_/|_/_/|_| /____/  /____/_/ |_|__/|__/  "
	@echo ""
	@echo "=================================================="

hello:
	@make show-banner
	@echo "Hello Guys!!!"

setup-dev:
	@make show-banner
	@echo "[SETUP DEV] setup-dev"
	@echo "[SETUP DEV] Setup environment ..."
	@cp .env.development .env
	@echo "[SETUP DEV] Setup environment ... DONE"
	@echo "[SETUP DEV] Setup docker ..."
	@docker-compose up -d --build
	@echo "[SETUP DEV] Setup docker ... DONE"
	@echo "[SETUP DEV] ALL Services now running ... check in http://localhost:80"

dev-docker:
	@make show-banner
	@echo "Running Dev Docker ..."
	@echo "Running Dev Docker - API Service"
	@docker-compose up

dev-api:
	@make show-banner
	@echo "Running Dev ..."
	@echo "Running Dev - API Service"
	@bun dev

build:
	@make show-banner
	@echo "Building Prod ..."
	@echo "Building Prod - API Service"
	@bun run build:bin

run:
	@make show-banner
	@path=./bin/$(filter-out $@,$(MAKECMDGOALS)); \
	if [ -f $$path ]; then \
		echo "Running $$path"; \
		$$path; \
	else \
		echo "Error: $$path does not exist or is not a file"; \
		exit 1; \
	fi
