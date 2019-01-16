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
_axios2.default.defaults.headers.common['credentials'] = 'include';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwid2l0aENyZWRlbnRpYWxzIiwiaGVhZGVycyIsImNvbW1vbiIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiYXBpR2V0IiwidXJsIiwicGFyYW1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxXQUFXLDBDQUFqQjtBQUNBLElBQU1DLFdBQVcsb0NBQWpCO0FBQ0EsSUFBTUMsV0FBVyxJQUFqQjtBQUNBO0FBQ0EsSUFBTUMsZ0JBQWdCO0FBQ3BCQyxhQUFXLEdBRFM7QUFFcEJDLGdCQUFjLEdBRk07QUFHcEJDLFlBQVUsR0FIVTtBQUlwQkMsWUFBVSxHQUpVO0FBS3BCQyxRQUFNOztBQUdSO0FBUnNCLENBQXRCLENBU0FDLGdCQUFNQyxRQUFOLENBQWVDLGVBQWYsR0FBK0IsSUFBL0I7QUFDQUYsZ0JBQU1DLFFBQU4sQ0FBZUUsT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsYUFBOUIsSUFBNkMsU0FBN0M7O0FBRUFKLGdCQUFNQyxRQUFOLENBQWVJLE9BQWYsR0FBeUJiLFFBQXpCO0FBQ0FRLGdCQUFNQyxRQUFOLENBQWVLLE9BQWYsR0FBeUJiLFFBQXpCO0FBQ0FPLGdCQUFNQyxRQUFOLENBQWVFLE9BQWYsQ0FBdUJDLE1BQXZCLENBQThCLGVBQTlCLElBQWlEYixRQUFqRDs7QUFFQTs7Ozs7QUFLQSxJQUFNZ0IsU0FBTyxTQUFQQSxNQUFPLENBQUNDLEdBQUQsRUFBbUM7QUFBQSxNQUE5QkMsTUFBOEIsb0ZBQWxCZixhQUFrQjs7O0FBRTlDLFNBQU8sSUFBSWdCLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBa0I7O0FBRTdCWixvQkFBTWEsR0FBTixDQUFVTCxHQUFWLEVBQWNDLE1BQWQsRUFDTUssSUFETixDQUNXLG9CQUFVO0FBQ2RILGNBQVFJLFFBQVI7QUFDRCxLQUhOLEVBSU1DLEtBSk4sQ0FJWSxpQkFBTztBQUNaSixhQUFPSyxLQUFQO0FBQ0QsS0FOTjtBQU9ELEdBVEEsQ0FBUDtBQVVELENBWkQ7O2tCQWNlVixNIiwiZmlsZSI6Im1haW4uOGU5MGQxMDg0MThkMWE2MzNjNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIGF1dGhvcml6ZWQg6K6k6K+B5Y+C5pWwXG5jb25zdCBBUFBfQ09ERSA9ICdBUFBDT0RFIGNkNzkyMDY3YzkyZTQwNmQ5M2I4MDNmOWMwM2M2MTRhJztcbmNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2FsaS1zdGFyLWx1Y2t5LnNob3dhcGkuY29tXCI7XG5jb25zdCBUSU1FX09VVCA9IDMwMDA7XG4vLyDpu5jorqTlj4LmlbBcbmNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7XG4gIG5lZWRNb250aDogJzEnLFxuICBuZWVkVG9tb3Jyb3c6ICcxJyxcbiAgbmVlZFdlZWs6ICcxJyxcbiAgbmVlZFllYXI6ICcxJyxcbiAgc3RhcjogJ3NodWFuZ3ppJ1xufVxuXG4vLyBheGlvcyDpu5jorqTphY3nva5cbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscz10cnVlO1xuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ2NyZWRlbnRpYWxzJ109J2luY2x1ZGUnO1xuXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gQkFTRV9VUkw7XG5heGlvcy5kZWZhdWx0cy50aW1lb3V0ID0gVElNRV9PVVQ7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gQVBQX0NPREU7XG5cbi8qKmdldOivt+axglxuICogXG4gKiBAcGFyYW0ge+aOpeWPo+WcsOWdgH0gdXJsIFxuICogQHBhcmFtIHvlj4LmlbB9IGRhdGEgXG4gKi9cbmNvbnN0IGFwaUdldD0odXJsLHBhcmFtcz17IC4uLmRlZmF1bHRQYXJhbXMgfSk9PntcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgIFxuICAgICAgICAgIGF4aW9zLmdldCh1cmwscGFyYW1zKVxuICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuY2F0Y2goZXJyb3I9PntcbiAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUdldDsiXSwic291cmNlUm9vdCI6IiJ9