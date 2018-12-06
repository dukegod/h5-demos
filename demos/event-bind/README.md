# 自定义事件研究

最近研究vue的状态管理，空vue实例对象，作为全局对象，从而实现全局状态的管理，
其实类似JavaScript的自定义事件。和我们用jquery自定义事件更是类似。

##  JavaScript原生事件

#### 高版本浏览器

自定义事件到激发这个事件，需要document.createEvent()，event.initEvent()，element.dispatchEvent()这三部，分别是创建事件对象，初始化事件对象，触发事件
   
当时前提是浏览器都支持这些方法。

#### 兼容浏览器函数方法

## 使用框架很方便

jquery， zepto

```js
 <section id="sectionId">
  触发我变化颜色！！！
</section>

<div style="margin-bottom: 20px">
  <h6>JavaScript自定义事件修改section的背景颜色</h6>
  <button id="jsId" class="btn"> 点击变红 </button>
  <button id="jsId2" class="btn"> 我也可以改变section </button>
</div>


const M = {};
$(M).on('changeBg', (event, obj)=> {
console.log(event);
console.log(obj);
const e = $('#sectionId')[0];
e.innerText= '';
setTimeout(()=> {
  e.style.backgroundColor= obj.color;
  e.style.color = 'black';
  e.style.opacity= 0.5;
  e.innerText = 'change my bgcolor and font color'
}, 100)

}).bind();

$('#jsId').on('click', ()=>{
$(M).trigger('changeBg', {
  'foo':'bar',
  'color': 'red',
});
});

```


[更多内容见](http://www.zhangxinxu.com/wordpress/2012/04/js-dom%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6/)
