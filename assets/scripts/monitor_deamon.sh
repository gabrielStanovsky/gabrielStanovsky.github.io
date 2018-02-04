#!/bin/sh
# Usage:
#   ./monitor_deamon.sh <sleep_time> <user> <password>
set -e
while true; do
    echo "Monitoring..."
    ./monitor.sh $2 $3 > ./gabrielStanovsky.github.io/assets/docs/gpu_status.txt
    pushd gabrielStanovsky.github.io/
    git pull
    git commit -am "update gpu status"
    git push
    popd
    echo "sleeping for $1"
    sleep $1
done
