#!/bin/sh

in='./scss/aui.scss'
out='./demos/aui.css'
sass --sourcemap='none' --style expanded $in $out
sass --watch $in:$out
