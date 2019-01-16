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
};_axios2.default.defaults.headers.common['Content-Type'] = 'application/json';

_axios2.default.defaults.baseURL = BASE_URL;
_axios2.default.defaults.timeout = TIME_OUT;
_axios2.default.defaults.headers.common['Authorization'] = APP_CODE;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiYXBpR2V0IiwidXJsIiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxXQUFXLDBDQUFqQjtBQUNBLElBQU1DLFdBQVcsb0NBQWpCO0FBQ0EsSUFBTUMsV0FBVyxJQUFqQjtBQUNBO0FBQ0EsSUFBTUMsZ0JBQWdCO0FBQ3BCQyxhQUFXLEdBRFM7QUFFcEJDLGdCQUFjLEdBRk07QUFHcEJDLFlBQVUsR0FIVTtBQUlwQkMsWUFBVSxHQUpVO0FBS3BCQyxRQUFNOztBQUdSO0FBQ0E7QUFDQTtBQVZzQixDQUF0QixDQVdBQyxnQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixDQUE4QixjQUE5QixJQUE4QyxrQkFBOUM7O0FBRUFILGdCQUFNQyxRQUFOLENBQWVHLE9BQWYsR0FBeUJaLFFBQXpCO0FBQ0FRLGdCQUFNQyxRQUFOLENBQWVJLE9BQWYsR0FBeUJaLFFBQXpCO0FBQ0FPLGdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlEWixRQUFqRDs7QUFFQTs7Ozs7QUFLQSxJQUFNZSxTQUFPLFNBQVBBLE1BQU8sQ0FBQ0MsR0FBRCxFQUFtQztBQUFBLE1BQTlCQyxNQUE4QixvRkFBbEJkLGFBQWtCOzs7QUFFOUMsU0FBTyxJQUFJZSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQWtCOztBQUU3Qlgsb0JBQU1ZLEdBQU4sQ0FBVUwsR0FBVixFQUFjQyxNQUFkLEVBQ01LLElBRE4sQ0FDVyxvQkFBVTtBQUNkSCxjQUFRSSxRQUFSO0FBQ0QsS0FITixFQUlNQyxLQUpOLENBSVksaUJBQU87QUFDWkosYUFBT0ssS0FBUDtBQUNELEtBTk47QUFPRCxHQVRBLENBQVA7QUFVRCxDQVpEOztrQkFjZVYsTSIsImZpbGUiOiJtYWluLjM4M2ViYjM1MjJkNmJmYmUwMGY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBhdXRob3JpemVkIOiupOivgeWPguaVsFxuY29uc3QgQVBQX0NPREUgPSAnQVBQQ09ERSBjZDc5MjA2N2M5MmU0MDZkOTNiODAzZjljMDNjNjE0YSc7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hbGktc3Rhci1sdWNreS5zaG93YXBpLmNvbVwiO1xuY29uc3QgVElNRV9PVVQgPSAzMDAwO1xuLy8g6buY6K6k5Y+C5pWwXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICBuZWVkTW9udGg6ICcxJyxcbiAgbmVlZFRvbW9ycm93OiAnMScsXG4gIG5lZWRXZWVrOiAnMScsXG4gIG5lZWRZZWFyOiAnMScsXG4gIHN0YXI6ICdzaHVhbmd6aSdcbn1cblxuLy8gYXhpb3Mg6buY6K6k6YWN572uXG4vLyBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9dHJ1ZTtcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydjcmVkZW50aWFscyddPSdpbmNsdWRlJztcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydDb250ZW50LVR5cGUnXT0nYXBwbGljYXRpb24vanNvbic7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBCQVNFX1VSTDtcbmF4aW9zLmRlZmF1bHRzLnRpbWVvdXQgPSBUSU1FX09VVDtcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSBBUFBfQ09ERTtcblxuLyoqZ2V06K+35rGCXG4gKiBcbiAqIEBwYXJhbSB75o6l5Y+j5Zyw5Z2AfSB1cmwgXG4gKiBAcGFyYW0ge+WPguaVsH0gZGF0YSBcbiAqL1xuY29uc3QgYXBpR2V0PSh1cmwscGFyYW1zPXsgLi4uZGVmYXVsdFBhcmFtcyB9KT0+e1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgXG4gICAgICAgICAgYXhpb3MuZ2V0KHVybCxwYXJhbXMpXG4gICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcj0+e1xuICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpR2V0OyJdLCJzb3VyY2VSb290IjoiIn0=