# use debian
FROM oven/bun:debian as base

ARG DEBIAN_FRONTEND=noninteractive
ENV PYTHONUNBUFFERED TRUE

# packages updates
RUN apt update
# RUN apt install -y --no-install-recommends libbz2-dev gnupg libreadline-dev libsqlite3-dev ca-certificates curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev mecab-ipadic-utf8 git

RUN apt-get update
RUN apt-get install -y ca-certificates curl gnupg 
RUN mkdir -p /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
ENV NODE_MAJOR 18
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt update
RUN apt install nodejs -y
# RUN curl -fsSl https://bun.sh/install | BUN_INSTALL=/usr bash -s "bun-v1.0.14"

RUN apt install -y unzip build-essential libssl-dev make gcc wget zlib1g-dev git lsb-release

RUN curl -fsSL https://packages.redis.io/gpg | gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
RUN echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/redis.list
RUN apt update
RUN apt install -y redis-server screen

RUN bun install -g concurrently pm2

# install pyton from apt
RUN apt install -y python3.9 python3-pip





# layer deps
FROM base as deps-bun

# change workdir
WORKDIR /app

# entrypoint
COPY docker/dev/entrypoint.sh /entrypoint.sh

# chmod +x entrypoint
RUN chmod +x /entrypoint.sh

# copy files
COPY package*.json ./

# copy folders packages/
COPY packages/ packages/
COPY services/ services/

# bun install
RUN bun install





# layer deps
FROM deps-bun as deps-python

# copy files
COPY . .

# python dependencies
RUN python3.9 -m pip install tensorflow==2.14
RUN python3.9 -m pip install -r requirements.txt





# layer deploy
FROM deps-python as deploy

# echo aja
RUN echo "nice!"

# run app
EXPOSE 80
EXPOSE 6379

# CMD ["make", "prod-api"]
# keep running in background
# CMD ["bun", "pm2-runtime", "start", "ecosystem.config.js"]
CMD ["bun", "prod-start"]
