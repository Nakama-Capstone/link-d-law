# use debian
FROM oven/bun:debian as api-runtime

# packages updates
RUN apt update
RUN apt install -y --no-install-recommends git make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget ca-certificates curl llvm libncurses5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev mecab-ipadic-utf8 git

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

# install python3.11
RUN pyenv install 3.11.0

# set global python3.11
RUN pyenv global 3.11.0

# install pip
RUN python -m pip install --upgrade pip

# change workdir
WORKDIR /app

# entrypoint
COPY docker/dev/entrypoint.sh /entrypoint.sh

# chmod +x entrypoint
RUN chmod +x /entrypoint.sh

# copy files
COPY . .

# python dependencies
RUN python -m pip install -r requirements.txt

# bun install
RUN bun install

# run app
EXPOSE 80
ENTRYPOINT ["/entrypoint.sh"]