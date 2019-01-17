webpackHotUpdate("main",{

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalstorage = setLocalstorage;
exports.getLocalStorage = getLocalStorage;
/**
 *往localstorage里塞东西
 * @param {key} 键名
 * @param {value} 键值
 */
function setLocalstorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 *从localstorage里取东西
 * @param {key} 键名
 */
function getLocalStorage(key) {
  return localStorage.getItem(key);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJzZXRMb2NhbHN0b3JhZ2UiLCJnZXRMb2NhbFN0b3JhZ2UiLCJrZXkiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O1FBS2dCQSxlLEdBQUFBLGU7UUFRQUMsZSxHQUFBQSxlO0FBYmhCOzs7OztBQUtPLFNBQVNELGVBQVQsQ0FBeUJFLEdBQXpCLEVBQThCQyxLQUE5QixFQUFxQztBQUMxQ0MsZUFBYUMsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJJLEtBQUtDLFNBQUwsQ0FBZUosS0FBZixDQUExQjtBQUNEOztBQUVEOzs7O0FBSU8sU0FBU0YsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDbkMsU0FBT0UsYUFBYUksT0FBYixDQUFxQk4sR0FBckIsQ0FBUDtBQUNELEMiLCJmaWxlIjoibWFpbi5mMTdmNDIyYWZkY2RiODA3NWE4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKuW+gGxvY2Fsc3RvcmFnZemHjOWhnuS4nOilv1xuICogQHBhcmFtIHtrZXl9IOmUruWQjVxuICogQHBhcmFtIHt2YWx1ZX0g6ZSu5YC8XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbHN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG59XG5cbi8qKlxuICrku45sb2NhbHN0b3JhZ2Xph4zlj5bkuJzopb9cbiAqIEBwYXJhbSB7a2V5fSDplK7lkI1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZShrZXkpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9