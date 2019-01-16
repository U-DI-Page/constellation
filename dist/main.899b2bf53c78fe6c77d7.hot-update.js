webpackHotUpdate("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _page = __webpack_require__(/*! ./page */ "./src/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _index = __webpack_require__(/*! ./index.scss */ "./src/index.scss");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {

  return _react2.default.createElement(
    'div',
    { className: _index2.default.box },
    _react2.default.createElement(_page2.default, null)
  );
};
// 样式


_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('#root'));

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var imgPath = './assets';

var imageArr = [{ title: 'shuangzi', src: imgPath + '/shuangzi.png' }, { title: 'baiyang', src: imgPath + '/baiyang.png' }, { title: 'chunv', src: imgPath + '/chunv.png' }, { title: 'jingniu', src: imgPath + '/jingniu.png' }, { title: 'juxie', src: imgPath + '/juxie.png' }, { title: 'mojie', src: imgPath + '/mojie.png' }, { title: 'sheshou', src: imgPath + '/sheshou.png' }, { title: 'shizi', src: imgPath + '/shizi.png' }, { title: 'shuangyu', src: imgPath + '/shuangyu.png' }, { title: 'shuiping', src: imgPath + '/shuiping.png' }, { title: 'tianping', src: imgPath + '/tianping.png' }, { title: 'tianxie', src: imgPath + '/tianxie.png' }];

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
        imageArr: imageArr
      });
    }
  }]);

  return Page;
}(_react2.default.PureComponent);

exports.default = Page;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwIiwic3R5bGVzIiwiYm94IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWdQYXRoIiwiaW1hZ2VBcnIiLCJ0aXRsZSIsInNyYyIsIlBhZ2UiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFHQSxJQUFNQSxNQUFJLFNBQUpBLEdBQUksR0FBSTs7QUFFWixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVlDLGdCQUFPQyxHQUF4QjtBQUNFLGtDQUFDLGNBQUQ7QUFERixHQURGO0FBS0QsQ0FQRDtBQUpBOzs7QUFhQUMsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQyxVQUFRLFVBQWQ7O0FBRUUsSUFBTUMsV0FBVyxDQUNmLEVBQUVDLE9BQU0sVUFBUixFQUFvQkMsS0FBUUgsT0FBUixrQkFBcEIsRUFEZSxFQUVmLEVBQUVFLE9BQU0sU0FBUixFQUFtQkMsS0FBUUgsT0FBUixpQkFBbkIsRUFGZSxFQUdmLEVBQUVFLE9BQU0sT0FBUixFQUFpQkMsS0FBUUgsT0FBUixlQUFqQixFQUhlLEVBSWYsRUFBRUUsT0FBTSxTQUFSLEVBQW1CQyxLQUFRSCxPQUFSLGlCQUFuQixFQUplLEVBTWYsRUFBRUUsT0FBTSxPQUFSLEVBQWlCQyxLQUFRSCxPQUFSLGVBQWpCLEVBTmUsRUFPZixFQUFFRSxPQUFNLE9BQVIsRUFBaUJDLEtBQVFILE9BQVIsZUFBakIsRUFQZSxFQVFmLEVBQUVFLE9BQU0sU0FBUixFQUFtQkMsS0FBUUgsT0FBUixpQkFBbkIsRUFSZSxFQVNmLEVBQUVFLE9BQU0sT0FBUixFQUFpQkMsS0FBUUgsT0FBUixlQUFqQixFQVRlLEVBV2YsRUFBRUUsT0FBTSxVQUFSLEVBQW9CQyxLQUFRSCxPQUFSLGtCQUFwQixFQVhlLEVBWWYsRUFBRUUsT0FBTSxVQUFSLEVBQW9CQyxLQUFRSCxPQUFSLGtCQUFwQixFQVplLEVBYWYsRUFBRUUsT0FBTSxVQUFSLEVBQW9CQyxLQUFRSCxPQUFSLGtCQUFwQixFQWJlLEVBY2YsRUFBRUUsT0FBTSxTQUFSLEVBQW1CQyxLQUFRSCxPQUFSLGlCQUFuQixFQWRlLENBQWpCOztJQWtCbUJJLEk7Ozs7Ozs7Ozs7OzZCQUVYOztBQUVOLGFBQ0UsOEJBQUMscUJBQUQ7QUFDRSxlQUFRLEdBRFY7QUFFRSxvQkFBYSxDQUZmO0FBR0Usc0JBQWUsR0FIakI7QUFJRSxlQUFRLEdBSlY7QUFLRSxrQkFBV0g7QUFMYixRQURGO0FBU0Q7Ozs7RUFiK0JJLGdCQUFNQyxhOztrQkFBbkJGLEkiLCJmaWxlIjoibWFpbi44OTliMmJmNTNjNzhmZTZjNzdkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlJztcbi8vIOagt+W8j1xuaW1wb3J0IHN0eWxlcyBmcm9tICAnLi9pbmRleC5zY3NzJztcblxuXG5jb25zdCBBcHA9KCk9PntcbiAgXG4gIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlcy5ib3ggfT5cbiAgICAgIDxQYWdlIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290JykpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENhcnJvdXNlbCBmcm9tICdyYy1jYXJyb3VzZWwnO1xuXG5jb25zdCBpbWdQYXRoPScuL2Fzc2V0cyc7XG5cbiAgY29uc3QgaW1hZ2VBcnIgPSBbXG4gICAgeyB0aXRsZTonc2h1YW5nemknLCBzcmM6YCR7IGltZ1BhdGggfS9zaHVhbmd6aS5wbmdgIH0sXG4gICAgeyB0aXRsZTonYmFpeWFuZycsIHNyYzpgJHsgaW1nUGF0aCB9L2JhaXlhbmcucG5nYCB9LFxuICAgIHsgdGl0bGU6J2NodW52Jywgc3JjOmAkeyBpbWdQYXRoIH0vY2h1bnYucG5nYCB9LFxuICAgIHsgdGl0bGU6J2ppbmduaXUnLCBzcmM6YCR7IGltZ1BhdGggfS9qaW5nbml1LnBuZ2AgfSxcblxuICAgIHsgdGl0bGU6J2p1eGllJywgc3JjOmAkeyBpbWdQYXRoIH0vanV4aWUucG5nYCB9LFxuICAgIHsgdGl0bGU6J21vamllJywgc3JjOmAkeyBpbWdQYXRoIH0vbW9qaWUucG5nYCB9LFxuICAgIHsgdGl0bGU6J3NoZXNob3UnLCBzcmM6YCR7IGltZ1BhdGggfS9zaGVzaG91LnBuZ2AgfSxcbiAgICB7IHRpdGxlOidzaGl6aScsIHNyYzpgJHsgaW1nUGF0aCB9L3NoaXppLnBuZ2AgfSxcblxuICAgIHsgdGl0bGU6J3NodWFuZ3l1Jywgc3JjOmAkeyBpbWdQYXRoIH0vc2h1YW5neXUucG5nYCB9LFxuICAgIHsgdGl0bGU6J3NodWlwaW5nJywgc3JjOmAkeyBpbWdQYXRoIH0vc2h1aXBpbmcucG5nYCB9LFxuICAgIHsgdGl0bGU6J3RpYW5waW5nJywgc3JjOmAkeyBpbWdQYXRoIH0vdGlhbnBpbmcucG5nYCB9LFxuICAgIHsgdGl0bGU6J3RpYW54aWUnLCBzcmM6YCR7IGltZ1BhdGggfS90aWFueGllLnBuZ2AgfSxcblxuICBdXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50e1xuXG4gIHJlbmRlcigpe1xuXG4gICAgcmV0dXJuKFxuICAgICAgPENhcnJvdXNlbFxuICAgICAgICB3aWR0aD17IDUwMCB9XG4gICAgICAgIHBlclNpZGVOdW09eyAzIH1cbiAgICAgICAgcGVyU2lkZVdpZHRoPXsgMTAwIH1cbiAgICAgICAgc2NhbGU9eyAwLjggfVxuICAgICAgICBpbWFnZUFycj17IGltYWdlQXJyIH1cbiAgICAgIC8+XG4gICAgKSBcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=