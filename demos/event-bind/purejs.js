/**
 * Created by hui on 2017/7/26.
 */

const hello = 'hello event';
document.title = hello;
/**
 *  第一种解决方案
 *  创建： document.createEvent()，
 *  init： event.initEvent(事件，冒泡，是否阻止事件的默认操作)，
 *  触发： element.dispatchEvent()
 */

const EVENT = document.createEvent('HTMLEvents');
EVENT.initEvent('changeBg', false, false);

// 按钮1
const jsId = document.getElementById('jsId');
const jsId2 = document.getElementById('jsId2');

// section
const sectionId = document.getElementById('sectionId');

sectionId.addEventListener('changeBg', (e)=>{
  console.log(e);
  e.target.innerText= '';
  
  setTimeout(()=>{
    e.target.style.backgroundColor= 'red';
    e.target.style.color = 'black';
    e.target.style.opacity= 0.5;
    e.target.innerText = 'change my bgcolor and font color'
  }, 100)
  
},false);
jsId.addEventListener('click', ()=>{
  sectionId.dispatchEvent(EVENT);
}, false);
jsId2.addEventListener('click', ()=>{
  sectionId.dispatchEvent(EVENT);
}, false);
// jsId.dispatchEvent('changeBg');
