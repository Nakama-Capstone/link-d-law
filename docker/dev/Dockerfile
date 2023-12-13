# use debian
FROM oven/bun:debian as api-runtime

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

RUN apt install -y unzip build-essential libssl-dev make gcc wget zlib1g-dev curl git

RUN bun install -g concurrently

# # install python with pyenv
# ENV PYENV_ROOT /root/.pyenv
# ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH
# ENV PYTHON_VERSION 3.11
# RUN set -ex \
#     && curl https://pyenv.run | bash \
#     && pyenv update \
#     && pyenv install $PYTHON_VERSION \
#     && pyenv global $PYTHON_VERSION \
#     && pyenv rehash

# install pyton from apt
RUN apt install -y python3.9 python3-pip

# install pip
# RUN python -m pip install --upgrade pip

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

# copy files
COPY . .

# python dependencies
RUN python3.9 -m pip install tensorflow==2.14
RUN python3.9 -m pip install -r requirements.txt

# run app
EXPOSE 80
CMD ["make", "dev-api"]
