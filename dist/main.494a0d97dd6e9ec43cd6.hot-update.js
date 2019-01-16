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

    _axios2.default.get(url, { params: _extends({}, params, defaultParams) }).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      reject(error);
    });
  });
};

exports.default = apiGet;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImdldCIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImRhdGEiLCJ1bnVzZWQiLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJhcGlHZXQiLCJ1cmwiLCJwYXJhbXMiLCJyZXNvbHZlIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLFdBQVcsMENBQWpCO0FBQ0EsSUFBTUMsV0FBVyxvQ0FBakI7QUFDQSxJQUFNQyxXQUFXLElBQWpCO0FBQ0E7QUFDQSxJQUFNQyxnQkFBZ0I7QUFDcEJDLGFBQVcsR0FEUztBQUVwQkMsZ0JBQWMsR0FGTTtBQUdwQkMsWUFBVSxHQUhVO0FBSXBCQyxZQUFVLEdBSlU7QUFLcEJDLFFBQU07O0FBR1I7QUFDQTtBQUNBO0FBVnNCLENBQXRCLENBV0FDLGdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLENBQTJCLGNBQTNCLElBQTZDLGdDQUE3Qzs7QUFFQUgsZ0JBQU1DLFFBQU4sQ0FBZUcsT0FBZixHQUF5QlosUUFBekI7QUFDQVEsZ0JBQU1DLFFBQU4sQ0FBZUksT0FBZixHQUF5QlosUUFBekI7O0FBRUE7QUFDQU8sZ0JBQU1NLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixDQUNFLGtCQUFRO0FBQ05DLFNBQU9QLE9BQVAsQ0FBZSxlQUFmLElBQWtDWCxRQUFsQztBQUNBO0FBQ0FrQixTQUFPQyxJQUFQLEdBQWMsRUFBRUMsUUFBUSxDQUFWLEVBQWQ7QUFDRCxTQUFPRixNQUFQO0FBQ0EsQ0FOSCxFQU9FO0FBQUEsU0FBT0csUUFBUUMsTUFBUixDQUFlQyxLQUFmLENBQVA7QUFBQSxDQVBGOztBQVlBOzs7OztBQUtBLElBQU1DLFNBQU8sU0FBUEEsTUFBTyxDQUFDQyxHQUFELEVBQWlCO0FBQUEsTUFBWkMsTUFBWSx1RUFBTCxFQUFLOzs7QUFFNUIsU0FBTyxJQUFJTCxPQUFKLENBQVksVUFBQ00sT0FBRCxFQUFTTCxNQUFULEVBQWtCOztBQUU3QmIsb0JBQU1HLEdBQU4sQ0FBVWEsR0FBVixFQUFjLEVBQUNDLHFCQUFZQSxNQUFaLEVBQXVCdkIsYUFBdkIsQ0FBRCxFQUFkLEVBQ015QixJQUROLENBQ1csb0JBQVU7QUFDZEQsY0FBUUUsUUFBUjtBQUNELEtBSE4sRUFJTUMsS0FKTixDQUlZLGlCQUFPO0FBQ1pSLGFBQU9DLEtBQVA7QUFDRCxLQU5OO0FBT0QsR0FUQSxDQUFQO0FBVUQsQ0FaRDs7a0JBY2VDLE0iLCJmaWxlIjoibWFpbi40OTRhMGQ5N2RkNmU5ZWM0M2NkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gYXV0aG9yaXplZCDorqTor4Hlj4LmlbBcbmNvbnN0IEFQUF9DT0RFID0gJ0FQUENPREUgY2Q3OTIwNjdjOTJlNDA2ZDkzYjgwM2Y5YzAzYzYxNGEnO1xuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYWxpLXN0YXItbHVja3kuc2hvd2FwaS5jb21cIjtcbmNvbnN0IFRJTUVfT1VUID0gMzAwMDtcbi8vIOm7mOiupOWPguaVsFxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgbmVlZE1vbnRoOiAnMScsXG4gIG5lZWRUb21vcnJvdzogJzEnLFxuICBuZWVkV2VlazogJzEnLFxuICBuZWVkWWVhcjogJzEnLFxuICBzdGFyOiAnc2h1YW5nemknXG59XG5cbi8vIGF4aW9zIOm7mOiupOmFjee9rlxuLy8gYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPXRydWU7XG4vLyBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnY3JlZGVudGlhbHMnXT0naW5jbHVkZSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmdldFsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04J1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gQkFTRV9VUkw7XG5heGlvcy5kZWZhdWx0cy50aW1lb3V0ID0gVElNRV9PVVQ7XG5cbi8vIOWcqOaLpuaIquWZqOS4reiuvue9rkF1dGhvcml6YXRpb25cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgY29uZmlnPT57XG4gICAgY29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IEFQUF9DT0RFO1xuICAgIC8vIOino+WGs2dldOivt+axguS4jeiDveiuvue9riBjb250ZW50LXR5cGVcbiAgICBjb25maWcuZGF0YSA9IHsgdW51c2VkOiAwIH07XG4gICByZXR1cm4gY29uZmlnXG4gIH0sXG4gIGVycm9yPT5Qcm9taXNlLnJlamVjdChlcnJvcilcbik7XG5cblxuXG4vKipnZXTor7fmsYJcbiAqIFxuICogQHBhcmFtIHvmjqXlj6PlnLDlnYB9IHVybCBcbiAqIEBwYXJhbSB75Y+C5pWwfSBkYXRhIFxuICovXG5jb25zdCBhcGlHZXQ9KHVybCxwYXJhbXM9e30pPT57XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICBcbiAgICAgICAgICBheGlvcy5nZXQodXJsLHtwYXJhbXM6eyAuLi5wYXJhbXMsIC4uLmRlZmF1bHRQYXJhbXMgfX0pXG4gICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcj0+e1xuICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpR2V0OyJdLCJzb3VyY2VSb290IjoiIn0=