#! /bin/bash

[[ ! -z "$#" && $# > 0 ]] && echo $1 || echo "No arguments supplied";
[ ! -z "$2" ] && echo $2;
[ ! -z "$3" ] && echo $3;