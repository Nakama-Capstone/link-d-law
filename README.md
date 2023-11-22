# L!nk D' Law
L!nk D' Law is a web and mobile application that can be used to find the best lawyer and what kind of lawyer you need based on your case.

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

## Concept using of this architecture
- Monorepo
- Microservice
- Unit Testing
- CI/CD (Continuous Integration/Continuous Deployment)
- ...

## Development Guide
[Development Guide](DEVELOPMENT.md)

## Contributing Guide
[Contribute Guide](CONTRIBUTING.md)

## Copyrigth
&copy; 2021 [Nakama Capstone](https://github.com/Nakama-Capstone)
