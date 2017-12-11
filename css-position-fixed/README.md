fixed属性总结：

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
