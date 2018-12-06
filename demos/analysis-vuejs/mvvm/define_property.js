/**
 * Created by hui on 30/01/2018.
 */

function defineProperty(obj, attr, value) {
  var _value;
  Object.defineProperty(obj, attr, {
    get: function () {
      return _value;
    },
    set: function (val) {
      // 监听到数据发生了变化
      _value = val;
    }
  })
  obj[attr] = value;
}
var data = {};
defineProperty(data, 'name', '数据变化');
console.log(data.name)


