import { render } from './lib/render';
import source from './lib/source';

// 读取模板信息
function autoLocation(params) {
    source(params).then(re=>{
        return re.text();
    }).then(re => {
        // console.log(re);
        const app = document.getElementById('app');
        app.innerHTML = '';
        app.innerHTML = render(re);
    });    
}

// 事件监听
const li = document.getElementsByTagName('li');
Array.from(li).forEach( function(e) {
    e.addEventListener('click',  function(params) {
        const md = this.getAttribute('data-md');
        autoLocation(md)
    }, false)
})

//  加载默认页面
autoLocation('intro.md');

