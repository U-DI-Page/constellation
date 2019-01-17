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

    _this.handleTabChange = function () {};

    _this.state = {
      data: {}
    };
    return _this;
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      (0, _request2.default)('star').then(function (res) {
        if (res.status === 200) {
          _this2.setState({
            data: res.data.showapi_res_body
          });
        }
      });
    }
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

/***/ }),

/***/ "./src/utils/util.js":
/*!***************************!*\
  !*** ./src/utils/util.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalstorage = setLocalstorage;
exports.getLocalStorage = getLocalStorage;
/**
 *往localstorage里塞东西
 * @param {key} 键名
 * @param {value} 键值
 */
function setLocalstorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 *从localstorage里取东西
 * @param {key} 键名
 */
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key) || '');
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJUYWJQYW5lIiwiUGFnZSIsInByb3BzIiwiYXJndW1lbnRzIiwiaGFuZGxlVGFiQ2hhbmdlIiwic3RhdGUiLCJkYXRhIiwidGhlbiIsInJlcyIsInN0YXR1cyIsInNldFN0YXRlIiwic2hvd2FwaV9yZXNfYm9keSIsIlN0eWxlcyIsImhlYWRlciIsImltYWdlQXJyIiwiYm9keSIsInRleHRBbGlnbiIsImRheSIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsInNldExvY2Fsc3RvcmFnZSIsImdldExvY2FsU3RvcmFnZSIsImtleSIsInZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJzZSIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSEE7O0FBRUE7OztBQUdBLElBQU1BLFVBQVUsZUFBS0EsT0FBckI7O0lBQ3FCQyxJOzs7QUFDbkIsZ0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw2R0FDUEMsU0FETzs7QUFBQSxVQW1CbEJDLGVBbkJrQixHQW1CRixZQUFJLENBRW5CLENBckJpQjs7QUFHaEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU07QUFESyxLQUFiO0FBSGdCO0FBTWpCOzs7O3dDQUVrQjtBQUFBOztBQUVqQiw2QkFBUSxNQUFSLEVBQWdCQyxJQUFoQixDQUFxQixlQUFLO0FBQ3hCLFlBQUdDLElBQUlDLE1BQUosS0FBZSxHQUFsQixFQUFzQjtBQUNwQixpQkFBS0MsUUFBTCxDQUFjO0FBQ1pKLGtCQUFLRSxJQUFJRixJQUFKLENBQVNLO0FBREYsV0FBZDtBQUdEO0FBQ0YsT0FORDtBQU9EOzs7NkJBTU87QUFBQSxVQUNFTCxJQURGLEdBQ1csS0FBS0QsS0FEaEIsQ0FDRUMsSUFERjs7O0FBR04sYUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFZTSxzQkFBT0MsTUFBeEI7QUFDRSx3Q0FBQyxxQkFBRDtBQUNFLG1CQUFRLEdBRFY7QUFFRSx3QkFBYSxDQUZmO0FBR0UsMEJBQWUsR0FIakI7QUFJRSxtQkFBUSxHQUpWO0FBS0Usc0JBQVdDO0FBTGI7QUFERixTQUZGO0FBV0U7QUFBQTtBQUFBLFlBQUssV0FBWUYsc0JBQU9HLElBQXhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0NBQWlCLEdBRG5CO0FBRUUsd0JBQVcsS0FBS1gsZUFGbEI7QUFHRSwyQkFBYSxFQUFFWSxXQUFXLFFBQWI7QUFIZjtBQUtFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGFBQUQsSUFBSyxNQUFPVixLQUFLVyxHQUFqQjtBQURGLGFBTEY7QUFRRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxrQkFBRDtBQURGLGFBUkY7QUFXRTtBQUFDLHFCQUFEO0FBQUEsZ0JBQVMsS0FBSSxjQUFiLEVBQWtCLEtBQUksR0FBdEI7QUFDRSw0Q0FBQyxjQUFEO0FBREYsYUFYRjtBQWNFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGVBQUQ7QUFERixhQWRGO0FBaUJFO0FBQUMscUJBQUQ7QUFBQSxnQkFBUyxLQUFJLGNBQWIsRUFBa0IsS0FBSSxHQUF0QjtBQUNFLDRDQUFDLGNBQUQ7QUFERjtBQWpCRjtBQURGO0FBWEYsT0FERjtBQXFDRDs7OztFQWhFK0JDLGdCQUFNQyxhOztrQkFBbkJsQixJOzs7Ozs7Ozs7Ozs7Ozs7OztRQ1pMbUIsZSxHQUFBQSxlO1FBUUFDLGUsR0FBQUEsZTtBQWJoQjs7Ozs7QUFLTyxTQUFTRCxlQUFULENBQXlCRSxHQUF6QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDMUNDLGVBQWFDLE9BQWIsQ0FBcUJILEdBQXJCLEVBQTBCSSxLQUFLQyxTQUFMLENBQWVKLEtBQWYsQ0FBMUI7QUFDRDs7QUFFRDs7OztBQUlPLFNBQVNGLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQ25DLFNBQU9JLEtBQUtFLEtBQUwsQ0FBV0osYUFBYUssT0FBYixDQUFxQlAsR0FBckIsS0FBNkIsRUFBeEMsQ0FBUDtBQUNELEMiLCJmaWxlIjoibWFpbi4yYTM1NTVkYTE4MDJiYzBiY2Y1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcnJvdXNlbCBmcm9tICdyYy1jYXJyb3VzZWwnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgeyBzZXRMb2NhbHN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy91dGlsJztcbmltcG9ydCB7IFRhYnMgfSBmcm9tICdhbnRkJztcbmltcG9ydCBEYXkgZnJvbSAnLi9kYXknO1xuaW1wb3J0IFRvbW9ycm93IGZyb20gJy4vdG9tb3Jyb3cnO1xuaW1wb3J0IFdlZWsgZnJvbSAnLi93ZWVrJztcbmltcG9ydCBNb250aCBmcm9tICcuL21vbnRoJztcbmltcG9ydCBZZWFyIGZyb20gJy4veWVhcic7XG5cbi8vIOWbvueJh+i3r+W+hFxuaW1wb3J0IHsgaW1hZ2VBcnIgfSBmcm9tICcuL2NvbmZpZyc7XG4vLyDmoLflvI9cbmltcG9ydCBTdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge31cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcblxuICAgIHJlcXVlc3QoJ3N0YXInKS50aGVuKHJlcz0+e1xuICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YTpyZXMuZGF0YS5zaG93YXBpX3Jlc19ib2R5XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZVRhYkNoYW5nZT0oKT0+e1xuXG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4oXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHsvKiDlpLTpg6ggKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgU3R5bGVzLmhlYWRlciB9PlxuICAgICAgICAgIDxDYXJyb3VzZWxcbiAgICAgICAgICAgIHdpZHRoPXsgNTAwIH1cbiAgICAgICAgICAgIHBlclNpZGVOdW09eyAzIH1cbiAgICAgICAgICAgIHBlclNpZGVXaWR0aD17IDEwMCB9XG4gICAgICAgICAgICBzY2FsZT17IDAuNyB9XG4gICAgICAgICAgICBpbWFnZUFycj17IGltYWdlQXJyIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBTdHlsZXMuYm9keSB9PlxuICAgICAgICAgIDxUYWJzIFxuICAgICAgICAgICAgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5oYW5kbGVUYWJDaGFuZ2UgfVxuICAgICAgICAgICAgdGFiQmFyU3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuS7iuaXpVwiIGtleT1cIjFcIj5cbiAgICAgICAgICAgICAgPERheSBkYXRhPXsgZGF0YS5kYXkgfSAvPlxuICAgICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwi5piO5pelXCIga2V5PVwiMlwiPlxuICAgICAgICAgICAgICA8VG9tb3Jyb3cgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuacrOWRqFwiIGtleT1cIjNcIj5cbiAgICAgICAgICAgICAgPFdlZWsgLz5cbiAgICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIuacrOaciFwiIGtleT1cIjRcIj5cbiAgICAgICAgICAgICAgPE1vbnRoIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCLku4rlubRcIiBrZXk9XCI1XCI+XG4gICAgICAgICAgICAgIDxZZWFyIC8+XG4gICAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICAgPC9UYWJzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKSBcbiAgfVxufSIsIi8qKlxuICrlvoBsb2NhbHN0b3JhZ2Xph4zloZ7kuJzopb9cbiAqIEBwYXJhbSB7a2V5fSDplK7lkI1cbiAqIEBwYXJhbSB7dmFsdWV9IOmUruWAvFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TG9jYWxzdG9yYWdlKGtleSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xufVxuXG4vKipcbiAq5LuObG9jYWxzdG9yYWdl6YeM5Y+W5Lic6KW/XG4gKiBAcGFyYW0ge2tleX0g6ZSu5ZCNXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==