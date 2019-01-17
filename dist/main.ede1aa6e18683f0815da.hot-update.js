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
            scale: 0.8,
            imageArr: _config.imageArr
          })
        ),
        _react2.default.createElement(
          'div',
          { className: _indexModule2.default.body },
          _react2.default.createElement(
            _tabs2.default,
            { defaultActiveKey: '1', onChange: this.handleTabChange },
            _react2.default.createElement(
              TabPane,
              { tab: '\u4ECA\u65E5', key: '1' },
              'Content of Tab Pane 1'
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u660E\u65E5', key: '2' },
              'Content of Tab Pane 2'
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u672C\u5468', key: '3' },
              'Content of Tab Pane 3'
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u672C\u6708', key: '4' },
              'Content of Tab Pane 3'
            ),
            _react2.default.createElement(
              TabPane,
              { tab: '\u4ECA\u5E74', key: '5' },
              'Content of Tab Pane 3'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiUGFnZSIsImhhbmRsZVRhYkNoYW5nZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzIiwiU3R5bGVzIiwiaGVhZGVyIiwiaW1hZ2VBcnIiLCJib2R5IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFIQTs7QUFFQTs7O0FBR0EsSUFBTUEsVUFBVSxlQUFLQSxPQUFyQjs7SUFDcUJDLEk7Ozs7Ozs7Ozs7Ozs7O2tMQVNuQkMsZSxHQUFnQixZQUFJLENBRW5CLEM7Ozs7O3dDQVRrQjs7QUFFakIsNkJBQVEsTUFBUixFQUFnQkMsSUFBaEIsQ0FBcUIsZUFBSztBQUN4QkMsZ0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNELE9BRkQ7QUFHRDs7OzZCQU1POztBQUVOLGFBQ0U7QUFBQyx1QkFBRDtBQUFBO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBWUMsc0JBQU9DLE1BQXhCO0FBQ0Usd0NBQUMscUJBQUQ7QUFDRSxtQkFBUSxHQURWO0FBRUUsd0JBQWEsQ0FGZjtBQUdFLDBCQUFlLEdBSGpCO0FBSUUsbUJBQVEsR0FKVjtBQUtFLHNCQUFXQztBQUxiO0FBREYsU0FGRjtBQVdFO0FBQUE7QUFBQSxZQUFLLFdBQVlGLHNCQUFPRyxJQUF4QjtBQUNFO0FBQUE7QUFBQSxjQUFNLGtCQUFpQixHQUF2QixFQUEyQixVQUFXLEtBQUtSLGVBQTNDO0FBQ0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQUE7QUFBQSxhQUhGO0FBSUU7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQUE7QUFBQSxhQUpGO0FBS0U7QUFBQyxxQkFBRDtBQUFBLGdCQUFTLEtBQUksY0FBYixFQUFrQixLQUFJLEdBQXRCO0FBQUE7QUFBQTtBQUxGO0FBREY7QUFYRixPQURGO0FBd0JEOzs7O0VBdkMrQlMsZ0JBQU1DLGE7O2tCQUFuQlgsSSIsImZpbGUiOiJtYWluLmVkZTFhYTZlMTg2ODNmMDgxNWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fycm91c2VsIGZyb20gJ3JjLWNhcnJvdXNlbCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCB7IFRhYnMsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuLy8g5Zu+54mH6Lev5b6EXG5pbXBvcnQgeyBpbWFnZUFyciB9IGZyb20gJy4vY29uZmlnJztcbi8vIOagt+W8j1xuaW1wb3J0IFN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50e1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG5cbiAgICByZXF1ZXN0KCdzdGFyJykudGhlbihyZXM9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlVGFiQ2hhbmdlPSgpPT57XG5cbiAgfVxuXG4gIHJlbmRlcigpe1xuXG4gICAgcmV0dXJuKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7Lyog5aS06YOoICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IFN0eWxlcy5oZWFkZXIgfT5cbiAgICAgICAgICA8Q2Fycm91c2VsXG4gICAgICAgICAgICB3aWR0aD17IDUwMCB9XG4gICAgICAgICAgICBwZXJTaWRlTnVtPXsgMyB9XG4gICAgICAgICAgICBwZXJTaWRlV2lkdGg9eyAxMDAgfVxuICAgICAgICAgICAgc2NhbGU9eyAwLjggfVxuICAgICAgICAgICAgaW1hZ2VBcnI9eyBpbWFnZUFyciB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgU3R5bGVzLmJvZHkgfT5cbiAgICAgICAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVUYWJDaGFuZ2UgfT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuS7iuaXpVwiIGtleT1cIjFcIj5Db250ZW50IG9mIFRhYiBQYW5lIDE8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLmmI7ml6VcIiBrZXk9XCIyXCI+Q29udGVudCBvZiBUYWIgUGFuZSAyPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5pys5ZGoXCIga2V5PVwiM1wiPkNvbnRlbnQgb2YgVGFiIFBhbmUgMzwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuacrOaciFwiIGtleT1cIjRcIj5Db250ZW50IG9mIFRhYiBQYW5lIDM8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLku4rlubRcIiBrZXk9XCI1XCI+Q29udGVudCBvZiBUYWIgUGFuZSAzPC9UYWJQYW5lPlxuXG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKSBcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=