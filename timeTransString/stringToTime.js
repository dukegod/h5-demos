/**
 * Created by hui on 16/3/22.
 */
'use strict';
function timeTrans(e) {
  var date = new Date(e);
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() + 1 < 10 ? '0' + (date.getDate() + 1) : date.getDate() + 1);
  var da = Y + M + D;
  console.log(da);
  return da;
}

timeTrans();