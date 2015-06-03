//确定touch事件
//可以在pc上和在手机上转换
//
var dkTouchEvents = {
	touchstart: "touchstart",
	touchmove: "touchmove",
	touchend: "touchend",
	initTouchEvents: function () {
	    if (isPC()) {
	        this.touchstart = "mousedown";
	        this.touchmove = "mousemove";
	        this.touchend = "mouseup";
	        console.log(this);
	    }
	}
};

function isPC(){
	console.log(navigator.appVersion);
	return;
}


function IsPC(){    
     var userAgentInfo = navigator.userAgent;
     console.log(userAgentInfo);
     console.log(navigator.appVersion);
     var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");    
     var flag = true;    
     for (var v = 0; v < Agents.length; v++) {    
         if (userAgentInfo.indexOf(Agents[v]) > 0) {
         	flag = false; break;
         }
     }    
     return flag;    
  }  


//判断是否是移动或是web
 var browser={  
    versions:function(){   
       var u = navigator.userAgent, 
       app = navigator.appVersion;
       return {
       		//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核  
            presto: u.indexOf('Presto') > -1, //opera内核  
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器  
            iPad: u.indexOf('iPad') > -1, //是否iPad    
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
        };  
     }(),  
    language:(navigator.browserLanguage || navigator.language).toLowerCase()  
}   
  
  if(browser.versions.mobile || browser.versions.ios || browser.versions.android ||   
    browser.versions.iPhone || browser.versions.iPad){
    	console.log("移动设备")
        window.location = "#";      
  }else{
  	console.log("web application");
  }


//滑动事件

var slideFunc= function(){
	//全局变量，触摸开始位置  
    var startX = 0, startY = 0;  
    //touchstart事件  
    function touchSatrtFunc(evt) {  
        try  
        {  
            evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
            var touch = evt.touches[0]; //获取第一个触点  
            var x = Number(touch.pageX); //页面触点X坐标  
            var y = Number(touch.pageY); //页面触点Y坐标  
            //记录触点初始位置  
            startX = x;  
            startY = y;  
            var text = 'TouchStart事件触发：（' + x + ', ' + y + '）';  
            document.getElementById("result").innerHTML = text;  
        }  
        catch (e) {  
            alert('touchSatrtFunc：' + e.message);  
    	}  
  }
    //touchmove事件，这个事件无法获取坐标  
    function touchMoveFunc(evt) {  
        try  
        {  
            //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
            var touch = evt.touches[0]; //获取第一个触点  
            var x = Number(touch.pageX); //页面触点X坐标  
            var y = Number(touch.pageY); //页面触点Y坐标  
            var text = 'TouchMove事件触发：（' + x + ', ' + y + '）';  
                    //判断滑动方向  
            if (x - startX != 0) {  
                text += '<br/>左右滑动';  
            }  
            if (y - startY != 0) {  
                text += '<br/>上下滑动';  
            }  
            document.getElementById("result").innerHTML = text;  
        }  
        catch (e) {  
            alert('touchMoveFunc：' + e.message);  
                }  
            }  
  
            //touchend事件  
    function touchEndFunc(evt) {  
        try {  
            //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
            var text = 'TouchEnd事件触发';  
            document.getElementById("result").innerHTML = text;  
        }  
        catch (e) {  
            alert('touchEndFunc：' + e.message);  
         }  
       }  
  
            //绑定事件  
    function bindEvent() {  
        document.addEventListener('touchstart', touchSatrtFunc, false);  
        document.addEventListener('touchmove', touchMoveFunc, false);  
        document.addEventListener('touchend', touchEndFunc, false);  
            }  
            //判断是否支持触摸事件  
    function isTouchDevice() {  
        document.getElementById("version").innerHTML = navigator.appVersion;
        try {  
            document.createEvent("TouchEvent");  
//          alert("支持触摸事件 ！");  
             bindEvent(); //绑定事件  
        }  
        catch (e) {  
//          alert("不支持触摸事件 ！" + e.message);  
        }  
    } 
    isTouchDevice();
}






















