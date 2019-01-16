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
  config.headers = {
    Authorization: APP_CODE,
    ContentType: 'application/json'
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJDb250ZW50VHlwZSIsIlByb21pc2UiLCJyZWplY3QiLCJlcnJvciIsImFwaUdldCIsInVybCIsInBhcmFtcyIsInJlc29sdmUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsV0FBVywwQ0FBakI7QUFDQSxJQUFNQyxXQUFXLG9DQUFqQjtBQUNBLElBQU1DLFdBQVcsSUFBakI7QUFDQTtBQUNBLElBQU1DLGdCQUFnQjtBQUNwQkMsYUFBVyxHQURTO0FBRXBCQyxnQkFBYyxHQUZNO0FBR3BCQyxZQUFVLEdBSFU7QUFJcEJDLFlBQVUsR0FKVTtBQUtwQkMsUUFBTTs7QUFHUjtBQUNBO0FBQ0E7QUFDQTs7QUFYc0IsQ0FBdEIsQ0FhQUMsZ0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixHQUF5QlYsUUFBekI7QUFDQVEsZ0JBQU1DLFFBQU4sQ0FBZUUsT0FBZixHQUF5QlYsUUFBekI7O0FBRUE7QUFDQU8sZ0JBQU1JLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixDQUNFLGtCQUFRO0FBQ05DLFNBQU9DLE9BQVAsR0FBZTtBQUNiQyxtQkFBZWxCLFFBREY7QUFFYm1CLGlCQUFhO0FBRkEsR0FBZjtBQUlELFNBQU9ILE1BQVA7QUFDQSxDQVBILEVBUUU7QUFBQSxTQUFPSSxRQUFRQyxNQUFSLENBQWVDLEtBQWYsQ0FBUDtBQUFBLENBUkY7O0FBYUE7Ozs7O0FBS0EsSUFBTUMsU0FBTyxTQUFQQSxNQUFPLENBQUNDLEdBQUQsRUFBbUM7QUFBQSxNQUE5QkMsTUFBOEIsb0ZBQWxCdEIsYUFBa0I7OztBQUU5QyxTQUFPLElBQUlpQixPQUFKLENBQVksVUFBQ00sT0FBRCxFQUFTTCxNQUFULEVBQWtCOztBQUU3Qlosb0JBQU1rQixHQUFOLENBQVVILEdBQVYsRUFBY0MsTUFBZCxFQUNNRyxJQUROLENBQ1csb0JBQVU7QUFDZEYsY0FBUUcsUUFBUjtBQUNELEtBSE4sRUFJTUMsS0FKTixDQUlZLGlCQUFPO0FBQ1pULGFBQU9DLEtBQVA7QUFDRCxLQU5OO0FBT0QsR0FUQSxDQUFQO0FBVUQsQ0FaRDs7a0JBY2VDLE0iLCJmaWxlIjoibWFpbi5mNzU2YjFhZmRlYTkxZTZjNTIwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gYXV0aG9yaXplZCDorqTor4Hlj4LmlbBcbmNvbnN0IEFQUF9DT0RFID0gJ0FQUENPREUgY2Q3OTIwNjdjOTJlNDA2ZDkzYjgwM2Y5YzAzYzYxNGEnO1xuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYWxpLXN0YXItbHVja3kuc2hvd2FwaS5jb21cIjtcbmNvbnN0IFRJTUVfT1VUID0gMzAwMDtcbi8vIOm7mOiupOWPguaVsFxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgbmVlZE1vbnRoOiAnMScsXG4gIG5lZWRUb21vcnJvdzogJzEnLFxuICBuZWVkV2VlazogJzEnLFxuICBuZWVkWWVhcjogJzEnLFxuICBzdGFyOiAnc2h1YW5nemknXG59XG5cbi8vIGF4aW9zIOm7mOiupOmFjee9rlxuLy8gYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPXRydWU7XG4vLyBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnY3JlZGVudGlhbHMnXT0naW5jbHVkZSc7XG4vLyBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmdldFsnQ29udGVudC1UeXBlJ109J2FwcGxpY2F0aW9uL2pzb24nO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gQkFTRV9VUkw7XG5heGlvcy5kZWZhdWx0cy50aW1lb3V0ID0gVElNRV9PVVQ7XG5cbi8vIOWcqOaLpuaIquWZqOS4reiuvue9rkF1dGhvcml6YXRpb25cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgY29uZmlnPT57XG4gICAgY29uZmlnLmhlYWRlcnM9e1xuICAgICAgQXV0aG9yaXphdGlvbjogQVBQX0NPREUsXG4gICAgICBDb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfVxuICAgcmV0dXJuIGNvbmZpZ1xuICB9LFxuICBlcnJvcj0+UHJvbWlzZS5yZWplY3QoZXJyb3IpXG4pO1xuXG5cblxuLyoqZ2V06K+35rGCXG4gKiBcbiAqIEBwYXJhbSB75o6l5Y+j5Zyw5Z2AfSB1cmwgXG4gKiBAcGFyYW0ge+WPguaVsH0gZGF0YSBcbiAqL1xuY29uc3QgYXBpR2V0PSh1cmwscGFyYW1zPXsgLi4uZGVmYXVsdFBhcmFtcyB9KT0+e1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XG4gICAgXG4gICAgICAgICAgYXhpb3MuZ2V0KHVybCxwYXJhbXMpXG4gICAgICAgICAgICAgICAudGhlbihyZXNwb25zZT0+e1xuICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcj0+e1xuICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBpR2V0OyJdLCJzb3VyY2VSb290IjoiIn0=