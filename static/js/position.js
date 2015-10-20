
// retrive data
;function Getwin(e){
	var H = document.documentElement.offsetWidth;
	console.log(H);
	var a = document.getElementById('btn');
	var fix = document.getElementById('fix');
	console.log(getStyle(fix));
	
	console.log(fix.className);
	console.log(fix.style.height);
	a.addEventListener('click',function(){
		console.log('222');
		var f = fix.style;
		console.log(f);
		if(f == 'none'){
			fix.style.display == 'block';
		}else{
			fix.style.display == 'block';
		}
	},false);
}
Getwin();

// 获取js的css属性
// 只有在页面中的style才可以直接 输出 ele.style.CSSproperty
// 可以直接在 用js 设置页面的样式
function getStyle(ele){
	var style;
	if(window.getComputedStyle){
		style = window.getComputedStyle(ele,null);
	}else{
		style = ele.currentStyle;
	}
	return style;
}

//
//
//





