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
  var result = localStorage.getItem(key);

  return result;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJzZXRMb2NhbHN0b3JhZ2UiLCJnZXRMb2NhbFN0b3JhZ2UiLCJrZXkiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O1FBS2dCQSxlLEdBQUFBLGU7UUFRQUMsZSxHQUFBQSxlO0FBYmhCOzs7OztBQUtPLFNBQVNELGVBQVQsQ0FBeUJFLEdBQXpCLEVBQThCQyxLQUE5QixFQUFxQztBQUMxQ0MsZUFBYUMsT0FBYixDQUFxQkgsR0FBckIsRUFBMEJJLEtBQUtDLFNBQUwsQ0FBZUosS0FBZixDQUExQjtBQUNEOztBQUVEOzs7O0FBSU8sU0FBU0YsZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDbkMsTUFBTU0sU0FBU0osYUFBYUssT0FBYixDQUFxQlAsR0FBckIsQ0FBZjs7QUFFQSxTQUFPTSxNQUFQO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJmZmJmMjFkZTZhNWIxNDdiOWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAq5b6AbG9jYWxzdG9yYWdl6YeM5aGe5Lic6KW/XG4gKiBAcGFyYW0ge2tleX0g6ZSu5ZCNXG4gKiBAcGFyYW0ge3ZhbHVlfSDplK7lgLxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2Fsc3RvcmFnZShrZXksIHZhbHVlKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuLyoqXG4gKuS7jmxvY2Fsc3RvcmFnZemHjOWPluS4nOilv1xuICogQHBhcmFtIHtrZXl9IOmUruWQjVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKGtleSkge1xuICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9