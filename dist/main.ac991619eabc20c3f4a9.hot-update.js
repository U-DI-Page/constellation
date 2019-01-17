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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiUGFnZSIsImhhbmRsZVRhYkNoYW5nZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzIiwiU3R5bGVzIiwiaGVhZGVyIiwiaW1hZ2VBcnIiLCJib2R5IiwidGV4dEFsaWduIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQUhBOztBQUVBOzs7QUFHQSxJQUFNQSxVQUFVLGVBQUtBLE9BQXJCOztJQUNxQkMsSTs7Ozs7Ozs7Ozs7Ozs7a0xBU25CQyxlLEdBQWdCLFlBQUksQ0FFbkIsQzs7Ozs7d0NBVGtCOztBQUVqQiw2QkFBUSxNQUFSLEVBQWdCQyxJQUFoQixDQUFxQixlQUFLO0FBQ3hCQyxnQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0QsT0FGRDtBQUdEOzs7NkJBTU87O0FBRU4sYUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFZQyxzQkFBT0MsTUFBeEI7QUFDRSx3Q0FBQyxxQkFBRDtBQUNFLG1CQUFRLEdBRFY7QUFFRSx3QkFBYSxDQUZmO0FBR0UsMEJBQWUsR0FIakI7QUFJRSxtQkFBUSxHQUpWO0FBS0Usc0JBQVdDO0FBTGI7QUFERixTQUZGO0FBV0U7QUFBQTtBQUFBLFlBQUssV0FBWUYsc0JBQU9HLElBQXhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQWlCLEdBRG5CO0FBRUUsd0JBQVcsS0FBS1IsZUFGbEI7QUFHRSwyQkFBYSxFQUFFUyxXQUFXLFFBQWI7QUFIZjtBQUtFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGFBQUQ7QUFERixhQUxGO0FBUUU7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsa0JBQUQ7QUFERixhQVJGO0FBV0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsY0FBRDtBQURGLGFBWEY7QUFjRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxlQUFEO0FBREYsYUFkRjtBQWlCRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxjQUFEO0FBREY7QUFqQkY7QUFERjtBQVhGLE9BREY7QUFxQ0Q7Ozs7RUFwRCtCQyxnQkFBTUMsYTs7a0JBQW5CWixJIiwiZmlsZSI6Im1haW4uYWM5OTE2MTllYWJjMjBjM2Y0YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJyb3VzZWwgZnJvbSAncmMtY2Fycm91c2VsJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHsgVGFicyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IERheSBmcm9tICcuL2RheSc7XG5pbXBvcnQgVG9tb3Jyb3cgZnJvbSAnLi90b21vcnJvdyc7XG5pbXBvcnQgV2VlayBmcm9tICcuL3dlZWsnO1xuaW1wb3J0IE1vbnRoIGZyb20gJy4vbW9udGgnO1xuaW1wb3J0IFllYXIgZnJvbSAnLi95ZWFyJztcblxuLy8g5Zu+54mH6Lev5b6EXG5pbXBvcnQgeyBpbWFnZUFyciB9IGZyb20gJy4vY29uZmlnJztcbi8vIOagt+W8j1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50e1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICByZXF1ZXN0KCdzdGFyJykudGhlbihyZXM9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVGFiQ2hhbmdlPSgpPT57XG5cbiAgfVxuXG4gIHJlbmRlcigpe1xuXG4gICAgcmV0dXJuKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7Lyog5aS06YOoICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFN0eWxlcy5oZWFkZXIgfT5cbiAgICAgICAgICA8Q2Fycm91c2VsXG4gICAgICAgICAgICB3aWR0aD17IDUwMCB9XG4gICAgICAgICAgICBwZXJTaWRlTnVtPXsgMyB9XG4gICAgICAgICAgICBwZXJTaWRlV2lkdGg9eyAxMDAgfVxuICAgICAgICAgICAgc2NhbGU9eyAwLjcgfVxuICAgICAgICAgICAgaW1hZ2VBcnI9eyBpbWFnZUFyciB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgU3R5bGVzLmJvZHkgfT5cbiAgICAgICAgICA8VGFicyBcbiAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCIgXG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuaGFuZGxlVGFiQ2hhbmdlIH1cbiAgICAgICAgICAgIHRhYkJhclN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLku4rml6VcIiBrZXk9XCIxXCI+XG4gICAgICAgICAgICAgIDxEYXkgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuaYjuaXpVwiIGtleT1cIjJcIj5cbiAgICAgICAgICAgICAgPFRvbW9ycm93IC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLmnKzlkahcIiBrZXk9XCIzXCI+XG4gICAgICAgICAgICAgIDxXZWVrIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLmnKzmnIhcIiBrZXk9XCI0XCI+XG4gICAgICAgICAgICAgIDxNb250aCAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5LuK5bm0XCIga2V5PVwiNVwiPlxuICAgICAgICAgICAgICA8WWVhciAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICkgXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9