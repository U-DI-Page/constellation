webpackHotUpdate("main",{

/***/ "./node_modules/antd/lib/spin/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/spin/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _debounce = _interopRequireDefault(__webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var SpinSizes = (0, _type.tuple)('small', 'default', 'large'); // Render indicator

var defaultIndicator = null;

function renderIndicator(prefixCls, props) {
  var indicator = props.indicator;
  var dotClassName = "".concat(prefixCls, "-dot");

  if (React.isValidElement(indicator)) {
    return React.cloneElement(indicator, {
      className: (0, _classnames["default"])(indicator.props.className, dotClassName)
    });
  }

  if (React.isValidElement(defaultIndicator)) {
    return React.cloneElement(defaultIndicator, {
      className: (0, _classnames["default"])(defaultIndicator.props.className, dotClassName)
    });
  }

  return React.createElement("span", {
    className: (0, _classnames["default"])(dotClassName, "".concat(prefixCls, "-dot-spin"))
  }, React.createElement("i", null), React.createElement("i", null), React.createElement("i", null), React.createElement("i", null));
}

function shouldDelay(spinning, delay) {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

var Spin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Spin, _React$Component);

  function Spin(props) {
    var _this;

    _classCallCheck(this, Spin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spin).call(this, props));

    _this.debouncifyUpdateSpinning = function (props) {
      var _ref = props || _this.props,
          delay = _ref.delay;

      if (delay) {
        _this.updateSpinning = (0, _debounce["default"])(_this.originalUpdateSpinning, delay);
      }
    };

    _this.updateSpinning = function () {
      var spinning = _this.props.spinning;
      var currentSpinning = _this.state.spinning;

      if (currentSpinning !== spinning) {
        _this.setState({
          spinning: spinning
        });
      }
    };

    _this.renderSpin = function (_ref2) {
      var _classNames;

      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          size = _a.size,
          tip = _a.tip,
          wrapperClassName = _a.wrapperClassName,
          style = _a.style,
          restProps = __rest(_a, ["prefixCls", "className", "size", "tip", "wrapperClassName", "style"]);

      var spinning = _this.state.spinning;
      var prefixCls = getPrefixCls('spin', customizePrefixCls);
      var spinClassName = (0, _classnames["default"])(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-sm"), size === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-lg"), size === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-spinning"), spinning), _defineProperty(_classNames, "".concat(prefixCls, "-show-text"), !!tip), _classNames), className); // fix https://fb.me/react-unknown-prop

      var divProps = (0, _omit["default"])(restProps, ['spinning', 'delay', 'indicator']);
      var spinElement = React.createElement("div", _extends({}, divProps, {
        style: style,
        className: spinClassName
      }), renderIndicator(prefixCls, _this.props), tip ? React.createElement("div", {
        className: "".concat(prefixCls, "-text")
      }, tip) : null);

      if (_this.isNestedPattern()) {
        var containerClassName = (0, _classnames["default"])("".concat(prefixCls, "-container"), _defineProperty({}, "".concat(prefixCls, "-blur"), spinning));
        return React.createElement("div", _extends({}, divProps, {
          className: (0, _classnames["default"])("".concat(prefixCls, "-nested-loading"), wrapperClassName)
        }), spinning && React.createElement("div", {
          key: "loading"
        }, spinElement), React.createElement("div", {
          className: containerClassName,
          key: "container"
        }, _this.props.children));
      }

      return spinElement;
    };

    var spinning = props.spinning,
        delay = props.delay;
    var shouldBeDelayed = shouldDelay(spinning, delay);
    _this.state = {
      spinning: spinning && !shouldBeDelayed
    };
    _this.originalUpdateSpinning = _this.updateSpinning;

    _this.debouncifyUpdateSpinning(props);

    return _this;
  }

  _createClass(Spin, [{
    key: "isNestedPattern",
    value: function isNestedPattern() {
      return !!(this.props && this.props.children);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var updateSpinning = this.updateSpinning;

      if (updateSpinning && updateSpinning.cancel) {
        updateSpinning.cancel();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSpinning();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.debouncifyUpdateSpinning();
      this.updateSpinning();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderSpin);
    }
  }], [{
    key: "setDefaultIndicator",
    value: function setDefaultIndicator(indicator) {
      defaultIndicator = indicator;
    }
  }]);

  return Spin;
}(React.Component);

Spin.defaultProps = {
  spinning: true,
  size: 'default',
  wrapperClassName: ''
};
Spin.propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  spinning: PropTypes.bool,
  size: PropTypes.oneOf(SpinSizes),
  wrapperClassName: PropTypes.string,
  indicator: PropTypes.element
};
var _default = Spin;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/spin/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/spin/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/spin/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/spin/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/spin/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/spin/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/spin/style/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/spin/style/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/spin/style/index.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/antd/lib/spin/style/index.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-spin {\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #1890ff;\n  vertical-align: middle;\n  text-align: center;\n  opacity: 0;\n  position: absolute;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  display: none;\n}\n.ant-spin-spinning {\n  opacity: 1;\n  position: static;\n  display: inline-block;\n}\n.ant-spin-nested-loading {\n  position: relative;\n}\n.ant-spin-nested-loading > div > .ant-spin {\n  display: block;\n  position: absolute;\n  height: 100%;\n  max-height: 400px;\n  width: 100%;\n  z-index: 4;\n}\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -10px;\n}\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-text {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  padding-top: 5px;\n  text-shadow: 0 1px 2px #fff;\n}\n.ant-spin-nested-loading > div > .ant-spin.ant-spin-show-text .ant-spin-dot {\n  margin-top: -20px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-dot {\n  margin: -7px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-text {\n  padding-top: 2px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm.ant-spin-show-text .ant-spin-dot {\n  margin-top: -17px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-dot {\n  margin: -16px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-text {\n  padding-top: 11px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg.ant-spin-show-text .ant-spin-dot {\n  margin-top: -26px;\n}\n.ant-spin-container {\n  position: relative;\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.ant-spin-container:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #fff;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  height: 100%;\n  width: 100%;\n  z-index: 10;\n}\n.ant-spin-blur {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  opacity: 0.5;\n}\n.ant-spin-blur:after {\n  opacity: 0.4;\n  pointer-events: auto;\n}\n.ant-spin-tip {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-spin-dot {\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.ant-spin-dot i {\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n  background-color: #1890ff;\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n  display: block;\n  position: absolute;\n  opacity: 0.3;\n  -webkit-animation: antSpinMove 1s infinite linear alternate;\n          animation: antSpinMove 1s infinite linear alternate;\n  -webkit-transform-origin: 50% 50%;\n      -ms-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.ant-spin-dot i:nth-child(1) {\n  left: 0;\n  top: 0;\n}\n.ant-spin-dot i:nth-child(2) {\n  right: 0;\n  top: 0;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.ant-spin-dot i:nth-child(3) {\n  right: 0;\n  bottom: 0;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.ant-spin-dot i:nth-child(4) {\n  left: 0;\n  bottom: 0;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.ant-spin-dot-spin {\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-animation: antRotate 1.2s infinite linear;\n          animation: antRotate 1.2s infinite linear;\n}\n.ant-spin-sm .ant-spin-dot {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.ant-spin-sm .ant-spin-dot i {\n  width: 6px;\n  height: 6px;\n}\n.ant-spin-lg .ant-spin-dot {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.ant-spin-lg .ant-spin-dot i {\n  width: 14px;\n  height: 14px;\n}\n.ant-spin.ant-spin-show-text .ant-spin-text {\n  display: block;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ */\n  .ant-spin-blur {\n    background: #fff;\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes antSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes antSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes antRotate {\n  to {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n@keyframes antRotate {\n  to {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./src/page/day/index.js":
/*!*******************************!*\
  !*** ./src/page/day/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spin = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");

var _spin2 = _interopRequireDefault(_spin);

var _col = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _row = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _rate = __webpack_require__(/*! antd/lib/rate */ "./node_modules/antd/lib/rate/index.js");

var _rate2 = _interopRequireDefault(_rate);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/lib/spin/style/css */ "./node_modules/antd/lib/spin/style/css.js");

__webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");

__webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");

__webpack_require__(/*! antd/lib/rate/style/css */ "./node_modules/antd/lib/rate/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 每日运势
 */
var Day = function (_React$PureComponent) {
  _inherits(Day, _React$PureComponent);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      console.log(data);

      return data ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _col2.default,
          { span: 20, offset: 1 },
          _react2.default.createElement(
            _row2.default,
            null,
            '\u7EFC\u5408\u6307\u6570:\xA0',
            _react2.default.createElement(_rate2.default, { count: 5, value: data.summary_star, disabled: true })
          ),
          _react2.default.createElement(
            _row2.default,
            null,
            '\u7231\u60C5\u6307\u6570:\xA0',
            _react2.default.createElement(_rate2.default, { count: 5, value: data.love_star, disabled: true })
          ),
          _react2.default.createElement(
            _row2.default,
            null,
            '\u8D22\u8FD0\u6307\u6570:\xA0',
            _react2.default.createElement(_rate2.default, { count: 5, value: data.money_star, disabled: true })
          ),
          _react2.default.createElement(
            _row2.default,
            null,
            '\u5DE5\u4F5C\u6307\u6570:\xA0',
            _react2.default.createElement(_rate2.default, { count: 5, value: data.work_star, disabled: true })
          )
        )
      ) : _react2.default.createElement(_spin2.default, { tip: 'loading' });
    }
  }]);

  return Day;
}(_react2.default.PureComponent);

exports.default = Day;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc3Bpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvc3Bpbi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vc3R5bGUvaW5kZXguY3NzP2MxOWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3NwaW4vc3R5bGUvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlL2RheS9pbmRleC5qcyJdLCJuYW1lcyI6WyJEYXkiLCJkYXRhIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3VtbWFyeV9zdGFyIiwibG92ZV9zdGFyIiwibW9uZXlfc3RhciIsIndvcmtfc3RhciIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELHdDQUF3QyxtQkFBTyxDQUFDLHNEQUFZOztBQUU1RCx5Q0FBeUMsbUJBQU8sQ0FBQyxzREFBWTs7QUFFN0QsbUNBQW1DLG1CQUFPLENBQUMsbURBQVM7O0FBRXBELHVDQUF1QyxtQkFBTyxDQUFDLDBEQUFpQjs7QUFFaEUsc0JBQXNCLG1CQUFPLENBQUMsNEVBQW9COztBQUVsRCxZQUFZLG1CQUFPLENBQUMsNERBQWU7O0FBRW5DLHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRix1Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLHNEQUFzRCxzSEFBc0gsNEJBQTRCLDBDQUEwQyxFQUFFLE9BQU8sd0JBQXdCLEVBQUUsRUFBRSxFQUFFLEVBQUUseUJBQXlCLGVBQWUsRUFBRTs7QUFFemQsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtD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QUErQyxjQUEvQztBQURiLFdBREY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUNhLDREQUFNLE9BQVEsQ0FBZCxFQUFrQixPQUFRSixLQUFLSyxTQUEvQixFQUE0QyxjQUE1QztBQURiLFdBSkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUNhLDREQUFNLE9BQVEsQ0FBZCxFQUFrQixPQUFRTCxLQUFLTSxVQUEvQixFQUE2QyxjQUE3QztBQURiLFdBUEY7QUFVRTtBQUFBO0FBQUE7QUFBQTtBQUNhLDREQUFNLE9BQVEsQ0FBZCxFQUFrQixPQUFRTixLQUFLTyxTQUEvQixFQUE0QyxjQUE1QztBQURiO0FBVkY7QUFERixPQURLLEdBa0JQLGdEQUFNLEtBQUksU0FBVixHQWxCQTtBQW1CRDs7OztFQXpCOEJDLGdCQUFNQyxhOztrQkFBbEJWLEciLCJmaWxlIjoibWFpbi5iNTgxODViZDA2NTdmYTI4NzlkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFByb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2RlYm91bmNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2RlYm91bmNlXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgU3BpblNpemVzID0gKDAsIF90eXBlLnR1cGxlKSgnc21hbGwnLCAnZGVmYXVsdCcsICdsYXJnZScpOyAvLyBSZW5kZXIgaW5kaWNhdG9yXG5cbnZhciBkZWZhdWx0SW5kaWNhdG9yID0gbnVsbDtcblxuZnVuY3Rpb24gcmVuZGVySW5kaWNhdG9yKHByZWZpeENscywgcHJvcHMpIHtcbiAgdmFyIGluZGljYXRvciA9IHByb3BzLmluZGljYXRvcjtcbiAgdmFyIGRvdENsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZG90XCIpO1xuXG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChpbmRpY2F0b3IpKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpbmRpY2F0b3IsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoaW5kaWNhdG9yLnByb3BzLmNsYXNzTmFtZSwgZG90Q2xhc3NOYW1lKVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGRlZmF1bHRJbmRpY2F0b3IpKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChkZWZhdWx0SW5kaWNhdG9yLCB7XG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGRlZmF1bHRJbmRpY2F0b3IucHJvcHMuY2xhc3NOYW1lLCBkb3RDbGFzc05hbWUpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZG90Q2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRvdC1zcGluXCIpKVxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImlcIiwgbnVsbCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpXCIsIG51bGwpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaVwiLCBudWxsKSk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZERlbGF5KHNwaW5uaW5nLCBkZWxheSkge1xuICByZXR1cm4gISFzcGlubmluZyAmJiAhIWRlbGF5ICYmICFpc05hTihOdW1iZXIoZGVsYXkpKTtcbn1cblxudmFyIFNwaW4gPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNwaW4sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNwaW4ocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3Bpbik7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihTcGluKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5kZWJvdW5jaWZ5VXBkYXRlU3Bpbm5pbmcgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBfcmVmID0gcHJvcHMgfHwgX3RoaXMucHJvcHMsXG4gICAgICAgICAgZGVsYXkgPSBfcmVmLmRlbGF5O1xuXG4gICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgX3RoaXMudXBkYXRlU3Bpbm5pbmcgPSAoMCwgX2RlYm91bmNlW1wiZGVmYXVsdFwiXSkoX3RoaXMub3JpZ2luYWxVcGRhdGVTcGlubmluZywgZGVsYXkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy51cGRhdGVTcGlubmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzcGlubmluZyA9IF90aGlzLnByb3BzLnNwaW5uaW5nO1xuICAgICAgdmFyIGN1cnJlbnRTcGlubmluZyA9IF90aGlzLnN0YXRlLnNwaW5uaW5nO1xuXG4gICAgICBpZiAoY3VycmVudFNwaW5uaW5nICE9PSBzcGlubmluZykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3Bpbm5pbmc6IHNwaW5uaW5nXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJTcGluID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmMi5nZXRQcmVmaXhDbHM7XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgdGlwID0gX2EudGlwLFxuICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWUgPSBfYS53cmFwcGVyQ2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwidGlwXCIsIFwid3JhcHBlckNsYXNzTmFtZVwiLCBcInN0eWxlXCJdKTtcblxuICAgICAgdmFyIHNwaW5uaW5nID0gX3RoaXMuc3RhdGUuc3Bpbm5pbmc7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdzcGluJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBzcGluQ2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNtXCIpLCBzaXplID09PSAnc21hbGwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxnXCIpLCBzaXplID09PSAnbGFyZ2UnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNwaW5uaW5nXCIpLCBzcGlubmluZyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zaG93LXRleHRcIiksICEhdGlwKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpOyAvLyBmaXggaHR0cHM6Ly9mYi5tZS9yZWFjdC11bmtub3duLXByb3BcblxuICAgICAgdmFyIGRpdlByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocmVzdFByb3BzLCBbJ3NwaW5uaW5nJywgJ2RlbGF5JywgJ2luZGljYXRvciddKTtcbiAgICAgIHZhciBzcGluRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIGRpdlByb3BzLCB7XG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBzcGluQ2xhc3NOYW1lXG4gICAgICB9KSwgcmVuZGVySW5kaWNhdG9yKHByZWZpeENscywgX3RoaXMucHJvcHMpLCB0aXAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXRleHRcIilcbiAgICAgIH0sIHRpcCkgOiBudWxsKTtcblxuICAgICAgaWYgKF90aGlzLmlzTmVzdGVkUGF0dGVybigpKSB7XG4gICAgICAgIHZhciBjb250YWluZXJDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNvbnRhaW5lclwiKSwgX2RlZmluZVByb3BlcnR5KHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJsdXJcIiksIHNwaW5uaW5nKSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBkaXZQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1uZXN0ZWQtbG9hZGluZ1wiKSwgd3JhcHBlckNsYXNzTmFtZSlcbiAgICAgICAgfSksIHNwaW5uaW5nICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGtleTogXCJsb2FkaW5nXCJcbiAgICAgICAgfSwgc3BpbkVsZW1lbnQpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNvbnRhaW5lckNsYXNzTmFtZSxcbiAgICAgICAgICBrZXk6IFwiY29udGFpbmVyXCJcbiAgICAgICAgfSwgX3RoaXMucHJvcHMuY2hpbGRyZW4pKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNwaW5FbGVtZW50O1xuICAgIH07XG5cbiAgICB2YXIgc3Bpbm5pbmcgPSBwcm9wcy5zcGlubmluZyxcbiAgICAgICAgZGVsYXkgPSBwcm9wcy5kZWxheTtcbiAgICB2YXIgc2hvdWxkQmVEZWxheWVkID0gc2hvdWxkRGVsYXkoc3Bpbm5pbmcsIGRlbGF5KTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNwaW5uaW5nOiBzcGlubmluZyAmJiAhc2hvdWxkQmVEZWxheWVkXG4gICAgfTtcbiAgICBfdGhpcy5vcmlnaW5hbFVwZGF0ZVNwaW5uaW5nID0gX3RoaXMudXBkYXRlU3Bpbm5pbmc7XG5cbiAgICBfdGhpcy5kZWJvdW5jaWZ5VXBkYXRlU3Bpbm5pbmcocHJvcHMpO1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFNwaW4sIFt7XG4gICAga2V5OiBcImlzTmVzdGVkUGF0dGVyblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc05lc3RlZFBhdHRlcm4oKSB7XG4gICAgICByZXR1cm4gISEodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB2YXIgdXBkYXRlU3Bpbm5pbmcgPSB0aGlzLnVwZGF0ZVNwaW5uaW5nO1xuXG4gICAgICBpZiAodXBkYXRlU3Bpbm5pbmcgJiYgdXBkYXRlU3Bpbm5pbmcuY2FuY2VsKSB7XG4gICAgICAgIHVwZGF0ZVNwaW5uaW5nLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMudXBkYXRlU3Bpbm5pbmcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuZGVib3VuY2lmeVVwZGF0ZVNwaW5uaW5nKCk7XG4gICAgICB0aGlzLnVwZGF0ZVNwaW5uaW5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyU3Bpbik7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwic2V0RGVmYXVsdEluZGljYXRvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREZWZhdWx0SW5kaWNhdG9yKGluZGljYXRvcikge1xuICAgICAgZGVmYXVsdEluZGljYXRvciA9IGluZGljYXRvcjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3Bpbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU3Bpbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNwaW5uaW5nOiB0cnVlLFxuICBzaXplOiAnZGVmYXVsdCcsXG4gIHdyYXBwZXJDbGFzc05hbWU6ICcnXG59O1xuU3Bpbi5wcm9wVHlwZXMgPSB7XG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcGlubmluZzogUHJvcFR5cGVzLmJvb2wsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihTcGluU2l6ZXMpLFxuICB3cmFwcGVyQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmRpY2F0b3I6IFByb3BUeXBlcy5lbGVtZW50XG59O1xudmFyIF9kZWZhdWx0ID0gU3BpbjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXFxuLmFudC1zcGluIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtdmFyaWFudDogdGFidWxhci1udW1zO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogIzE4OTBmZjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtc3Bpbi1zcGlubmluZyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nID4gZGl2ID4gLmFudC1zcGluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogNDAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDQ7XFxufVxcbi5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZyA+IGRpdiA+IC5hbnQtc3BpbiAuYW50LXNwaW4tZG90IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luOiAtMTBweDtcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nID4gZGl2ID4gLmFudC1zcGluIC5hbnQtc3Bpbi10ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCAjZmZmO1xcbn1cXG4uYW50LXNwaW4tbmVzdGVkLWxvYWRpbmcgPiBkaXYgPiAuYW50LXNwaW4uYW50LXNwaW4tc2hvdy10ZXh0IC5hbnQtc3Bpbi1kb3Qge1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcbi5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZyA+IGRpdiA+IC5hbnQtc3Bpbi1zbSAuYW50LXNwaW4tZG90IHtcXG4gIG1hcmdpbjogLTdweDtcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nID4gZGl2ID4gLmFudC1zcGluLXNtIC5hbnQtc3Bpbi10ZXh0IHtcXG4gIHBhZGRpbmctdG9wOiAycHg7XFxufVxcbi5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZyA+IGRpdiA+IC5hbnQtc3Bpbi1zbS5hbnQtc3Bpbi1zaG93LXRleHQgLmFudC1zcGluLWRvdCB7XFxuICBtYXJnaW4tdG9wOiAtMTdweDtcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nID4gZGl2ID4gLmFudC1zcGluLWxnIC5hbnQtc3Bpbi1kb3Qge1xcbiAgbWFyZ2luOiAtMTZweDtcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nID4gZGl2ID4gLmFudC1zcGluLWxnIC5hbnQtc3Bpbi10ZXh0IHtcXG4gIHBhZGRpbmctdG9wOiAxMXB4O1xcbn1cXG4uYW50LXNwaW4tbmVzdGVkLWxvYWRpbmcgPiBkaXYgPiAuYW50LXNwaW4tbGcuYW50LXNwaW4tc2hvdy10ZXh0IC5hbnQtc3Bpbi1kb3Qge1xcbiAgbWFyZ2luLXRvcDogLTI2cHg7XFxufVxcbi5hbnQtc3Bpbi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxufVxcbi5hbnQtc3Bpbi1jb250YWluZXI6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLmFudC1zcGluLWJsdXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmFudC1zcGluLWJsdXI6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcbi5hbnQtc3Bpbi10aXAge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtc3Bpbi1kb3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5hbnQtc3Bpbi1kb3QgaSB7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTBmZjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGFudFNwaW5Nb3ZlIDFzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYW50U3Bpbk1vdmUgMXMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG59XFxuLmFudC1zcGluLWRvdCBpOm50aC1jaGlsZCgxKSB7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG4uYW50LXNwaW4tZG90IGk6bnRoLWNoaWxkKDIpIHtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcXG59XFxuLmFudC1zcGluLWRvdCBpOm50aC1jaGlsZCgzKSB7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XFxufVxcbi5hbnQtc3Bpbi1kb3QgaTpudGgtY2hpbGQoNCkge1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XFxufVxcbi5hbnQtc3Bpbi1kb3Qtc3BpbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYW50Um90YXRlIDEuMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICBhbmltYXRpb246IGFudFJvdGF0ZSAxLjJzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuLmFudC1zcGluLXNtIC5hbnQtc3Bpbi1kb3Qge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxufVxcbi5hbnQtc3Bpbi1zbSAuYW50LXNwaW4tZG90IGkge1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbn1cXG4uYW50LXNwaW4tbGcgLmFudC1zcGluLWRvdCB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG59XFxuLmFudC1zcGluLWxnIC5hbnQtc3Bpbi1kb3QgaSB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuLmFudC1zcGluLmFudC1zcGluLXNob3ctdGV4dCAuYW50LXNwaW4tdGV4dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gIC8qIElFMTArICovXFxuICAuYW50LXNwaW4tYmx1ciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFudFNwaW5Nb3ZlIHtcXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbnRTcGluTW92ZSB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbnRSb3RhdGUge1xcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbnRSb3RhdGUge1xcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdyxDb2wsUmF0ZSxTcGluIH0gZnJvbSAnYW50ZCc7XG5cbi8qKlxuICog5q+P5pel6L+Q5Yq/XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERheSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnR7XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICByZXR1cm4gZGF0YT8oXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29sIHNwYW49eyAyMCB9IG9mZnNldD17IDEgfT5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAg57u85ZCI5oyH5pWwOiZuYnNwOzxSYXRlIGNvdW50PXsgNSB9IHZhbHVlPXsgZGF0YS5zdW1tYXJ5X3N0YXIgfSAgZGlzYWJsZWQgLz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAg54ix5oOF5oyH5pWwOiZuYnNwOzxSYXRlIGNvdW50PXsgNSB9IHZhbHVlPXsgZGF0YS5sb3ZlX3N0YXIgfSAgZGlzYWJsZWQgLz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAg6LSi6L+Q5oyH5pWwOiZuYnNwOzxSYXRlIGNvdW50PXsgNSB9IHZhbHVlPXsgZGF0YS5tb25leV9zdGFyIH0gIGRpc2FibGVkIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIOW3peS9nOaMh+aVsDombmJzcDs8UmF0ZSBjb3VudD17IDUgfSB2YWx1ZT17IGRhdGEud29ya19zdGFyIH0gIGRpc2FibGVkIC8+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9kaXY+XG4gICAgKTpcbiAgICA8U3BpbiB0aXA9XCJsb2FkaW5nXCIgLz5cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=