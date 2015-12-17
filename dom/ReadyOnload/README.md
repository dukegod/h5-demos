### 测试方法
 
+ 模拟手机
+ 在谷歌中改变Network去改变网路加载速度
+ 
 
 
# dom 加载的方法

### setTimeout
   
会出项闪屏的效果，体验不是很好
   
### onload 
	
文档外部资源不是很多的时候可以用，当有大量的页面的时候，我们必须等待所有的内容加载完了，
用户体验不是很好(指示页面包含图片等文件在内的所有元素都加载完成)

+ 原生onload实现 
	
```
window.onload 

// 具体的标签也可以用

function imgload(){

}

<img src ="" onload = "imgload()" />

```	

+ jQuery的实现方法

```
$(window).load(function() {
// including all frames, objects and images 
});

用在jQuery ajax 中也没有问题


// load method in jQuery ajax
$("#elementid").load( "data.html" );


```

 
### DOMready

**原理：** 在页面的dom树创建完成后（也就是HTML解析第一步完成）即触发，而无需等待其他的资源的加载,但有分为如下两种情况：

+ 支持DOMContentLoaded事件的

**DOMContentLoaded事件:**当页面中的文档树解析完成时,在页面的Document对象上,会触发DOMContentLoaded事件.该事件代表了,页面的DOM树已经构建完成,但页面引用的样式表和图像文件,以及包含的框架页面可能还没有加载完成,在页面完全加载完成时,会触发另外一个类似的称为"load"的事件.

+ 不支持的，就用Diego Perini 的hack 兼容。其兼容原理大概就是通过IE的document.documentElement.doScroll('left')来判断DOM树是否创建完毕



#### 原生

也就是加一个判断，然后兼容IE

**note：** 在苹果对于弹框效果不是很好。

#### jQuery实现方法

```
//call type 1
$(document).ready(function() {
/** work when all HTML loaded except images and DOM is ready **/
// your code
});
 
//call type 2
$(function() {
/** work when all HTML loaded except images and DOM is ready **/
//your code
});
 
//call type 3
$(document).on('ready', function(){
/** work when all HTML loaded except images and DOM is ready **/
//your code
});
 
//call type 4
jQuery(document).ready(function(){
/** work when all HTML loaded except images and DOM is ready **/
//your code
});

```







