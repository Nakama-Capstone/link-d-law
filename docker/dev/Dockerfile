# use debian
FROM oven/bun:debian as runtime

# change workdir
WORKDIR /app

# packages updates
RUN apt update
RUN apt install make -y

# entrypoint
COPY docker/dev/entrypoint.sh /entrypoint.sh

# chmod +x entrypoint
RUN chmod +x /entrypoint.sh

# copy files
COPY . .

# bun install
RUN bun install

# run app
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]