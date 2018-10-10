
npm run build

# cp ico 
faicon="./favicon.ico";
if [ -f $faicon ]; then
cp $faicon ./cdn/
echo "ok"
else
echo "error"
fi

# cp conf
cp ./b2r.m.jd.com.conf ./cdn/

# cp bin
cp -r ./bin ./cdn/