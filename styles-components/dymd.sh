#!/bin/sh

dirs="./demos/docs/*"

for argument in $(basename $dirs)
do 
    echo "<li data-md=\"$argument\"> $argument </li>"
done






