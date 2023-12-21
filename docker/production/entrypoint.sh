#!/bin/sh

echo "Running entrypoint.sh"
cd /app
make prod-api
cd /app