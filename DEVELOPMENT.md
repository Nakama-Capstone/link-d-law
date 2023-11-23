# Development Guide
## Prerequisites
this project built in linux environment, so make sure to use linux based OS or WSL2 for windows user, or you can use docker for development environment.
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
## Setup Using Makefile
- clone this repo
    ```bash
    git clone https://github.com/Nakama-Capstone/link-d-law.git
    ```
- change directory to project root
    ```bash
    cd link-d-law
    ```
- run `make dev-setip`
    ```bash
    make dev-setup
    ```
    * this command will be setup the enviroment and run the docker compose, so make sure you have docker and docker compose installed and already running
## Setup Manually
- clone this repo
    ```bash
    git clone https://github.com/Nakama-Capstone/link-d-law.git
    ```
- change directory to project root
    ```bash
    cd link-d-law
    ```
- copy `.env.development` to `.env`
    ```bash
    cp .env.development .env
    ```
- fill the `.env` file with your own configuration or leave it as default
- run docker compose
    ```bash
    docker-compose up -d

    # or
    docker compose up -d

    # or u want to keep update with the latest image using 
    docker compose up -d --build
    ```
- open your browser and go to `http://localhost:80/v1/` to make sure the api is running