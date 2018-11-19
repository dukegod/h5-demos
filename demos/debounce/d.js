/**
 * Created by hui on 2017/6/14.
 */

const debounce = (fn, last) => {
  let timeout;

  // 这个地方一定要通过函数返回，通过箭头函数丢失context上下文
  return function() {
    const functionCall = () => fn.apply(this, arguments);
    
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, last);
  }
}

/**
 * 不断的生成异步队列，不断的删除，只留下最后一个setTimeout函数
 */
