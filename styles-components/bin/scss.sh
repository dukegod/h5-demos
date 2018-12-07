#!/bin/sh
# sass 命令说明
# + --watch
# + --sourcemap
# + --style ： `nested` `expanded` `compact` `compressed

in='./scss/index.scss'
out='./demos/index.css'
sass --sourcemap='none' --trace --style expanded $in $out
sass --watch $in:$out
