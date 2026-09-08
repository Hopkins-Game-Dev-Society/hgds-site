#!/bin/bash
# Build and serve whatever is currently on GitHub main, without touching the
# local working copy. Checks origin/main out into a detached git worktree in
# /tmp and builds there, so local edits (committed or not) never leak in.
#
# Usage:
#   ./scripts/remote-deploy.sh [port]     (default port: 8081)
#   npm run deploy:remote
#
# Note: /bin/bash on purpose (not `env bash`) — see local-deploy.sh.
set -euo pipefail

cd "$(dirname "$0")/.."
PORT="${1:-8081}"
WORKTREE="/tmp/hgds-remote-main"

echo "==> Fetching origin"
git fetch origin

if [ ! -d "$WORKTREE" ]; then
  git worktree prune
  echo "==> Creating worktree at $WORKTREE"
  git worktree add --detach "$WORKTREE" origin/main
else
  echo "==> Updating worktree to origin/main"
  git -C "$WORKTREE" checkout --detach --force origin/main
fi

cd "$WORKTREE"

echo "==> Installing dependencies"
npm install

echo "==> Building origin/main ($(git rev-parse --short HEAD): $(git log -1 --format=%s))"
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
      echo "Pick another port: ./scripts/remote-deploy.sh $((PORT + 1))" >&2
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

echo "==> Serving origin/main at http://localhost:$PORT"
exec npm run preview -- --port "$PORT" --host
