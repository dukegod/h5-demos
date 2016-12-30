/*
*把时间转化为字符串
*
*/
'use strict';
function dateTostring(){
	var time = new Date('2016-01-01');
	console.log(time.getTime());
	// 另一种方法
	var time2 = new Date()*1;
	console.log(time2);
}
dateTostring();
