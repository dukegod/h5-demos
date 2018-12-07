# !/bin/sh
# sass 命令说明
# + --watch
# + --sourcemap
# + --style ： `nested` `expanded` `compact` `compressed

# 输出文件
dist='./dist'

if [[ -d "$dist" ]]; then
rm -rf "$dist"
fi

# 把domes中的文件拷贝到dist目录中
mkdir "$dist"
cp -R ./demos/docs ./dist


# in='./scss/aui.scss'
# out='./demos/aui.css'
# sass --sourcemap='none' --style expanded $in $out
# sass --watch $1 $2

./node_modules/.bin/parcel ./demos/index.html  --no-cache

# ssv ./demos/

