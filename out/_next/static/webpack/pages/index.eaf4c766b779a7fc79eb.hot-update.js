webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Hamburger.js":
/*!*********************************!*\
  !*** ./components/Hamburger.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hamburger.module.css */ "./components/Hamburger.module.css");
/* harmony import */ var _Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-gh-pages-example\\components\\Hamburger.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Hamburger Toggle Button with animation
 * @description Toggle Burger button, open and close animations and aria support
 * @author dtro-devuk @github:dtro-devuk.io
 */



/**
 * Hamburger Toggle Button
 * With animated Open and Close, animations courtesy of Johnshu, see readme for attributions
 * @param {*} param0
 */

var Hamburger = function Hamburger(_ref) {
  var open = _ref.open,
      setOpen = _ref.setOpen,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["open", "setOpen"]);

  var isOpen = open ? true : false;
  /**
   * Show/Hide the Menu
   */

  var handleToggleMenuClick = function handleToggleMenuClick(event, open) {
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return; // let the browser deal with the click natively
    }

    event.preventDefault();
    setOpen(open);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", _objectSpread(_objectSpread({
    className: "{styles}.hamburger-spring-r ".concat(open ? 'is-active' : '', "\n            p-1 md:p-3 ml-3 mr-3 \n            lg:hidden lg:ml-0 lg:w-0 \n            text-yellow-500 hover:text-white \n            rounded\n            transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500\n            focus:outline-none"),
    id: "hamburger-btn",
    "aria-label": "Hamburger Menu Toggle Button",
    "aria-expanded": isOpen,
    "aria-controls": "{menuId}",
    type: "button",
    tabIndex: "0",
    onClick: function onClick(event) {
      return handleToggleMenuClick(event, !open);
    }
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "{styles.hamburger-box}",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "{styles.hamburger-inner} rounded"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_c = Hamburger;
Hamburger.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_4__["bool"].isRequired,
  setOpen: prop_types__WEBPACK_IMPORTED_MODULE_4__["func"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Hamburger);

var _c;

$RefreshReg$(_c, "Hamburger");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IYW1idXJnZXIuanMiXSwibmFtZXMiOlsiSGFtYnVyZ2VyIiwib3BlbiIsInNldE9wZW4iLCJwcm9wcyIsImlzT3BlbiIsImhhbmRsZVRvZ2dsZU1lbnVDbGljayIsImV2ZW50IiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsInByZXZlbnREZWZhdWx0IiwicHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlDO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFaQyxLQUFZOztBQUNqRCxNQUFNQyxNQUFNLEdBQUdILElBQUksR0FBRyxJQUFILEdBQVUsS0FBN0I7QUFFQTtBQUNGO0FBQ0E7O0FBQ0UsTUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxLQUFELEVBQVFMLElBQVIsRUFBaUI7QUFDN0MsUUFBSUssS0FBSyxDQUFDQyxPQUFOLElBQWlCRCxLQUFLLENBQUNFLE9BQXZCLElBQWtDRixLQUFLLENBQUNHLFFBQTVDLEVBQXNEO0FBQ3BELGFBRG9ELENBQzVDO0FBQ1Q7O0FBRURILFNBQUssQ0FBQ0ksY0FBTjtBQUVBUixXQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELEdBUkQ7O0FBVUEsc0JBQ0U7QUFDRSxhQUFTLHdDQUFpQ0EsSUFBSSxHQUFHLFdBQUgsR0FBaUIsRUFBdEQsK1FBRFg7QUFRRSxNQUFFLEVBQUMsZUFSTDtBQVNFLGtCQUFXLDhCQVRiO0FBVUUscUJBQWVHLE1BVmpCO0FBV0UscUJBQWMsVUFYaEI7QUFZRSxRQUFJLEVBQUMsUUFaUDtBQWFFLFlBQVEsRUFBQyxHQWJYO0FBY0UsV0FBTyxFQUFFLGlCQUFDRSxLQUFEO0FBQUEsYUFBV0QscUJBQXFCLENBQUNDLEtBQUQsRUFBUSxDQUFDTCxJQUFULENBQWhDO0FBQUE7QUFkWCxLQWVNRSxLQWZOO0FBQUEsMkJBaUJFO0FBQU0sZUFBUyxFQUFDLHdCQUFoQjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0F2Q0Q7O0tBQU1ILFM7QUF5Q05BLFNBQVMsQ0FBQ1csU0FBVixHQUFzQjtBQUNwQlYsTUFBSSxFQUFFVywrQ0FBSSxDQUFDQyxVQURTO0FBRXBCWCxTQUFPLEVBQUVZLCtDQUFJLENBQUNEO0FBRk0sQ0FBdEI7QUFLZWIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWFmNGM3NjZiNzc5YTdmYzc5ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBIYW1idXJnZXIgVG9nZ2xlIEJ1dHRvbiB3aXRoIGFuaW1hdGlvblxyXG4gKiBAZGVzY3JpcHRpb24gVG9nZ2xlIEJ1cmdlciBidXR0b24sIG9wZW4gYW5kIGNsb3NlIGFuaW1hdGlvbnMgYW5kIGFyaWEgc3VwcG9ydFxyXG4gKiBAYXV0aG9yIGR0cm8tZGV2dWsgQGdpdGh1YjpkdHJvLWRldnVrLmlvXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYm9vbCwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hhbWJ1cmdlci5tb2R1bGUuY3NzJztcclxuLyoqXHJcbiAqIEhhbWJ1cmdlciBUb2dnbGUgQnV0dG9uXHJcbiAqIFdpdGggYW5pbWF0ZWQgT3BlbiBhbmQgQ2xvc2UsIGFuaW1hdGlvbnMgY291cnRlc3kgb2YgSm9obnNodSwgc2VlIHJlYWRtZSBmb3IgYXR0cmlidXRpb25zXHJcbiAqIEBwYXJhbSB7Kn0gcGFyYW0wXHJcbiAqL1xyXG5jb25zdCBIYW1idXJnZXIgPSAoeyBvcGVuLCBzZXRPcGVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgaXNPcGVuID0gb3BlbiA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdy9IaWRlIHRoZSBNZW51XHJcbiAgICovXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlTWVudUNsaWNrID0gKGV2ZW50LCBvcGVuKSA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIHJldHVybjsgLy8gbGV0IHRoZSBicm93c2VyIGRlYWwgd2l0aCB0aGUgY2xpY2sgbmF0aXZlbHlcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHNldE9wZW4ob3Blbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtge3N0eWxlc30uaGFtYnVyZ2VyLXNwcmluZy1yICR7b3BlbiA/ICdpcy1hY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgIHAtMSBtZDpwLTMgbWwtMyBtci0zIFxyXG4gICAgICAgICAgICBsZzpoaWRkZW4gbGc6bWwtMCBsZzp3LTAgXHJcbiAgICAgICAgICAgIHRleHQteWVsbG93LTUwMCBob3Zlcjp0ZXh0LXdoaXRlIFxyXG4gICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUgaG92ZXI6Ymctb3BhY2l0eS01MCB0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTUwMFxyXG4gICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVgfVxyXG4gICAgICBpZD1cImhhbWJ1cmdlci1idG5cIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiSGFtYnVyZ2VyIE1lbnUgVG9nZ2xlIEJ1dHRvblwiXHJcbiAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzT3Blbn1cclxuICAgICAgYXJpYS1jb250cm9scz1cInttZW51SWR9XCJcclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIHRhYkluZGV4PVwiMFwiXHJcbiAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlTWVudUNsaWNrKGV2ZW50LCAhb3Blbil9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwie3N0eWxlcy5oYW1idXJnZXItYm94fVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIntzdHlsZXMuaGFtYnVyZ2VyLWlubmVyfSByb3VuZGVkXCI+PC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuSGFtYnVyZ2VyLnByb3BUeXBlcyA9IHtcclxuICBvcGVuOiBib29sLmlzUmVxdWlyZWQsXHJcbiAgc2V0T3BlbjogZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9