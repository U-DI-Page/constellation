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
      var data = (0, _util.getLocalStorage)('data');
      if (data) {
        this.setState({ data: data });
      } else {
        this.getData();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiUGFnZSIsInByb3BzIiwiYXJndW1lbnRzIiwiZ2V0RGF0YSIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImRhdGEiLCJzaG93YXBpX3Jlc19ib2R5IiwiaGFuZGxlVGFiQ2hhbmdlIiwic3RhdGUiLCJTdHlsZXMiLCJoZWFkZXIiLCJpbWFnZUFyciIsImJvZHkiLCJ0ZXh0QWxpZ24iLCJkYXkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSEE7O0FBRUE7OztBQUdBLElBQU1BLFVBQVUsZUFBS0EsT0FBckI7O0lBQ3FCQyxJOzs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2R0FDUEMsU0FETzs7QUFBQSxVQWtCbEJDLE9BbEJrQixHQWtCVixZQUFJO0FBQ1YsNkJBQVEsTUFBUixFQUFnQkMsSUFBaEIsQ0FBcUIsZUFBSztBQUN4QixZQUFHQyxJQUFJQyxNQUFKLEtBQWUsR0FBbEIsRUFBc0I7QUFDcEIsZ0JBQUtDLFFBQUwsQ0FBYztBQUNaQyxrQkFBS0gsSUFBSUcsSUFBSixDQUFTQztBQURGLFdBQWQ7QUFHRDtBQUNGLE9BTkQ7QUFPRCxLQTFCaUI7O0FBQUEsVUE0QmxCQyxlQTVCa0IsR0E0QkYsWUFBSSxDQUVuQixDQTlCaUI7O0FBR2hCLFVBQUtDLEtBQUwsR0FBYTtBQUNYSCxZQUFNO0FBREssS0FBYjtBQUhnQjtBQU1qQjs7Ozt3Q0FFa0I7QUFDakIsVUFBTUEsT0FBTywyQkFBZ0IsTUFBaEIsQ0FBYjtBQUNBLFVBQUdBLElBQUgsRUFBUTtBQUNOLGFBQUtELFFBQUwsQ0FBYyxFQUFFQyxVQUFGLEVBQWQ7QUFDRCxPQUZELE1BRUs7QUFDSCxhQUFLTCxPQUFMO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs2QkFlUTtBQUFBLFVBQ0VLLElBREYsR0FDVyxLQUFLRyxLQURoQixDQUNFSCxJQURGOzs7QUFHTixhQUNFO0FBQUMsdUJBQUQ7QUFBQTtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVlJLHNCQUFPQyxNQUF4QjtBQUNFLHdDQUFDLHFCQUFEO0FBQ0UsbUJBQVEsR0FEVjtBQUVFLHdCQUFhLENBRmY7QUFHRSwwQkFBZSxHQUhqQjtBQUlFLG1CQUFRLEdBSlY7QUFLRSxzQkFBV0M7QUFMYjtBQURGLFNBRkY7QUFXRTtBQUFBO0FBQUEsWUFBSyxXQUFZRixzQkFBT0csSUFBeEI7QUFDRTtBQUFBO0FBQUE7QUFDRSxnQ0FBaUIsR0FEbkI7QUFFRSx3QkFBVyxLQUFLTCxlQUZsQjtBQUdFLDJCQUFhLEVBQUVNLFdBQVcsUUFBYjtBQUhmO0FBS0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsYUFBRCxJQUFLLE1BQU9SLEtBQUtTLEdBQWpCO0FBREYsYUFMRjtBQVFFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGtCQUFEO0FBREYsYUFSRjtBQVdFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGNBQUQ7QUFERixhQVhGO0FBY0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsZUFBRDtBQURGLGFBZEY7QUFpQkU7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQ0UsNENBQUMsY0FBRDtBQURGO0FBakJGO0FBREY7QUFYRixPQURGO0FBcUNEOzs7O0VBekUrQkMsZ0JBQU1DLGE7O2tCQUFuQm5CLEkiLCJmaWxlIjoibWFpbi5mNjA2NjkwNDZjY2E5ODJmZGU2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcnJvdXNlbCBmcm9tICdyYy1jYXJyb3VzZWwnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBnZXRMb2NhbFN0b3JhZ2UsIHNldExvY2Fsc3RvcmFnZSB9IGZyb20gJy4uL3V0aWxzL3V0aWwnO1xuaW1wb3J0IHsgVGFicyB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IERheSBmcm9tICcuL2RheSc7XG5pbXBvcnQgVG9tb3Jyb3cgZnJvbSAnLi90b21vcnJvdyc7XG5pbXBvcnQgV2VlayBmcm9tICcuL3dlZWsnO1xuaW1wb3J0IE1vbnRoIGZyb20gJy4vbW9udGgnO1xuaW1wb3J0IFllYXIgZnJvbSAnLi95ZWFyJztcblxuLy8g5Zu+54mH6Lev5b6EXG5pbXBvcnQgeyBpbWFnZUFyciB9IGZyb20gJy4vY29uZmlnJztcbi8vIOagt+W8j1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50e1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7fVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0IGRhdGEgPSBnZXRMb2NhbFN0b3JhZ2UoJ2RhdGEnKTtcbiAgICBpZihkYXRhKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgLy8g6I635Y+W5pWw5o2uXG4gIGdldERhdGE9KCk9PntcbiAgICByZXF1ZXN0KCdzdGFyJykudGhlbihyZXM9PntcbiAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6cmVzLmRhdGEuc2hvd2FwaV9yZXNfYm9keVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVUYWJDaGFuZ2U9KCk9PntcblxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7Lyog5aS06YOoICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFN0eWxlcy5oZWFkZXIgfT5cbiAgICAgICAgICA8Q2Fycm91c2VsXG4gICAgICAgICAgICB3aWR0aD17IDUwMCB9XG4gICAgICAgICAgICBwZXJTaWRlTnVtPXsgMyB9XG4gICAgICAgICAgICBwZXJTaWRlV2lkdGg9eyAxMDAgfVxuICAgICAgICAgICAgc2NhbGU9eyAwLjcgfVxuICAgICAgICAgICAgaW1hZ2VBcnI9eyBpbWFnZUFyciB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgU3R5bGVzLmJvZHkgfT5cbiAgICAgICAgICA8VGFicyBcbiAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCIgXG4gICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMuaGFuZGxlVGFiQ2hhbmdlIH1cbiAgICAgICAgICAgIHRhYkJhclN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLku4rml6VcIiBrZXk9XCIxXCI+XG4gICAgICAgICAgICAgIDxEYXkgZGF0YT17IGRhdGEuZGF5IH0gLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuaYjuaXpVwiIGtleT1cIjJcIj5cbiAgICAgICAgICAgICAgPFRvbW9ycm93IC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLmnKzlkahcIiBrZXk9XCIzXCI+XG4gICAgICAgICAgICAgIDxXZWVrIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLmnKzmnIhcIiBrZXk9XCI0XCI+XG4gICAgICAgICAgICAgIDxNb250aCAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5LuK5bm0XCIga2V5PVwiNVwiPlxuICAgICAgICAgICAgICA8WWVhciAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICkgXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9