/*
 * Created by hui on 16/3/29.
 */
(function(){
  'use strict';
  var docH,
      docW;

  docH = $(window).height();
  docW = $(window).width();
  function ObjectBlock(opt){
    this.obj = opt;
    this.h = opt.height();
    this.w = opt.width(); 
    this.init();
  }
  ObjectBlock.prototype.init = function(){
    var that = this;
    console.log(this.obj[0]);
    var 
      startTime,
      startX,
      startY;
    // touchstart 
    var ts = function(e){
      e.preventDefault();
      startTime = new Date()*1;
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      startX = x;
      startY = y;
      console.log('start',startX,startY);
      // console.log(this);
      // console.log(that);
     };
    var tm = function(e){
      e.preventDefault();
      var x = e.touches[0].pageX;
      var y = e.touches[0].pageY;
      that.obj.css({
        'top': x,
        'left': y
      });
      console.log('touchemove',x,y);
    };
    var te = function(e){
      e.preventDefault();
      var endTime = new Date()*1;
      console.log(endTime - startTime);
    };

    this.obj[0].addEventListener('touchstart', ts, false); 
    this.obj[0].addEventListener('touchmove', tm, false); 
    this.obj[0].addEventListener('touchend', te, false); 
    console.log(that.obj[0]);
  };

  new ObjectBlock($('#MovBlock'));    

})(Zepto);



