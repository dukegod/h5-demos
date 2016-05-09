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