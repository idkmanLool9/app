#!/bin/bash
set -euo pipefail

# Only run in Claude Code on the web
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# Install dependencies if node_modules is missing or out of date
if [ ! -d node_modules ] || [ pnpm-lock.yaml -nt node_modules ]; then
  pnpm install --prefer-offline
fi

# Don't start a dev server if one is already listening on 5173.
# Use bash's built-in /dev/tcp probe (portable; ss/netstat aren't available
# in the remote container).
port_in_use() {
  (exec 3<>/dev/tcp/127.0.0.1/5173) 2>/dev/null && { exec 3<&-; exec 3>&-; return 0; } || return 1
}

if ! port_in_use; then
  LOG_DIR="$CLAUDE_PROJECT_DIR/.claude/logs"
  mkdir -p "$LOG_DIR"
  # Launch Vite dev server detached, listening on all interfaces so the web
  # preview can reach it. nohup + disown so it survives the hook exiting.
  nohup pnpm dev --host 0.0.0.0 --port 5173 \
    > "$LOG_DIR/dev-server.log" 2>&1 &
  disown
fi

exit 0
