.DEFAULT_GOAL := hello

hello:
	@echo "Hello Guys!!!"

show-banner:
	@echo "=================================================="
	@echo "   __   _____  ____ __  ___ _   __   ___ _      __"
	@echo "  / /  /  _/ |/ / //_/ / _ ( ) / /  / _ | | /| / /"
	@echo " / /___/ //    / ,<   / // // / /__/ __ | |/ |/ / "
	@echo "/____/___/_/|_/_/|_| /____/  /____/_/ |_|__/|__/  "
	@echo ""
	@echo "=================================================="

dev:
	@make show-banner
	@echo "Running Dev ..."
	@echo "Running Dev - API"
	@bun dev