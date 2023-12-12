# use debian
FROM oven/bun:debian as api-runtime
ARG DEBIAN_FRONTEND=noninteractive
# FROM debian:bullseye as api-runtime

# packages updates
RUN apt update
RUN apt install -y --no-install-recommends git make build-essential libssl-dev zlib1g-dev libbz2-dev gnupg libreadline-dev libsqlite3-dev wget ca-certificates curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev mecab-ipadic-utf8 git

# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# RUN curl -fsSl https://bun.sh/install | BUN_INSTALL=/usr bash -s "bun-v1.0.14"

RUN apt install -y unzip build-essential libssl-dev openssl make gcc wget zlib1g-dev software-properties-common

RUN bun install -g concurrently

# # install python
# RUN wget https://www.python.org/ftp/python/3.11.7/Python-3.11.7.tgz
# RUN tar xzvf Python-3.11.7.tgz -C /opt
# RUN cd /opt/Python-3.11.7 && ./configure --enable-optimizations
# RUN cd /opt/Python-3.11.7 && make altinstall
# RUN ln -fs /opt/Python-3.11.7/Python /usr/bin/python
# RUN python --version

# install pyenv
ENV PYENV_ROOT /root/.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH
ENV PYTHON_VERSION 3.11
RUN set -ex \
    && curl https://pyenv.run | bash \
    && pyenv update \
    && pyenv install $PYTHON_VERSION \
    && pyenv global $PYTHON_VERSION \
    && pyenv rehash

# install pip
RUN python -m pip install --upgrade pip

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
RUN python -m pip install -r requirements.txt

# run app
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]
