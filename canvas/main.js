const DOM_ID = document.getElementById('uniqueID');
const DOM_WIN = window;

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
  };
};

class Cvan {
  constructor(DOM) {
    this.DOM = DOM;
    this.cwidth = null;
    this.cheight = null;
    this.cxt = DOM.getContext('2d');
    this.resizeViewport();
    this.creatText();

    DOM_WIN.addEventListener(
      'resize',
      throttle(this.resizeViewport.bind(this), 1000),
      false
    );
  }
  resizeViewport() {
    const self = this;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    self.DOM.width = vw;
    self.DOM.height = vh;
    self.cwidth = vw;
    self.cheight = vh;

    console.log(vw);
  } 
  creatText() {
    this.cxt.font = '50px';
    this.cxt.textAlign = 'center';
    this.cxt.fillText('canvas', this.cwidth/2.2, this.cheight/2.2, this.cwidth)
  }
}

const cvan = new Cvan(DOM_ID);
