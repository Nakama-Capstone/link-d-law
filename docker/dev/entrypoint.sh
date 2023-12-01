#!/bin/sh

echo "Running entrypoint.sh"
cd /app
make dev-api
cd /app