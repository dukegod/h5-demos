# history VS hash

## history

#### 历史记录的跳转:

+ back()
+ forward()
+ go()

以上的状态变化都会触发`popState`方法

#### 历史记录的修改

HTML5引入了 history.pushState() 和 history.replaceState()方法，它们分别可以添加和修改历史记录条目。这些方法通常与window.onpopstate 配合使用。

##### pushState()

只是添加历史记录，不会立即触发`popState`方法

包括三个参数：

+ 状态对象： 状态对象state是一个JavaScript对象，通过pushState () 创建新的历史记录条目。无论什么时候用户导航到新的状态，popstate事件就会被触发，且该事件的state属性包含该历史记录条目状态对象的副本。
+ 标题：目前被忽略
+ URL：定义一个新的URL，但是 **调用 pushState() 后浏览器并不会立即加载这个URL，但可能会在稍后某些情况下加载这个URL,也就是`window.onpopstate` 不会处理未激活的历史记录**

**注意 pushState() 绝对不会触发 hashchange 事件，即使新的URL与旧的URL仅哈希不同也是如此**

##### replaceState()

只是修改历史记录，不会立即激活 popstate事件

##### popstate() 
window.onpopstate是popstate事件在window对象上的事件处理程序.

每当处于激活状态的历史记录条目发生变化时,popstate事件就会在对应window对象上触发.    
如果当前处于激活状态的历史记录条目是由history.pushState()方法创建,或者由history.replaceState()方法修改过的, 则popstate事件对象的state属性包含了这个历史记录条目的state对象的一个拷贝.

调用history.pushState()或者history.replaceState()不会触发popstate事件.    
popstate事件只会在浏览器某些行为下触发, 比如点击后退、前进按钮(或者在JavaScript中调用history.back(),history.forward()、history.go()方法).

当网页加载时,各浏览器对popstate事件是否触发有不同的表现,Chrome 和 Safari会触发popstate事件, 而Firefox不会.

## hash

路径中添加`#`标识；`#`代表网页中的一个位置

##### 网页位置指定标识符，有两个方法。   

+ 一是使用锚点，比如 `<a name="print"></a>`
+ 二是使用id属性，比如 `<div id="print" >`

#### 特点:

1, http请求不包括`#`

     
2,`#`后面的字符被浏览器解读为位置标识符，不会被发送到服务器
       
3, 改变`#`会改变浏览器的访问历史

每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用"后退"按钮，就可以回到上一个位置。
这对于ajax应用程序特别有用，可以用不同的#值，表示不同的访问状态，然后向用户给出可以访问某个状态的链接。

4, window.location.hash读取#值
     
5, onhashchange事件       

这是一个HTML 5新增的事件，当#值发生变化时，就会触发这个事件


## pajax

[pajax](https://github.com/defunkt/jquery-pjax)就是pushState+ajax实现页面无刷新跳转

参考

[http://www.ruanyifeng.com/blog/2011/03/url_hash.html](http://www.ruanyifeng.com/blog/2011/03/url_hash.html)
