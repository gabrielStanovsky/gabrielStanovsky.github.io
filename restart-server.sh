#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-4000}"
LOG_FILE="${LOG_FILE:-$ROOT_DIR/.jekyll-server.log}"
PID_FILE="${PID_FILE:-$ROOT_DIR/.jekyll-server.pid}"
STOP_WAIT_SECONDS="${STOP_WAIT_SECONDS:-5}"

if [[ -x "$HOME/.rbenv/shims/bundle" ]]; then
  BUNDLE_BIN="${BUNDLE_BIN:-$HOME/.rbenv/shims/bundle}"
else
  BUNDLE_BIN="${BUNDLE_BIN:-bundle}"
fi

cd "$ROOT_DIR"

stop_pid() {
  local pid="$1"
  local label="${2:-process}"
  local waited=0
  local wait_ticks=$((STOP_WAIT_SECONDS * 4))

  if ! kill -0 "$pid" 2>/dev/null; then
    return 0
  fi

  echo "Stopping $label (pid $pid)..."
  kill "$pid" 2>/dev/null || true

  while kill -0 "$pid" 2>/dev/null; do
    if [[ "$waited" -ge "$wait_ticks" ]]; then
      echo "Still running; forcing pid $pid to stop..."
      kill -9 "$pid" 2>/dev/null || true
      break
    fi
    sleep 0.25
    waited=$((waited + 1))
  done
}

if [[ -f "$PID_FILE" ]]; then
  old_pid="$(tr -dc '0-9' < "$PID_FILE" || true)"
  if [[ -n "$old_pid" ]]; then
    stop_pid "$old_pid" "tracked Jekyll server"
  fi
  rm -f "$PID_FILE"
fi

if command -v lsof >/dev/null 2>&1; then
  for pid in $(lsof -nP -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true); do
    [[ "$pid" == "$$" ]] && continue
    command_line="$(ps -p "$pid" -o command= 2>/dev/null || true)"
    case "$command_line" in
      *jekyll*)
        stop_pid "$pid" "Jekyll server on port $PORT"
        ;;
      *)
        echo "Port $PORT is already used by pid $pid:"
        echo "  $command_line"
        echo "Not stopping it because it does not look like Jekyll."
        exit 1
        ;;
    esac
  done
else
  for pid in $(pgrep -f "jekyll.*serve" 2>/dev/null || true); do
    [[ "$pid" == "$$" ]] && continue
    stop_pid "$pid" "Jekyll server"
  done
fi

if ! command -v "$BUNDLE_BIN" >/dev/null 2>&1; then
  echo "Could not find bundle. Install dependencies or set BUNDLE_BIN=/path/to/bundle."
  exit 1
fi

echo "Starting Jekyll at http://$HOST:$PORT/"
echo "Logs: $LOG_FILE"

"$BUNDLE_BIN" exec jekyll serve --host "$HOST" --port "$PORT" >"$LOG_FILE" 2>&1 &
server_pid="$!"
echo "$server_pid" > "$PID_FILE"
disown 2>/dev/null || true

sleep 2
if ! kill -0 "$server_pid" 2>/dev/null; then
  echo "Server failed to start. Last log lines:"
  tail -n 40 "$LOG_FILE" || true
  rm -f "$PID_FILE"
  exit 1
fi

if command -v curl >/dev/null 2>&1; then
  if curl -fsI "http://$HOST:$PORT/" >/dev/null 2>&1; then
    echo "Server is responding at http://$HOST:$PORT/"
  else
    echo "Server started (pid $server_pid), but it is not responding yet."
    echo "Check logs with: tail -f \"$LOG_FILE\""
  fi
else
  echo "Server started (pid $server_pid)."
fi
