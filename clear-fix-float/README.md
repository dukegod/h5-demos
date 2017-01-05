## clear

对于清楚浮动，每一个人都有自己的想法，基本都只知道怎么去清楚浮动，对于一些细节，我们不免需要多注意点，今天主要对于两个属性，强调说明。
**overflow** 与 **clear:both**

### clear常用写法

经常使用的是在浮动的下一级的块元素中添加如下代码实现清楚浮动

```
.clearfixed::after,
.clearfixed::before{
  content:"";
  display:table;
  clear: both;
}
```

##### 添加空div

```
<div style="width:100px;height:50px;background-color:red;float:left">1</div>
<div style="width:100px;height:50px;background-color:blue;float:left">2</div>
<div style="clear:both"></div>
<div style="width:100px;height:50px;background-color:yellow;">3</div>
```

##### 常规写法，用一个div包裹

在上一级的最外层包裹一层处理

```
<div class="container clearfixed">
  <div class="left">
    left left left
  </div>
  <div class="left">
    left left left2
  </div>
  <div class="right">
    right right right
  </div>
</div>
```

## overflow 特殊说明

我们常见的overflow用来处理溢出问题。  
其也可以用来处理浮动问题,一般使用min-height来设置元素有高度属性，来让高度充分的撑开。



[stackoverflow](http://stackoverflow.com/questions/8554043/what-is-a-clearfix)
