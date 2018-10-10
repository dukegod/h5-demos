// 设置动态的dpr

function dpr() {
  const dp = window.devicePixelRatio
  const scale = 1 / dp;
  console.log(`dpr----${dp}`)
  document
    .querySelector('meta[name="viewport"]')
    .setAttribute(
      'content',
      'width=device-width, initial-scale=' + scale + ', user-scalable=no'
    );
}
dpr();

function rootFont() {
  const rootsize = document.documentElement.clientWidth / 10 + 'px';
  console.log(`rootsize-----${rootsize}`)
  document.documentElement.style.fontSize = rootsize;
}
rootFont()
