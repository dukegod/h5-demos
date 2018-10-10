/**
 * Created by hui on 2017/6/14.
 */
const apiConfig = {
  domainUrl: '//btr.m.jd.com',
  ipApi: 'http://192.168.200.237:8005',
  Proxy: '/',
  yufabu: '//xbyfb.m.jd.com',
  jd: '//d.jd.com',
  test: '//btr-test.m.jd.com'
};


let interfaceConfig;
const host = window.location.host;
if (host.indexOf('preb2r.m.jd.com') !== -1) {
  interfaceConfig = apiConfig.yufabu;
} else if (host.indexOf('localhost') !== -1) {
  interfaceConfig = apiConfig.Proxy;
} else if (host.indexOf('b2r-test.m.jd.com') !== -1) {
  interfaceConfig = apiConfig.test;
} else {
  interfaceConfig = apiConfig.domainUrl;
}

export default interfaceConfig;
