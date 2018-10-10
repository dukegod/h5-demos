#!/bin/sh
# ./node_modules/.bin/parcel free-brand.html

rm -rf dist

# parcel index.html --no-source-maps --no-cache

parcel index.html --no-cache

# parcel watch index.html --no-source-maps
