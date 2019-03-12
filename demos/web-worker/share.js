// 接受来自主线程的数据
const obj = {
  top: null,
  bot: null
};
onconnect = function (e) {

  // console.log(`来自 主线程 work。js的消息, ${JSON.stringify(e)}`)
  const port = e.ports[0];
  console.log(port)
  port.onmessage = function (e) {
    console.log(`来自 主线程 work。js的消息, ${JSON.stringify(e)}`)
    const data = e.data;


    Object.assign(obj, e.data);
    console.log(obj);


    if (obj && !obj.top) {
      port.postMessage({
        error: 'error number'
      })
    }

    if (obj && !obj.bot) {
      port.postMessage({
        error: 'error number'
      })
    }

    port.postMessage({
      top: parseInt(obj.top, 10),
      bot: parseInt(obj.bot, 10)
    })
  };
};
