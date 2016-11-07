//javascript
//
//控制显示100%
var articleFullsize = function(e) {
  var winW = Zepto(window).width();
  var winH = Zepto(window).height();
  var articleH = parseInt(winH - 44);
  Zepto(e).css(
    "height", articleH + "px"
  )
};
articleFullsize("article")