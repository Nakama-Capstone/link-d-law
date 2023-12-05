# use ubuntu
FROM ubuntu:22.04 as runtime

# change workdir
WORKDIR /app

# update
RUN apt update

# install dependencies
RUN apt install -y make curl unzip

# cached
COPY docker/dev/entrypoint.sh /entrypoint.sh

# chmod +x entrypoint
RUN chmod +x /entrypoint.sh

# Download dan instal Bun
RUN curl -fsSL https://bun.sh/install | bash

# add bun to path
ENV PATH="/root/.bun/bin:${PATH}"

# add node_modules/.bin to path
ENV PATH="/app/node_modules/.bin:${PATH}"

# cached
COPY . .

# bun install
RUN bun i --no-cache

# expose
EXPOSE 80

# entrypoint
ENTRYPOINT ["/entrypoint.sh"]