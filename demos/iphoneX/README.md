iphone x 适配问题

+ 头部，刘海儿
+ 底部，小黑条的高度（横竖屏时值不一样）

需要考虑到的知识点：

#### viewport-fit

+ contain: 可视窗口完全包含网页内容
+ cover：网页内容完全覆盖可视窗口
+ auto：默认值，跟+  contain 表现一致
    

#### env() 和 constant()

constant() 在 iOS11.2 之后就不能使用的，在以后使用 env(), 但我们还是需要做向后兼容

iOS11 新增特性，Webkit 的一个 CSS 函数，用于设定安全区域与边界的距离，有四个预定义的变量：

+ safe-area-inset-left：安全区域距离左边边界距离
+ safe-area-inset-right：安全区域距离右边边界距离
+ safe-area-inset-top：安全区域距离顶部边界距离
+ safe-area-inset-bottom：安全区域距离底部边界距离

#### @supports 降级处理
