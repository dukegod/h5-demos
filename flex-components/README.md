Flexbox布局在经历了旧版到新版本的过渡后，现在移动端支持的越来越好了，也正是可以在移动端大发异彩的时候到了。

综合新旧版本总结：flex，box

# 在父级控制子元素显示样式(flex容器)

## flex-flow

添加在父级别中,控制子元素在容器中的显示样式.

flex-flow包括两个属性flex-direction 与 flex-wrap

### flex-direction:控制子元素在容器的显示

- row: 水平显示,左对齐
- row-reverse: 水平显示,右对齐
- column: 纵向显示, 顶对齐
- column-reverse: 底部对齐

### flex-wrap: 控制是否换行显示

- nowrap: 不换行
- wrap : 换行
- wrap-reverse : 换行后子元素在前面显示.

flex旧版本属性: box-orient,box-direction

box-orient: 

- horizontal：水平显示
= vertical：横向显示
- inline-axis：水平显示(不常用)
= block-axis：横向显示(不常用)

box-direction: 

- normal：左到右
- reverse：右到左

```
.display-box, .group-fl {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -webkit-flex-wrap: wrap;
}
```

[演示地址](http://codepen.io/dukegod/pen/LpZxgd?editors=1100)

## align-content 

align-content控制子元素在弹性盒中显示的方式,在多行可变弹性盒模型中.

- flex-start
- flex-end
- center
- space-between
- space-around
- stretch

flex旧版本属性: -box-align

- start
- center
- end
- baseline
- stretch

[演示地址](http://codepen.io/dukegod/pen/rLopWz?editors=1100)

## just-content

控制子元素在水平轴上的变化对齐方式.

- flex-start
- flex-end
- center
- space-between
- space-around

space-between 与 space-around 区别:

between会是子元素在盒子两端有个元素,
around 会使各个元素之间保持一定的间距

flex 旧属性: -webkit-box-pack

[演示地址](http://codepen.io/dukegod/pen/rLopWz?editors=1100)

## align-item

控制子元素在纵轴上的变化

- flex-start
- flex-end
- center
- baseline
- stretch

# 用来控制子元素的属性(flex子项目)

## flex属性包括:

+ flex-grow: 控制扩展比例数值(不可为负),当子元素的宽、高总和大于父级的时候有用

+ flex-shrink: 控制收缩比例数值(不可为负),当子元素的宽、高总和大于父级的时候有用

+ flex-basis: auto | <'width'> 基础宽度

flex 旧版本

只有一个属性对应: box-flex


### flex-basis

控制基数，可以为auto。即flex-grow或者flex-shrink以后扩展或者收缩的比例

### flex-grow细说

```
<div class="group-test">
  <div class="item1">一</div>
  <div class="item2">二</div>
  <div class="item3">三</div>
</div>

.group-test {
  margin: 0 auto;
  display: box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 300px;
  height: 100px;
  background-color: #222;
}
.group-test .item1 {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
          flex-shrink: 1;
  -webkit-flex-basis: 40px;
      -ms-flex-preferred-size: 40px;
          flex-basis: 40px;
  background-color: red;
}
.group-test .item2 {
  -webkit-box-flex: 2;
  -webkit-flex-grow: 2;
      -ms-flex-positive: 2;
          flex-grow: 2;
  -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
          flex-shrink: 1;
  -webkit-flex-basis: 40px;
      -ms-flex-preferred-size: 40px;
          flex-basis: 40px;
  background-color: green;
}
.group-test .item3 {
  -webkit-box-flex: 3;
  -webkit-flex-grow: 3;
      -ms-flex-positive: 3;
          flex-grow: 3;
  -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
          flex-shrink: 1;
  -webkit-flex-basis: 40px;
      -ms-flex-preferred-size: 40px;
          flex-basis: 40px;
  background-color: red;
}

```

解释以上问题:

flex-basis代表字元素最小宽度为40px。

子元素总和为：40*3= 120；

剩余的为： 300-120 = 180；

然后按照flex-grow进行扩展，给每一个子元素多分一份宽度。由于是扩展，所以flex-shrink没有作用.

总共扩展的块数为: 1+2+3 = 6;

每一块的宽度为: 180/6 = 30;

item2最终的宽度为： 40 + 30*1 = 70;

item3最终的宽度为： 40 + 30*2 = 100;

item2最终的宽度为： 40 + 30*3 = 130;

### flex-shrink

```
<div class="group-fs">
  <div class="item1"></div>
  <div class="item2"></div>
  <div class="item3"></div>
</div>

.group-fs {
  margin: 20px auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 300px;
  height: 100px;
  background-color: #222;
}
.group-fs .item1 {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
          flex-shrink: 1;
  -webkit-flex-basis: 120px;
      -ms-flex-preferred-size: 120px;
          flex-basis: 120px;
  background-color: red;
}
.group-fs .item2 {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-flex-shrink: 2;
      -ms-flex-negative: 2;
          flex-shrink: 2;
  -webkit-flex-basis: 120px;
      -ms-flex-preferred-size: 120px;
          flex-basis: 120px;
  background-color: green;
}
.group-fs .item3 {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-flex-shrink: 3;
      -ms-flex-negative: 3;
          flex-shrink: 3;
  -webkit-flex-basis: 120px;
      -ms-flex-preferred-size: 120px;
          flex-basis: 120px;
  background-color: red;
}

```

解释以上问题:

flex-basis代表字元素基础宽度为120px。因为子元素的总宽度大于父级的宽度，所以flex-grow没有作用，不需要扩展，只有flex-shrink有作用，按照一定的比例进行收缩。

子元素总和为：120*3= 360；

需要收缩的宽度为： 360-300 = 60；

总共块数为: 1+2+3 = 6;

每一块的宽度为: 60/6 = 10;

item1最终的宽度为： 120 - 10*1 = 110;

item2最终的宽度为： 120 - 10*2 = 100;

item3最终的宽度为： 120 - 10*3 = 90;

#### flex 旧版本

只有一个属性对应: box-flex

```
<div class="group-box-normal">
  <div class="item1"></div>
  <div class="item2"></div>
  <div class="item3"></div>
</div>

.group-box-normal {
  margin: 20px auto;
  display: -webkit-box;
  width: 300px;
  height: 100px;
  background-color: #222;
}
.group-box-normal .item1 {
  -webkit-box-flex: 1;
  background-color: red;
}
.group-box-normal .item2 {
  -webkit-box-flex: 1;
  background-color: green;
}
.group-box-normal .item3 {
  -webkit-box-flex: 1;
  background-color: red;
}

```

对于flex旧版本说明：

display只有-webkit-box属性，没有box属性。

也是按照类似的分配原则进行分配的。

[演示地址](http://codepen.io/dukegod/pen/LpZxgd?editors=1100)



## align-self

则用来在单独的伸缩项目上的对齐方式

## order 

可以为负值,数值越小排在前面. 默认为:0

控制子元素出现的顺序

[w3cplus](http://www.w3cplus.com/css3/a-guide-to-flexbox-new.html)
[css88](http://www.css88.com/book/css/properties/flex/align-items.htm)


