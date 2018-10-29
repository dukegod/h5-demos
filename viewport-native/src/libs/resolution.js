/**
 * 动态修改META
 */

  var W = window;
  var R = window.reslut || (window.resolution = {});
  var i = 0,
  initScale = 0,
  doc = W.document,
  html = doc.documentElement,
  dpr = W.devicePixelRatio ? Math.floor(W.devicePixelRatio) : 1,
  x = (W.navigator.appVersion.match(/android/gi), W.navigator.appVersion.match(/iphone/gi)),
  i = x ? dpr >= 3 && (!i || i >= 3) ? 3 : dpr >= 2 && (!i || i >= 2) ? 2 : 1 : 1,
  dpr = i,
  initScale = (1 / dpr),
  metaViewport = document.querySelector('meta[name="viewport"]'),
  timer,
  setRootREM = function (width) {
    var htmlWidth = html.getBoundingClientRect().width || W.innerWidth;
    htmlWidth / dpr > 540 && (htmlWidth = 540 * dpr);
    console.log(`dpr-dpr , ${dpr, htmlWidth}`)
    var fontSize = htmlWidth / 10;
    // html.style.width = htmlWidth + "px";
    html.style.fontSize = fontSize + "px";
    html.setAttribute('data-dpr', dpr);
    R.rem = window.rem = fontSize;
  };
  metaViewport && (metaViewport.remove ? metaViewport.remove() : metaViewport.parentElement.removeChild(metaViewport));
  metaViewport = doc.createElement("meta");
  metaViewport.setAttribute("name", "viewport");
  metaViewport.setAttribute("content", "width=device-width, initial-scale=" + initScale + ", maximum-scale=" + initScale + ", minimum-scale=" + initScale + ", user-scalable=no");
  if (html.firstElementChild) {
    html.firstElementChild.appendChild(metaViewport)
  } else {
    var div = doc.createElement("div");
    div.appendChild(metaViewport),
    doc.write(div.innerHTML)
  }
  W.addEventListener('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(setRootREM, 300);
  });
  W.addEventListener('pageshow', function (e) {
    e.persisted && (clearTimeout(timer), timer = setTimeout(setRootREM, 300))
  });
  if ("complete" === doc.readyState) {
    //doc.body.style.fontSize = 14 * dpr + "px";
    doc.body.style.display = '';
  } else {
    doc.addEventListener("DOMContentLoaded", function () {
      //doc.body.style.fontSize = 14 * dpr + "px";
      doc.body.style.display = '';
    }, !1);
  }
  setRootREM();
  // R.dpr = dpr,
  // R.refreshRem = setRootREM,
  // R.rem2px = function (d) {
  //   var c = parseFloat(d) * this.rem;
  //   return "string" == typeof d && d.match(/rem$/) && (c += "px"),
  //   c
  // },
  // R.px2rem = function (d) {
  //   var c = parseFloat(d) / this.rem;
  //   return "string" == typeof d && d.match(/px$/) && (c += "rem"),
  //   c
  // }

