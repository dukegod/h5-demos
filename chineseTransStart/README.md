javascript里判断汉字和字符

```
'use strict';
function fontTrans(str) {
  console.log(str);
  var len = str.length;
  for (var i = 0; i < len; i++) {
    var txt = str.charCodeAt(i);
    if (txt > 128) { //ascii码大于128的是汉字
      console.log("是汉字");
    } else {
      console.log("是字符");
    }
  }
  console.log(str);
}
```

判断是否为汉字主要用于input或者textarea的输入检测，如用户名不能为汉字，或者类似微博的140字符限制，一般是将一个汉字当两个字符计算。计算时用正则替换汉字为两个ascii字符，然后用length属性获取长度

```
var len=string.replace(/[^\x00-\xff]/g, "**");

```