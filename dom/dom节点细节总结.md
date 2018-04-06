# DOM 文档对象模型

doctype 告诉浏览器按照什么格式显示

xml 标签名字可以随意定义，不可被浏览器认知

## 节点

element 

attr

text 

document 文档节点

documentType 文档类型节点

documentFragment 文档片段节点： 可用于文档的复制，粘贴。即可以一次性操作文档片段

判断节点的类型：

+ 数值常量
+ 字符常量 所有的浏览器都支持的检测节点类型的方法

```
if (somenode.nodeType == 1){
	console.log('this is a element');
}
```

## 节点nodeName 与 nodeValue

节点类型， nodeName ， nodeValue 

+ 元素节点（element）：    元素的标签名（DIV）；null
+ 属性节点（attribute）；  属性的名字（id）；属性的值（container）
+ 文本节点（text）；       #text；节点所包含的文本
+ 注释的节点（comment）；  #comment；注释的内容
+ 文档类型节点（documentType）；doctype的名称（html）；null
+ 文档片段节点（documentFragment）；#document-fragment；null

```
<div id="container">这是一个元素节点</div>
<script>
	var divNode = document.getElementById("container");
	console.log(divNode.nodeName + "/" + divNode.nodeValue);
	
	var attrNode = divNode.attributes[0];
	console.log(attrNode.nodeName + "/" + attrNode.nodeValue);
	
	var textNode = divNode.childNodes[0];
	console.log(textNode.nodeName + "/" + textNode.nodeValue);
	
	var commentNode = document.body.childNodes[1];
	console.log(commentNode.nodeName + "/" + commentNode.nodeValue);
	
	console.log(document.doctype.nodeName + "/" + document.doctype.nodeValue);
	
	var frag = document.createDocumentFragment();
	console.log(frag.nodeName + "/" + frag.nodeValue);
</script>
```

### 文档主要节点

+ html: document.documentElement
+ body: document.body

### 节点属性

```
<ul id="list">
	<li>first node1</li>
	<li>first node2</li>
	<li>first node3</li>
	<li>first node4</li>
	<li>first node5</li>
	<li>first node6</li>
</ul>

<script>
var ul = document.getElementById('list');
	if(ul.nodeType == 1){
		console.log(ul.nodeType);
		console.log(ul.nodeName);
		console.log(ul.nodeValue);			
	}
	console.log(ul.childNodes);

</script>


// result 
0: text
1: li
2: text
3: li
4: text
5: li
6: text
7: li
8: text
9: li
10: text
11: li
length: 14
```
有text 节点

### 节点方法

+ appendChild 添加到最后
+ insertBefore(newnode , 位置) 随心所d欲的添加节点
+ replaceChild(newnode , 位置) 替换节点
+ cloneNode()

### element比较（HTML，XML）

```
if(element.tagname.toLowerCase() = 'div'){
	console.log('true');
}
```
在html中，标签名始终都是以大写表示。所以在比较的时候尽量转换下载进行比较。


## domready

当节点的所有的数目都



## 渲染

### html 结构的渲染过程

+ 1 解析html构建DOM树（构建DOM节点）
+ 2 构建渲染树（解析样式信息）
+ 3 布局渲染树（布局DOM节点）
+ 4 绘制渲染树（绘制DOM节点）

### domready 实现的方法

+ 利用setTimeout，效果不是很好
+ onload 文档外部资源不是很多的时候可以用，当有大量的页面的时候，我们必须等待所有的内容加载完了，用户体验不是很好
+ $(document).ready()
 
DOMready 实现策略

在页面的dom树创建完成后（也就是HTML解析第一步完成）即触发，而无需等待其他的资源的加载。

+ 支持DOMContentLoaded事件的，就使用DOMContentLoaded事件
+ 不支持的，就用Diego Perini 的hack 兼容。其兼容原理大概就是通过IE的document.documentElement.doScroll('left')来判断DOM树是否创建完毕

[参考](http://www.cnblogs.com/JulyZhang/archive/2011/02/12/1952484.html)

### 元素节点的判断

### 节点的包涵关系

+ constains
+ 低版本 通过原色比对

### 节点的继承层次

由于dom原型链的一层一层的继承，当你创建一个p的时候，需要向上继承6个原型链，效率比较低

建议使用 mvvm 框架

### html 嵌套规则

块状元素： 可以容纳内联元素和其他的块状元素，width，height 起作用

内联元素： 只能容纳文本或者其他的内联元素，width，height不起作用

块级元素不能放在p元素中

li可以包含div标签

多媒体元素

> object 兼容IE

> embed 兼容其他的浏览器

```
<object>
 <param>
 <embed></embed>
</object>
```

## 样式加载

优先级为: 内部style > ID style > CSS style 

有！important 属性的优先级最高

```
<style type="text/css">
	*{
		margin:0;
		padding: 0;
	}
	#div-f{
		background-color: red;
	}
	.div-f{
		background-color: green;
		width: 200px;
		height: 200px;
	}
	
</style>
<body>
	<div id="div-f" class="div-f" style="background-color: black;">
		comfirmed color style 
	</div>
</body>
``` 



 


