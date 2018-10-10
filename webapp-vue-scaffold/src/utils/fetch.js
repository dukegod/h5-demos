/**
 * Created by hui on 2017/6/14.
 *  数据处理
 */
import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import qs from 'qs';
import baseConfig from './config';
import param2Obj from './urlTjson';
import bus from '../store/bus';
import router from '../router';

Vue.use(Router)


// axios 配置
axios.defaults.timeout = 15000;
axios.defaults.baseURL = baseConfig;

// this.apptoken=this.$getUrl.getUrlKey('apptoken')||'';
// this.uuid=this.$getUrl.getUrlKey('uuid')||'';

// console.log(param2Obj(location.href));

var defaultObj = {
  // apptoken: this.$getUrl.getUrlKey('apptoken')||'',
  // uuid: this.$getUrl.getUrlKey('uuid')||'',
}

// console.log(defaultObj);

/**
 * POST 请求方式
 * @param {string} url     请求URL
 * @param {object} params  请求参数
 * @returns {}
 */
let ua = navigator.userAgent.toLowerCase();
function commValidation(data){
  if(data.code=='E0050'){
    if(ua.indexOf('jdb2r')!= - 1){
      window.location.href='JDB2R://{"code":"login"}';
    }else{
    /*  router.push({
        name: 'loginPage'
      })*/
    }

  }
}

export default {
    // fetchPost
    // 数组转化为 ['aaa','bbb']=>{'aaa','bbb'}
    fetchPostParseArray(url, params) {
      return new Promise((resolve, reject) => {
        axios
          .create({
            withCredentials: true,
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
             // 'Content-Type': 'application/json;charset=utf-8',
             // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            type:'json',
            method: 'POST',
          })
          .post(url, qs.parse(params))
          //.post(url,params)
          .then((response) => {
            // bus.$emit('loadingBus');
            commValidation(response.data);
            // bus.$emit('loadingBus');
            resolve(response.data);
          }, (err) => {
            reject(err);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  // fetchPost  请求方式
  fetchPost(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .create({
          withCredentials: true,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
           // 'Content-Type': 'application/json;charset=utf-8',
           // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          type:'json',
          method: 'POST',
        })
        .post(url, qs.stringify(params))
        //.post(url,params)
        .then((response) => {
          // bus.$emit('loadingBus');
          commValidation(response.data);
          // bus.$emit('loadingBus');
          resolve(response.data);
        }, (err) => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 纯json上传
  fetchPost1(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .create({
          withCredentials: true,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
           'Content-Type': 'application/json;charset=utf-8',
           // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          type:'json',
          method: 'POST',
        })
        .post(url,params)
        //.post(url,params)
        .then((response) => {
          // bus.$emit('loadingBus');
          commValidation(response.data);
          // bus.$emit('loadingBus');
          resolve(response.data);
        }, (err) => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },


 /* fetchPostNew(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .create({
          withCredentials: true,
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            //'Content-Type': 'application/x-www-form-urlencoded',
          },
          type:'json',
          method: 'POST',
        })
        .post(url, qs.stringify(params))
        .then((response) => {
          // bus.$emit('loadingBus');
          commValidation(response.data);
          resolve(response.data);
        }, (err) => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },*/

  // GET 请求方式
  fetchGet(url, params) {
    return new Promise((resolve, reject) => {
      axios.create({
        withCredentials: true,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        type: 'json',
      }).get(url, {
        params,
      })
      .then((response) => {
        // bus.$emit('loadingBus');
        commValidation(response.data);
        resolve(response.data);
      }, (err) => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      });
    });
  }
};
