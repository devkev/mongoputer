#!/bin/bash

cat Stable_puffer_initial.pnm | sed -e '1,4d' | awk 'NR%3==0' | grep -n 255 | sed -e 's/:.*$//' | awk '{i = $1; print i, int(i/67), i%67}' | awk '{printf("{y:%d, x:%d},\n", $2, $3);}' > puffer-initial.js
