webpackHotUpdate("main",{

/***/ "./src/utils/request.js":
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// authorized 认证参数
var APP_CODE = 'APPCODE cd792067c92e406d93b803f9c03c614a';
var BASE_URL = "https://ali-star-lucky.showapi.com";
var TIME_OUT = 3000;
// 默认参数
var defaultParams = {
  needMonth: '1',
  needTomorrow: '1',
  needWeek: '1',
  needYear: '1',
  star: 'shuangzi'

  // axios 默认配置
  // axios.defaults.withCredentials=true;
  // axios.defaults.headers.common['credentials']='include';
  // axios.defaults.headers.get['Content-Type']='application/json';

};_axios2.default.defaults.baseURL = BASE_URL;
_axios2.default.defaults.timeout = TIME_OUT;

// 在拦截器中设置Authorization
_axios2.default.interceptors.request.use(function (config) {
  config.headers['Authorization'] = APP_CODE;
  config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  return config;
}, function (error) {
  return Promise.reject(error);
});

/**get请求
 * 
 * @param {接口地址} url 
 * @param {参数} data 
 */
var apiGet = function apiGet(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _extends({}, defaultParams);


  return new Promise(function (resolve, reject) {

    _axios2.default.get(url, params).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error);
    });
  });
};

exports.default = apiGet;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsIlByb21pc2UiLCJyZWplY3QiLCJlcnJvciIsImFwaUdldCIsInVybCIsInBhcmFtcyIsInJlc29sdmUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsV0FBVywwQ0FBakI7QUFDQSxJQUFNQyxXQUFXLG9DQUFqQjtBQUNBLElBQU1DLFdBQVcsSUFBakI7QUFDQTtBQUNBLElBQU1DLGdCQUFnQjtBQUNwQkMsYUFBVyxHQURTO0FBRXBCQyxnQkFBYyxHQUZNO0FBR3BCQyxZQUFVLEdBSFU7QUFJcEJDLFlBQVUsR0FKVTtBQUtwQkMsUUFBTTs7QUFHUjtBQUNBO0FBQ0E7QUFDQTs7QUFYc0IsQ0FBdEIsQ0FhQUMsZ0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixHQUF5QlYsUUFBekI7QUFDQVEsZ0JBQU1DLFFBQU4sQ0FBZUUsT0FBZixHQUF5QlYsUUFBekI7O0FBRUE7QUFDQU8sZ0JBQU1JLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixDQUNFLGtCQUFRO0FBQ05DLFNBQU9DLE9BQVAsQ0FBZSxlQUFmLElBQWtDakIsUUFBbEM7QUFDQWdCLFNBQU9DLE9BQVAsQ0FBZSxjQUFmLElBQWlDLGlDQUFqQztBQUNELFNBQU9ELE1BQVA7QUFDQSxDQUxILEVBTUU7QUFBQSxTQUFPRSxRQUFRQyxNQUFSLENBQWVDLEtBQWYsQ0FBUDtBQUFBLENBTkY7O0FBV0E7Ozs7O0FBS0EsSUFBTUMsU0FBTyxTQUFQQSxNQUFPLENBQUNDLEdBQUQsRUFBbUM7QUFBQSxNQUE5QkMsTUFBOEIsb0ZBQWxCcEIsYUFBa0I7OztBQUU5QyxTQUFPLElBQUllLE9BQUosQ0FBWSxVQUFDTSxPQUFELEVBQVNMLE1BQVQsRUFBa0I7O0FBRTdCVixvQkFBTWdCLEdBQU4sQ0FBVUgsR0FBVixFQUFjQyxNQUFkLEVBQ01HLElBRE4sQ0FDVyxvQkFBVTtBQUNkRixjQUFRRyxRQUFSO0FBQ0QsS0FITixFQUlNQyxLQUpOLENBSVksaUJBQU87QUFDWlQsYUFBT0MsS0FBUDtBQUNELEtBTk47QUFPRCxHQVRBLENBQVA7QUFVRCxDQVpEOztrQkFjZUMsTSIsImZpbGUiOiJtYWluLjIwN2ZiN2IxY2MxODVjOTM4MDFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBhdXRob3JpemVkIOiupOivgeWPguaVsFxuY29uc3QgQVBQX0NPREUgPSAnQVBQQ09ERSBjZDc5MjA2N2M5MmU0MDZkOTNiODAzZjljMDNjNjE0YSc7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hbGktc3Rhci1sdWNreS5zaG93YXBpLmNvbVwiO1xuY29uc3QgVElNRV9PVVQgPSAzMDAwO1xuLy8g6buY6K6k5Y+C5pWwXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICBuZWVkTW9udGg6ICcxJyxcbiAgbmVlZFRvbW9ycm93OiAnMScsXG4gIG5lZWRXZWVrOiAnMScsXG4gIG5lZWRZZWFyOiAnMScsXG4gIHN0YXI6ICdzaHVhbmd6aSdcbn1cblxuLy8gYXhpb3Mg6buY6K6k6YWN572uXG4vLyBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9dHJ1ZTtcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydjcmVkZW50aWFscyddPSdpbmNsdWRlJztcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuZ2V0WydDb250ZW50LVR5cGUnXT0nYXBwbGljYXRpb24vanNvbic7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBCQVNFX1VSTDtcbmF4aW9zLmRlZmF1bHRzLnRpbWVvdXQgPSBUSU1FX09VVDtcblxuLy8g5Zyo5oum5oiq5Zmo5Lit6K6+572uQXV0aG9yaXphdGlvblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICBjb25maWc9PntcbiAgICBjb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gQVBQX0NPREU7XG4gICAgY29uZmlnLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnO1xuICAgcmV0dXJuIGNvbmZpZ1xuICB9LFxuICBlcnJvcj0+UHJvbWlzZS5yZWplY3QoZXJyb3IpXG4pO1xuXG5cblxuLyoqZ2V06K+35rGCXG4gKiBcbiAqIEBwYXJhbSB75o6l5Y+j5Zyw5Z2AfSB1cmwgXG4gKiBAcGFyYW0ge+WPguaVsH0gZGF0YSBcbiAqL1xuY29uc3QgYXBpR2V0PSh1cmwscGFyYW1zPXsgLi4uZGVmYXVsdFBhcmFtcyB9KT0+e1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgXG4gICAgICAgICAgYXhpb3MuZ2V0KHVybCxwYXJhbXMpXG4gICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcj0+e1xuICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpR2V0OyJdLCJzb3VyY2VSb290IjoiIn0=