/*
@移动端点击出现模拟网页hover效果
@dukegod
@2016年01月19日

使用说明：
bgcolor：控制显示hover背景颜色,默认为蓝色
timeLasting：控制点击持续的时间，默认为20毫秒
*/
;
(function($) {
	$.fn.addhover = function(options) {
		var defauts = {
			bgcolor: 'blue',
			timeLasting: '20'
		}
		if (options) {
			$.extend(defauts, options);
		}
		var $el = this;
		var events = 'ontouchstart' in window ? ['touchstart', 'touchmove touchend touchcancel'] : ['mousedown', 'mousemove mouseup'];
		var timer;
		var start = function() {
			if (timer) {
				return false;
			}
			timer = window.setTimeout(function() {
				$el.css('background-color', defauts.bgcolor);
			}, 5)
		}

		var stop = function() {
			window.clearTimeout(timer);
			timer = null;
			setTimeout(function() {
				$el.css('background-color', '');
			}, defauts.timeLasting)
		}
		$el.on(events[0], start);
		$el.on(events[1], stop);
	}
})(jQuery)