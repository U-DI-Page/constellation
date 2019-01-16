webpackHotUpdate("main",{

/***/ "./src/page/config.js":
/*!****************************!*\
  !*** ./src/page/config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var imgPath = './assets';

var imageArr = [{ title: 'shuangzi', src: imgPath + '/shuangzi.png' }, { title: 'baiyang', src: imgPath + '/baiyang.png' }, { title: 'chunv', src: imgPath + '/chunv.png' }, { title: 'jingniu', src: imgPath + '/jingniu.png' }, { title: 'juxie', src: imgPath + '/juxie.png' }, { title: 'mojie', src: imgPath + '/mojie.png' }, { title: 'sheshou', src: imgPath + '/sheshou.png' }, { title: 'shizi', src: imgPath + '/shizi.png' }, { title: 'shuangyu', src: imgPath + '/shuangyu.png' }, { title: 'shuiping', src: imgPath + '/shuiping.png' }, { title: 'tianping', src: imgPath + '/tianping.png' }, { title: 'tianxie', src: imgPath + '/tianxie.png' }];

exports.imgPath = imgPath;
exports.imageArr = imageArr;

/***/ }),

/***/ "./src/page/index.js":
/*!***************************!*\
  !*** ./src/page/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rcCarrousel = __webpack_require__(/*! rc-carrousel */ "./node_modules/rc-carrousel/lib/main.js");

var _rcCarrousel2 = _interopRequireDefault(_rcCarrousel);

var _config = __webpack_require__(/*! ./config */ "./src/page/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$PureComponent) {
  _inherits(Page, _React$PureComponent);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(_rcCarrousel2.default, {
        width: 500,
        perSideNum: 3,
        perSideWidth: 100,
        scale: 0.8,
        imageArr: _config.imageArr
      });
    }
  }]);

  return Page;
}(_react2.default.PureComponent);

exports.default = Page;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nUGF0aCIsImltYWdlQXJyIiwidGl0bGUiLCJzcmMiLCJQYWdlIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxVQUFRLFVBQWQ7O0FBRUEsSUFBTUMsV0FBVyxDQUNmLEVBQUVDLE9BQU0sVUFBUixFQUFvQkMsS0FBUUgsT0FBUixrQkFBcEIsRUFEZSxFQUVmLEVBQUVFLE9BQU0sU0FBUixFQUFtQkMsS0FBUUgsT0FBUixpQkFBbkIsRUFGZSxFQUdmLEVBQUVFLE9BQU0sT0FBUixFQUFpQkMsS0FBUUgsT0FBUixlQUFqQixFQUhlLEVBSWYsRUFBRUUsT0FBTSxTQUFSLEVBQW1CQyxLQUFRSCxPQUFSLGlCQUFuQixFQUplLEVBTWYsRUFBRUUsT0FBTSxPQUFSLEVBQWlCQyxLQUFRSCxPQUFSLGVBQWpCLEVBTmUsRUFPZixFQUFFRSxPQUFNLE9BQVIsRUFBaUJDLEtBQVFILE9BQVIsZUFBakIsRUFQZSxFQVFmLEVBQUVFLE9BQU0sU0FBUixFQUFtQkMsS0FBUUgsT0FBUixpQkFBbkIsRUFSZSxFQVNmLEVBQUVFLE9BQU0sT0FBUixFQUFpQkMsS0FBUUgsT0FBUixlQUFqQixFQVRlLEVBV2YsRUFBRUUsT0FBTSxVQUFSLEVBQW9CQyxLQUFRSCxPQUFSLGtCQUFwQixFQVhlLEVBWWYsRUFBRUUsT0FBTSxVQUFSLEVBQW9CQyxLQUFRSCxPQUFSLGtCQUFwQixFQVplLEVBYWYsRUFBRUUsT0FBTSxVQUFSLEVBQW9CQyxLQUFRSCxPQUFSLGtCQUFwQixFQWJlLEVBY2YsRUFBRUUsT0FBTSxTQUFSLEVBQW1CQyxLQUFRSCxPQUFSLGlCQUFuQixFQWRlLENBQWpCOztRQW1CRUEsTyxHQUFBQSxPO1FBQ0FDLFEsR0FBQUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkY7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRXFCRyxJOzs7Ozs7Ozs7Ozs2QkFFWDs7QUFFTixhQUNFLDhCQUFDLHFCQUFEO0FBQ0UsZUFBUSxHQURWO0FBRUUsb0JBQWEsQ0FGZjtBQUdFLHNCQUFlLEdBSGpCO0FBSUUsZUFBUSxHQUpWO0FBS0Usa0JBQVdIO0FBTGIsUUFERjtBQVNEOzs7O0VBYitCSSxnQkFBTUMsYTs7a0JBQW5CRixJIiwiZmlsZSI6Im1haW4uNDM5OTlhMzgyYTlkZTNiYzdjZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltZ1BhdGg9Jy4vYXNzZXRzJztcblxuY29uc3QgaW1hZ2VBcnIgPSBbXG4gIHsgdGl0bGU6J3NodWFuZ3ppJywgc3JjOmAkeyBpbWdQYXRoIH0vc2h1YW5nemkucG5nYCB9LFxuICB7IHRpdGxlOidiYWl5YW5nJywgc3JjOmAkeyBpbWdQYXRoIH0vYmFpeWFuZy5wbmdgIH0sXG4gIHsgdGl0bGU6J2NodW52Jywgc3JjOmAkeyBpbWdQYXRoIH0vY2h1bnYucG5nYCB9LFxuICB7IHRpdGxlOidqaW5nbml1Jywgc3JjOmAkeyBpbWdQYXRoIH0vamluZ25pdS5wbmdgIH0sXG5cbiAgeyB0aXRsZTonanV4aWUnLCBzcmM6YCR7IGltZ1BhdGggfS9qdXhpZS5wbmdgIH0sXG4gIHsgdGl0bGU6J21vamllJywgc3JjOmAkeyBpbWdQYXRoIH0vbW9qaWUucG5nYCB9LFxuICB7IHRpdGxlOidzaGVzaG91Jywgc3JjOmAkeyBpbWdQYXRoIH0vc2hlc2hvdS5wbmdgIH0sXG4gIHsgdGl0bGU6J3NoaXppJywgc3JjOmAkeyBpbWdQYXRoIH0vc2hpemkucG5nYCB9LFxuXG4gIHsgdGl0bGU6J3NodWFuZ3l1Jywgc3JjOmAkeyBpbWdQYXRoIH0vc2h1YW5neXUucG5nYCB9LFxuICB7IHRpdGxlOidzaHVpcGluZycsIHNyYzpgJHsgaW1nUGF0aCB9L3NodWlwaW5nLnBuZ2AgfSxcbiAgeyB0aXRsZTondGlhbnBpbmcnLCBzcmM6YCR7IGltZ1BhdGggfS90aWFucGluZy5wbmdgIH0sXG4gIHsgdGl0bGU6J3RpYW54aWUnLCBzcmM6YCR7IGltZ1BhdGggfS90aWFueGllLnBuZ2AgfSxcblxuXVxuXG5leHBvcnQge1xuICBpbWdQYXRoLFxuICBpbWFnZUFyclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fycm91c2VsIGZyb20gJ3JjLWNhcnJvdXNlbCc7XG5cbmltcG9ydCB7IGltYWdlQXJyLCBpbWdQYXRoIH0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudHtcblxuICByZW5kZXIoKXtcblxuICAgIHJldHVybihcbiAgICAgIDxDYXJyb3VzZWxcbiAgICAgICAgd2lkdGg9eyA1MDAgfVxuICAgICAgICBwZXJTaWRlTnVtPXsgMyB9XG4gICAgICAgIHBlclNpZGVXaWR0aD17IDEwMCB9XG4gICAgICAgIHNjYWxlPXsgMC44IH1cbiAgICAgICAgaW1hZ2VBcnI9eyBpbWFnZUFyciB9XG4gICAgICAvPlxuICAgICkgXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9