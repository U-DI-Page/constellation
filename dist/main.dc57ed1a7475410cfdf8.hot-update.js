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

      (0, _request2.default)('star?needMonth=1&star=shuangzi', {
        hello: 'isme'
      }).then(function (res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQYWdlIiwiaGVsbG8iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlcyIsIlN0eWxlcyIsImhlYWRlciIsImltYWdlQXJyIiwiYm9keSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7O0FBSEE7O0FBRUE7OztJQUlxQkEsSTs7Ozs7Ozs7Ozs7d0NBRUE7O0FBRWpCLDZCQUFRLGdDQUFSLEVBQXlDO0FBQ3ZDQyxlQUFNO0FBRGlDLE9BQXpDLEVBRUdDLElBRkgsQ0FFUSxlQUFLO0FBQ1hDLGdCQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDRCxPQUpEO0FBS0Q7Ozs2QkFFTzs7QUFFTixhQUNFO0FBQUMsdUJBQUQ7QUFBQTtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVlDLHNCQUFPQyxNQUF4QjtBQUNFLHdDQUFDLHFCQUFEO0FBQ0UsbUJBQVEsR0FEVjtBQUVFLHdCQUFhLENBRmY7QUFHRSwwQkFBZSxHQUhqQjtBQUlFLG1CQUFRLEdBSlY7QUFLRSxzQkFBV0M7QUFMYjtBQURGLFNBRkY7QUFXRSwrQ0FBSyxXQUFZRixzQkFBT0csSUFBeEI7QUFYRixPQURGO0FBaUJEOzs7O0VBOUIrQkMsZ0JBQU1DLGE7O2tCQUFuQlgsSSIsImZpbGUiOiJtYWluLmRjNTdlZDFhNzQ3NTQxMGNmZGY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fycm91c2VsIGZyb20gJ3JjLWNhcnJvdXNlbCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0Jztcbi8vIOWbvueJh+i3r+W+hFxuaW1wb3J0IHsgaW1hZ2VBcnIgfSBmcm9tICcuL2NvbmZpZyc7XG4vLyDmoLflvI9cbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2Nzcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnR7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgIHJlcXVlc3QoJ3N0YXI/bmVlZE1vbnRoPTEmc3Rhcj1zaHVhbmd6aScse1xuICAgICAgaGVsbG86J2lzbWUnXG4gICAgfSkudGhlbihyZXM9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICByZXR1cm4oXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHsvKiDlpLTpg6ggKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgU3R5bGVzLmhlYWRlciB9PlxuICAgICAgICAgIDxDYXJyb3VzZWxcbiAgICAgICAgICAgIHdpZHRoPXsgNTAwIH1cbiAgICAgICAgICAgIHBlclNpZGVOdW09eyAzIH1cbiAgICAgICAgICAgIHBlclNpZGVXaWR0aD17IDEwMCB9XG4gICAgICAgICAgICBzY2FsZT17IDAuOCB9XG4gICAgICAgICAgICBpbWFnZUFycj17IGltYWdlQXJyIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBTdHlsZXMuYm9keSB9PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApIFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==