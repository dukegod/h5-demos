响应式布局方案

基本思路：

+ `rem` 配合 `flexbox(max-width属性做降级处理)`
+ 单独适配IE
+ PC与M统一适配

栅栏视图：分为12份。

media

[calac](https://www.w3.org/TR/css3-values/#calc-notation):

图片的处理： 绝对定位

宽度适配：
+ flex-basis
+ max-width

分割点：

添加过渡动画：`transtions`

## 边界

最大与最小的适配大小

## layout

设计图1080px，即：100vw = 1080px

设置root： 10vw;

10vw = 108px
1rem = 10.8px/vw;


## 兼容性问题

### IE 9
通过浏览器检测，对于IE9 单独适配， 其他的版本提示浏览器更新

### media
+ min-width: 从小到大适配
+ max-width： 从大到小适配

### 处理高清屏

[Retina Display Media Query](https://css-tricks.com/snippets/css/retina-display-media-query/)

```css
@media
  only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min--moz-device-pixel-ratio: 2),
  only screen and (-o-min-device-pixel-ratio: 2 / 1),
  only screen and (min-device-pixel-ratio: 2),
  only screen and (min-resolution: 192dpi),
  only screen and (min-resolution: 2dppx) {
    .retina {
      color: red;
    }
  }
```



