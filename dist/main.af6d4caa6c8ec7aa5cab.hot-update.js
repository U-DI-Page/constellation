webpackHotUpdate("main",{

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

var _request = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _config = __webpack_require__(/*! ./config */ "./src/page/config.js");

var _indexModule = __webpack_require__(/*! ./index.module.scss */ "./src/page/index.module.scss");

var _indexModule2 = _interopRequireDefault(_indexModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 图片路径

// 样式


var Page = function (_React$PureComponent) {
  _inherits(Page, _React$PureComponent);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {

      (0, _request2.default)('star').then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: _indexModule2.default.header },
          _react2.default.createElement(_rcCarrousel2.default, {
            width: 500,
            perSideNum: 3,
            perSideWidth: 100,
            scale: 0.8,
            imageArr: _config.imageArr
          })
        ),
        _react2.default.createElement('div', { className: _indexModule2.default.body })
      );
    }
  }]);

  return Page;
}(_react2.default.PureComponent);

exports.default = Page;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJTdHlsZXMiLCJoZWFkZXIiLCJpbWFnZUFyciIsImJvZHkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7OztBQUhBOztBQUVBOzs7SUFJcUJBLEk7Ozs7Ozs7Ozs7O3dDQUVBOztBQUVqQiw2QkFBUSxNQUFSLEVBQWdCQyxJQUFoQixDQUFxQixlQUFLO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0QsT0FGRDtBQUdEOzs7NkJBRU87O0FBRU4sYUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFZQyxzQkFBT0MsTUFBeEI7QUFDRSx3Q0FBQyxxQkFBRDtBQUNFLG1CQUFRLEdBRFY7QUFFRSx3QkFBYSxDQUZmO0FBR0UsMEJBQWUsR0FIakI7QUFJRSxtQkFBUSxHQUpWO0FBS0Usc0JBQVdDO0FBTGI7QUFERixTQUZGO0FBV0UsK0NBQUssV0FBWUYsc0JBQU9HLElBQXhCO0FBWEYsT0FERjtBQWlCRDs7OztFQTVCK0JDLGdCQUFNQyxhOztrQkFBbkJWLEkiLCJmaWxlIjoibWFpbi5hZjZkNGNhYTZjOGVjN2FhNWNhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcnJvdXNlbCBmcm9tICdyYy1jYXJyb3VzZWwnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XG4vLyDlm77niYfot6/lvoRcbmltcG9ydCB7IGltYWdlQXJyIH0gZnJvbSAnLi9jb25maWcnO1xuLy8g5qC35byPXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50e1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICByZXF1ZXN0KCdzdGFyJykudGhlbihyZXM9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICByZXR1cm4oXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHsvKiDlpLTpg6ggKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgU3R5bGVzLmhlYWRlciB9PlxuICAgICAgICAgIDxDYXJyb3VzZWxcbiAgICAgICAgICAgIHdpZHRoPXsgNTAwIH1cbiAgICAgICAgICAgIHBlclNpZGVOdW09eyAzIH1cbiAgICAgICAgICAgIHBlclNpZGVXaWR0aD17IDEwMCB9XG4gICAgICAgICAgICBzY2FsZT17IDAuOCB9XG4gICAgICAgICAgICBpbWFnZUFycj17IGltYWdlQXJyIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBTdHlsZXMuYm9keSB9PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApIFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==