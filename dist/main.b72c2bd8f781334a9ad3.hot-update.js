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

var _util = __webpack_require__(/*! ./util */ "./src/utils/util.js");

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
};_axios2.default.defaults.headers.get['content-type'] = 'application/json;charset=UTF-8';

_axios2.default.defaults.baseURL = BASE_URL;
_axios2.default.defaults.timeout = TIME_OUT;

// 在拦截器中设置Authorization
_axios2.default.interceptors.request.use(function (config) {
  config.headers['Authorization'] = APP_CODE;
  // 解决get请求不能设置 content-type
  config.data = { unused: 0 };
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
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  return new Promise(function (resolve, reject) {
    _axios2.default.get(url, {
      params: _extends({}, params, defaultParams)
    }).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error);
    });
  }).then(function (res) {
    if (res.status === 200) {
      (0, _util.setLocalstorage)('data', res.data.showapi_res_body);
    }
    return res;
  });
};

exports.default = apiGet;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImdldCIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImRhdGEiLCJ1bnVzZWQiLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJhcGlHZXQiLCJ1cmwiLCJwYXJhbXMiLCJyZXNvbHZlIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJyZXMiLCJzdGF0dXMiLCJzaG93YXBpX3Jlc19ib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxXQUFXLDBDQUFqQjtBQUNBLElBQU1DLFdBQVcsb0NBQWpCO0FBQ0EsSUFBTUMsV0FBVyxJQUFqQjtBQUNBO0FBQ0EsSUFBTUMsZ0JBQWdCO0FBQ3BCQyxhQUFXLEdBRFM7QUFFcEJDLGdCQUFjLEdBRk07QUFHcEJDLFlBQVUsR0FIVTtBQUlwQkMsWUFBVSxHQUpVO0FBS3BCQyxRQUFNOztBQUdSO0FBQ0E7QUFDQTtBQVZzQixDQUF0QixDQVdBQyxnQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxHQUF2QixDQUEyQixjQUEzQixJQUE2QyxnQ0FBN0M7O0FBRUFILGdCQUFNQyxRQUFOLENBQWVHLE9BQWYsR0FBeUJaLFFBQXpCO0FBQ0FRLGdCQUFNQyxRQUFOLENBQWVJLE9BQWYsR0FBeUJaLFFBQXpCOztBQUVBO0FBQ0FPLGdCQUFNTSxZQUFOLENBQW1CQyxPQUFuQixDQUEyQkMsR0FBM0IsQ0FDRSxrQkFBUTtBQUNOQyxTQUFPUCxPQUFQLENBQWUsZUFBZixJQUFrQ1gsUUFBbEM7QUFDQTtBQUNBa0IsU0FBT0MsSUFBUCxHQUFjLEVBQUVDLFFBQVEsQ0FBVixFQUFkO0FBQ0QsU0FBT0YsTUFBUDtBQUNBLENBTkgsRUFPRTtBQUFBLFNBQU9HLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUFQO0FBQUEsQ0FQRjs7QUFZQTs7Ozs7QUFLQSxJQUFNQyxTQUFPLFNBQVBBLE1BQU8sQ0FBQ0MsR0FBRCxFQUFpQjtBQUFBLE1BQVpDLE1BQVksdUVBQUwsRUFBSzs7O0FBRTVCLFNBQU8sSUFBSUwsT0FBSixDQUFZLFVBQUNNLE9BQUQsRUFBU0wsTUFBVCxFQUFrQjtBQUM3QmIsb0JBQU1HLEdBQU4sQ0FBVWEsR0FBVixFQUFjO0FBQ1pDLDJCQUFZQSxNQUFaLEVBQXVCdkIsYUFBdkI7QUFEWSxLQUFkLEVBRUd5QixJQUZILENBRVEsb0JBQVU7QUFDaEJELGNBQVFFLFFBQVI7QUFDRCxLQUpELEVBSUdDLEtBSkgsQ0FJUyxpQkFBTztBQUNkUixhQUFPQyxLQUFQO0FBQ0QsS0FORDtBQU9ELEdBUkEsRUFRRUssSUFSRixDQVFPLGVBQUs7QUFDWCxRQUFHRyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFBc0I7QUFDcEIsaUNBQWdCLE1BQWhCLEVBQXdCRCxJQUFJWixJQUFKLENBQVNjLGdCQUFqQztBQUNEO0FBQ0QsV0FBT0YsR0FBUDtBQUNELEdBYkEsQ0FBUDtBQWNELENBaEJEOztrQkFrQmVQLE0iLCJmaWxlIjoibWFpbi5iNzJjMmJkOGY3ODEzMzRhOWFkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHNldExvY2Fsc3RvcmFnZSB9IGZyb20gJy4vdXRpbCc7XG5cbi8vIGF1dGhvcml6ZWQg6K6k6K+B5Y+C5pWwXG5jb25zdCBBUFBfQ09ERSA9ICdBUFBDT0RFIGNkNzkyMDY3YzkyZTQwNmQ5M2I4MDNmOWMwM2M2MTRhJztcbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FsaS1zdGFyLWx1Y2t5LnNob3dhcGkuY29tXCI7XG5jb25zdCBUSU1FX09VVCA9IDMwMDA7XG4vLyDpu5jorqTlj4LmlbBcbmNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gIG5lZWRNb250aDogJzEnLFxuICBuZWVkVG9tb3Jyb3c6ICcxJyxcbiAgbmVlZFdlZWs6ICcxJyxcbiAgbmVlZFllYXI6ICcxJyxcbiAgc3RhcjogJ3NodWFuZ3ppJ1xufVxuXG4vLyBheGlvcyDpu5jorqTphY3nva5cbi8vIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscz10cnVlO1xuLy8gYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ2NyZWRlbnRpYWxzJ109J2luY2x1ZGUnO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5nZXRbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCdcblxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IEJBU0VfVVJMO1xuYXhpb3MuZGVmYXVsdHMudGltZW91dCA9IFRJTUVfT1VUO1xuXG4vLyDlnKjmi6bmiKrlmajkuK3orr7nva5BdXRob3JpemF0aW9uXG5heGlvcy5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXG4gIGNvbmZpZz0+e1xuICAgIGNvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBBUFBfQ09ERTtcbiAgICAvLyDop6PlhrNnZXTor7fmsYLkuI3og73orr7nva4gY29udGVudC10eXBlXG4gICAgY29uZmlnLmRhdGEgPSB7IHVudXNlZDogMCB9O1xuICAgcmV0dXJuIGNvbmZpZ1xuICB9LFxuICBlcnJvcj0+UHJvbWlzZS5yZWplY3QoZXJyb3IpXG4pO1xuXG5cblxuLyoqZ2V06K+35rGCXG4gKiBcbiAqIEBwYXJhbSB75o6l5Y+j5Zyw5Z2AfSB1cmwgXG4gKiBAcGFyYW0ge+WPguaVsH0gZGF0YSBcbiAqL1xuY29uc3QgYXBpR2V0PSh1cmwscGFyYW1zPXt9KT0+e1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgICAgICAgYXhpb3MuZ2V0KHVybCx7XG4gICAgICAgICAgICBwYXJhbXM6eyAuLi5wYXJhbXMsIC4uLmRlZmF1bHRQYXJhbXMgfVxuICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG4gICAgICAgICAgfSkuY2F0Y2goZXJyb3I9PntcbiAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICB9KVxuICAgICAgICB9KS50aGVuKHJlcz0+e1xuICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgICAgICBzZXRMb2NhbHN0b3JhZ2UoJ2RhdGEnLCByZXMuZGF0YS5zaG93YXBpX3Jlc19ib2R5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpR2V0OyJdLCJzb3VyY2VSb290IjoiIn0=