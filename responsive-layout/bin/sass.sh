# !/bin/sh
# sass 命令说明
# + --watch
# + --sourcemap
# + --style ： `nested` `expanded` `compact` `compressed

inFile=$1
outFile=$2
# echo $inFile
# echo $outFile

sass --sourcemap='none' --style expanded $inFile $outFile
sass --watch $inFile $outFile
