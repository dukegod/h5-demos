函数去抖的核心既是**对于一定时间段的连续的函数调用，只让其执行一次就好了**。

节约浏览器的性能。

应用场景：
+ 浏览器resize，scroll
+ ajax的输出验证，一定时间只让其做一次验证


肯定是先有一个异步的事件去处理




文件说明：
+ d.js 自己实现
+ dl.js  underscore实现
+ deboounce.js lodash实现
