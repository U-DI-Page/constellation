import axios from 'axios';
import { setLocalstorage } from './util';

// authorized 认证参数
const APP_CODE = 'APPCODE cd792067c92e406d93b803f9c03c614a';
const BASE_URL = "https://ali-star-lucky.showapi.com";
const TIME_OUT = 3000;
// 默认参数
const defaultParams = {
  needMonth: '1',
  needTomorrow: '1',
  needWeek: '1',
  needYear: '1',
  star: 'shuangzi'
}

// axios 默认配置
// axios.defaults.withCredentials=true;
// axios.defaults.headers.common['credentials']='include';
axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8'

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = TIME_OUT;

// 在拦截器中设置Authorization
axios.interceptors.request.use(
  config=>{
    config.headers['Authorization'] = APP_CODE;
    // 解决get请求不能设置 content-type
    config.data = { unused: 0 };
   return config
  },
  error=>Promise.reject(error)
);



/**get请求
 * 
 * @param {接口地址} url 
 * @param {参数} data 
 */
const apiGet=(url,params={})=>{

  return new Promise((resolve,reject)=>{
          axios.get(url,{
            params:{ ...params, ...defaultParams }
          }).then(response=>{
            resolve(response)
          }).catch(error=>{
            reject(error)
          })
        }).then(res=>{
          if(res.status === 200){
            setLocalstorage('data', res.data.showapi_res_body);
          }
          return res;
        })
}

export default apiGet;