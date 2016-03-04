/*
 *@dukegod
 *获取css样式
 */
'use strict';
// ele 为你输入的style，e为具体的样式
function getStyle(ele, e) {
	var style = null;
	// 判断浏览器是不是支持
	if (window.getComputedStyle) {
		style = window.getComputedStyle(ele, null).getPropertyValue(e);
	} else {
		style = ele.currentStyle.getPropertyCSSValue(e);
	}
	return style;
}	