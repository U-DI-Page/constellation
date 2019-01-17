webpackHotUpdate("main",{

/***/ "./node_modules/antd/lib/_util/type.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/type.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tuple = void 0;

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

exports.tuple = tuple;

/***/ }),

/***/ "./node_modules/antd/lib/col/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/col/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

var _default = _grid.Col;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/col/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/col/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ../../grid/style/index.css */ "./node_modules/antd/lib/grid/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/grid/RowContext.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/grid/RowContext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createReactContext = _interopRequireDefault(__webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RowContext = (0, _createReactContext["default"])({});
var _default = RowContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/grid/col.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/col.js ***!
  \*******************************************/
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

var _RowContext = _interopRequireDefault(__webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

var Col =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    var _this;

    _classCallCheck(this, Col);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Col).apply(this, arguments));

    _this.renderCol = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;
      var props = _this.props;

      var customizePrefixCls = props.prefixCls,
          span = props.span,
          order = props.order,
          offset = props.offset,
          push = props.push,
          pull = props.pull,
          className = props.className,
          children = props.children,
          others = __rest(props, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children"]);

      var prefixCls = getPrefixCls('col', customizePrefixCls);
      var sizeClassObj = {};
      ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
        var _extends2;

        var sizeProps = {};

        if (typeof props[size] === 'number') {
          sizeProps.span = props[size];
        } else if (_typeof(props[size]) === 'object') {
          sizeProps = props[size] || {};
        }

        delete others[size];
        sizeClassObj = _extends({}, sizeClassObj, (_extends2 = {}, _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-").concat(sizeProps.span), sizeProps.span !== undefined), _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-order-").concat(sizeProps.order), sizeProps.order || sizeProps.order === 0), _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-offset-").concat(sizeProps.offset), sizeProps.offset || sizeProps.offset === 0), _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-push-").concat(sizeProps.push), sizeProps.push || sizeProps.push === 0), _defineProperty(_extends2, "".concat(prefixCls, "-").concat(size, "-pull-").concat(sizeProps.pull), sizeProps.pull || sizeProps.pull === 0), _extends2));
      });
      var classes = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(span), span !== undefined), _defineProperty(_classNames, "".concat(prefixCls, "-order-").concat(order), order), _defineProperty(_classNames, "".concat(prefixCls, "-offset-").concat(offset), offset), _defineProperty(_classNames, "".concat(prefixCls, "-push-").concat(push), push), _defineProperty(_classNames, "".concat(prefixCls, "-pull-").concat(pull), pull), _classNames), className, sizeClassObj);
      return React.createElement(_RowContext["default"].Consumer, null, function (_ref2) {
        var gutter = _ref2.gutter;
        var style = others.style;

        if (gutter > 0) {
          style = _extends({
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2
          }, style);
        }

        return React.createElement("div", _extends({}, others, {
          style: style,
          className: classes
        }), children);
      });
    };

    return _this;
  }

  _createClass(Col, [{
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderCol);
    }
  }]);

  return Col;
}(React.Component);

exports["default"] = Col;
Col.propTypes = {
  span: PropTypes.number,
  order: PropTypes.number,
  offset: PropTypes.number,
  push: PropTypes.number,
  pull: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  xs: objectOrNumber,
  sm: objectOrNumber,
  md: objectOrNumber,
  lg: objectOrNumber,
  xl: objectOrNumber,
  xxl: objectOrNumber
};

/***/ }),

/***/ "./node_modules/antd/lib/grid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/grid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function get() {
    return _row["default"];
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function get() {
    return _col["default"];
  }
});

var _row = _interopRequireDefault(__webpack_require__(/*! ./row */ "./node_modules/antd/lib/grid/row.js"));

var _col = _interopRequireDefault(__webpack_require__(/*! ./col */ "./node_modules/antd/lib/grid/col.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***/ }),

/***/ "./node_modules/antd/lib/grid/row.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/row.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _RowContext = _interopRequireDefault(__webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js"));

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

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
var enquire;

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };

  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");
}

var RowAligns = (0, _type.tuple)('top', 'middle', 'bottom');
var RowJustify = (0, _type.tuple)('start', 'end', 'center', 'space-around', 'space-between');
var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)'
};

var Row =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    var _this;

    _classCallCheck(this, Row);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Row).apply(this, arguments));
    _this.state = {
      screens: {}
    };

    _this.renderRow = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          type = _a.type,
          justify = _a.justify,
          align = _a.align,
          className = _a.className,
          style = _a.style,
          children = _a.children,
          others = __rest(_a, ["prefixCls", "type", "justify", "align", "className", "style", "children"]);

      var prefixCls = getPrefixCls('row', customizePrefixCls);

      var gutter = _this.getGutter();

      var classes = (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, !type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(justify), type && justify), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type, "-").concat(align), type && align), _classNames), className);
      var rowStyle = gutter > 0 ? _extends({
        marginLeft: gutter / -2,
        marginRight: gutter / -2
      }, style) : style;

      var otherProps = _extends({}, others);

      delete otherProps.gutter;
      return React.createElement(_RowContext["default"].Provider, {
        value: {
          gutter: gutter
        }
      }, React.createElement("div", _extends({}, otherProps, {
        className: classes,
        style: rowStyle
      }), children));
    };

    return _this;
  }

  _createClass(Row, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object.keys(responsiveMap).map(function (screen) {
        return enquire.register(responsiveMap[screen], {
          match: function match() {
            if (_typeof(_this2.props.gutter) !== 'object') {
              return;
            }

            _this2.setState(function (prevState) {
              return {
                screens: _extends({}, prevState.screens, _defineProperty({}, screen, true))
              };
            });
          },
          unmatch: function unmatch() {
            if (_typeof(_this2.props.gutter) !== 'object') {
              return;
            }

            _this2.setState(function (prevState) {
              return {
                screens: _extends({}, prevState.screens, _defineProperty({}, screen, false))
              };
            });
          },
          // Keep a empty destory to avoid triggering unmatch when unregister
          destroy: function destroy() {}
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object.keys(responsiveMap).map(function (screen) {
        return enquire.unregister(responsiveMap[screen]);
      });
    }
  }, {
    key: "getGutter",
    value: function getGutter() {
      var gutter = this.props.gutter;

      if (_typeof(gutter) === 'object') {
        for (var i = 0; i < responsiveArray.length; i++) {
          var breakpoint = responsiveArray[i];

          if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
            return gutter[breakpoint];
          }
        }
      }

      return gutter;
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderRow);
    }
  }]);

  return Row;
}(React.Component);

exports["default"] = Row;
Row.defaultProps = {
  gutter: 0
};
Row.propTypes = {
  type: PropTypes.oneOf(['flex']),
  align: PropTypes.oneOf(RowAligns),
  justify: PropTypes.oneOf(RowJustify),
  className: PropTypes.string,
  children: PropTypes.node,
  gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  prefixCls: PropTypes.string
};

/***/ }),

/***/ "./node_modules/antd/lib/grid/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/grid/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/grid/style/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/grid/style/index.css");

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

/***/ "./node_modules/antd/lib/rate/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/rate/index.js ***!
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

var _rcRate = _interopRequireDefault(__webpack_require__(/*! rc-rate */ "./node_modules/rc-rate/es/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _icon = _interopRequireDefault(__webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip */ "./node_modules/antd/lib/tooltip/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Rate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rate, _React$Component);

  function Rate() {
    var _this;

    _classCallCheck(this, Rate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rate).apply(this, arguments));

    _this.saveRate = function (node) {
      _this.rcRate = node;
    };

    _this.characterRender = function (node, _ref) {
      var index = _ref.index;
      var tooltips = _this.props.tooltips;
      if (!tooltips) return node;
      return React.createElement(_tooltip["default"], {
        title: tooltips[index]
      }, node);
    };

    _this.renderRate = function (_ref2) {
      var getPrefixCls = _ref2.getPrefixCls;

      var _a = _this.props,
          prefixCls = _a.prefixCls,
          restProps = __rest(_a, ["prefixCls"]);

      var rateProps = (0, _omit["default"])(restProps, ['tooltips']);
      return React.createElement(_rcRate["default"], _extends({
        ref: _this.saveRate,
        characterRender: _this.characterRender
      }, rateProps, {
        prefixCls: getPrefixCls('rate', prefixCls)
      }));
    };

    return _this;
  }

  _createClass(Rate, [{
    key: "focus",
    value: function focus() {
      this.rcRate.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcRate.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderRate);
    }
  }]);

  return Rate;
}(React.Component);

exports["default"] = Rate;
Rate.propTypes = {
  prefixCls: PropTypes.string,
  character: PropTypes.node
};
Rate.defaultProps = {
  character: React.createElement(_icon["default"], {
    type: "star",
    theme: "filled"
  })
};

/***/ }),

/***/ "./node_modules/antd/lib/rate/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/rate/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/rate/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/rate/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/rate/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/rate/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/rate/style/index.css", function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js??ref--6-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/rate/style/index.css");

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

/***/ "./node_modules/antd/lib/row/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/row/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

var _default = _grid.Row;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/row/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/row/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ../../grid/style/index.css */ "./node_modules/antd/lib/grid/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _rcTooltip = _interopRequireDefault(__webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _placements = _interopRequireDefault(__webpack_require__(/*! ./placements */ "./node_modules/antd/lib/tooltip/placements.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = _extends({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (!('visible' in _this.props)) {
        _this.setState({
          visible: _this.isNoTitle() ? false : visible
        });
      }

      if (onVisibleChange && !_this.isNoTitle()) {
        onVisibleChange(visible);
      }
    }; // 动态设置动画点


    _this.onPopupAlign = function (domNode, align) {
      var placements = _this.getPlacements(); // 当前返回的位置


      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];

      if (!placement) {
        return;
      } // 根据当前坐标设置动画点


      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };

      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = "".concat(-align.offset[1], "px");
      }

      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = "".concat(-align.offset[0], "px");
      }

      domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
    };

    _this.saveTooltip = function (node) {
      _this.tooltip = node;
    };

    _this.renderTooltip = function (_ref) {
      var getContextPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls;

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var customizePrefixCls = props.prefixCls,
          title = props.title,
          overlay = props.overlay,
          openClassName = props.openClassName,
          getPopupContainer = props.getPopupContainer,
          getTooltipContainer = props.getTooltipContainer;
      var children = props.children;
      var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
      var visible = state.visible; // Hide tooltip when there is no title

      if (!('visible' in props) && _this.isNoTitle()) {
        visible = false;
      }

      var child = _this.getDisabledCompatibleChildren(React.isValidElement(children) ? children : React.createElement("span", null, children));

      var childProps = child.props;
      var childCls = (0, _classnames["default"])(childProps.className, _defineProperty({}, openClassName || "".concat(prefixCls, "-open"), true));
      return React.createElement(_rcTooltip["default"], _extends({}, _this.props, {
        prefixCls: prefixCls,
        getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
        ref: _this.saveTooltip,
        builtinPlacements: _this.getPlacements(),
        overlay: overlay || title || '',
        visible: visible,
        onVisibleChange: _this.onVisibleChange,
        onPopupAlign: _this.onPopupAlign
      }), visible ? (0, React.cloneElement)(child, {
        className: childCls
      }) : child);
    };

    _this.state = {
      visible: !!props.visible || !!props.defaultVisible
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "getPopupDomNode",
    value: function getPopupDomNode() {
      return this.tooltip.getPopupDomNode();
    }
  }, {
    key: "getPlacements",
    value: function getPlacements() {
      var _this$props = this.props,
          builtinPlacements = _this$props.builtinPlacements,
          arrowPointAtCenter = _this$props.arrowPointAtCenter,
          autoAdjustOverflow = _this$props.autoAdjustOverflow;
      return builtinPlacements || (0, _placements["default"])({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    } // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18

  }, {
    key: "getDisabledCompatibleChildren",
    value: function getDisabledCompatibleChildren(element) {
      if ((element.type.__ANT_BUTTON || element.type === 'button') && element.props.disabled) {
        // Pick some layout related style properties up to span
        // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
        var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
            picked = _splitObject.picked,
            omitted = _splitObject.omitted;

        var spanStyle = _extends({
          display: 'inline-block'
        }, picked, {
          cursor: 'not-allowed',
          width: element.props.block ? '100%' : null
        });

        var buttonStyle = _extends({}, omitted, {
          pointerEvents: 'none'
        });

        var child = (0, React.cloneElement)(element, {
          style: buttonStyle,
          className: null
        });
        return React.createElement("span", {
          style: spanStyle,
          className: element.props.className
        }, child);
      }

      return element;
    }
  }, {
    key: "isNoTitle",
    value: function isNoTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          overlay = _this$props2.overlay;
      return !title && !overlay; // overlay for old version compatibility
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(_configProvider.ConfigConsumer, null, this.renderTooltip);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('visible' in nextProps) {
        return {
          visible: nextProps.visible
        };
      }

      return null;
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
(0, _reactLifecyclesCompat.polyfill)(Tooltip);
var _default = Tooltip;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/placements.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/placements.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverflowOptions = getOverflowOptions;
exports["default"] = getPlacements;

var _placements = __webpack_require__(/*! rc-tooltip/lib/placements */ "./node_modules/rc-tooltip/lib/placements.js");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];

function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return _extends({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}

function getPlacements() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 5 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 12 : _config$verticalArrow,
      _config$autoAdjustOve = config.autoAdjustOverflow,
      autoAdjustOverflow = _config$autoAdjustOve === void 0 ? true : _config$autoAdjustOve;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? _extends({}, placementMap[key], {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : _extends({}, _placements.placements[key], {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}

/***/ }),

/***/ "./node_modules/component-classes/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-classes/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

try {
  var index = __webpack_require__(/*! indexof */ "./node_modules/component-indexof/index.js");
} catch (err) {
  var index = __webpack_require__(/*! component-indexof */ "./node_modules/component-indexof/index.js");
}

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re){
  var arr = this.array();
  for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list
    ? this.list.contains(name)
    : !! ~index(this.array(), name);
};


/***/ }),

/***/ "./node_modules/component-indexof/index.js":
/*!*************************************************!*\
  !*** ./node_modules/component-indexof/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(arr, obj){
  if (arr.indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};

/***/ }),

/***/ "./node_modules/css-animation/es/Event.js":
/*!************************************************!*\
  !*** ./node_modules/css-animation/es/Event.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TransitionEvents);

/***/ }),

/***/ "./node_modules/css-animation/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/css-animation/es/index.js ***!
  \************************************************/
/*! exports provided: isCssAnimationSupported, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssAnimationSupported", function() { return isCssAnimationSupported; });
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Event */ "./node_modules/css-animation/es/Event.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! component-classes */ "./node_modules/component-classes/index.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(component_classes__WEBPACK_IMPORTED_MODULE_2__);




var isCssAnimationSupported = _Event__WEBPACK_IMPORTED_MODULE_1__["default"].endEvents.length !== 0;
var capitalPrefixes = ['Webkit', 'Moz', 'O',
// ms is special .... !
'ms'];
var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < prefixes.length; i++) {
    ret = style.getPropertyValue(prefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function fixBrowserByTimeout(node) {
  if (isCssAnimationSupported) {
    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
    // sometimes, browser bug
    node.rcEndAnimTimeout = setTimeout(function () {
      node.rcEndAnimTimeout = null;
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }, time * 1000 + 200);
  }
}

function clearBrowserBugTimeout(node) {
  if (node.rcEndAnimTimeout) {
    clearTimeout(node.rcEndAnimTimeout);
    node.rcEndAnimTimeout = null;
  }
}

var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(transitionName)) === 'object';
  var className = nameIsObj ? transitionName.name : transitionName;
  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
  var end = endCallback;
  var start = void 0;
  var active = void 0;
  var nodeClasses = component_classes__WEBPACK_IMPORTED_MODULE_2___default()(node);

  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
    end = endCallback.end;
    start = endCallback.start;
    active = endCallback.active;
  }

  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    nodeClasses.remove(className);
    nodeClasses.remove(activeClassName);

    _Event__WEBPACK_IMPORTED_MODULE_1__["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional end is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (end) {
      end();
    }
  };

  _Event__WEBPACK_IMPORTED_MODULE_1__["default"].addEndEventListener(node, node.rcEndListener);

  if (start) {
    start();
  }
  nodeClasses.add(className);

  node.rcAnimTimeout = setTimeout(function () {
    node.rcAnimTimeout = null;
    nodeClasses.add(activeClassName);
    if (active) {
      setTimeout(active, 0);
    }
    fixBrowserByTimeout(node);
    // 30ms for firefox
  }, 30);

  return {
    stop: function stop() {
      if (node.rcEndListener) {
        node.rcEndListener();
      }
    }
  };
};

cssAnimation.style = function (node, style, callback) {
  if (node.rcEndListener) {
    node.rcEndListener();
  }

  node.rcEndListener = function (e) {
    if (e && e.target !== node) {
      return;
    }

    if (node.rcAnimTimeout) {
      clearTimeout(node.rcAnimTimeout);
      node.rcAnimTimeout = null;
    }

    clearBrowserBugTimeout(node);

    _Event__WEBPACK_IMPORTED_MODULE_1__["default"].removeEndEventListener(node, node.rcEndListener);
    node.rcEndListener = null;

    // Usually this optional callback is used for informing an owner of
    // a leave animation and telling it to remove the child.
    if (callback) {
      callback();
    }
  };

  _Event__WEBPACK_IMPORTED_MODULE_1__["default"].addEndEventListener(node, node.rcEndListener);

  node.rcAnimTimeout = setTimeout(function () {
    for (var s in style) {
      if (style.hasOwnProperty(s)) {
        node.style[s] = style[s];
      }
    }
    node.rcAnimTimeout = null;
    fixBrowserByTimeout(node);
  }, 0);
};

cssAnimation.setTransition = function (node, p, value) {
  var property = p;
  var v = value;
  if (value === undefined) {
    v = property;
    property = '';
  }
  property = property || '';
  capitalPrefixes.forEach(function (prefix) {
    node.style[prefix + 'Transition' + property] = v;
  });
};

cssAnimation.isCssAnimationSupported = isCssAnimationSupported;



/* harmony default export */ __webpack_exports__["default"] = (cssAnimation);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/grid/style/index.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/antd/lib/grid/style/index.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-row {\n  position: relative;\n  margin-left: 0;\n  margin-right: 0;\n  height: auto;\n  zoom: 1;\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ant-row:before,\n.ant-row:after {\n  content: '';\n  display: table;\n}\n.ant-row:after {\n  clear: both;\n}\n.ant-row-flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n}\n.ant-row-flex:before,\n.ant-row-flex:after {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.ant-row-flex-start {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.ant-row-flex-center {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.ant-row-flex-end {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.ant-row-flex-space-between {\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.ant-row-flex-space-around {\n  -webkit-justify-content: space-around;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n}\n.ant-row-flex-top {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.ant-row-flex-middle {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.ant-row-flex-bottom {\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.ant-col {\n  position: relative;\n  display: block;\n}\n.ant-col-1,\n.ant-col-xs-1,\n.ant-col-sm-1,\n.ant-col-md-1,\n.ant-col-lg-1,\n.ant-col-2,\n.ant-col-xs-2,\n.ant-col-sm-2,\n.ant-col-md-2,\n.ant-col-lg-2,\n.ant-col-3,\n.ant-col-xs-3,\n.ant-col-sm-3,\n.ant-col-md-3,\n.ant-col-lg-3,\n.ant-col-4,\n.ant-col-xs-4,\n.ant-col-sm-4,\n.ant-col-md-4,\n.ant-col-lg-4,\n.ant-col-5,\n.ant-col-xs-5,\n.ant-col-sm-5,\n.ant-col-md-5,\n.ant-col-lg-5,\n.ant-col-6,\n.ant-col-xs-6,\n.ant-col-sm-6,\n.ant-col-md-6,\n.ant-col-lg-6,\n.ant-col-7,\n.ant-col-xs-7,\n.ant-col-sm-7,\n.ant-col-md-7,\n.ant-col-lg-7,\n.ant-col-8,\n.ant-col-xs-8,\n.ant-col-sm-8,\n.ant-col-md-8,\n.ant-col-lg-8,\n.ant-col-9,\n.ant-col-xs-9,\n.ant-col-sm-9,\n.ant-col-md-9,\n.ant-col-lg-9,\n.ant-col-10,\n.ant-col-xs-10,\n.ant-col-sm-10,\n.ant-col-md-10,\n.ant-col-lg-10,\n.ant-col-11,\n.ant-col-xs-11,\n.ant-col-sm-11,\n.ant-col-md-11,\n.ant-col-lg-11,\n.ant-col-12,\n.ant-col-xs-12,\n.ant-col-sm-12,\n.ant-col-md-12,\n.ant-col-lg-12,\n.ant-col-13,\n.ant-col-xs-13,\n.ant-col-sm-13,\n.ant-col-md-13,\n.ant-col-lg-13,\n.ant-col-14,\n.ant-col-xs-14,\n.ant-col-sm-14,\n.ant-col-md-14,\n.ant-col-lg-14,\n.ant-col-15,\n.ant-col-xs-15,\n.ant-col-sm-15,\n.ant-col-md-15,\n.ant-col-lg-15,\n.ant-col-16,\n.ant-col-xs-16,\n.ant-col-sm-16,\n.ant-col-md-16,\n.ant-col-lg-16,\n.ant-col-17,\n.ant-col-xs-17,\n.ant-col-sm-17,\n.ant-col-md-17,\n.ant-col-lg-17,\n.ant-col-18,\n.ant-col-xs-18,\n.ant-col-sm-18,\n.ant-col-md-18,\n.ant-col-lg-18,\n.ant-col-19,\n.ant-col-xs-19,\n.ant-col-sm-19,\n.ant-col-md-19,\n.ant-col-lg-19,\n.ant-col-20,\n.ant-col-xs-20,\n.ant-col-sm-20,\n.ant-col-md-20,\n.ant-col-lg-20,\n.ant-col-21,\n.ant-col-xs-21,\n.ant-col-sm-21,\n.ant-col-md-21,\n.ant-col-lg-21,\n.ant-col-22,\n.ant-col-xs-22,\n.ant-col-sm-22,\n.ant-col-md-22,\n.ant-col-lg-22,\n.ant-col-23,\n.ant-col-xs-23,\n.ant-col-sm-23,\n.ant-col-md-23,\n.ant-col-lg-23,\n.ant-col-24,\n.ant-col-xs-24,\n.ant-col-sm-24,\n.ant-col-md-24,\n.ant-col-lg-24 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 0;\n  padding-right: 0;\n}\n.ant-col-1,\n.ant-col-2,\n.ant-col-3,\n.ant-col-4,\n.ant-col-5,\n.ant-col-6,\n.ant-col-7,\n.ant-col-8,\n.ant-col-9,\n.ant-col-10,\n.ant-col-11,\n.ant-col-12,\n.ant-col-13,\n.ant-col-14,\n.ant-col-15,\n.ant-col-16,\n.ant-col-17,\n.ant-col-18,\n.ant-col-19,\n.ant-col-20,\n.ant-col-21,\n.ant-col-22,\n.ant-col-23,\n.ant-col-24 {\n  float: left;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.ant-col-24 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n}\n.ant-col-push-24 {\n  left: 100%;\n}\n.ant-col-pull-24 {\n  right: 100%;\n}\n.ant-col-offset-24 {\n  margin-left: 100%;\n}\n.ant-col-order-24 {\n  -webkit-box-ordinal-group: 25;\n  -webkit-order: 24;\n      -ms-flex-order: 24;\n          order: 24;\n}\n.ant-col-23 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 95.83333333%;\n}\n.ant-col-push-23 {\n  left: 95.83333333%;\n}\n.ant-col-pull-23 {\n  right: 95.83333333%;\n}\n.ant-col-offset-23 {\n  margin-left: 95.83333333%;\n}\n.ant-col-order-23 {\n  -webkit-box-ordinal-group: 24;\n  -webkit-order: 23;\n      -ms-flex-order: 23;\n          order: 23;\n}\n.ant-col-22 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 91.66666667%;\n}\n.ant-col-push-22 {\n  left: 91.66666667%;\n}\n.ant-col-pull-22 {\n  right: 91.66666667%;\n}\n.ant-col-offset-22 {\n  margin-left: 91.66666667%;\n}\n.ant-col-order-22 {\n  -webkit-box-ordinal-group: 23;\n  -webkit-order: 22;\n      -ms-flex-order: 22;\n          order: 22;\n}\n.ant-col-21 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 87.5%;\n}\n.ant-col-push-21 {\n  left: 87.5%;\n}\n.ant-col-pull-21 {\n  right: 87.5%;\n}\n.ant-col-offset-21 {\n  margin-left: 87.5%;\n}\n.ant-col-order-21 {\n  -webkit-box-ordinal-group: 22;\n  -webkit-order: 21;\n      -ms-flex-order: 21;\n          order: 21;\n}\n.ant-col-20 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 83.33333333%;\n}\n.ant-col-push-20 {\n  left: 83.33333333%;\n}\n.ant-col-pull-20 {\n  right: 83.33333333%;\n}\n.ant-col-offset-20 {\n  margin-left: 83.33333333%;\n}\n.ant-col-order-20 {\n  -webkit-box-ordinal-group: 21;\n  -webkit-order: 20;\n      -ms-flex-order: 20;\n          order: 20;\n}\n.ant-col-19 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 79.16666667%;\n}\n.ant-col-push-19 {\n  left: 79.16666667%;\n}\n.ant-col-pull-19 {\n  right: 79.16666667%;\n}\n.ant-col-offset-19 {\n  margin-left: 79.16666667%;\n}\n.ant-col-order-19 {\n  -webkit-box-ordinal-group: 20;\n  -webkit-order: 19;\n      -ms-flex-order: 19;\n          order: 19;\n}\n.ant-col-18 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 75%;\n}\n.ant-col-push-18 {\n  left: 75%;\n}\n.ant-col-pull-18 {\n  right: 75%;\n}\n.ant-col-offset-18 {\n  margin-left: 75%;\n}\n.ant-col-order-18 {\n  -webkit-box-ordinal-group: 19;\n  -webkit-order: 18;\n      -ms-flex-order: 18;\n          order: 18;\n}\n.ant-col-17 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 70.83333333%;\n}\n.ant-col-push-17 {\n  left: 70.83333333%;\n}\n.ant-col-pull-17 {\n  right: 70.83333333%;\n}\n.ant-col-offset-17 {\n  margin-left: 70.83333333%;\n}\n.ant-col-order-17 {\n  -webkit-box-ordinal-group: 18;\n  -webkit-order: 17;\n      -ms-flex-order: 17;\n          order: 17;\n}\n.ant-col-16 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 66.66666667%;\n}\n.ant-col-push-16 {\n  left: 66.66666667%;\n}\n.ant-col-pull-16 {\n  right: 66.66666667%;\n}\n.ant-col-offset-16 {\n  margin-left: 66.66666667%;\n}\n.ant-col-order-16 {\n  -webkit-box-ordinal-group: 17;\n  -webkit-order: 16;\n      -ms-flex-order: 16;\n          order: 16;\n}\n.ant-col-15 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 62.5%;\n}\n.ant-col-push-15 {\n  left: 62.5%;\n}\n.ant-col-pull-15 {\n  right: 62.5%;\n}\n.ant-col-offset-15 {\n  margin-left: 62.5%;\n}\n.ant-col-order-15 {\n  -webkit-box-ordinal-group: 16;\n  -webkit-order: 15;\n      -ms-flex-order: 15;\n          order: 15;\n}\n.ant-col-14 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 58.33333333%;\n}\n.ant-col-push-14 {\n  left: 58.33333333%;\n}\n.ant-col-pull-14 {\n  right: 58.33333333%;\n}\n.ant-col-offset-14 {\n  margin-left: 58.33333333%;\n}\n.ant-col-order-14 {\n  -webkit-box-ordinal-group: 15;\n  -webkit-order: 14;\n      -ms-flex-order: 14;\n          order: 14;\n}\n.ant-col-13 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 54.16666667%;\n}\n.ant-col-push-13 {\n  left: 54.16666667%;\n}\n.ant-col-pull-13 {\n  right: 54.16666667%;\n}\n.ant-col-offset-13 {\n  margin-left: 54.16666667%;\n}\n.ant-col-order-13 {\n  -webkit-box-ordinal-group: 14;\n  -webkit-order: 13;\n      -ms-flex-order: 13;\n          order: 13;\n}\n.ant-col-12 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 50%;\n}\n.ant-col-push-12 {\n  left: 50%;\n}\n.ant-col-pull-12 {\n  right: 50%;\n}\n.ant-col-offset-12 {\n  margin-left: 50%;\n}\n.ant-col-order-12 {\n  -webkit-box-ordinal-group: 13;\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12;\n}\n.ant-col-11 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 45.83333333%;\n}\n.ant-col-push-11 {\n  left: 45.83333333%;\n}\n.ant-col-pull-11 {\n  right: 45.83333333%;\n}\n.ant-col-offset-11 {\n  margin-left: 45.83333333%;\n}\n.ant-col-order-11 {\n  -webkit-box-ordinal-group: 12;\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11;\n}\n.ant-col-10 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 41.66666667%;\n}\n.ant-col-push-10 {\n  left: 41.66666667%;\n}\n.ant-col-pull-10 {\n  right: 41.66666667%;\n}\n.ant-col-offset-10 {\n  margin-left: 41.66666667%;\n}\n.ant-col-order-10 {\n  -webkit-box-ordinal-group: 11;\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10;\n}\n.ant-col-9 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 37.5%;\n}\n.ant-col-push-9 {\n  left: 37.5%;\n}\n.ant-col-pull-9 {\n  right: 37.5%;\n}\n.ant-col-offset-9 {\n  margin-left: 37.5%;\n}\n.ant-col-order-9 {\n  -webkit-box-ordinal-group: 10;\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9;\n}\n.ant-col-8 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 33.33333333%;\n}\n.ant-col-push-8 {\n  left: 33.33333333%;\n}\n.ant-col-pull-8 {\n  right: 33.33333333%;\n}\n.ant-col-offset-8 {\n  margin-left: 33.33333333%;\n}\n.ant-col-order-8 {\n  -webkit-box-ordinal-group: 9;\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8;\n}\n.ant-col-7 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 29.16666667%;\n}\n.ant-col-push-7 {\n  left: 29.16666667%;\n}\n.ant-col-pull-7 {\n  right: 29.16666667%;\n}\n.ant-col-offset-7 {\n  margin-left: 29.16666667%;\n}\n.ant-col-order-7 {\n  -webkit-box-ordinal-group: 8;\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7;\n}\n.ant-col-6 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 25%;\n}\n.ant-col-push-6 {\n  left: 25%;\n}\n.ant-col-pull-6 {\n  right: 25%;\n}\n.ant-col-offset-6 {\n  margin-left: 25%;\n}\n.ant-col-order-6 {\n  -webkit-box-ordinal-group: 7;\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6;\n}\n.ant-col-5 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 20.83333333%;\n}\n.ant-col-push-5 {\n  left: 20.83333333%;\n}\n.ant-col-pull-5 {\n  right: 20.83333333%;\n}\n.ant-col-offset-5 {\n  margin-left: 20.83333333%;\n}\n.ant-col-order-5 {\n  -webkit-box-ordinal-group: 6;\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5;\n}\n.ant-col-4 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 16.66666667%;\n}\n.ant-col-push-4 {\n  left: 16.66666667%;\n}\n.ant-col-pull-4 {\n  right: 16.66666667%;\n}\n.ant-col-offset-4 {\n  margin-left: 16.66666667%;\n}\n.ant-col-order-4 {\n  -webkit-box-ordinal-group: 5;\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4;\n}\n.ant-col-3 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 12.5%;\n}\n.ant-col-push-3 {\n  left: 12.5%;\n}\n.ant-col-pull-3 {\n  right: 12.5%;\n}\n.ant-col-offset-3 {\n  margin-left: 12.5%;\n}\n.ant-col-order-3 {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n}\n.ant-col-2 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 8.33333333%;\n}\n.ant-col-push-2 {\n  left: 8.33333333%;\n}\n.ant-col-pull-2 {\n  right: 8.33333333%;\n}\n.ant-col-offset-2 {\n  margin-left: 8.33333333%;\n}\n.ant-col-order-2 {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n.ant-col-1 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 4.16666667%;\n}\n.ant-col-push-1 {\n  left: 4.16666667%;\n}\n.ant-col-pull-1 {\n  right: 4.16666667%;\n}\n.ant-col-offset-1 {\n  margin-left: 4.16666667%;\n}\n.ant-col-order-1 {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.ant-col-0 {\n  display: none;\n}\n.ant-col-push-0 {\n  left: auto;\n}\n.ant-col-pull-0 {\n  right: auto;\n}\n.ant-col-push-0 {\n  left: auto;\n}\n.ant-col-pull-0 {\n  right: auto;\n}\n.ant-col-offset-0 {\n  margin-left: 0;\n}\n.ant-col-order-0 {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0;\n}\n.ant-col-xs-1,\n.ant-col-xs-2,\n.ant-col-xs-3,\n.ant-col-xs-4,\n.ant-col-xs-5,\n.ant-col-xs-6,\n.ant-col-xs-7,\n.ant-col-xs-8,\n.ant-col-xs-9,\n.ant-col-xs-10,\n.ant-col-xs-11,\n.ant-col-xs-12,\n.ant-col-xs-13,\n.ant-col-xs-14,\n.ant-col-xs-15,\n.ant-col-xs-16,\n.ant-col-xs-17,\n.ant-col-xs-18,\n.ant-col-xs-19,\n.ant-col-xs-20,\n.ant-col-xs-21,\n.ant-col-xs-22,\n.ant-col-xs-23,\n.ant-col-xs-24 {\n  float: left;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n.ant-col-xs-24 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n}\n.ant-col-xs-push-24 {\n  left: 100%;\n}\n.ant-col-xs-pull-24 {\n  right: 100%;\n}\n.ant-col-xs-offset-24 {\n  margin-left: 100%;\n}\n.ant-col-xs-order-24 {\n  -webkit-box-ordinal-group: 25;\n  -webkit-order: 24;\n      -ms-flex-order: 24;\n          order: 24;\n}\n.ant-col-xs-23 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 95.83333333%;\n}\n.ant-col-xs-push-23 {\n  left: 95.83333333%;\n}\n.ant-col-xs-pull-23 {\n  right: 95.83333333%;\n}\n.ant-col-xs-offset-23 {\n  margin-left: 95.83333333%;\n}\n.ant-col-xs-order-23 {\n  -webkit-box-ordinal-group: 24;\n  -webkit-order: 23;\n      -ms-flex-order: 23;\n          order: 23;\n}\n.ant-col-xs-22 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 91.66666667%;\n}\n.ant-col-xs-push-22 {\n  left: 91.66666667%;\n}\n.ant-col-xs-pull-22 {\n  right: 91.66666667%;\n}\n.ant-col-xs-offset-22 {\n  margin-left: 91.66666667%;\n}\n.ant-col-xs-order-22 {\n  -webkit-box-ordinal-group: 23;\n  -webkit-order: 22;\n      -ms-flex-order: 22;\n          order: 22;\n}\n.ant-col-xs-21 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 87.5%;\n}\n.ant-col-xs-push-21 {\n  left: 87.5%;\n}\n.ant-col-xs-pull-21 {\n  right: 87.5%;\n}\n.ant-col-xs-offset-21 {\n  margin-left: 87.5%;\n}\n.ant-col-xs-order-21 {\n  -webkit-box-ordinal-group: 22;\n  -webkit-order: 21;\n      -ms-flex-order: 21;\n          order: 21;\n}\n.ant-col-xs-20 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 83.33333333%;\n}\n.ant-col-xs-push-20 {\n  left: 83.33333333%;\n}\n.ant-col-xs-pull-20 {\n  right: 83.33333333%;\n}\n.ant-col-xs-offset-20 {\n  margin-left: 83.33333333%;\n}\n.ant-col-xs-order-20 {\n  -webkit-box-ordinal-group: 21;\n  -webkit-order: 20;\n      -ms-flex-order: 20;\n          order: 20;\n}\n.ant-col-xs-19 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 79.16666667%;\n}\n.ant-col-xs-push-19 {\n  left: 79.16666667%;\n}\n.ant-col-xs-pull-19 {\n  right: 79.16666667%;\n}\n.ant-col-xs-offset-19 {\n  margin-left: 79.16666667%;\n}\n.ant-col-xs-order-19 {\n  -webkit-box-ordinal-group: 20;\n  -webkit-order: 19;\n      -ms-flex-order: 19;\n          order: 19;\n}\n.ant-col-xs-18 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 75%;\n}\n.ant-col-xs-push-18 {\n  left: 75%;\n}\n.ant-col-xs-pull-18 {\n  right: 75%;\n}\n.ant-col-xs-offset-18 {\n  margin-left: 75%;\n}\n.ant-col-xs-order-18 {\n  -webkit-box-ordinal-group: 19;\n  -webkit-order: 18;\n      -ms-flex-order: 18;\n          order: 18;\n}\n.ant-col-xs-17 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 70.83333333%;\n}\n.ant-col-xs-push-17 {\n  left: 70.83333333%;\n}\n.ant-col-xs-pull-17 {\n  right: 70.83333333%;\n}\n.ant-col-xs-offset-17 {\n  margin-left: 70.83333333%;\n}\n.ant-col-xs-order-17 {\n  -webkit-box-ordinal-group: 18;\n  -webkit-order: 17;\n      -ms-flex-order: 17;\n          order: 17;\n}\n.ant-col-xs-16 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 66.66666667%;\n}\n.ant-col-xs-push-16 {\n  left: 66.66666667%;\n}\n.ant-col-xs-pull-16 {\n  right: 66.66666667%;\n}\n.ant-col-xs-offset-16 {\n  margin-left: 66.66666667%;\n}\n.ant-col-xs-order-16 {\n  -webkit-box-ordinal-group: 17;\n  -webkit-order: 16;\n      -ms-flex-order: 16;\n          order: 16;\n}\n.ant-col-xs-15 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 62.5%;\n}\n.ant-col-xs-push-15 {\n  left: 62.5%;\n}\n.ant-col-xs-pull-15 {\n  right: 62.5%;\n}\n.ant-col-xs-offset-15 {\n  margin-left: 62.5%;\n}\n.ant-col-xs-order-15 {\n  -webkit-box-ordinal-group: 16;\n  -webkit-order: 15;\n      -ms-flex-order: 15;\n          order: 15;\n}\n.ant-col-xs-14 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 58.33333333%;\n}\n.ant-col-xs-push-14 {\n  left: 58.33333333%;\n}\n.ant-col-xs-pull-14 {\n  right: 58.33333333%;\n}\n.ant-col-xs-offset-14 {\n  margin-left: 58.33333333%;\n}\n.ant-col-xs-order-14 {\n  -webkit-box-ordinal-group: 15;\n  -webkit-order: 14;\n      -ms-flex-order: 14;\n          order: 14;\n}\n.ant-col-xs-13 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 54.16666667%;\n}\n.ant-col-xs-push-13 {\n  left: 54.16666667%;\n}\n.ant-col-xs-pull-13 {\n  right: 54.16666667%;\n}\n.ant-col-xs-offset-13 {\n  margin-left: 54.16666667%;\n}\n.ant-col-xs-order-13 {\n  -webkit-box-ordinal-group: 14;\n  -webkit-order: 13;\n      -ms-flex-order: 13;\n          order: 13;\n}\n.ant-col-xs-12 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 50%;\n}\n.ant-col-xs-push-12 {\n  left: 50%;\n}\n.ant-col-xs-pull-12 {\n  right: 50%;\n}\n.ant-col-xs-offset-12 {\n  margin-left: 50%;\n}\n.ant-col-xs-order-12 {\n  -webkit-box-ordinal-group: 13;\n  -webkit-order: 12;\n      -ms-flex-order: 12;\n          order: 12;\n}\n.ant-col-xs-11 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 45.83333333%;\n}\n.ant-col-xs-push-11 {\n  left: 45.83333333%;\n}\n.ant-col-xs-pull-11 {\n  right: 45.83333333%;\n}\n.ant-col-xs-offset-11 {\n  margin-left: 45.83333333%;\n}\n.ant-col-xs-order-11 {\n  -webkit-box-ordinal-group: 12;\n  -webkit-order: 11;\n      -ms-flex-order: 11;\n          order: 11;\n}\n.ant-col-xs-10 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 41.66666667%;\n}\n.ant-col-xs-push-10 {\n  left: 41.66666667%;\n}\n.ant-col-xs-pull-10 {\n  right: 41.66666667%;\n}\n.ant-col-xs-offset-10 {\n  margin-left: 41.66666667%;\n}\n.ant-col-xs-order-10 {\n  -webkit-box-ordinal-group: 11;\n  -webkit-order: 10;\n      -ms-flex-order: 10;\n          order: 10;\n}\n.ant-col-xs-9 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 37.5%;\n}\n.ant-col-xs-push-9 {\n  left: 37.5%;\n}\n.ant-col-xs-pull-9 {\n  right: 37.5%;\n}\n.ant-col-xs-offset-9 {\n  margin-left: 37.5%;\n}\n.ant-col-xs-order-9 {\n  -webkit-box-ordinal-group: 10;\n  -webkit-order: 9;\n      -ms-flex-order: 9;\n          order: 9;\n}\n.ant-col-xs-8 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 33.33333333%;\n}\n.ant-col-xs-push-8 {\n  left: 33.33333333%;\n}\n.ant-col-xs-pull-8 {\n  right: 33.33333333%;\n}\n.ant-col-xs-offset-8 {\n  margin-left: 33.33333333%;\n}\n.ant-col-xs-order-8 {\n  -webkit-box-ordinal-group: 9;\n  -webkit-order: 8;\n      -ms-flex-order: 8;\n          order: 8;\n}\n.ant-col-xs-7 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 29.16666667%;\n}\n.ant-col-xs-push-7 {\n  left: 29.16666667%;\n}\n.ant-col-xs-pull-7 {\n  right: 29.16666667%;\n}\n.ant-col-xs-offset-7 {\n  margin-left: 29.16666667%;\n}\n.ant-col-xs-order-7 {\n  -webkit-box-ordinal-group: 8;\n  -webkit-order: 7;\n      -ms-flex-order: 7;\n          order: 7;\n}\n.ant-col-xs-6 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 25%;\n}\n.ant-col-xs-push-6 {\n  left: 25%;\n}\n.ant-col-xs-pull-6 {\n  right: 25%;\n}\n.ant-col-xs-offset-6 {\n  margin-left: 25%;\n}\n.ant-col-xs-order-6 {\n  -webkit-box-ordinal-group: 7;\n  -webkit-order: 6;\n      -ms-flex-order: 6;\n          order: 6;\n}\n.ant-col-xs-5 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 20.83333333%;\n}\n.ant-col-xs-push-5 {\n  left: 20.83333333%;\n}\n.ant-col-xs-pull-5 {\n  right: 20.83333333%;\n}\n.ant-col-xs-offset-5 {\n  margin-left: 20.83333333%;\n}\n.ant-col-xs-order-5 {\n  -webkit-box-ordinal-group: 6;\n  -webkit-order: 5;\n      -ms-flex-order: 5;\n          order: 5;\n}\n.ant-col-xs-4 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 16.66666667%;\n}\n.ant-col-xs-push-4 {\n  left: 16.66666667%;\n}\n.ant-col-xs-pull-4 {\n  right: 16.66666667%;\n}\n.ant-col-xs-offset-4 {\n  margin-left: 16.66666667%;\n}\n.ant-col-xs-order-4 {\n  -webkit-box-ordinal-group: 5;\n  -webkit-order: 4;\n      -ms-flex-order: 4;\n          order: 4;\n}\n.ant-col-xs-3 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 12.5%;\n}\n.ant-col-xs-push-3 {\n  left: 12.5%;\n}\n.ant-col-xs-pull-3 {\n  right: 12.5%;\n}\n.ant-col-xs-offset-3 {\n  margin-left: 12.5%;\n}\n.ant-col-xs-order-3 {\n  -webkit-box-ordinal-group: 4;\n  -webkit-order: 3;\n      -ms-flex-order: 3;\n          order: 3;\n}\n.ant-col-xs-2 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 8.33333333%;\n}\n.ant-col-xs-push-2 {\n  left: 8.33333333%;\n}\n.ant-col-xs-pull-2 {\n  right: 8.33333333%;\n}\n.ant-col-xs-offset-2 {\n  margin-left: 8.33333333%;\n}\n.ant-col-xs-order-2 {\n  -webkit-box-ordinal-group: 3;\n  -webkit-order: 2;\n      -ms-flex-order: 2;\n          order: 2;\n}\n.ant-col-xs-1 {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 4.16666667%;\n}\n.ant-col-xs-push-1 {\n  left: 4.16666667%;\n}\n.ant-col-xs-pull-1 {\n  right: 4.16666667%;\n}\n.ant-col-xs-offset-1 {\n  margin-left: 4.16666667%;\n}\n.ant-col-xs-order-1 {\n  -webkit-box-ordinal-group: 2;\n  -webkit-order: 1;\n      -ms-flex-order: 1;\n          order: 1;\n}\n.ant-col-xs-0 {\n  display: none;\n}\n.ant-col-push-0 {\n  left: auto;\n}\n.ant-col-pull-0 {\n  right: auto;\n}\n.ant-col-xs-push-0 {\n  left: auto;\n}\n.ant-col-xs-pull-0 {\n  right: auto;\n}\n.ant-col-xs-offset-0 {\n  margin-left: 0;\n}\n.ant-col-xs-order-0 {\n  -webkit-box-ordinal-group: 1;\n  -webkit-order: 0;\n      -ms-flex-order: 0;\n          order: 0;\n}\n@media (min-width: 576px) {\n  .ant-col-sm-1,\n  .ant-col-sm-2,\n  .ant-col-sm-3,\n  .ant-col-sm-4,\n  .ant-col-sm-5,\n  .ant-col-sm-6,\n  .ant-col-sm-7,\n  .ant-col-sm-8,\n  .ant-col-sm-9,\n  .ant-col-sm-10,\n  .ant-col-sm-11,\n  .ant-col-sm-12,\n  .ant-col-sm-13,\n  .ant-col-sm-14,\n  .ant-col-sm-15,\n  .ant-col-sm-16,\n  .ant-col-sm-17,\n  .ant-col-sm-18,\n  .ant-col-sm-19,\n  .ant-col-sm-20,\n  .ant-col-sm-21,\n  .ant-col-sm-22,\n  .ant-col-sm-23,\n  .ant-col-sm-24 {\n    float: left;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n  }\n  .ant-col-sm-24 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n  }\n  .ant-col-sm-push-24 {\n    left: 100%;\n  }\n  .ant-col-sm-pull-24 {\n    right: 100%;\n  }\n  .ant-col-sm-offset-24 {\n    margin-left: 100%;\n  }\n  .ant-col-sm-order-24 {\n    -webkit-box-ordinal-group: 25;\n    -webkit-order: 24;\n        -ms-flex-order: 24;\n            order: 24;\n  }\n  .ant-col-sm-23 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 95.83333333%;\n  }\n  .ant-col-sm-push-23 {\n    left: 95.83333333%;\n  }\n  .ant-col-sm-pull-23 {\n    right: 95.83333333%;\n  }\n  .ant-col-sm-offset-23 {\n    margin-left: 95.83333333%;\n  }\n  .ant-col-sm-order-23 {\n    -webkit-box-ordinal-group: 24;\n    -webkit-order: 23;\n        -ms-flex-order: 23;\n            order: 23;\n  }\n  .ant-col-sm-22 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 91.66666667%;\n  }\n  .ant-col-sm-push-22 {\n    left: 91.66666667%;\n  }\n  .ant-col-sm-pull-22 {\n    right: 91.66666667%;\n  }\n  .ant-col-sm-offset-22 {\n    margin-left: 91.66666667%;\n  }\n  .ant-col-sm-order-22 {\n    -webkit-box-ordinal-group: 23;\n    -webkit-order: 22;\n        -ms-flex-order: 22;\n            order: 22;\n  }\n  .ant-col-sm-21 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 87.5%;\n  }\n  .ant-col-sm-push-21 {\n    left: 87.5%;\n  }\n  .ant-col-sm-pull-21 {\n    right: 87.5%;\n  }\n  .ant-col-sm-offset-21 {\n    margin-left: 87.5%;\n  }\n  .ant-col-sm-order-21 {\n    -webkit-box-ordinal-group: 22;\n    -webkit-order: 21;\n        -ms-flex-order: 21;\n            order: 21;\n  }\n  .ant-col-sm-20 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 83.33333333%;\n  }\n  .ant-col-sm-push-20 {\n    left: 83.33333333%;\n  }\n  .ant-col-sm-pull-20 {\n    right: 83.33333333%;\n  }\n  .ant-col-sm-offset-20 {\n    margin-left: 83.33333333%;\n  }\n  .ant-col-sm-order-20 {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n        -ms-flex-order: 20;\n            order: 20;\n  }\n  .ant-col-sm-19 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 79.16666667%;\n  }\n  .ant-col-sm-push-19 {\n    left: 79.16666667%;\n  }\n  .ant-col-sm-pull-19 {\n    right: 79.16666667%;\n  }\n  .ant-col-sm-offset-19 {\n    margin-left: 79.16666667%;\n  }\n  .ant-col-sm-order-19 {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .ant-col-sm-18 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 75%;\n  }\n  .ant-col-sm-push-18 {\n    left: 75%;\n  }\n  .ant-col-sm-pull-18 {\n    right: 75%;\n  }\n  .ant-col-sm-offset-18 {\n    margin-left: 75%;\n  }\n  .ant-col-sm-order-18 {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .ant-col-sm-17 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 70.83333333%;\n  }\n  .ant-col-sm-push-17 {\n    left: 70.83333333%;\n  }\n  .ant-col-sm-pull-17 {\n    right: 70.83333333%;\n  }\n  .ant-col-sm-offset-17 {\n    margin-left: 70.83333333%;\n  }\n  .ant-col-sm-order-17 {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .ant-col-sm-16 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 66.66666667%;\n  }\n  .ant-col-sm-push-16 {\n    left: 66.66666667%;\n  }\n  .ant-col-sm-pull-16 {\n    right: 66.66666667%;\n  }\n  .ant-col-sm-offset-16 {\n    margin-left: 66.66666667%;\n  }\n  .ant-col-sm-order-16 {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .ant-col-sm-15 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 62.5%;\n  }\n  .ant-col-sm-push-15 {\n    left: 62.5%;\n  }\n  .ant-col-sm-pull-15 {\n    right: 62.5%;\n  }\n  .ant-col-sm-offset-15 {\n    margin-left: 62.5%;\n  }\n  .ant-col-sm-order-15 {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .ant-col-sm-14 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 58.33333333%;\n  }\n  .ant-col-sm-push-14 {\n    left: 58.33333333%;\n  }\n  .ant-col-sm-pull-14 {\n    right: 58.33333333%;\n  }\n  .ant-col-sm-offset-14 {\n    margin-left: 58.33333333%;\n  }\n  .ant-col-sm-order-14 {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .ant-col-sm-13 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 54.16666667%;\n  }\n  .ant-col-sm-push-13 {\n    left: 54.16666667%;\n  }\n  .ant-col-sm-pull-13 {\n    right: 54.16666667%;\n  }\n  .ant-col-sm-offset-13 {\n    margin-left: 54.16666667%;\n  }\n  .ant-col-sm-order-13 {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .ant-col-sm-12 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 50%;\n  }\n  .ant-col-sm-push-12 {\n    left: 50%;\n  }\n  .ant-col-sm-pull-12 {\n    right: 50%;\n  }\n  .ant-col-sm-offset-12 {\n    margin-left: 50%;\n  }\n  .ant-col-sm-order-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .ant-col-sm-11 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 45.83333333%;\n  }\n  .ant-col-sm-push-11 {\n    left: 45.83333333%;\n  }\n  .ant-col-sm-pull-11 {\n    right: 45.83333333%;\n  }\n  .ant-col-sm-offset-11 {\n    margin-left: 45.83333333%;\n  }\n  .ant-col-sm-order-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .ant-col-sm-10 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 41.66666667%;\n  }\n  .ant-col-sm-push-10 {\n    left: 41.66666667%;\n  }\n  .ant-col-sm-pull-10 {\n    right: 41.66666667%;\n  }\n  .ant-col-sm-offset-10 {\n    margin-left: 41.66666667%;\n  }\n  .ant-col-sm-order-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .ant-col-sm-9 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 37.5%;\n  }\n  .ant-col-sm-push-9 {\n    left: 37.5%;\n  }\n  .ant-col-sm-pull-9 {\n    right: 37.5%;\n  }\n  .ant-col-sm-offset-9 {\n    margin-left: 37.5%;\n  }\n  .ant-col-sm-order-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .ant-col-sm-8 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 33.33333333%;\n  }\n  .ant-col-sm-push-8 {\n    left: 33.33333333%;\n  }\n  .ant-col-sm-pull-8 {\n    right: 33.33333333%;\n  }\n  .ant-col-sm-offset-8 {\n    margin-left: 33.33333333%;\n  }\n  .ant-col-sm-order-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .ant-col-sm-7 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 29.16666667%;\n  }\n  .ant-col-sm-push-7 {\n    left: 29.16666667%;\n  }\n  .ant-col-sm-pull-7 {\n    right: 29.16666667%;\n  }\n  .ant-col-sm-offset-7 {\n    margin-left: 29.16666667%;\n  }\n  .ant-col-sm-order-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .ant-col-sm-6 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 25%;\n  }\n  .ant-col-sm-push-6 {\n    left: 25%;\n  }\n  .ant-col-sm-pull-6 {\n    right: 25%;\n  }\n  .ant-col-sm-offset-6 {\n    margin-left: 25%;\n  }\n  .ant-col-sm-order-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .ant-col-sm-5 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 20.83333333%;\n  }\n  .ant-col-sm-push-5 {\n    left: 20.83333333%;\n  }\n  .ant-col-sm-pull-5 {\n    right: 20.83333333%;\n  }\n  .ant-col-sm-offset-5 {\n    margin-left: 20.83333333%;\n  }\n  .ant-col-sm-order-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .ant-col-sm-4 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 16.66666667%;\n  }\n  .ant-col-sm-push-4 {\n    left: 16.66666667%;\n  }\n  .ant-col-sm-pull-4 {\n    right: 16.66666667%;\n  }\n  .ant-col-sm-offset-4 {\n    margin-left: 16.66666667%;\n  }\n  .ant-col-sm-order-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .ant-col-sm-3 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 12.5%;\n  }\n  .ant-col-sm-push-3 {\n    left: 12.5%;\n  }\n  .ant-col-sm-pull-3 {\n    right: 12.5%;\n  }\n  .ant-col-sm-offset-3 {\n    margin-left: 12.5%;\n  }\n  .ant-col-sm-order-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .ant-col-sm-2 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 8.33333333%;\n  }\n  .ant-col-sm-push-2 {\n    left: 8.33333333%;\n  }\n  .ant-col-sm-pull-2 {\n    right: 8.33333333%;\n  }\n  .ant-col-sm-offset-2 {\n    margin-left: 8.33333333%;\n  }\n  .ant-col-sm-order-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .ant-col-sm-1 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 4.16666667%;\n  }\n  .ant-col-sm-push-1 {\n    left: 4.16666667%;\n  }\n  .ant-col-sm-pull-1 {\n    right: 4.16666667%;\n  }\n  .ant-col-sm-offset-1 {\n    margin-left: 4.16666667%;\n  }\n  .ant-col-sm-order-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .ant-col-sm-0 {\n    display: none;\n  }\n  .ant-col-push-0 {\n    left: auto;\n  }\n  .ant-col-pull-0 {\n    right: auto;\n  }\n  .ant-col-sm-push-0 {\n    left: auto;\n  }\n  .ant-col-sm-pull-0 {\n    right: auto;\n  }\n  .ant-col-sm-offset-0 {\n    margin-left: 0;\n  }\n  .ant-col-sm-order-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n}\n@media (min-width: 768px) {\n  .ant-col-md-1,\n  .ant-col-md-2,\n  .ant-col-md-3,\n  .ant-col-md-4,\n  .ant-col-md-5,\n  .ant-col-md-6,\n  .ant-col-md-7,\n  .ant-col-md-8,\n  .ant-col-md-9,\n  .ant-col-md-10,\n  .ant-col-md-11,\n  .ant-col-md-12,\n  .ant-col-md-13,\n  .ant-col-md-14,\n  .ant-col-md-15,\n  .ant-col-md-16,\n  .ant-col-md-17,\n  .ant-col-md-18,\n  .ant-col-md-19,\n  .ant-col-md-20,\n  .ant-col-md-21,\n  .ant-col-md-22,\n  .ant-col-md-23,\n  .ant-col-md-24 {\n    float: left;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n  }\n  .ant-col-md-24 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n  }\n  .ant-col-md-push-24 {\n    left: 100%;\n  }\n  .ant-col-md-pull-24 {\n    right: 100%;\n  }\n  .ant-col-md-offset-24 {\n    margin-left: 100%;\n  }\n  .ant-col-md-order-24 {\n    -webkit-box-ordinal-group: 25;\n    -webkit-order: 24;\n        -ms-flex-order: 24;\n            order: 24;\n  }\n  .ant-col-md-23 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 95.83333333%;\n  }\n  .ant-col-md-push-23 {\n    left: 95.83333333%;\n  }\n  .ant-col-md-pull-23 {\n    right: 95.83333333%;\n  }\n  .ant-col-md-offset-23 {\n    margin-left: 95.83333333%;\n  }\n  .ant-col-md-order-23 {\n    -webkit-box-ordinal-group: 24;\n    -webkit-order: 23;\n        -ms-flex-order: 23;\n            order: 23;\n  }\n  .ant-col-md-22 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 91.66666667%;\n  }\n  .ant-col-md-push-22 {\n    left: 91.66666667%;\n  }\n  .ant-col-md-pull-22 {\n    right: 91.66666667%;\n  }\n  .ant-col-md-offset-22 {\n    margin-left: 91.66666667%;\n  }\n  .ant-col-md-order-22 {\n    -webkit-box-ordinal-group: 23;\n    -webkit-order: 22;\n        -ms-flex-order: 22;\n            order: 22;\n  }\n  .ant-col-md-21 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 87.5%;\n  }\n  .ant-col-md-push-21 {\n    left: 87.5%;\n  }\n  .ant-col-md-pull-21 {\n    right: 87.5%;\n  }\n  .ant-col-md-offset-21 {\n    margin-left: 87.5%;\n  }\n  .ant-col-md-order-21 {\n    -webkit-box-ordinal-group: 22;\n    -webkit-order: 21;\n        -ms-flex-order: 21;\n            order: 21;\n  }\n  .ant-col-md-20 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 83.33333333%;\n  }\n  .ant-col-md-push-20 {\n    left: 83.33333333%;\n  }\n  .ant-col-md-pull-20 {\n    right: 83.33333333%;\n  }\n  .ant-col-md-offset-20 {\n    margin-left: 83.33333333%;\n  }\n  .ant-col-md-order-20 {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n        -ms-flex-order: 20;\n            order: 20;\n  }\n  .ant-col-md-19 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 79.16666667%;\n  }\n  .ant-col-md-push-19 {\n    left: 79.16666667%;\n  }\n  .ant-col-md-pull-19 {\n    right: 79.16666667%;\n  }\n  .ant-col-md-offset-19 {\n    margin-left: 79.16666667%;\n  }\n  .ant-col-md-order-19 {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .ant-col-md-18 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 75%;\n  }\n  .ant-col-md-push-18 {\n    left: 75%;\n  }\n  .ant-col-md-pull-18 {\n    right: 75%;\n  }\n  .ant-col-md-offset-18 {\n    margin-left: 75%;\n  }\n  .ant-col-md-order-18 {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .ant-col-md-17 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 70.83333333%;\n  }\n  .ant-col-md-push-17 {\n    left: 70.83333333%;\n  }\n  .ant-col-md-pull-17 {\n    right: 70.83333333%;\n  }\n  .ant-col-md-offset-17 {\n    margin-left: 70.83333333%;\n  }\n  .ant-col-md-order-17 {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .ant-col-md-16 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 66.66666667%;\n  }\n  .ant-col-md-push-16 {\n    left: 66.66666667%;\n  }\n  .ant-col-md-pull-16 {\n    right: 66.66666667%;\n  }\n  .ant-col-md-offset-16 {\n    margin-left: 66.66666667%;\n  }\n  .ant-col-md-order-16 {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .ant-col-md-15 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 62.5%;\n  }\n  .ant-col-md-push-15 {\n    left: 62.5%;\n  }\n  .ant-col-md-pull-15 {\n    right: 62.5%;\n  }\n  .ant-col-md-offset-15 {\n    margin-left: 62.5%;\n  }\n  .ant-col-md-order-15 {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .ant-col-md-14 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 58.33333333%;\n  }\n  .ant-col-md-push-14 {\n    left: 58.33333333%;\n  }\n  .ant-col-md-pull-14 {\n    right: 58.33333333%;\n  }\n  .ant-col-md-offset-14 {\n    margin-left: 58.33333333%;\n  }\n  .ant-col-md-order-14 {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .ant-col-md-13 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 54.16666667%;\n  }\n  .ant-col-md-push-13 {\n    left: 54.16666667%;\n  }\n  .ant-col-md-pull-13 {\n    right: 54.16666667%;\n  }\n  .ant-col-md-offset-13 {\n    margin-left: 54.16666667%;\n  }\n  .ant-col-md-order-13 {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .ant-col-md-12 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 50%;\n  }\n  .ant-col-md-push-12 {\n    left: 50%;\n  }\n  .ant-col-md-pull-12 {\n    right: 50%;\n  }\n  .ant-col-md-offset-12 {\n    margin-left: 50%;\n  }\n  .ant-col-md-order-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .ant-col-md-11 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 45.83333333%;\n  }\n  .ant-col-md-push-11 {\n    left: 45.83333333%;\n  }\n  .ant-col-md-pull-11 {\n    right: 45.83333333%;\n  }\n  .ant-col-md-offset-11 {\n    margin-left: 45.83333333%;\n  }\n  .ant-col-md-order-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .ant-col-md-10 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 41.66666667%;\n  }\n  .ant-col-md-push-10 {\n    left: 41.66666667%;\n  }\n  .ant-col-md-pull-10 {\n    right: 41.66666667%;\n  }\n  .ant-col-md-offset-10 {\n    margin-left: 41.66666667%;\n  }\n  .ant-col-md-order-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .ant-col-md-9 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 37.5%;\n  }\n  .ant-col-md-push-9 {\n    left: 37.5%;\n  }\n  .ant-col-md-pull-9 {\n    right: 37.5%;\n  }\n  .ant-col-md-offset-9 {\n    margin-left: 37.5%;\n  }\n  .ant-col-md-order-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .ant-col-md-8 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 33.33333333%;\n  }\n  .ant-col-md-push-8 {\n    left: 33.33333333%;\n  }\n  .ant-col-md-pull-8 {\n    right: 33.33333333%;\n  }\n  .ant-col-md-offset-8 {\n    margin-left: 33.33333333%;\n  }\n  .ant-col-md-order-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .ant-col-md-7 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 29.16666667%;\n  }\n  .ant-col-md-push-7 {\n    left: 29.16666667%;\n  }\n  .ant-col-md-pull-7 {\n    right: 29.16666667%;\n  }\n  .ant-col-md-offset-7 {\n    margin-left: 29.16666667%;\n  }\n  .ant-col-md-order-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .ant-col-md-6 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 25%;\n  }\n  .ant-col-md-push-6 {\n    left: 25%;\n  }\n  .ant-col-md-pull-6 {\n    right: 25%;\n  }\n  .ant-col-md-offset-6 {\n    margin-left: 25%;\n  }\n  .ant-col-md-order-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .ant-col-md-5 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 20.83333333%;\n  }\n  .ant-col-md-push-5 {\n    left: 20.83333333%;\n  }\n  .ant-col-md-pull-5 {\n    right: 20.83333333%;\n  }\n  .ant-col-md-offset-5 {\n    margin-left: 20.83333333%;\n  }\n  .ant-col-md-order-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .ant-col-md-4 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 16.66666667%;\n  }\n  .ant-col-md-push-4 {\n    left: 16.66666667%;\n  }\n  .ant-col-md-pull-4 {\n    right: 16.66666667%;\n  }\n  .ant-col-md-offset-4 {\n    margin-left: 16.66666667%;\n  }\n  .ant-col-md-order-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .ant-col-md-3 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 12.5%;\n  }\n  .ant-col-md-push-3 {\n    left: 12.5%;\n  }\n  .ant-col-md-pull-3 {\n    right: 12.5%;\n  }\n  .ant-col-md-offset-3 {\n    margin-left: 12.5%;\n  }\n  .ant-col-md-order-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .ant-col-md-2 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 8.33333333%;\n  }\n  .ant-col-md-push-2 {\n    left: 8.33333333%;\n  }\n  .ant-col-md-pull-2 {\n    right: 8.33333333%;\n  }\n  .ant-col-md-offset-2 {\n    margin-left: 8.33333333%;\n  }\n  .ant-col-md-order-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .ant-col-md-1 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 4.16666667%;\n  }\n  .ant-col-md-push-1 {\n    left: 4.16666667%;\n  }\n  .ant-col-md-pull-1 {\n    right: 4.16666667%;\n  }\n  .ant-col-md-offset-1 {\n    margin-left: 4.16666667%;\n  }\n  .ant-col-md-order-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .ant-col-md-0 {\n    display: none;\n  }\n  .ant-col-push-0 {\n    left: auto;\n  }\n  .ant-col-pull-0 {\n    right: auto;\n  }\n  .ant-col-md-push-0 {\n    left: auto;\n  }\n  .ant-col-md-pull-0 {\n    right: auto;\n  }\n  .ant-col-md-offset-0 {\n    margin-left: 0;\n  }\n  .ant-col-md-order-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n}\n@media (min-width: 992px) {\n  .ant-col-lg-1,\n  .ant-col-lg-2,\n  .ant-col-lg-3,\n  .ant-col-lg-4,\n  .ant-col-lg-5,\n  .ant-col-lg-6,\n  .ant-col-lg-7,\n  .ant-col-lg-8,\n  .ant-col-lg-9,\n  .ant-col-lg-10,\n  .ant-col-lg-11,\n  .ant-col-lg-12,\n  .ant-col-lg-13,\n  .ant-col-lg-14,\n  .ant-col-lg-15,\n  .ant-col-lg-16,\n  .ant-col-lg-17,\n  .ant-col-lg-18,\n  .ant-col-lg-19,\n  .ant-col-lg-20,\n  .ant-col-lg-21,\n  .ant-col-lg-22,\n  .ant-col-lg-23,\n  .ant-col-lg-24 {\n    float: left;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n  }\n  .ant-col-lg-24 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n  }\n  .ant-col-lg-push-24 {\n    left: 100%;\n  }\n  .ant-col-lg-pull-24 {\n    right: 100%;\n  }\n  .ant-col-lg-offset-24 {\n    margin-left: 100%;\n  }\n  .ant-col-lg-order-24 {\n    -webkit-box-ordinal-group: 25;\n    -webkit-order: 24;\n        -ms-flex-order: 24;\n            order: 24;\n  }\n  .ant-col-lg-23 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 95.83333333%;\n  }\n  .ant-col-lg-push-23 {\n    left: 95.83333333%;\n  }\n  .ant-col-lg-pull-23 {\n    right: 95.83333333%;\n  }\n  .ant-col-lg-offset-23 {\n    margin-left: 95.83333333%;\n  }\n  .ant-col-lg-order-23 {\n    -webkit-box-ordinal-group: 24;\n    -webkit-order: 23;\n        -ms-flex-order: 23;\n            order: 23;\n  }\n  .ant-col-lg-22 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 91.66666667%;\n  }\n  .ant-col-lg-push-22 {\n    left: 91.66666667%;\n  }\n  .ant-col-lg-pull-22 {\n    right: 91.66666667%;\n  }\n  .ant-col-lg-offset-22 {\n    margin-left: 91.66666667%;\n  }\n  .ant-col-lg-order-22 {\n    -webkit-box-ordinal-group: 23;\n    -webkit-order: 22;\n        -ms-flex-order: 22;\n            order: 22;\n  }\n  .ant-col-lg-21 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 87.5%;\n  }\n  .ant-col-lg-push-21 {\n    left: 87.5%;\n  }\n  .ant-col-lg-pull-21 {\n    right: 87.5%;\n  }\n  .ant-col-lg-offset-21 {\n    margin-left: 87.5%;\n  }\n  .ant-col-lg-order-21 {\n    -webkit-box-ordinal-group: 22;\n    -webkit-order: 21;\n        -ms-flex-order: 21;\n            order: 21;\n  }\n  .ant-col-lg-20 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 83.33333333%;\n  }\n  .ant-col-lg-push-20 {\n    left: 83.33333333%;\n  }\n  .ant-col-lg-pull-20 {\n    right: 83.33333333%;\n  }\n  .ant-col-lg-offset-20 {\n    margin-left: 83.33333333%;\n  }\n  .ant-col-lg-order-20 {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n        -ms-flex-order: 20;\n            order: 20;\n  }\n  .ant-col-lg-19 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 79.16666667%;\n  }\n  .ant-col-lg-push-19 {\n    left: 79.16666667%;\n  }\n  .ant-col-lg-pull-19 {\n    right: 79.16666667%;\n  }\n  .ant-col-lg-offset-19 {\n    margin-left: 79.16666667%;\n  }\n  .ant-col-lg-order-19 {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .ant-col-lg-18 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 75%;\n  }\n  .ant-col-lg-push-18 {\n    left: 75%;\n  }\n  .ant-col-lg-pull-18 {\n    right: 75%;\n  }\n  .ant-col-lg-offset-18 {\n    margin-left: 75%;\n  }\n  .ant-col-lg-order-18 {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .ant-col-lg-17 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 70.83333333%;\n  }\n  .ant-col-lg-push-17 {\n    left: 70.83333333%;\n  }\n  .ant-col-lg-pull-17 {\n    right: 70.83333333%;\n  }\n  .ant-col-lg-offset-17 {\n    margin-left: 70.83333333%;\n  }\n  .ant-col-lg-order-17 {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .ant-col-lg-16 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 66.66666667%;\n  }\n  .ant-col-lg-push-16 {\n    left: 66.66666667%;\n  }\n  .ant-col-lg-pull-16 {\n    right: 66.66666667%;\n  }\n  .ant-col-lg-offset-16 {\n    margin-left: 66.66666667%;\n  }\n  .ant-col-lg-order-16 {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .ant-col-lg-15 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 62.5%;\n  }\n  .ant-col-lg-push-15 {\n    left: 62.5%;\n  }\n  .ant-col-lg-pull-15 {\n    right: 62.5%;\n  }\n  .ant-col-lg-offset-15 {\n    margin-left: 62.5%;\n  }\n  .ant-col-lg-order-15 {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .ant-col-lg-14 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 58.33333333%;\n  }\n  .ant-col-lg-push-14 {\n    left: 58.33333333%;\n  }\n  .ant-col-lg-pull-14 {\n    right: 58.33333333%;\n  }\n  .ant-col-lg-offset-14 {\n    margin-left: 58.33333333%;\n  }\n  .ant-col-lg-order-14 {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .ant-col-lg-13 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 54.16666667%;\n  }\n  .ant-col-lg-push-13 {\n    left: 54.16666667%;\n  }\n  .ant-col-lg-pull-13 {\n    right: 54.16666667%;\n  }\n  .ant-col-lg-offset-13 {\n    margin-left: 54.16666667%;\n  }\n  .ant-col-lg-order-13 {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .ant-col-lg-12 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 50%;\n  }\n  .ant-col-lg-push-12 {\n    left: 50%;\n  }\n  .ant-col-lg-pull-12 {\n    right: 50%;\n  }\n  .ant-col-lg-offset-12 {\n    margin-left: 50%;\n  }\n  .ant-col-lg-order-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .ant-col-lg-11 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 45.83333333%;\n  }\n  .ant-col-lg-push-11 {\n    left: 45.83333333%;\n  }\n  .ant-col-lg-pull-11 {\n    right: 45.83333333%;\n  }\n  .ant-col-lg-offset-11 {\n    margin-left: 45.83333333%;\n  }\n  .ant-col-lg-order-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .ant-col-lg-10 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 41.66666667%;\n  }\n  .ant-col-lg-push-10 {\n    left: 41.66666667%;\n  }\n  .ant-col-lg-pull-10 {\n    right: 41.66666667%;\n  }\n  .ant-col-lg-offset-10 {\n    margin-left: 41.66666667%;\n  }\n  .ant-col-lg-order-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .ant-col-lg-9 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 37.5%;\n  }\n  .ant-col-lg-push-9 {\n    left: 37.5%;\n  }\n  .ant-col-lg-pull-9 {\n    right: 37.5%;\n  }\n  .ant-col-lg-offset-9 {\n    margin-left: 37.5%;\n  }\n  .ant-col-lg-order-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .ant-col-lg-8 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 33.33333333%;\n  }\n  .ant-col-lg-push-8 {\n    left: 33.33333333%;\n  }\n  .ant-col-lg-pull-8 {\n    right: 33.33333333%;\n  }\n  .ant-col-lg-offset-8 {\n    margin-left: 33.33333333%;\n  }\n  .ant-col-lg-order-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .ant-col-lg-7 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 29.16666667%;\n  }\n  .ant-col-lg-push-7 {\n    left: 29.16666667%;\n  }\n  .ant-col-lg-pull-7 {\n    right: 29.16666667%;\n  }\n  .ant-col-lg-offset-7 {\n    margin-left: 29.16666667%;\n  }\n  .ant-col-lg-order-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .ant-col-lg-6 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 25%;\n  }\n  .ant-col-lg-push-6 {\n    left: 25%;\n  }\n  .ant-col-lg-pull-6 {\n    right: 25%;\n  }\n  .ant-col-lg-offset-6 {\n    margin-left: 25%;\n  }\n  .ant-col-lg-order-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .ant-col-lg-5 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 20.83333333%;\n  }\n  .ant-col-lg-push-5 {\n    left: 20.83333333%;\n  }\n  .ant-col-lg-pull-5 {\n    right: 20.83333333%;\n  }\n  .ant-col-lg-offset-5 {\n    margin-left: 20.83333333%;\n  }\n  .ant-col-lg-order-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .ant-col-lg-4 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 16.66666667%;\n  }\n  .ant-col-lg-push-4 {\n    left: 16.66666667%;\n  }\n  .ant-col-lg-pull-4 {\n    right: 16.66666667%;\n  }\n  .ant-col-lg-offset-4 {\n    margin-left: 16.66666667%;\n  }\n  .ant-col-lg-order-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .ant-col-lg-3 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 12.5%;\n  }\n  .ant-col-lg-push-3 {\n    left: 12.5%;\n  }\n  .ant-col-lg-pull-3 {\n    right: 12.5%;\n  }\n  .ant-col-lg-offset-3 {\n    margin-left: 12.5%;\n  }\n  .ant-col-lg-order-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .ant-col-lg-2 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 8.33333333%;\n  }\n  .ant-col-lg-push-2 {\n    left: 8.33333333%;\n  }\n  .ant-col-lg-pull-2 {\n    right: 8.33333333%;\n  }\n  .ant-col-lg-offset-2 {\n    margin-left: 8.33333333%;\n  }\n  .ant-col-lg-order-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .ant-col-lg-1 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 4.16666667%;\n  }\n  .ant-col-lg-push-1 {\n    left: 4.16666667%;\n  }\n  .ant-col-lg-pull-1 {\n    right: 4.16666667%;\n  }\n  .ant-col-lg-offset-1 {\n    margin-left: 4.16666667%;\n  }\n  .ant-col-lg-order-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .ant-col-lg-0 {\n    display: none;\n  }\n  .ant-col-push-0 {\n    left: auto;\n  }\n  .ant-col-pull-0 {\n    right: auto;\n  }\n  .ant-col-lg-push-0 {\n    left: auto;\n  }\n  .ant-col-lg-pull-0 {\n    right: auto;\n  }\n  .ant-col-lg-offset-0 {\n    margin-left: 0;\n  }\n  .ant-col-lg-order-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .ant-col-xl-1,\n  .ant-col-xl-2,\n  .ant-col-xl-3,\n  .ant-col-xl-4,\n  .ant-col-xl-5,\n  .ant-col-xl-6,\n  .ant-col-xl-7,\n  .ant-col-xl-8,\n  .ant-col-xl-9,\n  .ant-col-xl-10,\n  .ant-col-xl-11,\n  .ant-col-xl-12,\n  .ant-col-xl-13,\n  .ant-col-xl-14,\n  .ant-col-xl-15,\n  .ant-col-xl-16,\n  .ant-col-xl-17,\n  .ant-col-xl-18,\n  .ant-col-xl-19,\n  .ant-col-xl-20,\n  .ant-col-xl-21,\n  .ant-col-xl-22,\n  .ant-col-xl-23,\n  .ant-col-xl-24 {\n    float: left;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n  }\n  .ant-col-xl-24 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n  }\n  .ant-col-xl-push-24 {\n    left: 100%;\n  }\n  .ant-col-xl-pull-24 {\n    right: 100%;\n  }\n  .ant-col-xl-offset-24 {\n    margin-left: 100%;\n  }\n  .ant-col-xl-order-24 {\n    -webkit-box-ordinal-group: 25;\n    -webkit-order: 24;\n        -ms-flex-order: 24;\n            order: 24;\n  }\n  .ant-col-xl-23 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 95.83333333%;\n  }\n  .ant-col-xl-push-23 {\n    left: 95.83333333%;\n  }\n  .ant-col-xl-pull-23 {\n    right: 95.83333333%;\n  }\n  .ant-col-xl-offset-23 {\n    margin-left: 95.83333333%;\n  }\n  .ant-col-xl-order-23 {\n    -webkit-box-ordinal-group: 24;\n    -webkit-order: 23;\n        -ms-flex-order: 23;\n            order: 23;\n  }\n  .ant-col-xl-22 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 91.66666667%;\n  }\n  .ant-col-xl-push-22 {\n    left: 91.66666667%;\n  }\n  .ant-col-xl-pull-22 {\n    right: 91.66666667%;\n  }\n  .ant-col-xl-offset-22 {\n    margin-left: 91.66666667%;\n  }\n  .ant-col-xl-order-22 {\n    -webkit-box-ordinal-group: 23;\n    -webkit-order: 22;\n        -ms-flex-order: 22;\n            order: 22;\n  }\n  .ant-col-xl-21 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 87.5%;\n  }\n  .ant-col-xl-push-21 {\n    left: 87.5%;\n  }\n  .ant-col-xl-pull-21 {\n    right: 87.5%;\n  }\n  .ant-col-xl-offset-21 {\n    margin-left: 87.5%;\n  }\n  .ant-col-xl-order-21 {\n    -webkit-box-ordinal-group: 22;\n    -webkit-order: 21;\n        -ms-flex-order: 21;\n            order: 21;\n  }\n  .ant-col-xl-20 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 83.33333333%;\n  }\n  .ant-col-xl-push-20 {\n    left: 83.33333333%;\n  }\n  .ant-col-xl-pull-20 {\n    right: 83.33333333%;\n  }\n  .ant-col-xl-offset-20 {\n    margin-left: 83.33333333%;\n  }\n  .ant-col-xl-order-20 {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n        -ms-flex-order: 20;\n            order: 20;\n  }\n  .ant-col-xl-19 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 79.16666667%;\n  }\n  .ant-col-xl-push-19 {\n    left: 79.16666667%;\n  }\n  .ant-col-xl-pull-19 {\n    right: 79.16666667%;\n  }\n  .ant-col-xl-offset-19 {\n    margin-left: 79.16666667%;\n  }\n  .ant-col-xl-order-19 {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .ant-col-xl-18 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 75%;\n  }\n  .ant-col-xl-push-18 {\n    left: 75%;\n  }\n  .ant-col-xl-pull-18 {\n    right: 75%;\n  }\n  .ant-col-xl-offset-18 {\n    margin-left: 75%;\n  }\n  .ant-col-xl-order-18 {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .ant-col-xl-17 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 70.83333333%;\n  }\n  .ant-col-xl-push-17 {\n    left: 70.83333333%;\n  }\n  .ant-col-xl-pull-17 {\n    right: 70.83333333%;\n  }\n  .ant-col-xl-offset-17 {\n    margin-left: 70.83333333%;\n  }\n  .ant-col-xl-order-17 {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .ant-col-xl-16 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 66.66666667%;\n  }\n  .ant-col-xl-push-16 {\n    left: 66.66666667%;\n  }\n  .ant-col-xl-pull-16 {\n    right: 66.66666667%;\n  }\n  .ant-col-xl-offset-16 {\n    margin-left: 66.66666667%;\n  }\n  .ant-col-xl-order-16 {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .ant-col-xl-15 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 62.5%;\n  }\n  .ant-col-xl-push-15 {\n    left: 62.5%;\n  }\n  .ant-col-xl-pull-15 {\n    right: 62.5%;\n  }\n  .ant-col-xl-offset-15 {\n    margin-left: 62.5%;\n  }\n  .ant-col-xl-order-15 {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .ant-col-xl-14 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 58.33333333%;\n  }\n  .ant-col-xl-push-14 {\n    left: 58.33333333%;\n  }\n  .ant-col-xl-pull-14 {\n    right: 58.33333333%;\n  }\n  .ant-col-xl-offset-14 {\n    margin-left: 58.33333333%;\n  }\n  .ant-col-xl-order-14 {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .ant-col-xl-13 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 54.16666667%;\n  }\n  .ant-col-xl-push-13 {\n    left: 54.16666667%;\n  }\n  .ant-col-xl-pull-13 {\n    right: 54.16666667%;\n  }\n  .ant-col-xl-offset-13 {\n    margin-left: 54.16666667%;\n  }\n  .ant-col-xl-order-13 {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .ant-col-xl-12 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 50%;\n  }\n  .ant-col-xl-push-12 {\n    left: 50%;\n  }\n  .ant-col-xl-pull-12 {\n    right: 50%;\n  }\n  .ant-col-xl-offset-12 {\n    margin-left: 50%;\n  }\n  .ant-col-xl-order-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .ant-col-xl-11 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 45.83333333%;\n  }\n  .ant-col-xl-push-11 {\n    left: 45.83333333%;\n  }\n  .ant-col-xl-pull-11 {\n    right: 45.83333333%;\n  }\n  .ant-col-xl-offset-11 {\n    margin-left: 45.83333333%;\n  }\n  .ant-col-xl-order-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .ant-col-xl-10 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 41.66666667%;\n  }\n  .ant-col-xl-push-10 {\n    left: 41.66666667%;\n  }\n  .ant-col-xl-pull-10 {\n    right: 41.66666667%;\n  }\n  .ant-col-xl-offset-10 {\n    margin-left: 41.66666667%;\n  }\n  .ant-col-xl-order-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .ant-col-xl-9 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 37.5%;\n  }\n  .ant-col-xl-push-9 {\n    left: 37.5%;\n  }\n  .ant-col-xl-pull-9 {\n    right: 37.5%;\n  }\n  .ant-col-xl-offset-9 {\n    margin-left: 37.5%;\n  }\n  .ant-col-xl-order-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .ant-col-xl-8 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 33.33333333%;\n  }\n  .ant-col-xl-push-8 {\n    left: 33.33333333%;\n  }\n  .ant-col-xl-pull-8 {\n    right: 33.33333333%;\n  }\n  .ant-col-xl-offset-8 {\n    margin-left: 33.33333333%;\n  }\n  .ant-col-xl-order-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .ant-col-xl-7 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 29.16666667%;\n  }\n  .ant-col-xl-push-7 {\n    left: 29.16666667%;\n  }\n  .ant-col-xl-pull-7 {\n    right: 29.16666667%;\n  }\n  .ant-col-xl-offset-7 {\n    margin-left: 29.16666667%;\n  }\n  .ant-col-xl-order-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .ant-col-xl-6 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 25%;\n  }\n  .ant-col-xl-push-6 {\n    left: 25%;\n  }\n  .ant-col-xl-pull-6 {\n    right: 25%;\n  }\n  .ant-col-xl-offset-6 {\n    margin-left: 25%;\n  }\n  .ant-col-xl-order-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .ant-col-xl-5 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 20.83333333%;\n  }\n  .ant-col-xl-push-5 {\n    left: 20.83333333%;\n  }\n  .ant-col-xl-pull-5 {\n    right: 20.83333333%;\n  }\n  .ant-col-xl-offset-5 {\n    margin-left: 20.83333333%;\n  }\n  .ant-col-xl-order-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .ant-col-xl-4 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 16.66666667%;\n  }\n  .ant-col-xl-push-4 {\n    left: 16.66666667%;\n  }\n  .ant-col-xl-pull-4 {\n    right: 16.66666667%;\n  }\n  .ant-col-xl-offset-4 {\n    margin-left: 16.66666667%;\n  }\n  .ant-col-xl-order-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .ant-col-xl-3 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 12.5%;\n  }\n  .ant-col-xl-push-3 {\n    left: 12.5%;\n  }\n  .ant-col-xl-pull-3 {\n    right: 12.5%;\n  }\n  .ant-col-xl-offset-3 {\n    margin-left: 12.5%;\n  }\n  .ant-col-xl-order-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .ant-col-xl-2 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 8.33333333%;\n  }\n  .ant-col-xl-push-2 {\n    left: 8.33333333%;\n  }\n  .ant-col-xl-pull-2 {\n    right: 8.33333333%;\n  }\n  .ant-col-xl-offset-2 {\n    margin-left: 8.33333333%;\n  }\n  .ant-col-xl-order-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .ant-col-xl-1 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 4.16666667%;\n  }\n  .ant-col-xl-push-1 {\n    left: 4.16666667%;\n  }\n  .ant-col-xl-pull-1 {\n    right: 4.16666667%;\n  }\n  .ant-col-xl-offset-1 {\n    margin-left: 4.16666667%;\n  }\n  .ant-col-xl-order-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .ant-col-xl-0 {\n    display: none;\n  }\n  .ant-col-push-0 {\n    left: auto;\n  }\n  .ant-col-pull-0 {\n    right: auto;\n  }\n  .ant-col-xl-push-0 {\n    left: auto;\n  }\n  .ant-col-xl-pull-0 {\n    right: auto;\n  }\n  .ant-col-xl-offset-0 {\n    margin-left: 0;\n  }\n  .ant-col-xl-order-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n}\n@media (min-width: 1600px) {\n  .ant-col-xxl-1,\n  .ant-col-xxl-2,\n  .ant-col-xxl-3,\n  .ant-col-xxl-4,\n  .ant-col-xxl-5,\n  .ant-col-xxl-6,\n  .ant-col-xxl-7,\n  .ant-col-xxl-8,\n  .ant-col-xxl-9,\n  .ant-col-xxl-10,\n  .ant-col-xxl-11,\n  .ant-col-xxl-12,\n  .ant-col-xxl-13,\n  .ant-col-xxl-14,\n  .ant-col-xxl-15,\n  .ant-col-xxl-16,\n  .ant-col-xxl-17,\n  .ant-col-xxl-18,\n  .ant-col-xxl-19,\n  .ant-col-xxl-20,\n  .ant-col-xxl-21,\n  .ant-col-xxl-22,\n  .ant-col-xxl-23,\n  .ant-col-xxl-24 {\n    float: left;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 0 auto;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n  }\n  .ant-col-xxl-24 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 100%;\n  }\n  .ant-col-xxl-push-24 {\n    left: 100%;\n  }\n  .ant-col-xxl-pull-24 {\n    right: 100%;\n  }\n  .ant-col-xxl-offset-24 {\n    margin-left: 100%;\n  }\n  .ant-col-xxl-order-24 {\n    -webkit-box-ordinal-group: 25;\n    -webkit-order: 24;\n        -ms-flex-order: 24;\n            order: 24;\n  }\n  .ant-col-xxl-23 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 95.83333333%;\n  }\n  .ant-col-xxl-push-23 {\n    left: 95.83333333%;\n  }\n  .ant-col-xxl-pull-23 {\n    right: 95.83333333%;\n  }\n  .ant-col-xxl-offset-23 {\n    margin-left: 95.83333333%;\n  }\n  .ant-col-xxl-order-23 {\n    -webkit-box-ordinal-group: 24;\n    -webkit-order: 23;\n        -ms-flex-order: 23;\n            order: 23;\n  }\n  .ant-col-xxl-22 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 91.66666667%;\n  }\n  .ant-col-xxl-push-22 {\n    left: 91.66666667%;\n  }\n  .ant-col-xxl-pull-22 {\n    right: 91.66666667%;\n  }\n  .ant-col-xxl-offset-22 {\n    margin-left: 91.66666667%;\n  }\n  .ant-col-xxl-order-22 {\n    -webkit-box-ordinal-group: 23;\n    -webkit-order: 22;\n        -ms-flex-order: 22;\n            order: 22;\n  }\n  .ant-col-xxl-21 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 87.5%;\n  }\n  .ant-col-xxl-push-21 {\n    left: 87.5%;\n  }\n  .ant-col-xxl-pull-21 {\n    right: 87.5%;\n  }\n  .ant-col-xxl-offset-21 {\n    margin-left: 87.5%;\n  }\n  .ant-col-xxl-order-21 {\n    -webkit-box-ordinal-group: 22;\n    -webkit-order: 21;\n        -ms-flex-order: 21;\n            order: 21;\n  }\n  .ant-col-xxl-20 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 83.33333333%;\n  }\n  .ant-col-xxl-push-20 {\n    left: 83.33333333%;\n  }\n  .ant-col-xxl-pull-20 {\n    right: 83.33333333%;\n  }\n  .ant-col-xxl-offset-20 {\n    margin-left: 83.33333333%;\n  }\n  .ant-col-xxl-order-20 {\n    -webkit-box-ordinal-group: 21;\n    -webkit-order: 20;\n        -ms-flex-order: 20;\n            order: 20;\n  }\n  .ant-col-xxl-19 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 79.16666667%;\n  }\n  .ant-col-xxl-push-19 {\n    left: 79.16666667%;\n  }\n  .ant-col-xxl-pull-19 {\n    right: 79.16666667%;\n  }\n  .ant-col-xxl-offset-19 {\n    margin-left: 79.16666667%;\n  }\n  .ant-col-xxl-order-19 {\n    -webkit-box-ordinal-group: 20;\n    -webkit-order: 19;\n        -ms-flex-order: 19;\n            order: 19;\n  }\n  .ant-col-xxl-18 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 75%;\n  }\n  .ant-col-xxl-push-18 {\n    left: 75%;\n  }\n  .ant-col-xxl-pull-18 {\n    right: 75%;\n  }\n  .ant-col-xxl-offset-18 {\n    margin-left: 75%;\n  }\n  .ant-col-xxl-order-18 {\n    -webkit-box-ordinal-group: 19;\n    -webkit-order: 18;\n        -ms-flex-order: 18;\n            order: 18;\n  }\n  .ant-col-xxl-17 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 70.83333333%;\n  }\n  .ant-col-xxl-push-17 {\n    left: 70.83333333%;\n  }\n  .ant-col-xxl-pull-17 {\n    right: 70.83333333%;\n  }\n  .ant-col-xxl-offset-17 {\n    margin-left: 70.83333333%;\n  }\n  .ant-col-xxl-order-17 {\n    -webkit-box-ordinal-group: 18;\n    -webkit-order: 17;\n        -ms-flex-order: 17;\n            order: 17;\n  }\n  .ant-col-xxl-16 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 66.66666667%;\n  }\n  .ant-col-xxl-push-16 {\n    left: 66.66666667%;\n  }\n  .ant-col-xxl-pull-16 {\n    right: 66.66666667%;\n  }\n  .ant-col-xxl-offset-16 {\n    margin-left: 66.66666667%;\n  }\n  .ant-col-xxl-order-16 {\n    -webkit-box-ordinal-group: 17;\n    -webkit-order: 16;\n        -ms-flex-order: 16;\n            order: 16;\n  }\n  .ant-col-xxl-15 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 62.5%;\n  }\n  .ant-col-xxl-push-15 {\n    left: 62.5%;\n  }\n  .ant-col-xxl-pull-15 {\n    right: 62.5%;\n  }\n  .ant-col-xxl-offset-15 {\n    margin-left: 62.5%;\n  }\n  .ant-col-xxl-order-15 {\n    -webkit-box-ordinal-group: 16;\n    -webkit-order: 15;\n        -ms-flex-order: 15;\n            order: 15;\n  }\n  .ant-col-xxl-14 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 58.33333333%;\n  }\n  .ant-col-xxl-push-14 {\n    left: 58.33333333%;\n  }\n  .ant-col-xxl-pull-14 {\n    right: 58.33333333%;\n  }\n  .ant-col-xxl-offset-14 {\n    margin-left: 58.33333333%;\n  }\n  .ant-col-xxl-order-14 {\n    -webkit-box-ordinal-group: 15;\n    -webkit-order: 14;\n        -ms-flex-order: 14;\n            order: 14;\n  }\n  .ant-col-xxl-13 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 54.16666667%;\n  }\n  .ant-col-xxl-push-13 {\n    left: 54.16666667%;\n  }\n  .ant-col-xxl-pull-13 {\n    right: 54.16666667%;\n  }\n  .ant-col-xxl-offset-13 {\n    margin-left: 54.16666667%;\n  }\n  .ant-col-xxl-order-13 {\n    -webkit-box-ordinal-group: 14;\n    -webkit-order: 13;\n        -ms-flex-order: 13;\n            order: 13;\n  }\n  .ant-col-xxl-12 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 50%;\n  }\n  .ant-col-xxl-push-12 {\n    left: 50%;\n  }\n  .ant-col-xxl-pull-12 {\n    right: 50%;\n  }\n  .ant-col-xxl-offset-12 {\n    margin-left: 50%;\n  }\n  .ant-col-xxl-order-12 {\n    -webkit-box-ordinal-group: 13;\n    -webkit-order: 12;\n        -ms-flex-order: 12;\n            order: 12;\n  }\n  .ant-col-xxl-11 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 45.83333333%;\n  }\n  .ant-col-xxl-push-11 {\n    left: 45.83333333%;\n  }\n  .ant-col-xxl-pull-11 {\n    right: 45.83333333%;\n  }\n  .ant-col-xxl-offset-11 {\n    margin-left: 45.83333333%;\n  }\n  .ant-col-xxl-order-11 {\n    -webkit-box-ordinal-group: 12;\n    -webkit-order: 11;\n        -ms-flex-order: 11;\n            order: 11;\n  }\n  .ant-col-xxl-10 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 41.66666667%;\n  }\n  .ant-col-xxl-push-10 {\n    left: 41.66666667%;\n  }\n  .ant-col-xxl-pull-10 {\n    right: 41.66666667%;\n  }\n  .ant-col-xxl-offset-10 {\n    margin-left: 41.66666667%;\n  }\n  .ant-col-xxl-order-10 {\n    -webkit-box-ordinal-group: 11;\n    -webkit-order: 10;\n        -ms-flex-order: 10;\n            order: 10;\n  }\n  .ant-col-xxl-9 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 37.5%;\n  }\n  .ant-col-xxl-push-9 {\n    left: 37.5%;\n  }\n  .ant-col-xxl-pull-9 {\n    right: 37.5%;\n  }\n  .ant-col-xxl-offset-9 {\n    margin-left: 37.5%;\n  }\n  .ant-col-xxl-order-9 {\n    -webkit-box-ordinal-group: 10;\n    -webkit-order: 9;\n        -ms-flex-order: 9;\n            order: 9;\n  }\n  .ant-col-xxl-8 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 33.33333333%;\n  }\n  .ant-col-xxl-push-8 {\n    left: 33.33333333%;\n  }\n  .ant-col-xxl-pull-8 {\n    right: 33.33333333%;\n  }\n  .ant-col-xxl-offset-8 {\n    margin-left: 33.33333333%;\n  }\n  .ant-col-xxl-order-8 {\n    -webkit-box-ordinal-group: 9;\n    -webkit-order: 8;\n        -ms-flex-order: 8;\n            order: 8;\n  }\n  .ant-col-xxl-7 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 29.16666667%;\n  }\n  .ant-col-xxl-push-7 {\n    left: 29.16666667%;\n  }\n  .ant-col-xxl-pull-7 {\n    right: 29.16666667%;\n  }\n  .ant-col-xxl-offset-7 {\n    margin-left: 29.16666667%;\n  }\n  .ant-col-xxl-order-7 {\n    -webkit-box-ordinal-group: 8;\n    -webkit-order: 7;\n        -ms-flex-order: 7;\n            order: 7;\n  }\n  .ant-col-xxl-6 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 25%;\n  }\n  .ant-col-xxl-push-6 {\n    left: 25%;\n  }\n  .ant-col-xxl-pull-6 {\n    right: 25%;\n  }\n  .ant-col-xxl-offset-6 {\n    margin-left: 25%;\n  }\n  .ant-col-xxl-order-6 {\n    -webkit-box-ordinal-group: 7;\n    -webkit-order: 6;\n        -ms-flex-order: 6;\n            order: 6;\n  }\n  .ant-col-xxl-5 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 20.83333333%;\n  }\n  .ant-col-xxl-push-5 {\n    left: 20.83333333%;\n  }\n  .ant-col-xxl-pull-5 {\n    right: 20.83333333%;\n  }\n  .ant-col-xxl-offset-5 {\n    margin-left: 20.83333333%;\n  }\n  .ant-col-xxl-order-5 {\n    -webkit-box-ordinal-group: 6;\n    -webkit-order: 5;\n        -ms-flex-order: 5;\n            order: 5;\n  }\n  .ant-col-xxl-4 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 16.66666667%;\n  }\n  .ant-col-xxl-push-4 {\n    left: 16.66666667%;\n  }\n  .ant-col-xxl-pull-4 {\n    right: 16.66666667%;\n  }\n  .ant-col-xxl-offset-4 {\n    margin-left: 16.66666667%;\n  }\n  .ant-col-xxl-order-4 {\n    -webkit-box-ordinal-group: 5;\n    -webkit-order: 4;\n        -ms-flex-order: 4;\n            order: 4;\n  }\n  .ant-col-xxl-3 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 12.5%;\n  }\n  .ant-col-xxl-push-3 {\n    left: 12.5%;\n  }\n  .ant-col-xxl-pull-3 {\n    right: 12.5%;\n  }\n  .ant-col-xxl-offset-3 {\n    margin-left: 12.5%;\n  }\n  .ant-col-xxl-order-3 {\n    -webkit-box-ordinal-group: 4;\n    -webkit-order: 3;\n        -ms-flex-order: 3;\n            order: 3;\n  }\n  .ant-col-xxl-2 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 8.33333333%;\n  }\n  .ant-col-xxl-push-2 {\n    left: 8.33333333%;\n  }\n  .ant-col-xxl-pull-2 {\n    right: 8.33333333%;\n  }\n  .ant-col-xxl-offset-2 {\n    margin-left: 8.33333333%;\n  }\n  .ant-col-xxl-order-2 {\n    -webkit-box-ordinal-group: 3;\n    -webkit-order: 2;\n        -ms-flex-order: 2;\n            order: 2;\n  }\n  .ant-col-xxl-1 {\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 4.16666667%;\n  }\n  .ant-col-xxl-push-1 {\n    left: 4.16666667%;\n  }\n  .ant-col-xxl-pull-1 {\n    right: 4.16666667%;\n  }\n  .ant-col-xxl-offset-1 {\n    margin-left: 4.16666667%;\n  }\n  .ant-col-xxl-order-1 {\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n        -ms-flex-order: 1;\n            order: 1;\n  }\n  .ant-col-xxl-0 {\n    display: none;\n  }\n  .ant-col-push-0 {\n    left: auto;\n  }\n  .ant-col-pull-0 {\n    right: auto;\n  }\n  .ant-col-xxl-push-0 {\n    left: auto;\n  }\n  .ant-col-xxl-pull-0 {\n    right: auto;\n  }\n  .ant-col-xxl-offset-0 {\n    margin-left: 0;\n  }\n  .ant-col-xxl-order-0 {\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n        -ms-flex-order: 0;\n            order: 0;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/antd/lib/rate/style/index.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/antd/lib/rate/style/index.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-rate {\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  line-height: unset;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 20px;\n  display: inline-block;\n  color: #fadb14;\n  outline: none;\n}\n.ant-rate-disabled .ant-rate-star {\n  cursor: default;\n}\n.ant-rate-disabled .ant-rate-star:hover {\n  -webkit-transform: scale(1);\n      -ms-transform: scale(1);\n          transform: scale(1);\n}\n.ant-rate-star {\n  margin: 0;\n  padding: 0;\n  display: inline-block;\n  margin-right: 8px;\n  position: relative;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  color: inherit;\n  cursor: pointer;\n}\n.ant-rate-star > div:focus {\n  outline: 0;\n}\n.ant-rate-star > div:hover,\n.ant-rate-star > div:focus {\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.ant-rate-star-first,\n.ant-rate-star-second {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  color: #e8e8e8;\n}\n.ant-rate-star-first .anticon,\n.ant-rate-star-second .anticon {\n  vertical-align: middle;\n}\n.ant-rate-star-first {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  opacity: 0;\n}\n.ant-rate-star-half .ant-rate-star-first,\n.ant-rate-star-half .ant-rate-star-second {\n  opacity: 1;\n}\n.ant-rate-star-half .ant-rate-star-first,\n.ant-rate-star-full .ant-rate-star-second {\n  color: inherit;\n}\n.ant-rate-text {\n  margin-left: 8px;\n  display: inline-block;\n  font-size: 14px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/dom-align/es/adjustForViewport.js":
/*!********************************************************!*\
  !*** ./node_modules/dom-align/es/adjustForViewport.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");


function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }

  // Left edge inside and right edge outside viewport, try to resize it.
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }

  // Right edge outside viewport, try to move it.
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }

  // Top edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }

  // Top edge inside and bottom edge outside viewport, try to resize it.
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }

  // Bottom edge outside viewport, try to move it.
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return _utils__WEBPACK_IMPORTED_MODULE_0__["default"].mix(pos, size);
}

/* harmony default export */ __webpack_exports__["default"] = (adjustForViewport);

/***/ }),

/***/ "./node_modules/dom-align/es/align/align.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-align/es/align/align.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/dom-align/es/utils.js");
/* harmony import */ var _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getVisibleRectForElement */ "./node_modules/dom-align/es/getVisibleRectForElement.js");
/* harmony import */ var _adjustForViewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../adjustForViewport */ "./node_modules/dom-align/es/adjustForViewport.js");
/* harmony import */ var _getRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getRegion */ "./node_modules/dom-align/es/getRegion.js");
/* harmony import */ var _getElFuturePos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../getElFuturePos */ "./node_modules/dom-align/es/getElFuturePos.js");
/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */







// http://yiminghe.iteye.com/blog/1124720

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n = void 0;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}

/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  // 当前节点可以被放置的显示区域
  var visibleRect = Object(_getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_1__["default"])(source);
  // 当前节点所占的区域, left/top/width/height
  var elRegion = Object(_getRegion__WEBPACK_IMPORTED_MODULE_3__["default"])(source);
  // 将 offset 转换成数值，支持百分比
  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  // 当前节点将要被放置的位置
  var elFuturePos = Object(_getElFuturePos__WEBPACK_IMPORTED_MODULE_4__["default"])(elRegion, tgtRegion, points, offset, targetOffset);
  // 当前节点将要所处的区域
  var newElRegion = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].merge(elRegion, elFuturePos);

  // 如果可视区域不能完全放置当前节点时允许调整
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/ig, {
          l: 'r',
          r: 'l'
        });
        // 偏移量也反下
        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = Object(_getElFuturePos__WEBPACK_IMPORTED_MODULE_4__["default"])(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/ig, {
          t: 'b',
          b: 't'
        });
        // 偏移量也反下
        var _newOffset = flipOffset(offset, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = Object(_getElFuturePos__WEBPACK_IMPORTED_MODULE_4__["default"])(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }

    // 如果失败，重新计算当前节点将要被放置的位置
    if (fail) {
      elFuturePos = Object(_getElFuturePos__WEBPACK_IMPORTED_MODULE_4__["default"])(elRegion, tgtRegion, points, offset, targetOffset);
      _utils__WEBPACK_IMPORTED_MODULE_0__["default"].mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数
    if (isStillFailX || isStillFailY) {
      points = align.points;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    // 2. 只有指定了可以调整当前方向才调整
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;

    // 确实要调整，甚至可能会调整高度宽度
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = Object(_adjustForViewport__WEBPACK_IMPORTED_MODULE_2__["default"])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }

  // need judge to in case set fixed with in css on height auto element
  if (newElRegion.width !== elRegion.width) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(source, 'width', _utils__WEBPACK_IMPORTED_MODULE_0__["default"].width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(source, 'height', _utils__WEBPACK_IMPORTED_MODULE_0__["default"].height(source) + newElRegion.height - elRegion.height);
  }

  // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>
  _utils__WEBPACK_IMPORTED_MODULE_0__["default"].offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });

  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}

/* harmony default export */ __webpack_exports__["default"] = (doAlign);
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

/***/ }),

/***/ "./node_modules/dom-align/es/align/alignElement.js":
/*!*********************************************************!*\
  !*** ./node_modules/dom-align/es/align/alignElement.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align */ "./node_modules/dom-align/es/align/align.js");
/* harmony import */ var _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getOffsetParent */ "./node_modules/dom-align/es/getOffsetParent.js");
/* harmony import */ var _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getVisibleRectForElement */ "./node_modules/dom-align/es/getVisibleRectForElement.js");
/* harmony import */ var _getRegion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getRegion */ "./node_modules/dom-align/es/getRegion.js");





function isOutOfVisibleRect(target) {
  var visibleRect = Object(_getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__["default"])(target);
  var targetRegion = Object(_getRegion__WEBPACK_IMPORTED_MODULE_3__["default"])(target);

  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = Object(_getRegion__WEBPACK_IMPORTED_MODULE_3__["default"])(target);

  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target);

  return Object(_align__WEBPACK_IMPORTED_MODULE_0__["default"])(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__["default"];

alignElement.__getVisibleRectForElement = _getVisibleRectForElement__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ __webpack_exports__["default"] = (alignElement);

/***/ }),

/***/ "./node_modules/dom-align/es/align/alignPoint.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-align/es/align/alignPoint.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/dom-align/es/utils.js");
/* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./align */ "./node_modules/dom-align/es/align/align.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX = void 0;
  var pageY = void 0;

  var doc = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDocument(el);
  var win = doc.defaultView || doc.parentWindow;

  var scrollX = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollLeft(win);
  var scrollY = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollTop(win);
  var viewportWidth = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportWidth(win);
  var viewportHeight = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };

  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;

  // Provide default target point
  var points = [align.points[0], 'cc'];

  return Object(_align__WEBPACK_IMPORTED_MODULE_1__["default"])(el, tgtRegion, _extends({}, align, { points: points }), pointInView);
}

/* harmony default export */ __webpack_exports__["default"] = (alignPoint);

/***/ }),

/***/ "./node_modules/dom-align/es/getAlignOffset.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-align/es/getAlignOffset.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */

function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;

  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getAlignOffset);

/***/ }),

/***/ "./node_modules/dom-align/es/getElFuturePos.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-align/es/getElFuturePos.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getAlignOffset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAlignOffset */ "./node_modules/dom-align/es/getAlignOffset.js");


function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = Object(_getAlignOffset__WEBPACK_IMPORTED_MODULE_0__["default"])(refNodeRegion, points[1]);
  var p2 = Object(_getAlignOffset__WEBPACK_IMPORTED_MODULE_0__["default"])(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];

  return {
    left: elRegion.left - diff[0] + offset[0] - targetOffset[0],
    top: elRegion.top - diff[1] + offset[1] - targetOffset[1]
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getElFuturePos);

/***/ }),

/***/ "./node_modules/dom-align/es/getOffsetParent.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-align/es/getOffsetParent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");


/**
 * 得到会导致元素显示不全的祖先元素
 */

function getOffsetParent(element) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isWindow(element) || element.nodeType === 9) {
    return null;
  }
  // ie 这个也不是完全可行
  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法
  var doc = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDocument(element);
  var body = doc.body;
  var parent = void 0;
  var positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
  }

  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(parent, 'position');
    if (positionStyle !== 'static') {
      return parent;
    }
  }
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (getOffsetParent);

/***/ }),

/***/ "./node_modules/dom-align/es/getRegion.js":
/*!************************************************!*\
  !*** ./node_modules/dom-align/es/getRegion.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");


function getRegion(node) {
  var offset = void 0;
  var w = void 0;
  var h = void 0;
  if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isWindow(node) && node.nodeType !== 9) {
    offset = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].offset(node);
    w = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].outerWidth(node);
    h = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].outerHeight(node);
  } else {
    var win = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindow(node);
    offset = {
      left: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollLeft(win),
      top: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollTop(win)
    };
    w = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportWidth(win);
    h = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportHeight(win);
  }
  offset.width = w;
  offset.height = h;
  return offset;
}

/* harmony default export */ __webpack_exports__["default"] = (getRegion);

/***/ }),

/***/ "./node_modules/dom-align/es/getVisibleRectForElement.js":
/*!***************************************************************!*\
  !*** ./node_modules/dom-align/es/getVisibleRectForElement.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");
/* harmony import */ var _getOffsetParent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOffsetParent */ "./node_modules/dom-align/es/getOffsetParent.js");
/* harmony import */ var _isAncestorFixed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isAncestorFixed */ "./node_modules/dom-align/es/isAncestorFixed.js");




/**
 * 获得元素的显示部分的区域
 */
function getVisibleRectForElement(element) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = Object(_getOffsetParent__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  var doc = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;

  // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.
  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
    // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(el, 'overflow') !== 'visible') {
      var pos = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].offset(el);
      // add border
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right,
      // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = Object(_getOffsetParent__WEBPACK_IMPORTED_MODULE_1__["default"])(el);
  }

  // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601
  var originalPosition = null;
  if (!_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(element, 'position');
    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollLeft(win);
  var scrollY = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getWindowScrollTop(win);
  var viewportWidth = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportWidth(win);
  var viewportHeight = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;

  // Reset element position after calculate the visible area
  if (element.style) {
    element.style.position = originalPosition;
  }

  if (Object(_isAncestorFixed__WEBPACK_IMPORTED_MODULE_2__["default"])(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);

    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

/* harmony default export */ __webpack_exports__["default"] = (getVisibleRectForElement);

/***/ }),

/***/ "./node_modules/dom-align/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/dom-align/es/index.js ***!
  \********************************************/
/*! exports provided: alignElement, alignPoint, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _align_alignElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align/alignElement */ "./node_modules/dom-align/es/align/alignElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignElement", function() { return _align_alignElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _align_alignPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./align/alignPoint */ "./node_modules/dom-align/es/align/alignPoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alignPoint", function() { return _align_alignPoint__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/* harmony default export */ __webpack_exports__["default"] = (_align_alignElement__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/dom-align/es/isAncestorFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/dom-align/es/isAncestorFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isAncestorFixed; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/dom-align/es/utils.js");


function isAncestorFixed(element) {
  if (_utils__WEBPACK_IMPORTED_MODULE_0__["default"].isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
    var positionStyle = _utils__WEBPACK_IMPORTED_MODULE_0__["default"].css(parent, 'position');
    if (positionStyle === 'fixed') {
      return true;
    }
  }
  return false;
}

/***/ }),

/***/ "./node_modules/dom-align/es/propertyUtils.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-align/es/propertyUtils.js ***!
  \****************************************************/
/*! exports provided: getTransformName, setTransitionProperty, getTransitionProperty, getTransformXY, setTransformXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformName", function() { return getTransformName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransitionProperty", function() { return setTransitionProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionProperty", function() { return getTransitionProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformXY", function() { return getTransformXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransformXY", function() { return setTransformXY; });
var vendorPrefix = void 0;

var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }
  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? getVendorPrefix() + 'TransitionProperty' : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? getVendorPrefix() + 'Transform' : 'transform';
}

function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}

function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return { x: parseFloat(matrix[12] || matrix[4], 0), y: parseFloat(matrix[13] || matrix[5], 0) };
  }
  return {
    x: 0,
    y: 0
  };
}

var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;

function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
  if (transform && transform !== 'none') {
    var arr = void 0;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, 'matrix(' + arr.join(',') + ')');
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, 'matrix3d(' + arr.join(',') + ')');
    }
  } else {
    setTransform(node, 'translateX(' + xy.x + 'px) translateY(' + xy.y + 'px) translateZ(0)');
  }
}

/***/ }),

/***/ "./node_modules/dom-align/es/utils.js":
/*!********************************************!*\
  !*** ./node_modules/dom-align/es/utils.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propertyUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propertyUtils */ "./node_modules/dom-align/es/propertyUtils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;

var getComputedStyleX = void 0;

// https://stackoverflow.com/a/3485654/3040605
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line
  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;
  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return undefined;
  }
  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = value + 'px';
    }
    el.style[name] = value;
    return undefined;
  }
  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
  box = elem.getBoundingClientRect();

  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top;

  // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.

  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.

  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;

  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}

/**
 * A crude way of determining if an object is a window
 * @member util
 */
function isWindow(obj) {
  // must use == for ie8
  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);

  // https://github.com/kissyteam/kissy/issues/61
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];

  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了

  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];

    // prevent flashing of content
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];

    // Put in the new values to get a computed value out
    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX;

    // Revert the changed values
    style[LEFT] = left;

    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }
  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
}

// 设置 elem 相对 elem.ownerDocument 的坐标
function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }
  var originalTransition = '';
  var originalOffset = getOffset(elem);
  if ('left' in offset || 'top' in offset) {
    originalTransition = Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["getTransitionProperty"])(elem) || '';
    Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["setTransitionProperty"])(elem, 'none');
  }
  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = presetH + 'px';
  }
  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = presetV + 'px';
  }
  // force relayout
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  // force relayout
  forceRelayout(elem);
  if ('left' in offset || 'top' in offset) {
    Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["setTransitionProperty"])(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}

function setTransform(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["getTransformXY"])(elem);
  var resultXY = { x: originalXY.x, y: originalXY.y };
  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }
  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }
  Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["setTransformXY"])(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);

    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && Object(_propertyUtils__WEBPACK_IMPORTED_MODULE_0__["getTransformName"])() in document.body.style) {
    setTransform(elem, offset, option);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name = void 0;

  // Remember the old values, and insert the new ones
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem);

  // Revert the old values
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop = void 0;
  var j = void 0;
  var i = void 0;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === 'border') {
          cssProp = '' + prop + which[i] + 'Width';
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}

var domUtils = {};

each(['Width', 'Height'], function (name) {
  domUtils['doc' + name] = function (refWin) {
    var d = refWin.document;
    return Math.max(
    // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement['scroll' + name],
    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body['scroll' + name], domUtils['viewport' + name](d));
  };

  domUtils['viewport' + name] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = 'client' + name;
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    // 标准模式取 documentElement
    // backcompat 取 body
    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});

/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var computedStyle = getComputedStyleX(elem);
  var isBorderBox = isBorderBoxFn(elem, computedStyle);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined;
    // Fall back to computed then un computed css if necessary
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    // Normalize '', auto, and prepare for extra
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
};

// fix #119 : https://github.com/kissyteam/kissy/issues/119
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val = void 0;
  var elem = args[0];
  // in case elem is window
  // elem.offsetWidth === undefined
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }
  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils['outer' + first] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;
    if (val !== undefined) {
      if (elem) {
        var computedStyle = getComputedStyleX(elem);
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
        }
        return css(elem, name, val);
      }
      return undefined;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },

  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },

  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i = void 0;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },

  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    for (var i = 0; i < args.length; i++) {
      utils.mix(ret, args[i]);
    }
    return ret;
  },

  viewportWidth: 0,
  viewportHeight: 0
};

mix(utils, domUtils);

/* harmony default export */ __webpack_exports__["default"] = (utils);

/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(/*! ./QueryHandler */ "./node_modules/enquire.js/src/QueryHandler.js");
var each = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js").each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(/*! ./MediaQuery */ "./node_modules/enquire.js/src/MediaQuery.js");
var Util = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ "./node_modules/enquire.js/src/MediaQueryDispatch.js");
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ "./node_modules/omit.js/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/omit.js/es/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function omit(obj, fields) {
  var shallowCopy = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, obj);
  for (var i = 0; i < fields.length; i++) {
    var key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/* harmony default export */ __webpack_exports__["default"] = (omit);

/***/ }),

/***/ "./node_modules/rc-align/es/Align.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/Align.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dom_align__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dom-align */ "./node_modules/dom-align/es/index.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util */ "./node_modules/rc-align/es/util.js");











function getElement(func) {
  if (typeof func !== 'function' || !func) return null;
  return func();
}

function getPoint(point) {
  if (typeof point !== 'object' || !point) return null;
  return point;
}

var Align = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Align, _Component);

  function Align() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Align);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.forceAlign = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          target = _this$props.target,
          align = _this$props.align,
          onAlign = _this$props.onAlign;

      if (!disabled && target) {
        var source = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(_this);

        var result = void 0;
        var element = getElement(target);
        var point = getPoint(target);

        if (element) {
          result = Object(dom_align__WEBPACK_IMPORTED_MODULE_6__["alignElement"])(source, element, align);
        } else if (point) {
          result = Object(dom_align__WEBPACK_IMPORTED_MODULE_6__["alignPoint"])(source, point, align);
        }

        if (onAlign) {
          onAlign(source, result);
        }
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(_this, _ret);
  }

  Align.prototype.componentDidMount = function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    this.forceAlign();
    if (!props.disabled && props.monitorWindowResize) {
      this.startMonitorWindowResize();
    }
  };

  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;

    if (!props.disabled) {
      var source = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);
      var sourceRect = source ? source.getBoundingClientRect() : null;

      if (prevProps.disabled) {
        reAlign = true;
      } else {
        var lastElement = getElement(prevProps.target);
        var currentElement = getElement(props.target);
        var lastPoint = getPoint(prevProps.target);
        var currentPoint = getPoint(props.target);

        if (Object(_util__WEBPACK_IMPORTED_MODULE_8__["isWindow"])(lastElement) && Object(_util__WEBPACK_IMPORTED_MODULE_8__["isWindow"])(currentElement)) {
          // Skip if is window
          reAlign = false;
        } else if (lastElement !== currentElement || // Element change
        lastElement && !currentElement && currentPoint || // Change from element to point
        lastPoint && currentPoint && currentElement || // Change from point to element
        currentPoint && !Object(_util__WEBPACK_IMPORTED_MODULE_8__["isSamePoint"])(lastPoint, currentPoint)) {
          reAlign = true;
        }

        // If source element size changed
        var preRect = this.sourceRect || {};
        if (!reAlign && source && (preRect.width !== sourceRect.width || preRect.height !== sourceRect.height)) {
          reAlign = true;
        }
      }

      this.sourceRect = sourceRect;
    }

    if (reAlign) {
      this.forceAlign();
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  };

  Align.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stopMonitorWindowResize();
  };

  Align.prototype.startMonitorWindowResize = function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.bufferMonitor = Object(_util__WEBPACK_IMPORTED_MODULE_8__["buffer"])(this.forceAlign, this.props.monitorBufferTime);
      this.resizeHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__["default"])(window, 'resize', this.bufferMonitor);
    }
  };

  Align.prototype.stopMonitorWindowResize = function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.bufferMonitor.clear();
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  };

  Align.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        childrenProps = _props.childrenProps,
        children = _props.children;

    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children);
    if (childrenProps) {
      var newProps = {};
      var propList = Object.keys(childrenProps);
      propList.forEach(function (prop) {
        newProps[prop] = _this2.props[childrenProps[prop]];
      });

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(child, newProps);
    }
    return child;
  };

  return Align;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

Align.propTypes = {
  childrenProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  align: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    clientX: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    clientY: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    pageX: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    pageY: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
  })]),
  onAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  monitorBufferTime: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  monitorWindowResize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
Align.defaultProps = {
  target: function target() {
    return window;
  },
  monitorBufferTime: 50,
  monitorWindowResize: false,
  disabled: false
};


/* harmony default export */ __webpack_exports__["default"] = (Align);

/***/ }),

/***/ "./node_modules/rc-align/es/index.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-align/es/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Align__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Align */ "./node_modules/rc-align/es/Align.js");
// export this package's api


/* harmony default export */ __webpack_exports__["default"] = (_Align__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-align/es/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-align/es/util.js ***!
  \******************************************/
/*! exports provided: buffer, isSamePoint, isWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buffer", function() { return buffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSamePoint", function() { return isSamePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return isWindow; });
function buffer(fn, ms) {
  var timer = void 0;

  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }

  function bufferFn() {
    clear();
    timer = setTimeout(fn, ms);
  }

  bufferFn.clear = clear;

  return bufferFn;
}

function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}

function isWindow(obj) {
  return obj && typeof obj === 'object' && obj.window === obj;
}

/***/ }),

/***/ "./node_modules/rc-animate/es/Animate.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-animate/es/Animate.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ChildrenUtils */ "./node_modules/rc-animate/es/ChildrenUtils.js");
/* harmony import */ var _AnimateChild__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnimateChild */ "./node_modules/rc-animate/es/AnimateChild.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/animate */ "./node_modules/rc-animate/es/util/animate.js");












var defaultKey = 'rc_animate_' + Date.now();

function getChildrenFromProps(props) {
  var children = props.children;
  if (react__WEBPACK_IMPORTED_MODULE_6___default.a.isValidElement(children)) {
    if (!children.key) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(children, {
        key: defaultKey
      });
    }
  }
  return children;
}

function noop() {}

var Animate = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Animate, _React$Component);

  // eslint-disable-line

  function Animate(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Animate);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Animate.__proto__ || Object.getPrototypeOf(Animate)).call(this, props));

    _initialiseProps.call(_this);

    _this.currentlyAnimatingKeys = {};
    _this.keysToEnter = [];
    _this.keysToLeave = [];

    _this.state = {
      children: Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(props))
    };

    _this.childrenRefs = {};
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Animate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var showProp = this.props.showProp;
      var children = this.state.children;
      if (showProp) {
        children = children.filter(function (child) {
          return !!child.props[showProp];
        });
      }
      children.forEach(function (child) {
        if (child) {
          _this2.performAppear(child.key);
        }
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      this.nextProps = nextProps;
      var nextChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(nextProps));
      var props = this.props;
      // exclusive needs immediate response
      if (props.exclusive) {
        Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
          _this3.stop(key);
        });
      }
      var showProp = props.showProp;
      var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
      // last props children if exclusive
      var currentChildren = props.exclusive ? Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(props)) : this.state.children;
      // in case destroy in showProp mode
      var newChildren = [];
      if (showProp) {
        currentChildren.forEach(function (currentChild) {
          var nextChild = currentChild && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(nextChildren, currentChild.key);
          var newChild = void 0;
          if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
            newChild = react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(nextChild || currentChild, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, showProp, true));
          } else {
            newChild = nextChild;
          }
          if (newChild) {
            newChildren.push(newChild);
          }
        });
        nextChildren.forEach(function (nextChild) {
          if (!nextChild || !Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(currentChildren, nextChild.key)) {
            newChildren.push(nextChild);
          }
        });
      } else {
        newChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["mergeChildren"])(currentChildren, nextChildren);
      }

      // need render to avoid update
      this.setState({
        children: newChildren
      });

      nextChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasPrev = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(currentChildren, key);
        if (showProp) {
          var showInNext = child.props[showProp];
          if (hasPrev) {
            var showInNow = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
            if (!showInNow && showInNext) {
              _this3.keysToEnter.push(key);
            }
          } else if (showInNext) {
            _this3.keysToEnter.push(key);
          }
        } else if (!hasPrev) {
          _this3.keysToEnter.push(key);
        }
      });

      currentChildren.forEach(function (child) {
        var key = child && child.key;
        if (child && currentlyAnimatingKeys[key]) {
          return;
        }
        var hasNext = child && Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(nextChildren, key);
        if (showProp) {
          var showInNow = child.props[showProp];
          if (hasNext) {
            var showInNext = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findShownChildInChildrenByKey"])(nextChildren, key, showProp);
            if (!showInNext && showInNow) {
              _this3.keysToLeave.push(key);
            }
          } else if (showInNow) {
            _this3.keysToLeave.push(key);
          }
        } else if (!hasNext) {
          _this3.keysToLeave.push(key);
        }
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var keysToEnter = this.keysToEnter;
      this.keysToEnter = [];
      keysToEnter.forEach(this.performEnter);
      var keysToLeave = this.keysToLeave;
      this.keysToLeave = [];
      keysToLeave.forEach(this.performLeave);
    }
  }, {
    key: 'isValidChildByKey',
    value: function isValidChildByKey(currentChildren, key) {
      var showProp = this.props.showProp;
      if (showProp) {
        return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findShownChildInChildrenByKey"])(currentChildren, key, showProp);
      }
      return Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["findChildInChildrenByKey"])(currentChildren, key);
    }
  }, {
    key: 'stop',
    value: function stop(key) {
      delete this.currentlyAnimatingKeys[key];
      var component = this.childrenRefs[key];
      if (component) {
        component.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var props = this.props;
      this.nextProps = props;
      var stateChildren = this.state.children;
      var children = null;
      if (stateChildren) {
        children = stateChildren.map(function (child) {
          if (child === null || child === undefined) {
            return child;
          }
          if (!child.key) {
            throw new Error('must set key for <rc-animate> children');
          }
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            _AnimateChild__WEBPACK_IMPORTED_MODULE_9__["default"],
            {
              key: child.key,
              ref: function ref(node) {
                _this4.childrenRefs[child.key] = node;
              },
              animation: props.animation,
              transitionName: props.transitionName,
              transitionEnter: props.transitionEnter,
              transitionAppear: props.transitionAppear,
              transitionLeave: props.transitionLeave
            },
            child
          );
        });
      }
      var Component = props.component;
      if (Component) {
        var passedProps = props;
        if (typeof Component === 'string') {
          passedProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            className: props.className,
            style: props.style
          }, props.componentProps);
        }
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          Component,
          passedProps,
          children
        );
      }
      return children[0] || null;
    }
  }]);

  return Animate;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Animate.isAnimate = true;
Animate.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  componentProps: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  transitionEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  transitionAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  exclusive: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  transitionLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  onEnd: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  showProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};
Animate.defaultProps = {
  animation: {},
  component: 'span',
  componentProps: {},
  transitionEnter: true,
  transitionLeave: true,
  transitionAppear: false,
  onEnd: noop,
  onEnter: noop,
  onLeave: noop,
  onAppear: noop
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.performEnter = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillEnter(_this5.handleDoneAdding.bind(_this5, key, 'enter'));
    }
  };

  this.performAppear = function (key) {
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillAppear(_this5.handleDoneAdding.bind(_this5, key, 'appear'));
    }
  };

  this.handleDoneAdding = function (key, type) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(props));
    if (!_this5.isValidChildByKey(currentChildren, key)) {
      // exclusive will not need this
      _this5.performLeave(key);
    } else if (type === 'appear') {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_10__["default"].allowAppearCallback(props)) {
        props.onAppear(key);
        props.onEnd(key, true);
      }
    } else if (_util_animate__WEBPACK_IMPORTED_MODULE_10__["default"].allowEnterCallback(props)) {
      props.onEnter(key);
      props.onEnd(key, true);
    }
  };

  this.performLeave = function (key) {
    // may already remove by exclusive
    if (_this5.childrenRefs[key]) {
      _this5.currentlyAnimatingKeys[key] = true;
      _this5.childrenRefs[key].componentWillLeave(_this5.handleDoneLeaving.bind(_this5, key));
    }
  };

  this.handleDoneLeaving = function (key) {
    var props = _this5.props;
    delete _this5.currentlyAnimatingKeys[key];
    // if update on exclusive mode, skip check
    if (props.exclusive && props !== _this5.nextProps) {
      return;
    }
    var currentChildren = Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["toArrayChildren"])(getChildrenFromProps(props));
    // in case state change is too fast
    if (_this5.isValidChildByKey(currentChildren, key)) {
      _this5.performEnter(key);
    } else {
      var end = function end() {
        if (_util_animate__WEBPACK_IMPORTED_MODULE_10__["default"].allowLeaveCallback(props)) {
          props.onLeave(key);
          props.onEnd(key, false);
        }
      };
      if (!Object(_ChildrenUtils__WEBPACK_IMPORTED_MODULE_8__["isSameChildren"])(_this5.state.children, currentChildren, props.showProp)) {
        _this5.setState({
          children: currentChildren
        }, end);
      } else {
        end();
      }
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Animate);

/***/ }),

/***/ "./node_modules/rc-animate/es/AnimateChild.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-animate/es/AnimateChild.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var css_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! css-animation */ "./node_modules/css-animation/es/index.js");
/* harmony import */ var _util_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/animate */ "./node_modules/rc-animate/es/util/animate.js");










var transitionMap = {
  enter: 'transitionEnter',
  appear: 'transitionAppear',
  leave: 'transitionLeave'
};

var AnimateChild = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(AnimateChild, _React$Component);

  function AnimateChild() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AnimateChild);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AnimateChild, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isEnterSupported(this.props)) {
        this.transition('enter', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isAppearSupported(this.props)) {
        this.transition('appear', done);
      } else {
        done();
      }
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      if (_util_animate__WEBPACK_IMPORTED_MODULE_8__["default"].isLeaveSupported(this.props)) {
        this.transition('leave', done);
      } else {
        // always sync, do not interupt with react component life cycle
        // update hidden -> animate hidden ->
        // didUpdate -> animate leave -> unmount (if animate is none)
        done();
      }
    }
  }, {
    key: 'transition',
    value: function transition(animationType, finishCallback) {
      var _this2 = this;

      var node = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);
      var props = this.props;
      var transitionName = props.transitionName;
      var nameIsObj = typeof transitionName === 'object';
      this.stop();
      var end = function end() {
        _this2.stopper = null;
        finishCallback();
      };
      if ((css_animation__WEBPACK_IMPORTED_MODULE_7__["isCssAnimationSupported"] || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
        var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
        var activeName = name + '-active';
        if (nameIsObj && transitionName[animationType + 'Active']) {
          activeName = transitionName[animationType + 'Active'];
        }
        this.stopper = Object(css_animation__WEBPACK_IMPORTED_MODULE_7__["default"])(node, {
          name: name,
          active: activeName
        }, end);
      } else {
        this.stopper = props.animation[animationType](node, end);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      var stopper = this.stopper;
      if (stopper) {
        this.stopper = null;
        stopper.stop();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return AnimateChild;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

AnimateChild.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (AnimateChild);

/***/ }),

/***/ "./node_modules/rc-animate/es/ChildrenUtils.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-animate/es/ChildrenUtils.js ***!
  \*****************************************************/
/*! exports provided: toArrayChildren, findChildInChildrenByKey, findShownChildInChildrenByKey, findHiddenChildInChildrenByKey, isSameChildren, mergeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArrayChildren", function() { return toArrayChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findChildInChildrenByKey", function() { return findChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findShownChildInChildrenByKey", function() { return findShownChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findHiddenChildInChildrenByKey", function() { return findHiddenChildInChildrenByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameChildren", function() { return isSameChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildren", function() { return mergeChildren; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function toArrayChildren(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (child) {
    ret.push(child);
  });
  return ret;
}

function findChildInChildrenByKey(children, key) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (ret) {
        return;
      }
      if (child && child.key === key) {
        ret = child;
      }
    });
  }
  return ret;
}

function findShownChildInChildrenByKey(children, key, showProp) {
  var ret = null;
  if (children) {
    children.forEach(function (child) {
      if (child && child.key === key && child.props[showProp]) {
        if (ret) {
          throw new Error('two child with same key for <rc-animate> children');
        }
        ret = child;
      }
    });
  }
  return ret;
}

function findHiddenChildInChildrenByKey(children, key, showProp) {
  var found = 0;
  if (children) {
    children.forEach(function (child) {
      if (found) {
        return;
      }
      found = child && child.key === key && !child.props[showProp];
    });
  }
  return found;
}

function isSameChildren(c1, c2, showProp) {
  var same = c1.length === c2.length;
  if (same) {
    c1.forEach(function (child, index) {
      var child2 = c2[index];
      if (child && child2) {
        if (child && !child2 || !child && child2) {
          same = false;
        } else if (child.key !== child2.key) {
          same = false;
        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
          same = false;
        }
      }
    });
  }
  return same;
}

function mergeChildren(prev, next) {
  var ret = [];

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextChildrenPending = {};
  var pendingChildren = [];
  prev.forEach(function (child) {
    if (child && findChildInChildrenByKey(next, child.key)) {
      if (pendingChildren.length) {
        nextChildrenPending[child.key] = pendingChildren;
        pendingChildren = [];
      }
    } else {
      pendingChildren.push(child);
    }
  });

  next.forEach(function (child) {
    if (child && Object.prototype.hasOwnProperty.call(nextChildrenPending, child.key)) {
      ret = ret.concat(nextChildrenPending[child.key]);
    }
    ret.push(child);
  });

  ret = ret.concat(pendingChildren);

  return ret;
}

/***/ }),

/***/ "./node_modules/rc-animate/es/util/animate.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-animate/es/util/animate.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var util = {
  isAppearSupported: function isAppearSupported(props) {
    return props.transitionName && props.transitionAppear || props.animation.appear;
  },
  isEnterSupported: function isEnterSupported(props) {
    return props.transitionName && props.transitionEnter || props.animation.enter;
  },
  isLeaveSupported: function isLeaveSupported(props) {
    return props.transitionName && props.transitionLeave || props.animation.leave;
  },
  allowAppearCallback: function allowAppearCallback(props) {
    return props.transitionAppear || props.animation.appear;
  },
  allowEnterCallback: function allowEnterCallback(props) {
    return props.transitionEnter || props.animation.enter;
  },
  allowLeaveCallback: function allowLeaveCallback(props) {
    return props.transitionLeave || props.animation.leave;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ }),

/***/ "./node_modules/rc-rate/es/Rate.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-rate/es/Rate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./node_modules/rc-rate/es/util.js");
/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Star */ "./node_modules/rc-rate/es/Star.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function noop() {}

var Rate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rate, _React$Component);

  function Rate(props) {
    var _this;

    _classCallCheck(this, Rate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rate).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHover", function (event, index) {
      var onHoverChange = _this.props.onHoverChange;

      var hoverValue = _this.getStarValue(index, event.pageX);

      var cleanedValue = _this.state.cleanedValue;

      if (hoverValue !== cleanedValue) {
        _this.setState({
          hoverValue: hoverValue,
          cleanedValue: null
        });
      }

      onHoverChange(hoverValue);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseLeave", function () {
      var onHoverChange = _this.props.onHoverChange;

      _this.setState({
        hoverValue: undefined,
        cleanedValue: null
      });

      onHoverChange(undefined);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (event, index) {
      var allowClear = _this.props.allowClear;
      var value = _this.state.value;

      var newValue = _this.getStarValue(index, event.pageX);

      var isReset = false;

      if (allowClear) {
        isReset = newValue === value;
      }

      _this.onMouseLeave(true);

      _this.changeValue(isReset ? 0 : newValue);

      _this.setState({
        cleanedValue: isReset ? newValue : null
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      var onFocus = _this.props.onFocus;

      _this.setState({
        focused: true
      });

      if (onFocus) {
        onFocus();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      var onBlur = _this.props.onBlur;

      _this.setState({
        focused: false
      });

      if (onBlur) {
        onBlur();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      var keyCode = event.keyCode;
      var _this$props = _this.props,
          count = _this$props.count,
          allowHalf = _this$props.allowHalf,
          onKeyDown = _this$props.onKeyDown;
      var value = _this.state.value;

      if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].RIGHT && value < count) {
        if (allowHalf) {
          value += 0.5;
        } else {
          value += 1;
        }

        _this.changeValue(value);

        event.preventDefault();
      } else if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_5__["default"].LEFT && value > 0) {
        if (allowHalf) {
          value -= 0.5;
        } else {
          value -= 1;
        }

        _this.changeValue(value);

        event.preventDefault();
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveRef", function (index) {
      return function (node) {
        _this.stars[index] = node;
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveRate", function (node) {
      _this.rate = node;
    });

    var _value = props.value;

    if (_value === undefined) {
      _value = props.defaultValue;
    }

    _this.stars = {};
    _this.state = {
      value: _value,
      focused: false,
      cleanedValue: null
    };
    return _this;
  }

  _createClass(Rate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          autoFocus = _this$props2.autoFocus,
          disabled = _this$props2.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: "getStarDOM",
    value: function getStarDOM(index) {
      return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.stars[index]);
    }
  }, {
    key: "getStarValue",
    value: function getStarValue(index, x) {
      var allowHalf = this.props.allowHalf;
      var value = index + 1;

      if (allowHalf) {
        var starEle = this.getStarDOM(index);
        var leftDis = Object(_util__WEBPACK_IMPORTED_MODULE_6__["getOffsetLeft"])(starEle);
        var width = starEle.clientWidth;

        if (x - leftDis < width / 2) {
          value -= 0.5;
        }
      }

      return value;
    }
  }, {
    key: "focus",
    value: function focus() {
      var disabled = this.props.disabled;

      if (!disabled) {
        this.rate.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      var disabled = this.props.disabled;

      if (!disabled) {
        this.rate.focus();
      }
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      var onChange = this.props.onChange;

      if (!('value' in this.props)) {
        this.setState({
          value: value
        });
      }

      onChange(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          count = _this$props3.count,
          allowHalf = _this$props3.allowHalf,
          style = _this$props3.style,
          prefixCls = _this$props3.prefixCls,
          disabled = _this$props3.disabled,
          className = _this$props3.className,
          character = _this$props3.character,
          characterRender = _this$props3.characterRender,
          tabIndex = _this$props3.tabIndex;
      var _this$state = this.state,
          value = _this$state.value,
          hoverValue = _this$state.hoverValue,
          focused = _this$state.focused;
      var stars = [];
      var disabledClass = disabled ? "".concat(prefixCls, "-disabled") : '';

      for (var index = 0; index < count; index++) {
        stars.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Star__WEBPACK_IMPORTED_MODULE_7__["default"], {
          ref: this.saveRef(index),
          index: index,
          count: count,
          disabled: disabled,
          prefixCls: "".concat(prefixCls, "-star"),
          allowHalf: allowHalf,
          value: hoverValue === undefined ? value : hoverValue,
          onClick: this.onClick,
          onHover: this.onHover,
          key: index,
          character: character,
          characterRender: characterRender,
          focused: focused
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, disabledClass, className),
        style: style,
        onMouseLeave: disabled ? null : this.onMouseLeave,
        tabIndex: disabled ? -1 : tabIndex,
        onFocus: disabled ? null : this.onFocus,
        onBlur: disabled ? null : this.onBlur,
        onKeyDown: disabled ? null : this.onKeyDown,
        ref: this.saveRate,
        role: "radiogroup"
      }, stars);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if ('value' in nextProps && nextProps.value !== undefined) {
        return _objectSpread({}, state, {
          value: nextProps.value
        });
      }

      return state;
    }
  }]);

  return Rate;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Rate, "propTypes", {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  count: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  allowHalf: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  allowClear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onHoverChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  character: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  characterRender: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});

_defineProperty(Rate, "defaultProps", {
  defaultValue: 0,
  count: 5,
  allowHalf: false,
  allowClear: true,
  style: {},
  prefixCls: 'rc-rate',
  onChange: noop,
  character: '★',
  onHoverChange: noop,
  tabIndex: 0
});

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__["polyfill"])(Rate);
/* harmony default export */ __webpack_exports__["default"] = (Rate);

/***/ }),

/***/ "./node_modules/rc-rate/es/Star.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-rate/es/Star.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Star; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Star =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Star, _React$Component);

  function Star() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Star);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Star)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHover", function (e) {
      var _this$props = _this.props,
          onHover = _this$props.onHover,
          index = _this$props.index;
      onHover(e, index);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (e) {
      var _this$props2 = _this.props,
          onClick = _this$props2.onClick,
          index = _this$props2.index;
      onClick(e, index);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (e) {
      var _this$props3 = _this.props,
          onClick = _this$props3.onClick,
          index = _this$props3.index;

      if (e.keyCode === 13) {
        onClick(e, index);
      }
    });

    return _this;
  }

  _createClass(Star, [{
    key: "getClassName",
    value: function getClassName() {
      var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          index = _this$props4.index,
          value = _this$props4.value,
          allowHalf = _this$props4.allowHalf,
          focused = _this$props4.focused;
      var starValue = index + 1;
      var className = prefixCls;

      if (value === 0 && index === 0 && focused) {
        className += " ".concat(prefixCls, "-focused");
      } else if (allowHalf && value + 0.5 === starValue) {
        className += " ".concat(prefixCls, "-half ").concat(prefixCls, "-active");

        if (focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      } else {
        className += starValue <= value ? " ".concat(prefixCls, "-full") : " ".concat(prefixCls, "-zero");

        if (starValue === value && focused) {
          className += " ".concat(prefixCls, "-focused");
        }
      }

      return className;
    }
  }, {
    key: "render",
    value: function render() {
      var onHover = this.onHover,
          onClick = this.onClick,
          onKeyDown = this.onKeyDown;
      var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          prefixCls = _this$props5.prefixCls,
          character = _this$props5.character,
          characterRender = _this$props5.characterRender,
          index = _this$props5.index,
          count = _this$props5.count,
          value = _this$props5.value;
      var start = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: this.getClassName()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: disabled ? null : onClick,
        onKeyDown: disabled ? null : onKeyDown,
        onMouseMove: disabled ? null : onHover,
        role: "radio",
        "aria-checked": value > index ? 'true' : 'false',
        "aria-posinset": index + 1,
        "aria-setsize": count,
        tabIndex: 0
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-first")
      }, character), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(prefixCls, "-second")
      }, character)));

      if (characterRender) {
        start = characterRender(start, this.props);
      }

      return start;
    }
  }]);

  return Star;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Star, "propTypes", {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  allowHalf: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onHover: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  character: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  characterRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  focused: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
});



/***/ }),

/***/ "./node_modules/rc-rate/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/rc-rate/es/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rate */ "./node_modules/rc-rate/es/Rate.js");

/* harmony default export */ __webpack_exports__["default"] = (_Rate__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-rate/es/util.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-rate/es/util.js ***!
  \*****************************************/
/*! exports provided: getOffsetLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetLeft", function() { return getOffsetLeft; });
/* eslint-disable import/prefer-default-export */
function getScroll(w, top) {
  var ret = top ? w.pageYOffset : w.pageXOffset;
  var method = top ? 'scrollTop' : 'scrollLeft';

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getClientPosition(elem) {
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  var box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getOffsetLeft(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  return pos.left;
}

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Content.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Content.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






var Content = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Content, _React$Component);

  function Content() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Content);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _React$Component.apply(this, arguments));
  }

  Content.prototype.componentDidUpdate = function componentDidUpdate() {
    var trigger = this.props.trigger;

    if (trigger) {
      trigger.forcePopupAlign();
    }
  };

  Content.prototype.render = function render() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls,
        id = _props.id;

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      { className: prefixCls + '-inner', id: id, role: 'tooltip' },
      typeof overlay === 'function' ? overlay() : overlay
    );
  };

  return Content;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Content.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]).isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Tooltip.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Content */ "./node_modules/rc-tooltip/es/Content.js");











var Tooltip = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Tooltip, _Component);

  function Tooltip() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Tooltip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getPopupElement = function () {
      var _this$props = _this.props,
          arrowContent = _this$props.arrowContent,
          overlay = _this$props.overlay,
          prefixCls = _this$props.prefixCls,
          id = _this$props.id;

      return [react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: prefixCls + '-arrow', key: 'arrow' },
        arrowContent
      ), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_9__["default"], {
        key: 'content',
        trigger: _this.trigger,
        prefixCls: prefixCls,
        id: id,
        overlay: overlay
      })];
    }, _this.saveTrigger = function (node) {
      _this.trigger = node;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Tooltip.prototype.render = function render() {
    var _props = this.props,
        overlayClassName = _props.overlayClassName,
        trigger = _props.trigger,
        mouseEnterDelay = _props.mouseEnterDelay,
        mouseLeaveDelay = _props.mouseLeaveDelay,
        overlayStyle = _props.overlayStyle,
        prefixCls = _props.prefixCls,
        children = _props.children,
        onVisibleChange = _props.onVisibleChange,
        afterVisibleChange = _props.afterVisibleChange,
        transitionName = _props.transitionName,
        animation = _props.animation,
        placement = _props.placement,
        align = _props.align,
        destroyTooltipOnHide = _props.destroyTooltipOnHide,
        defaultVisible = _props.defaultVisible,
        getTooltipContainer = _props.getTooltipContainer,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['overlayClassName', 'trigger', 'mouseEnterDelay', 'mouseLeaveDelay', 'overlayStyle', 'prefixCls', 'children', 'onVisibleChange', 'afterVisibleChange', 'transitionName', 'animation', 'placement', 'align', 'destroyTooltipOnHide', 'defaultVisible', 'getTooltipContainer']);

    var extraProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps);
    if ('visible' in this.props) {
      extraProps.popupVisible = this.props.visible;
    }
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      rc_trigger__WEBPACK_IMPORTED_MODULE_7__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        popupClassName: overlayClassName,
        ref: this.saveTrigger,
        prefixCls: prefixCls,
        popup: this.getPopupElement,
        action: trigger,
        builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_8__["placements"],
        popupPlacement: placement,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltipOnHide,
        mouseLeaveDelay: mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay: mouseEnterDelay
      }, extraProps),
      children
    );
  };

  return Tooltip;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Tooltip.propTypes = {
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  defaultVisible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
  animation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  onVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  afterVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]).isRequired,
  overlayStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  overlayClassName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  mouseEnterDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  mouseLeaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  getTooltipContainer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  destroyTooltipOnHide: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  align: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  arrowContent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};
Tooltip.defaultProps = {
  prefixCls: 'rc-tooltip',
  mouseEnterDelay: 0,
  destroyTooltipOnHide: false,
  mouseLeaveDelay: 0.1,
  align: {},
  placement: 'right',
  trigger: ['hover'],
  arrowContent: null
};


/* harmony default export */ __webpack_exports__["default"] = (Tooltip);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tooltip/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/rc-tooltip/es/Tooltip.js");


/* harmony default export */ __webpack_exports__["default"] = (_Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/placements.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tooltip/es/placements.js ***!
  \**************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "./node_modules/rc-tooltip/lib/placements.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-tooltip/lib/placements.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = exports.placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};

exports['default'] = placements;

/***/ }),

/***/ "./node_modules/rc-trigger/es/LazyRenderBox.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-trigger/es/LazyRenderBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







var LazyRenderBox = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _Component);

  function LazyRenderBox() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.apply(this, arguments));
  }

  LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  };

  LazyRenderBox.prototype.render = function render() {
    var _props = this.props,
        hiddenClassName = _props.hiddenClassName,
        visible = _props.visible,
        props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_props, ['hiddenClassName', 'visible']);

    if (hiddenClassName || react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.count(props.children) > 1) {
      if (!visible && hiddenClassName) {
        props.className += ' ' + hiddenClassName;
      }
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('div', props);
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(props.children);
  };

  return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

LazyRenderBox.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "./node_modules/rc-trigger/es/Popup.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/Popup.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_align__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-align */ "./node_modules/rc-align/es/index.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _PopupInner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PopupInner */ "./node_modules/rc-trigger/es/PopupInner.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-trigger/es/LazyRenderBox.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-trigger/es/utils.js");













var Popup = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Popup, _Component);

  function Popup(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Popup);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      // Used for stretch
      stretchChecked: false,
      targetWidth: undefined,
      targetHeight: undefined
    };

    _this.savePopupRef = _utils__WEBPACK_IMPORTED_MODULE_11__["saveRef"].bind(_this, 'popupInstance');
    _this.saveAlignRef = _utils__WEBPACK_IMPORTED_MODULE_11__["saveRef"].bind(_this, 'alignInstance');
    return _this;
  }

  Popup.prototype.componentDidMount = function componentDidMount() {
    this.rootNode = this.getPopupDomNode();
    this.setStretchSize();
  };

  Popup.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setStretchSize();
  };

  // Record size if stretch needed


  Popup.prototype.getPopupDomNode = function getPopupDomNode() {
    return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(this.popupInstance);
  };

  // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align


  Popup.prototype.getMaskTransitionName = function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  };

  Popup.prototype.getTransitionName = function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  };

  Popup.prototype.getClassName = function getClassName(currentAlignClassName) {
    return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
  };

  Popup.prototype.getPopupElement = function getPopupElement() {
    var _this2 = this;

    var savePopupRef = this.savePopupRef;
    var _state = this.state,
        stretchChecked = _state.stretchChecked,
        targetHeight = _state.targetHeight,
        targetWidth = _state.targetWidth;
    var _props = this.props,
        align = _props.align,
        visible = _props.visible,
        prefixCls = _props.prefixCls,
        style = _props.style,
        getClassNameFromAlign = _props.getClassNameFromAlign,
        destroyPopupOnHide = _props.destroyPopupOnHide,
        stretch = _props.stretch,
        children = _props.children,
        onMouseEnter = _props.onMouseEnter,
        onMouseLeave = _props.onMouseLeave,
        onMouseDown = _props.onMouseDown,
        onTouchStart = _props.onTouchStart;

    var className = this.getClassName(this.currentAlignClassName || getClassNameFromAlign(align));
    var hiddenClassName = prefixCls + '-hidden';

    if (!visible) {
      this.currentAlignClassName = null;
    }

    var sizeStyle = {};
    if (stretch) {
      // Stretch with target
      if (stretch.indexOf('height') !== -1) {
        sizeStyle.height = targetHeight;
      } else if (stretch.indexOf('minHeight') !== -1) {
        sizeStyle.minHeight = targetHeight;
      }
      if (stretch.indexOf('width') !== -1) {
        sizeStyle.width = targetWidth;
      } else if (stretch.indexOf('minWidth') !== -1) {
        sizeStyle.minWidth = targetWidth;
      }

      // Delay force align to makes ui smooth
      if (!stretchChecked) {
        sizeStyle.visibility = 'hidden';
        setTimeout(function () {
          if (_this2.alignInstance) {
            _this2.alignInstance.forceAlign();
          }
        }, 0);
      }
    }

    var newStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, sizeStyle, style, this.getZIndexStyle());

    var popupInnerProps = {
      className: className,
      prefixCls: prefixCls,
      ref: savePopupRef,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDown: onMouseDown,
      onTouchStart: onTouchStart,
      style: newStyle
    };
    if (destroyPopupOnHide) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
        {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        },
        visible ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_align__WEBPACK_IMPORTED_MODULE_7__["default"],
          {
            target: this.getAlignTarget(),
            key: 'popup',
            ref: this.saveAlignRef,
            monitorWindowResize: true,
            align: align,
            onAlign: this.onAlign
          },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            _PopupInner__WEBPACK_IMPORTED_MODULE_9__["default"],
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              visible: true
            }, popupInnerProps),
            children
          )
        ) : null
      );
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
      {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_align__WEBPACK_IMPORTED_MODULE_7__["default"],
        {
          target: this.getAlignTarget(),
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          xVisible: visible,
          childrenProps: { visible: 'xVisible' },
          disabled: !visible,
          align: align,
          onAlign: this.onAlign
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _PopupInner__WEBPACK_IMPORTED_MODULE_9__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            hiddenClassName: hiddenClassName
          }, popupInnerProps),
          children
        )
      )
    );
  };

  Popup.prototype.getZIndexStyle = function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  };

  Popup.prototype.getMaskElement = function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LazyRenderBox__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_8__["default"],
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  };

  Popup.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      null,
      this.getMaskElement(),
      this.getPopupElement()
    );
  };

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

Popup.propTypes = {
  visible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  getClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getRootDomNode: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  align: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  point: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    pageX: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    pageY: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  })
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this3.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this3.currentAlignClassName !== currentAlignClassName) {
      _this3.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this3.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.setStretchSize = function () {
    var _props2 = _this3.props,
        stretch = _props2.stretch,
        getRootDomNode = _props2.getRootDomNode,
        visible = _props2.visible;
    var _state2 = _this3.state,
        stretchChecked = _state2.stretchChecked,
        targetHeight = _state2.targetHeight,
        targetWidth = _state2.targetWidth;


    if (!stretch || !visible) {
      if (stretchChecked) {
        _this3.setState({ stretchChecked: false });
      }
      return;
    }

    var $ele = getRootDomNode();
    if (!$ele) return;

    var height = $ele.offsetHeight;
    var width = $ele.offsetWidth;

    if (targetHeight !== height || targetWidth !== width || !stretchChecked) {
      _this3.setState({
        stretchChecked: true,
        targetHeight: height,
        targetWidth: width
      });
    }
  };

  this.getTargetElement = function () {
    return _this3.props.getRootDomNode();
  };

  this.getAlignTarget = function () {
    var point = _this3.props.point;

    if (point) {
      return point;
    }
    return _this3.getTargetElement;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./node_modules/rc-trigger/es/PopupInner.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-trigger/es/PopupInner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LazyRenderBox */ "./node_modules/rc-trigger/es/LazyRenderBox.js");







var PopupInner = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PopupInner, _Component);

  function PopupInner() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PopupInner);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _Component.apply(this, arguments));
  }

  PopupInner.prototype.render = function render() {
    var props = this.props;
    var className = props.className;
    if (!props.visible) {
      className += ' ' + props.hiddenClassName;
    }
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        onMouseDown: props.onMouseDown,
        onTouchStart: props.onTouchStart,
        style: props.style
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        _LazyRenderBox__WEBPACK_IMPORTED_MODULE_5__["default"],
        { className: props.prefixCls + '-content', visible: props.visible },
        props.children
      )
    );
  };

  return PopupInner;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

PopupInner.propTypes = {
  hiddenClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};


/* harmony default export */ __webpack_exports__["default"] = (PopupInner);

/***/ }),

/***/ "./node_modules/rc-trigger/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/contains */ "./node_modules/rc-util/es/Dom/contains.js");
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "./node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "./node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Portal */ "./node_modules/rc-util/es/Portal.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-trigger/es/utils.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Popup */ "./node_modules/rc-trigger/es/Popup.js");
















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];

var IS_REACT_16 = !!react_dom__WEBPACK_IMPORTED_MODULE_6__["createPortal"];

var contextTypes = {
  rcTrigger: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    onPopupMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
  })
};

var Trigger = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Trigger, _React$Component);

  function Trigger(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Trigger);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }

    _this.prevPopupVisible = popupVisible;

    _this.state = {
      popupVisible: popupVisible
    };
    return _this;
  }

  Trigger.prototype.getChildContext = function getChildContext() {
    return {
      rcTrigger: {
        onPopupMouseDown: this.onPopupMouseDown
      }
    };
  };

  Trigger.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    ALL_HANDLERS.forEach(function (h) {
      _this2['fire' + h] = function (e) {
        _this2.fireEvents(h, e);
      };
    });
  };

  Trigger.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  };

  Trigger.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  };

  Trigger.prototype.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    var triggerAfterPopupVisibleChange = function triggerAfterPopupVisibleChange() {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    };
    if (!IS_REACT_16) {
      this.renderComponent(null, triggerAfterPopupVisibleChange);
    }

    this.prevPopupVisible = prevState.popupVisible;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'mousedown', this.onDocumentClick);
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'touchstart', this.onDocumentClick);
      }
      // close popup when trigger type contains 'onContextMenu' and document is scrolling.
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextMenuOutsideHandler1 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(currentDocument, 'scroll', this.onContextMenuClose);
      }
      // close popup when trigger type contains 'onContextMenu' and window is blur.
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(window, 'blur', this.onContextMenuClose);
      }
      return;
    }

    this.clearOutsideHandler();
  };

  Trigger.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
    clearTimeout(this.mouseDownTimeout);
  };

  Trigger.prototype.getPopupDomNode = function getPopupDomNode() {
    // for test
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  };

  Trigger.prototype.getPopupAlign = function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAlignFromPlacement"])(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  };

  /**
   * @param popupVisible    Show or not the popup element
   * @param event           SyntheticEvent, used for `pointAlign`
   */
  Trigger.prototype.setPopupVisible = function setPopupVisible(popupVisible, event) {
    var alignPoint = this.props.alignPoint;


    this.clearDelayTimer();

    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({ popupVisible: popupVisible });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }

    // Always record the point position since mouseEnterDelay will delay the show
    if (alignPoint && event) {
      this.setPoint(event);
    }
  };

  Trigger.prototype.delaySetPopupVisible = function delaySetPopupVisible(visible, delayS, event) {
    var _this3 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      var point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = setTimeout(function () {
        _this3.setPopupVisible(visible, point);
        _this3.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  };

  Trigger.prototype.clearDelayTimer = function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  };

  Trigger.prototype.clearOutsideHandler = function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1.remove();
      this.contextMenuOutsideHandler1 = null;
    }

    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2.remove();
      this.contextMenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  };

  Trigger.prototype.createTwoChains = function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  };

  Trigger.prototype.isClickToShow = function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isContextMenuToShow = function isContextMenuToShow() {
    var _props2 = this.props,
        action = _props2.action,
        showAction = _props2.showAction;

    return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
  };

  Trigger.prototype.isClickToHide = function isClickToHide() {
    var _props3 = this.props,
        action = _props3.action,
        hideAction = _props3.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  };

  Trigger.prototype.isMouseEnterToShow = function isMouseEnterToShow() {
    var _props4 = this.props,
        action = _props4.action,
        showAction = _props4.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  };

  Trigger.prototype.isMouseLeaveToHide = function isMouseLeaveToHide() {
    var _props5 = this.props,
        action = _props5.action,
        hideAction = _props5.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  };

  Trigger.prototype.isFocusToShow = function isFocusToShow() {
    var _props6 = this.props,
        action = _props6.action,
        showAction = _props6.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  };

  Trigger.prototype.isBlurToHide = function isBlurToHide() {
    var _props7 = this.props,
        action = _props7.action,
        hideAction = _props7.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  };

  Trigger.prototype.forcePopupAlign = function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  };

  Trigger.prototype.fireEvents = function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  };

  Trigger.prototype.close = function close() {
    this.setPopupVisible(false);
  };

  Trigger.prototype.render = function render() {
    var _this4 = this;

    var popupVisible = this.state.popupVisible;
    var _props8 = this.props,
        children = _props8.children,
        forceRender = _props8.forceRender,
        alignPoint = _props8.alignPoint,
        className = _props8.className;

    var child = react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.only(children);
    var newChildProps = { key: 'trigger' };

    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = this.onContextMenu;
    } else {
      newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
      if (alignPoint) {
        newChildProps.onMouseMove = this.onMouseMove;
      }
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    var childrenClassName = classnames__WEBPACK_IMPORTED_MODULE_11___default()(child && child.props && child.props.className, className);
    if (childrenClassName) {
      newChildProps.className = childrenClassName;
    }
    var trigger = react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, newChildProps);

    if (!IS_REACT_16) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_9__["default"],
        {
          parent: this,
          visible: popupVisible,
          autoMount: false,
          forceRender: forceRender,
          getComponent: this.getComponent,
          getContainer: this.getContainer
        },
        function (_ref2) {
          var renderComponent = _ref2.renderComponent;

          _this4.renderComponent = renderComponent;
          return trigger;
        }
      );
    }

    var portal = void 0;
    // prevent unmounting after it's rendered
    if (popupVisible || this._component || forceRender) {
      portal = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_10__["default"],
        {
          key: 'portal',
          getContainer: this.getContainer,
          didUpdate: this.handlePortalUpdate
        },
        this.getComponent()
      );
    }

    return [trigger, portal];
  };

  return Trigger;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Trigger.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  action: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string)]),
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  hideAction: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  getPopupClassNameFromAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  onPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  afterPopupVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  popup: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func]).isRequired,
  popupStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  popupPlacement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  builtinPlacements: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  popupTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  popupAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  mouseEnterDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  mouseLeaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  focusDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  blurDelay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getDocument: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  destroyPopupOnHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  maskClosable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onPopupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  popupAlign: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  popupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  defaultPopupVisible: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  maskTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  maskAnimation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  stretch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  alignPoint: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool // Maybe we can support user pass position in the future
};
Trigger.contextTypes = contextTypes;
Trigger.childContextTypes = contextTypes;
Trigger.defaultProps = {
  prefixCls: 'rc-trigger-popup',
  getPopupClassNameFromAlign: returnEmptyString,
  getDocument: returnDocument,
  onPopupVisibleChange: noop,
  afterPopupVisibleChange: noop,
  onPopupAlign: noop,
  popupClassName: '',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  focusDelay: 0,
  blurDelay: 0.15,
  popupStyle: {},
  destroyPopupOnHide: false,
  popupAlign: {},
  defaultPopupVisible: false,
  mask: false,
  maskClosable: true,
  action: [],
  showAction: [],
  hideAction: []
};

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.onMouseEnter = function (e) {
    var mouseEnterDelay = _this5.props.mouseEnterDelay;

    _this5.fireEvents('onMouseEnter', e);
    _this5.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
  };

  this.onMouseMove = function (e) {
    _this5.fireEvents('onMouseMove', e);
    _this5.setPoint(e);
  };

  this.onMouseLeave = function (e) {
    _this5.fireEvents('onMouseLeave', e);
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onPopupMouseEnter = function () {
    _this5.clearDelayTimer();
  };

  this.onPopupMouseLeave = function (e) {
    // https://github.com/react-component/trigger/pull/13
    // react bug?
    if (e.relatedTarget && !e.relatedTarget.setTimeout && _this5._component && _this5._component.getPopupDomNode && Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(_this5._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    _this5.delaySetPopupVisible(false, _this5.props.mouseLeaveDelay);
  };

  this.onFocus = function (e) {
    _this5.fireEvents('onFocus', e);
    // incase focusin and focusout
    _this5.clearDelayTimer();
    if (_this5.isFocusToShow()) {
      _this5.focusTime = Date.now();
      _this5.delaySetPopupVisible(true, _this5.props.focusDelay);
    }
  };

  this.onMouseDown = function (e) {
    _this5.fireEvents('onMouseDown', e);
    _this5.preClickTime = Date.now();
  };

  this.onTouchStart = function (e) {
    _this5.fireEvents('onTouchStart', e);
    _this5.preTouchTime = Date.now();
  };

  this.onBlur = function (e) {
    _this5.fireEvents('onBlur', e);
    _this5.clearDelayTimer();
    if (_this5.isBlurToHide()) {
      _this5.delaySetPopupVisible(false, _this5.props.blurDelay);
    }
  };

  this.onContextMenu = function (e) {
    e.preventDefault();
    _this5.fireEvents('onContextMenu', e);
    _this5.setPopupVisible(true, e);
  };

  this.onContextMenuClose = function () {
    if (_this5.isContextMenuToShow()) {
      _this5.close();
    }
  };

  this.onClick = function (event) {
    _this5.fireEvents('onClick', event);
    // focus will trigger click
    if (_this5.focusTime) {
      var preTime = void 0;
      if (_this5.preClickTime && _this5.preTouchTime) {
        preTime = Math.min(_this5.preClickTime, _this5.preTouchTime);
      } else if (_this5.preClickTime) {
        preTime = _this5.preClickTime;
      } else if (_this5.preTouchTime) {
        preTime = _this5.preTouchTime;
      }
      if (Math.abs(preTime - _this5.focusTime) < 20) {
        return;
      }
      _this5.focusTime = 0;
    }
    _this5.preClickTime = 0;
    _this5.preTouchTime = 0;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    var nextVisible = !_this5.state.popupVisible;
    if (_this5.isClickToHide() && !nextVisible || nextVisible && _this5.isClickToShow()) {
      _this5.setPopupVisible(!_this5.state.popupVisible, event);
    }
  };

  this.onPopupMouseDown = function () {
    var _context$rcTrigger = _this5.context.rcTrigger,
        rcTrigger = _context$rcTrigger === undefined ? {} : _context$rcTrigger;

    _this5.hasPopupMouseDown = true;

    clearTimeout(_this5.mouseDownTimeout);
    _this5.mouseDownTimeout = setTimeout(function () {
      _this5.hasPopupMouseDown = false;
    }, 0);

    if (rcTrigger.onPopupMouseDown) {
      rcTrigger.onPopupMouseDown.apply(rcTrigger, arguments);
    }
  };

  this.onDocumentClick = function (event) {
    if (_this5.props.mask && !_this5.props.maskClosable) {
      return;
    }

    var target = event.target;
    var root = Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5);
    if (!Object(rc_util_es_Dom_contains__WEBPACK_IMPORTED_MODULE_7__["default"])(root, target) && !_this5.hasPopupMouseDown) {
      _this5.close();
    }
  };

  this.getRootDomNode = function () {
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5);
  };

  this.getPopupClassNameFromAlign = function (align) {
    var className = [];
    var _props9 = _this5.props,
        popupPlacement = _props9.popupPlacement,
        builtinPlacements = _props9.builtinPlacements,
        prefixCls = _props9.prefixCls,
        alignPoint = _props9.alignPoint,
        getPopupClassNameFromAlign = _props9.getPopupClassNameFromAlign;

    if (popupPlacement && builtinPlacements) {
      className.push(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAlignPopupClassName"])(builtinPlacements, prefixCls, align, alignPoint));
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  };

  this.getComponent = function () {
    var _props10 = _this5.props,
        prefixCls = _props10.prefixCls,
        destroyPopupOnHide = _props10.destroyPopupOnHide,
        popupClassName = _props10.popupClassName,
        action = _props10.action,
        onPopupAlign = _props10.onPopupAlign,
        popupAnimation = _props10.popupAnimation,
        popupTransitionName = _props10.popupTransitionName,
        popupStyle = _props10.popupStyle,
        mask = _props10.mask,
        maskAnimation = _props10.maskAnimation,
        maskTransitionName = _props10.maskTransitionName,
        zIndex = _props10.zIndex,
        popup = _props10.popup,
        stretch = _props10.stretch,
        alignPoint = _props10.alignPoint;
    var _state = _this5.state,
        popupVisible = _state.popupVisible,
        point = _state.point;


    var align = _this5.getPopupAlign();

    var mouseProps = {};
    if (_this5.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = _this5.onPopupMouseEnter;
    }
    if (_this5.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = _this5.onPopupMouseLeave;
    }

    mouseProps.onMouseDown = _this5.onPopupMouseDown;
    mouseProps.onTouchStart = _this5.onPopupMouseDown;

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      _Popup__WEBPACK_IMPORTED_MODULE_13__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        prefixCls: prefixCls,
        destroyPopupOnHide: destroyPopupOnHide,
        visible: popupVisible,
        point: alignPoint && point,
        className: popupClassName,
        action: action,
        align: align,
        onAlign: onPopupAlign,
        animation: popupAnimation,
        getClassNameFromAlign: _this5.getPopupClassNameFromAlign
      }, mouseProps, {
        stretch: stretch,
        getRootDomNode: _this5.getRootDomNode,
        style: popupStyle,
        mask: mask,
        zIndex: zIndex,
        transitionName: popupTransitionName,
        maskAnimation: maskAnimation,
        maskTransitionName: maskTransitionName,
        ref: _this5.savePopup
      }),
      typeof popup === 'function' ? popup() : popup
    );
  };

  this.getContainer = function () {
    var props = _this5.props;

    var popupContainer = document.createElement('div');
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    popupContainer.style.width = '100%';
    var mountNode = props.getPopupContainer ? props.getPopupContainer(Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"])(_this5)) : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  this.setPoint = function (point) {
    var alignPoint = _this5.props.alignPoint;

    if (!alignPoint || !point) return;

    _this5.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  };

  this.handlePortalUpdate = function () {
    if (_this5.prevPopupVisible !== _this5.state.popupVisible) {
      _this5.props.afterPopupVisibleChange(_this5.state.popupVisible);
    }
  };

  this.savePopup = function (node) {
    _this5._component = node;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Trigger);

/***/ }),

/***/ "./node_modules/rc-trigger/es/utils.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-trigger/es/utils.js ***!
  \*********************************************/
/*! exports provided: getAlignFromPlacement, getAlignPopupClassName, saveRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignFromPlacement", function() { return getAlignFromPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlignPopupClassName", function() { return getAlignPopupClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRef", function() { return saveRef; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, baseAlign, align);
}

function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

/***/ }),

/***/ "./node_modules/rc-util/es/ContainerRender.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-util/es/ContainerRender.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var ContainerRender = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ContainerRender, _React$Component);

  function ContainerRender() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ContainerRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_ref = ContainerRender.__proto__ || Object.getPrototypeOf(ContainerRender)).call.apply(_ref, [this].concat(args))), _this), _this.removeContainer = function () {
      if (_this.container) {
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unmountComponentAtNode(_this.container);
        _this.container.parentNode.removeChild(_this.container);
        _this.container = null;
      }
    }, _this.renderComponent = function (props, ready) {
      var _this$props = _this.props,
          visible = _this$props.visible,
          getComponent = _this$props.getComponent,
          forceRender = _this$props.forceRender,
          getContainer = _this$props.getContainer,
          parent = _this$props.parent;

      if (visible || parent._component || forceRender) {
        if (!_this.container) {
          _this.container = getContainer();
        }
        react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unstable_renderSubtreeIntoContainer(parent, getComponent(props), _this.container, function callback() {
          if (ready) {
            ready.call(this);
          }
        });
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ContainerRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.autoMount) {
        this.renderComponent();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.autoDestroy) {
        this.removeContainer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        renderComponent: this.renderComponent,
        removeContainer: this.removeContainer
      });
    }
  }]);

  return ContainerRender;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ContainerRender.propTypes = {
  autoMount: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  autoDestroy: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  parent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  getComponent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
ContainerRender.defaultProps = {
  autoMount: true,
  autoDestroy: true,
  forceRender: false
};
/* harmony default export */ __webpack_exports__["default"] = (ContainerRender);

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/addEventListener.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/addEventListener.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addEventListenerWrap; });
/* harmony import */ var add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! add-dom-event-listener */ "./node_modules/add-dom-event-listener/lib/index.js");
/* harmony import */ var add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_batchedUpdates ? function run(e) {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unstable_batchedUpdates(cb, e);
  } : cb;
  return add_dom_event_listener__WEBPACK_IMPORTED_MODULE_0___default()(target, eventType, callback, option);
}

/***/ }),

/***/ "./node_modules/rc-util/es/Dom/contains.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-util/es/Dom/contains.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contains; });
function contains(root, n) {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/rc-util/es/Portal.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-util/es/Portal.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








var Portal = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Portal, _React$Component);

  function Portal() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Portal);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createContainer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var didUpdate = this.props.didUpdate;

      if (didUpdate) {
        didUpdate(prevProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeContainer();
    }
  }, {
    key: 'createContainer',
    value: function createContainer() {
      this._container = this.props.getContainer();
      this.forceUpdate();
    }
  }, {
    key: 'removeContainer',
    value: function removeContainer() {
      if (this._container) {
        this._container.parentNode.removeChild(this._container);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this._container) {
        return react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.createPortal(this.props.children, this._container);
      }
      return null;
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Portal.propTypes = {
  getContainer: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,
  didUpdate: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




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

var _col = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _row = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _rate = __webpack_require__(/*! antd/lib/rate */ "./node_modules/antd/lib/rate/index.js");

var _rate2 = _interopRequireDefault(_rate);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _col2.default,
          { span: 20, offset: 2 },
          _react2.default.createElement(
            _row2.default,
            null,
            '\u7EFC\u5408\u6307\u6570:',
            _react2.default.createElement(_rate2.default, { count: 3, disabled: true })
          )
        )
      );
    }
  }]);

  return Day;
}(_react2.default.PureComponent);

exports.default = Day;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY29sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb2wvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL1Jvd0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvY29sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ncmlkL3Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9zdHlsZS9pbmRleC5jc3M/ZWQ5MiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcmF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcmF0ZS9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3JhdGUvc3R5bGUvaW5kZXguY3NzPzY0MmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcm93L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtY2xhc3Nlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWluZGV4b2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1hbmltYXRpb24vZXMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1hbmltYXRpb24vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2dyaWQvc3R5bGUvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9yYXRlL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2FkanVzdEZvclZpZXdwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvYWxpZ24vYWxpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9hbGlnbi9hbGlnbkVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9hbGlnbi9hbGlnblBvaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvZ2V0QWxpZ25PZmZzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RvbS1hbGlnbi9lcy9nZXRFbEZ1dHVyZVBvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2dldE9mZnNldFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2dldFJlZ2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2dldFZpc2libGVSZWN0Rm9yRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvaXNBbmNlc3RvckZpeGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kb20tYWxpZ24vZXMvcHJvcGVydHlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZG9tLWFsaWduL2VzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9NZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbnF1aXJlLmpzL3NyYy9NZWRpYVF1ZXJ5RGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VucXVpcmUuanMvc3JjL1F1ZXJ5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5xdWlyZS5qcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29taXQuanMvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWFsaWduL2VzL0FsaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1hbGlnbi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtYWxpZ24vZXMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9BbmltYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL0FuaW1hdGVDaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtYW5pbWF0ZS9lcy9DaGlsZHJlblV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2VzL3V0aWwvYW5pbWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcmF0ZS9lcy9SYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1yYXRlL2VzL1N0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXJhdGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXJhdGUvZXMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9Db250ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL1Rvb2x0aXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9saWIvcGxhY2VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy9MYXp5UmVuZGVyQm94LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwSW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvQ29udGFpbmVyUmVuZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2VzL0RvbS9jb250YWlucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9lcy9Qb3J0YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlL2RheS9pbmRleC5qcyJdLCJuYW1lcyI6WyJEYXkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0I7Ozs7Ozs7Ozs7OztBQ2hCYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLFlBQVksbUJBQU8sQ0FBQyxzREFBUzs7QUFFN0I7QUFDQSw4Qjs7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWIsbUJBQU8sQ0FBQyxzRUFBdUI7O0FBRS9CLG1CQUFPLENBQUMsZ0ZBQTRCLEU7Ozs7Ozs7Ozs7OztBQ0p2Qjs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGlEQUFpRCxtQkFBTyxDQUFDLDhFQUFzQjs7QUFFL0Usc0NBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GLHVEQUF1RDtBQUN2RDtBQUNBLDhCOzs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCx3Q0FBd0MsbUJBQU8sQ0FBQyxzREFBWTs7QUFFNUQseUNBQXlDLG1CQUFPLENBQUMsc0RBQVk7O0FBRTdELHlDQUF5QyxtQkFBTyxDQUFDLGdFQUFjOztBQUUvRCxzQkFBc0IsbUJBQU8sQ0FBQyw0RUFBb0I7O0FBRWxELHNDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRix1Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLHNEQUFzRCxzSEFBc0gsNEJBQTRCLDBDQUEwQyxFQUFFLE9BQU8sd0JBQXdCLEVBQUUsRUFBRSxFQUFFLEVBQUUseUJBQXlCLGVBQWUs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRFQUFxQjtBQUM5QyxJQUFJLDRFQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRFQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFFQUFjO0FBQ2pDLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFFQUFjO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxvQ0FBb0MsdUVBQWdCO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtCQUFrQjtBQUMvQjtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFLGNBQWM7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFD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Ozs7Ozs7OzZCQUVYO0FBQ04sYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxNQUFPLEVBQVosRUFBaUIsUUFBUyxDQUExQjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ08sNERBQU0sT0FBUSxDQUFkLEVBQWtCLGNBQWxCO0FBRFA7QUFERjtBQURGLE9BREY7QUFTRDs7OztFQVo4QkMsZ0JBQU1DLGE7O2tCQUFsQkYsRyIsImZpbGUiOiJtYWluLjhmNDE4NDQwOWVlZTMxNzZiYmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudHVwbGUgPSB2b2lkIDA7XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ2MTc2MTY1L3dheXMtdG8tZ2V0LXN0cmluZy1saXRlcmFsLXR5cGUtb2YtYXJyYXktdmFsdWVzLXdpdGhvdXQtZW51bS1vdmVyaGVhZFxudmFyIHR1cGxlID0gZnVuY3Rpb24gdHVwbGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gYXJncztcbn07XG5cbmV4cG9ydHMudHVwbGUgPSB0dXBsZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2dyaWQgPSByZXF1aXJlKFwiLi4vZ3JpZFwiKTtcblxudmFyIF9kZWZhdWx0ID0gX2dyaWQuQ29sO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4LmNzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL2dyaWQvc3R5bGUvaW5kZXguY3NzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlUmVhY3RDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNvbnRleHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIFJvd0NvbnRleHQgPSAoMCwgX2NyZWF0ZVJlYWN0Q29udGV4dFtcImRlZmF1bHRcIl0pKHt9KTtcbnZhciBfZGVmYXVsdCA9IFJvd0NvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX1Jvd0NvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Jvd0NvbnRleHRcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIG9iamVjdE9yTnVtYmVyID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLm51bWJlcl0pO1xuXG52YXIgQ29sID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb2wsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbCgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKENvbCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICBfdGhpcy5yZW5kZXJDb2wgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcblxuICAgICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBzcGFuID0gcHJvcHMuc3BhbixcbiAgICAgICAgICBvcmRlciA9IHByb3BzLm9yZGVyLFxuICAgICAgICAgIG9mZnNldCA9IHByb3BzLm9mZnNldCxcbiAgICAgICAgICBwdXNoID0gcHJvcHMucHVzaCxcbiAgICAgICAgICBwdWxsID0gcHJvcHMucHVsbCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInNwYW5cIiwgXCJvcmRlclwiLCBcIm9mZnNldFwiLCBcInB1c2hcIiwgXCJwdWxsXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIl0pO1xuXG4gICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdjb2wnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIHNpemVDbGFzc09iaiA9IHt9O1xuICAgICAgWyd4cycsICdzbScsICdtZCcsICdsZycsICd4bCcsICd4eGwnXS5mb3JFYWNoKGZ1bmN0aW9uIChzaXplKSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgdmFyIHNpemVQcm9wcyA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJvcHNbc2l6ZV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgc2l6ZVByb3BzLnNwYW4gPSBwcm9wc1tzaXplXTtcbiAgICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHByb3BzW3NpemVdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBzaXplUHJvcHMgPSBwcm9wc1tzaXplXSB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBvdGhlcnNbc2l6ZV07XG4gICAgICAgIHNpemVDbGFzc09iaiA9IF9leHRlbmRzKHt9LCBzaXplQ2xhc3NPYmosIChfZXh0ZW5kczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLVwiKS5jb25jYXQoc2l6ZVByb3BzLnNwYW4pLCBzaXplUHJvcHMuc3BhbiAhPT0gdW5kZWZpbmVkKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLW9yZGVyLVwiKS5jb25jYXQoc2l6ZVByb3BzLm9yZGVyKSwgc2l6ZVByb3BzLm9yZGVyIHx8IHNpemVQcm9wcy5vcmRlciA9PT0gMCksIF9kZWZpbmVQcm9wZXJ0eShfZXh0ZW5kczIsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaXplLCBcIi1vZmZzZXQtXCIpLmNvbmNhdChzaXplUHJvcHMub2Zmc2V0KSwgc2l6ZVByb3BzLm9mZnNldCB8fCBzaXplUHJvcHMub2Zmc2V0ID09PSAwKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLXB1c2gtXCIpLmNvbmNhdChzaXplUHJvcHMucHVzaCksIHNpemVQcm9wcy5wdXNoIHx8IHNpemVQcm9wcy5wdXNoID09PSAwKSwgX2RlZmluZVByb3BlcnR5KF9leHRlbmRzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemUsIFwiLXB1bGwtXCIpLmNvbmNhdChzaXplUHJvcHMucHVsbCksIHNpemVQcm9wcy5wdWxsIHx8IHNpemVQcm9wcy5wdWxsID09PSAwKSwgX2V4dGVuZHMyKSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNwYW4pLCBzcGFuICE9PSB1bmRlZmluZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3JkZXItXCIpLmNvbmNhdChvcmRlciksIG9yZGVyKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9mZnNldC1cIikuY29uY2F0KG9mZnNldCksIG9mZnNldCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wdXNoLVwiKS5jb25jYXQocHVzaCksIHB1c2gpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcHVsbC1cIikuY29uY2F0KHB1bGwpLCBwdWxsKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUsIHNpemVDbGFzc09iaik7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfUm93Q29udGV4dFtcImRlZmF1bHRcIl0uQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgZ3V0dGVyID0gX3JlZjIuZ3V0dGVyO1xuICAgICAgICB2YXIgc3R5bGUgPSBvdGhlcnMuc3R5bGU7XG5cbiAgICAgICAgaWYgKGd1dHRlciA+IDApIHtcbiAgICAgICAgICBzdHlsZSA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBndXR0ZXIgLyAyLFxuICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBndXR0ZXIgLyAyXG4gICAgICAgICAgfSwgc3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIG90aGVycywge1xuICAgICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICAgICAgfSksIGNoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29sLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckNvbCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDb2w7XG5Db2wucHJvcFR5cGVzID0ge1xuICBzcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvcmRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgb2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICBwdXNoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBwdWxsOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgeHM6IG9iamVjdE9yTnVtYmVyLFxuICBzbTogb2JqZWN0T3JOdW1iZXIsXG4gIG1kOiBvYmplY3RPck51bWJlcixcbiAgbGc6IG9iamVjdE9yTnVtYmVyLFxuICB4bDogb2JqZWN0T3JOdW1iZXIsXG4gIHh4bDogb2JqZWN0T3JOdW1iZXJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3dcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3Jvd1tcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29sXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jb2xbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcblxudmFyIF9yb3cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3Jvd1wiKSk7XG5cbnZhciBfY29sID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb2xcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfUm93Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUm93Q29udGV4dFwiKSk7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG4vLyBtYXRjaE1lZGlhIHBvbHlmaWxsIGZvclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1dpY2t5TmlsbGlhbXMvZW5xdWlyZS5qcy9pc3N1ZXMvODJcbnZhciBlbnF1aXJlO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIG1hdGNoTWVkaWFQb2x5ZmlsbCA9IGZ1bmN0aW9uIG1hdGNoTWVkaWFQb2x5ZmlsbChtZWRpYVF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lZGlhOiBtZWRpYVF1ZXJ5LFxuICAgICAgbWF0Y2hlczogZmFsc2UsXG4gICAgICBhZGRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkTGlzdGVuZXIoKSB7fSxcbiAgICAgIHJlbW92ZUxpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcigpIHt9XG4gICAgfTtcbiAgfTtcblxuICB3aW5kb3cubWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhIHx8IG1hdGNoTWVkaWFQb2x5ZmlsbDtcbiAgZW5xdWlyZSA9IHJlcXVpcmUoJ2VucXVpcmUuanMnKTtcbn1cblxudmFyIFJvd0FsaWducyA9ICgwLCBfdHlwZS50dXBsZSkoJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJyk7XG52YXIgUm93SnVzdGlmeSA9ICgwLCBfdHlwZS50dXBsZSkoJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInLCAnc3BhY2UtYXJvdW5kJywgJ3NwYWNlLWJldHdlZW4nKTtcbnZhciByZXNwb25zaXZlQXJyYXkgPSBbJ3h4bCcsICd4bCcsICdsZycsICdtZCcsICdzbScsICd4cyddO1xudmFyIHJlc3BvbnNpdmVNYXAgPSB7XG4gIHhzOiAnKG1heC13aWR0aDogNTc1cHgpJyxcbiAgc206ICcobWluLXdpZHRoOiA1NzZweCknLFxuICBtZDogJyhtaW4td2lkdGg6IDc2OHB4KScsXG4gIGxnOiAnKG1pbi13aWR0aDogOTkycHgpJyxcbiAgeGw6ICcobWluLXdpZHRoOiAxMjAwcHgpJyxcbiAgeHhsOiAnKG1pbi13aWR0aDogMTYwMHB4KSdcbn07XG5cbnZhciBSb3cgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFJvdywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm93KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3cpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUm93KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNjcmVlbnM6IHt9XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlclJvdyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIHR5cGUgPSBfYS50eXBlLFxuICAgICAgICAgIGp1c3RpZnkgPSBfYS5qdXN0aWZ5LFxuICAgICAgICAgIGFsaWduID0gX2EuYWxpZ24sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICBvdGhlcnMgPSBfX3Jlc3QoX2EsIFtcInByZWZpeENsc1wiLCBcInR5cGVcIiwgXCJqdXN0aWZ5XCIsIFwiYWxpZ25cIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImNoaWxkcmVuXCJdKTtcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncm93JywgY3VzdG9taXplUHJlZml4Q2xzKTtcblxuICAgICAgdmFyIGd1dHRlciA9IF90aGlzLmdldEd1dHRlcigpO1xuXG4gICAgICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscywgIXR5cGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0eXBlKSwgdHlwZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHR5cGUsIFwiLVwiKS5jb25jYXQoanVzdGlmeSksIHR5cGUgJiYganVzdGlmeSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHR5cGUsIFwiLVwiKS5jb25jYXQoYWxpZ24pLCB0eXBlICYmIGFsaWduKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgICAgdmFyIHJvd1N0eWxlID0gZ3V0dGVyID4gMCA/IF9leHRlbmRzKHtcbiAgICAgICAgbWFyZ2luTGVmdDogZ3V0dGVyIC8gLTIsXG4gICAgICAgIG1hcmdpblJpZ2h0OiBndXR0ZXIgLyAtMlxuICAgICAgfSwgc3R5bGUpIDogc3R5bGU7XG5cbiAgICAgIHZhciBvdGhlclByb3BzID0gX2V4dGVuZHMoe30sIG90aGVycyk7XG5cbiAgICAgIGRlbGV0ZSBvdGhlclByb3BzLmd1dHRlcjtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9Sb3dDb250ZXh0W1wiZGVmYXVsdFwiXS5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIGd1dHRlcjogZ3V0dGVyXG4gICAgICAgIH1cbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICBzdHlsZTogcm93U3R5bGVcbiAgICAgIH0pLCBjaGlsZHJlbikpO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUm93LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgICByZXR1cm4gZW5xdWlyZS5yZWdpc3RlcihyZXNwb25zaXZlTWFwW3NjcmVlbl0sIHtcbiAgICAgICAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2goKSB7XG4gICAgICAgICAgICBpZiAoX3R5cGVvZihfdGhpczIucHJvcHMuZ3V0dGVyKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjcmVlbnM6IF9leHRlbmRzKHt9LCBwcmV2U3RhdGUuc2NyZWVucywgX2RlZmluZVByb3BlcnR5KHt9LCBzY3JlZW4sIHRydWUpKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1bm1hdGNoOiBmdW5jdGlvbiB1bm1hdGNoKCkge1xuICAgICAgICAgICAgaWYgKF90eXBlb2YoX3RoaXMyLnByb3BzLmd1dHRlcikgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBzY3JlZW5zOiBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLnNjcmVlbnMsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2NyZWVuLCBmYWxzZSkpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIEtlZXAgYSBlbXB0eSBkZXN0b3J5IHRvIGF2b2lkIHRyaWdnZXJpbmcgdW5tYXRjaCB3aGVuIHVucmVnaXN0ZXJcbiAgICAgICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge31cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoZnVuY3Rpb24gKHNjcmVlbikge1xuICAgICAgICByZXR1cm4gZW5xdWlyZS51bnJlZ2lzdGVyKHJlc3BvbnNpdmVNYXBbc2NyZWVuXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0R3V0dGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEd1dHRlcigpIHtcbiAgICAgIHZhciBndXR0ZXIgPSB0aGlzLnByb3BzLmd1dHRlcjtcblxuICAgICAgaWYgKF90eXBlb2YoZ3V0dGVyKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNwb25zaXZlQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgYnJlYWtwb2ludCA9IHJlc3BvbnNpdmVBcnJheVtpXTtcblxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnNjcmVlbnNbYnJlYWtwb2ludF0gJiYgZ3V0dGVyW2JyZWFrcG9pbnRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBndXR0ZXJbYnJlYWtwb2ludF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBndXR0ZXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyUm93KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUm93O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJvdztcblJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGd1dHRlcjogMFxufTtcblJvdy5wcm9wVHlwZXMgPSB7XG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2ZsZXgnXSksXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoUm93QWxpZ25zKSxcbiAganVzdGlmeTogUHJvcFR5cGVzLm9uZU9mKFJvd0p1c3RpZnkpLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgZ3V0dGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZ1xufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmNSYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtcmF0ZVwiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX2ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9pY29uXCIpKTtcblxudmFyIF90b29sdGlwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdG9vbHRpcFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTsgaWYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IH0gbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgUmF0ZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmF0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmF0ZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmF0ZSk7XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihSYXRlKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLnNhdmVSYXRlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnJjUmF0ZSA9IG5vZGU7XG4gICAgfTtcblxuICAgIF90aGlzLmNoYXJhY3RlclJlbmRlciA9IGZ1bmN0aW9uIChub2RlLCBfcmVmKSB7XG4gICAgICB2YXIgaW5kZXggPSBfcmVmLmluZGV4O1xuICAgICAgdmFyIHRvb2x0aXBzID0gX3RoaXMucHJvcHMudG9vbHRpcHM7XG4gICAgICBpZiAoIXRvb2x0aXBzKSByZXR1cm4gbm9kZTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF90b29sdGlwW1wiZGVmYXVsdFwiXSwge1xuICAgICAgICB0aXRsZTogdG9vbHRpcHNbaW5kZXhdXG4gICAgICB9LCBub2RlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyUmF0ZSA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYyLmdldFByZWZpeENscztcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCJdKTtcblxuICAgICAgdmFyIHJhdGVQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHJlc3RQcm9wcywgWyd0b29sdGlwcyddKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9yY1JhdGVbXCJkZWZhdWx0XCJdLCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogX3RoaXMuc2F2ZVJhdGUsXG4gICAgICAgIGNoYXJhY3RlclJlbmRlcjogX3RoaXMuY2hhcmFjdGVyUmVuZGVyXG4gICAgICB9LCByYXRlUHJvcHMsIHtcbiAgICAgICAgcHJlZml4Q2xzOiBnZXRQcmVmaXhDbHMoJ3JhdGUnLCBwcmVmaXhDbHMpXG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSYXRlLCBbe1xuICAgIGtleTogXCJmb2N1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMucmNSYXRlLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHRoaXMucmNSYXRlLmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJSYXRlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUmF0ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSYXRlO1xuUmF0ZS5wcm9wVHlwZXMgPSB7XG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hhcmFjdGVyOiBQcm9wVHlwZXMubm9kZVxufTtcblJhdGUuZGVmYXVsdFByb3BzID0ge1xuICBjaGFyYWN0ZXI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoX2ljb25bXCJkZWZhdWx0XCJdLCB7XG4gICAgdHlwZTogXCJzdGFyXCIsXG4gICAgdGhlbWU6IFwiZmlsbGVkXCJcbiAgfSlcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5jc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4LmNzc1wiKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZ3JpZCA9IHJlcXVpcmUoXCIuLi9ncmlkXCIpO1xuXG52YXIgX2RlZmF1bHQgPSBfZ3JpZC5Sb3c7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXguY3NzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vZ3JpZC9zdHlsZS9pbmRleC5jc3NcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdExpZmVjeWNsZXNDb21wYXQgPSByZXF1aXJlKFwicmVhY3QtbGlmZWN5Y2xlcy1jb21wYXRcIik7XG5cbnZhciBfcmNUb29sdGlwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdG9vbHRpcFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3BsYWNlbWVudHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BsYWNlbWVudHNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDoge307IGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSB9IG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxudmFyIHNwbGl0T2JqZWN0ID0gZnVuY3Rpb24gc3BsaXRPYmplY3Qob2JqLCBrZXlzKSB7XG4gIHZhciBwaWNrZWQgPSB7fTtcblxuICB2YXIgb21pdHRlZCA9IF9leHRlbmRzKHt9LCBvYmopO1xuXG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKG9iaiAmJiBrZXkgaW4gb2JqKSB7XG4gICAgICBwaWNrZWRba2V5XSA9IG9ialtrZXldO1xuICAgICAgZGVsZXRlIG9taXR0ZWRba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHBpY2tlZDogcGlja2VkLFxuICAgIG9taXR0ZWQ6IG9taXR0ZWRcbiAgfTtcbn07XG5cbnZhciBUb29sdGlwID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUb29sdGlwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb29sdGlwKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvb2x0aXApO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoVG9vbHRpcCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMub25WaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gKHZpc2libGUpIHtcbiAgICAgIHZhciBvblZpc2libGVDaGFuZ2UgPSBfdGhpcy5wcm9wcy5vblZpc2libGVDaGFuZ2U7XG5cbiAgICAgIGlmICghKCd2aXNpYmxlJyBpbiBfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHZpc2libGU6IF90aGlzLmlzTm9UaXRsZSgpID8gZmFsc2UgOiB2aXNpYmxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob25WaXNpYmxlQ2hhbmdlICYmICFfdGhpcy5pc05vVGl0bGUoKSkge1xuICAgICAgICBvblZpc2libGVDaGFuZ2UodmlzaWJsZSk7XG4gICAgICB9XG4gICAgfTsgLy8g5Yqo5oCB6K6+572u5Yqo55S754K5XG5cblxuICAgIF90aGlzLm9uUG9wdXBBbGlnbiA9IGZ1bmN0aW9uIChkb21Ob2RlLCBhbGlnbikge1xuICAgICAgdmFyIHBsYWNlbWVudHMgPSBfdGhpcy5nZXRQbGFjZW1lbnRzKCk7IC8vIOW9k+WJjei/lOWbnueahOS9jee9rlxuXG5cbiAgICAgIHZhciBwbGFjZW1lbnQgPSBPYmplY3Qua2V5cyhwbGFjZW1lbnRzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gcGxhY2VtZW50c1trZXldLnBvaW50c1swXSA9PT0gYWxpZ24ucG9pbnRzWzBdICYmIHBsYWNlbWVudHNba2V5XS5wb2ludHNbMV0gPT09IGFsaWduLnBvaW50c1sxXTtcbiAgICAgIH0pWzBdO1xuXG4gICAgICBpZiAoIXBsYWNlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIOagueaNruW9k+WJjeWdkOagh+iuvue9ruWKqOeUu+eCuVxuXG5cbiAgICAgIHZhciByZWN0ID0gZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciB0cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIGxlZnQ6ICc1MCUnXG4gICAgICB9O1xuXG4gICAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0JvdHRvbScpID49IDApIHtcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luLnRvcCA9IFwiXCIuY29uY2F0KHJlY3QuaGVpZ2h0IC0gYWxpZ24ub2Zmc2V0WzFdLCBcInB4XCIpO1xuICAgICAgfSBlbHNlIGlmIChwbGFjZW1lbnQuaW5kZXhPZignVG9wJykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignYm90dG9tJykgPj0gMCkge1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW4udG9wID0gXCJcIi5jb25jYXQoLWFsaWduLm9mZnNldFsxXSwgXCJweFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdsZWZ0JykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignUmlnaHQnKSA+PSAwKSB7XG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbi5sZWZ0ID0gXCJcIi5jb25jYXQocmVjdC53aWR0aCAtIGFsaWduLm9mZnNldFswXSwgXCJweFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoJ3JpZ2h0JykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignTGVmdCcpID49IDApIHtcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luLmxlZnQgPSBcIlwiLmNvbmNhdCgtYWxpZ24ub2Zmc2V0WzBdLCBcInB4XCIpO1xuICAgICAgfVxuXG4gICAgICBkb21Ob2RlLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwiXCIuY29uY2F0KHRyYW5zZm9ybU9yaWdpbi5sZWZ0LCBcIiBcIikuY29uY2F0KHRyYW5zZm9ybU9yaWdpbi50b3ApO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlVG9vbHRpcCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy50b29sdGlwID0gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyVG9vbHRpcCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyID0gX3JlZi5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcblxuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLFxuICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnByb3BzLFxuICAgICAgICAgIHN0YXRlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnN0YXRlO1xuXG4gICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgICAgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXksXG4gICAgICAgICAgb3BlbkNsYXNzTmFtZSA9IHByb3BzLm9wZW5DbGFzc05hbWUsXG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICBnZXRUb29sdGlwQ29udGFpbmVyID0gcHJvcHMuZ2V0VG9vbHRpcENvbnRhaW5lcjtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygndG9vbHRpcCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgdmlzaWJsZSA9IHN0YXRlLnZpc2libGU7IC8vIEhpZGUgdG9vbHRpcCB3aGVuIHRoZXJlIGlzIG5vIHRpdGxlXG5cbiAgICAgIGlmICghKCd2aXNpYmxlJyBpbiBwcm9wcykgJiYgX3RoaXMuaXNOb1RpdGxlKCkpIHtcbiAgICAgICAgdmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGQgPSBfdGhpcy5nZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlbihSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikgPyBjaGlsZHJlbiA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkcmVuKSk7XG5cbiAgICAgIHZhciBjaGlsZFByb3BzID0gY2hpbGQucHJvcHM7XG4gICAgICB2YXIgY2hpbGRDbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjaGlsZFByb3BzLmNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBvcGVuQ2xhc3NOYW1lIHx8IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItb3BlblwiKSwgdHJ1ZSkpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjVG9vbHRpcFtcImRlZmF1bHRcIl0sIF9leHRlbmRzKHt9LCBfdGhpcy5wcm9wcywge1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfHwgZ2V0VG9vbHRpcENvbnRhaW5lciB8fCBnZXRDb250ZXh0UG9wdXBDb250YWluZXIsXG4gICAgICAgIHJlZjogX3RoaXMuc2F2ZVRvb2x0aXAsXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBfdGhpcy5nZXRQbGFjZW1lbnRzKCksXG4gICAgICAgIG92ZXJsYXk6IG92ZXJsYXkgfHwgdGl0bGUgfHwgJycsXG4gICAgICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZTogX3RoaXMub25WaXNpYmxlQ2hhbmdlLFxuICAgICAgICBvblBvcHVwQWxpZ246IF90aGlzLm9uUG9wdXBBbGlnblxuICAgICAgfSksIHZpc2libGUgPyAoMCwgUmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgICBjbGFzc05hbWU6IGNoaWxkQ2xzXG4gICAgICB9KSA6IGNoaWxkKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2aXNpYmxlOiAhIXByb3BzLnZpc2libGUgfHwgISFwcm9wcy5kZWZhdWx0VmlzaWJsZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRvb2x0aXAsIFt7XG4gICAga2V5OiBcImdldFBvcHVwRG9tTm9kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3B1cERvbU5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy50b29sdGlwLmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQbGFjZW1lbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBsYWNlbWVudHMoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzID0gX3RoaXMkcHJvcHMuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgICAgYXJyb3dQb2ludEF0Q2VudGVyID0gX3RoaXMkcHJvcHMuYXJyb3dQb2ludEF0Q2VudGVyLFxuICAgICAgICAgIGF1dG9BZGp1c3RPdmVyZmxvdyA9IF90aGlzJHByb3BzLmF1dG9BZGp1c3RPdmVyZmxvdztcbiAgICAgIHJldHVybiBidWlsdGluUGxhY2VtZW50cyB8fCAoMCwgX3BsYWNlbWVudHNbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgIGFycm93UG9pbnRBdENlbnRlcjogYXJyb3dQb2ludEF0Q2VudGVyLFxuICAgICAgICB2ZXJ0aWNhbEFycm93U2hpZnQ6IDgsXG4gICAgICAgIGF1dG9BZGp1c3RPdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93XG4gICAgICB9KTtcbiAgICB9IC8vIEZpeCBUb29sdGlwIHdvbid0IGhpZGUgYXQgZGlzYWJsZWQgYnV0dG9uXG4gICAgLy8gbW91c2UgZXZlbnRzIGRvbid0IHRyaWdnZXIgYXQgZGlzYWJsZWQgYnV0dG9uIGluIENocm9tZVxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdG9vbHRpcC9pc3N1ZXMvMThcblxuICB9LCB7XG4gICAga2V5OiBcImdldERpc2FibGVkQ29tcGF0aWJsZUNoaWxkcmVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERpc2FibGVkQ29tcGF0aWJsZUNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICAgIGlmICgoZWxlbWVudC50eXBlLl9fQU5UX0JVVFRPTiB8fCBlbGVtZW50LnR5cGUgPT09ICdidXR0b24nKSAmJiBlbGVtZW50LnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIC8vIFBpY2sgc29tZSBsYXlvdXQgcmVsYXRlZCBzdHlsZSBwcm9wZXJ0aWVzIHVwIHRvIHNwYW5cbiAgICAgICAgLy8gUHJldmVudCBsYXlvdXQgYnVncyBsaWtlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzUyNTRcbiAgICAgICAgdmFyIF9zcGxpdE9iamVjdCA9IHNwbGl0T2JqZWN0KGVsZW1lbnQucHJvcHMuc3R5bGUsIFsncG9zaXRpb24nLCAnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJywgJ2Zsb2F0JywgJ2Rpc3BsYXknLCAnekluZGV4J10pLFxuICAgICAgICAgICAgcGlja2VkID0gX3NwbGl0T2JqZWN0LnBpY2tlZCxcbiAgICAgICAgICAgIG9taXR0ZWQgPSBfc3BsaXRPYmplY3Qub21pdHRlZDtcblxuICAgICAgICB2YXIgc3BhblN0eWxlID0gX2V4dGVuZHMoe1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgIH0sIHBpY2tlZCwge1xuICAgICAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgICAgICB3aWR0aDogZWxlbWVudC5wcm9wcy5ibG9jayA/ICcxMDAlJyA6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGJ1dHRvblN0eWxlID0gX2V4dGVuZHMoe30sIG9taXR0ZWQsIHtcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNoaWxkID0gKDAsIFJlYWN0LmNsb25lRWxlbWVudCkoZWxlbWVudCwge1xuICAgICAgICAgIHN0eWxlOiBidXR0b25TdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgc3R5bGU6IHNwYW5TdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGVsZW1lbnQucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgIH0sIGNoaWxkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzTm9UaXRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc05vVGl0bGUoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aXRsZSA9IF90aGlzJHByb3BzMi50aXRsZSxcbiAgICAgICAgICBvdmVybGF5ID0gX3RoaXMkcHJvcHMyLm92ZXJsYXk7XG4gICAgICByZXR1cm4gIXRpdGxlICYmICFvdmVybGF5OyAvLyBvdmVybGF5IGZvciBvbGQgdmVyc2lvbiBjb21wYXRpYmlsaXR5XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyVG9vbHRpcCk7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmICgndmlzaWJsZScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRvb2x0aXA7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRvb2x0aXAuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICB0cmFuc2l0aW9uTmFtZTogJ3pvb20tYmlnLWZhc3QnLFxuICBtb3VzZUVudGVyRGVsYXk6IDAuMSxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIGFycm93UG9pbnRBdENlbnRlcjogZmFsc2UsXG4gIGF1dG9BZGp1c3RPdmVyZmxvdzogdHJ1ZVxufTtcbigwLCBfcmVhY3RMaWZlY3ljbGVzQ29tcGF0LnBvbHlmaWxsKShUb29sdGlwKTtcbnZhciBfZGVmYXVsdCA9IFRvb2x0aXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRPdmVyZmxvd09wdGlvbnMgPSBnZXRPdmVyZmxvd09wdGlvbnM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldFBsYWNlbWVudHM7XG5cbnZhciBfcGxhY2VtZW50cyA9IHJlcXVpcmUoXCJyYy10b29sdGlwL2xpYi9wbGFjZW1lbnRzXCIpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG52YXIgYXV0b0FkanVzdE92ZXJmbG93RW5hYmxlZCA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3dEaXNhYmxlZCA9IHtcbiAgYWRqdXN0WDogMCxcbiAgYWRqdXN0WTogMFxufTtcbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5cbmZ1bmN0aW9uIGdldE92ZXJmbG93T3B0aW9ucyhhdXRvQWRqdXN0T3ZlcmZsb3cpIHtcbiAgaWYgKHR5cGVvZiBhdXRvQWRqdXN0T3ZlcmZsb3cgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBhdXRvQWRqdXN0T3ZlcmZsb3cgPyBhdXRvQWRqdXN0T3ZlcmZsb3dFbmFibGVkIDogYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQ7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkLCBhdXRvQWRqdXN0T3ZlcmZsb3cpO1xufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnRzKCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIF9jb25maWckYXJyb3dXaWR0aCA9IGNvbmZpZy5hcnJvd1dpZHRoLFxuICAgICAgYXJyb3dXaWR0aCA9IF9jb25maWckYXJyb3dXaWR0aCA9PT0gdm9pZCAwID8gNSA6IF9jb25maWckYXJyb3dXaWR0aCxcbiAgICAgIF9jb25maWckaG9yaXpvbnRhbEFyciA9IGNvbmZpZy5ob3Jpem9udGFsQXJyb3dTaGlmdCxcbiAgICAgIGhvcml6b250YWxBcnJvd1NoaWZ0ID0gX2NvbmZpZyRob3Jpem9udGFsQXJyID09PSB2b2lkIDAgPyAxNiA6IF9jb25maWckaG9yaXpvbnRhbEFycixcbiAgICAgIF9jb25maWckdmVydGljYWxBcnJvdyA9IGNvbmZpZy52ZXJ0aWNhbEFycm93U2hpZnQsXG4gICAgICB2ZXJ0aWNhbEFycm93U2hpZnQgPSBfY29uZmlnJHZlcnRpY2FsQXJyb3cgPT09IHZvaWQgMCA/IDEyIDogX2NvbmZpZyR2ZXJ0aWNhbEFycm93LFxuICAgICAgX2NvbmZpZyRhdXRvQWRqdXN0T3ZlID0gY29uZmlnLmF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICAgIGF1dG9BZGp1c3RPdmVyZmxvdyA9IF9jb25maWckYXV0b0FkanVzdE92ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jb25maWckYXV0b0FkanVzdE92ZTtcbiAgdmFyIHBsYWNlbWVudE1hcCA9IHtcbiAgICBsZWZ0OiB7XG4gICAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCAwXVxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgICAgb2Zmc2V0OiBbNCwgMF1cbiAgICB9LFxuICAgIHRvcDoge1xuICAgICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgICBvZmZzZXQ6IFswLCAtNF1cbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFswLCA0XVxuICAgIH0sXG4gICAgdG9wTGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ2JsJywgJ3RjJ10sXG4gICAgICBvZmZzZXQ6IFstKGhvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCksIC00XVxuICAgIH0sXG4gICAgbGVmdFRvcDoge1xuICAgICAgcG9pbnRzOiBbJ3RyJywgJ2NsJ10sXG4gICAgICBvZmZzZXQ6IFstNCwgLSh2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKV1cbiAgICB9LFxuICAgIHRvcFJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsnYnInLCAndGMnXSxcbiAgICAgIG9mZnNldDogW2hvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCwgLTRdXG4gICAgfSxcbiAgICByaWdodFRvcDoge1xuICAgICAgcG9pbnRzOiBbJ3RsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCAtKHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpXVxuICAgIH0sXG4gICAgYm90dG9tUmlnaHQ6IHtcbiAgICAgIHBvaW50czogWyd0cicsICdiYyddLFxuICAgICAgb2Zmc2V0OiBbaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoLCA0XVxuICAgIH0sXG4gICAgcmlnaHRCb3R0b206IHtcbiAgICAgIHBvaW50czogWydibCcsICdjciddLFxuICAgICAgb2Zmc2V0OiBbNCwgdmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aF1cbiAgICB9LFxuICAgIGJvdHRvbUxlZnQ6IHtcbiAgICAgIHBvaW50czogWyd0bCcsICdiYyddLFxuICAgICAgb2Zmc2V0OiBbLShob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpLCA0XVxuICAgIH0sXG4gICAgbGVmdEJvdHRvbToge1xuICAgICAgcG9pbnRzOiBbJ2JyJywgJ2NsJ10sXG4gICAgICBvZmZzZXQ6IFstNCwgdmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aF1cbiAgICB9XG4gIH07XG4gIE9iamVjdC5rZXlzKHBsYWNlbWVudE1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcGxhY2VtZW50TWFwW2tleV0gPSBjb25maWcuYXJyb3dQb2ludEF0Q2VudGVyID8gX2V4dGVuZHMoe30sIHBsYWNlbWVudE1hcFtrZXldLCB7XG4gICAgICBvdmVyZmxvdzogZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdyksXG4gICAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICAgIH0pIDogX2V4dGVuZHMoe30sIF9wbGFjZW1lbnRzLnBsYWNlbWVudHNba2V5XSwge1xuICAgICAgb3ZlcmZsb3c6IGdldE92ZXJmbG93T3B0aW9ucyhhdXRvQWRqdXN0T3ZlcmZsb3cpXG4gICAgfSk7XG4gICAgcGxhY2VtZW50TWFwW2tleV0uaWdub3JlU2hha2UgPSB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIHBsYWNlbWVudE1hcDtcbn0iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudHJ5IHtcbiAgdmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xufSBjYXRjaCAoZXJyKSB7XG4gIHZhciBpbmRleCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmRleG9mJyk7XG59XG5cbi8qKlxuICogV2hpdGVzcGFjZSByZWdleHAuXG4gKi9cblxudmFyIHJlID0gL1xccysvO1xuXG4vKipcbiAqIHRvU3RyaW5nIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdyYXAgYGVsYCBpbiBhIGBDbGFzc0xpc3RgLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCl7XG4gIHJldHVybiBuZXcgQ2xhc3NMaXN0KGVsKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBDbGFzc0xpc3QgZm9yIGBlbGAuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQ2xhc3NMaXN0KGVsKSB7XG4gIGlmICghZWwgfHwgIWVsLm5vZGVUeXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBIERPTSBlbGVtZW50IHJlZmVyZW5jZSBpcyByZXF1aXJlZCcpO1xuICB9XG4gIHRoaXMuZWwgPSBlbDtcbiAgdGhpcy5saXN0ID0gZWwuY2xhc3NMaXN0O1xufVxuXG4vKipcbiAqIEFkZCBjbGFzcyBgbmFtZWAgaWYgbm90IGFscmVhZHkgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG5hbWUpe1xuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5hZGQobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICghfmkpIGFyci5wdXNoKG5hbWUpO1xuICB0aGlzLmVsLmNsYXNzTmFtZSA9IGFyci5qb2luKCcgJyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgY2xhc3MgYG5hbWVgIHdoZW4gcHJlc2VudCwgb3JcbiAqIHBhc3MgYSByZWd1bGFyIGV4cHJlc3Npb24gdG8gcmVtb3ZlXG4gKiBhbnkgd2hpY2ggbWF0Y2guXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8UmVnRXhwfSBuYW1lXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkNsYXNzTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24obmFtZSl7XG4gIGlmICgnW29iamVjdCBSZWdFeHBdJyA9PSB0b1N0cmluZy5jYWxsKG5hbWUpKSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlTWF0Y2hpbmcobmFtZSk7XG4gIH1cblxuICAvLyBjbGFzc0xpc3RcbiAgaWYgKHRoaXMubGlzdCkge1xuICAgIHRoaXMubGlzdC5yZW1vdmUobmFtZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBmYWxsYmFja1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICB2YXIgaSA9IGluZGV4KGFyciwgbmFtZSk7XG4gIGlmICh+aSkgYXJyLnNwbGljZShpLCAxKTtcbiAgdGhpcy5lbC5jbGFzc05hbWUgPSBhcnIuam9pbignICcpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBjbGFzc2VzIG1hdGNoaW5nIGByZWAuXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlXG4gKiBAcmV0dXJuIHtDbGFzc0xpc3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnJlbW92ZU1hdGNoaW5nID0gZnVuY3Rpb24ocmUpe1xuICB2YXIgYXJyID0gdGhpcy5hcnJheSgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZS50ZXN0KGFycltpXSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlKGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUb2dnbGUgY2xhc3MgYG5hbWVgLCBjYW4gZm9yY2Ugc3RhdGUgdmlhIGBmb3JjZWAuXG4gKlxuICogRm9yIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBjbGFzc0xpc3QsIGJ1dCBkbyBub3Qgc3VwcG9ydCBgZm9yY2VgIHlldCxcbiAqIHRoZSBtaXN0YWtlIHdpbGwgYmUgZGV0ZWN0ZWQgYW5kIGNvcnJlY3RlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtCb29sZWFufSBmb3JjZVxuICogQHJldHVybiB7Q2xhc3NMaXN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKG5hbWUsIGZvcmNlKXtcbiAgLy8gY2xhc3NMaXN0XG4gIGlmICh0aGlzLmxpc3QpIHtcbiAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIGZvcmNlKSB7XG4gICAgICBpZiAoZm9yY2UgIT09IHRoaXMubGlzdC50b2dnbGUobmFtZSwgZm9yY2UpKSB7XG4gICAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7IC8vIHRvZ2dsZSBhZ2FpbiB0byBjb3JyZWN0XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdC50b2dnbGUobmFtZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gZmFsbGJhY2tcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT09IHR5cGVvZiBmb3JjZSkge1xuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIHRoaXMucmVtb3ZlKG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZChuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoaXMuaGFzKG5hbWUpKSB7XG4gICAgICB0aGlzLnJlbW92ZShuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGQobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBjbGFzc2VzLlxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5DbGFzc0xpc3QucHJvdG90eXBlLmFycmF5ID0gZnVuY3Rpb24oKXtcbiAgdmFyIGNsYXNzTmFtZSA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xuICB2YXIgc3RyID0gY2xhc3NOYW1lLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKTtcbiAgdmFyIGFyciA9IHN0ci5zcGxpdChyZSk7XG4gIGlmICgnJyA9PT0gYXJyWzBdKSBhcnIuc2hpZnQoKTtcbiAgcmV0dXJuIGFycjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgY2xhc3MgYG5hbWVgIGlzIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0NsYXNzTGlzdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQ2xhc3NMaXN0LnByb3RvdHlwZS5oYXMgPVxuQ2xhc3NMaXN0LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gdGhpcy5saXN0XG4gICAgPyB0aGlzLmxpc3QuY29udGFpbnMobmFtZSlcbiAgICA6ICEhIH5pbmRleCh0aGlzLmFycmF5KCksIG5hbWUpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoYXJyLmluZGV4T2YpIHJldHVybiBhcnIuaW5kZXhPZihvYmopO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufTsiLCJ2YXIgU1RBUlRfRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25zdGFydDoge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uc3RhcnQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uU3RhcnQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uU3RhcnQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25TdGFydCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uU3RhcnQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uc3RhcnQ6IHtcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25zdGFydCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvblN0YXJ0JyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvblN0YXJ0JyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uU3RhcnQnXG4gIH1cbn07XG5cbnZhciBFTkRfRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBzdGFydEV2ZW50cyA9IFtdO1xudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBTVEFSVF9FVkVOVF9OQU1FX01BUC5hbmltYXRpb25zdGFydC5hbmltYXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICB9XG5cbiAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBTVEFSVF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uc3RhcnQudHJhbnNpdGlvbjtcbiAgICBkZWxldGUgRU5EX0VWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoRVZFTlRfTkFNRV9NQVAsIGV2ZW50cykge1xuICAgIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICAgIGlmIChFVkVOVF9OQU1FX01BUC5oYXNPd25Qcm9wZXJ0eShiYXNlRXZlbnROYW1lKSkge1xuICAgICAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKFNUQVJUX0VWRU5UX05BTUVfTUFQLCBzdGFydEV2ZW50cyk7XG4gIHByb2Nlc3MoRU5EX0VWRU5UX05BTUVfTUFQLCBlbmRFdmVudHMpO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBUcmFuc2l0aW9uRXZlbnRzID0ge1xuICAvLyBTdGFydCBldmVudHNcbiAgc3RhcnRFdmVudHM6IHN0YXJ0RXZlbnRzLFxuXG4gIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3RhcnRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBzdGFydEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChzdGFydEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3RhcnRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBzdGFydEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuXG4gIC8vIEVuZCBldmVudHNcbiAgZW5kRXZlbnRzOiBlbmRFdmVudHMsXG5cbiAgYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uRXZlbnRzOyIsImltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnY29tcG9uZW50LWNsYXNzZXMnO1xuXG52YXIgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBFdmVudC5lbmRFdmVudHMubGVuZ3RoICE9PSAwO1xudmFyIGNhcGl0YWxQcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJyxcbi8vIG1zIGlzIHNwZWNpYWwgLi4uLiAhXG4nbXMnXTtcbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW8tJywgJ21zLScsICcnXTtcblxuZnVuY3Rpb24gZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCBuYW1lKSB7XG4gIC8vIG9sZCBmZiBuZWVkIG51bGwsIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvZ2V0Q29tcHV0ZWRTdHlsZVxuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlLCBudWxsKTtcbiAgdmFyIHJldCA9ICcnO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmV0ID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcmVmaXhlc1tpXSArIG5hbWUpO1xuICAgIGlmIChyZXQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpIHtcbiAgaWYgKGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkKSB7XG4gICAgdmFyIHRyYW5zaXRpb25EZWxheSA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAndHJhbnNpdGlvbi1kZWxheScpKSB8fCAwO1xuICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ3RyYW5zaXRpb24tZHVyYXRpb24nKSkgfHwgMDtcbiAgICB2YXIgYW5pbWF0aW9uRGVsYXkgPSBwYXJzZUZsb2F0KGdldFN0eWxlUHJvcGVydHkobm9kZSwgJ2FuaW1hdGlvbi1kZWxheScpKSB8fCAwO1xuICAgIHZhciBhbmltYXRpb25EdXJhdGlvbiA9IHBhcnNlRmxvYXQoZ2V0U3R5bGVQcm9wZXJ0eShub2RlLCAnYW5pbWF0aW9uLWR1cmF0aW9uJykpIHx8IDA7XG4gICAgdmFyIHRpbWUgPSBNYXRoLm1heCh0cmFuc2l0aW9uRHVyYXRpb24gKyB0cmFuc2l0aW9uRGVsYXksIGFuaW1hdGlvbkR1cmF0aW9uICsgYW5pbWF0aW9uRGVsYXkpO1xuICAgIC8vIHNvbWV0aW1lcywgYnJvd3NlciBidWdcbiAgICBub2RlLnJjRW5kQW5pbVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IG51bGw7XG4gICAgICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgICAgIG5vZGUucmNFbmRMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH0sIHRpbWUgKiAxMDAwICsgMjAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhckJyb3dzZXJCdWdUaW1lb3V0KG5vZGUpIHtcbiAgaWYgKG5vZGUucmNFbmRBbmltVGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dChub2RlLnJjRW5kQW5pbVRpbWVvdXQpO1xuICAgIG5vZGUucmNFbmRBbmltVGltZW91dCA9IG51bGw7XG4gIH1cbn1cblxudmFyIGNzc0FuaW1hdGlvbiA9IGZ1bmN0aW9uIGNzc0FuaW1hdGlvbihub2RlLCB0cmFuc2l0aW9uTmFtZSwgZW5kQ2FsbGJhY2spIHtcbiAgdmFyIG5hbWVJc09iaiA9ICh0eXBlb2YgdHJhbnNpdGlvbk5hbWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRyYW5zaXRpb25OYW1lKSkgPT09ICdvYmplY3QnO1xuICB2YXIgY2xhc3NOYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWUubmFtZSA6IHRyYW5zaXRpb25OYW1lO1xuICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWUuYWN0aXZlIDogdHJhbnNpdGlvbk5hbWUgKyAnLWFjdGl2ZSc7XG4gIHZhciBlbmQgPSBlbmRDYWxsYmFjaztcbiAgdmFyIHN0YXJ0ID0gdm9pZCAwO1xuICB2YXIgYWN0aXZlID0gdm9pZCAwO1xuICB2YXIgbm9kZUNsYXNzZXMgPSBjbGFzc2VzKG5vZGUpO1xuXG4gIGlmIChlbmRDYWxsYmFjayAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZW5kQ2FsbGJhY2spID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIGVuZCA9IGVuZENhbGxiYWNrLmVuZDtcbiAgICBzdGFydCA9IGVuZENhbGxiYWNrLnN0YXJ0O1xuICAgIGFjdGl2ZSA9IGVuZENhbGxiYWNrLmFjdGl2ZTtcbiAgfVxuXG4gIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICBub2RlLnJjRW5kTGlzdGVuZXIoKTtcbiAgfVxuXG4gIG5vZGUucmNFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUgJiYgZS50YXJnZXQgIT09IG5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5yY0FuaW1UaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQobm9kZS5yY0FuaW1UaW1lb3V0KTtcbiAgICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJCcm93c2VyQnVnVGltZW91dChub2RlKTtcblxuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShjbGFzc05hbWUpO1xuICAgIG5vZGVDbGFzc2VzLnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuXG4gICAgRXZlbnQucmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuICAgIG5vZGUucmNFbmRMaXN0ZW5lciA9IG51bGw7XG5cbiAgICAvLyBVc3VhbGx5IHRoaXMgb3B0aW9uYWwgZW5kIGlzIHVzZWQgZm9yIGluZm9ybWluZyBhbiBvd25lciBvZlxuICAgIC8vIGEgbGVhdmUgYW5pbWF0aW9uIGFuZCB0ZWxsaW5nIGl0IHRvIHJlbW92ZSB0aGUgY2hpbGQuXG4gICAgaWYgKGVuZCkge1xuICAgICAgZW5kKCk7XG4gICAgfVxuICB9O1xuXG4gIEV2ZW50LmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgbm9kZS5yY0VuZExpc3RlbmVyKTtcblxuICBpZiAoc3RhcnQpIHtcbiAgICBzdGFydCgpO1xuICB9XG4gIG5vZGVDbGFzc2VzLmFkZChjbGFzc05hbWUpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgbm9kZUNsYXNzZXMuYWRkKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dChhY3RpdmUsIDApO1xuICAgIH1cbiAgICBmaXhCcm93c2VyQnlUaW1lb3V0KG5vZGUpO1xuICAgIC8vIDMwbXMgZm9yIGZpcmVmb3hcbiAgfSwgMzApO1xuXG4gIHJldHVybiB7XG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIGlmIChub2RlLnJjRW5kTGlzdGVuZXIpIHtcbiAgICAgICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuY3NzQW5pbWF0aW9uLnN0eWxlID0gZnVuY3Rpb24gKG5vZGUsIHN0eWxlLCBjYWxsYmFjaykge1xuICBpZiAobm9kZS5yY0VuZExpc3RlbmVyKSB7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyKCk7XG4gIH1cblxuICBub2RlLnJjRW5kTGlzdGVuZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG5vZGUucmNBbmltVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KG5vZGUucmNBbmltVGltZW91dCk7XG4gICAgICBub2RlLnJjQW5pbVRpbWVvdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJvd3NlckJ1Z1RpbWVvdXQobm9kZSk7XG5cbiAgICBFdmVudC5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIG5vZGUucmNFbmRMaXN0ZW5lcik7XG4gICAgbm9kZS5yY0VuZExpc3RlbmVyID0gbnVsbDtcblxuICAgIC8vIFVzdWFsbHkgdGhpcyBvcHRpb25hbCBjYWxsYmFjayBpcyB1c2VkIGZvciBpbmZvcm1pbmcgYW4gb3duZXIgb2ZcbiAgICAvLyBhIGxlYXZlIGFuaW1hdGlvbiBhbmQgdGVsbGluZyBpdCB0byByZW1vdmUgdGhlIGNoaWxkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH07XG5cbiAgRXZlbnQuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBub2RlLnJjRW5kTGlzdGVuZXIpO1xuXG4gIG5vZGUucmNBbmltVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHMgaW4gc3R5bGUpIHtcbiAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShzKSkge1xuICAgICAgICBub2RlLnN0eWxlW3NdID0gc3R5bGVbc107XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUucmNBbmltVGltZW91dCA9IG51bGw7XG4gICAgZml4QnJvd3NlckJ5VGltZW91dChub2RlKTtcbiAgfSwgMCk7XG59O1xuXG5jc3NBbmltYXRpb24uc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChub2RlLCBwLCB2YWx1ZSkge1xuICB2YXIgcHJvcGVydHkgPSBwO1xuICB2YXIgdiA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHYgPSBwcm9wZXJ0eTtcbiAgICBwcm9wZXJ0eSA9ICcnO1xuICB9XG4gIHByb3BlcnR5ID0gcHJvcGVydHkgfHwgJyc7XG4gIGNhcGl0YWxQcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBub2RlLnN0eWxlW3ByZWZpeCArICdUcmFuc2l0aW9uJyArIHByb3BlcnR5XSA9IHY7XG4gIH0pO1xufTtcblxuY3NzQW5pbWF0aW9uLmlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkID0gaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQ7XG5cbmV4cG9ydCB7IGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNzc0FuaW1hdGlvbjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xcbi5hbnQtcm93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgem9vbTogMTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYW50LXJvdzpiZWZvcmUsXFxuLmFudC1yb3c6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmFudC1yb3c6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5hbnQtcm93LWZsZXgge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICAtbXMtZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG59XFxuLmFudC1yb3ctZmxleDpiZWZvcmUsXFxuLmFudC1yb3ctZmxleDphZnRlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmFudC1yb3ctZmxleC1zdGFydCB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5hbnQtcm93LWZsZXgtY2VudGVyIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmFudC1yb3ctZmxleC1lbmQge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmFudC1yb3ctZmxleC1zcGFjZS1iZXR3ZWVuIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hbnQtcm93LWZsZXgtc3BhY2UtYXJvdW5kIHtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5hbnQtcm93LWZsZXgtdG9wIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLmFudC1yb3ctZmxleC1taWRkbGUge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYW50LXJvdy1mbGV4LWJvdHRvbSB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogZW5kO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4uYW50LWNvbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFudC1jb2wtMSxcXG4uYW50LWNvbC14cy0xLFxcbi5hbnQtY29sLXNtLTEsXFxuLmFudC1jb2wtbWQtMSxcXG4uYW50LWNvbC1sZy0xLFxcbi5hbnQtY29sLTIsXFxuLmFudC1jb2wteHMtMixcXG4uYW50LWNvbC1zbS0yLFxcbi5hbnQtY29sLW1kLTIsXFxuLmFudC1jb2wtbGctMixcXG4uYW50LWNvbC0zLFxcbi5hbnQtY29sLXhzLTMsXFxuLmFudC1jb2wtc20tMyxcXG4uYW50LWNvbC1tZC0zLFxcbi5hbnQtY29sLWxnLTMsXFxuLmFudC1jb2wtNCxcXG4uYW50LWNvbC14cy00LFxcbi5hbnQtY29sLXNtLTQsXFxuLmFudC1jb2wtbWQtNCxcXG4uYW50LWNvbC1sZy00LFxcbi5hbnQtY29sLTUsXFxuLmFudC1jb2wteHMtNSxcXG4uYW50LWNvbC1zbS01LFxcbi5hbnQtY29sLW1kLTUsXFxuLmFudC1jb2wtbGctNSxcXG4uYW50LWNvbC02LFxcbi5hbnQtY29sLXhzLTYsXFxuLmFudC1jb2wtc20tNixcXG4uYW50LWNvbC1tZC02LFxcbi5hbnQtY29sLWxnLTYsXFxuLmFudC1jb2wtNyxcXG4uYW50LWNvbC14cy03LFxcbi5hbnQtY29sLXNtLTcsXFxuLmFudC1jb2wtbWQtNyxcXG4uYW50LWNvbC1sZy03LFxcbi5hbnQtY29sLTgsXFxuLmFudC1jb2wteHMtOCxcXG4uYW50LWNvbC1zbS04LFxcbi5hbnQtY29sLW1kLTgsXFxuLmFudC1jb2wtbGctOCxcXG4uYW50LWNvbC05LFxcbi5hbnQtY29sLXhzLTksXFxuLmFudC1jb2wtc20tOSxcXG4uYW50LWNvbC1tZC05LFxcbi5hbnQtY29sLWxnLTksXFxuLmFudC1jb2wtMTAsXFxuLmFudC1jb2wteHMtMTAsXFxuLmFudC1jb2wtc20tMTAsXFxuLmFudC1jb2wtbWQtMTAsXFxuLmFudC1jb2wtbGctMTAsXFxuLmFudC1jb2wtMTEsXFxuLmFudC1jb2wteHMtMTEsXFxuLmFudC1jb2wtc20tMTEsXFxuLmFudC1jb2wtbWQtMTEsXFxuLmFudC1jb2wtbGctMTEsXFxuLmFudC1jb2wtMTIsXFxuLmFudC1jb2wteHMtMTIsXFxuLmFudC1jb2wtc20tMTIsXFxuLmFudC1jb2wtbWQtMTIsXFxuLmFudC1jb2wtbGctMTIsXFxuLmFudC1jb2wtMTMsXFxuLmFudC1jb2wteHMtMTMsXFxuLmFudC1jb2wtc20tMTMsXFxuLmFudC1jb2wtbWQtMTMsXFxuLmFudC1jb2wtbGctMTMsXFxuLmFudC1jb2wtMTQsXFxuLmFudC1jb2wteHMtMTQsXFxuLmFudC1jb2wtc20tMTQsXFxuLmFudC1jb2wtbWQtMTQsXFxuLmFudC1jb2wtbGctMTQsXFxuLmFudC1jb2wtMTUsXFxuLmFudC1jb2wteHMtMTUsXFxuLmFudC1jb2wtc20tMTUsXFxuLmFudC1jb2wtbWQtMTUsXFxuLmFudC1jb2wtbGctMTUsXFxuLmFudC1jb2wtMTYsXFxuLmFudC1jb2wteHMtMTYsXFxuLmFudC1jb2wtc20tMTYsXFxuLmFudC1jb2wtbWQtMTYsXFxuLmFudC1jb2wtbGctMTYsXFxuLmFudC1jb2wtMTcsXFxuLmFudC1jb2wteHMtMTcsXFxuLmFudC1jb2wtc20tMTcsXFxuLmFudC1jb2wtbWQtMTcsXFxuLmFudC1jb2wtbGctMTcsXFxuLmFudC1jb2wtMTgsXFxuLmFudC1jb2wteHMtMTgsXFxuLmFudC1jb2wtc20tMTgsXFxuLmFudC1jb2wtbWQtMTgsXFxuLmFudC1jb2wtbGctMTgsXFxuLmFudC1jb2wtMTksXFxuLmFudC1jb2wteHMtMTksXFxuLmFudC1jb2wtc20tMTksXFxuLmFudC1jb2wtbWQtMTksXFxuLmFudC1jb2wtbGctMTksXFxuLmFudC1jb2wtMjAsXFxuLmFudC1jb2wteHMtMjAsXFxuLmFudC1jb2wtc20tMjAsXFxuLmFudC1jb2wtbWQtMjAsXFxuLmFudC1jb2wtbGctMjAsXFxuLmFudC1jb2wtMjEsXFxuLmFudC1jb2wteHMtMjEsXFxuLmFudC1jb2wtc20tMjEsXFxuLmFudC1jb2wtbWQtMjEsXFxuLmFudC1jb2wtbGctMjEsXFxuLmFudC1jb2wtMjIsXFxuLmFudC1jb2wteHMtMjIsXFxuLmFudC1jb2wtc20tMjIsXFxuLmFudC1jb2wtbWQtMjIsXFxuLmFudC1jb2wtbGctMjIsXFxuLmFudC1jb2wtMjMsXFxuLmFudC1jb2wteHMtMjMsXFxuLmFudC1jb2wtc20tMjMsXFxuLmFudC1jb2wtbWQtMjMsXFxuLmFudC1jb2wtbGctMjMsXFxuLmFudC1jb2wtMjQsXFxuLmFudC1jb2wteHMtMjQsXFxuLmFudC1jb2wtc20tMjQsXFxuLmFudC1jb2wtbWQtMjQsXFxuLmFudC1jb2wtbGctMjQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG59XFxuLmFudC1jb2wtMSxcXG4uYW50LWNvbC0yLFxcbi5hbnQtY29sLTMsXFxuLmFudC1jb2wtNCxcXG4uYW50LWNvbC01LFxcbi5hbnQtY29sLTYsXFxuLmFudC1jb2wtNyxcXG4uYW50LWNvbC04LFxcbi5hbnQtY29sLTksXFxuLmFudC1jb2wtMTAsXFxuLmFudC1jb2wtMTEsXFxuLmFudC1jb2wtMTIsXFxuLmFudC1jb2wtMTMsXFxuLmFudC1jb2wtMTQsXFxuLmFudC1jb2wtMTUsXFxuLmFudC1jb2wtMTYsXFxuLmFudC1jb2wtMTcsXFxuLmFudC1jb2wtMTgsXFxuLmFudC1jb2wtMTksXFxuLmFudC1jb2wtMjAsXFxuLmFudC1jb2wtMjEsXFxuLmFudC1jb2wtMjIsXFxuLmFudC1jb2wtMjMsXFxuLmFudC1jb2wtMjQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgLXdlYmtpdC1mbGV4OiAwIDAgYXV0bztcXG4gICAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcbn1cXG4uYW50LWNvbC0yNCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYW50LWNvbC1wdXNoLTI0IHtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcbi5hbnQtY29sLXB1bGwtMjQge1xcbiAgcmlnaHQ6IDEwMCU7XFxufVxcbi5hbnQtY29sLW9mZnNldC0yNCB7XFxuICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuLmFudC1jb2wtb3JkZXItMjQge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjU7XFxuICAtd2Via2l0LW9yZGVyOiAyNDtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMjQ7XFxuICAgICAgICAgIG9yZGVyOiAyNDtcXG59XFxuLmFudC1jb2wtMjMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogOTUuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1wdXNoLTIzIHtcXG4gIGxlZnQ6IDk1LjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtcHVsbC0yMyB7XFxuICByaWdodDogOTUuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1vZmZzZXQtMjMge1xcbiAgbWFyZ2luLWxlZnQ6IDk1LjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtb3JkZXItMjMge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjQ7XFxuICAtd2Via2l0LW9yZGVyOiAyMztcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMjM7XFxuICAgICAgICAgIG9yZGVyOiAyMztcXG59XFxuLmFudC1jb2wtMjIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1wdXNoLTIyIHtcXG4gIGxlZnQ6IDkxLjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtcHVsbC0yMiB7XFxuICByaWdodDogOTEuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1vZmZzZXQtMjIge1xcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtb3JkZXItMjIge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjM7XFxuICAtd2Via2l0LW9yZGVyOiAyMjtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMjI7XFxuICAgICAgICAgIG9yZGVyOiAyMjtcXG59XFxuLmFudC1jb2wtMjEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogODcuNSU7XFxufVxcbi5hbnQtY29sLXB1c2gtMjEge1xcbiAgbGVmdDogODcuNSU7XFxufVxcbi5hbnQtY29sLXB1bGwtMjEge1xcbiAgcmlnaHQ6IDg3LjUlO1xcbn1cXG4uYW50LWNvbC1vZmZzZXQtMjEge1xcbiAgbWFyZ2luLWxlZnQ6IDg3LjUlO1xcbn1cXG4uYW50LWNvbC1vcmRlci0yMSB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMjtcXG4gIC13ZWJraXQtb3JkZXI6IDIxO1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMTtcXG4gICAgICAgICAgb3JkZXI6IDIxO1xcbn1cXG4uYW50LWNvbC0yMCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA4My4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXB1c2gtMjAge1xcbiAgbGVmdDogODMuMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1wdWxsLTIwIHtcXG4gIHJpZ2h0OiA4My4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLW9mZnNldC0yMCB7XFxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1vcmRlci0yMCB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMTtcXG4gIC13ZWJraXQtb3JkZXI6IDIwO1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMDtcXG4gICAgICAgICAgb3JkZXI6IDIwO1xcbn1cXG4uYW50LWNvbC0xOSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA3OS4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXB1c2gtMTkge1xcbiAgbGVmdDogNzkuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1wdWxsLTE5IHtcXG4gIHJpZ2h0OiA3OS4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLW9mZnNldC0xOSB7XFxuICBtYXJnaW4tbGVmdDogNzkuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1vcmRlci0xOSB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMDtcXG4gIC13ZWJraXQtb3JkZXI6IDE5O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAxOTtcXG4gICAgICAgICAgb3JkZXI6IDE5O1xcbn1cXG4uYW50LWNvbC0xOCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA3NSU7XFxufVxcbi5hbnQtY29sLXB1c2gtMTgge1xcbiAgbGVmdDogNzUlO1xcbn1cXG4uYW50LWNvbC1wdWxsLTE4IHtcXG4gIHJpZ2h0OiA3NSU7XFxufVxcbi5hbnQtY29sLW9mZnNldC0xOCB7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG4uYW50LWNvbC1vcmRlci0xOCB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxOTtcXG4gIC13ZWJraXQtb3JkZXI6IDE4O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAxODtcXG4gICAgICAgICAgb3JkZXI6IDE4O1xcbn1cXG4uYW50LWNvbC0xNyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA3MC44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXB1c2gtMTcge1xcbiAgbGVmdDogNzAuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1wdWxsLTE3IHtcXG4gIHJpZ2h0OiA3MC44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLW9mZnNldC0xNyB7XFxuICBtYXJnaW4tbGVmdDogNzAuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1vcmRlci0xNyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxODtcXG4gIC13ZWJraXQtb3JkZXI6IDE3O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNztcXG4gICAgICAgICAgb3JkZXI6IDE3O1xcbn1cXG4uYW50LWNvbC0xNiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA2Ni42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXB1c2gtMTYge1xcbiAgbGVmdDogNjYuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1wdWxsLTE2IHtcXG4gIHJpZ2h0OiA2Ni42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLW9mZnNldC0xNiB7XFxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1vcmRlci0xNiB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxNztcXG4gIC13ZWJraXQtb3JkZXI6IDE2O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNjtcXG4gICAgICAgICAgb3JkZXI6IDE2O1xcbn1cXG4uYW50LWNvbC0xNSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA2Mi41JTtcXG59XFxuLmFudC1jb2wtcHVzaC0xNSB7XFxuICBsZWZ0OiA2Mi41JTtcXG59XFxuLmFudC1jb2wtcHVsbC0xNSB7XFxuICByaWdodDogNjIuNSU7XFxufVxcbi5hbnQtY29sLW9mZnNldC0xNSB7XFxuICBtYXJnaW4tbGVmdDogNjIuNSU7XFxufVxcbi5hbnQtY29sLW9yZGVyLTE1IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE2O1xcbiAgLXdlYmtpdC1vcmRlcjogMTU7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDE1O1xcbiAgICAgICAgICBvcmRlcjogMTU7XFxufVxcbi5hbnQtY29sLTE0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtcHVzaC0xNCB7XFxuICBsZWZ0OiA1OC4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXB1bGwtMTQge1xcbiAgcmlnaHQ6IDU4LjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTE0IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLW9yZGVyLTE0IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE1O1xcbiAgLXdlYmtpdC1vcmRlcjogMTQ7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDE0O1xcbiAgICAgICAgICBvcmRlcjogMTQ7XFxufVxcbi5hbnQtY29sLTEzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDU0LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtcHVzaC0xMyB7XFxuICBsZWZ0OiA1NC4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXB1bGwtMTMge1xcbiAgcmlnaHQ6IDU0LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTEzIHtcXG4gIG1hcmdpbi1sZWZ0OiA1NC4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLW9yZGVyLTEzIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE0O1xcbiAgLXdlYmtpdC1vcmRlcjogMTM7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDEzO1xcbiAgICAgICAgICBvcmRlcjogMTM7XFxufVxcbi5hbnQtY29sLTEyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuLmFudC1jb2wtcHVzaC0xMiB7XFxuICBsZWZ0OiA1MCU7XFxufVxcbi5hbnQtY29sLXB1bGwtMTIge1xcbiAgcmlnaHQ6IDUwJTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTEyIHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcbi5hbnQtY29sLW9yZGVyLTEyIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDEzO1xcbiAgLXdlYmtpdC1vcmRlcjogMTI7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDEyO1xcbiAgICAgICAgICBvcmRlcjogMTI7XFxufVxcbi5hbnQtY29sLTExIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDQ1LjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtcHVzaC0xMSB7XFxuICBsZWZ0OiA0NS44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXB1bGwtMTEge1xcbiAgcmlnaHQ6IDQ1LjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTExIHtcXG4gIG1hcmdpbi1sZWZ0OiA0NS44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLW9yZGVyLTExIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDEyO1xcbiAgLXdlYmtpdC1vcmRlcjogMTE7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDExO1xcbiAgICAgICAgICBvcmRlcjogMTE7XFxufVxcbi5hbnQtY29sLTEwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtcHVzaC0xMCB7XFxuICBsZWZ0OiA0MS42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXB1bGwtMTAge1xcbiAgcmlnaHQ6IDQxLjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLW9yZGVyLTEwIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDExO1xcbiAgLXdlYmtpdC1vcmRlcjogMTA7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDEwO1xcbiAgICAgICAgICBvcmRlcjogMTA7XFxufVxcbi5hbnQtY29sLTkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMzcuNSU7XFxufVxcbi5hbnQtY29sLXB1c2gtOSB7XFxuICBsZWZ0OiAzNy41JTtcXG59XFxuLmFudC1jb2wtcHVsbC05IHtcXG4gIHJpZ2h0OiAzNy41JTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTkge1xcbiAgbWFyZ2luLWxlZnQ6IDM3LjUlO1xcbn1cXG4uYW50LWNvbC1vcmRlci05IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDEwO1xcbiAgLXdlYmtpdC1vcmRlcjogOTtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogOTtcXG4gICAgICAgICAgb3JkZXI6IDk7XFxufVxcbi5hbnQtY29sLTgge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMzMuMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1wdXNoLTgge1xcbiAgbGVmdDogMzMuMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1wdWxsLTgge1xcbiAgcmlnaHQ6IDMzLjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTgge1xcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtb3JkZXItOCB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA5O1xcbiAgLXdlYmtpdC1vcmRlcjogODtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogODtcXG4gICAgICAgICAgb3JkZXI6IDg7XFxufVxcbi5hbnQtY29sLTcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMjkuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1wdXNoLTcge1xcbiAgbGVmdDogMjkuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1wdWxsLTcge1xcbiAgcmlnaHQ6IDI5LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTcge1xcbiAgbWFyZ2luLWxlZnQ6IDI5LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtb3JkZXItNyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA4O1xcbiAgLXdlYmtpdC1vcmRlcjogNztcXG4gICAgICAtbXMtZmxleC1vcmRlcjogNztcXG4gICAgICAgICAgb3JkZXI6IDc7XFxufVxcbi5hbnQtY29sLTYge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMjUlO1xcbn1cXG4uYW50LWNvbC1wdXNoLTYge1xcbiAgbGVmdDogMjUlO1xcbn1cXG4uYW50LWNvbC1wdWxsLTYge1xcbiAgcmlnaHQ6IDI1JTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTYge1xcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuLmFudC1jb2wtb3JkZXItNiB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA3O1xcbiAgLXdlYmtpdC1vcmRlcjogNjtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogNjtcXG4gICAgICAgICAgb3JkZXI6IDY7XFxufVxcbi5hbnQtY29sLTUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMjAuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1wdXNoLTUge1xcbiAgbGVmdDogMjAuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1wdWxsLTUge1xcbiAgcmlnaHQ6IDIwLjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTUge1xcbiAgbWFyZ2luLWxlZnQ6IDIwLjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtb3JkZXItNSB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA2O1xcbiAgLXdlYmtpdC1vcmRlcjogNTtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogNTtcXG4gICAgICAgICAgb3JkZXI6IDU7XFxufVxcbi5hbnQtY29sLTQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTYuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1wdXNoLTQge1xcbiAgbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1wdWxsLTQge1xcbiAgcmlnaHQ6IDE2LjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTQge1xcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtb3JkZXItNCB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA1O1xcbiAgLXdlYmtpdC1vcmRlcjogNDtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogNDtcXG4gICAgICAgICAgb3JkZXI6IDQ7XFxufVxcbi5hbnQtY29sLTMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTIuNSU7XFxufVxcbi5hbnQtY29sLXB1c2gtMyB7XFxuICBsZWZ0OiAxMi41JTtcXG59XFxuLmFudC1jb2wtcHVsbC0zIHtcXG4gIHJpZ2h0OiAxMi41JTtcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTMge1xcbiAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xcbn1cXG4uYW50LWNvbC1vcmRlci0zIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDQ7XFxuICAtd2Via2l0LW9yZGVyOiAzO1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAzO1xcbiAgICAgICAgICBvcmRlcjogMztcXG59XFxuLmFudC1jb2wtMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA4LjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wtcHVzaC0yIHtcXG4gIGxlZnQ6IDguMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1wdWxsLTIge1xcbiAgcmlnaHQ6IDguMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC1vZmZzZXQtMiB7XFxuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLW9yZGVyLTIge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMztcXG4gIC13ZWJraXQtb3JkZXI6IDI7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDI7XFxuICAgICAgICAgIG9yZGVyOiAyO1xcbn1cXG4uYW50LWNvbC0xIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDQuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC1wdXNoLTEge1xcbiAgbGVmdDogNC4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXB1bGwtMSB7XFxuICByaWdodDogNC4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLW9mZnNldC0xIHtcXG4gIG1hcmdpbi1sZWZ0OiA0LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wtb3JkZXItMSB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgLXdlYmtpdC1vcmRlcjogMTtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgICAgICAgb3JkZXI6IDE7XFxufVxcbi5hbnQtY29sLTAge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC1jb2wtcHVzaC0wIHtcXG4gIGxlZnQ6IGF1dG87XFxufVxcbi5hbnQtY29sLXB1bGwtMCB7XFxuICByaWdodDogYXV0bztcXG59XFxuLmFudC1jb2wtcHVzaC0wIHtcXG4gIGxlZnQ6IGF1dG87XFxufVxcbi5hbnQtY29sLXB1bGwtMCB7XFxuICByaWdodDogYXV0bztcXG59XFxuLmFudC1jb2wtb2Zmc2V0LTAge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5hbnQtY29sLW9yZGVyLTAge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTtcXG4gIC13ZWJraXQtb3JkZXI6IDA7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDA7XFxuICAgICAgICAgIG9yZGVyOiAwO1xcbn1cXG4uYW50LWNvbC14cy0xLFxcbi5hbnQtY29sLXhzLTIsXFxuLmFudC1jb2wteHMtMyxcXG4uYW50LWNvbC14cy00LFxcbi5hbnQtY29sLXhzLTUsXFxuLmFudC1jb2wteHMtNixcXG4uYW50LWNvbC14cy03LFxcbi5hbnQtY29sLXhzLTgsXFxuLmFudC1jb2wteHMtOSxcXG4uYW50LWNvbC14cy0xMCxcXG4uYW50LWNvbC14cy0xMSxcXG4uYW50LWNvbC14cy0xMixcXG4uYW50LWNvbC14cy0xMyxcXG4uYW50LWNvbC14cy0xNCxcXG4uYW50LWNvbC14cy0xNSxcXG4uYW50LWNvbC14cy0xNixcXG4uYW50LWNvbC14cy0xNyxcXG4uYW50LWNvbC14cy0xOCxcXG4uYW50LWNvbC14cy0xOSxcXG4uYW50LWNvbC14cy0yMCxcXG4uYW50LWNvbC14cy0yMSxcXG4uYW50LWNvbC14cy0yMixcXG4uYW50LWNvbC14cy0yMyxcXG4uYW50LWNvbC14cy0yNCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xcbiAgICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgICAgICAgZmxleDogMCAwIGF1dG87XFxufVxcbi5hbnQtY29sLXhzLTI0IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtMjQge1xcbiAgbGVmdDogMTAwJTtcXG59XFxuLmFudC1jb2wteHMtcHVsbC0yNCB7XFxuICByaWdodDogMTAwJTtcXG59XFxuLmFudC1jb2wteHMtb2Zmc2V0LTI0IHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci0yNCB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNTtcXG4gIC13ZWJraXQtb3JkZXI6IDI0O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAyNDtcXG4gICAgICAgICAgb3JkZXI6IDI0O1xcbn1cXG4uYW50LWNvbC14cy0yMyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA5NS44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtMjMge1xcbiAgbGVmdDogOTUuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1wdWxsLTIzIHtcXG4gIHJpZ2h0OiA5NS44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLW9mZnNldC0yMyB7XFxuICBtYXJnaW4tbGVmdDogOTUuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci0yMyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNDtcXG4gIC13ZWJraXQtb3JkZXI6IDIzO1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMztcXG4gICAgICAgICAgb3JkZXI6IDIzO1xcbn1cXG4uYW50LWNvbC14cy0yMiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtMjIge1xcbiAgbGVmdDogOTEuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1wdWxsLTIyIHtcXG4gIHJpZ2h0OiA5MS42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLW9mZnNldC0yMiB7XFxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci0yMiB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMztcXG4gIC13ZWJraXQtb3JkZXI6IDIyO1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMjtcXG4gICAgICAgICAgb3JkZXI6IDIyO1xcbn1cXG4uYW50LWNvbC14cy0yMSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiA4Ny41JTtcXG59XFxuLmFudC1jb2wteHMtcHVzaC0yMSB7XFxuICBsZWZ0OiA4Ny41JTtcXG59XFxuLmFudC1jb2wteHMtcHVsbC0yMSB7XFxuICByaWdodDogODcuNSU7XFxufVxcbi5hbnQtY29sLXhzLW9mZnNldC0yMSB7XFxuICBtYXJnaW4tbGVmdDogODcuNSU7XFxufVxcbi5hbnQtY29sLXhzLW9yZGVyLTIxIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIyO1xcbiAgLXdlYmtpdC1vcmRlcjogMjE7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDIxO1xcbiAgICAgICAgICBvcmRlcjogMjE7XFxufVxcbi5hbnQtY29sLXhzLTIwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtcHVzaC0yMCB7XFxuICBsZWZ0OiA4My4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtMjAge1xcbiAgcmlnaHQ6IDgzLjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtb2Zmc2V0LTIwIHtcXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLW9yZGVyLTIwIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIxO1xcbiAgLXdlYmtpdC1vcmRlcjogMjA7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDIwO1xcbiAgICAgICAgICBvcmRlcjogMjA7XFxufVxcbi5hbnQtY29sLXhzLTE5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDc5LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtcHVzaC0xOSB7XFxuICBsZWZ0OiA3OS4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtMTkge1xcbiAgcmlnaHQ6IDc5LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtb2Zmc2V0LTE5IHtcXG4gIG1hcmdpbi1sZWZ0OiA3OS4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLW9yZGVyLTE5IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIwO1xcbiAgLXdlYmtpdC1vcmRlcjogMTk7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDE5O1xcbiAgICAgICAgICBvcmRlcjogMTk7XFxufVxcbi5hbnQtY29sLXhzLTE4IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDc1JTtcXG59XFxuLmFudC1jb2wteHMtcHVzaC0xOCB7XFxuICBsZWZ0OiA3NSU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtMTgge1xcbiAgcmlnaHQ6IDc1JTtcXG59XFxuLmFudC1jb2wteHMtb2Zmc2V0LTE4IHtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi5hbnQtY29sLXhzLW9yZGVyLTE4IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE5O1xcbiAgLXdlYmtpdC1vcmRlcjogMTg7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDE4O1xcbiAgICAgICAgICBvcmRlcjogMTg7XFxufVxcbi5hbnQtY29sLXhzLTE3IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDcwLjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtcHVzaC0xNyB7XFxuICBsZWZ0OiA3MC44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtMTcge1xcbiAgcmlnaHQ6IDcwLjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtb2Zmc2V0LTE3IHtcXG4gIG1hcmdpbi1sZWZ0OiA3MC44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLW9yZGVyLTE3IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE4O1xcbiAgLXdlYmtpdC1vcmRlcjogMTc7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDE3O1xcbiAgICAgICAgICBvcmRlcjogMTc7XFxufVxcbi5hbnQtY29sLXhzLTE2IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtcHVzaC0xNiB7XFxuICBsZWZ0OiA2Ni42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtMTYge1xcbiAgcmlnaHQ6IDY2LjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtb2Zmc2V0LTE2IHtcXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLW9yZGVyLTE2IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE3O1xcbiAgLXdlYmtpdC1vcmRlcjogMTY7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDE2O1xcbiAgICAgICAgICBvcmRlcjogMTY7XFxufVxcbi5hbnQtY29sLXhzLTE1IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDYyLjUlO1xcbn1cXG4uYW50LWNvbC14cy1wdXNoLTE1IHtcXG4gIGxlZnQ6IDYyLjUlO1xcbn1cXG4uYW50LWNvbC14cy1wdWxsLTE1IHtcXG4gIHJpZ2h0OiA2Mi41JTtcXG59XFxuLmFudC1jb2wteHMtb2Zmc2V0LTE1IHtcXG4gIG1hcmdpbi1sZWZ0OiA2Mi41JTtcXG59XFxuLmFudC1jb2wteHMtb3JkZXItMTUge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTY7XFxuICAtd2Via2l0LW9yZGVyOiAxNTtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMTU7XFxuICAgICAgICAgIG9yZGVyOiAxNTtcXG59XFxuLmFudC1jb2wteHMtMTQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNTguMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1wdXNoLTE0IHtcXG4gIGxlZnQ6IDU4LjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtcHVsbC0xNCB7XFxuICByaWdodDogNTguMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtMTQge1xcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtb3JkZXItMTQge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTU7XFxuICAtd2Via2l0LW9yZGVyOiAxNDtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMTQ7XFxuICAgICAgICAgIG9yZGVyOiAxNDtcXG59XFxuLmFudC1jb2wteHMtMTMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNTQuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1wdXNoLTEzIHtcXG4gIGxlZnQ6IDU0LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtcHVsbC0xMyB7XFxuICByaWdodDogNTQuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtMTMge1xcbiAgbWFyZ2luLWxlZnQ6IDU0LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtb3JkZXItMTMge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTQ7XFxuICAtd2Via2l0LW9yZGVyOiAxMztcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMTM7XFxuICAgICAgICAgIG9yZGVyOiAxMztcXG59XFxuLmFudC1jb2wteHMtMTIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNTAlO1xcbn1cXG4uYW50LWNvbC14cy1wdXNoLTEyIHtcXG4gIGxlZnQ6IDUwJTtcXG59XFxuLmFudC1jb2wteHMtcHVsbC0xMiB7XFxuICByaWdodDogNTAlO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtMTIge1xcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcXG59XFxuLmFudC1jb2wteHMtb3JkZXItMTIge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTM7XFxuICAtd2Via2l0LW9yZGVyOiAxMjtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMTI7XFxuICAgICAgICAgIG9yZGVyOiAxMjtcXG59XFxuLmFudC1jb2wteHMtMTEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNDUuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1wdXNoLTExIHtcXG4gIGxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtcHVsbC0xMSB7XFxuICByaWdodDogNDUuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtMTEge1xcbiAgbWFyZ2luLWxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtb3JkZXItMTEge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTI7XFxuICAtd2Via2l0LW9yZGVyOiAxMTtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMTE7XFxuICAgICAgICAgIG9yZGVyOiAxMTtcXG59XFxuLmFudC1jb2wteHMtMTAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1wdXNoLTEwIHtcXG4gIGxlZnQ6IDQxLjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtcHVsbC0xMCB7XFxuICByaWdodDogNDEuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtMTAge1xcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtb3JkZXItMTAge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTE7XFxuICAtd2Via2l0LW9yZGVyOiAxMDtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMTA7XFxuICAgICAgICAgIG9yZGVyOiAxMDtcXG59XFxuLmFudC1jb2wteHMtOSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAzNy41JTtcXG59XFxuLmFudC1jb2wteHMtcHVzaC05IHtcXG4gIGxlZnQ6IDM3LjUlO1xcbn1cXG4uYW50LWNvbC14cy1wdWxsLTkge1xcbiAgcmlnaHQ6IDM3LjUlO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtOSB7XFxuICBtYXJnaW4tbGVmdDogMzcuNSU7XFxufVxcbi5hbnQtY29sLXhzLW9yZGVyLTkge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTA7XFxuICAtd2Via2l0LW9yZGVyOiA5O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiA5O1xcbiAgICAgICAgICBvcmRlcjogOTtcXG59XFxuLmFudC1jb2wteHMtOCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtOCB7XFxuICBsZWZ0OiAzMy4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtOCB7XFxuICByaWdodDogMzMuMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtOCB7XFxuICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci04IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDk7XFxuICAtd2Via2l0LW9yZGVyOiA4O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiA4O1xcbiAgICAgICAgICBvcmRlcjogODtcXG59XFxuLmFudC1jb2wteHMtNyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAyOS4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtNyB7XFxuICBsZWZ0OiAyOS4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtNyB7XFxuICByaWdodDogMjkuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtNyB7XFxuICBtYXJnaW4tbGVmdDogMjkuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci03IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDg7XFxuICAtd2Via2l0LW9yZGVyOiA3O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiA3O1xcbiAgICAgICAgICBvcmRlcjogNztcXG59XFxuLmFudC1jb2wteHMtNiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAyNSU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtNiB7XFxuICBsZWZ0OiAyNSU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtNiB7XFxuICByaWdodDogMjUlO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtNiB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci02IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDc7XFxuICAtd2Via2l0LW9yZGVyOiA2O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiA2O1xcbiAgICAgICAgICBvcmRlcjogNjtcXG59XFxuLmFudC1jb2wteHMtNSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAyMC44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtNSB7XFxuICBsZWZ0OiAyMC44MzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtNSB7XFxuICByaWdodDogMjAuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtNSB7XFxuICBtYXJnaW4tbGVmdDogMjAuODMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci01IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDY7XFxuICAtd2Via2l0LW9yZGVyOiA1O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiA1O1xcbiAgICAgICAgICBvcmRlcjogNTtcXG59XFxuLmFudC1jb2wteHMtNCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtNCB7XFxuICBsZWZ0OiAxNi42NjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtNCB7XFxuICByaWdodDogMTYuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtNCB7XFxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci00IHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDU7XFxuICAtd2Via2l0LW9yZGVyOiA0O1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiA0O1xcbiAgICAgICAgICBvcmRlcjogNDtcXG59XFxuLmFudC1jb2wteHMtMyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMi41JTtcXG59XFxuLmFudC1jb2wteHMtcHVzaC0zIHtcXG4gIGxlZnQ6IDEyLjUlO1xcbn1cXG4uYW50LWNvbC14cy1wdWxsLTMge1xcbiAgcmlnaHQ6IDEyLjUlO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtMyB7XFxuICBtYXJnaW4tbGVmdDogMTIuNSU7XFxufVxcbi5hbnQtY29sLXhzLW9yZGVyLTMge1xcbiAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogNDtcXG4gIC13ZWJraXQtb3JkZXI6IDM7XFxuICAgICAgLW1zLWZsZXgtb3JkZXI6IDM7XFxuICAgICAgICAgIG9yZGVyOiAzO1xcbn1cXG4uYW50LWNvbC14cy0yIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDguMzMzMzMzMzMlO1xcbn1cXG4uYW50LWNvbC14cy1wdXNoLTIge1xcbiAgbGVmdDogOC4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLXB1bGwtMiB7XFxuICByaWdodDogOC4zMzMzMzMzMyU7XFxufVxcbi5hbnQtY29sLXhzLW9mZnNldC0yIHtcXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG59XFxuLmFudC1jb2wteHMtb3JkZXItMiB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xcbiAgLXdlYmtpdC1vcmRlcjogMjtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMjtcXG4gICAgICAgICAgb3JkZXI6IDI7XFxufVxcbi5hbnQtY29sLXhzLTEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogNC4xNjY2NjY2NyU7XFxufVxcbi5hbnQtY29sLXhzLXB1c2gtMSB7XFxuICBsZWZ0OiA0LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtcHVsbC0xIHtcXG4gIHJpZ2h0OiA0LjE2NjY2NjY3JTtcXG59XFxuLmFudC1jb2wteHMtb2Zmc2V0LTEge1xcbiAgbWFyZ2luLWxlZnQ6IDQuMTY2NjY2NjclO1xcbn1cXG4uYW50LWNvbC14cy1vcmRlci0xIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAtd2Via2l0LW9yZGVyOiAxO1xcbiAgICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICAgICAgICBvcmRlcjogMTtcXG59XFxuLmFudC1jb2wteHMtMCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW50LWNvbC1wdXNoLTAge1xcbiAgbGVmdDogYXV0bztcXG59XFxuLmFudC1jb2wtcHVsbC0wIHtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4uYW50LWNvbC14cy1wdXNoLTAge1xcbiAgbGVmdDogYXV0bztcXG59XFxuLmFudC1jb2wteHMtcHVsbC0wIHtcXG4gIHJpZ2h0OiBhdXRvO1xcbn1cXG4uYW50LWNvbC14cy1vZmZzZXQtMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuLmFudC1jb2wteHMtb3JkZXItMCB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxO1xcbiAgLXdlYmtpdC1vcmRlcjogMDtcXG4gICAgICAtbXMtZmxleC1vcmRlcjogMDtcXG4gICAgICAgICAgb3JkZXI6IDA7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xcbiAgLmFudC1jb2wtc20tMSxcXG4gIC5hbnQtY29sLXNtLTIsXFxuICAuYW50LWNvbC1zbS0zLFxcbiAgLmFudC1jb2wtc20tNCxcXG4gIC5hbnQtY29sLXNtLTUsXFxuICAuYW50LWNvbC1zbS02LFxcbiAgLmFudC1jb2wtc20tNyxcXG4gIC5hbnQtY29sLXNtLTgsXFxuICAuYW50LWNvbC1zbS05LFxcbiAgLmFudC1jb2wtc20tMTAsXFxuICAuYW50LWNvbC1zbS0xMSxcXG4gIC5hbnQtY29sLXNtLTEyLFxcbiAgLmFudC1jb2wtc20tMTMsXFxuICAuYW50LWNvbC1zbS0xNCxcXG4gIC5hbnQtY29sLXNtLTE1LFxcbiAgLmFudC1jb2wtc20tMTYsXFxuICAuYW50LWNvbC1zbS0xNyxcXG4gIC5hbnQtY29sLXNtLTE4LFxcbiAgLmFudC1jb2wtc20tMTksXFxuICAuYW50LWNvbC1zbS0yMCxcXG4gIC5hbnQtY29sLXNtLTIxLFxcbiAgLmFudC1jb2wtc20tMjIsXFxuICAuYW50LWNvbC1zbS0yMyxcXG4gIC5hbnQtY29sLXNtLTI0IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC13ZWJraXQtZmxleDogMCAwIGF1dG87XFxuICAgICAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XFxuICB9XFxuICAuYW50LWNvbC1zbS0yNCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTI0IHtcXG4gICAgbGVmdDogMTAwJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMjQge1xcbiAgICByaWdodDogMTAwJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9mZnNldC0yNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItMjQge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjQ7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjQ7XFxuICAgICAgICAgICAgb3JkZXI6IDI0O1xcbiAgfVxcbiAgLmFudC1jb2wtc20tMjMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA5NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTIzIHtcXG4gICAgbGVmdDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVsbC0yMyB7XFxuICAgIHJpZ2h0OiA5NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vZmZzZXQtMjMge1xcbiAgICBtYXJnaW4tbGVmdDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItMjMge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjM7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjM7XFxuICAgICAgICAgICAgb3JkZXI6IDIzO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tMjIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTIyIHtcXG4gICAgbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVsbC0yMiB7XFxuICAgIHJpZ2h0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vZmZzZXQtMjIge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItMjIge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMztcXG4gICAgLXdlYmtpdC1vcmRlcjogMjI7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjI7XFxuICAgICAgICAgICAgb3JkZXI6IDIyO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tMjEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4Ny41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1c2gtMjEge1xcbiAgICBsZWZ0OiA4Ny41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMjEge1xcbiAgICByaWdodDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vZmZzZXQtMjEge1xcbiAgICBtYXJnaW4tbGVmdDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vcmRlci0yMSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIyO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyMTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMTtcXG4gICAgICAgICAgICBvcmRlcjogMjE7XFxuICB9XFxuICAuYW50LWNvbC1zbS0yMCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1c2gtMjAge1xcbiAgICBsZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTIwIHtcXG4gICAgcmlnaHQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9mZnNldC0yMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vcmRlci0yMCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIxO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyMDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMDtcXG4gICAgICAgICAgICBvcmRlcjogMjA7XFxuICB9XFxuICAuYW50LWNvbC1zbS0xOSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDc5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1c2gtMTkge1xcbiAgICBsZWZ0OiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTE5IHtcXG4gICAgcmlnaHQ6IDc5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9mZnNldC0xOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vcmRlci0xOSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIwO1xcbiAgICAtd2Via2l0LW9yZGVyOiAxOTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxOTtcXG4gICAgICAgICAgICBvcmRlcjogMTk7XFxuICB9XFxuICAuYW50LWNvbC1zbS0xOCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1c2gtMTgge1xcbiAgICBsZWZ0OiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTE4IHtcXG4gICAgcmlnaHQ6IDc1JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9mZnNldC0xOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vcmRlci0xOCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE5O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxODtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxODtcXG4gICAgICAgICAgICBvcmRlcjogMTg7XFxuICB9XFxuICAuYW50LWNvbC1zbS0xNyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDcwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1c2gtMTcge1xcbiAgICBsZWZ0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTE3IHtcXG4gICAgcmlnaHQ6IDcwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9mZnNldC0xNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vcmRlci0xNyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE4O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNztcXG4gICAgICAgICAgICBvcmRlcjogMTc7XFxuICB9XFxuICAuYW50LWNvbC1zbS0xNiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1c2gtMTYge1xcbiAgICBsZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTE2IHtcXG4gICAgcmlnaHQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9mZnNldC0xNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vcmRlci0xNiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE3O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNjtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNjtcXG4gICAgICAgICAgICBvcmRlcjogMTY7XFxuICB9XFxuICAuYW50LWNvbC1zbS0xNSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDYyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVzaC0xNSB7XFxuICAgIGxlZnQ6IDYyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVsbC0xNSB7XFxuICAgIHJpZ2h0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9mZnNldC0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9yZGVyLTE1IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTY7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE1O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE1O1xcbiAgICAgICAgICAgIG9yZGVyOiAxNTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTE0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVzaC0xNCB7XFxuICAgIGxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMTQge1xcbiAgICByaWdodDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTE0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9yZGVyLTE0IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE0O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE0O1xcbiAgICAgICAgICAgIG9yZGVyOiAxNDtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTEzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVzaC0xMyB7XFxuICAgIGxlZnQ6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMTMge1xcbiAgICByaWdodDogNTQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTEzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9yZGVyLTEzIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTQ7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEzO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEzO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMztcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTEyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVzaC0xMiB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMTIge1xcbiAgICByaWdodDogNTAlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9yZGVyLTEyIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTM7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEyO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEyO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMjtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTExIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVzaC0xMSB7XFxuICAgIGxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMTEge1xcbiAgICByaWdodDogNDUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9yZGVyLTExIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDExO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDExO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTEwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVzaC0xMCB7XFxuICAgIGxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMTAge1xcbiAgICByaWdodDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9yZGVyLTEwIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTE7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEwO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEwO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMDtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAzNy41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1c2gtOSB7XFxuICAgIGxlZnQ6IDM3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVsbC05IHtcXG4gICAgcmlnaHQ6IDM3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogMzcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vcmRlci05IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTA7XFxuICAgIC13ZWJraXQtb3JkZXI6IDk7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogOTtcXG4gICAgICAgICAgICBvcmRlcjogOTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTgge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTgge1xcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTgge1xcbiAgICByaWdodDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTgge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItOCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDk7XFxuICAgIC13ZWJraXQtb3JkZXI6IDg7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogODtcXG4gICAgICAgICAgICBvcmRlcjogODtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyOS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTcge1xcbiAgICBsZWZ0OiAyOS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTcge1xcbiAgICByaWdodDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItNyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDg7XFxuICAgIC13ZWJraXQtb3JkZXI6IDc7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNztcXG4gICAgICAgICAgICBvcmRlcjogNztcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTYge1xcbiAgICBsZWZ0OiAyNSU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTYge1xcbiAgICByaWdodDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItNiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDc7XFxuICAgIC13ZWJraXQtb3JkZXI6IDY7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNjtcXG4gICAgICAgICAgICBvcmRlcjogNjtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyMC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTUge1xcbiAgICBsZWZ0OiAyMC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTUge1xcbiAgICByaWdodDogMjAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTUge1xcbiAgICBtYXJnaW4tbGVmdDogMjAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItNSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDY7XFxuICAgIC13ZWJraXQtb3JkZXI6IDU7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNTtcXG4gICAgICAgICAgICBvcmRlcjogNTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTQge1xcbiAgICBsZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTQge1xcbiAgICByaWdodDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItNCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDQ7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNDtcXG4gICAgICAgICAgICBvcmRlcjogNDtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1c2gtMyB7XFxuICAgIGxlZnQ6IDEyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVsbC0zIHtcXG4gICAgcmlnaHQ6IDEyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMTIuNSU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vcmRlci0zIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogNDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAzO1xcbiAgICAgICAgICAgIG9yZGVyOiAzO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tMiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVzaC0yIHtcXG4gICAgbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdWxsLTIge1xcbiAgICByaWdodDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9yZGVyLTIge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDI7XFxuICAgICAgICAgICAgb3JkZXI6IDI7XFxuICB9XFxuICAuYW50LWNvbC1zbS0xIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNC4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1zbS1wdXNoLTEge1xcbiAgICBsZWZ0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMSB7XFxuICAgIHJpZ2h0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb3JkZXItMSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgICAgICAgICBvcmRlcjogMTtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLTAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmFudC1jb2wtcHVzaC0wIHtcXG4gICAgbGVmdDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLXB1bGwtMCB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tcHVzaC0wIHtcXG4gICAgbGVmdDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLXNtLXB1bGwtMCB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmFudC1jb2wtc20tb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5hbnQtY29sLXNtLW9yZGVyLTAge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxO1xcbiAgICAtd2Via2l0LW9yZGVyOiAwO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDA7XFxuICAgICAgICAgICAgb3JkZXI6IDA7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLmFudC1jb2wtbWQtMSxcXG4gIC5hbnQtY29sLW1kLTIsXFxuICAuYW50LWNvbC1tZC0zLFxcbiAgLmFudC1jb2wtbWQtNCxcXG4gIC5hbnQtY29sLW1kLTUsXFxuICAuYW50LWNvbC1tZC02LFxcbiAgLmFudC1jb2wtbWQtNyxcXG4gIC5hbnQtY29sLW1kLTgsXFxuICAuYW50LWNvbC1tZC05LFxcbiAgLmFudC1jb2wtbWQtMTAsXFxuICAuYW50LWNvbC1tZC0xMSxcXG4gIC5hbnQtY29sLW1kLTEyLFxcbiAgLmFudC1jb2wtbWQtMTMsXFxuICAuYW50LWNvbC1tZC0xNCxcXG4gIC5hbnQtY29sLW1kLTE1LFxcbiAgLmFudC1jb2wtbWQtMTYsXFxuICAuYW50LWNvbC1tZC0xNyxcXG4gIC5hbnQtY29sLW1kLTE4LFxcbiAgLmFudC1jb2wtbWQtMTksXFxuICAuYW50LWNvbC1tZC0yMCxcXG4gIC5hbnQtY29sLW1kLTIxLFxcbiAgLmFudC1jb2wtbWQtMjIsXFxuICAuYW50LWNvbC1tZC0yMyxcXG4gIC5hbnQtY29sLW1kLTI0IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC13ZWJraXQtZmxleDogMCAwIGF1dG87XFxuICAgICAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XFxuICB9XFxuICAuYW50LWNvbC1tZC0yNCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTI0IHtcXG4gICAgbGVmdDogMTAwJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMjQge1xcbiAgICByaWdodDogMTAwJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9mZnNldC0yNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItMjQge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjQ7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjQ7XFxuICAgICAgICAgICAgb3JkZXI6IDI0O1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtMjMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA5NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTIzIHtcXG4gICAgbGVmdDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVsbC0yMyB7XFxuICAgIHJpZ2h0OiA5NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vZmZzZXQtMjMge1xcbiAgICBtYXJnaW4tbGVmdDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItMjMge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjM7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjM7XFxuICAgICAgICAgICAgb3JkZXI6IDIzO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtMjIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTIyIHtcXG4gICAgbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVsbC0yMiB7XFxuICAgIHJpZ2h0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vZmZzZXQtMjIge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItMjIge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMztcXG4gICAgLXdlYmtpdC1vcmRlcjogMjI7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjI7XFxuICAgICAgICAgICAgb3JkZXI6IDIyO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtMjEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4Ny41JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1c2gtMjEge1xcbiAgICBsZWZ0OiA4Ny41JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMjEge1xcbiAgICByaWdodDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vZmZzZXQtMjEge1xcbiAgICBtYXJnaW4tbGVmdDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vcmRlci0yMSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIyO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyMTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMTtcXG4gICAgICAgICAgICBvcmRlcjogMjE7XFxuICB9XFxuICAuYW50LWNvbC1tZC0yMCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1c2gtMjAge1xcbiAgICBsZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTIwIHtcXG4gICAgcmlnaHQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9mZnNldC0yMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vcmRlci0yMCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIxO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyMDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMDtcXG4gICAgICAgICAgICBvcmRlcjogMjA7XFxuICB9XFxuICAuYW50LWNvbC1tZC0xOSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDc5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1c2gtMTkge1xcbiAgICBsZWZ0OiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTE5IHtcXG4gICAgcmlnaHQ6IDc5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9mZnNldC0xOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vcmRlci0xOSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIwO1xcbiAgICAtd2Via2l0LW9yZGVyOiAxOTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxOTtcXG4gICAgICAgICAgICBvcmRlcjogMTk7XFxuICB9XFxuICAuYW50LWNvbC1tZC0xOCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1c2gtMTgge1xcbiAgICBsZWZ0OiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTE4IHtcXG4gICAgcmlnaHQ6IDc1JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9mZnNldC0xOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vcmRlci0xOCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE5O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxODtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxODtcXG4gICAgICAgICAgICBvcmRlcjogMTg7XFxuICB9XFxuICAuYW50LWNvbC1tZC0xNyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDcwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1c2gtMTcge1xcbiAgICBsZWZ0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTE3IHtcXG4gICAgcmlnaHQ6IDcwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9mZnNldC0xNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vcmRlci0xNyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE4O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNztcXG4gICAgICAgICAgICBvcmRlcjogMTc7XFxuICB9XFxuICAuYW50LWNvbC1tZC0xNiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1c2gtMTYge1xcbiAgICBsZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTE2IHtcXG4gICAgcmlnaHQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9mZnNldC0xNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vcmRlci0xNiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE3O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNjtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNjtcXG4gICAgICAgICAgICBvcmRlcjogMTY7XFxuICB9XFxuICAuYW50LWNvbC1tZC0xNSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDYyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVzaC0xNSB7XFxuICAgIGxlZnQ6IDYyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVsbC0xNSB7XFxuICAgIHJpZ2h0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9mZnNldC0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9yZGVyLTE1IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTY7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE1O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE1O1xcbiAgICAgICAgICAgIG9yZGVyOiAxNTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTE0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVzaC0xNCB7XFxuICAgIGxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMTQge1xcbiAgICByaWdodDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTE0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9yZGVyLTE0IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE0O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE0O1xcbiAgICAgICAgICAgIG9yZGVyOiAxNDtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTEzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVzaC0xMyB7XFxuICAgIGxlZnQ6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMTMge1xcbiAgICByaWdodDogNTQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTEzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9yZGVyLTEzIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTQ7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEzO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEzO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMztcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTEyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVzaC0xMiB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMTIge1xcbiAgICByaWdodDogNTAlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9yZGVyLTEyIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTM7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEyO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEyO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMjtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTExIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVzaC0xMSB7XFxuICAgIGxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMTEge1xcbiAgICByaWdodDogNDUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9yZGVyLTExIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDExO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDExO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTEwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVzaC0xMCB7XFxuICAgIGxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMTAge1xcbiAgICByaWdodDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9yZGVyLTEwIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTE7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEwO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEwO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMDtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAzNy41JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1c2gtOSB7XFxuICAgIGxlZnQ6IDM3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVsbC05IHtcXG4gICAgcmlnaHQ6IDM3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogMzcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vcmRlci05IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTA7XFxuICAgIC13ZWJraXQtb3JkZXI6IDk7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogOTtcXG4gICAgICAgICAgICBvcmRlcjogOTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTgge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTgge1xcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTgge1xcbiAgICByaWdodDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTgge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItOCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDk7XFxuICAgIC13ZWJraXQtb3JkZXI6IDg7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogODtcXG4gICAgICAgICAgICBvcmRlcjogODtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyOS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTcge1xcbiAgICBsZWZ0OiAyOS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTcge1xcbiAgICByaWdodDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItNyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDg7XFxuICAgIC13ZWJraXQtb3JkZXI6IDc7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNztcXG4gICAgICAgICAgICBvcmRlcjogNztcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTYge1xcbiAgICBsZWZ0OiAyNSU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTYge1xcbiAgICByaWdodDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItNiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDc7XFxuICAgIC13ZWJraXQtb3JkZXI6IDY7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNjtcXG4gICAgICAgICAgICBvcmRlcjogNjtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyMC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTUge1xcbiAgICBsZWZ0OiAyMC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTUge1xcbiAgICByaWdodDogMjAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTUge1xcbiAgICBtYXJnaW4tbGVmdDogMjAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItNSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDY7XFxuICAgIC13ZWJraXQtb3JkZXI6IDU7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNTtcXG4gICAgICAgICAgICBvcmRlcjogNTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTQge1xcbiAgICBsZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTQge1xcbiAgICByaWdodDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItNCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDQ7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNDtcXG4gICAgICAgICAgICBvcmRlcjogNDtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1c2gtMyB7XFxuICAgIGxlZnQ6IDEyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVsbC0zIHtcXG4gICAgcmlnaHQ6IDEyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMTIuNSU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vcmRlci0zIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogNDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAzO1xcbiAgICAgICAgICAgIG9yZGVyOiAzO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtMiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVzaC0yIHtcXG4gICAgbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdWxsLTIge1xcbiAgICByaWdodDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9yZGVyLTIge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDI7XFxuICAgICAgICAgICAgb3JkZXI6IDI7XFxuICB9XFxuICAuYW50LWNvbC1tZC0xIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNC4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1tZC1wdXNoLTEge1xcbiAgICBsZWZ0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMSB7XFxuICAgIHJpZ2h0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb3JkZXItMSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgICAgICAgICBvcmRlcjogMTtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLTAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmFudC1jb2wtcHVzaC0wIHtcXG4gICAgbGVmdDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLXB1bGwtMCB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtcHVzaC0wIHtcXG4gICAgbGVmdDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLW1kLXB1bGwtMCB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmFudC1jb2wtbWQtb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5hbnQtY29sLW1kLW9yZGVyLTAge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxO1xcbiAgICAtd2Via2l0LW9yZGVyOiAwO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDA7XFxuICAgICAgICAgICAgb3JkZXI6IDA7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgLmFudC1jb2wtbGctMSxcXG4gIC5hbnQtY29sLWxnLTIsXFxuICAuYW50LWNvbC1sZy0zLFxcbiAgLmFudC1jb2wtbGctNCxcXG4gIC5hbnQtY29sLWxnLTUsXFxuICAuYW50LWNvbC1sZy02LFxcbiAgLmFudC1jb2wtbGctNyxcXG4gIC5hbnQtY29sLWxnLTgsXFxuICAuYW50LWNvbC1sZy05LFxcbiAgLmFudC1jb2wtbGctMTAsXFxuICAuYW50LWNvbC1sZy0xMSxcXG4gIC5hbnQtY29sLWxnLTEyLFxcbiAgLmFudC1jb2wtbGctMTMsXFxuICAuYW50LWNvbC1sZy0xNCxcXG4gIC5hbnQtY29sLWxnLTE1LFxcbiAgLmFudC1jb2wtbGctMTYsXFxuICAuYW50LWNvbC1sZy0xNyxcXG4gIC5hbnQtY29sLWxnLTE4LFxcbiAgLmFudC1jb2wtbGctMTksXFxuICAuYW50LWNvbC1sZy0yMCxcXG4gIC5hbnQtY29sLWxnLTIxLFxcbiAgLmFudC1jb2wtbGctMjIsXFxuICAuYW50LWNvbC1sZy0yMyxcXG4gIC5hbnQtY29sLWxnLTI0IHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC13ZWJraXQtZmxleDogMCAwIGF1dG87XFxuICAgICAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XFxuICB9XFxuICAuYW50LWNvbC1sZy0yNCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTI0IHtcXG4gICAgbGVmdDogMTAwJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMjQge1xcbiAgICByaWdodDogMTAwJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9mZnNldC0yNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItMjQge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjQ7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjQ7XFxuICAgICAgICAgICAgb3JkZXI6IDI0O1xcbiAgfVxcbiAgLmFudC1jb2wtbGctMjMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA5NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTIzIHtcXG4gICAgbGVmdDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVsbC0yMyB7XFxuICAgIHJpZ2h0OiA5NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vZmZzZXQtMjMge1xcbiAgICBtYXJnaW4tbGVmdDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItMjMge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjM7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjM7XFxuICAgICAgICAgICAgb3JkZXI6IDIzO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctMjIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTIyIHtcXG4gICAgbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVsbC0yMiB7XFxuICAgIHJpZ2h0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vZmZzZXQtMjIge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItMjIge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMztcXG4gICAgLXdlYmtpdC1vcmRlcjogMjI7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjI7XFxuICAgICAgICAgICAgb3JkZXI6IDIyO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctMjEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4Ny41JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1c2gtMjEge1xcbiAgICBsZWZ0OiA4Ny41JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMjEge1xcbiAgICByaWdodDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vZmZzZXQtMjEge1xcbiAgICBtYXJnaW4tbGVmdDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vcmRlci0yMSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIyO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyMTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMTtcXG4gICAgICAgICAgICBvcmRlcjogMjE7XFxuICB9XFxuICAuYW50LWNvbC1sZy0yMCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1c2gtMjAge1xcbiAgICBsZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTIwIHtcXG4gICAgcmlnaHQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9mZnNldC0yMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vcmRlci0yMCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIxO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyMDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMDtcXG4gICAgICAgICAgICBvcmRlcjogMjA7XFxuICB9XFxuICAuYW50LWNvbC1sZy0xOSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDc5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1c2gtMTkge1xcbiAgICBsZWZ0OiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTE5IHtcXG4gICAgcmlnaHQ6IDc5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9mZnNldC0xOSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vcmRlci0xOSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIwO1xcbiAgICAtd2Via2l0LW9yZGVyOiAxOTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxOTtcXG4gICAgICAgICAgICBvcmRlcjogMTk7XFxuICB9XFxuICAuYW50LWNvbC1sZy0xOCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1c2gtMTgge1xcbiAgICBsZWZ0OiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTE4IHtcXG4gICAgcmlnaHQ6IDc1JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9mZnNldC0xOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vcmRlci0xOCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE5O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxODtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxODtcXG4gICAgICAgICAgICBvcmRlcjogMTg7XFxuICB9XFxuICAuYW50LWNvbC1sZy0xNyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDcwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1c2gtMTcge1xcbiAgICBsZWZ0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTE3IHtcXG4gICAgcmlnaHQ6IDcwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9mZnNldC0xNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vcmRlci0xNyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE4O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNztcXG4gICAgICAgICAgICBvcmRlcjogMTc7XFxuICB9XFxuICAuYW50LWNvbC1sZy0xNiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1c2gtMTYge1xcbiAgICBsZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTE2IHtcXG4gICAgcmlnaHQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9mZnNldC0xNiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vcmRlci0xNiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE3O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNjtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNjtcXG4gICAgICAgICAgICBvcmRlcjogMTY7XFxuICB9XFxuICAuYW50LWNvbC1sZy0xNSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDYyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVzaC0xNSB7XFxuICAgIGxlZnQ6IDYyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVsbC0xNSB7XFxuICAgIHJpZ2h0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9mZnNldC0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9yZGVyLTE1IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTY7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE1O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE1O1xcbiAgICAgICAgICAgIG9yZGVyOiAxNTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTE0IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVzaC0xNCB7XFxuICAgIGxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMTQge1xcbiAgICByaWdodDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTE0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9yZGVyLTE0IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE0O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE0O1xcbiAgICAgICAgICAgIG9yZGVyOiAxNDtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTEzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVzaC0xMyB7XFxuICAgIGxlZnQ6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMTMge1xcbiAgICByaWdodDogNTQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTEzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9yZGVyLTEzIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTQ7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEzO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEzO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMztcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTEyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVzaC0xMiB7XFxuICAgIGxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMTIge1xcbiAgICByaWdodDogNTAlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9yZGVyLTEyIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTM7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEyO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEyO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMjtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTExIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVzaC0xMSB7XFxuICAgIGxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMTEge1xcbiAgICByaWdodDogNDUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9yZGVyLTExIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDExO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDExO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTEwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVzaC0xMCB7XFxuICAgIGxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMTAge1xcbiAgICByaWdodDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9yZGVyLTEwIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTE7XFxuICAgIC13ZWJraXQtb3JkZXI6IDEwO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDEwO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMDtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAzNy41JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1c2gtOSB7XFxuICAgIGxlZnQ6IDM3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVsbC05IHtcXG4gICAgcmlnaHQ6IDM3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogMzcuNSU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vcmRlci05IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTA7XFxuICAgIC13ZWJraXQtb3JkZXI6IDk7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogOTtcXG4gICAgICAgICAgICBvcmRlcjogOTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTgge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTgge1xcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTgge1xcbiAgICByaWdodDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTgge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItOCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDk7XFxuICAgIC13ZWJraXQtb3JkZXI6IDg7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogODtcXG4gICAgICAgICAgICBvcmRlcjogODtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyOS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTcge1xcbiAgICBsZWZ0OiAyOS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTcge1xcbiAgICByaWdodDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItNyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDg7XFxuICAgIC13ZWJraXQtb3JkZXI6IDc7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNztcXG4gICAgICAgICAgICBvcmRlcjogNztcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTYge1xcbiAgICBsZWZ0OiAyNSU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTYge1xcbiAgICByaWdodDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItNiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDc7XFxuICAgIC13ZWJraXQtb3JkZXI6IDY7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNjtcXG4gICAgICAgICAgICBvcmRlcjogNjtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyMC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTUge1xcbiAgICBsZWZ0OiAyMC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTUge1xcbiAgICByaWdodDogMjAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTUge1xcbiAgICBtYXJnaW4tbGVmdDogMjAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItNSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDY7XFxuICAgIC13ZWJraXQtb3JkZXI6IDU7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNTtcXG4gICAgICAgICAgICBvcmRlcjogNTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTQge1xcbiAgICBsZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTQge1xcbiAgICByaWdodDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItNCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDQ7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNDtcXG4gICAgICAgICAgICBvcmRlcjogNDtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1c2gtMyB7XFxuICAgIGxlZnQ6IDEyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVsbC0zIHtcXG4gICAgcmlnaHQ6IDEyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMTIuNSU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vcmRlci0zIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogNDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAzO1xcbiAgICAgICAgICAgIG9yZGVyOiAzO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctMiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVzaC0yIHtcXG4gICAgbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdWxsLTIge1xcbiAgICByaWdodDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9yZGVyLTIge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDI7XFxuICAgICAgICAgICAgb3JkZXI6IDI7XFxuICB9XFxuICAuYW50LWNvbC1sZy0xIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNC4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC1sZy1wdXNoLTEge1xcbiAgICBsZWZ0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMSB7XFxuICAgIHJpZ2h0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb3JkZXItMSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTtcXG4gICAgICAgICAgICBvcmRlcjogMTtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLTAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmFudC1jb2wtcHVzaC0wIHtcXG4gICAgbGVmdDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLXB1bGwtMCB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctcHVzaC0wIHtcXG4gICAgbGVmdDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLWxnLXB1bGwtMCB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmFudC1jb2wtbGctb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5hbnQtY29sLWxnLW9yZGVyLTAge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxO1xcbiAgICAtd2Via2l0LW9yZGVyOiAwO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDA7XFxuICAgICAgICAgICAgb3JkZXI6IDA7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5hbnQtY29sLXhsLTEsXFxuICAuYW50LWNvbC14bC0yLFxcbiAgLmFudC1jb2wteGwtMyxcXG4gIC5hbnQtY29sLXhsLTQsXFxuICAuYW50LWNvbC14bC01LFxcbiAgLmFudC1jb2wteGwtNixcXG4gIC5hbnQtY29sLXhsLTcsXFxuICAuYW50LWNvbC14bC04LFxcbiAgLmFudC1jb2wteGwtOSxcXG4gIC5hbnQtY29sLXhsLTEwLFxcbiAgLmFudC1jb2wteGwtMTEsXFxuICAuYW50LWNvbC14bC0xMixcXG4gIC5hbnQtY29sLXhsLTEzLFxcbiAgLmFudC1jb2wteGwtMTQsXFxuICAuYW50LWNvbC14bC0xNSxcXG4gIC5hbnQtY29sLXhsLTE2LFxcbiAgLmFudC1jb2wteGwtMTcsXFxuICAuYW50LWNvbC14bC0xOCxcXG4gIC5hbnQtY29sLXhsLTE5LFxcbiAgLmFudC1jb2wteGwtMjAsXFxuICAuYW50LWNvbC14bC0yMSxcXG4gIC5hbnQtY29sLXhsLTIyLFxcbiAgLmFudC1jb2wteGwtMjMsXFxuICAuYW50LWNvbC14bC0yNCB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtd2Via2l0LWZsZXg6IDAgMCBhdXRvO1xcbiAgICAgICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtMjQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC0yNCB7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTI0IHtcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vZmZzZXQtMjQge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTI0IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDI0O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDI0O1xcbiAgICAgICAgICAgIG9yZGVyOiAyNDtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLTIzIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC0yMyB7XFxuICAgIGxlZnQ6IDk1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1bGwtMjMge1xcbiAgICByaWdodDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb2Zmc2V0LTIzIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTIzIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjQ7XFxuICAgIC13ZWJraXQtb3JkZXI6IDIzO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDIzO1xcbiAgICAgICAgICAgIG9yZGVyOiAyMztcXG4gIH1cXG4gIC5hbnQtY29sLXhsLTIyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC0yMiB7XFxuICAgIGxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1bGwtMjIge1xcbiAgICByaWdodDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb2Zmc2V0LTIyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTIyIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjM7XFxuICAgIC13ZWJraXQtb3JkZXI6IDIyO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDIyO1xcbiAgICAgICAgICAgIG9yZGVyOiAyMjtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLTIxIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdXNoLTIxIHtcXG4gICAgbGVmdDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTIxIHtcXG4gICAgcmlnaHQ6IDg3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb2Zmc2V0LTIxIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDg3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb3JkZXItMjEge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMjtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjE7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjE7XFxuICAgICAgICAgICAgb3JkZXI6IDIxO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtMjAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdXNoLTIwIHtcXG4gICAgbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC0yMCB7XFxuICAgIHJpZ2h0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vZmZzZXQtMjAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb3JkZXItMjAge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjA7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjA7XFxuICAgICAgICAgICAgb3JkZXI6IDIwO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtMTkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdXNoLTE5IHtcXG4gICAgbGVmdDogNzkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC0xOSB7XFxuICAgIHJpZ2h0OiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vZmZzZXQtMTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb3JkZXItMTkge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMTk7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTk7XFxuICAgICAgICAgICAgb3JkZXI6IDE5O1xcbiAgfVxcbiAgLmFudC1jb2wteGwtMTgge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdXNoLTE4IHtcXG4gICAgbGVmdDogNzUlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC0xOCB7XFxuICAgIHJpZ2h0OiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vZmZzZXQtMTgge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb3JkZXItMTgge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxOTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMTg7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTg7XFxuICAgICAgICAgICAgb3JkZXI6IDE4O1xcbiAgfVxcbiAgLmFudC1jb2wteGwtMTcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdXNoLTE3IHtcXG4gICAgbGVmdDogNzAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC0xNyB7XFxuICAgIHJpZ2h0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vZmZzZXQtMTcge1xcbiAgICBtYXJnaW4tbGVmdDogNzAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb3JkZXItMTcge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxODtcXG4gICAgLXdlYmtpdC1vcmRlcjogMTc7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTc7XFxuICAgICAgICAgICAgb3JkZXI6IDE3O1xcbiAgfVxcbiAgLmFudC1jb2wteGwtMTYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdXNoLTE2IHtcXG4gICAgbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC0xNiB7XFxuICAgIHJpZ2h0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vZmZzZXQtMTYge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb3JkZXItMTYge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxNztcXG4gICAgLXdlYmtpdC1vcmRlcjogMTY7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTY7XFxuICAgICAgICAgICAgb3JkZXI6IDE2O1xcbiAgfVxcbiAgLmFudC1jb2wteGwtMTUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1c2gtMTUge1xcbiAgICBsZWZ0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1bGwtMTUge1xcbiAgICByaWdodDogNjIuNSU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vZmZzZXQtMTUge1xcbiAgICBtYXJnaW4tbGVmdDogNjIuNSU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vcmRlci0xNSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE2O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNTtcXG4gICAgICAgICAgICBvcmRlcjogMTU7XFxuICB9XFxuICAuYW50LWNvbC14bC0xNCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1c2gtMTQge1xcbiAgICBsZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTE0IHtcXG4gICAgcmlnaHQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC0xNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vcmRlci0xNCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE1O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNDtcXG4gICAgICAgICAgICBvcmRlcjogMTQ7XFxuICB9XFxuICAuYW50LWNvbC14bC0xMyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1c2gtMTMge1xcbiAgICBsZWZ0OiA1NC4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTEzIHtcXG4gICAgcmlnaHQ6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC0xMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NC4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vcmRlci0xMyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE0O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxMztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxMztcXG4gICAgICAgICAgICBvcmRlcjogMTM7XFxuICB9XFxuICAuYW50LWNvbC14bC0xMiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1c2gtMTIge1xcbiAgICBsZWZ0OiA1MCU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTEyIHtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC0xMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vcmRlci0xMiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDEzO1xcbiAgICAtd2Via2l0LW9yZGVyOiAxMjtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxMjtcXG4gICAgICAgICAgICBvcmRlcjogMTI7XFxuICB9XFxuICAuYW50LWNvbC14bC0xMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1c2gtMTEge1xcbiAgICBsZWZ0OiA0NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTExIHtcXG4gICAgcmlnaHQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC0xMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vcmRlci0xMSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDEyO1xcbiAgICAtd2Via2l0LW9yZGVyOiAxMTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxMTtcXG4gICAgICAgICAgICBvcmRlcjogMTE7XFxuICB9XFxuICAuYW50LWNvbC14bC0xMCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1c2gtMTAge1xcbiAgICBsZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTEwIHtcXG4gICAgcmlnaHQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vcmRlci0xMCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDExO1xcbiAgICAtd2Via2l0LW9yZGVyOiAxMDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxMDtcXG4gICAgICAgICAgICBvcmRlcjogMTA7XFxuICB9XFxuICAuYW50LWNvbC14bC05IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMzcuNSU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdXNoLTkge1xcbiAgICBsZWZ0OiAzNy41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1bGwtOSB7XFxuICAgIHJpZ2h0OiAzNy41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM3LjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb3JkZXItOSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDEwO1xcbiAgICAtd2Via2l0LW9yZGVyOiA5O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDk7XFxuICAgICAgICAgICAgb3JkZXI6IDk7XFxuICB9XFxuICAuYW50LWNvbC14bC04IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC04IHtcXG4gICAgbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC04IHtcXG4gICAgcmlnaHQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTgge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA5O1xcbiAgICAtd2Via2l0LW9yZGVyOiA4O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDg7XFxuICAgICAgICAgICAgb3JkZXI6IDg7XFxuICB9XFxuICAuYW50LWNvbC14bC03IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC03IHtcXG4gICAgbGVmdDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC03IHtcXG4gICAgcmlnaHQ6IDI5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTcge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA4O1xcbiAgICAtd2Via2l0LW9yZGVyOiA3O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDc7XFxuICAgICAgICAgICAgb3JkZXI6IDc7XFxuICB9XFxuICAuYW50LWNvbC14bC02IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC02IHtcXG4gICAgbGVmdDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC02IHtcXG4gICAgcmlnaHQ6IDI1JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTYge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA3O1xcbiAgICAtd2Via2l0LW9yZGVyOiA2O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDY7XFxuICAgICAgICAgICAgb3JkZXI6IDY7XFxuICB9XFxuICAuYW50LWNvbC14bC01IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMjAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC01IHtcXG4gICAgbGVmdDogMjAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC01IHtcXG4gICAgcmlnaHQ6IDIwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTUge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA2O1xcbiAgICAtd2Via2l0LW9yZGVyOiA1O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDU7XFxuICAgICAgICAgICAgb3JkZXI6IDU7XFxuICB9XFxuICAuYW50LWNvbC14bC00IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC00IHtcXG4gICAgbGVmdDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC00IHtcXG4gICAgcmlnaHQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTQge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA1O1xcbiAgICAtd2Via2l0LW9yZGVyOiA0O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDQ7XFxuICAgICAgICAgICAgb3JkZXI6IDQ7XFxuICB9XFxuICAuYW50LWNvbC14bC0zIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTIuNSU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdXNoLTMge1xcbiAgICBsZWZ0OiAxMi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1bGwtMyB7XFxuICAgIHJpZ2h0OiAxMi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb3JkZXItMyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDQ7XFxuICAgIC13ZWJraXQtb3JkZXI6IDM7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMztcXG4gICAgICAgICAgICBvcmRlcjogMztcXG4gIH1cXG4gIC5hbnQtY29sLXhsLTIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1c2gtMiB7XFxuICAgIGxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVsbC0yIHtcXG4gICAgcmlnaHQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtb2Zmc2V0LTIge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vcmRlci0yIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMztcXG4gICAgLXdlYmtpdC1vcmRlcjogMjtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyO1xcbiAgICAgICAgICAgIG9yZGVyOiAyO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteGwtcHVzaC0xIHtcXG4gICAgbGVmdDogNC4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTEge1xcbiAgICByaWdodDogNC4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14bC1vZmZzZXQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9yZGVyLTEge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgICAtd2Via2l0LW9yZGVyOiAxO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgICAgICAgICAgb3JkZXI6IDE7XFxuICB9XFxuICAuYW50LWNvbC14bC0wIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5hbnQtY29sLXB1c2gtMCB7XFxuICAgIGxlZnQ6IGF1dG87XFxuICB9XFxuICAuYW50LWNvbC1wdWxsLTAge1xcbiAgICByaWdodDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLXhsLXB1c2gtMCB7XFxuICAgIGxlZnQ6IGF1dG87XFxuICB9XFxuICAuYW50LWNvbC14bC1wdWxsLTAge1xcbiAgICByaWdodDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLXhsLW9mZnNldC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuICAuYW50LWNvbC14bC1vcmRlci0wIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAwO1xcbiAgICAgICAgICAgIG9yZGVyOiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XFxuICAuYW50LWNvbC14eGwtMSxcXG4gIC5hbnQtY29sLXh4bC0yLFxcbiAgLmFudC1jb2wteHhsLTMsXFxuICAuYW50LWNvbC14eGwtNCxcXG4gIC5hbnQtY29sLXh4bC01LFxcbiAgLmFudC1jb2wteHhsLTYsXFxuICAuYW50LWNvbC14eGwtNyxcXG4gIC5hbnQtY29sLXh4bC04LFxcbiAgLmFudC1jb2wteHhsLTksXFxuICAuYW50LWNvbC14eGwtMTAsXFxuICAuYW50LWNvbC14eGwtMTEsXFxuICAuYW50LWNvbC14eGwtMTIsXFxuICAuYW50LWNvbC14eGwtMTMsXFxuICAuYW50LWNvbC14eGwtMTQsXFxuICAuYW50LWNvbC14eGwtMTUsXFxuICAuYW50LWNvbC14eGwtMTYsXFxuICAuYW50LWNvbC14eGwtMTcsXFxuICAuYW50LWNvbC14eGwtMTgsXFxuICAuYW50LWNvbC14eGwtMTksXFxuICAuYW50LWNvbC14eGwtMjAsXFxuICAuYW50LWNvbC14eGwtMjEsXFxuICAuYW50LWNvbC14eGwtMjIsXFxuICAuYW50LWNvbC14eGwtMjMsXFxuICAuYW50LWNvbC14eGwtMjQge1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gICAgLXdlYmtpdC1mbGV4OiAwIDAgYXV0bztcXG4gICAgICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC0yNCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVzaC0yNCB7XFxuICAgIGxlZnQ6IDEwMCU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC0yNCB7XFxuICAgIHJpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC0yNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9yZGVyLTI0IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDI0O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDI0O1xcbiAgICAgICAgICAgIG9yZGVyOiAyNDtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC0yMyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDk1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTIzIHtcXG4gICAgbGVmdDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1bGwtMjMge1xcbiAgICByaWdodDogOTUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC0yMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA5NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItMjMge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyNDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjM7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjM7XFxuICAgICAgICAgICAgb3JkZXI6IDIzO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLTIyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtMjIge1xcbiAgICBsZWZ0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC0yMiB7XFxuICAgIHJpZ2h0OiA5MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb2Zmc2V0LTIyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci0yMiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIzO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyMjtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMjtcXG4gICAgICAgICAgICBvcmRlcjogMjI7XFxuICB9XFxuICAuYW50LWNvbC14eGwtMjEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA4Ny41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTIxIHtcXG4gICAgbGVmdDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC0yMSB7XFxuICAgIHJpZ2h0OiA4Ny41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vZmZzZXQtMjEge1xcbiAgICBtYXJnaW4tbGVmdDogODcuNSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItMjEge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyMjtcXG4gICAgLXdlYmtpdC1vcmRlcjogMjE7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMjE7XFxuICAgICAgICAgICAgb3JkZXI6IDIxO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLTIwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtMjAge1xcbiAgICBsZWZ0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC0yMCB7XFxuICAgIHJpZ2h0OiA4My4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb2Zmc2V0LTIwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci0yMCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDIxO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyMDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAyMDtcXG4gICAgICAgICAgICBvcmRlcjogMjA7XFxuICB9XFxuICAuYW50LWNvbC14eGwtMTkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA3OS4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVzaC0xOSB7XFxuICAgIGxlZnQ6IDc5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTE5IHtcXG4gICAgcmlnaHQ6IDc5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vZmZzZXQtMTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9yZGVyLTE5IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjA7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE5O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE5O1xcbiAgICAgICAgICAgIG9yZGVyOiAxOTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC0xOCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTE4IHtcXG4gICAgbGVmdDogNzUlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1bGwtMTgge1xcbiAgICByaWdodDogNzUlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC0xOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItMTgge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxOTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMTg7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTg7XFxuICAgICAgICAgICAgb3JkZXI6IDE4O1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLTE3IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNzAuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtMTcge1xcbiAgICBsZWZ0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC0xNyB7XFxuICAgIHJpZ2h0OiA3MC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb2Zmc2V0LTE3IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci0xNyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE4O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNztcXG4gICAgICAgICAgICBvcmRlcjogMTc7XFxuICB9XFxuICAuYW50LWNvbC14eGwtMTYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVzaC0xNiB7XFxuICAgIGxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTE2IHtcXG4gICAgcmlnaHQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vZmZzZXQtMTYge1xcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9yZGVyLTE2IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTc7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE2O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE2O1xcbiAgICAgICAgICAgIG9yZGVyOiAxNjtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC0xNSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDYyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtMTUge1xcbiAgICBsZWZ0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTE1IHtcXG4gICAgcmlnaHQ6IDYyLjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC0xNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Mi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci0xNSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDE2O1xcbiAgICAtd2Via2l0LW9yZGVyOiAxNTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxNTtcXG4gICAgICAgICAgICBvcmRlcjogMTU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtMTQge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVzaC0xNCB7XFxuICAgIGxlZnQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTE0IHtcXG4gICAgcmlnaHQ6IDU4LjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vZmZzZXQtMTQge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9yZGVyLTE0IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTU7XFxuICAgIC13ZWJraXQtb3JkZXI6IDE0O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDE0O1xcbiAgICAgICAgICAgIG9yZGVyOiAxNDtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC0xMyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDU0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTEzIHtcXG4gICAgbGVmdDogNTQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1bGwtMTMge1xcbiAgICByaWdodDogNTQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC0xMyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NC4xNjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItMTMge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxNDtcXG4gICAgLXdlYmtpdC1vcmRlcjogMTM7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTM7XFxuICAgICAgICAgICAgb3JkZXI6IDEzO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLTEyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtMTIge1xcbiAgICBsZWZ0OiA1MCU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC0xMiB7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb2Zmc2V0LTEyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci0xMiB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDEzO1xcbiAgICAtd2Via2l0LW9yZGVyOiAxMjtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxMjtcXG4gICAgICAgICAgICBvcmRlcjogMTI7XFxuICB9XFxuICAuYW50LWNvbC14eGwtMTEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiA0NS44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVzaC0xMSB7XFxuICAgIGxlZnQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTExIHtcXG4gICAgcmlnaHQ6IDQ1LjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vZmZzZXQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogNDUuODMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9yZGVyLTExIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTI7XFxuICAgIC13ZWJraXQtb3JkZXI6IDExO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDExO1xcbiAgICAgICAgICAgIG9yZGVyOiAxMTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC0xMCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTEwIHtcXG4gICAgbGVmdDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1bGwtMTAge1xcbiAgICByaWdodDogNDEuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItMTAge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAxMTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMTA7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMTA7XFxuICAgICAgICAgICAgb3JkZXI6IDEwO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLTkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAzNy41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTkge1xcbiAgICBsZWZ0OiAzNy41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTkge1xcbiAgICByaWdodDogMzcuNSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogMzcuNSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItOSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDEwO1xcbiAgICAtd2Via2l0LW9yZGVyOiA5O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDk7XFxuICAgICAgICAgICAgb3JkZXI6IDk7XFxuICB9XFxuICAuYW50LWNvbC14eGwtOCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTgge1xcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC04IHtcXG4gICAgcmlnaHQ6IDMzLjMzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItOCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDk7XFxuICAgIC13ZWJraXQtb3JkZXI6IDg7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogODtcXG4gICAgICAgICAgICBvcmRlcjogODtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC03IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtNyB7XFxuICAgIGxlZnQ6IDI5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTcge1xcbiAgICByaWdodDogMjkuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI5LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci03IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogODtcXG4gICAgLXdlYmtpdC1vcmRlcjogNztcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiA3O1xcbiAgICAgICAgICAgIG9yZGVyOiA3O1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLTYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyNSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVzaC02IHtcXG4gICAgbGVmdDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1bGwtNiB7XFxuICAgIHJpZ2h0OiAyNSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9yZGVyLTYge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiA3O1xcbiAgICAtd2Via2l0LW9yZGVyOiA2O1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDY7XFxuICAgICAgICAgICAgb3JkZXI6IDY7XFxuICB9XFxuICAuYW50LWNvbC14eGwtNSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDIwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTUge1xcbiAgICBsZWZ0OiAyMC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC01IHtcXG4gICAgcmlnaHQ6IDIwLjgzMzMzMzMzJTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMC44MzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItNSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDY7XFxuICAgIC13ZWJraXQtb3JkZXI6IDU7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogNTtcXG4gICAgICAgICAgICBvcmRlcjogNTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC00IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtNCB7XFxuICAgIGxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTQge1xcbiAgICByaWdodDogMTYuNjY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci00IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogNTtcXG4gICAgLXdlYmtpdC1vcmRlcjogNDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiA0O1xcbiAgICAgICAgICAgIG9yZGVyOiA0O1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLTMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAxMi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdXNoLTMge1xcbiAgICBsZWZ0OiAxMi41JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1wdWxsLTMge1xcbiAgICByaWdodDogMTIuNSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMTIuNSU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtb3JkZXItMyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDQ7XFxuICAgIC13ZWJraXQtb3JkZXI6IDM7XFxuICAgICAgICAtbXMtZmxleC1vcmRlcjogMztcXG4gICAgICAgICAgICBvcmRlcjogMztcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC0yIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVzaC0yIHtcXG4gICAgbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC0yIHtcXG4gICAgcmlnaHQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLW9yZGVyLTIge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xcbiAgICAtd2Via2l0LW9yZGVyOiAyO1xcbiAgICAgICAgLW1zLWZsZXgtb3JkZXI6IDI7XFxuICAgICAgICAgICAgb3JkZXI6IDI7XFxuICB9XFxuICAuYW50LWNvbC14eGwtMSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtMSB7XFxuICAgIGxlZnQ6IDQuMTY2NjY2NjclO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1bGwtMSB7XFxuICAgIHJpZ2h0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vZmZzZXQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0LjE2NjY2NjY3JTtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci0xIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLXdlYmtpdC1vcmRlcjogMTtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICAgICAgICAgIG9yZGVyOiAxO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLTAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmFudC1jb2wtcHVzaC0wIHtcXG4gICAgbGVmdDogYXV0bztcXG4gIH1cXG4gIC5hbnQtY29sLXB1bGwtMCB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmFudC1jb2wteHhsLXB1c2gtMCB7XFxuICAgIGxlZnQ6IGF1dG87XFxuICB9XFxuICAuYW50LWNvbC14eGwtcHVsbC0wIHtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICB9XFxuICAuYW50LWNvbC14eGwtb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG4gIC5hbnQtY29sLXh4bC1vcmRlci0wIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMTtcXG4gICAgLXdlYmtpdC1vcmRlcjogMDtcXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAwO1xcbiAgICAgICAgICAgIG9yZGVyOiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xcbi5hbnQtcmF0ZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGxpbmUtaGVpZ2h0OiB1bnNldDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6ICNmYWRiMTQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYW50LXJhdGUtZGlzYWJsZWQgLmFudC1yYXRlLXN0YXIge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uYW50LXJhdGUtZGlzYWJsZWQgLmFudC1yYXRlLXN0YXI6aG92ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4uYW50LXJhdGUtc3RhciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFudC1yYXRlLXN0YXIgPiBkaXY6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmFudC1yYXRlLXN0YXIgPiBkaXY6aG92ZXIsXFxuLmFudC1yYXRlLXN0YXIgPiBkaXY6Zm9jdXMge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uYW50LXJhdGUtc3Rhci1maXJzdCxcXG4uYW50LXJhdGUtc3Rhci1zZWNvbmQge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGNvbG9yOiAjZThlOGU4O1xcbn1cXG4uYW50LXJhdGUtc3Rhci1maXJzdCAuYW50aWNvbixcXG4uYW50LXJhdGUtc3Rhci1zZWNvbmQgLmFudGljb24ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmFudC1yYXRlLXN0YXItZmlyc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmFudC1yYXRlLXN0YXItaGFsZiAuYW50LXJhdGUtc3Rhci1maXJzdCxcXG4uYW50LXJhdGUtc3Rhci1oYWxmIC5hbnQtcmF0ZS1zdGFyLXNlY29uZCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uYW50LXJhdGUtc3Rhci1oYWxmIC5hbnQtcmF0ZS1zdGFyLWZpcnN0LFxcbi5hbnQtcmF0ZS1zdGFyLWZ1bGwgLmFudC1yYXRlLXN0YXItc2Vjb25kIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4uYW50LXJhdGUtdGV4dCB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmZ1bmN0aW9uIGFkanVzdEZvclZpZXdwb3J0KGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QsIG92ZXJmbG93KSB7XG4gIHZhciBwb3MgPSB1dGlscy5jbG9uZShlbEZ1dHVyZVBvcyk7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiBlbFJlZ2lvbi53aWR0aCxcbiAgICBoZWlnaHQ6IGVsUmVnaW9uLmhlaWdodFxuICB9O1xuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RYICYmIHBvcy5sZWZ0IDwgdmlzaWJsZVJlY3QubGVmdCkge1xuICAgIHBvcy5sZWZ0ID0gdmlzaWJsZVJlY3QubGVmdDtcbiAgfVxuXG4gIC8vIExlZnQgZWRnZSBpbnNpZGUgYW5kIHJpZ2h0IGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIHJlc2l6ZSBpdC5cbiAgaWYgKG92ZXJmbG93LnJlc2l6ZVdpZHRoICYmIHBvcy5sZWZ0ID49IHZpc2libGVSZWN0LmxlZnQgJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICBzaXplLndpZHRoIC09IHBvcy5sZWZ0ICsgc2l6ZS53aWR0aCAtIHZpc2libGVSZWN0LnJpZ2h0O1xuICB9XG5cbiAgLy8gUmlnaHQgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFggJiYgcG9zLmxlZnQgKyBzaXplLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQpIHtcbiAgICAvLyDkv53or4Hlt6bovrnnlYzlkozlj6/op4bljLrln5/lt6bovrnnlYzlr7npvZBcbiAgICBwb3MubGVmdCA9IE1hdGgubWF4KHZpc2libGVSZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCwgdmlzaWJsZVJlY3QubGVmdCk7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBvdXRzaWRlIHZpZXdwb3J0LCB0cnkgdG8gbW92ZSBpdC5cbiAgaWYgKG92ZXJmbG93LmFkanVzdFkgJiYgcG9zLnRvcCA8IHZpc2libGVSZWN0LnRvcCkge1xuICAgIHBvcy50b3AgPSB2aXNpYmxlUmVjdC50b3A7XG4gIH1cblxuICAvLyBUb3AgZWRnZSBpbnNpZGUgYW5kIGJvdHRvbSBlZGdlIG91dHNpZGUgdmlld3BvcnQsIHRyeSB0byByZXNpemUgaXQuXG4gIGlmIChvdmVyZmxvdy5yZXNpemVIZWlnaHQgJiYgcG9zLnRvcCA+PSB2aXNpYmxlUmVjdC50b3AgJiYgcG9zLnRvcCArIHNpemUuaGVpZ2h0ID4gdmlzaWJsZVJlY3QuYm90dG9tKSB7XG4gICAgc2l6ZS5oZWlnaHQgLT0gcG9zLnRvcCArIHNpemUuaGVpZ2h0IC0gdmlzaWJsZVJlY3QuYm90dG9tO1xuICB9XG5cbiAgLy8gQm90dG9tIGVkZ2Ugb3V0c2lkZSB2aWV3cG9ydCwgdHJ5IHRvIG1vdmUgaXQuXG4gIGlmIChvdmVyZmxvdy5hZGp1c3RZICYmIHBvcy50b3AgKyBzaXplLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbSkge1xuICAgIC8vIOS/neivgeS4iui+ueeVjOWSjOWPr+inhuWMuuWfn+S4iui+ueeVjOWvuem9kFxuICAgIHBvcy50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCwgdmlzaWJsZVJlY3QudG9wKTtcbiAgfVxuXG4gIHJldHVybiB1dGlscy5taXgocG9zLCBzaXplKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRqdXN0Rm9yVmlld3BvcnQ7IiwiLyoqXG4gKiBhbGlnbiBkb20gbm9kZSBmbGV4aWJseVxuICogQGF1dGhvciB5aW1pbmdoZUBnbWFpbC5jb21cbiAqL1xuXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudCBmcm9tICcuLi9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQnO1xuaW1wb3J0IGFkanVzdEZvclZpZXdwb3J0IGZyb20gJy4uL2FkanVzdEZvclZpZXdwb3J0JztcbmltcG9ydCBnZXRSZWdpb24gZnJvbSAnLi4vZ2V0UmVnaW9uJztcbmltcG9ydCBnZXRFbEZ1dHVyZVBvcyBmcm9tICcuLi9nZXRFbEZ1dHVyZVBvcyc7XG5cbi8vIGh0dHA6Ly95aW1pbmdoZS5pdGV5ZS5jb20vYmxvZy8xMTI0NzIwXG5cbmZ1bmN0aW9uIGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MubGVmdCA8IHZpc2libGVSZWN0LmxlZnQgfHwgZWxGdXR1cmVQb3MubGVmdCArIGVsUmVnaW9uLndpZHRoID4gdmlzaWJsZVJlY3QucmlnaHQ7XG59XG5cbmZ1bmN0aW9uIGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MudG9wIDwgdmlzaWJsZVJlY3QudG9wIHx8IGVsRnV0dXJlUG9zLnRvcCArIGVsUmVnaW9uLmhlaWdodCA+IHZpc2libGVSZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gaXNDb21wbGV0ZUZhaWxYKGVsRnV0dXJlUG9zLCBlbFJlZ2lvbiwgdmlzaWJsZVJlY3QpIHtcbiAgcmV0dXJuIGVsRnV0dXJlUG9zLmxlZnQgPiB2aXNpYmxlUmVjdC5yaWdodCB8fCBlbEZ1dHVyZVBvcy5sZWZ0ICsgZWxSZWdpb24ud2lkdGggPCB2aXNpYmxlUmVjdC5sZWZ0O1xufVxuXG5mdW5jdGlvbiBpc0NvbXBsZXRlRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkge1xuICByZXR1cm4gZWxGdXR1cmVQb3MudG9wID4gdmlzaWJsZVJlY3QuYm90dG9tIHx8IGVsRnV0dXJlUG9zLnRvcCArIGVsUmVnaW9uLmhlaWdodCA8IHZpc2libGVSZWN0LnRvcDtcbn1cblxuZnVuY3Rpb24gZmxpcChwb2ludHMsIHJlZywgbWFwKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgdXRpbHMuZWFjaChwb2ludHMsIGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0LnB1c2gocC5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtYXBbbV07XG4gICAgfSkpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZmxpcE9mZnNldChvZmZzZXQsIGluZGV4KSB7XG4gIG9mZnNldFtpbmRleF0gPSAtb2Zmc2V0W2luZGV4XTtcbiAgcmV0dXJuIG9mZnNldDtcbn1cblxuZnVuY3Rpb24gY29udmVydE9mZnNldChzdHIsIG9mZnNldExlbikge1xuICB2YXIgbiA9IHZvaWQgMDtcbiAgaWYgKC8lJC8udGVzdChzdHIpKSB7XG4gICAgbiA9IHBhcnNlSW50KHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpLCAxMCkgLyAxMDAgKiBvZmZzZXRMZW47XG4gIH0gZWxzZSB7XG4gICAgbiA9IHBhcnNlSW50KHN0ciwgMTApO1xuICB9XG4gIHJldHVybiBuIHx8IDA7XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9mZnNldChvZmZzZXQsIGVsKSB7XG4gIG9mZnNldFswXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzBdLCBlbC53aWR0aCk7XG4gIG9mZnNldFsxXSA9IGNvbnZlcnRPZmZzZXQob2Zmc2V0WzFdLCBlbC5oZWlnaHQpO1xufVxuXG4vKipcbiAqIEBwYXJhbSBlbFxuICogQHBhcmFtIHRndFJlZ2lvbiDlj4LnhafoioLngrnmiYDljaDnmoTljLrln586IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH1cbiAqIEBwYXJhbSBhbGlnblxuICovXG5mdW5jdGlvbiBkb0FsaWduKGVsLCB0Z3RSZWdpb24sIGFsaWduLCBpc1RndFJlZ2lvblZpc2libGUpIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgdmFyIG9mZnNldCA9IGFsaWduLm9mZnNldCB8fCBbMCwgMF07XG4gIHZhciB0YXJnZXRPZmZzZXQgPSBhbGlnbi50YXJnZXRPZmZzZXQgfHwgWzAsIDBdO1xuICB2YXIgb3ZlcmZsb3cgPSBhbGlnbi5vdmVyZmxvdztcbiAgdmFyIHNvdXJjZSA9IGFsaWduLnNvdXJjZSB8fCBlbDtcbiAgb2Zmc2V0ID0gW10uY29uY2F0KG9mZnNldCk7XG4gIHRhcmdldE9mZnNldCA9IFtdLmNvbmNhdCh0YXJnZXRPZmZzZXQpO1xuICBvdmVyZmxvdyA9IG92ZXJmbG93IHx8IHt9O1xuICB2YXIgbmV3T3ZlcmZsb3dDZmcgPSB7fTtcbiAgdmFyIGZhaWwgPSAwO1xuICAvLyDlvZPliY3oioLngrnlj6/ku6XooqvmlL7nva7nmoTmmL7npLrljLrln59cbiAgdmFyIHZpc2libGVSZWN0ID0gZ2V0VmlzaWJsZVJlY3RGb3JFbGVtZW50KHNvdXJjZSk7XG4gIC8vIOW9k+WJjeiKgueCueaJgOWNoOeahOWMuuWfnywgbGVmdC90b3Avd2lkdGgvaGVpZ2h0XG4gIHZhciBlbFJlZ2lvbiA9IGdldFJlZ2lvbihzb3VyY2UpO1xuICAvLyDlsIYgb2Zmc2V0IOi9rOaNouaIkOaVsOWAvO+8jOaUr+aMgeeZvuWIhuavlFxuICBub3JtYWxpemVPZmZzZXQob2Zmc2V0LCBlbFJlZ2lvbik7XG4gIG5vcm1hbGl6ZU9mZnNldCh0YXJnZXRPZmZzZXQsIHRndFJlZ2lvbik7XG4gIC8vIOW9k+WJjeiKgueCueWwhuimgeiiq+aUvue9rueahOS9jee9rlxuICB2YXIgZWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBwb2ludHMsIG9mZnNldCwgdGFyZ2V0T2Zmc2V0KTtcbiAgLy8g5b2T5YmN6IqC54K55bCG6KaB5omA5aSE55qE5Yy65Z+fXG4gIHZhciBuZXdFbFJlZ2lvbiA9IHV0aWxzLm1lcmdlKGVsUmVnaW9uLCBlbEZ1dHVyZVBvcyk7XG5cbiAgLy8g5aaC5p6c5Y+v6KeG5Yy65Z+f5LiN6IO95a6M5YWo5pS+572u5b2T5YmN6IqC54K55pe25YWB6K646LCD5pW0XG4gIGlmICh2aXNpYmxlUmVjdCAmJiAob3ZlcmZsb3cuYWRqdXN0WCB8fCBvdmVyZmxvdy5hZGp1c3RZKSAmJiBpc1RndFJlZ2lvblZpc2libGUpIHtcbiAgICBpZiAob3ZlcmZsb3cuYWRqdXN0WCkge1xuICAgICAgLy8g5aaC5p6c5qiq5ZCR5LiN6IO95pS+5LiLXG4gICAgICBpZiAoaXNGYWlsWChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAvLyDlr7npvZDkvY3nva7lj43kuItcbiAgICAgICAgdmFyIG5ld1BvaW50cyA9IGZsaXAocG9pbnRzLCAvW2xyXS9pZywge1xuICAgICAgICAgIGw6ICdyJyxcbiAgICAgICAgICByOiAnbCdcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOWBj+enu+mHj+S5n+WPjeS4i1xuICAgICAgICB2YXIgbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDApO1xuICAgICAgICB2YXIgbmV3VGFyZ2V0T2Zmc2V0ID0gZmxpcE9mZnNldCh0YXJnZXRPZmZzZXQsIDApO1xuICAgICAgICB2YXIgbmV3RWxGdXR1cmVQb3MgPSBnZXRFbEZ1dHVyZVBvcyhlbFJlZ2lvbiwgdGd0UmVnaW9uLCBuZXdQb2ludHMsIG5ld09mZnNldCwgbmV3VGFyZ2V0T2Zmc2V0KTtcblxuICAgICAgICBpZiAoIWlzQ29tcGxldGVGYWlsWChuZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IG5ld1BvaW50cztcbiAgICAgICAgICBvZmZzZXQgPSBuZXdPZmZzZXQ7XG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG92ZXJmbG93LmFkanVzdFkpIHtcbiAgICAgIC8vIOWmguaenOe6teWQkeS4jeiDveaUvuS4i1xuICAgICAgaWYgKGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCkpIHtcbiAgICAgICAgLy8g5a+56b2Q5L2N572u5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3UG9pbnRzID0gZmxpcChwb2ludHMsIC9bdGJdL2lnLCB7XG4gICAgICAgICAgdDogJ2InLFxuICAgICAgICAgIGI6ICd0J1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5YGP56e76YeP5Lmf5Y+N5LiLXG4gICAgICAgIHZhciBfbmV3T2Zmc2V0ID0gZmxpcE9mZnNldChvZmZzZXQsIDEpO1xuICAgICAgICB2YXIgX25ld1RhcmdldE9mZnNldCA9IGZsaXBPZmZzZXQodGFyZ2V0T2Zmc2V0LCAxKTtcbiAgICAgICAgdmFyIF9uZXdFbEZ1dHVyZVBvcyA9IGdldEVsRnV0dXJlUG9zKGVsUmVnaW9uLCB0Z3RSZWdpb24sIF9uZXdQb2ludHMsIF9uZXdPZmZzZXQsIF9uZXdUYXJnZXRPZmZzZXQpO1xuXG4gICAgICAgIGlmICghaXNDb21wbGV0ZUZhaWxZKF9uZXdFbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0KSkge1xuICAgICAgICAgIGZhaWwgPSAxO1xuICAgICAgICAgIHBvaW50cyA9IF9uZXdQb2ludHM7XG4gICAgICAgICAgb2Zmc2V0ID0gX25ld09mZnNldDtcbiAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBfbmV3VGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aaC5p6c5aSx6LSl77yM6YeN5paw6K6h566X5b2T5YmN6IqC54K55bCG6KaB6KKr5pS+572u55qE5L2N572uXG4gICAgaWYgKGZhaWwpIHtcbiAgICAgIGVsRnV0dXJlUG9zID0gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHRndFJlZ2lvbiwgcG9pbnRzLCBvZmZzZXQsIHRhcmdldE9mZnNldCk7XG4gICAgICB1dGlscy5taXgobmV3RWxSZWdpb24sIGVsRnV0dXJlUG9zKTtcbiAgICB9XG4gICAgdmFyIGlzU3RpbGxGYWlsWCA9IGlzRmFpbFgoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7XG4gICAgdmFyIGlzU3RpbGxGYWlsWSA9IGlzRmFpbFkoZWxGdXR1cmVQb3MsIGVsUmVnaW9uLCB2aXNpYmxlUmVjdCk7XG4gICAgLy8g5qOA5p+l5Y+N5LiL5ZCO55qE5L2N572u5piv5ZCm5Y+v5Lul5pS+5LiL5LqG77yM5aaC5p6c5LuN54S25pS+5LiN5LiL77yaXG4gICAgLy8gMS4g5aSN5Y6f5L+u5pS56L+H55qE5a6a5L2N5Y+C5pWwXG4gICAgaWYgKGlzU3RpbGxGYWlsWCB8fCBpc1N0aWxsRmFpbFkpIHtcbiAgICAgIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgICAgIG9mZnNldCA9IGFsaWduLm9mZnNldCB8fCBbMCwgMF07XG4gICAgICB0YXJnZXRPZmZzZXQgPSBhbGlnbi50YXJnZXRPZmZzZXQgfHwgWzAsIDBdO1xuICAgIH1cbiAgICAvLyAyLiDlj6rmnInmjIflrprkuoblj6/ku6XosIPmlbTlvZPliY3mlrnlkJHmiY3osIPmlbRcbiAgICBuZXdPdmVyZmxvd0NmZy5hZGp1c3RYID0gb3ZlcmZsb3cuYWRqdXN0WCAmJiBpc1N0aWxsRmFpbFg7XG4gICAgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WSA9IG92ZXJmbG93LmFkanVzdFkgJiYgaXNTdGlsbEZhaWxZO1xuXG4gICAgLy8g56Gu5a6e6KaB6LCD5pW077yM55Sa6Iez5Y+v6IO95Lya6LCD5pW06auY5bqm5a695bqmXG4gICAgaWYgKG5ld092ZXJmbG93Q2ZnLmFkanVzdFggfHwgbmV3T3ZlcmZsb3dDZmcuYWRqdXN0WSkge1xuICAgICAgbmV3RWxSZWdpb24gPSBhZGp1c3RGb3JWaWV3cG9ydChlbEZ1dHVyZVBvcywgZWxSZWdpb24sIHZpc2libGVSZWN0LCBuZXdPdmVyZmxvd0NmZyk7XG4gICAgfVxuICB9XG5cbiAgLy8gbmVlZCBqdWRnZSB0byBpbiBjYXNlIHNldCBmaXhlZCB3aXRoIGluIGNzcyBvbiBoZWlnaHQgYXV0byBlbGVtZW50XG4gIGlmIChuZXdFbFJlZ2lvbi53aWR0aCAhPT0gZWxSZWdpb24ud2lkdGgpIHtcbiAgICB1dGlscy5jc3Moc291cmNlLCAnd2lkdGgnLCB1dGlscy53aWR0aChzb3VyY2UpICsgbmV3RWxSZWdpb24ud2lkdGggLSBlbFJlZ2lvbi53aWR0aCk7XG4gIH1cblxuICBpZiAobmV3RWxSZWdpb24uaGVpZ2h0ICE9PSBlbFJlZ2lvbi5oZWlnaHQpIHtcbiAgICB1dGlscy5jc3Moc291cmNlLCAnaGVpZ2h0JywgdXRpbHMuaGVpZ2h0KHNvdXJjZSkgKyBuZXdFbFJlZ2lvbi5oZWlnaHQgLSBlbFJlZ2lvbi5oZWlnaHQpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2tpc3N5dGVhbS9raXNzeS9pc3N1ZXMvMTkwXG4gIC8vIOebuOWvueS6juWxj+W5leS9jee9ruayoeWPmO+8jOiAjCBsZWZ0L3RvcCDlj5jkuoZcbiAgLy8g5L6L5aaCIDxkaXYgJ3JlbGF0aXZlJz48ZWwgYWJzb2x1dGU+PC9kaXY+XG4gIHV0aWxzLm9mZnNldChzb3VyY2UsIHtcbiAgICBsZWZ0OiBuZXdFbFJlZ2lvbi5sZWZ0LFxuICAgIHRvcDogbmV3RWxSZWdpb24udG9wXG4gIH0sIHtcbiAgICB1c2VDc3NSaWdodDogYWxpZ24udXNlQ3NzUmlnaHQsXG4gICAgdXNlQ3NzQm90dG9tOiBhbGlnbi51c2VDc3NCb3R0b20sXG4gICAgdXNlQ3NzVHJhbnNmb3JtOiBhbGlnbi51c2VDc3NUcmFuc2Zvcm0sXG4gICAgaWdub3JlU2hha2U6IGFsaWduLmlnbm9yZVNoYWtlXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcG9pbnRzOiBwb2ludHMsXG4gICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgb3ZlcmZsb3c6IG5ld092ZXJmbG93Q2ZnXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvQWxpZ247XG4vKipcbiAqICAyMDEyLTA0LTI2IHlpbWluZ2hlQGdtYWlsLmNvbVxuICogICAtIOS8mOWMluaZuuiDveWvuem9kOeul+azlVxuICogICAtIOaFjueUqCByZXNpemVYWFxuICpcbiAqICAyMDExLTA3LTEzIHlpbWluZ2hlQGdtYWlsLmNvbSBub3RlOlxuICogICAtIOWinuWKoOaZuuiDveWvuem9kO+8jOS7peWPiuWkp+Wwj+iwg+aVtOmAiemhuVxuICoqLyIsImltcG9ydCBkb0FsaWduIGZyb20gJy4vYWxpZ24nO1xuaW1wb3J0IGdldE9mZnNldFBhcmVudCBmcm9tICcuLi9nZXRPZmZzZXRQYXJlbnQnO1xuaW1wb3J0IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudCBmcm9tICcuLi9nZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQnO1xuaW1wb3J0IGdldFJlZ2lvbiBmcm9tICcuLi9nZXRSZWdpb24nO1xuXG5mdW5jdGlvbiBpc091dE9mVmlzaWJsZVJlY3QodGFyZ2V0KSB7XG4gIHZhciB2aXNpYmxlUmVjdCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudCh0YXJnZXQpO1xuICB2YXIgdGFyZ2V0UmVnaW9uID0gZ2V0UmVnaW9uKHRhcmdldCk7XG5cbiAgcmV0dXJuICF2aXNpYmxlUmVjdCB8fCB0YXJnZXRSZWdpb24ubGVmdCArIHRhcmdldFJlZ2lvbi53aWR0aCA8PSB2aXNpYmxlUmVjdC5sZWZ0IHx8IHRhcmdldFJlZ2lvbi50b3AgKyB0YXJnZXRSZWdpb24uaGVpZ2h0IDw9IHZpc2libGVSZWN0LnRvcCB8fCB0YXJnZXRSZWdpb24ubGVmdCA+PSB2aXNpYmxlUmVjdC5yaWdodCB8fCB0YXJnZXRSZWdpb24udG9wID49IHZpc2libGVSZWN0LmJvdHRvbTtcbn1cblxuZnVuY3Rpb24gYWxpZ25FbGVtZW50KGVsLCByZWZOb2RlLCBhbGlnbikge1xuICB2YXIgdGFyZ2V0ID0gYWxpZ24udGFyZ2V0IHx8IHJlZk5vZGU7XG4gIHZhciByZWZOb2RlUmVnaW9uID0gZ2V0UmVnaW9uKHRhcmdldCk7XG5cbiAgdmFyIGlzVGFyZ2V0Tm90T3V0T2ZWaXNpYmxlID0gIWlzT3V0T2ZWaXNpYmxlUmVjdCh0YXJnZXQpO1xuXG4gIHJldHVybiBkb0FsaWduKGVsLCByZWZOb2RlUmVnaW9uLCBhbGlnbiwgaXNUYXJnZXROb3RPdXRPZlZpc2libGUpO1xufVxuXG5hbGlnbkVsZW1lbnQuX19nZXRPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQ7XG5cbmFsaWduRWxlbWVudC5fX2dldFZpc2libGVSZWN0Rm9yRWxlbWVudCA9IGdldFZpc2libGVSZWN0Rm9yRWxlbWVudDtcblxuZXhwb3J0IGRlZmF1bHQgYWxpZ25FbGVtZW50OyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgZG9BbGlnbiBmcm9tICcuL2FsaWduJztcblxuLyoqXG4gKiBgdGd0UG9pbnRgOiB7IHBhZ2VYLCBwYWdlWSB9IG9yIHsgY2xpZW50WCwgY2xpZW50WSB9LlxuICogSWYgY2xpZW50IHBvc2l0aW9uIHByb3ZpZGVkLCB3aWxsIGludGVybmFsIGNvbnZlcnQgdG8gcGFnZSBwb3NpdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBhbGlnblBvaW50KGVsLCB0Z3RQb2ludCwgYWxpZ24pIHtcbiAgdmFyIHBhZ2VYID0gdm9pZCAwO1xuICB2YXIgcGFnZVkgPSB2b2lkIDA7XG5cbiAgdmFyIGRvYyA9IHV0aWxzLmdldERvY3VtZW50KGVsKTtcbiAgdmFyIHdpbiA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuXG4gIHZhciBzY3JvbGxYID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pO1xuICB2YXIgdmlld3BvcnRXaWR0aCA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcblxuICBpZiAoJ3BhZ2VYJyBpbiB0Z3RQb2ludCkge1xuICAgIHBhZ2VYID0gdGd0UG9pbnQucGFnZVg7XG4gIH0gZWxzZSB7XG4gICAgcGFnZVggPSBzY3JvbGxYICsgdGd0UG9pbnQuY2xpZW50WDtcbiAgfVxuXG4gIGlmICgncGFnZVknIGluIHRndFBvaW50KSB7XG4gICAgcGFnZVkgPSB0Z3RQb2ludC5wYWdlWTtcbiAgfSBlbHNlIHtcbiAgICBwYWdlWSA9IHNjcm9sbFkgKyB0Z3RQb2ludC5jbGllbnRZO1xuICB9XG5cbiAgdmFyIHRndFJlZ2lvbiA9IHtcbiAgICBsZWZ0OiBwYWdlWCxcbiAgICB0b3A6IHBhZ2VZLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xuXG4gIHZhciBwb2ludEluVmlldyA9IHBhZ2VYID49IDAgJiYgcGFnZVggPD0gc2Nyb2xsWCArIHZpZXdwb3J0V2lkdGggJiYgcGFnZVkgPj0gMCAmJiBwYWdlWSA8PSBzY3JvbGxZICsgdmlld3BvcnRIZWlnaHQ7XG5cbiAgLy8gUHJvdmlkZSBkZWZhdWx0IHRhcmdldCBwb2ludFxuICB2YXIgcG9pbnRzID0gW2FsaWduLnBvaW50c1swXSwgJ2NjJ107XG5cbiAgcmV0dXJuIGRvQWxpZ24oZWwsIHRndFJlZ2lvbiwgX2V4dGVuZHMoe30sIGFsaWduLCB7IHBvaW50czogcG9pbnRzIH0pLCBwb2ludEluVmlldyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsaWduUG9pbnQ7IiwiLyoqXG4gKiDojrflj5Ygbm9kZSDkuIrnmoQgYWxpZ24g5a+56b2Q54K5IOebuOWvueS6jumhtemdoueahOWdkOagh1xuICovXG5cbmZ1bmN0aW9uIGdldEFsaWduT2Zmc2V0KHJlZ2lvbiwgYWxpZ24pIHtcbiAgdmFyIFYgPSBhbGlnbi5jaGFyQXQoMCk7XG4gIHZhciBIID0gYWxpZ24uY2hhckF0KDEpO1xuICB2YXIgdyA9IHJlZ2lvbi53aWR0aDtcbiAgdmFyIGggPSByZWdpb24uaGVpZ2h0O1xuXG4gIHZhciB4ID0gcmVnaW9uLmxlZnQ7XG4gIHZhciB5ID0gcmVnaW9uLnRvcDtcblxuICBpZiAoViA9PT0gJ2MnKSB7XG4gICAgeSArPSBoIC8gMjtcbiAgfSBlbHNlIGlmIChWID09PSAnYicpIHtcbiAgICB5ICs9IGg7XG4gIH1cblxuICBpZiAoSCA9PT0gJ2MnKSB7XG4gICAgeCArPSB3IC8gMjtcbiAgfSBlbHNlIGlmIChIID09PSAncicpIHtcbiAgICB4ICs9IHc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsaWduT2Zmc2V0OyIsImltcG9ydCBnZXRBbGlnbk9mZnNldCBmcm9tICcuL2dldEFsaWduT2Zmc2V0JztcblxuZnVuY3Rpb24gZ2V0RWxGdXR1cmVQb3MoZWxSZWdpb24sIHJlZk5vZGVSZWdpb24sIHBvaW50cywgb2Zmc2V0LCB0YXJnZXRPZmZzZXQpIHtcbiAgdmFyIHAxID0gZ2V0QWxpZ25PZmZzZXQocmVmTm9kZVJlZ2lvbiwgcG9pbnRzWzFdKTtcbiAgdmFyIHAyID0gZ2V0QWxpZ25PZmZzZXQoZWxSZWdpb24sIHBvaW50c1swXSk7XG4gIHZhciBkaWZmID0gW3AyLmxlZnQgLSBwMS5sZWZ0LCBwMi50b3AgLSBwMS50b3BdO1xuXG4gIHJldHVybiB7XG4gICAgbGVmdDogZWxSZWdpb24ubGVmdCAtIGRpZmZbMF0gKyBvZmZzZXRbMF0gLSB0YXJnZXRPZmZzZXRbMF0sXG4gICAgdG9wOiBlbFJlZ2lvbi50b3AgLSBkaWZmWzFdICsgb2Zmc2V0WzFdIC0gdGFyZ2V0T2Zmc2V0WzFdXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEVsRnV0dXJlUG9zOyIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiDlvpfliLDkvJrlr7zoh7TlhYPntKDmmL7npLrkuI3lhajnmoTnpZblhYjlhYPntKBcbiAqL1xuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAodXRpbHMuaXNXaW5kb3coZWxlbWVudCkgfHwgZWxlbWVudC5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIGllIOi/meS4quS5n+S4jeaYr+WujOWFqOWPr+ihjFxuICAvKlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7b3ZlcmZsb3c6IGhpZGRlblwiPlxuICAgPGRpdiBzdHlsZT1cIndpZHRoOiA1MHB4O2hlaWdodDogMTAwcHg7cG9zaXRpb246IHJlbGF0aXZlO1wiIGlkPVwiZDZcIj5cbiAgIOWFg+e0oCA2IOmrmCAxMDBweCDlrr0gNTBweDxici8+XG4gICA8L2Rpdj5cbiAgIDwvZGl2PlxuICAgKi9cbiAgLy8gZWxlbWVudC5vZmZzZXRQYXJlbnQgZG9lcyB0aGUgcmlnaHQgdGhpbmcgaW4gaWU3IGFuZCBiZWxvdy4gUmV0dXJuIHBhcmVudCB3aXRoIGxheW91dCFcbiAgLy8gIEluIG90aGVyIGJyb3dzZXJzIGl0IG9ubHkgaW5jbHVkZXMgZWxlbWVudHMgd2l0aCBwb3NpdGlvbiBhYnNvbHV0ZSwgcmVsYXRpdmUgb3JcbiAgLy8gZml4ZWQsIG5vdCBlbGVtZW50cyB3aXRoIG92ZXJmbG93IHNldCB0byBhdXRvIG9yIHNjcm9sbC5cbiAgLy8gICAgICAgIGlmIChVQS5pZSAmJiBpZU1vZGUgPCA4KSB7XG4gIC8vICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAvLyAgICAgICAgfVxuICAvLyDnu5/kuIDnmoQgb2Zmc2V0UGFyZW50IOaWueazlVxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQgPSB2b2lkIDA7XG4gIHZhciBwb3NpdGlvblN0eWxlID0gdXRpbHMuY3NzKGVsZW1lbnQsICdwb3NpdGlvbicpO1xuICB2YXIgc2tpcFN0YXRpYyA9IHBvc2l0aW9uU3R5bGUgPT09ICdmaXhlZCcgfHwgcG9zaXRpb25TdHlsZSA9PT0gJ2Fic29sdXRlJztcblxuICBpZiAoIXNraXBTdGF0aWMpIHtcbiAgICByZXR1cm4gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcgPyBudWxsIDogZWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG5cbiAgZm9yIChwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7IHBhcmVudCAmJiBwYXJlbnQgIT09IGJvZHk7IHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhwYXJlbnQsICdwb3NpdGlvbicpO1xuICAgIGlmIChwb3NpdGlvblN0eWxlICE9PSAnc3RhdGljJykge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE9mZnNldFBhcmVudDsiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5cbmZ1bmN0aW9uIGdldFJlZ2lvbihub2RlKSB7XG4gIHZhciBvZmZzZXQgPSB2b2lkIDA7XG4gIHZhciB3ID0gdm9pZCAwO1xuICB2YXIgaCA9IHZvaWQgMDtcbiAgaWYgKCF1dGlscy5pc1dpbmRvdyhub2RlKSAmJiBub2RlLm5vZGVUeXBlICE9PSA5KSB7XG4gICAgb2Zmc2V0ID0gdXRpbHMub2Zmc2V0KG5vZGUpO1xuICAgIHcgPSB1dGlscy5vdXRlcldpZHRoKG5vZGUpO1xuICAgIGggPSB1dGlscy5vdXRlckhlaWdodChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgd2luID0gdXRpbHMuZ2V0V2luZG93KG5vZGUpO1xuICAgIG9mZnNldCA9IHtcbiAgICAgIGxlZnQ6IHV0aWxzLmdldFdpbmRvd1Njcm9sbExlZnQod2luKSxcbiAgICAgIHRvcDogdXRpbHMuZ2V0V2luZG93U2Nyb2xsVG9wKHdpbilcbiAgICB9O1xuICAgIHcgPSB1dGlscy52aWV3cG9ydFdpZHRoKHdpbik7XG4gICAgaCA9IHV0aWxzLnZpZXdwb3J0SGVpZ2h0KHdpbik7XG4gIH1cbiAgb2Zmc2V0LndpZHRoID0gdztcbiAgb2Zmc2V0LmhlaWdodCA9IGg7XG4gIHJldHVybiBvZmZzZXQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFJlZ2lvbjsiLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZ2V0T2Zmc2V0UGFyZW50IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcbmltcG9ydCBpc0FuY2VzdG9yRml4ZWQgZnJvbSAnLi9pc0FuY2VzdG9yRml4ZWQnO1xuXG4vKipcbiAqIOiOt+W+l+WFg+e0oOeahOaYvuekuumDqOWIhueahOWMuuWfn1xuICovXG5mdW5jdGlvbiBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQoZWxlbWVudCkge1xuICB2YXIgdmlzaWJsZVJlY3QgPSB7XG4gICAgbGVmdDogMCxcbiAgICByaWdodDogSW5maW5pdHksXG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogSW5maW5pdHlcbiAgfTtcbiAgdmFyIGVsID0gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY3VtZW50RWxlbWVudCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLy8gRGV0ZXJtaW5lIHRoZSBzaXplIG9mIHRoZSB2aXNpYmxlIHJlY3QgYnkgY2xpbWJpbmcgdGhlIGRvbSBhY2NvdW50aW5nIGZvclxuICAvLyBhbGwgc2Nyb2xsYWJsZSBjb250YWluZXJzLlxuICB3aGlsZSAoZWwpIHtcbiAgICAvLyBjbGllbnRXaWR0aCBpcyB6ZXJvIGZvciBpbmxpbmUgYmxvY2sgZWxlbWVudHMgaW4gaWUuXG4gICAgaWYgKChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ01TSUUnKSA9PT0gLTEgfHwgZWwuY2xpZW50V2lkdGggIT09IDApICYmXG4gICAgLy8gYm9keSBtYXkgaGF2ZSBvdmVyZmxvdyBzZXQgb24gaXQsIHlldCB3ZSBzdGlsbCBnZXQgdGhlIGVudGlyZVxuICAgIC8vIHZpZXdwb3J0LiBJbiBzb21lIGJyb3dzZXJzLCBlbC5vZmZzZXRQYXJlbnQgbWF5IGJlXG4gICAgLy8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBzbyBjaGVjayBmb3IgdGhhdCB0b28uXG4gICAgZWwgIT09IGJvZHkgJiYgZWwgIT09IGRvY3VtZW50RWxlbWVudCAmJiB1dGlscy5jc3MoZWwsICdvdmVyZmxvdycpICE9PSAndmlzaWJsZScpIHtcbiAgICAgIHZhciBwb3MgPSB1dGlscy5vZmZzZXQoZWwpO1xuICAgICAgLy8gYWRkIGJvcmRlclxuICAgICAgcG9zLmxlZnQgKz0gZWwuY2xpZW50TGVmdDtcbiAgICAgIHBvcy50b3AgKz0gZWwuY2xpZW50VG9wO1xuICAgICAgdmlzaWJsZVJlY3QudG9wID0gTWF0aC5tYXgodmlzaWJsZVJlY3QudG9wLCBwb3MudG9wKTtcbiAgICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsXG4gICAgICAvLyBjb25zaWRlciBhcmVhIHdpdGhvdXQgc2Nyb2xsQmFyXG4gICAgICBwb3MubGVmdCArIGVsLmNsaWVudFdpZHRoKTtcbiAgICAgIHZpc2libGVSZWN0LmJvdHRvbSA9IE1hdGgubWluKHZpc2libGVSZWN0LmJvdHRvbSwgcG9zLnRvcCArIGVsLmNsaWVudEhlaWdodCk7XG4gICAgICB2aXNpYmxlUmVjdC5sZWZ0ID0gTWF0aC5tYXgodmlzaWJsZVJlY3QubGVmdCwgcG9zLmxlZnQpO1xuICAgIH0gZWxzZSBpZiAoZWwgPT09IGJvZHkgfHwgZWwgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGVsID0gZ2V0T2Zmc2V0UGFyZW50KGVsKTtcbiAgfVxuXG4gIC8vIFNldCBlbGVtZW50IHBvc2l0aW9uIHRvIGZpeGVkXG4gIC8vIG1ha2Ugc3VyZSBhYnNvbHV0ZSBlbGVtZW50IGl0c2VsZiBkb24ndCBhZmZlY3QgaXQncyB2aXNpYmxlIGFyZWFcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNzYwMVxuICB2YXIgb3JpZ2luYWxQb3NpdGlvbiA9IG51bGw7XG4gIGlmICghdXRpbHMuaXNXaW5kb3coZWxlbWVudCkgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gOSkge1xuICAgIG9yaWdpbmFsUG9zaXRpb24gPSBlbGVtZW50LnN0eWxlLnBvc2l0aW9uO1xuICAgIHZhciBwb3NpdGlvbiA9IHV0aWxzLmNzcyhlbGVtZW50LCAncG9zaXRpb24nKTtcbiAgICBpZiAocG9zaXRpb24gPT09ICdhYnNvbHV0ZScpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzY3JvbGxYID0gdXRpbHMuZ2V0V2luZG93U2Nyb2xsTGVmdCh3aW4pO1xuICB2YXIgc2Nyb2xsWSA9IHV0aWxzLmdldFdpbmRvd1Njcm9sbFRvcCh3aW4pO1xuICB2YXIgdmlld3BvcnRXaWR0aCA9IHV0aWxzLnZpZXdwb3J0V2lkdGgod2luKTtcbiAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gdXRpbHMudmlld3BvcnRIZWlnaHQod2luKTtcbiAgdmFyIGRvY3VtZW50V2lkdGggPSBkb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIHZhciBkb2N1bWVudEhlaWdodCA9IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQ7XG5cbiAgLy8gUmVzZXQgZWxlbWVudCBwb3NpdGlvbiBhZnRlciBjYWxjdWxhdGUgdGhlIHZpc2libGUgYXJlYVxuICBpZiAoZWxlbWVudC5zdHlsZSkge1xuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBvcmlnaW5hbFBvc2l0aW9uO1xuICB9XG5cbiAgaWYgKGlzQW5jZXN0b3JGaXhlZChlbGVtZW50KSkge1xuICAgIC8vIENsaXAgYnkgdmlld3BvcnQncyBzaXplLlxuICAgIHZpc2libGVSZWN0LmxlZnQgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC5sZWZ0LCBzY3JvbGxYKTtcbiAgICB2aXNpYmxlUmVjdC50b3AgPSBNYXRoLm1heCh2aXNpYmxlUmVjdC50b3AsIHNjcm9sbFkpO1xuICAgIHZpc2libGVSZWN0LnJpZ2h0ID0gTWF0aC5taW4odmlzaWJsZVJlY3QucmlnaHQsIHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoKTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIHNjcm9sbFkgKyB2aWV3cG9ydEhlaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQ2xpcCBieSBkb2N1bWVudCdzIHNpemUuXG4gICAgdmFyIG1heFZpc2libGVXaWR0aCA9IE1hdGgubWF4KGRvY3VtZW50V2lkdGgsIHNjcm9sbFggKyB2aWV3cG9ydFdpZHRoKTtcbiAgICB2aXNpYmxlUmVjdC5yaWdodCA9IE1hdGgubWluKHZpc2libGVSZWN0LnJpZ2h0LCBtYXhWaXNpYmxlV2lkdGgpO1xuXG4gICAgdmFyIG1heFZpc2libGVIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudEhlaWdodCwgc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICB2aXNpYmxlUmVjdC5ib3R0b20gPSBNYXRoLm1pbih2aXNpYmxlUmVjdC5ib3R0b20sIG1heFZpc2libGVIZWlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHZpc2libGVSZWN0LnRvcCA+PSAwICYmIHZpc2libGVSZWN0LmxlZnQgPj0gMCAmJiB2aXNpYmxlUmVjdC5ib3R0b20gPiB2aXNpYmxlUmVjdC50b3AgJiYgdmlzaWJsZVJlY3QucmlnaHQgPiB2aXNpYmxlUmVjdC5sZWZ0ID8gdmlzaWJsZVJlY3QgOiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRWaXNpYmxlUmVjdEZvckVsZW1lbnQ7IiwiaW1wb3J0IGFsaWduRWxlbWVudCBmcm9tICcuL2FsaWduL2FsaWduRWxlbWVudCc7XG5pbXBvcnQgYWxpZ25Qb2ludCBmcm9tICcuL2FsaWduL2FsaWduUG9pbnQnO1xuXG5leHBvcnQgeyBhbGlnbkVsZW1lbnQsIGFsaWduUG9pbnQgfTtcblxuZXhwb3J0IGRlZmF1bHQgYWxpZ25FbGVtZW50OyIsImltcG9ydCB1dGlscyBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBbmNlc3RvckZpeGVkKGVsZW1lbnQpIHtcbiAgaWYgKHV0aWxzLmlzV2luZG93KGVsZW1lbnQpIHx8IGVsZW1lbnQubm9kZVR5cGUgPT09IDkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jID0gdXRpbHMuZ2V0RG9jdW1lbnQoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gZG9jLmJvZHk7XG4gIHZhciBwYXJlbnQgPSBudWxsO1xuICBmb3IgKHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTsgcGFyZW50ICYmIHBhcmVudCAhPT0gYm9keTsgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICB2YXIgcG9zaXRpb25TdHlsZSA9IHV0aWxzLmNzcyhwYXJlbnQsICdwb3NpdGlvbicpO1xuICAgIGlmIChwb3NpdGlvblN0eWxlID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSIsInZhciB2ZW5kb3JQcmVmaXggPSB2b2lkIDA7XG5cbnZhciBqc0Nzc01hcCA9IHtcbiAgV2Via2l0OiAnLXdlYmtpdC0nLFxuICBNb3o6ICctbW96LScsXG4gIC8vIElFIGRpZCBpdCB3cm9uZyBhZ2FpbiAuLi5cbiAgbXM6ICctbXMtJyxcbiAgTzogJy1vLSdcbn07XG5cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeCgpIHtcbiAgaWYgKHZlbmRvclByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZlbmRvclByZWZpeDtcbiAgfVxuICB2ZW5kb3JQcmVmaXggPSAnJztcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpLnN0eWxlO1xuICB2YXIgdGVzdFByb3AgPSAnVHJhbnNmb3JtJztcbiAgZm9yICh2YXIga2V5IGluIGpzQ3NzTWFwKSB7XG4gICAgaWYgKGtleSArIHRlc3RQcm9wIGluIHN0eWxlKSB7XG4gICAgICB2ZW5kb3JQcmVmaXggPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB2ZW5kb3JQcmVmaXg7XG59XG5cbmZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBnZXRWZW5kb3JQcmVmaXgoKSArICdUcmFuc2l0aW9uUHJvcGVydHknIDogJ3RyYW5zaXRpb25Qcm9wZXJ0eSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1OYW1lKCkge1xuICByZXR1cm4gZ2V0VmVuZG9yUHJlZml4KCkgPyBnZXRWZW5kb3JQcmVmaXgoKSArICdUcmFuc2Zvcm0nIDogJ3RyYW5zZm9ybSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uUHJvcGVydHkobm9kZSwgdmFsdWUpIHtcbiAgdmFyIG5hbWUgPSBnZXRUcmFuc2l0aW9uTmFtZSgpO1xuICBpZiAobmFtZSkge1xuICAgIG5vZGUuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICBpZiAobmFtZSAhPT0gJ3RyYW5zaXRpb25Qcm9wZXJ0eScpIHtcbiAgICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gdmFsdWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldFRyYW5zZm9ybShub2RlLCB2YWx1ZSkge1xuICB2YXIgbmFtZSA9IGdldFRyYW5zZm9ybU5hbWUoKTtcbiAgaWYgKG5hbWUpIHtcbiAgICBub2RlLnN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgaWYgKG5hbWUgIT09ICd0cmFuc2Zvcm0nKSB7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNpdGlvblByb3BlcnR5KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5IHx8IG5vZGUuc3R5bGVbZ2V0VHJhbnNpdGlvbk5hbWUoKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUcmFuc2Zvcm1YWShub2RlKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIG1hdHJpeCA9IHRyYW5zZm9ybS5yZXBsYWNlKC9bXjAtOVxcLS4sXS9nLCAnJykuc3BsaXQoJywnKTtcbiAgICByZXR1cm4geyB4OiBwYXJzZUZsb2F0KG1hdHJpeFsxMl0gfHwgbWF0cml4WzRdLCAwKSwgeTogcGFyc2VGbG9hdChtYXRyaXhbMTNdIHx8IG1hdHJpeFs1XSwgMCkgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xufVxuXG52YXIgbWF0cml4MmQgPSAvbWF0cml4XFwoKC4qKVxcKS87XG52YXIgbWF0cml4M2QgPSAvbWF0cml4M2RcXCgoLiopXFwpLztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRyYW5zZm9ybVhZKG5vZGUsIHh5KSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpO1xuICB2YXIgdHJhbnNmb3JtID0gc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykgfHwgc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShnZXRUcmFuc2Zvcm1OYW1lKCkpO1xuICBpZiAodHJhbnNmb3JtICYmIHRyYW5zZm9ybSAhPT0gJ25vbmUnKSB7XG4gICAgdmFyIGFyciA9IHZvaWQgMDtcbiAgICB2YXIgbWF0Y2gyZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgyZCk7XG4gICAgaWYgKG1hdGNoMmQpIHtcbiAgICAgIG1hdGNoMmQgPSBtYXRjaDJkWzFdO1xuICAgICAgYXJyID0gbWF0Y2gyZC5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtLCAxMCk7XG4gICAgICB9KTtcbiAgICAgIGFycls0XSA9IHh5Lng7XG4gICAgICBhcnJbNV0gPSB4eS55O1xuICAgICAgc2V0VHJhbnNmb3JtKG5vZGUsICdtYXRyaXgoJyArIGFyci5qb2luKCcsJykgKyAnKScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2gzZCA9IHRyYW5zZm9ybS5tYXRjaChtYXRyaXgzZClbMV07XG4gICAgICBhcnIgPSBtYXRjaDNkLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGl0ZW0sIDEwKTtcbiAgICAgIH0pO1xuICAgICAgYXJyWzEyXSA9IHh5Lng7XG4gICAgICBhcnJbMTNdID0geHkueTtcbiAgICAgIHNldFRyYW5zZm9ybShub2RlLCAnbWF0cml4M2QoJyArIGFyci5qb2luKCcsJykgKyAnKScpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRUcmFuc2Zvcm0obm9kZSwgJ3RyYW5zbGF0ZVgoJyArIHh5LnggKyAncHgpIHRyYW5zbGF0ZVkoJyArIHh5LnkgKyAncHgpIHRyYW5zbGF0ZVooMCknKTtcbiAgfVxufSIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuaW1wb3J0IHsgc2V0VHJhbnNpdGlvblByb3BlcnR5LCBnZXRUcmFuc2l0aW9uUHJvcGVydHksIGdldFRyYW5zZm9ybVhZLCBzZXRUcmFuc2Zvcm1YWSwgZ2V0VHJhbnNmb3JtTmFtZSB9IGZyb20gJy4vcHJvcGVydHlVdGlscyc7XG5cbnZhciBSRV9OVU0gPSAvW1xcLStdPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdW1xcLStdP1xcZCt8KS8uc291cmNlO1xuXG52YXIgZ2V0Q29tcHV0ZWRTdHlsZVggPSB2b2lkIDA7XG5cbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNDg1NjU0LzMwNDA2MDVcbmZ1bmN0aW9uIGZvcmNlUmVsYXlvdXQoZWxlbSkge1xuICB2YXIgb3JpZ2luYWxTdHlsZSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcbiAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBlbGVtLm9mZnNldEhlaWdodDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBvcmlnaW5hbFN0eWxlO1xufVxuXG5mdW5jdGlvbiBjc3MoZWwsIG5hbWUsIHYpIHtcbiAgdmFyIHZhbHVlID0gdjtcbiAgaWYgKCh0eXBlb2YgbmFtZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobmFtZSkpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGkgaW4gbmFtZSkge1xuICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgY3NzKGVsLCBpLCBuYW1lW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlICsgJ3B4JztcbiAgICB9XG4gICAgZWwuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbCwgbmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFBvc2l0aW9uKGVsZW0pIHtcbiAgdmFyIGJveCA9IHZvaWQgMDtcbiAgdmFyIHggPSB2b2lkIDA7XG4gIHZhciB5ID0gdm9pZCAwO1xuICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAvLyDmoLnmja4gR0JTIOacgOaWsOaVsOaNru+8jEEtR3JhZGUgQnJvd3NlcnMg6YO95bey5pSv5oyBIGdldEJvdW5kaW5nQ2xpZW50UmVjdCDmlrnms5XvvIzkuI3nlKjlho3ogIPomZHkvKDnu5/nmoTlrp7njrDmlrnlvI9cbiAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAvLyDms6jvvJpqUXVlcnkg6L+Y6ICD6JmR5YeP5Y67IGRvY0VsZW0uY2xpZW50TGVmdC9jbGllbnRUb3BcbiAgLy8g5L2G5rWL6K+V5Y+R546w77yM6L+Z5qC35Y+N6ICM5Lya5a+86Ie05b2TIGh0bWwg5ZKMIGJvZHkg5pyJ6L656LedL+i+ueahhuagt+W8j+aXtu+8jOiOt+WPlueahOWAvOS4jeato+ehrlxuICAvLyDmraTlpJbvvIxpZTYg5Lya5b+955WlIGh0bWwg55qEIG1hcmdpbiDlgLzvvIzlubjov5DlnLDmmK/msqHmnInosIHkvJrljrvorr7nva4gaHRtbCDnmoQgbWFyZ2luXG5cbiAgeCA9IGJveC5sZWZ0O1xuICB5ID0gYm94LnRvcDtcblxuICAvLyBJbiBJRSwgbW9zdCBvZiB0aGUgdGltZSwgMiBleHRyYSBwaXhlbHMgYXJlIGFkZGVkIHRvIHRoZSB0b3AgYW5kIGxlZnRcbiAgLy8gZHVlIHRvIHRoZSBpbXBsaWNpdCAyLXBpeGVsIGluc2V0IGJvcmRlci4gIEluIElFNi83IHF1aXJrcyBtb2RlIGFuZFxuICAvLyBJRTYgc3RhbmRhcmRzIG1vZGUsIHRoaXMgYm9yZGVyIGNhbiBiZSBvdmVycmlkZGVuIGJ5IHNldHRpbmcgdGhlXG4gIC8vIGRvY3VtZW50IGVsZW1lbnQncyBib3JkZXIgdG8gemVybyAtLSB0aHVzLCB3ZSBjYW5ub3QgcmVseSBvbiB0aGVcbiAgLy8gb2Zmc2V0IGFsd2F5cyBiZWluZyAyIHBpeGVscy5cblxuICAvLyBJbiBxdWlya3MgbW9kZSwgdGhlIG9mZnNldCBjYW4gYmUgZGV0ZXJtaW5lZCBieSBxdWVyeWluZyB0aGUgYm9keSdzXG4gIC8vIGNsaWVudExlZnQvY2xpZW50VG9wLCBidXQgaW4gc3RhbmRhcmRzIG1vZGUsIGl0IGlzIGZvdW5kIGJ5IHF1ZXJ5aW5nXG4gIC8vIHRoZSBkb2N1bWVudCBlbGVtZW50J3MgY2xpZW50TGVmdC9jbGllbnRUb3AuICBTaW5jZSB3ZSBhbHJlYWR5IGNhbGxlZFxuICAvLyBnZXRDbGllbnRCb3VuZGluZ1JlY3Qgd2UgaGF2ZSBhbHJlYWR5IGZvcmNlZCBhIHJlZmxvdywgc28gaXQgaXMgbm90XG4gIC8vIHRvbyBleHBlbnNpdmUganVzdCB0byBxdWVyeSB0aGVtIGFsbC5cblxuICAvLyBpZSDkuIvlupTor6Xlh4/ljrvnqpflj6PnmoTovrnmoYblkKfvvIzmr5Xnq5/pu5jorqQgYWJzb2x1dGUg6YO95piv55u45a+556qX5Y+j5a6a5L2N55qEXG4gIC8vIOeql+WPo+i+ueahhuagh+WHhuaYr+iuviBkb2N1bWVudEVsZW1lbnQgLHF1aXJrcyDml7borr7nva4gYm9keVxuICAvLyDmnIDlpb3npoHmraLlnKggYm9keSDlkowgaHRtbCDkuIrovrnmoYYg77yM5L2GIGllIDwgOSBodG1sIOm7mOiupOaciSAycHgg77yM5YeP5Y67XG4gIC8vIOS9huaYr+mdniBpZSDkuI3lj6/og73orr7nva7nqpflj6PovrnmoYbvvIxib2R5IGh0bWwg5Lmf5LiN5piv56qX5Y+jICxpZSDlj6/ku6XpgJrov4cgaHRtbCxib2R5IOiuvue9rlxuICAvLyDmoIflh4YgaWUg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOWwseaYryBib3JkZXItdG9wXG4gIC8vIGllNyBodG1sIOWNs+eql+WPo+i+ueahhuaUueWPmOS4jeS6huOAguawuOi/nOS4uiAyXG4gIC8vIOS9huagh+WHhiBmaXJlZm94L2Nocm9tZS9pZTkg5LiLIGRvY0VsZW0uY2xpZW50VG9wIOaYr+eql+WPo+i+ueahhu+8jOWNs+S9v+iuvuS6hiBib3JkZXItdG9wIOS5n+S4uiAwXG5cbiAgeCAtPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gIHkgLT0gZG9jRWxlbS5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcblxuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsXG4gICAgdG9wOiB5XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbCh3LCB0b3ApIHtcbiAgdmFyIHJldCA9IHdbJ3BhZ2UnICsgKHRvcCA/ICdZJyA6ICdYJykgKyAnT2Zmc2V0J107XG4gIHZhciBtZXRob2QgPSAnc2Nyb2xsJyArICh0b3AgPyAnVG9wJyA6ICdMZWZ0Jyk7XG4gIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgIHZhciBkID0gdy5kb2N1bWVudDtcbiAgICAvLyBpZTYsNyw4IHN0YW5kYXJkIG1vZGVcbiAgICByZXQgPSBkLmRvY3VtZW50RWxlbWVudFttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgLy8gcXVpcmtzIG1vZGVcbiAgICAgIHJldCA9IGQuYm9keVttZXRob2RdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KHcpIHtcbiAgcmV0dXJuIGdldFNjcm9sbCh3KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKHcpIHtcbiAgcmV0dXJuIGdldFNjcm9sbCh3LCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gIHZhciBwb3MgPSBnZXRDbGllbnRQb3NpdGlvbihlbCk7XG4gIHZhciBkb2MgPSBlbC5vd25lckRvY3VtZW50O1xuICB2YXIgdyA9IGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICBwb3MubGVmdCArPSBnZXRTY3JvbGxMZWZ0KHcpO1xuICBwb3MudG9wICs9IGdldFNjcm9sbFRvcCh3KTtcbiAgcmV0dXJuIHBvcztcbn1cblxuLyoqXG4gKiBBIGNydWRlIHdheSBvZiBkZXRlcm1pbmluZyBpZiBhbiBvYmplY3QgaXMgYSB3aW5kb3dcbiAqIEBtZW1iZXIgdXRpbFxuICovXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgLy8gbXVzdCB1c2UgPT0gZm9yIGllOFxuICAvKiBlc2xpbnQgZXFlcWVxOjAgKi9cbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHVuZGVmaW5lZCAmJiBvYmogPT0gb2JqLndpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnQobm9kZSkge1xuICBpZiAoaXNXaW5kb3cobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5kb2N1bWVudDtcbiAgfVxuICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG4gIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQ7XG59XG5cbmZ1bmN0aW9uIF9nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG5hbWUsIGNzKSB7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gY3M7XG4gIHZhciB2YWwgPSAnJztcbiAgdmFyIGQgPSBnZXREb2N1bWVudChlbGVtKTtcbiAgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGUgfHwgZC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpO1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzYxXG4gIGlmIChjb21wdXRlZFN0eWxlKSB7XG4gICAgdmFsID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkU3R5bGVbbmFtZV07XG4gIH1cblxuICByZXR1cm4gdmFsO1xufVxuXG52YXIgX1JFX05VTV9OT19QWCA9IG5ldyBSZWdFeHAoJ14oJyArIFJFX05VTSArICcpKD8hcHgpW2EteiVdKyQnLCAnaScpO1xudmFyIFJFX1BPUyA9IC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkLztcbnZhciBDVVJSRU5UX1NUWUxFID0gJ2N1cnJlbnRTdHlsZSc7XG52YXIgUlVOVElNRV9TVFlMRSA9ICdydW50aW1lU3R5bGUnO1xudmFyIExFRlQgPSAnbGVmdCc7XG52YXIgUFggPSAncHgnO1xuXG5mdW5jdGlvbiBfZ2V0Q29tcHV0ZWRTdHlsZUlFKGVsZW0sIG5hbWUpIHtcbiAgLy8gY3VycmVudFN0eWxlIG1heWJlIG51bGxcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM1MjMxLmFzcHhcbiAgdmFyIHJldCA9IGVsZW1bQ1VSUkVOVF9TVFlMRV0gJiYgZWxlbVtDVVJSRU5UX1NUWUxFXVtuYW1lXTtcblxuICAvLyDlvZMgd2lkdGgvaGVpZ2h0IOiuvue9ruS4uueZvuWIhuavlOaXtu+8jOmAmui/hyBwaXhlbExlZnQg5pa55byP6L2s5o2i55qEIHdpZHRoL2hlaWdodCDlgLxcbiAgLy8g5LiA5byA5aeL5bCx5aSE55CG5LqGISBDVVNUT01fU1RZTEUuaGVpZ2h0LENVU1RPTV9TVFlMRS53aWR0aCAsY3NzSG9vayDop6PlhrNAMjAxMS0wOC0xOVxuICAvLyDlnKggaWUg5LiL5LiN5a+577yM6ZyA6KaB55u05o6l55SoIG9mZnNldCDmlrnlvI9cbiAgLy8gYm9yZGVyV2lkdGgg562J5YC85Lmf5pyJ6Zeu6aKY77yM5L2G6ICD6JmR5YiwIGJvcmRlcldpZHRoIOiuvuS4uueZvuWIhuavlOeahOamgueOh+W+iOWwj++8jOi/memHjOWwseS4jeiAg+iZkeS6hlxuXG4gIC8vIEZyb20gdGhlIGF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcbiAgLy8gaHR0cDovL2VyaWsuZWFlLm5ldC9hcmNoaXZlcy8yMDA3LzA3LzI3LzE4LjU0LjE1LyNjb21tZW50LTEwMjI5MVxuICAvLyBJZiB3ZSdyZSBub3QgZGVhbGluZyB3aXRoIGEgcmVndWxhciBwaXhlbCBudW1iZXJcbiAgLy8gYnV0IGEgbnVtYmVyIHRoYXQgaGFzIGEgd2VpcmQgZW5kaW5nLCB3ZSBuZWVkIHRvIGNvbnZlcnQgaXQgdG8gcGl4ZWxzXG4gIC8vIGV4Y2x1ZGUgbGVmdCByaWdodCBmb3IgcmVsYXRpdml0eVxuICBpZiAoX1JFX05VTV9OT19QWC50ZXN0KHJldCkgJiYgIVJFX1BPUy50ZXN0KG5hbWUpKSB7XG4gICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuICAgIHZhciBzdHlsZSA9IGVsZW0uc3R5bGU7XG4gICAgdmFyIGxlZnQgPSBzdHlsZVtMRUZUXTtcbiAgICB2YXIgcnNMZWZ0ID0gZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXTtcblxuICAgIC8vIHByZXZlbnQgZmxhc2hpbmcgb2YgY29udGVudFxuICAgIGVsZW1bUlVOVElNRV9TVFlMRV1bTEVGVF0gPSBlbGVtW0NVUlJFTlRfU1RZTEVdW0xFRlRdO1xuXG4gICAgLy8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuICAgIHN0eWxlW0xFRlRdID0gbmFtZSA9PT0gJ2ZvbnRTaXplJyA/ICcxZW0nIDogcmV0IHx8IDA7XG4gICAgcmV0ID0gc3R5bGUucGl4ZWxMZWZ0ICsgUFg7XG5cbiAgICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gICAgc3R5bGVbTEVGVF0gPSBsZWZ0O1xuXG4gICAgZWxlbVtSVU5USU1FX1NUWUxFXVtMRUZUXSA9IHJzTGVmdDtcbiAgfVxuICByZXR1cm4gcmV0ID09PSAnJyA/ICdhdXRvJyA6IHJldDtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGdldENvbXB1dGVkU3R5bGVYID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgPyBfZ2V0Q29tcHV0ZWRTdHlsZSA6IF9nZXRDb21wdXRlZFN0eWxlSUU7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldERpcmVjdGlvbihkaXIsIG9wdGlvbikge1xuICBpZiAoZGlyID09PSAnbGVmdCcpIHtcbiAgICByZXR1cm4gb3B0aW9uLnVzZUNzc1JpZ2h0ID8gJ3JpZ2h0JyA6IGRpcjtcbiAgfVxuICByZXR1cm4gb3B0aW9uLnVzZUNzc0JvdHRvbSA/ICdib3R0b20nIDogZGlyO1xufVxuXG5mdW5jdGlvbiBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbihkaXIpIHtcbiAgaWYgKGRpciA9PT0gJ2xlZnQnKSB7XG4gICAgcmV0dXJuICdyaWdodCc7XG4gIH0gZWxzZSBpZiAoZGlyID09PSAncmlnaHQnKSB7XG4gICAgcmV0dXJuICdsZWZ0JztcbiAgfSBlbHNlIGlmIChkaXIgPT09ICd0b3AnKSB7XG4gICAgcmV0dXJuICdib3R0b20nO1xuICB9IGVsc2UgaWYgKGRpciA9PT0gJ2JvdHRvbScpIHtcbiAgICByZXR1cm4gJ3RvcCc7XG4gIH1cbn1cblxuLy8g6K6+572uIGVsZW0g55u45a+5IGVsZW0ub3duZXJEb2N1bWVudCDnmoTlnZDmoIdcbmZ1bmN0aW9uIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pIHtcbiAgLy8gc2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuICBpZiAoY3NzKGVsZW0sICdwb3NpdGlvbicpID09PSAnc3RhdGljJykge1xuICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICB9XG4gIHZhciBwcmVzZXRIID0gLTk5OTtcbiAgdmFyIHByZXNldFYgPSAtOTk5O1xuICB2YXIgaG9yaXpvbnRhbFByb3BlcnR5ID0gZ2V0T2Zmc2V0RGlyZWN0aW9uKCdsZWZ0Jywgb3B0aW9uKTtcbiAgdmFyIHZlcnRpY2FsUHJvcGVydHkgPSBnZXRPZmZzZXREaXJlY3Rpb24oJ3RvcCcsIG9wdGlvbik7XG4gIHZhciBvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eSA9IG9wcG9zaXRlT2Zmc2V0RGlyZWN0aW9uKGhvcml6b250YWxQcm9wZXJ0eSk7XG4gIHZhciBvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHkgPSBvcHBvc2l0ZU9mZnNldERpcmVjdGlvbih2ZXJ0aWNhbFByb3BlcnR5KTtcblxuICBpZiAoaG9yaXpvbnRhbFByb3BlcnR5ICE9PSAnbGVmdCcpIHtcbiAgICBwcmVzZXRIID0gOTk5O1xuICB9XG5cbiAgaWYgKHZlcnRpY2FsUHJvcGVydHkgIT09ICd0b3AnKSB7XG4gICAgcHJlc2V0ViA9IDk5OTtcbiAgfVxuICB2YXIgb3JpZ2luYWxUcmFuc2l0aW9uID0gJyc7XG4gIHZhciBvcmlnaW5hbE9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQgfHwgJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgb3JpZ2luYWxUcmFuc2l0aW9uID0gZ2V0VHJhbnNpdGlvblByb3BlcnR5KGVsZW0pIHx8ICcnO1xuICAgIHNldFRyYW5zaXRpb25Qcm9wZXJ0eShlbGVtLCAnbm9uZScpO1xuICB9XG4gIGlmICgnbGVmdCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZUhvcml6b250YWxQcm9wZXJ0eV0gPSAnJztcbiAgICBlbGVtLnN0eWxlW2hvcml6b250YWxQcm9wZXJ0eV0gPSBwcmVzZXRIICsgJ3B4JztcbiAgfVxuICBpZiAoJ3RvcCcgaW4gb2Zmc2V0KSB7XG4gICAgZWxlbS5zdHlsZVtvcHBvc2l0ZVZlcnRpY2FsUHJvcGVydHldID0gJyc7XG4gICAgZWxlbS5zdHlsZVt2ZXJ0aWNhbFByb3BlcnR5XSA9IHByZXNldFYgKyAncHgnO1xuICB9XG4gIC8vIGZvcmNlIHJlbGF5b3V0XG4gIGZvcmNlUmVsYXlvdXQoZWxlbSk7XG4gIHZhciBvbGQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFN0eWxlID0ge307XG4gIGZvciAodmFyIGtleSBpbiBvZmZzZXQpIHtcbiAgICBpZiAob2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBkaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oa2V5LCBvcHRpb24pO1xuICAgICAgdmFyIHByZXNldCA9IGtleSA9PT0gJ2xlZnQnID8gcHJlc2V0SCA6IHByZXNldFY7XG4gICAgICB2YXIgb2ZmID0gb3JpZ2luYWxPZmZzZXRba2V5XSAtIG9sZFtrZXldO1xuICAgICAgaWYgKGRpciA9PT0ga2V5KSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCArIG9mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdpbmFsU3R5bGVbZGlyXSA9IHByZXNldCAtIG9mZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY3NzKGVsZW0sIG9yaWdpbmFsU3R5bGUpO1xuICAvLyBmb3JjZSByZWxheW91dFxuICBmb3JjZVJlbGF5b3V0KGVsZW0pO1xuICBpZiAoJ2xlZnQnIGluIG9mZnNldCB8fCAndG9wJyBpbiBvZmZzZXQpIHtcbiAgICBzZXRUcmFuc2l0aW9uUHJvcGVydHkoZWxlbSwgb3JpZ2luYWxUcmFuc2l0aW9uKTtcbiAgfVxuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIF9rZXkgaW4gb2Zmc2V0KSB7XG4gICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgdmFyIF9kaXIgPSBnZXRPZmZzZXREaXJlY3Rpb24oX2tleSwgb3B0aW9uKTtcbiAgICAgIHZhciBfb2ZmID0gb2Zmc2V0W19rZXldIC0gb3JpZ2luYWxPZmZzZXRbX2tleV07XG4gICAgICBpZiAoX2tleSA9PT0gX2Rpcikge1xuICAgICAgICByZXRbX2Rpcl0gPSBvcmlnaW5hbFN0eWxlW19kaXJdICsgX29mZjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldFtfZGlyXSA9IG9yaWdpbmFsU3R5bGVbX2Rpcl0gLSBfb2ZmO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjc3MoZWxlbSwgcmV0KTtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtKGVsZW0sIG9mZnNldCkge1xuICB2YXIgb3JpZ2luYWxPZmZzZXQgPSBnZXRPZmZzZXQoZWxlbSk7XG4gIHZhciBvcmlnaW5hbFhZID0gZ2V0VHJhbnNmb3JtWFkoZWxlbSk7XG4gIHZhciByZXN1bHRYWSA9IHsgeDogb3JpZ2luYWxYWS54LCB5OiBvcmlnaW5hbFhZLnkgfTtcbiAgaWYgKCdsZWZ0JyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS54ID0gb3JpZ2luYWxYWS54ICsgb2Zmc2V0LmxlZnQgLSBvcmlnaW5hbE9mZnNldC5sZWZ0O1xuICB9XG4gIGlmICgndG9wJyBpbiBvZmZzZXQpIHtcbiAgICByZXN1bHRYWS55ID0gb3JpZ2luYWxYWS55ICsgb2Zmc2V0LnRvcCAtIG9yaWdpbmFsT2Zmc2V0LnRvcDtcbiAgfVxuICBzZXRUcmFuc2Zvcm1YWShlbGVtLCByZXN1bHRYWSk7XG59XG5cbmZ1bmN0aW9uIHNldE9mZnNldChlbGVtLCBvZmZzZXQsIG9wdGlvbikge1xuICBpZiAob3B0aW9uLmlnbm9yZVNoYWtlKSB7XG4gICAgdmFyIG9yaU9mZnNldCA9IGdldE9mZnNldChlbGVtKTtcblxuICAgIHZhciBvTGVmdCA9IG9yaU9mZnNldC5sZWZ0LnRvRml4ZWQoMCk7XG4gICAgdmFyIG9Ub3AgPSBvcmlPZmZzZXQudG9wLnRvRml4ZWQoMCk7XG4gICAgdmFyIHRMZWZ0ID0gb2Zmc2V0LmxlZnQudG9GaXhlZCgwKTtcbiAgICB2YXIgdFRvcCA9IG9mZnNldC50b3AudG9GaXhlZCgwKTtcblxuICAgIGlmIChvTGVmdCA9PT0gdExlZnQgJiYgb1RvcCA9PT0gdFRvcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChvcHRpb24udXNlQ3NzUmlnaHQgfHwgb3B0aW9uLnVzZUNzc0JvdHRvbSkge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2UgaWYgKG9wdGlvbi51c2VDc3NUcmFuc2Zvcm0gJiYgZ2V0VHJhbnNmb3JtTmFtZSgpIGluIGRvY3VtZW50LmJvZHkuc3R5bGUpIHtcbiAgICBzZXRUcmFuc2Zvcm0oZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9IGVsc2Uge1xuICAgIHNldExlZnRUb3AoZWxlbSwgb2Zmc2V0LCBvcHRpb24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVhY2goYXJyLCBmbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGZuKGFycltpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNCb3JkZXJCb3hGbihlbGVtKSB7XG4gIHJldHVybiBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCAnYm94U2l6aW5nJykgPT09ICdib3JkZXItYm94Jztcbn1cblxudmFyIEJPWF9NT0RFTFMgPSBbJ21hcmdpbicsICdib3JkZXInLCAncGFkZGluZyddO1xudmFyIENPTlRFTlRfSU5ERVggPSAtMTtcbnZhciBQQURESU5HX0lOREVYID0gMjtcbnZhciBCT1JERVJfSU5ERVggPSAxO1xudmFyIE1BUkdJTl9JTkRFWCA9IDA7XG5cbmZ1bmN0aW9uIHN3YXAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgdmFyIG9sZCA9IHt9O1xuICB2YXIgc3R5bGUgPSBlbGVtLnN0eWxlO1xuICB2YXIgbmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgb2xkW25hbWVdID0gc3R5bGVbbmFtZV07XG4gICAgICBzdHlsZVtuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgY2FsbGJhY2suY2FsbChlbGVtKTtcblxuICAvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcbiAgZm9yIChuYW1lIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgc3R5bGVbbmFtZV0gPSBvbGRbbmFtZV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBCTVdpZHRoKGVsZW0sIHByb3BzLCB3aGljaCkge1xuICB2YXIgdmFsdWUgPSAwO1xuICB2YXIgcHJvcCA9IHZvaWQgMDtcbiAgdmFyIGogPSB2b2lkIDA7XG4gIHZhciBpID0gdm9pZCAwO1xuICBmb3IgKGogPSAwOyBqIDwgcHJvcHMubGVuZ3RoOyBqKyspIHtcbiAgICBwcm9wID0gcHJvcHNbal07XG4gICAgaWYgKHByb3ApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB3aGljaC5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY3NzUHJvcCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHByb3AgPT09ICdib3JkZXInKSB7XG4gICAgICAgICAgY3NzUHJvcCA9ICcnICsgcHJvcCArIHdoaWNoW2ldICsgJ1dpZHRoJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjc3NQcm9wID0gcHJvcCArIHdoaWNoW2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlICs9IHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSwgY3NzUHJvcCkpIHx8IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxudmFyIGRvbVV0aWxzID0ge307XG5cbmVhY2goWydXaWR0aCcsICdIZWlnaHQnXSwgZnVuY3Rpb24gKG5hbWUpIHtcbiAgZG9tVXRpbHNbJ2RvYycgKyBuYW1lXSA9IGZ1bmN0aW9uIChyZWZXaW4pIHtcbiAgICB2YXIgZCA9IHJlZldpbi5kb2N1bWVudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgLy8gZmlyZWZveCBjaHJvbWUgZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDwgYm9keS5zY3JvbGxIZWlnaHRcbiAgICAvLyBpZSBzdGFuZGFyZCBtb2RlIDogZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodD4gYm9keS5zY3JvbGxIZWlnaHRcbiAgICBkLmRvY3VtZW50RWxlbWVudFsnc2Nyb2xsJyArIG5hbWVdLFxuICAgIC8vIHF1aXJrcyA6IGRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQg5pyA5aSn562J5LqO5Y+v6KeG56qX5Y+j5aSa5LiA54K577yfXG4gICAgZC5ib2R5WydzY3JvbGwnICsgbmFtZV0sIGRvbVV0aWxzWyd2aWV3cG9ydCcgKyBuYW1lXShkKSk7XG4gIH07XG5cbiAgZG9tVXRpbHNbJ3ZpZXdwb3J0JyArIG5hbWVdID0gZnVuY3Rpb24gKHdpbikge1xuICAgIC8vIHBjIGJyb3dzZXIgaW5jbHVkZXMgc2Nyb2xsYmFyIGluIHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdmFyIHByb3AgPSAnY2xpZW50JyArIG5hbWU7XG4gICAgdmFyIGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnRQcm9wID0gZG9jdW1lbnRFbGVtZW50W3Byb3BdO1xuICAgIC8vIOagh+WHhuaooeW8j+WPliBkb2N1bWVudEVsZW1lbnRcbiAgICAvLyBiYWNrY29tcGF0IOWPliBib2R5XG4gICAgcmV0dXJuIGRvYy5jb21wYXRNb2RlID09PSAnQ1NTMUNvbXBhdCcgJiYgZG9jdW1lbnRFbGVtZW50UHJvcCB8fCBib2R5ICYmIGJvZHlbcHJvcF0gfHwgZG9jdW1lbnRFbGVtZW50UHJvcDtcbiAgfTtcbn0pO1xuXG4vKlxuIOW+l+WIsOWFg+e0oOeahOWkp+Wwj+S/oeaBr1xuIEBwYXJhbSBlbGVtXG4gQHBhcmFtIG5hbWVcbiBAcGFyYW0ge1N0cmluZ30gW2V4dHJhXSAgJ3BhZGRpbmcnIDogKGNzcyB3aWR0aCkgKyBwYWRkaW5nXG4gJ2JvcmRlcicgOiAoY3NzIHdpZHRoKSArIHBhZGRpbmcgKyBib3JkZXJcbiAnbWFyZ2luJyA6IChjc3Mgd2lkdGgpICsgcGFkZGluZyArIGJvcmRlciArIG1hcmdpblxuICovXG5mdW5jdGlvbiBnZXRXSChlbGVtLCBuYW1lLCBleCkge1xuICB2YXIgZXh0cmEgPSBleDtcbiAgaWYgKGlzV2luZG93KGVsZW0pKSB7XG4gICAgcmV0dXJuIG5hbWUgPT09ICd3aWR0aCcgPyBkb21VdGlscy52aWV3cG9ydFdpZHRoKGVsZW0pIDogZG9tVXRpbHMudmlld3BvcnRIZWlnaHQoZWxlbSk7XG4gIH0gZWxzZSBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gOSkge1xuICAgIHJldHVybiBuYW1lID09PSAnd2lkdGgnID8gZG9tVXRpbHMuZG9jV2lkdGgoZWxlbSkgOiBkb21VdGlscy5kb2NIZWlnaHQoZWxlbSk7XG4gIH1cbiAgdmFyIHdoaWNoID0gbmFtZSA9PT0gJ3dpZHRoJyA/IFsnTGVmdCcsICdSaWdodCddIDogWydUb3AnLCAnQm90dG9tJ107XG4gIHZhciBib3JkZXJCb3hWYWx1ZSA9IG5hbWUgPT09ICd3aWR0aCcgPyBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSwgY29tcHV0ZWRTdHlsZSk7XG4gIHZhciBjc3NCb3hWYWx1ZSA9IDA7XG4gIGlmIChib3JkZXJCb3hWYWx1ZSA9PT0gbnVsbCB8fCBib3JkZXJCb3hWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IGJvcmRlckJveFZhbHVlIDw9IDApIHtcbiAgICBib3JkZXJCb3hWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1biBjb21wdXRlZCBjc3MgaWYgbmVjZXNzYXJ5XG4gICAgY3NzQm94VmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlWChlbGVtLCBuYW1lKTtcbiAgICBpZiAoY3NzQm94VmFsdWUgPT09IG51bGwgfHwgY3NzQm94VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBOdW1iZXIoY3NzQm94VmFsdWUpIDwgMCkge1xuICAgICAgY3NzQm94VmFsdWUgPSBlbGVtLnN0eWxlW25hbWVdIHx8IDA7XG4gICAgfVxuICAgIC8vIE5vcm1hbGl6ZSAnJywgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG4gICAgY3NzQm94VmFsdWUgPSBwYXJzZUZsb2F0KGNzc0JveFZhbHVlKSB8fCAwO1xuICB9XG4gIGlmIChleHRyYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXh0cmEgPSBpc0JvcmRlckJveCA/IEJPUkRFUl9JTkRFWCA6IENPTlRFTlRfSU5ERVg7XG4gIH1cbiAgdmFyIGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCA9IGJvcmRlckJveFZhbHVlICE9PSB1bmRlZmluZWQgfHwgaXNCb3JkZXJCb3g7XG4gIHZhciB2YWwgPSBib3JkZXJCb3hWYWx1ZSB8fCBjc3NCb3hWYWx1ZTtcbiAgaWYgKGV4dHJhID09PSBDT05URU5UX0lOREVYKSB7XG4gICAgaWYgKGJvcmRlckJveFZhbHVlT3JJc0JvcmRlckJveCkge1xuICAgICAgcmV0dXJuIHZhbCAtIGdldFBCTVdpZHRoKGVsZW0sIFsnYm9yZGVyJywgJ3BhZGRpbmcnXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xuICAgIH1cbiAgICByZXR1cm4gY3NzQm94VmFsdWU7XG4gIH0gZWxzZSBpZiAoYm9yZGVyQm94VmFsdWVPcklzQm9yZGVyQm94KSB7XG4gICAgaWYgKGV4dHJhID09PSBCT1JERVJfSU5ERVgpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHJldHVybiB2YWwgKyAoZXh0cmEgPT09IFBBRERJTkdfSU5ERVggPyAtZ2V0UEJNV2lkdGgoZWxlbSwgWydib3JkZXInXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpIDogZ2V0UEJNV2lkdGgoZWxlbSwgWydtYXJnaW4nXSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpKTtcbiAgfVxuICByZXR1cm4gY3NzQm94VmFsdWUgKyBnZXRQQk1XaWR0aChlbGVtLCBCT1hfTU9ERUxTLnNsaWNlKGV4dHJhKSwgd2hpY2gsIGNvbXB1dGVkU3R5bGUpO1xufVxuXG52YXIgY3NzU2hvdyA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICBkaXNwbGF5OiAnYmxvY2snXG59O1xuXG4vLyBmaXggIzExOSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9raXNzeXRlYW0va2lzc3kvaXNzdWVzLzExOVxuZnVuY3Rpb24gZ2V0V0hJZ25vcmVEaXNwbGF5KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHZhciB2YWwgPSB2b2lkIDA7XG4gIHZhciBlbGVtID0gYXJnc1swXTtcbiAgLy8gaW4gY2FzZSBlbGVtIGlzIHdpbmRvd1xuICAvLyBlbGVtLm9mZnNldFdpZHRoID09PSB1bmRlZmluZWRcbiAgaWYgKGVsZW0ub2Zmc2V0V2lkdGggIT09IDApIHtcbiAgICB2YWwgPSBnZXRXSC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHN3YXAoZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFsID0gZ2V0V0guYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdmFsO1xufVxuXG5lYWNoKFsnd2lkdGgnLCAnaGVpZ2h0J10sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBmaXJzdCA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICBkb21VdGlsc1snb3V0ZXInICsgZmlyc3RdID0gZnVuY3Rpb24gKGVsLCBpbmNsdWRlTWFyZ2luKSB7XG4gICAgcmV0dXJuIGVsICYmIGdldFdISWdub3JlRGlzcGxheShlbCwgbmFtZSwgaW5jbHVkZU1hcmdpbiA/IE1BUkdJTl9JTkRFWCA6IEJPUkRFUl9JTkRFWCk7XG4gIH07XG4gIHZhciB3aGljaCA9IG5hbWUgPT09ICd3aWR0aCcgPyBbJ0xlZnQnLCAnUmlnaHQnXSA6IFsnVG9wJywgJ0JvdHRvbSddO1xuXG4gIGRvbVV0aWxzW25hbWVdID0gZnVuY3Rpb24gKGVsZW0sIHYpIHtcbiAgICB2YXIgdmFsID0gdjtcbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZVgoZWxlbSk7XG4gICAgICAgIHZhciBpc0JvcmRlckJveCA9IGlzQm9yZGVyQm94Rm4oZWxlbSk7XG4gICAgICAgIGlmIChpc0JvcmRlckJveCkge1xuICAgICAgICAgIHZhbCArPSBnZXRQQk1XaWR0aChlbGVtLCBbJ3BhZGRpbmcnLCAnYm9yZGVyJ10sIHdoaWNoLCBjb21wdXRlZFN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3NzKGVsZW0sIG5hbWUsIHZhbCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbSAmJiBnZXRXSElnbm9yZURpc3BsYXkoZWxlbSwgbmFtZSwgQ09OVEVOVF9JTkRFWCk7XG4gIH07XG59KTtcblxuZnVuY3Rpb24gbWl4KHRvLCBmcm9tKSB7XG4gIGZvciAodmFyIGkgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICB0b1tpXSA9IGZyb21baV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cblxudmFyIHV0aWxzID0ge1xuICBnZXRXaW5kb3c6IGZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gICAgaWYgKG5vZGUgJiYgbm9kZS5kb2N1bWVudCAmJiBub2RlLnNldFRpbWVvdXQpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICB2YXIgZG9jID0gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGU7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCBkb2MucGFyZW50V2luZG93O1xuICB9LFxuXG4gIGdldERvY3VtZW50OiBnZXREb2N1bWVudCxcbiAgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoZWwsIHZhbHVlLCBvcHRpb24pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgc2V0T2Zmc2V0KGVsLCB2YWx1ZSwgb3B0aW9uIHx8IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldE9mZnNldChlbCk7XG4gICAgfVxuICB9LFxuXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgZWFjaDogZWFjaCxcbiAgY3NzOiBjc3MsXG4gIGNsb25lOiBmdW5jdGlvbiBjbG9uZShvYmopIHtcbiAgICB2YXIgaSA9IHZvaWQgMDtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgZm9yIChpIGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZXRbaV0gPSBvYmpbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBvdmVyZmxvdyA9IG9iai5vdmVyZmxvdztcbiAgICBpZiAob3ZlcmZsb3cpIHtcbiAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgIHJldC5vdmVyZmxvd1tpXSA9IG9iai5vdmVyZmxvd1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9LFxuXG4gIG1peDogbWl4LFxuICBnZXRXaW5kb3dTY3JvbGxMZWZ0OiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxMZWZ0KHcpIHtcbiAgICByZXR1cm4gZ2V0U2Nyb2xsTGVmdCh3KTtcbiAgfSxcbiAgZ2V0V2luZG93U2Nyb2xsVG9wOiBmdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxUb3Aodykge1xuICAgIHJldHVybiBnZXRTY3JvbGxUb3Aodyk7XG4gIH0sXG4gIG1lcmdlOiBmdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgcmV0ID0ge307XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMjsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgdXRpbHMubWl4KHJldCwgYXJnc1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgdmlld3BvcnRXaWR0aDogMCxcbiAgdmlld3BvcnRIZWlnaHQ6IDBcbn07XG5cbm1peCh1dGlscywgZG9tVXRpbHMpO1xuXG5leHBvcnQgZGVmYXVsdCB1dGlsczsiLCJ2YXIgUXVlcnlIYW5kbGVyID0gcmVxdWlyZSgnLi9RdWVyeUhhbmRsZXInKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9VdGlsJykuZWFjaDtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgc2luZ2xlIG1lZGlhIHF1ZXJ5LCBtYW5hZ2VzIGl0J3Mgc3RhdGUgYW5kIHJlZ2lzdGVyZWQgaGFuZGxlcnMgZm9yIHRoaXMgcXVlcnlcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSB0aGUgbWVkaWEgcXVlcnkgc3RyaW5nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1VuY29uZGl0aW9uYWw9ZmFsc2VdIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBydW4gcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZSBjb25kaXRpb25zIGFyZSBtZXQuIFByaW1hcmlseSBmb3IgaGVscGluZyBvbGRlciBicm93c2VycyBkZWFsIHdpdGggbW9iaWxlLWZpcnN0IGRlc2lnblxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5KHF1ZXJ5LCBpc1VuY29uZGl0aW9uYWwpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgdGhpcy5pc1VuY29uZGl0aW9uYWwgPSBpc1VuY29uZGl0aW9uYWw7XG4gICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIHRoaXMubXFsID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbihtcWwpIHtcbiAgICAgICAgLy8gQ2hyb21lIHBhc3NlcyBhbiBNZWRpYVF1ZXJ5TGlzdEV2ZW50IG9iamVjdCwgd2hpbGUgb3RoZXIgYnJvd3NlcnMgcGFzcyBNZWRpYVF1ZXJ5TGlzdCBkaXJlY3RseVxuICAgICAgICBzZWxmLm1xbCA9IG1xbC5jdXJyZW50VGFyZ2V0IHx8IG1xbDtcbiAgICAgICAgc2VsZi5hc3Nlc3MoKTtcbiAgICB9O1xuICAgIHRoaXMubXFsLmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpO1xufVxuXG5NZWRpYVF1ZXJ5LnByb3RvdHlwZSA9IHtcblxuICAgIGNvbnN0dWN0b3IgOiBNZWRpYVF1ZXJ5LFxuXG4gICAgLyoqXG4gICAgICogYWRkIGEgaGFuZGxlciBmb3IgdGhpcyBxdWVyeSwgdHJpZ2dlcmluZyBpZiBhbHJlYWR5IGFjdGl2ZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyLm1hdGNoIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGFjdGl2YXRlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtoYW5kbGVyLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHF1ZXJ5IGlzIGRlYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW2hhbmRsZXIuc2V0dXBdIGNhbGxiYWNrIGZvciBpbW1lZGlhdGUgZXhlY3V0aW9uIHdoZW4gYSBxdWVyeSBoYW5kbGVyIGlzIHJlZ2lzdGVyZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtoYW5kbGVyLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgZGVmZXJyZWQgdW50aWwgdGhlIGZpcnN0IHRpbWUgdGhlIGhhbmRsZXIgaXMgbWF0Y2hlZD9cbiAgICAgKi9cbiAgICBhZGRIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgcWggPSBuZXcgUXVlcnlIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2gocWgpO1xuXG4gICAgICAgIHRoaXMubWF0Y2hlcygpICYmIHFoLm9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHJlbW92ZXMgdGhlIGdpdmVuIGhhbmRsZXIgZnJvbSB0aGUgY29sbGVjdGlvbiwgYW5kIGNhbGxzIGl0J3MgZGVzdHJveSBtZXRob2RzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdCB8fCBmdW5jdGlvbn0gaGFuZGxlciB0aGUgaGFuZGxlciB0byByZW1vdmVcbiAgICAgKi9cbiAgICByZW1vdmVIYW5kbGVyIDogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzO1xuICAgICAgICBlYWNoKGhhbmRsZXJzLCBmdW5jdGlvbihoLCBpKSB7XG4gICAgICAgICAgICBpZihoLmVxdWFscyhoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGguZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiAhaGFuZGxlcnMuc3BsaWNlKGksMSk7IC8vcmVtb3ZlIGZyb20gYXJyYXkgYW5kIGV4aXQgZWFjaCBlYXJseVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG1lZGlhIHF1ZXJ5IHNob3VsZCBiZSBjb25zaWRlcmVkIGEgbWF0Y2hcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgbWVkaWEgcXVlcnkgY2FuIGJlIGNvbnNpZGVyZWQgYSBtYXRjaCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgICovXG4gICAgbWF0Y2hlcyA6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tcWwubWF0Y2hlcyB8fCB0aGlzLmlzVW5jb25kaXRpb25hbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBoYW5kbGVycyBhbmQgdW5iaW5kcyBldmVudHNcbiAgICAgKi9cbiAgICBjbGVhciA6IGZ1bmN0aW9uKCkge1xuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tcWwucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcik7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMubGVuZ3RoID0gMDsgLy9jbGVhciBhcnJheVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICAqIEFzc2Vzc2VzIHRoZSBxdWVyeSwgdHVybmluZyBvbiBhbGwgaGFuZGxlcnMgaWYgaXQgbWF0Y2hlcywgdHVybmluZyB0aGVtIG9mZiBpZiBpdCBkb2Vzbid0IG1hdGNoXG4gICAgICAgICovXG4gICAgYXNzZXNzIDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLm1hdGNoZXMoKSA/ICdvbicgOiAnb2ZmJztcblxuICAgICAgICBlYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXJbYWN0aW9uXSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhUXVlcnk7XG4iLCJ2YXIgTWVkaWFRdWVyeSA9IHJlcXVpcmUoJy4vTWVkaWFRdWVyeScpO1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL1V0aWwnKTtcbnZhciBlYWNoID0gVXRpbC5lYWNoO1xudmFyIGlzRnVuY3Rpb24gPSBVdGlsLmlzRnVuY3Rpb247XG52YXIgaXNBcnJheSA9IFV0aWwuaXNBcnJheTtcblxuLyoqXG4gKiBBbGxvd3MgZm9yIHJlZ2lzdHJhdGlvbiBvZiBxdWVyeSBoYW5kbGVycy5cbiAqIE1hbmFnZXMgdGhlIHF1ZXJ5IGhhbmRsZXIncyBzdGF0ZSBhbmQgaXMgcmVzcG9uc2libGUgZm9yIHdpcmluZyB1cCBicm93c2VyIGV2ZW50c1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBNZWRpYVF1ZXJ5RGlzcGF0Y2ggKCkge1xuICAgIGlmKCF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21hdGNoTWVkaWEgbm90IHByZXNlbnQsIGxlZ2FjeSBicm93c2VycyByZXF1aXJlIGEgcG9seWZpbGwnKTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJpZXMgPSB7fTtcbiAgICB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZSA9ICF3aW5kb3cubWF0Y2hNZWRpYSgnb25seSBhbGwnKS5tYXRjaGVzO1xufVxuXG5NZWRpYVF1ZXJ5RGlzcGF0Y2gucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBNZWRpYVF1ZXJ5RGlzcGF0Y2gsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxIHRoZSBtZWRpYSBxdWVyeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IEFycmF5IHx8IEZ1bmN0aW9ufSBvcHRpb25zIGVpdGhlciBhIHNpbmdsZSBxdWVyeSBoYW5kbGVyIG9iamVjdCwgYSBmdW5jdGlvbiwgb3IgYW4gYXJyYXkgb2YgcXVlcnkgaGFuZGxlcnNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLm1hdGNoIGZpcmVkIHdoZW4gcXVlcnkgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGZpcmVkIHdoZW4gYSBxdWVyeSBpcyBubyBsb25nZXIgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBmaXJlZCB3aGVuIGhhbmRsZXIgZmlyc3QgdHJpZ2dlcmVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5kZWZlclNldHVwPWZhbHNlXSB3aGV0aGVyIHNldHVwIHNob3VsZCBiZSBydW4gaW1tZWRpYXRlbHkgb3IgZGVmZXJyZWQgdW50aWwgcXVlcnkgaXMgZmlyc3QgbWF0Y2hlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Nob3VsZERlZ3JhZGU9ZmFsc2VdIHdoZXRoZXIgdGhpcyBwYXJ0aWN1bGFyIG1lZGlhIHF1ZXJ5IHNob3VsZCBhbHdheXMgcnVuIG9uIGluY2FwYWJsZSBicm93c2Vyc1xuICAgICAqL1xuICAgIHJlZ2lzdGVyIDogZnVuY3Rpb24ocSwgb3B0aW9ucywgc2hvdWxkRGVncmFkZSkge1xuICAgICAgICB2YXIgcXVlcmllcyAgICAgICAgID0gdGhpcy5xdWVyaWVzLFxuICAgICAgICAgICAgaXNVbmNvbmRpdGlvbmFsID0gc2hvdWxkRGVncmFkZSAmJiB0aGlzLmJyb3dzZXJJc0luY2FwYWJsZTtcblxuICAgICAgICBpZighcXVlcmllc1txXSkge1xuICAgICAgICAgICAgcXVlcmllc1txXSA9IG5ldyBNZWRpYVF1ZXJ5KHEsIGlzVW5jb25kaXRpb25hbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvL25vcm1hbGlzZSB0byBvYmplY3QgaW4gYW4gYXJyYXlcbiAgICAgICAgaWYoaXNGdW5jdGlvbihvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHsgbWF0Y2ggOiBvcHRpb25zIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYoIWlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBbb3B0aW9uc107XG4gICAgICAgIH1cbiAgICAgICAgZWFjaChvcHRpb25zLCBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB7IG1hdGNoIDogaGFuZGxlciB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcXVlcmllc1txXS5hZGRIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdW5yZWdpc3RlcnMgYSBxdWVyeSBhbmQgYWxsIGl0J3MgaGFuZGxlcnMsIG9yIGEgc3BlY2lmaWMgaGFuZGxlciBmb3IgYSBxdWVyeVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHEgdGhlIG1lZGlhIHF1ZXJ5IHRvIHRhcmdldFxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbaGFuZGxlcl0gc3BlY2lmaWMgaGFuZGxlciB0byB1bnJlZ2lzdGVyXG4gICAgICovXG4gICAgdW5yZWdpc3RlciA6IGZ1bmN0aW9uKHEsIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW3FdO1xuXG4gICAgICAgIGlmKHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkucmVtb3ZlSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcmllc1txXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWVkaWFRdWVyeURpc3BhdGNoO1xuIiwiLyoqXG4gKiBEZWxlZ2F0ZSB0byBoYW5kbGUgYSBtZWRpYSBxdWVyeSBiZWluZyBtYXRjaGVkIGFuZCB1bm1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMubWF0Y2ggY2FsbGJhY2sgZm9yIHdoZW4gdGhlIG1lZGlhIHF1ZXJ5IGlzIG1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnVubWF0Y2hdIGNhbGxiYWNrIGZvciB3aGVuIHRoZSBtZWRpYSBxdWVyeSBpcyB1bm1hdGNoZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvcHRpb25zLnNldHVwXSBvbmUtdGltZSBjYWxsYmFjayB0cmlnZ2VyZWQgdGhlIGZpcnN0IHRpbWUgYSBxdWVyeSBpcyBtYXRjaGVkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmRlZmVyU2V0dXA9ZmFsc2VdIHNob3VsZCB0aGUgc2V0dXAgY2FsbGJhY2sgYmUgcnVuIGltbWVkaWF0ZWx5LCByYXRoZXIgdGhhbiBmaXJzdCB0aW1lIHF1ZXJ5IGlzIG1hdGNoZWQ/XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUXVlcnlIYW5kbGVyKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICFvcHRpb25zLmRlZmVyU2V0dXAgJiYgdGhpcy5zZXR1cCgpO1xufVxuXG5RdWVyeUhhbmRsZXIucHJvdG90eXBlID0ge1xuXG4gICAgY29uc3RydWN0b3IgOiBRdWVyeUhhbmRsZXIsXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyBzZXR1cCBvZiB0aGUgaGFuZGxlclxuICAgICAqXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICovXG4gICAgc2V0dXAgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLnNldHVwKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogY29vcmRpbmF0ZXMgc2V0dXAgYW5kIHRyaWdnZXJpbmcgb2YgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uIDogZnVuY3Rpb24oKSB7XG4gICAgICAgICF0aGlzLmluaXRpYWxpc2VkICYmIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLm1hdGNoICYmIHRoaXMub3B0aW9ucy5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjb29yZGluYXRlcyB0aGUgdW5tYXRjaCBldmVudCBmb3IgdGhlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIG9mZiA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm9wdGlvbnMudW5tYXRjaCAmJiB0aGlzLm9wdGlvbnMudW5tYXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBjYWxsZWQgd2hlbiBhIGhhbmRsZXIgaXMgdG8gYmUgZGVzdHJveWVkLlxuICAgICAqIGRlbGVnYXRlcyB0byB0aGUgZGVzdHJveSBvciB1bm1hdGNoIGNhbGxiYWNrcywgZGVwZW5kaW5nIG9uIGF2YWlsYWJpbGl0eS5cbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqL1xuICAgIGRlc3Ryb3kgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRlc3Ryb3kgPyB0aGlzLm9wdGlvbnMuZGVzdHJveSgpIDogdGhpcy5vZmYoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogZGV0ZXJtaW5lcyBlcXVhbGl0eSBieSByZWZlcmVuY2UuXG4gICAgICogaWYgb2JqZWN0IGlzIHN1cHBsaWVkIGNvbXBhcmUgb3B0aW9ucywgaWYgZnVuY3Rpb24sIGNvbXBhcmUgbWF0Y2ggY2FsbGJhY2tcbiAgICAgKlxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0IHx8IGZ1bmN0aW9ufSBbdGFyZ2V0XSB0aGUgdGFyZ2V0IGZvciBjb21wYXJpc29uXG4gICAgICovXG4gICAgZXF1YWxzIDogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPT09IHRhcmdldCB8fCB0aGlzLm9wdGlvbnMubWF0Y2ggPT09IHRhcmdldDtcbiAgICB9XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnlIYW5kbGVyO1xuIiwiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIGl0ZXJhdGluZyBvdmVyIGEgY29sbGVjdGlvblxuICpcbiAqIEBwYXJhbSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0gZm5cbiAqL1xuZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBmbikge1xuICAgIHZhciBpICAgICAgPSAwLFxuICAgICAgICBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgY29udDtcblxuICAgIGZvcihpOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udCA9IGZuKGNvbGxlY3Rpb25baV0sIGkpO1xuICAgICAgICBpZihjb250ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYnJlYWs7IC8vYWxsb3cgZWFybHkgZXhpdFxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciB0YXJnZXQgb2JqZWN0IGlzIGFuIGFycmF5XG4gKlxuICogQHBhcmFtIHRhcmdldCB0aGUgb2JqZWN0IHVuZGVyIHRlc3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYXJyYXksIGZhbHNlIG90aGVyd2lzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHRhcmdldCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRhcmdldCBvYmplY3QgaXMgYSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIG9iamVjdCB1bmRlciB0ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGZ1bmN0aW9uLCBmYWxzZSBvdGhlcndpc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih0YXJnZXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaXNGdW5jdGlvbiA6IGlzRnVuY3Rpb24sXG4gICAgaXNBcnJheSA6IGlzQXJyYXksXG4gICAgZWFjaCA6IGVhY2hcbn07XG4iLCJ2YXIgTWVkaWFRdWVyeURpc3BhdGNoID0gcmVxdWlyZSgnLi9NZWRpYVF1ZXJ5RGlzcGF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IE1lZGlhUXVlcnlEaXNwYXRjaCgpO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuZnVuY3Rpb24gb21pdChvYmosIGZpZWxkcykge1xuICB2YXIgc2hhbGxvd0NvcHkgPSBfZXh0ZW5kcyh7fSwgb2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gZmllbGRzW2ldO1xuICAgIGRlbGV0ZSBzaGFsbG93Q29weVtrZXldO1xuICB9XG4gIHJldHVybiBzaGFsbG93Q29weTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb21pdDsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGFsaWduRWxlbWVudCwgYWxpZ25Qb2ludCB9IGZyb20gJ2RvbS1hbGlnbic7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICdyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyJztcblxuaW1wb3J0IHsgaXNXaW5kb3csIGJ1ZmZlciwgaXNTYW1lUG9pbnQgfSBmcm9tICcuL3V0aWwnO1xuXG5mdW5jdGlvbiBnZXRFbGVtZW50KGZ1bmMpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nIHx8ICFmdW5jKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIGZ1bmMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0UG9pbnQocG9pbnQpIHtcbiAgaWYgKHR5cGVvZiBwb2ludCAhPT0gJ29iamVjdCcgfHwgIXBvaW50KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHBvaW50O1xufVxuXG52YXIgQWxpZ24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQWxpZ24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFsaWduKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWxpZ24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmZvcmNlQWxpZ24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIHRhcmdldCA9IF90aGlzJHByb3BzLnRhcmdldCxcbiAgICAgICAgICBhbGlnbiA9IF90aGlzJHByb3BzLmFsaWduLFxuICAgICAgICAgIG9uQWxpZ24gPSBfdGhpcyRwcm9wcy5vbkFsaWduO1xuXG4gICAgICBpZiAoIWRpc2FibGVkICYmIHRhcmdldCkge1xuICAgICAgICB2YXIgc291cmNlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudCh0YXJnZXQpO1xuICAgICAgICB2YXIgcG9pbnQgPSBnZXRQb2ludCh0YXJnZXQpO1xuXG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgcmVzdWx0ID0gYWxpZ25FbGVtZW50KHNvdXJjZSwgZWxlbWVudCwgYWxpZ24pO1xuICAgICAgICB9IGVsc2UgaWYgKHBvaW50KSB7XG4gICAgICAgICAgcmVzdWx0ID0gYWxpZ25Qb2ludChzb3VyY2UsIHBvaW50LCBhbGlnbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob25BbGlnbikge1xuICAgICAgICAgIG9uQWxpZ24oc291cmNlLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBBbGlnbi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIC8vIGlmIHBhcmVudCByZWYgbm90IGF0dGFjaGVkIC4uLi4gdXNlIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkXG4gICAgdGhpcy5mb3JjZUFsaWduKCk7XG4gICAgaWYgKCFwcm9wcy5kaXNhYmxlZCAmJiBwcm9wcy5tb25pdG9yV2luZG93UmVzaXplKSB7XG4gICAgICB0aGlzLnN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfTtcblxuICBBbGlnbi5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciByZUFsaWduID0gZmFsc2U7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghcHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHZhciBzb3VyY2VSZWN0ID0gc291cmNlID8gc291cmNlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogbnVsbDtcblxuICAgICAgaWYgKHByZXZQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZUFsaWduID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsYXN0RWxlbWVudCA9IGdldEVsZW1lbnQocHJldlByb3BzLnRhcmdldCk7XG4gICAgICAgIHZhciBjdXJyZW50RWxlbWVudCA9IGdldEVsZW1lbnQocHJvcHMudGFyZ2V0KTtcbiAgICAgICAgdmFyIGxhc3RQb2ludCA9IGdldFBvaW50KHByZXZQcm9wcy50YXJnZXQpO1xuICAgICAgICB2YXIgY3VycmVudFBvaW50ID0gZ2V0UG9pbnQocHJvcHMudGFyZ2V0KTtcblxuICAgICAgICBpZiAoaXNXaW5kb3cobGFzdEVsZW1lbnQpICYmIGlzV2luZG93KGN1cnJlbnRFbGVtZW50KSkge1xuICAgICAgICAgIC8vIFNraXAgaWYgaXMgd2luZG93XG4gICAgICAgICAgcmVBbGlnbiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGxhc3RFbGVtZW50ICE9PSBjdXJyZW50RWxlbWVudCB8fCAvLyBFbGVtZW50IGNoYW5nZVxuICAgICAgICBsYXN0RWxlbWVudCAmJiAhY3VycmVudEVsZW1lbnQgJiYgY3VycmVudFBvaW50IHx8IC8vIENoYW5nZSBmcm9tIGVsZW1lbnQgdG8gcG9pbnRcbiAgICAgICAgbGFzdFBvaW50ICYmIGN1cnJlbnRQb2ludCAmJiBjdXJyZW50RWxlbWVudCB8fCAvLyBDaGFuZ2UgZnJvbSBwb2ludCB0byBlbGVtZW50XG4gICAgICAgIGN1cnJlbnRQb2ludCAmJiAhaXNTYW1lUG9pbnQobGFzdFBvaW50LCBjdXJyZW50UG9pbnQpKSB7XG4gICAgICAgICAgcmVBbGlnbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBzb3VyY2UgZWxlbWVudCBzaXplIGNoYW5nZWRcbiAgICAgICAgdmFyIHByZVJlY3QgPSB0aGlzLnNvdXJjZVJlY3QgfHwge307XG4gICAgICAgIGlmICghcmVBbGlnbiAmJiBzb3VyY2UgJiYgKHByZVJlY3Qud2lkdGggIT09IHNvdXJjZVJlY3Qud2lkdGggfHwgcHJlUmVjdC5oZWlnaHQgIT09IHNvdXJjZVJlY3QuaGVpZ2h0KSkge1xuICAgICAgICAgIHJlQWxpZ24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc291cmNlUmVjdCA9IHNvdXJjZVJlY3Q7XG4gICAgfVxuXG4gICAgaWYgKHJlQWxpZ24pIHtcbiAgICAgIHRoaXMuZm9yY2VBbGlnbigpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5tb25pdG9yV2luZG93UmVzaXplICYmICFwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5zdGFydE1vbml0b3JXaW5kb3dSZXNpemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfTtcblxuICBBbGlnbi5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnN0b3BNb25pdG9yV2luZG93UmVzaXplKCk7XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLnN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uIHN0YXJ0TW9uaXRvcldpbmRvd1Jlc2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMucmVzaXplSGFuZGxlcikge1xuICAgICAgdGhpcy5idWZmZXJNb25pdG9yID0gYnVmZmVyKHRoaXMuZm9yY2VBbGlnbiwgdGhpcy5wcm9wcy5tb25pdG9yQnVmZmVyVGltZSk7XG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIgPSBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuYnVmZmVyTW9uaXRvcik7XG4gICAgfVxuICB9O1xuXG4gIEFsaWduLnByb3RvdHlwZS5zdG9wTW9uaXRvcldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uIHN0b3BNb25pdG9yV2luZG93UmVzaXplKCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuYnVmZmVyTW9uaXRvci5jbGVhcigpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgQWxpZ24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlblByb3BzID0gX3Byb3BzLmNoaWxkcmVuUHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgaWYgKGNoaWxkcmVuUHJvcHMpIHtcbiAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgdmFyIHByb3BMaXN0ID0gT2JqZWN0LmtleXMoY2hpbGRyZW5Qcm9wcyk7XG4gICAgICBwcm9wTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIG5ld1Byb3BzW3Byb3BdID0gX3RoaXMyLnByb3BzW2NoaWxkcmVuUHJvcHNbcHJvcF1dO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld1Byb3BzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkO1xuICB9O1xuXG4gIHJldHVybiBBbGlnbjtcbn0oQ29tcG9uZW50KTtcblxuQWxpZ24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlblByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhbGlnbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0YXJnZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGNsaWVudFg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2xpZW50WTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlWDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlWTogUHJvcFR5cGVzLm51bWJlclxuICB9KV0pLFxuICBvbkFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgbW9uaXRvckJ1ZmZlclRpbWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIG1vbml0b3JXaW5kb3dSZXNpemU6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG59O1xuQWxpZ24uZGVmYXVsdFByb3BzID0ge1xuICB0YXJnZXQ6IGZ1bmN0aW9uIHRhcmdldCgpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9LFxuICBtb25pdG9yQnVmZmVyVGltZTogNTAsXG4gIG1vbml0b3JXaW5kb3dSZXNpemU6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgQWxpZ247IiwiLy8gZXhwb3J0IHRoaXMgcGFja2FnZSdzIGFwaVxuaW1wb3J0IEFsaWduIGZyb20gJy4vQWxpZ24nO1xuXG5leHBvcnQgZGVmYXVsdCBBbGlnbjsiLCJleHBvcnQgZnVuY3Rpb24gYnVmZmVyKGZuLCBtcykge1xuICB2YXIgdGltZXIgPSB2b2lkIDA7XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckZuKCkge1xuICAgIGNsZWFyKCk7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZuLCBtcyk7XG4gIH1cblxuICBidWZmZXJGbi5jbGVhciA9IGNsZWFyO1xuXG4gIHJldHVybiBidWZmZXJGbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVBvaW50KHByZXYsIG5leHQpIHtcbiAgaWYgKHByZXYgPT09IG5leHQpIHJldHVybiB0cnVlO1xuICBpZiAoIXByZXYgfHwgIW5leHQpIHJldHVybiBmYWxzZTtcblxuICBpZiAoJ3BhZ2VYJyBpbiBuZXh0ICYmICdwYWdlWScgaW4gbmV4dCkge1xuICAgIHJldHVybiBwcmV2LnBhZ2VYID09PSBuZXh0LnBhZ2VYICYmIHByZXYucGFnZVkgPT09IG5leHQucGFnZVk7XG4gIH1cblxuICBpZiAoJ2NsaWVudFgnIGluIG5leHQgJiYgJ2NsaWVudFknIGluIG5leHQpIHtcbiAgICByZXR1cm4gcHJldi5jbGllbnRYID09PSBuZXh0LmNsaWVudFggJiYgcHJldi5jbGllbnRZID09PSBuZXh0LmNsaWVudFk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmoud2luZG93ID09PSBvYmo7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRvQXJyYXlDaGlsZHJlbiwgbWVyZ2VDaGlsZHJlbiwgZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXksIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleSwgaXNTYW1lQ2hpbGRyZW4gfSBmcm9tICcuL0NoaWxkcmVuVXRpbHMnO1xuaW1wb3J0IEFuaW1hdGVDaGlsZCBmcm9tICcuL0FuaW1hdGVDaGlsZCc7XG5pbXBvcnQgYW5pbVV0aWwgZnJvbSAnLi91dGlsL2FuaW1hdGUnO1xuXG52YXIgZGVmYXVsdEtleSA9ICdyY19hbmltYXRlXycgKyBEYXRlLm5vdygpO1xuXG5mdW5jdGlvbiBnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIGlmICghY2hpbGRyZW4ua2V5KSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGtleTogZGVmYXVsdEtleVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBBbmltYXRlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFuaW1hdGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuICBmdW5jdGlvbiBBbmltYXRlKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuaW1hdGUpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFuaW1hdGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBbmltYXRlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIF90aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXMgPSB7fTtcbiAgICBfdGhpcy5rZXlzVG9FbnRlciA9IFtdO1xuICAgIF90aGlzLmtleXNUb0xlYXZlID0gW107XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoaWxkcmVuOiB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMocHJvcHMpKVxuICAgIH07XG5cbiAgICBfdGhpcy5jaGlsZHJlblJlZnMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQW5pbWF0ZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBzaG93UHJvcCA9IHRoaXMucHJvcHMuc2hvd1Byb3A7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiAhIWNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICBfdGhpczIucGVyZm9ybUFwcGVhcihjaGlsZC5rZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB0aGlzLm5leHRQcm9wcyA9IG5leHRQcm9wcztcbiAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSB0b0FycmF5Q2hpbGRyZW4oZ2V0Q2hpbGRyZW5Gcm9tUHJvcHMobmV4dFByb3BzKSk7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgLy8gZXhjbHVzaXZlIG5lZWRzIGltbWVkaWF0ZSByZXNwb25zZVxuICAgICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmN1cnJlbnRseUFuaW1hdGluZ0tleXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIF90aGlzMy5zdG9wKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIHNob3dQcm9wID0gcHJvcHMuc2hvd1Byb3A7XG4gICAgICB2YXIgY3VycmVudGx5QW5pbWF0aW5nS2V5cyA9IHRoaXMuY3VycmVudGx5QW5pbWF0aW5nS2V5cztcbiAgICAgIC8vIGxhc3QgcHJvcHMgY2hpbGRyZW4gaWYgZXhjbHVzaXZlXG4gICAgICB2YXIgY3VycmVudENoaWxkcmVuID0gcHJvcHMuZXhjbHVzaXZlID8gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSkgOiB0aGlzLnN0YXRlLmNoaWxkcmVuO1xuICAgICAgLy8gaW4gY2FzZSBkZXN0cm95IGluIHNob3dQcm9wIG1vZGVcbiAgICAgIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50Q2hpbGQpIHtcbiAgICAgICAgICB2YXIgbmV4dENoaWxkID0gY3VycmVudENoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGN1cnJlbnRDaGlsZC5rZXkpO1xuICAgICAgICAgIHZhciBuZXdDaGlsZCA9IHZvaWQgMDtcbiAgICAgICAgICBpZiAoKCFuZXh0Q2hpbGQgfHwgIW5leHRDaGlsZC5wcm9wc1tzaG93UHJvcF0pICYmIGN1cnJlbnRDaGlsZC5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgICAgIG5ld0NoaWxkID0gUmVhY3QuY2xvbmVFbGVtZW50KG5leHRDaGlsZCB8fCBjdXJyZW50Q2hpbGQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgc2hvd1Byb3AsIHRydWUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3Q2hpbGQgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChuZXdDaGlsZCkge1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXdDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbmV4dENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKG5leHRDaGlsZCkge1xuICAgICAgICAgIGlmICghbmV4dENoaWxkIHx8ICFmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBuZXh0Q2hpbGQua2V5KSkge1xuICAgICAgICAgICAgbmV3Q2hpbGRyZW4ucHVzaChuZXh0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDaGlsZHJlbiA9IG1lcmdlQ2hpbGRyZW4oY3VycmVudENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgfVxuXG4gICAgICAvLyBuZWVkIHJlbmRlciB0byBhdm9pZCB1cGRhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjaGlsZHJlbjogbmV3Q2hpbGRyZW5cbiAgICAgIH0pO1xuXG4gICAgICBuZXh0Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGtleSA9IGNoaWxkICYmIGNoaWxkLmtleTtcbiAgICAgICAgaWYgKGNoaWxkICYmIGN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzUHJldiA9IGNoaWxkICYmIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSk7XG4gICAgICAgIGlmIChzaG93UHJvcCkge1xuICAgICAgICAgIHZhciBzaG93SW5OZXh0ID0gY2hpbGQucHJvcHNbc2hvd1Byb3BdO1xuICAgICAgICAgIGlmIChoYXNQcmV2KSB7XG4gICAgICAgICAgICB2YXIgc2hvd0luTm93ID0gZmluZFNob3duQ2hpbGRJbkNoaWxkcmVuQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXksIHNob3dQcm9wKTtcbiAgICAgICAgICAgIGlmICghc2hvd0luTm93ICYmIHNob3dJbk5leHQpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHNob3dJbk5leHQpIHtcbiAgICAgICAgICAgIF90aGlzMy5rZXlzVG9FbnRlci5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFoYXNQcmV2KSB7XG4gICAgICAgICAgX3RoaXMzLmtleXNUb0VudGVyLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGN1cnJlbnRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIga2V5ID0gY2hpbGQgJiYgY2hpbGQua2V5O1xuICAgICAgICBpZiAoY2hpbGQgJiYgY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoYXNOZXh0ID0gY2hpbGQgJiYgZmluZENoaWxkSW5DaGlsZHJlbkJ5S2V5KG5leHRDaGlsZHJlbiwga2V5KTtcbiAgICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgICAgdmFyIHNob3dJbk5vdyA9IGNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICAgICAgICBpZiAoaGFzTmV4dCkge1xuICAgICAgICAgICAgdmFyIHNob3dJbk5leHQgPSBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShuZXh0Q2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApO1xuICAgICAgICAgICAgaWYgKCFzaG93SW5OZXh0ICYmIHNob3dJbk5vdykge1xuICAgICAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoc2hvd0luTm93KSB7XG4gICAgICAgICAgICBfdGhpczMua2V5c1RvTGVhdmUucHVzaChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGFzTmV4dCkge1xuICAgICAgICAgIF90aGlzMy5rZXlzVG9MZWF2ZS5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHZhciBrZXlzVG9FbnRlciA9IHRoaXMua2V5c1RvRW50ZXI7XG4gICAgICB0aGlzLmtleXNUb0VudGVyID0gW107XG4gICAgICBrZXlzVG9FbnRlci5mb3JFYWNoKHRoaXMucGVyZm9ybUVudGVyKTtcbiAgICAgIHZhciBrZXlzVG9MZWF2ZSA9IHRoaXMua2V5c1RvTGVhdmU7XG4gICAgICB0aGlzLmtleXNUb0xlYXZlID0gW107XG4gICAgICBrZXlzVG9MZWF2ZS5mb3JFYWNoKHRoaXMucGVyZm9ybUxlYXZlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1ZhbGlkQ2hpbGRCeUtleScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzVmFsaWRDaGlsZEJ5S2V5KGN1cnJlbnRDaGlsZHJlbiwga2V5KSB7XG4gICAgICB2YXIgc2hvd1Byb3AgPSB0aGlzLnByb3BzLnNob3dQcm9wO1xuICAgICAgaWYgKHNob3dQcm9wKSB7XG4gICAgICAgIHJldHVybiBmaW5kU2hvd25DaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSwgc2hvd1Byb3ApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3RvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3Aoa2V5KSB7XG4gICAgICBkZWxldGUgdGhpcy5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5jaGlsZHJlblJlZnNba2V5XTtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50LnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHRoaXMubmV4dFByb3BzID0gcHJvcHM7XG4gICAgICB2YXIgc3RhdGVDaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW47XG4gICAgICB2YXIgY2hpbGRyZW4gPSBudWxsO1xuICAgICAgaWYgKHN0YXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgY2hpbGRyZW4gPSBzdGF0ZUNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQgPT09IG51bGwgfHwgY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWNoaWxkLmtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtdXN0IHNldCBrZXkgZm9yIDxyYy1hbmltYXRlPiBjaGlsZHJlbicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEFuaW1hdGVDaGlsZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBjaGlsZC5rZXksXG4gICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuY2hpbGRyZW5SZWZzW2NoaWxkLmtleV0gPSBub2RlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBhbmltYXRpb246IHByb3BzLmFuaW1hdGlvbixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHByb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI6IHByb3BzLnRyYW5zaXRpb25FbnRlcixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogcHJvcHMudHJhbnNpdGlvbkFwcGVhcixcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbkxlYXZlOiBwcm9wcy50cmFuc2l0aW9uTGVhdmVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdmFyIENvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudDtcbiAgICAgIGlmIChDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIHBhc3NlZFByb3BzID0gcHJvcHM7XG4gICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHBhc3NlZFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICBzdHlsZTogcHJvcHMuc3R5bGVcbiAgICAgICAgICB9LCBwcm9wcy5jb21wb25lbnRQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgIHBhc3NlZFByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRyZW5bMF0gfHwgbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQW5pbWF0ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuQW5pbWF0ZS5pc0FuaW1hdGUgPSB0cnVlO1xuQW5pbWF0ZS5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcbiAgY29tcG9uZW50UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgdHJhbnNpdGlvbkVudGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHJhbnNpdGlvbkFwcGVhcjogUHJvcFR5cGVzLmJvb2wsXG4gIGV4Y2x1c2l2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIHRyYW5zaXRpb25MZWF2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBvbkFwcGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNob3dQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbn07XG5BbmltYXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW5pbWF0aW9uOiB7fSxcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIGNvbXBvbmVudFByb3BzOiB7fSxcbiAgdHJhbnNpdGlvbkVudGVyOiB0cnVlLFxuICB0cmFuc2l0aW9uTGVhdmU6IHRydWUsXG4gIHRyYW5zaXRpb25BcHBlYXI6IGZhbHNlLFxuICBvbkVuZDogbm9vcCxcbiAgb25FbnRlcjogbm9vcCxcbiAgb25MZWF2ZTogbm9vcCxcbiAgb25BcHBlYXI6IG5vb3Bcbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgdGhpcy5wZXJmb3JtRW50ZXIgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgLy8gbWF5IGFscmVhZHkgcmVtb3ZlIGJ5IGV4Y2x1c2l2ZVxuICAgIGlmIChfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0pIHtcbiAgICAgIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldLmNvbXBvbmVudFdpbGxFbnRlcihfdGhpczUuaGFuZGxlRG9uZUFkZGluZy5iaW5kKF90aGlzNSwga2V5LCAnZW50ZXInKSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucGVyZm9ybUFwcGVhciA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoX3RoaXM1LmNoaWxkcmVuUmVmc1trZXldKSB7XG4gICAgICBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldID0gdHJ1ZTtcbiAgICAgIF90aGlzNS5jaGlsZHJlblJlZnNba2V5XS5jb21wb25lbnRXaWxsQXBwZWFyKF90aGlzNS5oYW5kbGVEb25lQWRkaW5nLmJpbmQoX3RoaXM1LCBrZXksICdhcHBlYXInKSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuaGFuZGxlRG9uZUFkZGluZyA9IGZ1bmN0aW9uIChrZXksIHR5cGUpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczUucHJvcHM7XG4gICAgZGVsZXRlIF90aGlzNS5jdXJyZW50bHlBbmltYXRpbmdLZXlzW2tleV07XG4gICAgLy8gaWYgdXBkYXRlIG9uIGV4Y2x1c2l2ZSBtb2RlLCBza2lwIGNoZWNrXG4gICAgaWYgKHByb3BzLmV4Y2x1c2l2ZSAmJiBwcm9wcyAhPT0gX3RoaXM1Lm5leHRQcm9wcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY3VycmVudENoaWxkcmVuID0gdG9BcnJheUNoaWxkcmVuKGdldENoaWxkcmVuRnJvbVByb3BzKHByb3BzKSk7XG4gICAgaWYgKCFfdGhpczUuaXNWYWxpZENoaWxkQnlLZXkoY3VycmVudENoaWxkcmVuLCBrZXkpKSB7XG4gICAgICAvLyBleGNsdXNpdmUgd2lsbCBub3QgbmVlZCB0aGlzXG4gICAgICBfdGhpczUucGVyZm9ybUxlYXZlKGtleSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnYXBwZWFyJykge1xuICAgICAgaWYgKGFuaW1VdGlsLmFsbG93QXBwZWFyQ2FsbGJhY2socHJvcHMpKSB7XG4gICAgICAgIHByb3BzLm9uQXBwZWFyKGtleSk7XG4gICAgICAgIHByb3BzLm9uRW5kKGtleSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhbmltVXRpbC5hbGxvd0VudGVyQ2FsbGJhY2socHJvcHMpKSB7XG4gICAgICBwcm9wcy5vbkVudGVyKGtleSk7XG4gICAgICBwcm9wcy5vbkVuZChrZXksIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnBlcmZvcm1MZWF2ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAvLyBtYXkgYWxyZWFkeSByZW1vdmUgYnkgZXhjbHVzaXZlXG4gICAgaWYgKF90aGlzNS5jaGlsZHJlblJlZnNba2V5XSkge1xuICAgICAgX3RoaXM1LmN1cnJlbnRseUFuaW1hdGluZ0tleXNba2V5XSA9IHRydWU7XG4gICAgICBfdGhpczUuY2hpbGRyZW5SZWZzW2tleV0uY29tcG9uZW50V2lsbExlYXZlKF90aGlzNS5oYW5kbGVEb25lTGVhdmluZy5iaW5kKF90aGlzNSwga2V5KSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuaGFuZGxlRG9uZUxlYXZpbmcgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXM1LnByb3BzO1xuICAgIGRlbGV0ZSBfdGhpczUuY3VycmVudGx5QW5pbWF0aW5nS2V5c1trZXldO1xuICAgIC8vIGlmIHVwZGF0ZSBvbiBleGNsdXNpdmUgbW9kZSwgc2tpcCBjaGVja1xuICAgIGlmIChwcm9wcy5leGNsdXNpdmUgJiYgcHJvcHMgIT09IF90aGlzNS5uZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGN1cnJlbnRDaGlsZHJlbiA9IHRvQXJyYXlDaGlsZHJlbihnZXRDaGlsZHJlbkZyb21Qcm9wcyhwcm9wcykpO1xuICAgIC8vIGluIGNhc2Ugc3RhdGUgY2hhbmdlIGlzIHRvbyBmYXN0XG4gICAgaWYgKF90aGlzNS5pc1ZhbGlkQ2hpbGRCeUtleShjdXJyZW50Q2hpbGRyZW4sIGtleSkpIHtcbiAgICAgIF90aGlzNS5wZXJmb3JtRW50ZXIoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVuZCA9IGZ1bmN0aW9uIGVuZCgpIHtcbiAgICAgICAgaWYgKGFuaW1VdGlsLmFsbG93TGVhdmVDYWxsYmFjayhwcm9wcykpIHtcbiAgICAgICAgICBwcm9wcy5vbkxlYXZlKGtleSk7XG4gICAgICAgICAgcHJvcHMub25FbmQoa2V5LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoIWlzU2FtZUNoaWxkcmVuKF90aGlzNS5zdGF0ZS5jaGlsZHJlbiwgY3VycmVudENoaWxkcmVuLCBwcm9wcy5zaG93UHJvcCkpIHtcbiAgICAgICAgX3RoaXM1LnNldFN0YXRlKHtcbiAgICAgICAgICBjaGlsZHJlbjogY3VycmVudENoaWxkcmVuXG4gICAgICAgIH0sIGVuZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNzc0FuaW1hdGUsIHsgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgfSBmcm9tICdjc3MtYW5pbWF0aW9uJztcbmltcG9ydCBhbmltVXRpbCBmcm9tICcuL3V0aWwvYW5pbWF0ZSc7XG5cbnZhciB0cmFuc2l0aW9uTWFwID0ge1xuICBlbnRlcjogJ3RyYW5zaXRpb25FbnRlcicsXG4gIGFwcGVhcjogJ3RyYW5zaXRpb25BcHBlYXInLFxuICBsZWF2ZTogJ3RyYW5zaXRpb25MZWF2ZSdcbn07XG5cbnZhciBBbmltYXRlQ2hpbGQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQW5pbWF0ZUNoaWxkLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBbmltYXRlQ2hpbGQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFuaW1hdGVDaGlsZCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFuaW1hdGVDaGlsZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFuaW1hdGVDaGlsZCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFuaW1hdGVDaGlsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbEVudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEVudGVyKGRvbmUpIHtcbiAgICAgIGlmIChhbmltVXRpbC5pc0VudGVyU3VwcG9ydGVkKHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbignZW50ZXInLCBkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsQXBwZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEFwcGVhcihkb25lKSB7XG4gICAgICBpZiAoYW5pbVV0aWwuaXNBcHBlYXJTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdhcHBlYXInLCBkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTGVhdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTGVhdmUoZG9uZSkge1xuICAgICAgaWYgKGFuaW1VdGlsLmlzTGVhdmVTdXBwb3J0ZWQodGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy50cmFuc2l0aW9uKCdsZWF2ZScsIGRvbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYWx3YXlzIHN5bmMsIGRvIG5vdCBpbnRlcnVwdCB3aXRoIHJlYWN0IGNvbXBvbmVudCBsaWZlIGN5Y2xlXG4gICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gLT4gYW5pbWF0ZSBoaWRkZW4gLT5cbiAgICAgICAgLy8gZGlkVXBkYXRlIC0+IGFuaW1hdGUgbGVhdmUgLT4gdW5tb3VudCAoaWYgYW5pbWF0ZSBpcyBub25lKVxuICAgICAgICBkb25lKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndHJhbnNpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYW5zaXRpb24oYW5pbWF0aW9uVHlwZSwgZmluaXNoQ2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgdmFyIG5hbWVJc09iaiA9IHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ29iamVjdCc7XG4gICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIHZhciBlbmQgPSBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICAgIF90aGlzMi5zdG9wcGVyID0gbnVsbDtcbiAgICAgICAgZmluaXNoQ2FsbGJhY2soKTtcbiAgICAgIH07XG4gICAgICBpZiAoKGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkIHx8ICFwcm9wcy5hbmltYXRpb25bYW5pbWF0aW9uVHlwZV0pICYmIHRyYW5zaXRpb25OYW1lICYmIHByb3BzW3RyYW5zaXRpb25NYXBbYW5pbWF0aW9uVHlwZV1dKSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZUlzT2JqID8gdHJhbnNpdGlvbk5hbWVbYW5pbWF0aW9uVHlwZV0gOiB0cmFuc2l0aW9uTmFtZSArICctJyArIGFuaW1hdGlvblR5cGU7XG4gICAgICAgIHZhciBhY3RpdmVOYW1lID0gbmFtZSArICctYWN0aXZlJztcbiAgICAgICAgaWYgKG5hbWVJc09iaiAmJiB0cmFuc2l0aW9uTmFtZVthbmltYXRpb25UeXBlICsgJ0FjdGl2ZSddKSB7XG4gICAgICAgICAgYWN0aXZlTmFtZSA9IHRyYW5zaXRpb25OYW1lW2FuaW1hdGlvblR5cGUgKyAnQWN0aXZlJ107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wcGVyID0gY3NzQW5pbWF0ZShub2RlLCB7XG4gICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZU5hbWVcbiAgICAgICAgfSwgZW5kKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcHBlciA9IHByb3BzLmFuaW1hdGlvblthbmltYXRpb25UeXBlXShub2RlLCBlbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0b3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdmFyIHN0b3BwZXIgPSB0aGlzLnN0b3BwZXI7XG4gICAgICBpZiAoc3RvcHBlcikge1xuICAgICAgICB0aGlzLnN0b3BwZXIgPSBudWxsO1xuICAgICAgICBzdG9wcGVyLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQW5pbWF0ZUNoaWxkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5BbmltYXRlQ2hpbGQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVDaGlsZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9BcnJheUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciByZXQgPSBbXTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0LnB1c2goY2hpbGQpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5KSB7XG4gIHZhciByZXQgPSBudWxsO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKHJldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkpIHtcbiAgICAgICAgcmV0ID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRTaG93bkNoaWxkSW5DaGlsZHJlbkJ5S2V5KGNoaWxkcmVuLCBrZXksIHNob3dQcm9wKSB7XG4gIHZhciByZXQgPSBudWxsO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkLmtleSA9PT0ga2V5ICYmIGNoaWxkLnByb3BzW3Nob3dQcm9wXSkge1xuICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0d28gY2hpbGQgd2l0aCBzYW1lIGtleSBmb3IgPHJjLWFuaW1hdGU+IGNoaWxkcmVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0ID0gY2hpbGQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRIaWRkZW5DaGlsZEluQ2hpbGRyZW5CeUtleShjaGlsZHJlbiwga2V5LCBzaG93UHJvcCkge1xuICB2YXIgZm91bmQgPSAwO1xuICBpZiAoY2hpbGRyZW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGZvdW5kID0gY2hpbGQgJiYgY2hpbGQua2V5ID09PSBrZXkgJiYgIWNoaWxkLnByb3BzW3Nob3dQcm9wXTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVDaGlsZHJlbihjMSwgYzIsIHNob3dQcm9wKSB7XG4gIHZhciBzYW1lID0gYzEubGVuZ3RoID09PSBjMi5sZW5ndGg7XG4gIGlmIChzYW1lKSB7XG4gICAgYzEuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICB2YXIgY2hpbGQyID0gYzJbaW5kZXhdO1xuICAgICAgaWYgKGNoaWxkICYmIGNoaWxkMikge1xuICAgICAgICBpZiAoY2hpbGQgJiYgIWNoaWxkMiB8fCAhY2hpbGQgJiYgY2hpbGQyKSB7XG4gICAgICAgICAgc2FtZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmtleSAhPT0gY2hpbGQyLmtleSkge1xuICAgICAgICAgIHNhbWUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzaG93UHJvcCAmJiBjaGlsZC5wcm9wc1tzaG93UHJvcF0gIT09IGNoaWxkMi5wcm9wc1tzaG93UHJvcF0pIHtcbiAgICAgICAgICBzYW1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2FtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2hpbGRyZW4ocHJldiwgbmV4dCkge1xuICB2YXIgcmV0ID0gW107XG5cbiAgLy8gRm9yIGVhY2gga2V5IG9mIGBuZXh0YCwgdGhlIGxpc3Qgb2Yga2V5cyB0byBpbnNlcnQgYmVmb3JlIHRoYXQga2V5IGluXG4gIC8vIHRoZSBjb21iaW5lZCBsaXN0XG4gIHZhciBuZXh0Q2hpbGRyZW5QZW5kaW5nID0ge307XG4gIHZhciBwZW5kaW5nQ2hpbGRyZW4gPSBbXTtcbiAgcHJldi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCAmJiBmaW5kQ2hpbGRJbkNoaWxkcmVuQnlLZXkobmV4dCwgY2hpbGQua2V5KSkge1xuICAgICAgaWYgKHBlbmRpbmdDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgbmV4dENoaWxkcmVuUGVuZGluZ1tjaGlsZC5rZXldID0gcGVuZGluZ0NoaWxkcmVuO1xuICAgICAgICBwZW5kaW5nQ2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGVuZGluZ0NoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgbmV4dC5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChjaGlsZCAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobmV4dENoaWxkcmVuUGVuZGluZywgY2hpbGQua2V5KSkge1xuICAgICAgcmV0ID0gcmV0LmNvbmNhdChuZXh0Q2hpbGRyZW5QZW5kaW5nW2NoaWxkLmtleV0pO1xuICAgIH1cbiAgICByZXQucHVzaChjaGlsZCk7XG4gIH0pO1xuXG4gIHJldCA9IHJldC5jb25jYXQocGVuZGluZ0NoaWxkcmVuKTtcblxuICByZXR1cm4gcmV0O1xufSIsInZhciB1dGlsID0ge1xuICBpc0FwcGVhclN1cHBvcnRlZDogZnVuY3Rpb24gaXNBcHBlYXJTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkFwcGVhciB8fCBwcm9wcy5hbmltYXRpb24uYXBwZWFyO1xuICB9LFxuICBpc0VudGVyU3VwcG9ydGVkOiBmdW5jdGlvbiBpc0VudGVyU3VwcG9ydGVkKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25OYW1lICYmIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGlzTGVhdmVTdXBwb3J0ZWQ6IGZ1bmN0aW9uIGlzTGVhdmVTdXBwb3J0ZWQocHJvcHMpIHtcbiAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvbk5hbWUgJiYgcHJvcHMudHJhbnNpdGlvbkxlYXZlIHx8IHByb3BzLmFuaW1hdGlvbi5sZWF2ZTtcbiAgfSxcbiAgYWxsb3dBcHBlYXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dBcHBlYXJDYWxsYmFjayhwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uQXBwZWFyIHx8IHByb3BzLmFuaW1hdGlvbi5hcHBlYXI7XG4gIH0sXG4gIGFsbG93RW50ZXJDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dFbnRlckNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25FbnRlciB8fCBwcm9wcy5hbmltYXRpb24uZW50ZXI7XG4gIH0sXG4gIGFsbG93TGVhdmVDYWxsYmFjazogZnVuY3Rpb24gYWxsb3dMZWF2ZUNhbGxiYWNrKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnRyYW5zaXRpb25MZWF2ZSB8fCBwcm9wcy5hbmltYXRpb24ubGVhdmU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCB1dGlsOyIsImZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBLZXlDb2RlIGZyb20gXCJyYy11dGlsL2VzL0tleUNvZGVcIjtcbmltcG9ydCB7IGdldE9mZnNldExlZnQgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFN0YXIgZnJvbSAnLi9TdGFyJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBSYXRlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhSYXRlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSYXRlKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhdGUpO1xuXG4gICAgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfZ2V0UHJvdG90eXBlT2YoUmF0ZSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uSG92ZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICAgICAgdmFyIG9uSG92ZXJDaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkhvdmVyQ2hhbmdlO1xuXG4gICAgICB2YXIgaG92ZXJWYWx1ZSA9IF90aGlzLmdldFN0YXJWYWx1ZShpbmRleCwgZXZlbnQucGFnZVgpO1xuXG4gICAgICB2YXIgY2xlYW5lZFZhbHVlID0gX3RoaXMuc3RhdGUuY2xlYW5lZFZhbHVlO1xuXG4gICAgICBpZiAoaG92ZXJWYWx1ZSAhPT0gY2xlYW5lZFZhbHVlKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBob3ZlclZhbHVlOiBob3ZlclZhbHVlLFxuICAgICAgICAgIGNsZWFuZWRWYWx1ZTogbnVsbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgb25Ib3ZlckNoYW5nZShob3ZlclZhbHVlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbk1vdXNlTGVhdmVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9uSG92ZXJDaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkhvdmVyQ2hhbmdlO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhvdmVyVmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgY2xlYW5lZFZhbHVlOiBudWxsXG4gICAgICB9KTtcblxuICAgICAgb25Ib3ZlckNoYW5nZSh1bmRlZmluZWQpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uQ2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50LCBpbmRleCkge1xuICAgICAgdmFyIGFsbG93Q2xlYXIgPSBfdGhpcy5wcm9wcy5hbGxvd0NsZWFyO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG5cbiAgICAgIHZhciBuZXdWYWx1ZSA9IF90aGlzLmdldFN0YXJWYWx1ZShpbmRleCwgZXZlbnQucGFnZVgpO1xuXG4gICAgICB2YXIgaXNSZXNldCA9IGZhbHNlO1xuXG4gICAgICBpZiAoYWxsb3dDbGVhcikge1xuICAgICAgICBpc1Jlc2V0ID0gbmV3VmFsdWUgPT09IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5vbk1vdXNlTGVhdmUodHJ1ZSk7XG5cbiAgICAgIF90aGlzLmNoYW5nZVZhbHVlKGlzUmVzZXQgPyAwIDogbmV3VmFsdWUpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsZWFuZWRWYWx1ZTogaXNSZXNldCA/IG5ld1ZhbHVlIDogbnVsbFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25Gb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb25Gb2N1cyA9IF90aGlzLnByb3BzLm9uRm9jdXM7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvbkZvY3VzKSB7XG4gICAgICAgIG9uRm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbkJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9uQmx1ciA9IF90aGlzLnByb3BzLm9uQmx1cjtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmb2N1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25LZXlEb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY291bnQgPSBfdGhpcyRwcm9wcy5jb3VudCxcbiAgICAgICAgICBhbGxvd0hhbGYgPSBfdGhpcyRwcm9wcy5hbGxvd0hhbGYsXG4gICAgICAgICAgb25LZXlEb3duID0gX3RoaXMkcHJvcHMub25LZXlEb3duO1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMuc3RhdGUudmFsdWU7XG5cbiAgICAgIGlmIChrZXlDb2RlID09PSBLZXlDb2RlLlJJR0hUICYmIHZhbHVlIDwgY291bnQpIHtcbiAgICAgICAgaWYgKGFsbG93SGFsZikge1xuICAgICAgICAgIHZhbHVlICs9IDAuNTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuTEVGVCAmJiB2YWx1ZSA+IDApIHtcbiAgICAgICAgaWYgKGFsbG93SGFsZikge1xuICAgICAgICAgIHZhbHVlIC09IDAuNTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSAtPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvbktleURvd24pIHtcbiAgICAgICAgb25LZXlEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJzYXZlUmVmXCIsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIF90aGlzLnN0YXJzW2luZGV4XSA9IG5vZGU7XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcInNhdmVSYXRlXCIsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5yYXRlID0gbm9kZTtcbiAgICB9KTtcblxuICAgIHZhciBfdmFsdWUgPSBwcm9wcy52YWx1ZTtcblxuICAgIGlmIChfdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgX3ZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIF90aGlzLnN0YXJzID0ge307XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogX3ZhbHVlLFxuICAgICAgZm9jdXNlZDogZmFsc2UsXG4gICAgICBjbGVhbmVkVmFsdWU6IG51bGxcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhSYXRlLCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9Gb2N1cyA9IF90aGlzJHByb3BzMi5hdXRvRm9jdXMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczIuZGlzYWJsZWQ7XG5cbiAgICAgIGlmIChhdXRvRm9jdXMgJiYgIWRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0U3RhckRPTVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGFyRE9NKGluZGV4KSB7XG4gICAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5zdGFyc1tpbmRleF0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGFyVmFsdWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhclZhbHVlKGluZGV4LCB4KSB7XG4gICAgICB2YXIgYWxsb3dIYWxmID0gdGhpcy5wcm9wcy5hbGxvd0hhbGY7XG4gICAgICB2YXIgdmFsdWUgPSBpbmRleCArIDE7XG5cbiAgICAgIGlmIChhbGxvd0hhbGYpIHtcbiAgICAgICAgdmFyIHN0YXJFbGUgPSB0aGlzLmdldFN0YXJET00oaW5kZXgpO1xuICAgICAgICB2YXIgbGVmdERpcyA9IGdldE9mZnNldExlZnQoc3RhckVsZSk7XG4gICAgICAgIHZhciB3aWR0aCA9IHN0YXJFbGUuY2xpZW50V2lkdGg7XG5cbiAgICAgICAgaWYgKHggLSBsZWZ0RGlzIDwgd2lkdGggLyAyKSB7XG4gICAgICAgICAgdmFsdWUgLT0gMC41O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmF0ZS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJibHVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuXG4gICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmF0ZS5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjaGFuZ2VWYWx1ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgdmFyIG9uQ2hhbmdlID0gdGhpcy5wcm9wcy5vbkNoYW5nZTtcblxuICAgICAgaWYgKCEoJ3ZhbHVlJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvdW50ID0gX3RoaXMkcHJvcHMzLmNvdW50LFxuICAgICAgICAgIGFsbG93SGFsZiA9IF90aGlzJHByb3BzMy5hbGxvd0hhbGYsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczMuc3R5bGUsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMzLnByZWZpeENscyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNoYXJhY3RlciA9IF90aGlzJHByb3BzMy5jaGFyYWN0ZXIsXG4gICAgICAgICAgY2hhcmFjdGVyUmVuZGVyID0gX3RoaXMkcHJvcHMzLmNoYXJhY3RlclJlbmRlcixcbiAgICAgICAgICB0YWJJbmRleCA9IF90aGlzJHByb3BzMy50YWJJbmRleDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRzdGF0ZS52YWx1ZSxcbiAgICAgICAgICBob3ZlclZhbHVlID0gX3RoaXMkc3RhdGUuaG92ZXJWYWx1ZSxcbiAgICAgICAgICBmb2N1c2VkID0gX3RoaXMkc3RhdGUuZm9jdXNlZDtcbiAgICAgIHZhciBzdGFycyA9IFtdO1xuICAgICAgdmFyIGRpc2FibGVkQ2xhc3MgPSBkaXNhYmxlZCA/IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWRcIikgOiAnJztcblxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgIHN0YXJzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChTdGFyLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLnNhdmVSZWYoaW5kZXgpLFxuICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICBjb3VudDogY291bnQsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIHByZWZpeENsczogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1zdGFyXCIpLFxuICAgICAgICAgIGFsbG93SGFsZjogYWxsb3dIYWxmLFxuICAgICAgICAgIHZhbHVlOiBob3ZlclZhbHVlID09PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGhvdmVyVmFsdWUsXG4gICAgICAgICAgb25DbGljazogdGhpcy5vbkNsaWNrLFxuICAgICAgICAgIG9uSG92ZXI6IHRoaXMub25Ib3ZlcixcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIGNoYXJhY3RlcjogY2hhcmFjdGVyLFxuICAgICAgICAgIGNoYXJhY3RlclJlbmRlcjogY2hhcmFjdGVyUmVuZGVyLFxuICAgICAgICAgIGZvY3VzZWQ6IGZvY3VzZWRcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKHByZWZpeENscywgZGlzYWJsZWRDbGFzcywgY2xhc3NOYW1lKSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IGRpc2FibGVkID8gbnVsbCA6IHRoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgICB0YWJJbmRleDogZGlzYWJsZWQgPyAtMSA6IHRhYkluZGV4LFxuICAgICAgICBvbkZvY3VzOiBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uRm9jdXMsXG4gICAgICAgIG9uQmx1cjogZGlzYWJsZWQgPyBudWxsIDogdGhpcy5vbkJsdXIsXG4gICAgICAgIG9uS2V5RG93bjogZGlzYWJsZWQgPyBudWxsIDogdGhpcy5vbktleURvd24sXG4gICAgICAgIHJlZjogdGhpcy5zYXZlUmF0ZSxcbiAgICAgICAgcm9sZTogXCJyYWRpb2dyb3VwXCJcbiAgICAgIH0sIHN0YXJzKTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogXCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgc3RhdGUpIHtcbiAgICAgIGlmICgndmFsdWUnIGluIG5leHRQcm9wcyAmJiBuZXh0UHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZCh7fSwgc3RhdGUsIHtcbiAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJhdGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShSYXRlLCBcInByb3BUeXBlc1wiLCB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGFsbG93SGFsZjogUHJvcFR5cGVzLmJvb2wsXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSG92ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoYXJhY3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGNoYXJhY3RlclJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbFxufSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShSYXRlLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGRlZmF1bHRWYWx1ZTogMCxcbiAgY291bnQ6IDUsXG4gIGFsbG93SGFsZjogZmFsc2UsXG4gIGFsbG93Q2xlYXI6IHRydWUsXG4gIHN0eWxlOiB7fSxcbiAgcHJlZml4Q2xzOiAncmMtcmF0ZScsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBjaGFyYWN0ZXI6ICfimIUnLFxuICBvbkhvdmVyQ2hhbmdlOiBub29wLFxuICB0YWJJbmRleDogMFxufSk7XG5cbnBvbHlmaWxsKFJhdGUpO1xuZXhwb3J0IGRlZmF1bHQgUmF0ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7IH1cblxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgU3RhciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3RhciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3RhcigpIHtcbiAgICB2YXIgX2dldFByb3RvdHlwZU9mMjtcblxuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfZ2V0UHJvdG90eXBlT2YyID0gX2dldFByb3RvdHlwZU9mKFN0YXIpKS5jYWxsLmFwcGx5KF9nZXRQcm90b3R5cGVPZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJvbkhvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkhvdmVyID0gX3RoaXMkcHJvcHMub25Ib3ZlcixcbiAgICAgICAgICBpbmRleCA9IF90aGlzJHByb3BzLmluZGV4O1xuICAgICAgb25Ib3ZlcihlLCBpbmRleCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwib25DbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wczIub25DbGljayxcbiAgICAgICAgICBpbmRleCA9IF90aGlzJHByb3BzMi5pbmRleDtcbiAgICAgIG9uQ2xpY2soZSwgaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcIm9uS2V5RG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2xpY2sgPSBfdGhpcyRwcm9wczMub25DbGljayxcbiAgICAgICAgICBpbmRleCA9IF90aGlzJHByb3BzMy5pbmRleDtcblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgb25DbGljayhlLCBpbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3RhciwgW3tcbiAgICBrZXk6IFwiZ2V0Q2xhc3NOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsYXNzTmFtZSgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNC5wcmVmaXhDbHMsXG4gICAgICAgICAgaW5kZXggPSBfdGhpcyRwcm9wczQuaW5kZXgsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRwcm9wczQudmFsdWUsXG4gICAgICAgICAgYWxsb3dIYWxmID0gX3RoaXMkcHJvcHM0LmFsbG93SGFsZixcbiAgICAgICAgICBmb2N1c2VkID0gX3RoaXMkcHJvcHM0LmZvY3VzZWQ7XG4gICAgICB2YXIgc3RhclZhbHVlID0gaW5kZXggKyAxO1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHByZWZpeENscztcblxuICAgICAgaWYgKHZhbHVlID09PSAwICYmIGluZGV4ID09PSAwICYmIGZvY3VzZWQpIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IFwiIFwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvY3VzZWRcIik7XG4gICAgICB9IGVsc2UgaWYgKGFsbG93SGFsZiAmJiB2YWx1ZSArIDAuNSA9PT0gc3RhclZhbHVlKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1oYWxmIFwiKS5jb25jYXQocHJlZml4Q2xzLCBcIi1hY3RpdmVcIik7XG5cbiAgICAgICAgaWYgKGZvY3VzZWQpIHtcbiAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgXCIuY29uY2F0KHByZWZpeENscywgXCItZm9jdXNlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3NOYW1lICs9IHN0YXJWYWx1ZSA8PSB2YWx1ZSA/IFwiIFwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZ1bGxcIikgOiBcIiBcIi5jb25jYXQocHJlZml4Q2xzLCBcIi16ZXJvXCIpO1xuXG4gICAgICAgIGlmIChzdGFyVmFsdWUgPT09IHZhbHVlICYmIGZvY3VzZWQpIHtcbiAgICAgICAgICBjbGFzc05hbWUgKz0gXCIgXCIuY29uY2F0KHByZWZpeENscywgXCItZm9jdXNlZFwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NOYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIG9uSG92ZXIgPSB0aGlzLm9uSG92ZXIsXG4gICAgICAgICAgb25DbGljayA9IHRoaXMub25DbGljayxcbiAgICAgICAgICBvbktleURvd24gPSB0aGlzLm9uS2V5RG93bjtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHM1LmRpc2FibGVkLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzNS5wcmVmaXhDbHMsXG4gICAgICAgICAgY2hhcmFjdGVyID0gX3RoaXMkcHJvcHM1LmNoYXJhY3RlcixcbiAgICAgICAgICBjaGFyYWN0ZXJSZW5kZXIgPSBfdGhpcyRwcm9wczUuY2hhcmFjdGVyUmVuZGVyLFxuICAgICAgICAgIGluZGV4ID0gX3RoaXMkcHJvcHM1LmluZGV4LFxuICAgICAgICAgIGNvdW50ID0gX3RoaXMkcHJvcHM1LmNvdW50LFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkcHJvcHM1LnZhbHVlO1xuICAgICAgdmFyIHN0YXJ0ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmdldENsYXNzTmFtZSgpXG4gICAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgb25DbGljazogZGlzYWJsZWQgPyBudWxsIDogb25DbGljayxcbiAgICAgICAgb25LZXlEb3duOiBkaXNhYmxlZCA/IG51bGwgOiBvbktleURvd24sXG4gICAgICAgIG9uTW91c2VNb3ZlOiBkaXNhYmxlZCA/IG51bGwgOiBvbkhvdmVyLFxuICAgICAgICByb2xlOiBcInJhZGlvXCIsXG4gICAgICAgIFwiYXJpYS1jaGVja2VkXCI6IHZhbHVlID4gaW5kZXggPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICBcImFyaWEtcG9zaW5zZXRcIjogaW5kZXggKyAxLFxuICAgICAgICBcImFyaWEtc2V0c2l6ZVwiOiBjb3VudCxcbiAgICAgICAgdGFiSW5kZXg6IDBcbiAgICAgIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZmlyc3RcIilcbiAgICAgIH0sIGNoYXJhY3RlciksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2Vjb25kXCIpXG4gICAgICB9LCBjaGFyYWN0ZXIpKSk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXJSZW5kZXIpIHtcbiAgICAgICAgc3RhcnQgPSBjaGFyYWN0ZXJSZW5kZXIoc3RhcnQsIHRoaXMucHJvcHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhcnQ7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0YXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShTdGFyLCBcInByb3BUeXBlc1wiLCB7XG4gIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGxvd0hhbGY6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uSG92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hhcmFjdGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgY2hhcmFjdGVyUmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyXG59KTtcblxuZXhwb3J0IHsgU3RhciBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IFJhdGUgZnJvbSAnLi9SYXRlJztcbmV4cG9ydCBkZWZhdWx0IFJhdGU7IiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICB2YXIgcmV0ID0gdG9wID8gdy5wYWdlWU9mZnNldCA6IHcucGFnZVhPZmZzZXQ7XG4gIHZhciBtZXRob2QgPSB0b3AgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcblxuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICB2YXIgZCA9IHcuZG9jdW1lbnQ7IC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuXG4gICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcblxuICAgIGlmICh0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgLy8gcXVpcmtzIG1vZGVcbiAgICAgIHJldCA9IGQuYm9keVttZXRob2RdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFBvc2l0aW9uKGVsZW0pIHtcbiAgdmFyIHg7XG4gIHZhciB5O1xuICB2YXIgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICB2YXIgYm9keSA9IGRvYy5ib2R5O1xuICB2YXIgZG9jRWxlbSA9IGRvYyAmJiBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgeCA9IGJveC5sZWZ0O1xuICB5ID0gYm94LnRvcDtcbiAgeCAtPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gIHkgLT0gZG9jRWxlbS5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4LFxuICAgIHRvcDogeVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0TGVmdChlbCkge1xuICB2YXIgcG9zID0gZ2V0Q2xpZW50UG9zaXRpb24oZWwpO1xuICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgcG9zLmxlZnQgKz0gZ2V0U2Nyb2xsKHcpO1xuICByZXR1cm4gcG9zLmxlZnQ7XG59IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgQ29udGVudCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb250ZW50LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250ZW50KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb250ZW50KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgQ29udGVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHZhciB0cmlnZ2VyID0gdGhpcy5wcm9wcy50cmlnZ2VyO1xuXG4gICAgaWYgKHRyaWdnZXIpIHtcbiAgICAgIHRyaWdnZXIuZm9yY2VQb3B1cEFsaWduKCk7XG4gICAgfVxuICB9O1xuXG4gIENvbnRlbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb3ZlcmxheSA9IF9wcm9wcy5vdmVybGF5LFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBpZCA9IF9wcm9wcy5pZDtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pbm5lcicsIGlkOiBpZCwgcm9sZTogJ3Rvb2x0aXAnIH0sXG4gICAgICB0eXBlb2Ygb3ZlcmxheSA9PT0gJ2Z1bmN0aW9uJyA/IG92ZXJsYXkoKSA6IG92ZXJsYXlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBDb250ZW50O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Db250ZW50LnByb3BUeXBlcyA9IHtcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvdmVybGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJpZ2dlcjogUHJvcFR5cGVzLmFueVxufTtcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0IHsgcGxhY2VtZW50cyB9IGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xuXG52YXIgVG9vbHRpcCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhUb29sdGlwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUb29sdGlwKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9vbHRpcCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuZ2V0UG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYXJyb3dDb250ZW50ID0gX3RoaXMkcHJvcHMuYXJyb3dDb250ZW50LFxuICAgICAgICAgIG92ZXJsYXkgPSBfdGhpcyRwcm9wcy5vdmVybGF5LFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBpZCA9IF90aGlzJHByb3BzLmlkO1xuXG4gICAgICByZXR1cm4gW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1hcnJvdycsIGtleTogJ2Fycm93JyB9LFxuICAgICAgICBhcnJvd0NvbnRlbnRcbiAgICAgICksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGVudCwge1xuICAgICAgICBrZXk6ICdjb250ZW50JyxcbiAgICAgICAgdHJpZ2dlcjogX3RoaXMudHJpZ2dlcixcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgb3ZlcmxheTogb3ZlcmxheVxuICAgICAgfSldO1xuICAgIH0sIF90aGlzLnNhdmVUcmlnZ2VyID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLnRyaWdnZXIgPSBub2RlO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUuZ2V0UG9wdXBEb21Ob2RlID0gZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXIuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gIH07XG5cbiAgVG9vbHRpcC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvdmVybGF5Q2xhc3NOYW1lID0gX3Byb3BzLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICAgIHRyaWdnZXIgPSBfcHJvcHMudHJpZ2dlcixcbiAgICAgICAgbW91c2VFbnRlckRlbGF5ID0gX3Byb3BzLm1vdXNlRW50ZXJEZWxheSxcbiAgICAgICAgbW91c2VMZWF2ZURlbGF5ID0gX3Byb3BzLm1vdXNlTGVhdmVEZWxheSxcbiAgICAgICAgb3ZlcmxheVN0eWxlID0gX3Byb3BzLm92ZXJsYXlTdHlsZSxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIG9uVmlzaWJsZUNoYW5nZSA9IF9wcm9wcy5vblZpc2libGVDaGFuZ2UsXG4gICAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZSA9IF9wcm9wcy5hZnRlclZpc2libGVDaGFuZ2UsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lID0gX3Byb3BzLnRyYW5zaXRpb25OYW1lLFxuICAgICAgICBhbmltYXRpb24gPSBfcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICBwbGFjZW1lbnQgPSBfcHJvcHMucGxhY2VtZW50LFxuICAgICAgICBhbGlnbiA9IF9wcm9wcy5hbGlnbixcbiAgICAgICAgZGVzdHJveVRvb2x0aXBPbkhpZGUgPSBfcHJvcHMuZGVzdHJveVRvb2x0aXBPbkhpZGUsXG4gICAgICAgIGRlZmF1bHRWaXNpYmxlID0gX3Byb3BzLmRlZmF1bHRWaXNpYmxlLFxuICAgICAgICBnZXRUb29sdGlwQ29udGFpbmVyID0gX3Byb3BzLmdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnb3ZlcmxheUNsYXNzTmFtZScsICd0cmlnZ2VyJywgJ21vdXNlRW50ZXJEZWxheScsICdtb3VzZUxlYXZlRGVsYXknLCAnb3ZlcmxheVN0eWxlJywgJ3ByZWZpeENscycsICdjaGlsZHJlbicsICdvblZpc2libGVDaGFuZ2UnLCAnYWZ0ZXJWaXNpYmxlQ2hhbmdlJywgJ3RyYW5zaXRpb25OYW1lJywgJ2FuaW1hdGlvbicsICdwbGFjZW1lbnQnLCAnYWxpZ24nLCAnZGVzdHJveVRvb2x0aXBPbkhpZGUnLCAnZGVmYXVsdFZpc2libGUnLCAnZ2V0VG9vbHRpcENvbnRhaW5lciddKTtcblxuICAgIHZhciBleHRyYVByb3BzID0gX2V4dGVuZHMoe30sIHJlc3RQcm9wcyk7XG4gICAgaWYgKCd2aXNpYmxlJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICBleHRyYVByb3BzLnBvcHVwVmlzaWJsZSA9IHRoaXMucHJvcHMudmlzaWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUcmlnZ2VyLFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICBwb3B1cENsYXNzTmFtZTogb3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVUcmlnZ2VyLFxuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgcG9wdXA6IHRoaXMuZ2V0UG9wdXBFbGVtZW50LFxuICAgICAgICBhY3Rpb246IHRyaWdnZXIsXG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzLFxuICAgICAgICBwb3B1cFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBwb3B1cEFsaWduOiBhbGlnbixcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBvblZpc2libGVDaGFuZ2UsXG4gICAgICAgIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBhZnRlclZpc2libGVDaGFuZ2UsXG4gICAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgICAgICBwb3B1cEFuaW1hdGlvbjogYW5pbWF0aW9uLFxuICAgICAgICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBkZWZhdWx0VmlzaWJsZSxcbiAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlOiBkZXN0cm95VG9vbHRpcE9uSGlkZSxcbiAgICAgICAgbW91c2VMZWF2ZURlbGF5OiBtb3VzZUxlYXZlRGVsYXksXG4gICAgICAgIHBvcHVwU3R5bGU6IG92ZXJsYXlTdHlsZSxcbiAgICAgICAgbW91c2VFbnRlckRlbGF5OiBtb3VzZUVudGVyRGVsYXlcbiAgICAgIH0sIGV4dHJhUHJvcHMpLFxuICAgICAgY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBUb29sdGlwO1xufShDb21wb25lbnQpO1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgdHJpZ2dlcjogUHJvcFR5cGVzLmFueSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGRlZmF1bHRWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBvblZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBhZnRlclZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvdmVybGF5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICBvdmVybGF5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIG92ZXJsYXlDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGdldFRvb2x0aXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICBkZXN0cm95VG9vbHRpcE9uSGlkZTogUHJvcFR5cGVzLmJvb2wsXG4gIGFsaWduOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhcnJvd0NvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ3JjLXRvb2x0aXAnLFxuICBtb3VzZUVudGVyRGVsYXk6IDAsXG4gIGRlc3Ryb3lUb29sdGlwT25IaWRlOiBmYWxzZSxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIGFsaWduOiB7fSxcbiAgcGxhY2VtZW50OiAncmlnaHQnLFxuICB0cmlnZ2VyOiBbJ2hvdmVyJ10sXG4gIGFycm93Q29udGVudDogbnVsbFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwOyIsImltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7IiwidmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcblxudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0ge1xuICBsZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcDoge1xuICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRUb3A6IHtcbiAgICBwb2ludHM6IFsndHInLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvaW50czogWyd0cicsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYmwnLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYnInLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGFjZW1lbnRzOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG5cbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5cbnZhciBwbGFjZW1lbnRzID0gZXhwb3J0cy5wbGFjZW1lbnRzID0ge1xuICBsZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcDoge1xuICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRUb3A6IHtcbiAgICBwb2ludHM6IFsndHInLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvaW50czogWyd0cicsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYmwnLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYnInLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBwbGFjZW1lbnRzOyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIExhenlSZW5kZXJCb3ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGF6eVJlbmRlckJveCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGF6eVJlbmRlckJveCgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eVJlbmRlckJveCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIExhenlSZW5kZXJCb3gucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICByZXR1cm4gbmV4dFByb3BzLmhpZGRlbkNsYXNzTmFtZSB8fCBuZXh0UHJvcHMudmlzaWJsZTtcbiAgfTtcblxuICBMYXp5UmVuZGVyQm94LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGhpZGRlbkNsYXNzTmFtZSA9IF9wcm9wcy5oaWRkZW5DbGFzc05hbWUsXG4gICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2hpZGRlbkNsYXNzTmFtZScsICd2aXNpYmxlJ10pO1xuXG4gICAgaWYgKGhpZGRlbkNsYXNzTmFtZSB8fCBSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbikgPiAxKSB7XG4gICAgICBpZiAoIXZpc2libGUgJiYgaGlkZGVuQ2xhc3NOYW1lKSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSArPSAnICcgKyBoaWRkZW5DbGFzc05hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2JywgcHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHByb3BzLmNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gTGF6eVJlbmRlckJveDtcbn0oQ29tcG9uZW50KTtcblxuTGF6eVJlbmRlckJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW5DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTGF6eVJlbmRlckJveDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQWxpZ24gZnJvbSAncmMtYWxpZ24nO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgUG9wdXBJbm5lciBmcm9tICcuL1BvcHVwSW5uZXInO1xuaW1wb3J0IExhenlSZW5kZXJCb3ggZnJvbSAnLi9MYXp5UmVuZGVyQm94JztcbmltcG9ydCB7IHNhdmVSZWYgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIFBvcHVwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3B1cChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3B1cCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIFVzZWQgZm9yIHN0cmV0Y2hcbiAgICAgIHN0cmV0Y2hDaGVja2VkOiBmYWxzZSxcbiAgICAgIHRhcmdldFdpZHRoOiB1bmRlZmluZWQsXG4gICAgICB0YXJnZXRIZWlnaHQ6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlUG9wdXBSZWYgPSBzYXZlUmVmLmJpbmQoX3RoaXMsICdwb3B1cEluc3RhbmNlJyk7XG4gICAgX3RoaXMuc2F2ZUFsaWduUmVmID0gc2F2ZVJlZi5iaW5kKF90aGlzLCAnYWxpZ25JbnN0YW5jZScpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBvcHVwLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucm9vdE5vZGUgPSB0aGlzLmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIHRoaXMuc2V0U3RyZXRjaFNpemUoKTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuc2V0U3RyZXRjaFNpemUoKTtcbiAgfTtcblxuICAvLyBSZWNvcmQgc2l6ZSBpZiBzdHJldGNoIG5lZWRlZFxuXG5cbiAgUG9wdXAucHJvdG90eXBlLmdldFBvcHVwRG9tTm9kZSA9IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5wb3B1cEluc3RhbmNlKTtcbiAgfTtcblxuICAvLyBgdGFyZ2V0YCBvbiBgcmMtYWxpZ25gIGNhbiBhY2NlcHQgYXMgYSBmdW5jdGlvbiB0byBnZXQgdGhlIGJpbmQgZWxlbWVudCBvciBhIHBvaW50LlxuICAvLyByZWY6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JjLWFsaWduXG5cblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0TWFza1RyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gZ2V0TWFza1RyYW5zaXRpb25OYW1lKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMubWFza1RyYW5zaXRpb25OYW1lO1xuICAgIHZhciBhbmltYXRpb24gPSBwcm9wcy5tYXNrQW5pbWF0aW9uO1xuICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgYW5pbWF0aW9uKSB7XG4gICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIGFuaW1hdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRUcmFuc2l0aW9uTmFtZSA9IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgcHJvcHMuYW5pbWF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gIH07XG5cbiAgUG9wdXAucHJvdG90eXBlLmdldENsYXNzTmFtZSA9IGZ1bmN0aW9uIGdldENsYXNzTmFtZShjdXJyZW50QWxpZ25DbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wcmVmaXhDbHMgKyAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArICcgJyArIGN1cnJlbnRBbGlnbkNsYXNzTmFtZTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0UG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0UG9wdXBFbGVtZW50KCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHNhdmVQb3B1cFJlZiA9IHRoaXMuc2F2ZVBvcHVwUmVmO1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICBzdHJldGNoQ2hlY2tlZCA9IF9zdGF0ZS5zdHJldGNoQ2hlY2tlZCxcbiAgICAgICAgdGFyZ2V0SGVpZ2h0ID0gX3N0YXRlLnRhcmdldEhlaWdodCxcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBfc3RhdGUudGFyZ2V0V2lkdGg7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFsaWduID0gX3Byb3BzLmFsaWduLFxuICAgICAgICB2aXNpYmxlID0gX3Byb3BzLnZpc2libGUsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ24gPSBfcHJvcHMuZ2V0Q2xhc3NOYW1lRnJvbUFsaWduLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGUgPSBfcHJvcHMuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICBzdHJldGNoID0gX3Byb3BzLnN0cmV0Y2gsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBvbk1vdXNlRW50ZXIgPSBfcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlRG93biA9IF9wcm9wcy5vbk1vdXNlRG93bixcbiAgICAgICAgb25Ub3VjaFN0YXJ0ID0gX3Byb3BzLm9uVG91Y2hTdGFydDtcblxuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLmdldENsYXNzTmFtZSh0aGlzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSB8fCBnZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pKTtcbiAgICB2YXIgaGlkZGVuQ2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy1oaWRkZW4nO1xuXG4gICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICB0aGlzLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHNpemVTdHlsZSA9IHt9O1xuICAgIGlmIChzdHJldGNoKSB7XG4gICAgICAvLyBTdHJldGNoIHdpdGggdGFyZ2V0XG4gICAgICBpZiAoc3RyZXRjaC5pbmRleE9mKCdoZWlnaHQnKSAhPT0gLTEpIHtcbiAgICAgICAgc2l6ZVN0eWxlLmhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoc3RyZXRjaC5pbmRleE9mKCdtaW5IZWlnaHQnKSAhPT0gLTEpIHtcbiAgICAgICAgc2l6ZVN0eWxlLm1pbkhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgIH1cbiAgICAgIGlmIChzdHJldGNoLmluZGV4T2YoJ3dpZHRoJykgIT09IC0xKSB7XG4gICAgICAgIHNpemVTdHlsZS53aWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgfSBlbHNlIGlmIChzdHJldGNoLmluZGV4T2YoJ21pbldpZHRoJykgIT09IC0xKSB7XG4gICAgICAgIHNpemVTdHlsZS5taW5XaWR0aCA9IHRhcmdldFdpZHRoO1xuICAgICAgfVxuXG4gICAgICAvLyBEZWxheSBmb3JjZSBhbGlnbiB0byBtYWtlcyB1aSBzbW9vdGhcbiAgICAgIGlmICghc3RyZXRjaENoZWNrZWQpIHtcbiAgICAgICAgc2l6ZVN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzMi5hbGlnbkluc3RhbmNlKSB7XG4gICAgICAgICAgICBfdGhpczIuYWxpZ25JbnN0YW5jZS5mb3JjZUFsaWduKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbmV3U3R5bGUgPSBfZXh0ZW5kcyh7fSwgc2l6ZVN0eWxlLCBzdHlsZSwgdGhpcy5nZXRaSW5kZXhTdHlsZSgpKTtcblxuICAgIHZhciBwb3B1cElubmVyUHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgcmVmOiBzYXZlUG9wdXBSZWYsXG4gICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlLFxuICAgICAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICAgICAgb25Ub3VjaFN0YXJ0OiBvblRvdWNoU3RhcnQsXG4gICAgICBzdHlsZTogbmV3U3R5bGVcbiAgICB9O1xuICAgIGlmIChkZXN0cm95UG9wdXBPbkhpZGUpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBbmltYXRlLFxuICAgICAgICB7XG4gICAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpXG4gICAgICAgIH0sXG4gICAgICAgIHZpc2libGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFsaWduLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRhcmdldDogdGhpcy5nZXRBbGlnblRhcmdldCgpLFxuICAgICAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICAgICAgcmVmOiB0aGlzLnNhdmVBbGlnblJlZixcbiAgICAgICAgICAgIG1vbml0b3JXaW5kb3dSZXNpemU6IHRydWUsXG4gICAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgICBvbkFsaWduOiB0aGlzLm9uQWxpZ25cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBQb3B1cElubmVyLFxuICAgICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICB9LCBwb3B1cElubmVyUHJvcHMpLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgICkgOiBudWxsXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQW5pbWF0ZSxcbiAgICAgIHtcbiAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpLFxuICAgICAgICBzaG93UHJvcDogJ3hWaXNpYmxlJ1xuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIEFsaWduLFxuICAgICAgICB7XG4gICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldEFsaWduVGFyZ2V0KCksXG4gICAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICAgIHJlZjogdGhpcy5zYXZlQWxpZ25SZWYsXG4gICAgICAgICAgbW9uaXRvcldpbmRvd1Jlc2l6ZTogdHJ1ZSxcbiAgICAgICAgICB4VmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgICBjaGlsZHJlblByb3BzOiB7IHZpc2libGU6ICd4VmlzaWJsZScgfSxcbiAgICAgICAgICBkaXNhYmxlZDogIXZpc2libGUsXG4gICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgIG9uQWxpZ246IHRoaXMub25BbGlnblxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIFBvcHVwSW5uZXIsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgaGlkZGVuQ2xhc3NOYW1lOiBoaWRkZW5DbGFzc05hbWVcbiAgICAgICAgICB9LCBwb3B1cElubmVyUHJvcHMpLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIFBvcHVwLnByb3RvdHlwZS5nZXRaSW5kZXhTdHlsZSA9IGZ1bmN0aW9uIGdldFpJbmRleFN0eWxlKCkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKHByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzdHlsZS56SW5kZXggPSBwcm9wcy56SW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfTtcblxuICBQb3B1cC5wcm90b3R5cGUuZ2V0TWFza0VsZW1lbnQgPSBmdW5jdGlvbiBnZXRNYXNrRWxlbWVudCgpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXNrRWxlbWVudCA9IHZvaWQgMDtcbiAgICBpZiAocHJvcHMubWFzaykge1xuICAgICAgdmFyIG1hc2tUcmFuc2l0aW9uID0gdGhpcy5nZXRNYXNrVHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCB7XG4gICAgICAgIHN0eWxlOiB0aGlzLmdldFpJbmRleFN0eWxlKCksXG4gICAgICAgIGtleTogJ21hc2snLFxuICAgICAgICBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzaycsXG4gICAgICAgIGhpZGRlbkNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrLWhpZGRlbicsXG4gICAgICAgIHZpc2libGU6IHByb3BzLnZpc2libGVcbiAgICAgIH0pO1xuICAgICAgaWYgKG1hc2tUcmFuc2l0aW9uKSB7XG4gICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ21hc2snLFxuICAgICAgICAgICAgc2hvd1Byb3A6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6ICcnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXNrRWxlbWVudFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFza0VsZW1lbnQ7XG4gIH07XG5cbiAgUG9wdXAucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgbnVsbCxcbiAgICAgIHRoaXMuZ2V0TWFza0VsZW1lbnQoKSxcbiAgICAgIHRoaXMuZ2V0UG9wdXBFbGVtZW50KClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQb3B1cDtcbn0oQ29tcG9uZW50KTtcblxuUG9wdXAucHJvcFR5cGVzID0ge1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGdldENsYXNzTmFtZUZyb21BbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQWxpZ246IFByb3BUeXBlcy5mdW5jLFxuICBnZXRSb290RG9tTm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFsaWduOiBQcm9wVHlwZXMuYW55LFxuICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHBvaW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhZ2VYOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2VZOiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gIHRoaXMub25BbGlnbiA9IGZ1bmN0aW9uIChwb3B1cERvbU5vZGUsIGFsaWduKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXMzLnByb3BzO1xuICAgIHZhciBjdXJyZW50QWxpZ25DbGFzc05hbWUgPSBwcm9wcy5nZXRDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pO1xuICAgIC8vIEZJWDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81NlxuICAgIC8vIEZJWDogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90b29sdGlwL2lzc3Vlcy83OVxuICAgIGlmIChfdGhpczMuY3VycmVudEFsaWduQ2xhc3NOYW1lICE9PSBjdXJyZW50QWxpZ25DbGFzc05hbWUpIHtcbiAgICAgIF90aGlzMy5jdXJyZW50QWxpZ25DbGFzc05hbWUgPSBjdXJyZW50QWxpZ25DbGFzc05hbWU7XG4gICAgICBwb3B1cERvbU5vZGUuY2xhc3NOYW1lID0gX3RoaXMzLmdldENsYXNzTmFtZShjdXJyZW50QWxpZ25DbGFzc05hbWUpO1xuICAgIH1cbiAgICBwcm9wcy5vbkFsaWduKHBvcHVwRG9tTm9kZSwgYWxpZ24pO1xuICB9O1xuXG4gIHRoaXMuc2V0U3RyZXRjaFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9wcm9wczIgPSBfdGhpczMucHJvcHMsXG4gICAgICAgIHN0cmV0Y2ggPSBfcHJvcHMyLnN0cmV0Y2gsXG4gICAgICAgIGdldFJvb3REb21Ob2RlID0gX3Byb3BzMi5nZXRSb290RG9tTm9kZSxcbiAgICAgICAgdmlzaWJsZSA9IF9wcm9wczIudmlzaWJsZTtcbiAgICB2YXIgX3N0YXRlMiA9IF90aGlzMy5zdGF0ZSxcbiAgICAgICAgc3RyZXRjaENoZWNrZWQgPSBfc3RhdGUyLnN0cmV0Y2hDaGVja2VkLFxuICAgICAgICB0YXJnZXRIZWlnaHQgPSBfc3RhdGUyLnRhcmdldEhlaWdodCxcbiAgICAgICAgdGFyZ2V0V2lkdGggPSBfc3RhdGUyLnRhcmdldFdpZHRoO1xuXG5cbiAgICBpZiAoIXN0cmV0Y2ggfHwgIXZpc2libGUpIHtcbiAgICAgIGlmIChzdHJldGNoQ2hlY2tlZCkge1xuICAgICAgICBfdGhpczMuc2V0U3RhdGUoeyBzdHJldGNoQ2hlY2tlZDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyICRlbGUgPSBnZXRSb290RG9tTm9kZSgpO1xuICAgIGlmICghJGVsZSkgcmV0dXJuO1xuXG4gICAgdmFyIGhlaWdodCA9ICRlbGUub2Zmc2V0SGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9ICRlbGUub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAodGFyZ2V0SGVpZ2h0ICE9PSBoZWlnaHQgfHwgdGFyZ2V0V2lkdGggIT09IHdpZHRoIHx8ICFzdHJldGNoQ2hlY2tlZCkge1xuICAgICAgX3RoaXMzLnNldFN0YXRlKHtcbiAgICAgICAgc3RyZXRjaENoZWNrZWQ6IHRydWUsXG4gICAgICAgIHRhcmdldEhlaWdodDogaGVpZ2h0LFxuICAgICAgICB0YXJnZXRXaWR0aDogd2lkdGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmdldFRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMy5wcm9wcy5nZXRSb290RG9tTm9kZSgpO1xuICB9O1xuXG4gIHRoaXMuZ2V0QWxpZ25UYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBvaW50ID0gX3RoaXMzLnByb3BzLnBvaW50O1xuXG4gICAgaWYgKHBvaW50KSB7XG4gICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuICAgIHJldHVybiBfdGhpczMuZ2V0VGFyZ2V0RWxlbWVudDtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBMYXp5UmVuZGVyQm94IGZyb20gJy4vTGF6eVJlbmRlckJveCc7XG5cbnZhciBQb3B1cElubmVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBvcHVwSW5uZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcHVwSW5uZXIoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcHVwSW5uZXIpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBQb3B1cElubmVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgIGlmICghcHJvcHMudmlzaWJsZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZURvd246IHByb3BzLm9uTW91c2VEb3duLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHByb3BzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlXG4gICAgICB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgTGF6eVJlbmRlckJveCxcbiAgICAgICAgeyBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctY29udGVudCcsIHZpc2libGU6IHByb3BzLnZpc2libGUgfSxcbiAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQb3B1cElubmVyO1xufShDb21wb25lbnQpO1xuXG5Qb3B1cElubmVyLnByb3BUeXBlcyA9IHtcbiAgaGlkZGVuQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuICBvblRvdWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cElubmVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSwgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjb250YWlucyBmcm9tICdyYy11dGlsL2VzL0RvbS9jb250YWlucyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICdyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyJztcbmltcG9ydCBDb250YWluZXJSZW5kZXIgZnJvbSAncmMtdXRpbC9lcy9Db250YWluZXJSZW5kZXInO1xuaW1wb3J0IFBvcnRhbCBmcm9tICdyYy11dGlsL2VzL1BvcnRhbCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHsgZ2V0QWxpZ25Gcm9tUGxhY2VtZW50LCBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiByZXR1cm5FbXB0eVN0cmluZygpIHtcbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiByZXR1cm5Eb2N1bWVudCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudDtcbn1cblxudmFyIEFMTF9IQU5ETEVSUyA9IFsnb25DbGljaycsICdvbk1vdXNlRG93bicsICdvblRvdWNoU3RhcnQnLCAnb25Nb3VzZUVudGVyJywgJ29uTW91c2VMZWF2ZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvbkNvbnRleHRNZW51J107XG5cbnZhciBJU19SRUFDVF8xNiA9ICEhY3JlYXRlUG9ydGFsO1xuXG52YXIgY29udGV4dFR5cGVzID0ge1xuICByY1RyaWdnZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb25Qb3B1cE1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgfSlcbn07XG5cbnZhciBUcmlnZ2VyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRyaWdnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyaWdnZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJpZ2dlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgcG9wdXBWaXNpYmxlID0gdm9pZCAwO1xuICAgIGlmICgncG9wdXBWaXNpYmxlJyBpbiBwcm9wcykge1xuICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5wb3B1cFZpc2libGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMuZGVmYXVsdFBvcHVwVmlzaWJsZTtcbiAgICB9XG5cbiAgICBfdGhpcy5wcmV2UG9wdXBWaXNpYmxlID0gcG9wdXBWaXNpYmxlO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBwb3B1cFZpc2libGU6IHBvcHVwVmlzaWJsZVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICByY1RyaWdnZXI6IHtcbiAgICAgICAgb25Qb3B1cE1vdXNlRG93bjogdGhpcy5vblBvcHVwTW91c2VEb3duXG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBBTExfSEFORExFUlMuZm9yRWFjaChmdW5jdGlvbiAoaCkge1xuICAgICAgX3RoaXMyWydmaXJlJyArIGhdID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgX3RoaXMyLmZpcmVFdmVudHMoaCwgZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoe30sIHtcbiAgICAgIHBvcHVwVmlzaWJsZTogdGhpcy5zdGF0ZS5wb3B1cFZpc2libGVcbiAgICB9KTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhfcmVmKSB7XG4gICAgdmFyIHBvcHVwVmlzaWJsZSA9IF9yZWYucG9wdXBWaXNpYmxlO1xuXG4gICAgaWYgKHBvcHVwVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoXywgcHJldlN0YXRlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UoKSB7XG4gICAgICBpZiAocHJldlN0YXRlLnBvcHVwVmlzaWJsZSAhPT0gc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICAgIHByb3BzLmFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlKHN0YXRlLnBvcHVwVmlzaWJsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoIUlTX1JFQUNUXzE2KSB7XG4gICAgICB0aGlzLnJlbmRlckNvbXBvbmVudChudWxsLCB0cmlnZ2VyQWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHRoaXMucHJldlBvcHVwVmlzaWJsZSA9IHByZXZTdGF0ZS5wb3B1cFZpc2libGU7XG5cbiAgICAvLyBXZSBtdXN0IGxpc3RlbiB0byBgbW91c2Vkb3duYCBvciBgdG91Y2hzdGFydGAsIGVkZ2UgY2FzZTpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81ODA0XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC9jYWxlbmRhci9pc3N1ZXMvMjUwXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90cmlnZ2VyL2lzc3Vlcy81MFxuICAgIGlmIChzdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgIHZhciBjdXJyZW50RG9jdW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoIXRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciAmJiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpKSB7XG4gICAgICAgIGN1cnJlbnREb2N1bWVudCA9IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IGFkZEV2ZW50TGlzdGVuZXIoY3VycmVudERvY3VtZW50LCAnbW91c2Vkb3duJywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgICAgLy8gYWx3YXlzIGhpZGUgb24gbW9iaWxlXG4gICAgICBpZiAoIXRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICd0b3VjaHN0YXJ0JywgdGhpcy5vbkRvY3VtZW50Q2xpY2spO1xuICAgICAgfVxuICAgICAgLy8gY2xvc2UgcG9wdXAgd2hlbiB0cmlnZ2VyIHR5cGUgY29udGFpbnMgJ29uQ29udGV4dE1lbnUnIGFuZCBkb2N1bWVudCBpcyBzY3JvbGxpbmcuXG4gICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgY3VycmVudERvY3VtZW50ID0gY3VycmVudERvY3VtZW50IHx8IHByb3BzLmdldERvY3VtZW50KCk7XG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEgPSBhZGRFdmVudExpc3RlbmVyKGN1cnJlbnREb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgIH1cbiAgICAgIC8vIGNsb3NlIHBvcHVwIHdoZW4gdHJpZ2dlciB0eXBlIGNvbnRhaW5zICdvbkNvbnRleHRNZW51JyBhbmQgd2luZG93IGlzIGJsdXIuXG4gICAgICBpZiAoIXRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgJiYgdGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMiA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAnYmx1cicsIHRoaXMub25Db250ZXh0TWVudUNsb3NlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMubW91c2VEb3duVGltZW91dCk7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuZ2V0UG9wdXBEb21Ob2RlID0gZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgIC8vIGZvciB0ZXN0XG4gICAgaWYgKHRoaXMuX2NvbXBvbmVudCAmJiB0aGlzLl9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50LmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5nZXRQb3B1cEFsaWduID0gZnVuY3Rpb24gZ2V0UG9wdXBBbGlnbigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwb3B1cFBsYWNlbWVudCA9IHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICBwb3B1cEFsaWduID0gcHJvcHMucG9wdXBBbGlnbixcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cztcblxuICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgcmV0dXJuIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcG9wdXBQbGFjZW1lbnQsIHBvcHVwQWxpZ24pO1xuICAgIH1cbiAgICByZXR1cm4gcG9wdXBBbGlnbjtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHBvcHVwVmlzaWJsZSAgICBTaG93IG9yIG5vdCB0aGUgcG9wdXAgZWxlbWVudFxuICAgKiBAcGFyYW0gZXZlbnQgICAgICAgICAgIFN5bnRoZXRpY0V2ZW50LCB1c2VkIGZvciBgcG9pbnRBbGlnbmBcbiAgICovXG4gIFRyaWdnZXIucHJvdG90eXBlLnNldFBvcHVwVmlzaWJsZSA9IGZ1bmN0aW9uIHNldFBvcHVwVmlzaWJsZShwb3B1cFZpc2libGUsIGV2ZW50KSB7XG4gICAgdmFyIGFsaWduUG9pbnQgPSB0aGlzLnByb3BzLmFsaWduUG9pbnQ7XG5cblxuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgIT09IHBvcHVwVmlzaWJsZSkge1xuICAgICAgaWYgKCEoJ3BvcHVwVmlzaWJsZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblBvcHVwVmlzaWJsZUNoYW5nZShwb3B1cFZpc2libGUpO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyByZWNvcmQgdGhlIHBvaW50IHBvc2l0aW9uIHNpbmNlIG1vdXNlRW50ZXJEZWxheSB3aWxsIGRlbGF5IHRoZSBzaG93XG4gICAgaWYgKGFsaWduUG9pbnQgJiYgZXZlbnQpIHtcbiAgICAgIHRoaXMuc2V0UG9pbnQoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5kZWxheVNldFBvcHVwVmlzaWJsZSA9IGZ1bmN0aW9uIGRlbGF5U2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGRlbGF5UywgZXZlbnQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBkZWxheSA9IGRlbGF5UyAqIDEwMDA7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIHZhciBwb2ludCA9IGV2ZW50ID8geyBwYWdlWDogZXZlbnQucGFnZVgsIHBhZ2VZOiBldmVudC5wYWdlWSB9IDogbnVsbDtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIHBvaW50KTtcbiAgICAgICAgX3RoaXMzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZSh2aXNpYmxlLCBldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNsZWFyRGVsYXlUaW1lciA9IGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lcigpIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNsZWFyT3V0c2lkZUhhbmRsZXIgPSBmdW5jdGlvbiBjbGVhck91dHNpZGVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEpIHtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjEucmVtb3ZlKCk7XG4gICAgICB0aGlzLmNvbnRleHRNZW51T3V0c2lkZUhhbmRsZXIxID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMikge1xuICAgICAgdGhpcy5jb250ZXh0TWVudU91dHNpZGVIYW5kbGVyMi5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY29udGV4dE1lbnVPdXRzaWRlSGFuZGxlcjIgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRvdWNoT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmNyZWF0ZVR3b0NoYWlucyA9IGZ1bmN0aW9uIGNyZWF0ZVR3b0NoYWlucyhldmVudCkge1xuICAgIHZhciBjaGlsZFByb3MgPSB0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGNoaWxkUHJvc1tldmVudF0gJiYgcHJvcHNbZXZlbnRdKSB7XG4gICAgICByZXR1cm4gdGhpc1snZmlyZScgKyBldmVudF07XG4gICAgfVxuICAgIHJldHVybiBjaGlsZFByb3NbZXZlbnRdIHx8IHByb3BzW2V2ZW50XTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc0NsaWNrVG9TaG93ID0gZnVuY3Rpb24gaXNDbGlja1RvU2hvdygpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzLmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wcy5zaG93QWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMSB8fCBzaG93QWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzQ29udGV4dE1lbnVUb1Nob3cgPSBmdW5jdGlvbiBpc0NvbnRleHRNZW51VG9TaG93KCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aW9uID0gX3Byb3BzMi5hY3Rpb24sXG4gICAgICAgIHNob3dBY3Rpb24gPSBfcHJvcHMyLnNob3dBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NvbnRleHRNZW51JykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY29udGV4dE1lbnUnKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuaXNDbGlja1RvSGlkZSA9IGZ1bmN0aW9uIGlzQ2xpY2tUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMzLmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczMuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc01vdXNlRW50ZXJUb1Nob3cgPSBmdW5jdGlvbiBpc01vdXNlRW50ZXJUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM0LmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczQuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdtb3VzZUVudGVyJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmlzTW91c2VMZWF2ZVRvSGlkZSA9IGZ1bmN0aW9uIGlzTW91c2VMZWF2ZVRvSGlkZSgpIHtcbiAgICB2YXIgX3Byb3BzNSA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczUuYWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uID0gX3Byb3BzNS5oaWRlQWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ21vdXNlTGVhdmUnKSAhPT0gLTE7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuaXNGb2N1c1RvU2hvdyA9IGZ1bmN0aW9uIGlzRm9jdXNUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM2LmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczYuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMTtcbiAgfTtcblxuICBUcmlnZ2VyLnByb3RvdHlwZS5pc0JsdXJUb0hpZGUgPSBmdW5jdGlvbiBpc0JsdXJUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczcgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM3LmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczcuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdibHVyJykgIT09IC0xO1xuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmZvcmNlUG9wdXBBbGlnbiA9IGZ1bmN0aW9uIGZvcmNlUG9wdXBBbGlnbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgJiYgdGhpcy5fY29tcG9uZW50ICYmIHRoaXMuX2NvbXBvbmVudC5hbGlnbkluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jb21wb25lbnQuYWxpZ25JbnN0YW5jZS5mb3JjZUFsaWduKCk7XG4gICAgfVxuICB9O1xuXG4gIFRyaWdnZXIucHJvdG90eXBlLmZpcmVFdmVudHMgPSBmdW5jdGlvbiBmaXJlRXZlbnRzKHR5cGUsIGUpIHtcbiAgICB2YXIgY2hpbGRDYWxsYmFjayA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHNbdHlwZV07XG4gICAgaWYgKGNoaWxkQ2FsbGJhY2spIHtcbiAgICAgIGNoaWxkQ2FsbGJhY2soZSk7XG4gICAgfVxuICAgIHZhciBjYWxsYmFjayA9IHRoaXMucHJvcHNbdHlwZV07XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhlKTtcbiAgICB9XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFBvcHVwVmlzaWJsZShmYWxzZSk7XG4gIH07XG5cbiAgVHJpZ2dlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHBvcHVwVmlzaWJsZSA9IHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlO1xuICAgIHZhciBfcHJvcHM4ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHM4LmNoaWxkcmVuLFxuICAgICAgICBmb3JjZVJlbmRlciA9IF9wcm9wczguZm9yY2VSZW5kZXIsXG4gICAgICAgIGFsaWduUG9pbnQgPSBfcHJvcHM4LmFsaWduUG9pbnQsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczguY2xhc3NOYW1lO1xuXG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMgPSB7IGtleTogJ3RyaWdnZXInIH07XG5cbiAgICBpZiAodGhpcy5pc0NvbnRleHRNZW51VG9TaG93KCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Db250ZXh0TWVudSA9IHRoaXMub25Db250ZXh0TWVudTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNvbnRleHRNZW51ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ29udGV4dE1lbnUnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMub25DbGljaztcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ2xpY2snKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZURvd24nKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uVG91Y2hTdGFydCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlcjtcbiAgICAgIGlmIChhbGlnblBvaW50KSB7XG4gICAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZU1vdmUgPSB0aGlzLm9uTW91c2VNb3ZlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlRW50ZXInKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNNb3VzZUxlYXZlVG9IaWRlKCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5vbk1vdXNlTGVhdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZUxlYXZlID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uTW91c2VMZWF2ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZvY3VzVG9TaG93KCkgfHwgdGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkJsdXIgPSB0aGlzLm9uQmx1cjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkZvY3VzID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uRm9jdXMnKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQmx1cicpO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2hpbGQgJiYgY2hpbGQucHJvcHMgJiYgY2hpbGQucHJvcHMuY2xhc3NOYW1lLCBjbGFzc05hbWUpO1xuICAgIGlmIChjaGlsZHJlbkNsYXNzTmFtZSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5jbGFzc05hbWUgPSBjaGlsZHJlbkNsYXNzTmFtZTtcbiAgICB9XG4gICAgdmFyIHRyaWdnZXIgPSBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0NoaWxkUHJvcHMpO1xuXG4gICAgaWYgKCFJU19SRUFDVF8xNikge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIENvbnRhaW5lclJlbmRlcixcbiAgICAgICAge1xuICAgICAgICAgIHBhcmVudDogdGhpcyxcbiAgICAgICAgICB2aXNpYmxlOiBwb3B1cFZpc2libGUsXG4gICAgICAgICAgYXV0b01vdW50OiBmYWxzZSxcbiAgICAgICAgICBmb3JjZVJlbmRlcjogZm9yY2VSZW5kZXIsXG4gICAgICAgICAgZ2V0Q29tcG9uZW50OiB0aGlzLmdldENvbXBvbmVudCxcbiAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyXG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciByZW5kZXJDb21wb25lbnQgPSBfcmVmMi5yZW5kZXJDb21wb25lbnQ7XG5cbiAgICAgICAgICBfdGhpczQucmVuZGVyQ29tcG9uZW50ID0gcmVuZGVyQ29tcG9uZW50O1xuICAgICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBwb3J0YWwgPSB2b2lkIDA7XG4gICAgLy8gcHJldmVudCB1bm1vdW50aW5nIGFmdGVyIGl0J3MgcmVuZGVyZWRcbiAgICBpZiAocG9wdXBWaXNpYmxlIHx8IHRoaXMuX2NvbXBvbmVudCB8fCBmb3JjZVJlbmRlcikge1xuICAgICAgcG9ydGFsID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgUG9ydGFsLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAncG9ydGFsJyxcbiAgICAgICAgICBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIGRpZFVwZGF0ZTogdGhpcy5oYW5kbGVQb3J0YWxVcGRhdGVcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3RyaWdnZXIsIHBvcnRhbF07XG4gIH07XG5cbiAgcmV0dXJuIFRyaWdnZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRyaWdnZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgYWN0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKV0pLFxuICBzaG93QWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBoaWRlQWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogUHJvcFR5cGVzLmFueSxcbiAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHBvcHVwOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvcHVwQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBvcHVwUGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBidWlsdGluUGxhY2VtZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgcG9wdXBUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBwb3B1cEFuaW1hdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBtb3VzZUxlYXZlRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgZm9jdXNEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgYmx1ckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldERvY3VtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgZm9yY2VSZW5kZXI6IFByb3BUeXBlcy5ib29sLFxuICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBtYXNrOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWFza0Nsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25Qb3B1cEFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgcG9wdXBBbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgcG9wdXBWaXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdFBvcHVwVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIG1hc2tUcmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICBtYXNrQW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnblBvaW50OiBQcm9wVHlwZXMuYm9vbCAvLyBNYXliZSB3ZSBjYW4gc3VwcG9ydCB1c2VyIHBhc3MgcG9zaXRpb24gaW4gdGhlIGZ1dHVyZVxufTtcblRyaWdnZXIuY29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuVHJpZ2dlci5jaGlsZENvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcblRyaWdnZXIuZGVmYXVsdFByb3BzID0ge1xuICBwcmVmaXhDbHM6ICdyYy10cmlnZ2VyLXBvcHVwJyxcbiAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ246IHJldHVybkVtcHR5U3RyaW5nLFxuICBnZXREb2N1bWVudDogcmV0dXJuRG9jdW1lbnQsXG4gIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiBub29wLFxuICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgb25Qb3B1cEFsaWduOiBub29wLFxuICBwb3B1cENsYXNzTmFtZTogJycsXG4gIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgbW91c2VMZWF2ZURlbGF5OiAwLjEsXG4gIGZvY3VzRGVsYXk6IDAsXG4gIGJsdXJEZWxheTogMC4xNSxcbiAgcG9wdXBTdHlsZToge30sXG4gIGRlc3Ryb3lQb3B1cE9uSGlkZTogZmFsc2UsXG4gIHBvcHVwQWxpZ246IHt9LFxuICBkZWZhdWx0UG9wdXBWaXNpYmxlOiBmYWxzZSxcbiAgbWFzazogZmFsc2UsXG4gIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgYWN0aW9uOiBbXSxcbiAgc2hvd0FjdGlvbjogW10sXG4gIGhpZGVBY3Rpb246IFtdXG59O1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gIHRoaXMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbW91c2VFbnRlckRlbGF5ID0gX3RoaXM1LnByb3BzLm1vdXNlRW50ZXJEZWxheTtcblxuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbk1vdXNlRW50ZXInLCBlKTtcbiAgICBfdGhpczUuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgbW91c2VFbnRlckRlbGF5LCBtb3VzZUVudGVyRGVsYXkgPyBudWxsIDogZSk7XG4gIH07XG5cbiAgdGhpcy5vbk1vdXNlTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uTW91c2VNb3ZlJywgZSk7XG4gICAgX3RoaXM1LnNldFBvaW50KGUpO1xuICB9O1xuXG4gIHRoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25Nb3VzZUxlYXZlJywgZSk7XG4gICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgfTtcblxuICB0aGlzLm9uUG9wdXBNb3VzZUVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzNS5jbGVhckRlbGF5VGltZXIoKTtcbiAgfTtcblxuICB0aGlzLm9uUG9wdXBNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3RyaWdnZXIvcHVsbC8xM1xuICAgIC8vIHJlYWN0IGJ1Zz9cbiAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0ICYmICFlLnJlbGF0ZWRUYXJnZXQuc2V0VGltZW91dCAmJiBfdGhpczUuX2NvbXBvbmVudCAmJiBfdGhpczUuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUgJiYgY29udGFpbnMoX3RoaXM1Ll9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKCksIGUucmVsYXRlZFRhcmdldCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgfTtcblxuICB0aGlzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbkZvY3VzJywgZSk7XG4gICAgLy8gaW5jYXNlIGZvY3VzaW4gYW5kIGZvY3Vzb3V0XG4gICAgX3RoaXM1LmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIGlmIChfdGhpczUuaXNGb2N1c1RvU2hvdygpKSB7XG4gICAgICBfdGhpczUuZm9jdXNUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIF90aGlzNS5kZWxheVNldFBvcHVwVmlzaWJsZSh0cnVlLCBfdGhpczUucHJvcHMuZm9jdXNEZWxheSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25Nb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbk1vdXNlRG93bicsIGUpO1xuICAgIF90aGlzNS5wcmVDbGlja1RpbWUgPSBEYXRlLm5vdygpO1xuICB9O1xuXG4gIHRoaXMub25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICBfdGhpczUuZmlyZUV2ZW50cygnb25Ub3VjaFN0YXJ0JywgZSk7XG4gICAgX3RoaXM1LnByZVRvdWNoVGltZSA9IERhdGUubm93KCk7XG4gIH07XG5cbiAgdGhpcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzNS5maXJlRXZlbnRzKCdvbkJsdXInLCBlKTtcbiAgICBfdGhpczUuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKF90aGlzNS5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgX3RoaXM1LmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCBfdGhpczUucHJvcHMuYmx1ckRlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uQ29udGV4dE1lbnUnLCBlKTtcbiAgICBfdGhpczUuc2V0UG9wdXBWaXNpYmxlKHRydWUsIGUpO1xuICB9O1xuXG4gIHRoaXMub25Db250ZXh0TWVudUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczUuaXNDb250ZXh0TWVudVRvU2hvdygpKSB7XG4gICAgICBfdGhpczUuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgX3RoaXM1LmZpcmVFdmVudHMoJ29uQ2xpY2snLCBldmVudCk7XG4gICAgLy8gZm9jdXMgd2lsbCB0cmlnZ2VyIGNsaWNrXG4gICAgaWYgKF90aGlzNS5mb2N1c1RpbWUpIHtcbiAgICAgIHZhciBwcmVUaW1lID0gdm9pZCAwO1xuICAgICAgaWYgKF90aGlzNS5wcmVDbGlja1RpbWUgJiYgX3RoaXM1LnByZVRvdWNoVGltZSkge1xuICAgICAgICBwcmVUaW1lID0gTWF0aC5taW4oX3RoaXM1LnByZUNsaWNrVGltZSwgX3RoaXM1LnByZVRvdWNoVGltZSk7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzNS5wcmVDbGlja1RpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IF90aGlzNS5wcmVDbGlja1RpbWU7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzNS5wcmVUb3VjaFRpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IF90aGlzNS5wcmVUb3VjaFRpbWU7XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnMocHJlVGltZSAtIF90aGlzNS5mb2N1c1RpbWUpIDwgMjApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgX3RoaXM1LmZvY3VzVGltZSA9IDA7XG4gICAgfVxuICAgIF90aGlzNS5wcmVDbGlja1RpbWUgPSAwO1xuICAgIF90aGlzNS5wcmVUb3VjaFRpbWUgPSAwO1xuICAgIGlmIChldmVudCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgdmFyIG5leHRWaXNpYmxlID0gIV90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgaWYgKF90aGlzNS5pc0NsaWNrVG9IaWRlKCkgJiYgIW5leHRWaXNpYmxlIHx8IG5leHRWaXNpYmxlICYmIF90aGlzNS5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgIF90aGlzNS5zZXRQb3B1cFZpc2libGUoIV90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGUsIGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vblBvcHVwTW91c2VEb3duID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfY29udGV4dCRyY1RyaWdnZXIgPSBfdGhpczUuY29udGV4dC5yY1RyaWdnZXIsXG4gICAgICAgIHJjVHJpZ2dlciA9IF9jb250ZXh0JHJjVHJpZ2dlciA9PT0gdW5kZWZpbmVkID8ge30gOiBfY29udGV4dCRyY1RyaWdnZXI7XG5cbiAgICBfdGhpczUuaGFzUG9wdXBNb3VzZURvd24gPSB0cnVlO1xuXG4gICAgY2xlYXJUaW1lb3V0KF90aGlzNS5tb3VzZURvd25UaW1lb3V0KTtcbiAgICBfdGhpczUubW91c2VEb3duVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM1Lmhhc1BvcHVwTW91c2VEb3duID0gZmFsc2U7XG4gICAgfSwgMCk7XG5cbiAgICBpZiAocmNUcmlnZ2VyLm9uUG9wdXBNb3VzZURvd24pIHtcbiAgICAgIHJjVHJpZ2dlci5vblBvcHVwTW91c2VEb3duLmFwcGx5KHJjVHJpZ2dlciwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkRvY3VtZW50Q2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoX3RoaXM1LnByb3BzLm1hc2sgJiYgIV90aGlzNS5wcm9wcy5tYXNrQ2xvc2FibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciByb290ID0gZmluZERPTU5vZGUoX3RoaXM1KTtcbiAgICBpZiAoIWNvbnRhaW5zKHJvb3QsIHRhcmdldCkgJiYgIV90aGlzNS5oYXNQb3B1cE1vdXNlRG93bikge1xuICAgICAgX3RoaXM1LmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZ2V0Um9vdERvbU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZpbmRET01Ob2RlKF90aGlzNSk7XG4gIH07XG5cbiAgdGhpcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IGZ1bmN0aW9uIChhbGlnbikge1xuICAgIHZhciBjbGFzc05hbWUgPSBbXTtcbiAgICB2YXIgX3Byb3BzOSA9IF90aGlzNS5wcm9wcyxcbiAgICAgICAgcG9wdXBQbGFjZW1lbnQgPSBfcHJvcHM5LnBvcHVwUGxhY2VtZW50LFxuICAgICAgICBidWlsdGluUGxhY2VtZW50cyA9IF9wcm9wczkuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wczkucHJlZml4Q2xzLFxuICAgICAgICBhbGlnblBvaW50ID0gX3Byb3BzOS5hbGlnblBvaW50LFxuICAgICAgICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbiA9IF9wcm9wczkuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ247XG5cbiAgICBpZiAocG9wdXBQbGFjZW1lbnQgJiYgYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICAgIGNsYXNzTmFtZS5wdXNoKGdldEFsaWduUG9wdXBDbGFzc05hbWUoYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24sIGFsaWduUG9pbnQpKTtcbiAgICB9XG4gICAgaWYgKGdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKSB7XG4gICAgICBjbGFzc05hbWUucHVzaChnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgfTtcblxuICB0aGlzLmdldENvbXBvbmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3Byb3BzMTAgPSBfdGhpczUucHJvcHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wczEwLnByZWZpeENscyxcbiAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlID0gX3Byb3BzMTAuZGVzdHJveVBvcHVwT25IaWRlLFxuICAgICAgICBwb3B1cENsYXNzTmFtZSA9IF9wcm9wczEwLnBvcHVwQ2xhc3NOYW1lLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMxMC5hY3Rpb24sXG4gICAgICAgIG9uUG9wdXBBbGlnbiA9IF9wcm9wczEwLm9uUG9wdXBBbGlnbixcbiAgICAgICAgcG9wdXBBbmltYXRpb24gPSBfcHJvcHMxMC5wb3B1cEFuaW1hdGlvbixcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZSA9IF9wcm9wczEwLnBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIHBvcHVwU3R5bGUgPSBfcHJvcHMxMC5wb3B1cFN0eWxlLFxuICAgICAgICBtYXNrID0gX3Byb3BzMTAubWFzayxcbiAgICAgICAgbWFza0FuaW1hdGlvbiA9IF9wcm9wczEwLm1hc2tBbmltYXRpb24sXG4gICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZSA9IF9wcm9wczEwLm1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgekluZGV4ID0gX3Byb3BzMTAuekluZGV4LFxuICAgICAgICBwb3B1cCA9IF9wcm9wczEwLnBvcHVwLFxuICAgICAgICBzdHJldGNoID0gX3Byb3BzMTAuc3RyZXRjaCxcbiAgICAgICAgYWxpZ25Qb2ludCA9IF9wcm9wczEwLmFsaWduUG9pbnQ7XG4gICAgdmFyIF9zdGF0ZSA9IF90aGlzNS5zdGF0ZSxcbiAgICAgICAgcG9wdXBWaXNpYmxlID0gX3N0YXRlLnBvcHVwVmlzaWJsZSxcbiAgICAgICAgcG9pbnQgPSBfc3RhdGUucG9pbnQ7XG5cblxuICAgIHZhciBhbGlnbiA9IF90aGlzNS5nZXRQb3B1cEFsaWduKCk7XG5cbiAgICB2YXIgbW91c2VQcm9wcyA9IHt9O1xuICAgIGlmIChfdGhpczUuaXNNb3VzZUVudGVyVG9TaG93KCkpIHtcbiAgICAgIG1vdXNlUHJvcHMub25Nb3VzZUVudGVyID0gX3RoaXM1Lm9uUG9wdXBNb3VzZUVudGVyO1xuICAgIH1cbiAgICBpZiAoX3RoaXM1LmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICBtb3VzZVByb3BzLm9uTW91c2VMZWF2ZSA9IF90aGlzNS5vblBvcHVwTW91c2VMZWF2ZTtcbiAgICB9XG5cbiAgICBtb3VzZVByb3BzLm9uTW91c2VEb3duID0gX3RoaXM1Lm9uUG9wdXBNb3VzZURvd247XG4gICAgbW91c2VQcm9wcy5vblRvdWNoU3RhcnQgPSBfdGhpczUub25Qb3B1cE1vdXNlRG93bjtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgUG9wdXAsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBkZXN0cm95UG9wdXBPbkhpZGU6IGRlc3Ryb3lQb3B1cE9uSGlkZSxcbiAgICAgICAgdmlzaWJsZTogcG9wdXBWaXNpYmxlLFxuICAgICAgICBwb2ludDogYWxpZ25Qb2ludCAmJiBwb2ludCxcbiAgICAgICAgY2xhc3NOYW1lOiBwb3B1cENsYXNzTmFtZSxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgb25BbGlnbjogb25Qb3B1cEFsaWduLFxuICAgICAgICBhbmltYXRpb246IHBvcHVwQW5pbWF0aW9uLFxuICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ246IF90aGlzNS5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnblxuICAgICAgfSwgbW91c2VQcm9wcywge1xuICAgICAgICBzdHJldGNoOiBzdHJldGNoLFxuICAgICAgICBnZXRSb290RG9tTm9kZTogX3RoaXM1LmdldFJvb3REb21Ob2RlLFxuICAgICAgICBzdHlsZTogcG9wdXBTdHlsZSxcbiAgICAgICAgbWFzazogbWFzayxcbiAgICAgICAgekluZGV4OiB6SW5kZXgsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBwb3B1cFRyYW5zaXRpb25OYW1lLFxuICAgICAgICBtYXNrQW5pbWF0aW9uOiBtYXNrQW5pbWF0aW9uLFxuICAgICAgICBtYXNrVHJhbnNpdGlvbk5hbWU6IG1hc2tUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgcmVmOiBfdGhpczUuc2F2ZVBvcHVwXG4gICAgICB9KSxcbiAgICAgIHR5cGVvZiBwb3B1cCA9PT0gJ2Z1bmN0aW9uJyA/IHBvcHVwKCkgOiBwb3B1cFxuICAgICk7XG4gIH07XG5cbiAgdGhpcy5nZXRDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXM1LnByb3BzO1xuXG4gICAgdmFyIHBvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gTWFrZSBzdXJlIGRlZmF1bHQgcG9wdXAgY29udGFpbmVyIHdpbGwgbmV2ZXIgY2F1c2Ugc2Nyb2xsYmFyIGFwcGVhcmluZ1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9pc3N1ZXMvNDFcbiAgICBwb3B1cENvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgcG9wdXBDb250YWluZXIuc3R5bGUudG9wID0gJzAnO1xuICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgcG9wdXBDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdmFyIG1vdW50Tm9kZSA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyID8gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIoZmluZERPTU5vZGUoX3RoaXM1KSkgOiBwcm9wcy5nZXREb2N1bWVudCgpLmJvZHk7XG4gICAgbW91bnROb2RlLmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyKTtcbiAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gIH07XG5cbiAgdGhpcy5zZXRQb2ludCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHZhciBhbGlnblBvaW50ID0gX3RoaXM1LnByb3BzLmFsaWduUG9pbnQ7XG5cbiAgICBpZiAoIWFsaWduUG9pbnQgfHwgIXBvaW50KSByZXR1cm47XG5cbiAgICBfdGhpczUuc2V0U3RhdGUoe1xuICAgICAgcG9pbnQ6IHtcbiAgICAgICAgcGFnZVg6IHBvaW50LnBhZ2VYLFxuICAgICAgICBwYWdlWTogcG9pbnQucGFnZVlcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZVBvcnRhbFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXM1LnByZXZQb3B1cFZpc2libGUgIT09IF90aGlzNS5zdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgIF90aGlzNS5wcm9wcy5hZnRlclBvcHVwVmlzaWJsZUNoYW5nZShfdGhpczUuc3RhdGUucG9wdXBWaXNpYmxlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5zYXZlUG9wdXAgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIF90aGlzNS5fY29tcG9uZW50ID0gbm9kZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmZ1bmN0aW9uIGlzUG9pbnRzRXEoYTEsIGEyLCBpc0FsaWduUG9pbnQpIHtcbiAgaWYgKGlzQWxpZ25Qb2ludCkge1xuICAgIHJldHVybiBhMVswXSA9PT0gYTJbMF07XG4gIH1cbiAgcmV0dXJuIGExWzBdID09PSBhMlswXSAmJiBhMVsxXSA9PT0gYTJbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnbkZyb21QbGFjZW1lbnQoYnVpbHRpblBsYWNlbWVudHMsIHBsYWNlbWVudFN0ciwgYWxpZ24pIHtcbiAgdmFyIGJhc2VBbGlnbiA9IGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudFN0cl0gfHwge307XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYmFzZUFsaWduLCBhbGlnbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnblBvcHVwQ2xhc3NOYW1lKGJ1aWx0aW5QbGFjZW1lbnRzLCBwcmVmaXhDbHMsIGFsaWduLCBpc0FsaWduUG9pbnQpIHtcbiAgdmFyIHBvaW50cyA9IGFsaWduLnBvaW50cztcbiAgZm9yICh2YXIgcGxhY2VtZW50IGluIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgaWYgKGJ1aWx0aW5QbGFjZW1lbnRzLmhhc093blByb3BlcnR5KHBsYWNlbWVudCkpIHtcbiAgICAgIGlmIChpc1BvaW50c0VxKGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudF0ucG9pbnRzLCBwb2ludHMsIGlzQWxpZ25Qb2ludCkpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeENscyArICctcGxhY2VtZW50LScgKyBwbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYobmFtZSwgY29tcG9uZW50KSB7XG4gIHRoaXNbbmFtZV0gPSBjb21wb25lbnQ7XG59IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBDb250YWluZXJSZW5kZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29udGFpbmVyUmVuZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250YWluZXJSZW5kZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRhaW5lclJlbmRlcik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gQ29udGFpbmVyUmVuZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29udGFpbmVyUmVuZGVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMucmVtb3ZlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNvbnRhaW5lcikge1xuICAgICAgICBSZWFjdERPTS51bm1vdW50Q29tcG9uZW50QXROb2RlKF90aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIF90aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF90aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIF90aGlzLmNvbnRhaW5lciA9IG51bGw7XG4gICAgICB9XG4gICAgfSwgX3RoaXMucmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzLCByZWFkeSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdmlzaWJsZSA9IF90aGlzJHByb3BzLnZpc2libGUsXG4gICAgICAgICAgZ2V0Q29tcG9uZW50ID0gX3RoaXMkcHJvcHMuZ2V0Q29tcG9uZW50LFxuICAgICAgICAgIGZvcmNlUmVuZGVyID0gX3RoaXMkcHJvcHMuZm9yY2VSZW5kZXIsXG4gICAgICAgICAgZ2V0Q29udGFpbmVyID0gX3RoaXMkcHJvcHMuZ2V0Q29udGFpbmVyLFxuICAgICAgICAgIHBhcmVudCA9IF90aGlzJHByb3BzLnBhcmVudDtcblxuICAgICAgaWYgKHZpc2libGUgfHwgcGFyZW50Ll9jb21wb25lbnQgfHwgZm9yY2VSZW5kZXIpIHtcbiAgICAgICAgaWYgKCFfdGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgICBfdGhpcy5jb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihwYXJlbnQsIGdldENvbXBvbmVudChwcm9wcyksIF90aGlzLmNvbnRhaW5lciwgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgICAgICByZWFkeS5jYWxsKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ29udGFpbmVyUmVuZGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvTW91bnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvTW91bnQpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJDb21wb25lbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb250YWluZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XG4gICAgICAgIHJlbmRlckNvbXBvbmVudDogdGhpcy5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgIHJlbW92ZUNvbnRhaW5lcjogdGhpcy5yZW1vdmVDb250YWluZXJcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDb250YWluZXJSZW5kZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkNvbnRhaW5lclJlbmRlci5wcm9wVHlwZXMgPSB7XG4gIGF1dG9Nb3VudDogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9EZXN0cm95OiBQcm9wVHlwZXMuYm9vbCxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZvcmNlUmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFyZW50OiBQcm9wVHlwZXMuYW55LFxuICBnZXRDb21wb25lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5Db250YWluZXJSZW5kZXIuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvTW91bnQ6IHRydWUsXG4gIGF1dG9EZXN0cm95OiB0cnVlLFxuICBmb3JjZVJlbmRlcjogZmFsc2Vcbn07XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJSZW5kZXI7IiwiaW1wb3J0IGFkZERPTUV2ZW50TGlzdGVuZXIgZnJvbSAnYWRkLWRvbS1ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcldyYXAodGFyZ2V0LCBldmVudFR5cGUsIGNiLCBvcHRpb24pIHtcbiAgLyogZXNsaW50IGNhbWVsY2FzZTogMiAqL1xuICB2YXIgY2FsbGJhY2sgPSBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyA/IGZ1bmN0aW9uIHJ1bihlKSB7XG4gICAgUmVhY3RET00udW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMoY2IsIGUpO1xuICB9IDogY2I7XG4gIHJldHVybiBhZGRET01FdmVudExpc3RlbmVyKHRhcmdldCwgZXZlbnRUeXBlLCBjYWxsYmFjaywgb3B0aW9uKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWlucyhyb290LCBuKSB7XG4gIHZhciBub2RlID0gbjtcbiAgd2hpbGUgKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gcm9vdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBQb3J0YWwgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUG9ydGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3J0YWwoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvcnRhbCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBvcnRhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvcnRhbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBvcnRhbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5jcmVhdGVDb250YWluZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB2YXIgZGlkVXBkYXRlID0gdGhpcy5wcm9wcy5kaWRVcGRhdGU7XG5cbiAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgZGlkVXBkYXRlKHByZXZQcm9wcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ29udGFpbmVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3JlYXRlQ29udGFpbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKCkge1xuICAgICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5wcm9wcy5nZXRDb250YWluZXIoKTtcbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVDb250YWluZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVDb250YWluZXIoKSB7XG4gICAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuX2NvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKHRoaXMucHJvcHMuY2hpbGRyZW4sIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9ydGFsO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuICBnZXRDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBkaWRVcGRhdGU6IFByb3BUeXBlcy5mdW5jXG59O1xuZXhwb3J0IGRlZmF1bHQgUG9ydGFsOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIC8vIFVzZSB0aGUgc2V0U3RhdGUoKSB1cGRhdGVyIHRvIGVuc3VyZSBzdGF0ZSBpc24ndCBzdGFsZSBpbiBjZXJ0YWluIGVkZ2UgY2FzZXMuXG4gIGZ1bmN0aW9uIHVwZGF0ZXIocHJldlN0YXRlKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgIHJldHVybiBzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUgOiBudWxsO1xuICB9XG4gIC8vIEJpbmRpbmcgXCJ0aGlzXCIgaXMgaW1wb3J0YW50IGZvciBzaGFsbG93IHJlbmRlcmVyIHN1cHBvcnQuXG4gIHRoaXMuc2V0U3RhdGUodXBkYXRlci5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICB0cnkge1xuICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyA9IHRydWU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGVcbiAgICApO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMucHJvcHMgPSBwcmV2UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHByZXZTdGF0ZTtcbiAgfVxufVxuXG4vLyBSZWFjdCBtYXkgd2FybiBhYm91dCBjV00vY1dSUC9jV1UgbWV0aG9kcyBiZWluZyBkZXByZWNhdGVkLlxuLy8gQWRkIGEgZmxhZyB0byBzdXBwcmVzcyB0aGVzZSB3YXJuaW5ncyBmb3IgdGhpcyBzcGVjaWFsIGNhc2UuXG5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFVwZGF0ZS5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gcG9seWZpbGwoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIGlmICghcHJvdG90eXBlIHx8ICFwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgcG9seWZpbGwgY2xhc3MgY29tcG9uZW50cycpO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG5cbiAgLy8gSWYgbmV3IGNvbXBvbmVudCBBUElzIGFyZSBkZWZpbmVkLCBcInVuc2FmZVwiIGxpZmVjeWNsZXMgd29uJ3QgYmUgY2FsbGVkLlxuICAvLyBFcnJvciBpZiBhbnkgb2YgdGhlc2UgbGlmZWN5Y2xlcyBhcmUgcHJlc2VudCxcbiAgLy8gQmVjYXVzZSB0aGV5IHdvdWxkIHdvcmsgZGlmZmVyZW50bHkgYmV0d2VlbiBvbGRlciBhbmQgbmV3ZXIgKDE2LjMrKSB2ZXJzaW9ucyBvZiBSZWFjdC5cbiAgdmFyIGZvdW5kV2lsbE1vdW50TmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSBudWxsO1xuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnY29tcG9uZW50V2lsbE1vdW50JztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfVxuICBpZiAoXG4gICAgZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGxcbiAgKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gICAgdmFyIG5ld0FwaU5hbWUgPVxuICAgICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCknXG4gICAgICAgIDogJ2dldFNuYXBzaG90QmVmb3JlVXBkYXRlKCknO1xuXG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICAnVW5zYWZlIGxlZ2FjeSBsaWZlY3ljbGVzIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgY29tcG9uZW50cyB1c2luZyBuZXcgY29tcG9uZW50IEFQSXMuXFxuXFxuJyArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICAnIHVzZXMgJyArXG4gICAgICAgIG5ld0FwaU5hbWUgK1xuICAgICAgICAnIGJ1dCBhbHNvIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgbGVnYWN5IGxpZmVjeWNsZXM6JyArXG4gICAgICAgIChmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsTW91bnROYW1lIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGxcbiAgICAgICAgICA/ICdcXG4gICcgKyBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxVcGRhdGVOYW1lIDogJycpICtcbiAgICAgICAgJ1xcblxcblRoZSBhYm92ZSBsaWZlY3ljbGVzIHNob3VsZCBiZSByZW1vdmVkLiBMZWFybiBtb3JlIGFib3V0IHRoaXMgd2FybmluZyBoZXJlOlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hc3luYy1jb21wb25lbnQtbGlmZWN5Y2xlLWhvb2tzJ1xuICAgICk7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dNIGFuZCBjV1JQIHRvIGludm9rZSB0aGUgbmV3IHN0YXRpYyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoZXNlIGxpZmVjeWNsZXMgaWYgZ0RTRlAgZXhpc3RzLlxuICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gY29tcG9uZW50V2lsbE1vdW50O1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcztcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZS5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dVIHRvIGludm9rZSB0aGUgbmV3IGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhhdCBsaWZlY3ljbGUgaWYgZ1NCVSBleGlzdHMuXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcG9seWZpbGwgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSBmb3IgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBkZWZpbmUgY29tcG9uZW50RGlkVXBkYXRlKCkgb24gdGhlIHByb3RvdHlwZSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBjb21wb25lbnRXaWxsVXBkYXRlO1xuXG4gICAgdmFyIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU7XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGUsXG4gICAgICBtYXliZVNuYXBzaG90XG4gICAgKSB7XG4gICAgICAvLyAxNi4zKyB3aWxsIG5vdCBleGVjdXRlIG91ciB3aWxsLXVwZGF0ZSBtZXRob2Q7XG4gICAgICAvLyBJdCB3aWxsIHBhc3MgYSBzbmFwc2hvdCB2YWx1ZSB0byBkaWQtdXBkYXRlIHRob3VnaC5cbiAgICAgIC8vIE9sZGVyIHZlcnNpb25zIHdpbGwgcmVxdWlyZSBvdXIgcG9seWZpbGxlZCB3aWxsLXVwZGF0ZSB2YWx1ZS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGJvdGggY2FzZXMsIGJ1dCBjYW4ndCBqdXN0IGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgXCJtYXliZVNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGZvciA8PSAxNS54IHZlcnNpb25zIHRoaXMgbWlnaHQgYmUgYSBcInByZXZDb250ZXh0XCIgb2JqZWN0LlxuICAgICAgLy8gV2UgYWxzbyBjYW4ndCBqdXN0IGNoZWNrIFwiX19yZWFjdEludGVybmFsU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZ2V0LXNuYXBzaG90IG1pZ2h0IHJldHVybiBhIGZhbHN5IHZhbHVlLlxuICAgICAgLy8gU28gY2hlY2sgZm9yIHRoZSBleHBsaWNpdCBfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgZmxhZyB0byBkZXRlcm1pbmUgYmVoYXZpb3IuXG4gICAgICB2YXIgc25hcHNob3QgPSB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZ1xuICAgICAgICA/IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RcbiAgICAgICAgOiBtYXliZVNuYXBzaG90O1xuXG4gICAgICBjb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG5leHBvcnQgeyBwb2x5ZmlsbCB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdyxDb2wsUmF0ZSB9IGZyb20gJ2FudGQnO1xuXG4vKipcbiAqIOavj+aXpei/kOWKv1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXkgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50e1xuXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb2wgc3Bhbj17IDIwIH0gb2Zmc2V0PXsgMiB9PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICDnu7zlkIjmjIfmlbA6PFJhdGUgY291bnQ9eyAzIH0gZGlzYWJsZWQgLz5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9