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

var _util = __webpack_require__(/*! ../utils/util */ "./src/utils/util.js");

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

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));

    _this.getData = function () {
      (0, _request2.default)('star').then(function (res) {
        if (res.status === 200) {
          _this.setState({
            data: res.data.showapi_res_body
          });
        }
      });
    };

    _this.handleTabChange = function () {};

    _this.state = {
      data: {}
    };
    return _this;
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}

    // 获取数据

  }, {
    key: 'render',
    value: function render() {
      var data = this.state.data;


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
              _react2.default.createElement(_day2.default, { data: data.day })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiUGFnZSIsInByb3BzIiwiYXJndW1lbnRzIiwiZ2V0RGF0YSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJzaG93YXBpX3Jlc19ib2R5IiwiaGFuZGxlVGFiQ2hhbmdlIiwic3RhdGUiLCJTdHlsZXMiLCJoZWFkZXIiLCJpbWFnZUFyciIsImJvZHkiLCJ0ZXh0QWxpZ24iLCJkYXkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSEE7O0FBRUE7OztBQUdBLElBQU1BLFVBQVUsZUFBS0EsT0FBckI7O0lBQ3FCQyxJOzs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2R0FDUEMsU0FETzs7QUFBQSxVQWNsQkMsT0Fka0IsR0FjVixZQUFJO0FBQ1YsNkJBQVEsTUFBUixFQUFnQkMsSUFBaEIsQ0FBcUIsZUFBSztBQUN4QixZQUFHQyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFBc0I7QUFDcEIsZ0JBQUtDLFFBQUwsQ0FBYztBQUNaQyxrQkFBS0gsSUFBSUcsSUFBSixDQUFTQztBQURGLFdBQWQ7QUFHRDtBQUNGLE9BTkQ7QUFPRCxLQXRCaUI7O0FBQUEsVUF3QmxCQyxlQXhCa0IsR0F3QkYsWUFBSSxDQUVuQixDQTFCaUI7O0FBR2hCLFVBQUtDLEtBQUwsR0FBYTtBQUNYSCxZQUFNO0FBREssS0FBYjtBQUhnQjtBQU1qQjs7Ozt3Q0FFa0IsQ0FHbEI7O0FBRUQ7Ozs7NkJBZVE7QUFBQSxVQUNFQSxJQURGLEdBQ1csS0FBS0csS0FEaEIsQ0FDRUgsSUFERjs7O0FBR04sYUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFZSSxzQkFBT0MsTUFBeEI7QUFDRSx3Q0FBQyxxQkFBRDtBQUNFLG1CQUFRLEdBRFY7QUFFRSx3QkFBYSxDQUZmO0FBR0UsMEJBQWUsR0FIakI7QUFJRSxtQkFBUSxHQUpWO0FBS0Usc0JBQVdDO0FBTGI7QUFERixTQUZGO0FBV0U7QUFBQTtBQUFBLFlBQUssV0FBWUYsc0JBQU9HLElBQXhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQWlCLEdBRG5CO0FBRUUsd0JBQVcsS0FBS0wsZUFGbEI7QUFHRSwyQkFBYSxFQUFFTSxXQUFXLFFBQWI7QUFIZjtBQUtFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGFBQUQsSUFBSyxNQUFPUixLQUFLUyxHQUFqQjtBQURGLGFBTEY7QUFRRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxrQkFBRDtBQURGLGFBUkY7QUFXRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxjQUFEO0FBREYsYUFYRjtBQWNFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGVBQUQ7QUFERixhQWRGO0FBaUJFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGNBQUQ7QUFERjtBQWpCRjtBQURGO0FBWEYsT0FERjtBQXFDRDs7OztFQXJFK0JDLGdCQUFNQyxhOztrQkFBbkJuQixJIiwiZmlsZSI6Im1haW4uN2E5M2ViZGY3YzBmMTdlNzMwM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJyb3VzZWwgZnJvbSAncmMtY2Fycm91c2VsJztcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IHsgc2V0TG9jYWxzdG9yYWdlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbCc7XG5pbXBvcnQgeyBUYWJzIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgRGF5IGZyb20gJy4vZGF5JztcbmltcG9ydCBUb21vcnJvdyBmcm9tICcuL3RvbW9ycm93JztcbmltcG9ydCBXZWVrIGZyb20gJy4vd2Vlayc7XG5pbXBvcnQgTW9udGggZnJvbSAnLi9tb250aCc7XG5pbXBvcnQgWWVhciBmcm9tICcuL3llYXInO1xuXG4vLyDlm77niYfot6/lvoRcbmltcG9ydCB7IGltYWdlQXJyIH0gZnJvbSAnLi9jb25maWcnO1xuLy8g5qC35byPXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBUYWJQYW5lID0gVGFicy5UYWJQYW5lO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnR7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHt9XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICBcbiAgfVxuXG4gIC8vIOiOt+WPluaVsOaNrlxuICBnZXREYXRhPSgpPT57XG4gICAgcmVxdWVzdCgnc3RhcicpLnRoZW4ocmVzPT57XG4gICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOnJlcy5kYXRhLnNob3dhcGlfcmVzX2JvZHlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVGFiQ2hhbmdlPSgpPT57XG5cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybihcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgey8qIOWktOmDqCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBTdHlsZXMuaGVhZGVyIH0+XG4gICAgICAgICAgPENhcnJvdXNlbFxuICAgICAgICAgICAgd2lkdGg9eyA1MDAgfVxuICAgICAgICAgICAgcGVyU2lkZU51bT17IDMgfVxuICAgICAgICAgICAgcGVyU2lkZVdpZHRoPXsgMTAwIH1cbiAgICAgICAgICAgIHNjYWxlPXsgMC43IH1cbiAgICAgICAgICAgIGltYWdlQXJyPXsgaW1hZ2VBcnIgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFN0eWxlcy5ib2R5IH0+XG4gICAgICAgICAgPFRhYnMgXG4gICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIFxuICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLmhhbmRsZVRhYkNoYW5nZSB9XG4gICAgICAgICAgICB0YWJCYXJTdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5LuK5pelXCIga2V5PVwiMVwiPlxuICAgICAgICAgICAgICA8RGF5IGRhdGE9eyBkYXRhLmRheSB9IC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLmmI7ml6VcIiBrZXk9XCIyXCI+XG4gICAgICAgICAgICAgIDxUb21vcnJvdyAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5pys5ZGoXCIga2V5PVwiM1wiPlxuICAgICAgICAgICAgICA8V2VlayAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5pys5pyIXCIga2V5PVwiNFwiPlxuICAgICAgICAgICAgICA8TW9udGggLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuS7iuW5tFwiIGtleT1cIjVcIj5cbiAgICAgICAgICAgICAgPFllYXIgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICA8L1RhYnM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApIFxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==