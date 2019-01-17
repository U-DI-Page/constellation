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
            align: 'top',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiUGFnZSIsImhhbmRsZVRhYkNoYW5nZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzIiwiU3R5bGVzIiwiaGVhZGVyIiwiaW1hZ2VBcnIiLCJib2R5IiwidGV4dEFsaWduIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUhBOztBQUVBOzs7QUFHQSxJQUFNQSxVQUFVLGVBQUtBLE9BQXJCOztJQUNxQkMsSTs7Ozs7Ozs7Ozs7Ozs7a0xBU25CQyxlLEdBQWdCLFlBQUksQ0FFbkIsQzs7Ozs7d0NBVGtCOztBQUVqQiw2QkFBUSxNQUFSLEVBQWdCQyxJQUFoQixDQUFxQixlQUFLO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0QsT0FGRDtBQUdEOzs7NkJBTU87O0FBRU4sYUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFZQyxzQkFBT0MsTUFBeEI7QUFDRSx3Q0FBQyxxQkFBRDtBQUNFLG1CQUFRLEdBRFY7QUFFRSx3QkFBYSxDQUZmO0FBR0UsMEJBQWUsR0FIakI7QUFJRSxtQkFBUSxHQUpWO0FBS0UsbUJBQU0sS0FMUjtBQU1FLHNCQUFXQztBQU5iO0FBREYsU0FGRjtBQVlFO0FBQUE7QUFBQSxZQUFLLFdBQVlGLHNCQUFPRyxJQUF4QjtBQUNFO0FBQUE7QUFBQTtBQUNFLGdDQUFpQixHQURuQjtBQUVFLHdCQUFXLEtBQUtSLGVBRmxCO0FBR0UsMkJBQWEsRUFBRVMsV0FBVyxRQUFiO0FBSGY7QUFLRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxhQUFEO0FBREYsYUFMRjtBQVFFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGtCQUFEO0FBREYsYUFSRjtBQVdFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGNBQUQ7QUFERixhQVhGO0FBY0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsZUFBRDtBQURGLGFBZEY7QUFpQkU7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsY0FBRDtBQURGO0FBakJGO0FBREY7QUFaRixPQURGO0FBc0NEOzs7O0VBckQrQkMsZ0JBQU1DLGE7O2tCQUFuQlosSSIsImZpbGUiOiJtYWluLmNmZDM4ZGJlMWI5NGI1MDY4NDNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fycm91c2VsIGZyb20gJ3JjLWNhcnJvdXNlbCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB7IFRhYnMgfSBmcm9tICdhbnRkJztcbmltcG9ydCBEYXkgZnJvbSAnLi9kYXknO1xuaW1wb3J0IFRvbW9ycm93IGZyb20gJy4vdG9tb3Jyb3cnO1xuaW1wb3J0IFdlZWsgZnJvbSAnLi93ZWVrJztcbmltcG9ydCBNb250aCBmcm9tICcuL21vbnRoJztcbmltcG9ydCBZZWFyIGZyb20gJy4veWVhcic7XG5cbi8vIOWbvueJh+i3r+W+hFxuaW1wb3J0IHsgaW1hZ2VBcnIgfSBmcm9tICcuL2NvbmZpZyc7XG4vLyDmoLflvI9cbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudHtcblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuXG4gICAgcmVxdWVzdCgnc3RhcicpLnRoZW4ocmVzPT57XG4gICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVRhYkNoYW5nZT0oKT0+e1xuXG4gIH1cblxuICByZW5kZXIoKXtcblxuICAgIHJldHVybihcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgey8qIOWktOmDqCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBTdHlsZXMuaGVhZGVyIH0+XG4gICAgICAgICAgPENhcnJvdXNlbFxuICAgICAgICAgICAgd2lkdGg9eyA1MDAgfVxuICAgICAgICAgICAgcGVyU2lkZU51bT17IDMgfVxuICAgICAgICAgICAgcGVyU2lkZVdpZHRoPXsgMTAwIH1cbiAgICAgICAgICAgIHNjYWxlPXsgMC43IH1cbiAgICAgICAgICAgIGFsaWduPVwidG9wXCJcbiAgICAgICAgICAgIGltYWdlQXJyPXsgaW1hZ2VBcnIgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFN0eWxlcy5ib2R5IH0+XG4gICAgICAgICAgPFRhYnMgXG4gICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIFxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVRhYkNoYW5nZSB9XG4gICAgICAgICAgICB0YWJCYXJTdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5LuK5pelXCIga2V5PVwiMVwiPlxuICAgICAgICAgICAgICA8RGF5IC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLmmI7ml6VcIiBrZXk9XCIyXCI+XG4gICAgICAgICAgICAgIDxUb21vcnJvdyAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5pys5ZGoXCIga2V5PVwiM1wiPlxuICAgICAgICAgICAgICA8V2VlayAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5pys5pyIXCIga2V5PVwiNFwiPlxuICAgICAgICAgICAgICA8TW9udGggLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuS7iuW5tFwiIGtleT1cIjVcIj5cbiAgICAgICAgICAgICAgPFllYXIgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICA8L1RhYnM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApIFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==