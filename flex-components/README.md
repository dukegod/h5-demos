---
title:  Flexbox
date: 2016-04-01
tags: css
---

Flexbox布局在经历了旧版到新版本的过渡后，现在移动端支持的越来越好了，也正是可以在移动端大发异彩的时候到了。

综合新旧版本总结：flex，box

- [flex-bais](#flex-bais)
- [flex-grow](#flex-grow)
- [flex-shrink](#flex-shrink)

<!-- more -->

## flex属性

flex属性包括:

+ flex-grow: 控制扩展比例数值(不可为负),当子元素的宽、高总和大于父级的时候有用

+ flex-shrink: 控制收缩比例数值(不可为负),当子元素的宽、高总和大于父级的时候有用

+ flex-basis: auto | <'width'> 基础宽度

## flex-bais

控制基数，可以为auto。即flex-grow或者flex-shrink以后扩展或者收缩的比例

## flex-grow细说

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

## flex-shrink

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

## flex 旧版本

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








