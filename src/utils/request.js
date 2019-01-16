import axios from 'axios';

// authorized 认证参数
const APP_CODE = 'APPCODE cd792067c92e406d93b803f9c03c614a';
// 默认参数
const defaultParams = {
  needMonth: '1',
  needTomorrow: '1',
  needWeek: '1',
  needYear: '1',
  star: 'shuangzi'
}

axios.defaults.baseURL = "https://ali-star-lucky.showapi.com/star";
axios.defaults.timeout = 3000;
axios.defaults.headerts.common['Authorization'] = APP_CODE;

/**get请求
 * 
 * @param {接口地址} url 
 * @param {参数} data 
 */
const apiGet=(url,params={ ...defaultParams })=>{

  return new Promise((resolve,reject)=>{
    
          axios.get(url,params)
               .then(response=>{
                 resolve(response)
               })
               .catch(error=>{
                 reject(error)
               })
        });
}

export default apiGet;