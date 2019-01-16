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
};Axios.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8';

_axios2.default.defaults.baseURL = BASE_URL;
_axios2.default.defaults.timeout = TIME_OUT;

// 在拦截器中设置Authorization
_axios2.default.interceptors.request.use(function (config) {
  config.headers['Authorization'] = APP_CODE;
  config.data = { unused: 0 };
  // config.headers['Content-Type'] = 'application/json; charset=UTF-8';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJBeGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImdldCIsImF4aW9zIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiZGF0YSIsInVudXNlZCIsIlByb21pc2UiLCJyZWplY3QiLCJlcnJvciIsImFwaUdldCIsInVybCIsInBhcmFtcyIsInJlc29sdmUiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsV0FBVywwQ0FBakI7QUFDQSxJQUFNQyxXQUFXLG9DQUFqQjtBQUNBLElBQU1DLFdBQVcsSUFBakI7QUFDQTtBQUNBLElBQU1DLGdCQUFnQjtBQUNwQkMsYUFBVyxHQURTO0FBRXBCQyxnQkFBYyxHQUZNO0FBR3BCQyxZQUFVLEdBSFU7QUFJcEJDLFlBQVUsR0FKVTtBQUtwQkMsUUFBTTs7QUFHUjtBQUNBO0FBQ0E7QUFWc0IsQ0FBdEIsQ0FXQUMsTUFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxHQUF2QixDQUEyQixjQUEzQixJQUE2QyxnQ0FBN0M7O0FBRUFDLGdCQUFNSCxRQUFOLENBQWVJLE9BQWYsR0FBeUJiLFFBQXpCO0FBQ0FZLGdCQUFNSCxRQUFOLENBQWVLLE9BQWYsR0FBeUJiLFFBQXpCOztBQUVBO0FBQ0FXLGdCQUFNRyxZQUFOLENBQW1CQyxPQUFuQixDQUEyQkMsR0FBM0IsQ0FDRSxrQkFBUTtBQUNOQyxTQUFPUixPQUFQLENBQWUsZUFBZixJQUFrQ1gsUUFBbEM7QUFDQW1CLFNBQU9DLElBQVAsR0FBYyxFQUFFQyxRQUFRLENBQVYsRUFBZDtBQUNBO0FBQ0QsU0FBT0YsTUFBUDtBQUNBLENBTkgsRUFPRTtBQUFBLFNBQU9HLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUFQO0FBQUEsQ0FQRjs7QUFZQTs7Ozs7QUFLQSxJQUFNQyxTQUFPLFNBQVBBLE1BQU8sQ0FBQ0MsR0FBRCxFQUFtQztBQUFBLE1BQTlCQyxNQUE4QixvRkFBbEJ4QixhQUFrQjs7O0FBRTlDLFNBQU8sSUFBSW1CLE9BQUosQ0FBWSxVQUFDTSxPQUFELEVBQVNMLE1BQVQsRUFBa0I7O0FBRTdCVixvQkFBTUQsR0FBTixDQUFVYyxHQUFWLEVBQWNDLE1BQWQsRUFDTUUsSUFETixDQUNXLG9CQUFVO0FBQ2RELGNBQVFFLFFBQVI7QUFDRCxLQUhOLEVBSU1DLEtBSk4sQ0FJWSxpQkFBTztBQUNaUixhQUFPQyxLQUFQO0FBQ0QsS0FOTjtBQU9ELEdBVEEsQ0FBUDtBQVVELENBWkQ7O2tCQWNlQyxNIiwiZmlsZSI6Im1haW4uNGIzOTliNGY4ZGM1NmVmZTAyMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIGF1dGhvcml6ZWQg6K6k6K+B5Y+C5pWwXG5jb25zdCBBUFBfQ09ERSA9ICdBUFBDT0RFIGNkNzkyMDY3YzkyZTQwNmQ5M2I4MDNmOWMwM2M2MTRhJztcbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FsaS1zdGFyLWx1Y2t5LnNob3dhcGkuY29tXCI7XG5jb25zdCBUSU1FX09VVCA9IDMwMDA7XG4vLyDpu5jorqTlj4LmlbBcbmNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gIG5lZWRNb250aDogJzEnLFxuICBuZWVkVG9tb3Jyb3c6ICcxJyxcbiAgbmVlZFdlZWs6ICcxJyxcbiAgbmVlZFllYXI6ICcxJyxcbiAgc3RhcjogJ3NodWFuZ3ppJ1xufVxuXG4vLyBheGlvcyDpu5jorqTphY3nva5cbi8vIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscz10cnVlO1xuLy8gYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ2NyZWRlbnRpYWxzJ109J2luY2x1ZGUnO1xuQXhpb3MuZGVmYXVsdHMuaGVhZGVycy5nZXRbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCdcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IEJBU0VfVVJMO1xuYXhpb3MuZGVmYXVsdHMudGltZW91dCA9IFRJTUVfT1VUO1xuXG4vLyDlnKjmi6bmiKrlmajkuK3orr7nva5BdXRob3JpemF0aW9uXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gIGNvbmZpZz0+e1xuICAgIGNvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBBUFBfQ09ERTtcbiAgICBjb25maWcuZGF0YSA9IHsgdW51c2VkOiAwIH07XG4gICAgLy8gY29uZmlnLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnO1xuICAgcmV0dXJuIGNvbmZpZ1xuICB9LFxuICBlcnJvcj0+UHJvbWlzZS5yZWplY3QoZXJyb3IpXG4pO1xuXG5cblxuLyoqZ2V06K+35rGCXG4gKiBcbiAqIEBwYXJhbSB75o6l5Y+j5Zyw5Z2AfSB1cmwgXG4gKiBAcGFyYW0ge+WPguaVsH0gZGF0YSBcbiAqL1xuY29uc3QgYXBpR2V0PSh1cmwscGFyYW1zPXsgLi4uZGVmYXVsdFBhcmFtcyB9KT0+e1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgXG4gICAgICAgICAgYXhpb3MuZ2V0KHVybCxwYXJhbXMpXG4gICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcj0+e1xuICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpR2V0OyJdLCJzb3VyY2VSb290IjoiIn0=