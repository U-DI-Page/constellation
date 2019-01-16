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
};_axios2.default.defaults.headers.common['credentials'] = 'include';
_axios2.default.defaults.headers.common['Content-Type'] = 'application/json';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiYXBpR2V0IiwidXJsIiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxXQUFXLDBDQUFqQjtBQUNBLElBQU1DLFdBQVcsb0NBQWpCO0FBQ0EsSUFBTUMsV0FBVyxJQUFqQjtBQUNBO0FBQ0EsSUFBTUMsZ0JBQWdCO0FBQ3BCQyxhQUFXLEdBRFM7QUFFcEJDLGdCQUFjLEdBRk07QUFHcEJDLFlBQVUsR0FIVTtBQUlwQkMsWUFBVSxHQUpVO0FBS3BCQyxRQUFNOztBQUdSO0FBQ0E7QUFUc0IsQ0FBdEIsQ0FVQUMsZ0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsYUFBOUIsSUFBNkMsU0FBN0M7QUFDQUgsZ0JBQU1DLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsY0FBOUIsSUFBOEMsa0JBQTlDOztBQUVBSCxnQkFBTUMsUUFBTixDQUFlRyxPQUFmLEdBQXlCWixRQUF6QjtBQUNBUSxnQkFBTUMsUUFBTixDQUFlSSxPQUFmLEdBQXlCWixRQUF6QjtBQUNBTyxnQkFBTUMsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxNQUF2QixDQUE4QixlQUE5QixJQUFpRFosUUFBakQ7O0FBRUE7Ozs7O0FBS0EsSUFBTWUsU0FBTyxTQUFQQSxNQUFPLENBQUNDLEdBQUQsRUFBbUM7QUFBQSxNQUE5QkMsTUFBOEIsb0ZBQWxCZCxhQUFrQjs7O0FBRTlDLFNBQU8sSUFBSWUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjs7QUFFN0JYLG9CQUFNWSxHQUFOLENBQVVMLEdBQVYsRUFBY0MsTUFBZCxFQUNNSyxJQUROLENBQ1csb0JBQVU7QUFDZEgsY0FBUUksUUFBUjtBQUNELEtBSE4sRUFJTUMsS0FKTixDQUlZLGlCQUFPO0FBQ1pKLGFBQU9LLEtBQVA7QUFDRCxLQU5OO0FBT0QsR0FUQSxDQUFQO0FBVUQsQ0FaRDs7a0JBY2VWLE0iLCJmaWxlIjoibWFpbi4zMWUzMjExNDExMzg3NTNlZmNmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gYXV0aG9yaXplZCDorqTor4Hlj4LmlbBcbmNvbnN0IEFQUF9DT0RFID0gJ0FQUENPREUgY2Q3OTIwNjdjOTJlNDA2ZDkzYjgwM2Y5YzAzYzYxNGEnO1xuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vYWxpLXN0YXItbHVja3kuc2hvd2FwaS5jb21cIjtcbmNvbnN0IFRJTUVfT1VUID0gMzAwMDtcbi8vIOm7mOiupOWPguaVsFxuY29uc3QgZGVmYXVsdFBhcmFtcyA9IHtcbiAgbmVlZE1vbnRoOiAnMScsXG4gIG5lZWRUb21vcnJvdzogJzEnLFxuICBuZWVkV2VlazogJzEnLFxuICBuZWVkWWVhcjogJzEnLFxuICBzdGFyOiAnc2h1YW5nemknXG59XG5cbi8vIGF4aW9zIOm7mOiupOmFjee9rlxuLy8gYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzPXRydWU7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnY3JlZGVudGlhbHMnXT0naW5jbHVkZSc7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQ29udGVudC1UeXBlJ109J2FwcGxpY2F0aW9uL2pzb24nO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gQkFTRV9VUkw7XG5heGlvcy5kZWZhdWx0cy50aW1lb3V0ID0gVElNRV9PVVQ7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gQVBQX0NPREU7XG5cbi8qKmdldOivt+axglxuICogXG4gKiBAcGFyYW0ge+aOpeWPo+WcsOWdgH0gdXJsIFxuICogQHBhcmFtIHvlj4LmlbB9IGRhdGEgXG4gKi9cbmNvbnN0IGFwaUdldD0odXJsLHBhcmFtcz17IC4uLmRlZmF1bHRQYXJhbXMgfSk9PntcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgIFxuICAgICAgICAgIGF4aW9zLmdldCh1cmwscGFyYW1zKVxuICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuY2F0Y2goZXJyb3I9PntcbiAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUdldDsiXSwic291cmNlUm9vdCI6IiJ9