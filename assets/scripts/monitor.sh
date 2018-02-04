#!/bin/bash
# Usage:
#  monitor.sh <user-name> <password>
set -e
echo "Date: `date`"
for i in {1..8}
do
    cur_server="nlp0$i"
    python ./monitor.py -s $cur_server -u "$1" -p "$2"
    printf "\n"
done
