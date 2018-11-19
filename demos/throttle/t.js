/**
 * 
 * @param {*} fun 传入的函数
 * @param {*} last 延迟时间
 */

// const throttle = (fun, last) => {
//   let previous, timer;
//   previous = null;
//   timer = null;

//   return () => {
//     let now = new Date()*1;
//     if (!previous) {
//       previous = now;
//     }
//     // console.log( '间隔时间' + (now -previous));
//     if (now -previous > last) {
//       timer = setTimeout(() => {
//         fun();  
//       }, last);
//       timer = null;
//       previous = now;
//     } 
//   };
// };


const throttle = (fn, last) => {
  let timeout;
  let previous;

  // 这个地方一定要通过函数返回，通过箭头函数丢失context上下文
  return function() {
    const _now = new Date() * 1;
    const functionCall = () => fn.apply(this, arguments);

    if (!previous) {
      previous = _now;
    }

    if (_now - previous > last) {
      timeout = null;
      previous = _now;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(functionCall, last);  
    }
  }
}

/**
 * 原理说明：
 * 
 * 定义一个时间，通过闭包保存内外时间的差别
 * 只有到时间大于我们设置的分割时间，进入到setTimeout函数进行执行，
 * 执行完毕以后；
 * 把全局的时间更新，
 * setTimeout置为null
 */ 
