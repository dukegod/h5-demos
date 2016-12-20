/**
 * Created by hui on 16/7/19.
 */
'use strict';

window.page = sessionStorage.getItem('currentPage') || 0;
// 封装数据请求
function req(options) {
    defaultOptions = {
      type: "get",
      dataType: 'json',
      data: {}
    };
  options.url && /^\/(?!\/)/.test(options.url) && (options.url = host + options.url);
  $.ajax($.extend(true, defaultOptions, options));
}


// 加载数据
var flag = true;
function getListData() {
  window.page++;
  if (!flag) {
    return false;
  }
  sessionStorage.setItem('currentPage',window.page);
  // 我们就加载8页,多了就不加载了
  if (window.page > 8) {
    sessionStorage.setItem('currentPage',8);
    return false;
  }

  flag = false;

  var bodyParam = {
    "accesstoken": "a741a992-9ad5-4319-bbde-8f16996a9ad7",
    "page": "" + window.page + "",
    "limit": "5"
  };
  var options = {
    url: '/',
    data: bodyParam,
    success: function (data) {
      console.log(data.data);
      if (data && data.data) {
        if (sessionStorage.getItem('localDate')) {
          var localDate = sessionStorage.getItem('localDate').replace(/\]$/, "");
          sessionStorage.setItem('localDate', localDate + ',' + JSON.stringify(data.data).replace(/^\[/, ""));
        } else {
          var locSet = JSON.stringify(data.data);
          sessionStorage.setItem('localDate', locSet);
        }
        // 引用doT模板

        var adsText = doT.template($("#pageTemplate").text());
        $("#page").append(adsText(data.data));
        flag = true;

      } else {
        alert('error');
      }
    }
  };
  
  req(options);
};


//  读取缓存信息
function readLocal() {
  setTimeout(function() {
    var adsText = doT.template($("#pageTemplate").text());
    var ssh = JSON.parse(sessionStorage.getItem('localDate'));
    console.log('ssh----',ssh);
    $("#page").html(adsText(ssh));
    $("#page").scrollTop(parseInt(sessionStorage.getItem('scrollTop_n')));
  }, 20);
}


if(sessionStorage.getItem('localDate')){
  readLocal();
}else{
  getListData();
}

var timer = null;
document.addEventListener('scroll', function() {
  var eventHeight = document.documentElement.clientHeight;
  var scrollTop = document.body.scrollTop;
  var scrollHeight = document.body.scrollHeight;

  if (typeof timer === 'number') {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    //添加onscroll事件处理
    if (scrollTop > 0 && (scrollTop + eventHeight + 20) > scrollHeight) {
      console.log('eventHeight:'+ eventHeight + 'scrollTop:' + scrollTop + 'scrollHeight:' + scrollHeight);
      getListData();
    }
  }, 100);
}, false);


window.onload = function(){
  $('li').on('click',function(e){
    e.preventDefault();
    alert(222);
    window.location.href="detail.html";
    sessionStorage.setItem('scrollTop_n', $("body").scrollTop());
  })
  
}

