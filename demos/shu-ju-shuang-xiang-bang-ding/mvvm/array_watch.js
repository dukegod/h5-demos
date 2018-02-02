/**
 * Created by hui on 30/01/2018.
 */
var arrProto = Object.create(Array.prototype);
// console.log(arrProto)

['shift', 'unshift', 'push', 'pop', 'slice', 'splice'].forEach(function (method) {
  Object.defineProperty(arrProto, method, {
    value: function () {
      var result = Array.prototype[method].apply(this, arguments);
      console.log('检测数据发生变化');
      return result;
    }
  })
})

var b = [];
b.__proto__ = arrProto;

b.push(1); // 1 '检测数据发生变化'
