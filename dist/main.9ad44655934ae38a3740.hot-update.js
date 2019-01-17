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
    value: function componentDidMount() {

      (0, _util.getLocalStorage)('data');
    }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiUGFnZSIsInByb3BzIiwiYXJndW1lbnRzIiwiZ2V0RGF0YSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJzaG93YXBpX3Jlc19ib2R5IiwiaGFuZGxlVGFiQ2hhbmdlIiwic3RhdGUiLCJTdHlsZXMiLCJoZWFkZXIiLCJpbWFnZUFyciIsImJvZHkiLCJ0ZXh0QWxpZ24iLCJkYXkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSEE7O0FBRUE7OztBQUdBLElBQU1BLFVBQVUsZUFBS0EsT0FBckI7O0lBQ3FCQyxJOzs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2R0FDUEMsU0FETzs7QUFBQSxVQWNsQkMsT0Fka0IsR0FjVixZQUFJO0FBQ1YsNkJBQVEsTUFBUixFQUFnQkMsSUFBaEIsQ0FBcUIsZUFBSztBQUN4QixZQUFHQyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFBc0I7QUFDcEIsZ0JBQUtDLFFBQUwsQ0FBYztBQUNaQyxrQkFBS0gsSUFBSUcsSUFBSixDQUFTQztBQURGLFdBQWQ7QUFHRDtBQUNGLE9BTkQ7QUFPRCxLQXRCaUI7O0FBQUEsVUF3QmxCQyxlQXhCa0IsR0F3QkYsWUFBSSxDQUVuQixDQTFCaUI7O0FBR2hCLFVBQUtDLEtBQUwsR0FBYTtBQUNYSCxZQUFNO0FBREssS0FBYjtBQUhnQjtBQU1qQjs7Ozt3Q0FFa0I7O0FBRWpCLGlDQUFnQixNQUFoQjtBQUNEOztBQUVEOzs7OzZCQWVRO0FBQUEsVUFDRUEsSUFERixHQUNXLEtBQUtHLEtBRGhCLENBQ0VILElBREY7OztBQUdOLGFBQ0U7QUFBQyx1QkFBRDtBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBWUksc0JBQU9DLE1BQXhCO0FBQ0Usd0NBQUMscUJBQUQ7QUFDRSxtQkFBUSxHQURWO0FBRUUsd0JBQWEsQ0FGZjtBQUdFLDBCQUFlLEdBSGpCO0FBSUUsbUJBQVEsR0FKVjtBQUtFLHNCQUFXQztBQUxiO0FBREYsU0FGRjtBQVdFO0FBQUE7QUFBQSxZQUFLLFdBQVlGLHNCQUFPRyxJQUF4QjtBQUNFO0FBQUE7QUFBQTtBQUNFLGdDQUFpQixHQURuQjtBQUVFLHdCQUFXLEtBQUtMLGVBRmxCO0FBR0UsMkJBQWEsRUFBRU0sV0FBVyxRQUFiO0FBSGY7QUFLRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxhQUFELElBQUssTUFBT1IsS0FBS1MsR0FBakI7QUFERixhQUxGO0FBUUU7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsa0JBQUQ7QUFERixhQVJGO0FBV0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsY0FBRDtBQURGLGFBWEY7QUFjRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxlQUFEO0FBREYsYUFkRjtBQWlCRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxjQUFEO0FBREY7QUFqQkY7QUFERjtBQVhGLE9BREY7QUFxQ0Q7Ozs7RUFyRStCQyxnQkFBTUMsYTs7a0JBQW5CbkIsSSIsImZpbGUiOiJtYWluLjlhZDQ0NjU1OTM0YWUzOGEzNzQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fycm91c2VsIGZyb20gJ3JjLWNhcnJvdXNlbCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB7IGdldExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL3V0aWxzL3V0aWwnO1xuaW1wb3J0IHsgVGFicyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IERheSBmcm9tICcuL2RheSc7XG5pbXBvcnQgVG9tb3Jyb3cgZnJvbSAnLi90b21vcnJvdyc7XG5pbXBvcnQgV2VlayBmcm9tICcuL3dlZWsnO1xuaW1wb3J0IE1vbnRoIGZyb20gJy4vbW9udGgnO1xuaW1wb3J0IFllYXIgZnJvbSAnLi95ZWFyJztcblxuLy8g5Zu+54mH6Lev5b6EXG5pbXBvcnQgeyBpbWFnZUFyciB9IGZyb20gJy4vY29uZmlnJztcbi8vIOagt+W8j1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIFxuICAgIGdldExvY2FsU3RvcmFnZSgnZGF0YScpXG4gIH1cblxuICAvLyDojrflj5bmlbDmja5cbiAgZ2V0RGF0YT0oKT0+e1xuICAgIHJlcXVlc3QoJ3N0YXInKS50aGVuKHJlcz0+e1xuICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTpyZXMuZGF0YS5zaG93YXBpX3Jlc19ib2R5XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVRhYkNoYW5nZT0oKT0+e1xuXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4oXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHsvKiDlpLTpg6ggKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgU3R5bGVzLmhlYWRlciB9PlxuICAgICAgICAgIDxDYXJyb3VzZWxcbiAgICAgICAgICAgIHdpZHRoPXsgNTAwIH1cbiAgICAgICAgICAgIHBlclNpZGVOdW09eyAzIH1cbiAgICAgICAgICAgIHBlclNpZGVXaWR0aD17IDEwMCB9XG4gICAgICAgICAgICBzY2FsZT17IDAuNyB9XG4gICAgICAgICAgICBpbWFnZUFycj17IGltYWdlQXJyIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBTdHlsZXMuYm9keSB9PlxuICAgICAgICAgIDxUYWJzIFxuICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVUYWJDaGFuZ2UgfVxuICAgICAgICAgICAgdGFiQmFyU3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuS7iuaXpVwiIGtleT1cIjFcIj5cbiAgICAgICAgICAgICAgPERheSBkYXRhPXsgZGF0YS5kYXkgfSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5piO5pelXCIga2V5PVwiMlwiPlxuICAgICAgICAgICAgICA8VG9tb3Jyb3cgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuacrOWRqFwiIGtleT1cIjNcIj5cbiAgICAgICAgICAgICAgPFdlZWsgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuacrOaciFwiIGtleT1cIjRcIj5cbiAgICAgICAgICAgICAgPE1vbnRoIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLku4rlubRcIiBrZXk9XCI1XCI+XG4gICAgICAgICAgICAgIDxZZWFyIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKSBcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=