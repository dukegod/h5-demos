/**
 * Created by hui on 16/3/29.
 */
;
(function($){
  $.fn.moving = function(a){
    var doc = $(document);
    console.log(doc);
    var docH = doc.height();
    var docW = doc.width();
    console.log('docH',docH);
    console.log('docw',docW);
    var $MB = $('#MovBlock');
    var $MBH = $MB.height();
    var $MBW = $MB.width();
    console.log('$MBH',$MBH);
    console.log('$MBW',$MBW);
    var top = $MB.css('top').replace(/[^0-9]/ig,"");
    var left = $MB.css('left').replace(/[^0-9]/ig,"");
    console.log('top:left',top,left)

    Init();

    function Init(){
      this.a = top;
      this.b = left;
      this.startM();
      this.Moving();
      console.log(this);
    }
    Init.prototype.startM = function(){
      console.log('kaishi');
      //$MB.css({
      //  top: this.x,
      //  left: this.y
      //});
    }
    Init.prototype.Moving = function(){
      var that = this;
      var ts = function(e){
        e.preventDefault();
        var touch = e.touches[0];
        var x = Number(touch.pageX);
        var y = Number(touch.pageY);
        that.x = x;
        that.y = y;
        console.log('that.x:that.y',that.x,that.y);
      };
      var tm = function(e){
        e.preventDefault();
        var touchm = e.touches[0];
        var mx = touchm.pageX;
        var my = touchm.pageY;
        console.log('moving--',mx,my);
      };
      var te = function(){
        console.log('end');
      };
      $MB.addEventListener('touchstart',ts,false);
      $MB.addEventListener('touchmove',tm,false);
      $MB.addEventListener('touchend',te,false);
    };
  };
})(jQuery)

