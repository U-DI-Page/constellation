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
};

xios.defaults.withCredentials = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJ4aW9zIiwiZGVmYXVsdHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJheGlvcyIsImJhc2VVUkwiLCJ0aW1lb3V0IiwiaGVhZGVycyIsImNvbW1vbiIsImFwaUdldCIsInVybCIsInBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsV0FBVywwQ0FBakI7QUFDQSxJQUFNQyxXQUFXLG9DQUFqQjtBQUNBLElBQU1DLFdBQVcsSUFBakI7QUFDQTtBQUNBLElBQU1DLGdCQUFnQjtBQUNwQkMsYUFBVyxHQURTO0FBRXBCQyxnQkFBYyxHQUZNO0FBR3BCQyxZQUFVLEdBSFU7QUFJcEJDLFlBQVUsR0FKVTtBQUtwQkMsUUFBTTtBQUxjLENBQXRCOztBQVFBQyxLQUFLQyxRQUFMLENBQWNDLGVBQWQsR0FBOEIsSUFBOUI7QUFDQUMsZ0JBQU1GLFFBQU4sQ0FBZUcsT0FBZixHQUF5QlosUUFBekI7QUFDQVcsZ0JBQU1GLFFBQU4sQ0FBZUksT0FBZixHQUF5QlosUUFBekI7QUFDQVUsZ0JBQU1GLFFBQU4sQ0FBZUssT0FBZixDQUF1QkMsTUFBdkIsQ0FBOEIsZUFBOUIsSUFBaURoQixRQUFqRDs7QUFFQTs7Ozs7QUFLQSxJQUFNaUIsU0FBTyxTQUFQQSxNQUFPLENBQUNDLEdBQUQsRUFBbUM7QUFBQSxNQUE5QkMsTUFBOEIsb0ZBQWxCaEIsYUFBa0I7OztBQUU5QyxTQUFPLElBQUlpQixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFTQyxNQUFULEVBQWtCOztBQUU3QlYsb0JBQU1XLEdBQU4sQ0FBVUwsR0FBVixFQUFjQyxNQUFkLEVBQ01LLElBRE4sQ0FDVyxvQkFBVTtBQUNkSCxjQUFRSSxRQUFSO0FBQ0QsS0FITixFQUlNQyxLQUpOLENBSVksaUJBQU87QUFDWkosYUFBT0ssS0FBUDtBQUNELEtBTk47QUFPRCxHQVRBLENBQVA7QUFVRCxDQVpEOztrQkFjZVYsTSIsImZpbGUiOiJtYWluLmViYmIyOTc1MzhlOTk3ZjQ0NTRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBhdXRob3JpemVkIOiupOivgeWPguaVsFxuY29uc3QgQVBQX0NPREUgPSAnQVBQQ09ERSBjZDc5MjA2N2M5MmU0MDZkOTNiODAzZjljMDNjNjE0YSc7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hbGktc3Rhci1sdWNreS5zaG93YXBpLmNvbVwiO1xuY29uc3QgVElNRV9PVVQgPSAzMDAwO1xuLy8g6buY6K6k5Y+C5pWwXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICBuZWVkTW9udGg6ICcxJyxcbiAgbmVlZFRvbW9ycm93OiAnMScsXG4gIG5lZWRXZWVrOiAnMScsXG4gIG5lZWRZZWFyOiAnMScsXG4gIHN0YXI6ICdzaHVhbmd6aSdcbn1cblxueGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9dHJ1ZVxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IEJBU0VfVVJMXG5heGlvcy5kZWZhdWx0cy50aW1lb3V0ID0gVElNRV9PVVQ7XG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gQVBQX0NPREU7XG5cbi8qKmdldOivt+axglxuICogXG4gKiBAcGFyYW0ge+aOpeWPo+WcsOWdgH0gdXJsIFxuICogQHBhcmFtIHvlj4LmlbB9IGRhdGEgXG4gKi9cbmNvbnN0IGFwaUdldD0odXJsLHBhcmFtcz17IC4uLmRlZmF1bHRQYXJhbXMgfSk9PntcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e1xuICAgIFxuICAgICAgICAgIGF4aW9zLmdldCh1cmwscGFyYW1zKVxuICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2U9PntcbiAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAuY2F0Y2goZXJyb3I9PntcbiAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaUdldDsiXSwic291cmNlUm9vdCI6IiJ9