// 接受来自主线程的数据
const obj = {
  top: null,
  bot: null
};

onmessage = function (e) {
  console.log(e);
  const data = e.data;


  Object.assign(obj, e.data);
  console.log(obj);


  if (obj && !obj.top) {
    postMessage({
      error: 'error number'
    })
  }

  if (obj && !obj.bot) {
    postMessage({
      error: 'error number'
    })
  }

  postMessage({
    top: parseInt(obj.top, 10),
    bot: parseInt(obj.bot, 10)
  })
};

onerror = function (e) {
  console.log(e)
};
