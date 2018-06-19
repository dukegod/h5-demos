# 居中总体体验

## css控制文字

### 参考

[1](http://xdlrt.github.io/2016/03/20/2016-03-20/)
[2](http://www.cnblogs.com/xianyulaodi/p/5863305.html#_labelTop)
[3](http://varnull.cn/css-vertical-align-middle/)






fixed属性总结：(详见：fill-position-room.html)

+ z-index: 控制各个层别的显示逻辑

#### 填充fixed带来的浮动空间的方法(类似清楚浮动的方法)

+ 最外侧(header)添加高度

```html
  <header>
    <p id="pc">
      固定头部为position：fixed
    </p>
  </header>

```

+ 添加一个空白带有高度的空白div填充

```html
  <header>
    <p id="pc">
      固定头部为position：fixed
    </p>
    <div></div>
  </header>
```
