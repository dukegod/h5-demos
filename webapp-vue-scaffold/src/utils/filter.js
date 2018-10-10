/**
 * 2017年09月07日15:48:38
 *  金钱格式化为小数点后两位
 * @returns {*|string}
 */
export function moneyTofixed(e) {
  if (e != '') {
    return e.toFixed(2)
  }
}
