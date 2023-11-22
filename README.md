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

## Contribute Guide
_Coming soon_

## Development Guide
_Coming soon_

## Copyrigth
&copy; 2021 [Nakama Capstone](https://github.com/Nakama-Capstone)
