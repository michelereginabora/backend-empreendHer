#!/bin/sh

node_modules="node_modules/"
if [ "${INSTALL_DEPS}" = true ]; then
  echo "Installing dependencies (ci)..."
  npm ci
elif [ ! -d "$node_modules" ]; then
  echo "Installing dependencies..."
  npm i
fi

npm run migrate

COMMAND="$*"
if [ -z "$COMMAND" ]; then
  echo "Command not found"
else
  exec $COMMAND
fi
