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
};_axios2.default.defaults.withCredentials = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwid2l0aENyZWRlbnRpYWxzIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXBpR2V0IiwidXJsIiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxXQUFXLDBDQUFqQjtBQUNBLElBQU1DLFdBQVcsb0NBQWpCO0FBQ0EsSUFBTUMsV0FBVyxJQUFqQjtBQUNBO0FBQ0EsSUFBTUMsZ0JBQWdCO0FBQ3BCQyxhQUFXLEdBRFM7QUFFcEJDLGdCQUFjLEdBRk07QUFHcEJDLFlBQVUsR0FIVTtBQUlwQkMsWUFBVSxHQUpVO0FBS3BCQyxRQUFNOztBQUdSO0FBUnNCLENBQXRCLENBU0FDLGdCQUFNQyxRQUFOLENBQWVDLGVBQWYsR0FBK0IsSUFBL0I7QUFDQUYsZ0JBQU1DLFFBQU4sQ0FBZUUsT0FBZixHQUF5QlgsUUFBekI7QUFDQVEsZ0JBQU1DLFFBQU4sQ0FBZUcsT0FBZixHQUF5QlgsUUFBekI7QUFDQU8sZ0JBQU1DLFFBQU4sQ0FBZUksT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsZUFBOUIsSUFBaURmLFFBQWpEOztBQUVBOzs7OztBQUtBLElBQU1nQixTQUFPLFNBQVBBLE1BQU8sQ0FBQ0MsR0FBRCxFQUFtQztBQUFBLE1BQTlCQyxNQUE4QixvRkFBbEJmLGFBQWtCOzs7QUFFOUMsU0FBTyxJQUFJZ0IsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjs7QUFFN0JaLG9CQUFNYSxHQUFOLENBQVVMLEdBQVYsRUFBY0MsTUFBZCxFQUNNSyxJQUROLENBQ1csb0JBQVU7QUFDZEgsY0FBUUksUUFBUjtBQUNELEtBSE4sRUFJTUMsS0FKTixDQUlZLGlCQUFPO0FBQ1pKLGFBQU9LLEtBQVA7QUFDRCxLQU5OO0FBT0QsR0FUQSxDQUFQO0FBVUQsQ0FaRDs7a0JBY2VWLE0iLCJmaWxlIjoibWFpbi40NDMwNGQ5NTc4NDYxYmEwOTM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gYXV0aG9yaXplZCDorqTor4Hlj4LmlbBcbmNvbnN0IEFQUF9DT0RFID0gJ0FQUENPREUgY2Q3OTIwNjdjOTJlNDA2ZDkzYjgwM2Y5YzAzYzYxNGEnO1xuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYWxpLXN0YXItbHVja3kuc2hvd2FwaS5jb21cIjtcbmNvbnN0IFRJTUVfT1VUID0gMzAwMDtcbi8vIOm7mOiupOWPguaVsFxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgbmVlZE1vbnRoOiAnMScsXG4gIG5lZWRUb21vcnJvdzogJzEnLFxuICBuZWVkV2VlazogJzEnLFxuICBuZWVkWWVhcjogJzEnLFxuICBzdGFyOiAnc2h1YW5nemknXG59XG5cbi8vIGF4aW9zIOm7mOiupOmFjee9rlxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPXRydWVcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBCQVNFX1VSTFxuYXhpb3MuZGVmYXVsdHMudGltZW91dCA9IFRJTUVfT1VUO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9IEFQUF9DT0RFO1xuXG4vKipnZXTor7fmsYJcbiAqIFxuICogQHBhcmFtIHvmjqXlj6PlnLDlnYB9IHVybCBcbiAqIEBwYXJhbSB75Y+C5pWwfSBkYXRhIFxuICovXG5jb25zdCBhcGlHZXQ9KHVybCxwYXJhbXM9eyAuLi5kZWZhdWx0UGFyYW1zIH0pPT57XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICBcbiAgICAgICAgICBheGlvcy5nZXQodXJsLHBhcmFtcylcbiAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yPT57XG4gICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlHZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==