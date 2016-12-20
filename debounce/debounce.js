/**
 * Created by hui on 16/11/24.
 */

function debounce(method, context) {
  var timer = null;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      console.log(context);
      console.log(method);
      method.call(context);
    }, 1000);
  }
}

function print() {
  console.log(arguments)
  document.getElementById('id').innerText = 'hello world';
  console.log('hello world');
}

window.onscroll = debounce(print,999);
