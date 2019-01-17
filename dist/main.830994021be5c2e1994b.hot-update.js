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

var _tabs = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/lib/tabs/style/css */ "./node_modules/antd/lib/tabs/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _rcCarrousel = __webpack_require__(/*! rc-carrousel */ "./node_modules/rc-carrousel/lib/main.js");

var _rcCarrousel2 = _interopRequireDefault(_rcCarrousel);

var _request = __webpack_require__(/*! ../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _day = __webpack_require__(/*! ./day */ "./src/page/day/index.js");

var _day2 = _interopRequireDefault(_day);

var _tomorrow = __webpack_require__(/*! ./tomorrow */ "./src/page/tomorrow/index.js");

var _tomorrow2 = _interopRequireDefault(_tomorrow);

var _week = __webpack_require__(/*! ./week */ "./src/page/week/index.js");

var _week2 = _interopRequireDefault(_week);

var _month = __webpack_require__(/*! ./month */ "./src/page/month/index.js");

var _month2 = _interopRequireDefault(_month);

var _year = __webpack_require__(/*! ./year */ "./src/page/year/index.js");

var _year2 = _interopRequireDefault(_year);

var _config = __webpack_require__(/*! ./config */ "./src/page/config.js");

var _indexModule = __webpack_require__(/*! ./index.module.scss */ "./src/page/index.module.scss");

var _indexModule2 = _interopRequireDefault(_indexModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 图片路径

// 样式


var TabPane = _tabs2.default.TabPane;

var Page = function (_React$PureComponent) {
  _inherits(Page, _React$PureComponent);

  function Page() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Page);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref, [this].concat(args))), _this), _this.handleTabChange = function () {}, _temp), _possibleConstructorReturn(_this, _ret);
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
            scale: 0.7,
            align: top,
            imageArr: _config.imageArr
          })
        ),
        _react2.default.createElement(
          'div',
          { className: _indexModule2.default.body },
          _react2.default.createElement(
            _tabs2.default,
            {
              defaultActiveKey: '1',
              onChange: this.handleTabChange,
              tabBarStyle: { textAlign: 'center' }
            },
            _react2.default.createElement(
              TabPane,
              { tab: '\u4ECA\u65E5', key: '1' },
              _react2.default.createElement(_day2.default, null)
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u660E\u65E5', key: '2' },
              _react2.default.createElement(_tomorrow2.default, null)
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u672C\u5468', key: '3' },
              _react2.default.createElement(_week2.default, null)
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u672C\u6708', key: '4' },
              _react2.default.createElement(_month2.default, null)
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u4ECA\u5E74', key: '5' },
              _react2.default.createElement(_year2.default, null)
            )
          )
        )
      );
    }
  }]);

  return Page;
}(_react2.default.PureComponent);

exports.default = Page;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiUGFnZSIsImhhbmRsZVRhYkNoYW5nZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzIiwiU3R5bGVzIiwiaGVhZGVyIiwidG9wIiwiaW1hZ2VBcnIiLCJib2R5IiwidGV4dEFsaWduIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUhBOztBQUVBOzs7QUFHQSxJQUFNQSxVQUFVLGVBQUtBLE9BQXJCOztJQUNxQkMsSTs7Ozs7Ozs7Ozs7Ozs7a0xBU25CQyxlLEdBQWdCLFlBQUksQ0FFbkIsQzs7Ozs7d0NBVGtCOztBQUVqQiw2QkFBUSxNQUFSLEVBQWdCQyxJQUFoQixDQUFxQixlQUFLO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0QsT0FGRDtBQUdEOzs7NkJBTU87O0FBRU4sYUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFZQyxzQkFBT0MsTUFBeEI7QUFDRSx3Q0FBQyxxQkFBRDtBQUNFLG1CQUFRLEdBRFY7QUFFRSx3QkFBYSxDQUZmO0FBR0UsMEJBQWUsR0FIakI7QUFJRSxtQkFBUSxHQUpWO0FBS0UsbUJBQVFDLEdBTFY7QUFNRSxzQkFBV0M7QUFOYjtBQURGLFNBRkY7QUFZRTtBQUFBO0FBQUEsWUFBSyxXQUFZSCxzQkFBT0ksSUFBeEI7QUFDRTtBQUFBO0FBQUE7QUFDRSxnQ0FBaUIsR0FEbkI7QUFFRSx3QkFBVyxLQUFLVCxlQUZsQjtBQUdFLDJCQUFhLEVBQUVVLFdBQVcsUUFBYjtBQUhmO0FBS0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsYUFBRDtBQURGLGFBTEY7QUFRRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxrQkFBRDtBQURGLGFBUkY7QUFXRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxjQUFEO0FBREYsYUFYRjtBQWNFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGVBQUQ7QUFERixhQWRGO0FBaUJFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGNBQUQ7QUFERjtBQWpCRjtBQURGO0FBWkYsT0FERjtBQXNDRDs7OztFQXJEK0JDLGdCQUFNQyxhOztrQkFBbkJiLEkiLCJmaWxlIjoibWFpbi44MzA5OTQwMjFiZTVjMmUxOTk0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcnJvdXNlbCBmcm9tICdyYy1jYXJyb3VzZWwnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBUYWJzIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRGF5IGZyb20gJy4vZGF5JztcbmltcG9ydCBUb21vcnJvdyBmcm9tICcuL3RvbW9ycm93JztcbmltcG9ydCBXZWVrIGZyb20gJy4vd2Vlayc7XG5pbXBvcnQgTW9udGggZnJvbSAnLi9tb250aCc7XG5pbXBvcnQgWWVhciBmcm9tICcuL3llYXInO1xuXG4vLyDlm77niYfot6/lvoRcbmltcG9ydCB7IGltYWdlQXJyIH0gZnJvbSAnLi9jb25maWcnO1xuLy8g5qC35byPXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBUYWJQYW5lID0gVGFicy5UYWJQYW5lO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnR7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgIHJlcXVlc3QoJ3N0YXInKS50aGVuKHJlcz0+e1xuICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVUYWJDaGFuZ2U9KCk9PntcblxuICB9XG5cbiAgcmVuZGVyKCl7XG5cbiAgICByZXR1cm4oXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHsvKiDlpLTpg6ggKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgU3R5bGVzLmhlYWRlciB9PlxuICAgICAgICAgIDxDYXJyb3VzZWxcbiAgICAgICAgICAgIHdpZHRoPXsgNTAwIH1cbiAgICAgICAgICAgIHBlclNpZGVOdW09eyAzIH1cbiAgICAgICAgICAgIHBlclNpZGVXaWR0aD17IDEwMCB9XG4gICAgICAgICAgICBzY2FsZT17IDAuNyB9XG4gICAgICAgICAgICBhbGlnbj17IHRvcCB9XG4gICAgICAgICAgICBpbWFnZUFycj17IGltYWdlQXJyIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBTdHlsZXMuYm9keSB9PlxuICAgICAgICAgIDxUYWJzIFxuICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVUYWJDaGFuZ2UgfVxuICAgICAgICAgICAgdGFiQmFyU3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuS7iuaXpVwiIGtleT1cIjFcIj5cbiAgICAgICAgICAgICAgPERheSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5piO5pelXCIga2V5PVwiMlwiPlxuICAgICAgICAgICAgICA8VG9tb3Jyb3cgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuacrOWRqFwiIGtleT1cIjNcIj5cbiAgICAgICAgICAgICAgPFdlZWsgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuacrOaciFwiIGtleT1cIjRcIj5cbiAgICAgICAgICAgICAgPE1vbnRoIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLku4rlubRcIiBrZXk9XCI1XCI+XG4gICAgICAgICAgICAgIDxZZWFyIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKSBcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=