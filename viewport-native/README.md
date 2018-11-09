# viewport 移动端布局总结

+ normal.html 正常没有处理的页面展示情况
+ dpr.html 处理dpr
+ dpr-rem.html 处理dpr, rem
+ dpr-rem-font.html 处理各种兼容性后的成熟插件模式
+ vw-wh.html



### vh-vw设计方案

750设计图，100vw = 750px
1vw = 7.5px

配偶`less`或者`sass`

```less
  // @base: 7.5;
```

### 配合root使用

设置

``
1rem = 10vw

100vw = 750px

1rem = 75px

// that to say
1rem = 10vw = 75px;

``
