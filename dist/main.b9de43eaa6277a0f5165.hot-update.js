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
  config.headers['Authorization'] = Authorization;
  config.headers['Content-Type'] = 'application/json; charset=UTF-8';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJBUFBfQ09ERSIsIkJBU0VfVVJMIiwiVElNRV9PVVQiLCJkZWZhdWx0UGFyYW1zIiwibmVlZE1vbnRoIiwibmVlZFRvbW9ycm93IiwibmVlZFdlZWsiLCJuZWVkWWVhciIsInN0YXIiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInRpbWVvdXQiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJQcm9taXNlIiwicmVqZWN0IiwiZXJyb3IiLCJhcGlHZXQiLCJ1cmwiLCJwYXJhbXMiLCJyZXNvbHZlIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLFdBQVcsMENBQWpCO0FBQ0EsSUFBTUMsV0FBVyxvQ0FBakI7QUFDQSxJQUFNQyxXQUFXLElBQWpCO0FBQ0E7QUFDQSxJQUFNQyxnQkFBZ0I7QUFDcEJDLGFBQVcsR0FEUztBQUVwQkMsZ0JBQWMsR0FGTTtBQUdwQkMsWUFBVSxHQUhVO0FBSXBCQyxZQUFVLEdBSlU7QUFLcEJDLFFBQU07O0FBR1I7QUFDQTtBQUNBO0FBQ0E7O0FBWHNCLENBQXRCLENBYUFDLGdCQUFNQyxRQUFOLENBQWVDLE9BQWYsR0FBeUJWLFFBQXpCO0FBQ0FRLGdCQUFNQyxRQUFOLENBQWVFLE9BQWYsR0FBeUJWLFFBQXpCOztBQUVBO0FBQ0FPLGdCQUFNSSxZQUFOLENBQW1CQyxPQUFuQixDQUEyQkMsR0FBM0IsQ0FDRSxrQkFBUTtBQUNOQyxTQUFPQyxPQUFQLENBQWUsZUFBZixJQUFrQ0MsYUFBbEM7QUFDQUYsU0FBT0MsT0FBUCxDQUFlLGNBQWYsSUFBaUMsaUNBQWpDO0FBQ0QsU0FBT0QsTUFBUDtBQUNBLENBTEgsRUFNRTtBQUFBLFNBQU9HLFFBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUFQO0FBQUEsQ0FORjs7QUFXQTs7Ozs7QUFLQSxJQUFNQyxTQUFPLFNBQVBBLE1BQU8sQ0FBQ0MsR0FBRCxFQUFtQztBQUFBLE1BQTlCQyxNQUE4QixvRkFBbEJyQixhQUFrQjs7O0FBRTlDLFNBQU8sSUFBSWdCLE9BQUosQ0FBWSxVQUFDTSxPQUFELEVBQVNMLE1BQVQsRUFBa0I7O0FBRTdCWCxvQkFBTWlCLEdBQU4sQ0FBVUgsR0FBVixFQUFjQyxNQUFkLEVBQ01HLElBRE4sQ0FDVyxvQkFBVTtBQUNkRixjQUFRRyxRQUFSO0FBQ0QsS0FITixFQUlNQyxLQUpOLENBSVksaUJBQU87QUFDWlQsYUFBT0MsS0FBUDtBQUNELEtBTk47QUFPRCxHQVRBLENBQVA7QUFVRCxDQVpEOztrQkFjZUMsTSIsImZpbGUiOiJtYWluLmI5ZGU0M2VhYTYyNzdhMGY1MTY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBhdXRob3JpemVkIOiupOivgeWPguaVsFxuY29uc3QgQVBQX0NPREUgPSAnQVBQQ09ERSBjZDc5MjA2N2M5MmU0MDZkOTNiODAzZjljMDNjNjE0YSc7XG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hbGktc3Rhci1sdWNreS5zaG93YXBpLmNvbVwiO1xuY29uc3QgVElNRV9PVVQgPSAzMDAwO1xuLy8g6buY6K6k5Y+C5pWwXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge1xuICBuZWVkTW9udGg6ICcxJyxcbiAgbmVlZFRvbW9ycm93OiAnMScsXG4gIG5lZWRXZWVrOiAnMScsXG4gIG5lZWRZZWFyOiAnMScsXG4gIHN0YXI6ICdzaHVhbmd6aSdcbn1cblxuLy8gYXhpb3Mg6buY6K6k6YWN572uXG4vLyBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHM9dHJ1ZTtcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydjcmVkZW50aWFscyddPSdpbmNsdWRlJztcbi8vIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuZ2V0WydDb250ZW50LVR5cGUnXT0nYXBwbGljYXRpb24vanNvbic7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBCQVNFX1VSTDtcbmF4aW9zLmRlZmF1bHRzLnRpbWVvdXQgPSBUSU1FX09VVDtcblxuLy8g5Zyo5oum5oiq5Zmo5Lit6K6+572uQXV0aG9yaXphdGlvblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICBjb25maWc9PntcbiAgICBjb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gQXV0aG9yaXphdGlvbjtcbiAgICBjb25maWcuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCc7XG4gICByZXR1cm4gY29uZmlnXG4gIH0sXG4gIGVycm9yPT5Qcm9taXNlLnJlamVjdChlcnJvcilcbik7XG5cblxuXG4vKipnZXTor7fmsYJcbiAqIFxuICogQHBhcmFtIHvmjqXlj6PlnLDlnYB9IHVybCBcbiAqIEBwYXJhbSB75Y+C5pWwfSBkYXRhIFxuICovXG5jb25zdCBhcGlHZXQ9KHVybCxwYXJhbXM9eyAuLi5kZWZhdWx0UGFyYW1zIH0pPT57XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICBcbiAgICAgICAgICBheGlvcy5nZXQodXJsLHBhcmFtcylcbiAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlPT57XG4gICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG4gICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yPT57XG4gICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlHZXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==