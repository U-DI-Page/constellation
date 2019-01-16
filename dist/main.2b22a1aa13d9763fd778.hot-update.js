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
};_axios2.default.defaults.headers.get['Content-Type'] = 'application/json';

_axios2.default.defaults.baseURL = BASE_URL;
_axios2.default.defaults.timeout = TIME_OUT;

// 在拦截器中设置Authorization
_axios2.default.interceptors.request.use(function (config) {
  config.headers = {
    Authorization: APP_CODE
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImdldCIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsIkF1dGhvcml6YXRpb24iLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJhcGlHZXQiLCJ1cmwiLCJwYXJhbXMiLCJyZXNvbHZlIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLFdBQVcsMENBQWpCO0FBQ0EsSUFBTUMsV0FBVyxvQ0FBakI7QUFDQSxJQUFNQyxXQUFXLElBQWpCO0FBQ0E7QUFDQSxJQUFNQyxnQkFBZ0I7QUFDcEJDLGFBQVcsR0FEUztBQUVwQkMsZ0JBQWMsR0FGTTtBQUdwQkMsWUFBVSxHQUhVO0FBSXBCQyxZQUFVLEdBSlU7QUFLcEJDLFFBQU07O0FBR1I7QUFDQTtBQUNBO0FBVnNCLENBQXRCLENBV0FDLGdCQUFNQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLENBQTJCLGNBQTNCLElBQTJDLGtCQUEzQzs7QUFFQUgsZ0JBQU1DLFFBQU4sQ0FBZUcsT0FBZixHQUF5QlosUUFBekI7QUFDQVEsZ0JBQU1DLFFBQU4sQ0FBZUksT0FBZixHQUF5QlosUUFBekI7O0FBRUE7QUFDQU8sZ0JBQU1NLFlBQU4sQ0FBbUJDLE9BQW5CLENBQTJCQyxHQUEzQixDQUNFLGtCQUFRO0FBQ05DLFNBQU9QLE9BQVAsR0FBZTtBQUNiUSxtQkFBY25CO0FBREQsR0FBZjtBQUdELFNBQU9rQixNQUFQO0FBQ0EsQ0FOSCxFQU9FO0FBQUEsU0FBT0UsUUFBUUMsTUFBUixDQUFlQyxLQUFmLENBQVA7QUFBQSxDQVBGOztBQVlBOzs7OztBQUtBLElBQU1DLFNBQU8sU0FBUEEsTUFBTyxDQUFDQyxHQUFELEVBQW1DO0FBQUEsTUFBOUJDLE1BQThCLG9GQUFsQnRCLGFBQWtCOzs7QUFFOUMsU0FBTyxJQUFJaUIsT0FBSixDQUFZLFVBQUNNLE9BQUQsRUFBU0wsTUFBVCxFQUFrQjs7QUFFN0JaLG9CQUFNRyxHQUFOLENBQVVZLEdBQVYsRUFBY0MsTUFBZCxFQUNNRSxJQUROLENBQ1csb0JBQVU7QUFDZEQsY0FBUUUsUUFBUjtBQUNELEtBSE4sRUFJTUMsS0FKTixDQUlZLGlCQUFPO0FBQ1pSLGFBQU9DLEtBQVA7QUFDRCxLQU5OO0FBT0QsR0FUQSxDQUFQO0FBVUQsQ0FaRDs7a0JBY2VDLE0iLCJmaWxlIjoibWFpbi4yYjIyYTFhYTEzZDk3NjNmZDc3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gYXV0aG9yaXplZCDorqTor4Hlj4LmlbBcbmNvbnN0IEFQUF9DT0RFID0gJ0FQUENPREUgY2Q3OTIwNjdjOTJlNDA2ZDkzYjgwM2Y5YzAzYzYxNGEnO1xuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYWxpLXN0YXItbHVja3kuc2hvd2FwaS5jb21cIjtcbmNvbnN0IFRJTUVfT1VUID0gMzAwMDtcbi8vIOm7mOiupOWPguaVsFxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgbmVlZE1vbnRoOiAnMScsXG4gIG5lZWRUb21vcnJvdzogJzEnLFxuICBuZWVkV2VlazogJzEnLFxuICBuZWVkWWVhcjogJzEnLFxuICBzdGFyOiAnc2h1YW5nemknXG59XG5cbi8vIGF4aW9zIOm7mOiupOmFjee9rlxuLy8gYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPXRydWU7XG4vLyBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnY3JlZGVudGlhbHMnXT0naW5jbHVkZSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmdldFsnQ29udGVudC1UeXBlJ109J2FwcGxpY2F0aW9uL2pzb24nO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gQkFTRV9VUkw7XG5heGlvcy5kZWZhdWx0cy50aW1lb3V0ID0gVElNRV9PVVQ7XG5cbi8vIOWcqOaLpuaIquWZqOS4reiuvue9rkF1dGhvcml6YXRpb25cbmF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcbiAgY29uZmlnPT57XG4gICAgY29uZmlnLmhlYWRlcnM9e1xuICAgICAgQXV0aG9yaXphdGlvbjpBUFBfQ09ERVxuICAgIH1cbiAgIHJldHVybiBjb25maWdcbiAgfSxcbiAgZXJyb3I9PlByb21pc2UucmVqZWN0KGVycm9yKVxuKTtcblxuXG5cbi8qKmdldOivt+axglxuICogXG4gKiBAcGFyYW0ge+aOpeWPo+WcsOWdgH0gdXJsIFxuICogQHBhcmFtIHvlj4LmlbB9IGRhdGEgXG4gKi9cbmNvbnN0IGFwaUdldD0odXJsLHBhcmFtcz17IC4uLmRlZmF1bHRQYXJhbXMgfSk9PntcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgIFxuICAgICAgICAgIGF4aW9zLmdldCh1cmwscGFyYW1zKVxuICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuY2F0Y2goZXJyb3I9PntcbiAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUdldDsiXSwic291cmNlUm9vdCI6IiJ9