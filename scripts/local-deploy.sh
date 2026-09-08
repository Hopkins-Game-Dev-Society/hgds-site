#!/bin/bash
# Note: /bin/bash on purpose (not `env bash`) — this machine has a stale Intel-only
# Homebrew bash at /usr/local/bin/bash that would run the whole build under Rosetta.
# Build the site and serve the production output locally.
#
# Usage:
#   ./scripts/local-deploy.sh [port]     (default port: 8080)
#   npm run deploy:local
set -euo pipefail

cd "$(dirname "$0")/.."
PORT="${1:-8080}"

if [ ! -d node_modules ]; then
  echo "==> Installing dependencies"
  npm install
fi

echo "==> Building site"
npm run build

# Stop a previous preview server if it's still holding the port.
# -sTCP:LISTEN matters: without it, browsers with open connections to the port match too.
existing=$(lsof -ti "tcp:$PORT" -sTCP:LISTEN || true)
if [ -n "$existing" ]; then
  for pid in $existing; do
    comm=$(ps -p "$pid" -o comm= 2>/dev/null || true)
    if [ -z "$comm" ]; then
      continue # already exited
    elif echo "$comm" | grep -q node; then
      echo "==> Stopping previous server on port $PORT (pid $pid)"
      kill "$pid" 2>/dev/null || true
    else
      echo "Port $PORT is in use by another program ($comm, pid $pid)." >&2
      echo "Pick another port: ./scripts/local-deploy.sh $((PORT + 1))" >&2
      exit 1
    fi
  done

  # Give the old server a moment to release the port
  for _ in 1 2 3 4 5; do
    if [ -z "$(lsof -ti "tcp:$PORT" -sTCP:LISTEN 2>/dev/null || true)" ]; then
      break
    fi
    sleep 1
  done
fi

echo "==> Serving production build at http://localhost:$PORT"
exec npm run preview -- --port "$PORT" --host
