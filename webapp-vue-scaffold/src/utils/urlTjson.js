/**
 * Created by hui on 2017/8/31.
 * 解析url字符串为json对象
 */
export default function param2Obj(url) {
  const search = url.split('?')[1];
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}
