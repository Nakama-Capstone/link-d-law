# L!nk D' Law
This is just a repo for directory structure design, using the concept of monorepo and microservice architecture.

## Directory Structure
- `apps` - contains all the apps
    - `mobile-android` - mobile app for android
    - `web` - web app (optional)
- `cache` - contains all the cache from data processing
- `datasets` - contains all the datasets used for training
- `docker` - contains dockerfile for dev, staging, and production
- `packages` - contains dependencies for all the apps or services
- `playground` - contains all the experimental code (jupyter notebook, etc)
- `prisma` - database schema, migration, and seed with prisma
- `services` - contains all the services
    - `api-gateway` - api service for handling all the api request
    - `api-auth` - api service for handling authentication
    - `api-user` - api service for handling user data

## Development Guide
### Prerequisites
this project built in linux environment, so make sure to use linux based OS or WSL2 for windows user, or you can use docker for development environment.
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
### Setup
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
- open your browser and go to `http://localhost:3000/v1/` to make sure the api is running

## Contribute Guide
- clone this repo
    ```bash
    git clone https://github.com/Nakama-Capstone/link-d-law.git
    ```
- change directory to project root
    ```bash
    cd link-d-law
    ```
- create new branch from `main` branch depends on learning path and context of scope of work
    ```bash
    git checkout -b dev/cc/feat/authentication

    # or another example
    git checkout -b dev/md/feat/splash-screen

    # or another example
    git checkout -b dev/ml/feat/training-model
    ```
- do your work
- commit your work
    ```bash
    git add .
    git commit -m "feat: add authentication"
    ```
- push your work to remote
    ```bash
    git push origin dev/cc/feat/authentication
    ```
- create pull request to `dev` branch
- wait for review and merge
- after merge, delete your branch
    ```bash
    git branch -d dev/cc/feat/authentication
    ```
- nice work! thank you for your contribution

## Copyrigth
&copy; 2021 [Nakama Capstone](https://github.com/Nakama-Capstone)
