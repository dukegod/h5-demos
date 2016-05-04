/**
 * Created by hui on 16/3/29.
 */
function movingBlock() {
  'use strict';
  var doc = $(document);
  var docH =doc.height();
  console.log('docH',docH);
  var $MB = $('#MovBlock');
  var $MBH = $MB.height();
  var bottom = $MB.css('bottom').replace(/[^0-9]/ig, "");

  var startY = 0;
  var starTime;

  var ts = function (e) {
    e.preventDefault();
    var touch = e.touches[0];
    var y = Number(touch.pageY);
    startY = y;
    console.log('that.x:that.y', startY);

    starTime = new Date()*1;
  };
  var tm = function (e) {
    e.preventDefault();
    var touchm = e.touches[0];
    var my = touchm.pageY;
    var movimg = my - startY;
    $('#MovBlock').css({
      top: my + 'px'
    });

  };
  var te = function (e) {
    e.preventDefault();
    console.log('end');
    console.log('mv');
    console.log('movimg');
    var endTIme = new Date()*1;

    console.log('stim',starTime);
    console.log('endtim',endTIme);
    var time = endTIme - starTime;
    console.log(time);

    var top = $MB.css('top').replace(/[^0-9]/ig, "");
    if (Math.abs(top)>=0 && Math.abs(top)<=2){
      location.href="cart.html";
    }else if( time >= 0 && time <= 80){
      location.href="cart.html";
    }
  };
  $MB[0].addEventListener('touchstart', ts, false);
  $MB[0].addEventListener('touchmove', tm, false);
  $MB[0].addEventListener('touchend', te, false);
}
movingBlock();
