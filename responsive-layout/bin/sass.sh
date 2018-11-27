# !/bin/sh
# sass 命令说明
# + --watch
# + --sourcemap
# + --style ： `nested` `expanded` `compact` `compressed

sass --sourcemap='none' --style expanded $1 $2
sass --watch $1 $2
