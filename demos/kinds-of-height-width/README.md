最好放在load事件中，以免图像带来的问题


## windows高度($(window).height())

当前可见区域的大小，窗口改变，高度改变即：也就是你浏览器所能看到的页面的那部分的高度  这个大小在你缩放浏览器窗口大小时 会改变

## document高度($(document).height())

整个文档的高度(获取整个页面的高度)，随着你去拉伸窗口，并不会改变.
    
## $(document).scrollTop() 高度 

获取垂直滚动的距离  即当前滚动的地方的窗口顶端到整个页面顶端的距离
    
## $(document).scrollLeft() 

这是获取水平滚动条的距离
    
## 要获取顶端 

只需要获取到scrollTop()==0的时候  就是顶端了

## 要获取底端 

只要获取scrollTop()>=$(document).height()-$(window).height()  就可以知道已经滚动到底端了



# js原生

[参考火狐开发者文档](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight)

[博客园](http://www.cnblogs.com/dolphinX/archive/2012/11/19/2777756.html)

[博客园2](http://www.cnblogs.com/Henllyee/archive/2008/04/20/1162517.html)

### clientHeight clientWidth clientTop clientLeft

clientHeight用于描述元素内尺寸，是指元素内容+内边距大小，不包括边框（ie实际是包括），外边距，滚动条

clientTop和clientLeft返回内边距的边缘和边框的外边缘之间的水平和垂直距离，也就是左边框，上边框宽度

### offsetHeight offsetWidth offsetTop offsetLeft offsetParent 

offsetHeight用于描述元素外尺寸，是指元素内容 + 内边距 + 边框， 不包括 外边距和 滚动条

offsetTop表示该元素的上角（边框外边缘）与已定位的父容器（offsetParent对象）上角的距离,也就是 （margin-top + 父容器的padding-top值）; offsetLeft 同理

offsetParent对象是指元素最近的定位（relative,absolute）祖先元素，递归上溯，如果没有祖先元素是定位的话，会返回null

### scroll width,height,top,left

scrollWidth和scrollHeight是元素的内容区域加上内边距加上溢出尺寸，当内容正好和内容区域匹配没有溢出时，这些属性与clientWidth和clientHeight相等

scrollLeft和scrollTop是指元素滚动条位置


Javascript:

- 网页可见区域宽： document.body.clientWidth
- 网页可见区域高： document.body.clientHeight
- 网页可见区域宽： document.body.offsetWidth (包括边线的宽)
- 网页可见区域高： document.body.offsetHeight (包括边线的高)
- 网页正文全文宽： document.body.scrollWidth
- 网页正文全文高： document.body.scrollHeight
- 网页被卷去的高： document.body.scrollTop
- 网页被卷去的左： document.body.scrollLeft
- 网页正文部分上： window.screenTop
- 网页正文部分左： window.screenLeft
- 屏幕分辨率的高： window.screen.height
- 屏幕分辨率的宽： window.screen.width
- 屏幕可用工作区高度： window.screen.availHeight
- 屏幕可用工作区宽度： window.screen.availWidth

JQuery:

```js
$(document).ready(function(){

alert($(window).height()); //浏览器当前窗口可视区域高度也就是“屏幕分辨率的高”
alert($(document).height()); //浏览器当前窗口文档的高度
alert($(document.body).height());//浏览器当前窗口文档body的高度
alert($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin

alert($(window).width()); //浏览器当前窗口可视区域宽度
alert($(document).width());//浏览器当前窗口文档对象宽度
alert($(document.body).width());//浏览器当前窗口文档body的宽度
alert($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin

})
```


jsDOM

+ html: document.documentElement
+ body: document.body

document.documentElement.offsetHeight:  文档的高度

document.body.offsetHeight:  body的高度

document.body.scrollHeight:  body的滚动高度

document.body.scrollTop:  body的距离顶部高度


