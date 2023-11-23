.DEFAULT_GOAL := hello

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

dev:
	@make show-banner
	@echo "Running Dev ..."
	@echo "Running Dev - API"
	@bun dev