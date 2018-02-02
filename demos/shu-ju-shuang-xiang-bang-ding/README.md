数据双向绑定三种实现方法：

+ 发布订阅模式（backbone）
+ 脏数据监测（Angularjs，RegularJS）
+ 数据劫持（Vuejs）

### 发布订阅模式

观察者模式，开发数据的双向绑定问题

[谈谈JavaScript中的双向数据绑定](http://www.html-js.com/article/Study-of-twoway-data-binding-JavaScript-talk-about-JavaScript-every-day)

### 数据劫持

vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

[数据双向绑定的分析和简单实现](https://zhuanlan.zhihu.com/p/25464162)    
[mvvm源码分析理解](https://github.com/xuqiang521/overwrite/blob/master/src/my-mvvm/)        


[剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500)
[DMQ/mvvm](https://github.com/DMQ/mvvm)
