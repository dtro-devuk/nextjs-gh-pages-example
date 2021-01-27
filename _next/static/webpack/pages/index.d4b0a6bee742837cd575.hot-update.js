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

    var innerStyles = _Hamburger_module_css__WEBPACK_IMPORTED_MODULE_5___default.a;
    var hamburgerSpring = "{styles.hamburger--spring-r}";
    event.preventDefault();
    setOpen(open);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", _objectSpread(_objectSpread({
    className: "{styles.hamburger--spring-r} is-active\r p-1 md:p-3 ml-3 mr-3\r lg:hidden lg:ml-0 lg:w-0\r text-yellow-500 hover:text-white}\r rounded`}" // className={`${open ? 'is-active' : ''}
    //       {hamburgerSpring}
    //       p-1 md:p-3 ml-3 mr-3
    //       lg:hidden lg:ml-0 lg:w-0
    //       text-yellow-500 hover:text-white
    //       rounded`}
    //       transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500
    //       focus:outline-none`}
    ,
    id: "hamburger-btn",
    "aria-label": "Hamburger Menu",
    "aria-expanded": isOpen,
    "aria-controls": "navigation",
    type: "button",
    tabIndex: "0",
    onClick: function onClick(event) {
      return handleToggleMenuClick(event, !open);
    }
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "{styles.hamburger-box}",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: "{styles.hamburger-inner rounded}"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IYW1idXJnZXIuanMiXSwibmFtZXMiOlsiSGFtYnVyZ2VyIiwib3BlbiIsInNldE9wZW4iLCJwcm9wcyIsImlzT3BlbiIsImhhbmRsZVRvZ2dsZU1lbnVDbGljayIsImV2ZW50IiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsImlubmVyU3R5bGVzIiwic3R5bGVzIiwiaGFtYnVyZ2VyU3ByaW5nIiwicHJldmVudERlZmF1bHQiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBaUM7QUFBQSxNQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2pELE1BQU1DLE1BQU0sR0FBR0gsSUFBSSxHQUFHLElBQUgsR0FBVSxLQUE3QjtBQUVBO0FBQ0Y7QUFDQTs7QUFDRSxNQUFNSSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEtBQUQsRUFBUUwsSUFBUixFQUFpQjtBQUM3QyxRQUFJSyxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ0UsT0FBdkIsSUFBa0NGLEtBQUssQ0FBQ0csUUFBNUMsRUFBc0Q7QUFDcEQsYUFEb0QsQ0FDNUM7QUFDVDs7QUFDRCxRQUFNQyxXQUFXLEdBQUdDLDREQUFwQjtBQUNBLFFBQU1DLGVBQWUsaUNBQXJCO0FBQ0FOLFNBQUssQ0FBQ08sY0FBTjtBQUVBWCxXQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELEdBVEQ7O0FBV0Esc0JBQ0U7QUFDRSxhQUFTLEVBQUMsMElBRFosQ0FNRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkY7QUFjRSxNQUFFLEVBQUMsZUFkTDtBQWVFLGtCQUFXLGdCQWZiO0FBZ0JFLHFCQUFlRyxNQWhCakI7QUFpQkUscUJBQWMsWUFqQmhCO0FBa0JFLFFBQUksRUFBQyxRQWxCUDtBQW1CRSxZQUFRLEVBQUMsR0FuQlg7QUFvQkUsV0FBTyxFQUFFLGlCQUFDRSxLQUFEO0FBQUEsYUFBV0QscUJBQXFCLENBQUNDLEtBQUQsRUFBUSxDQUFDTCxJQUFULENBQWhDO0FBQUE7QUFwQlgsS0FxQk1FLEtBckJOO0FBQUEsMkJBdUJFO0FBQU0sZUFBUyxFQUFDLHdCQUFoQjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkQsQ0E5Q0Q7O0tBQU1ILFM7QUFnRE5BLFNBQVMsQ0FBQ2MsU0FBVixHQUFzQjtBQUNwQmIsTUFBSSxFQUFFYywrQ0FBSSxDQUFDQyxVQURTO0FBRXBCZCxTQUFPLEVBQUVlLCtDQUFJLENBQUNEO0FBRk0sQ0FBdEI7QUFLZWhCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0YjBhNmJlZTc0MjgzN2NkNTc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSGFtYnVyZ2VyIFRvZ2dsZSBCdXR0b24gd2l0aCBhbmltYXRpb25cclxuICogQGRlc2NyaXB0aW9uIFRvZ2dsZSBCdXJnZXIgYnV0dG9uLCBvcGVuIGFuZCBjbG9zZSBhbmltYXRpb25zIGFuZCBhcmlhIHN1cHBvcnRcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGJvb2wsIGZ1bmMgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IYW1idXJnZXIubW9kdWxlLmNzcyc7XHJcbi8qKlxyXG4gKiBIYW1idXJnZXIgVG9nZ2xlIEJ1dHRvblxyXG4gKiBXaXRoIGFuaW1hdGVkIE9wZW4gYW5kIENsb3NlLCBhbmltYXRpb25zIGNvdXJ0ZXN5IG9mIEpvaG5zaHUsIHNlZSByZWFkbWUgZm9yIGF0dHJpYnV0aW9uc1xyXG4gKiBAcGFyYW0geyp9IHBhcmFtMFxyXG4gKi9cclxuY29uc3QgSGFtYnVyZ2VyID0gKHsgb3Blbiwgc2V0T3BlbiwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IGlzT3BlbiA9IG9wZW4gPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cvSGlkZSB0aGUgTWVudVxyXG4gICAqL1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZU1lbnVDbGljayA9IChldmVudCwgb3BlbikgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5zaGlmdEtleSkge1xyXG4gICAgICByZXR1cm47IC8vIGxldCB0aGUgYnJvd3NlciBkZWFsIHdpdGggdGhlIGNsaWNrIG5hdGl2ZWx5XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbm5lclN0eWxlcyA9IHN0eWxlcztcclxuICAgIGNvbnN0IGhhbWJ1cmdlclNwcmluZyA9IGB7c3R5bGVzLmhhbWJ1cmdlci0tc3ByaW5nLXJ9YDtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgc2V0T3BlbihvcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCJ7c3R5bGVzLmhhbWJ1cmdlci0tc3ByaW5nLXJ9IGlzLWFjdGl2ZVxyXG4gICAgcC0xIG1kOnAtMyBtbC0zIG1yLTNcclxuICAgIGxnOmhpZGRlbiBsZzptbC0wIGxnOnctMFxyXG4gICAgdGV4dC15ZWxsb3ctNTAwIGhvdmVyOnRleHQtd2hpdGV9XHJcbiAgICByb3VuZGVkYH1cIlxyXG4gICAgICAvLyBjbGFzc05hbWU9e2Ake29wZW4gPyAnaXMtYWN0aXZlJyA6ICcnfVxyXG4gICAgICAvLyAgICAgICB7aGFtYnVyZ2VyU3ByaW5nfVxyXG4gICAgICAvLyAgICAgICBwLTEgbWQ6cC0zIG1sLTMgbXItM1xyXG4gICAgICAvLyAgICAgICBsZzpoaWRkZW4gbGc6bWwtMCBsZzp3LTBcclxuICAgICAgLy8gICAgICAgdGV4dC15ZWxsb3ctNTAwIGhvdmVyOnRleHQtd2hpdGVcclxuICAgICAgLy8gICAgICAgcm91bmRlZGB9XHJcbiAgICAgIC8vICAgICAgIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUgaG92ZXI6Ymctb3BhY2l0eS01MCB0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTUwMFxyXG4gICAgICAvLyAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVgfVxyXG4gICAgICBpZD1cImhhbWJ1cmdlci1idG5cIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiSGFtYnVyZ2VyIE1lbnVcIlxyXG4gICAgICBhcmlhLWV4cGFuZGVkPXtpc09wZW59XHJcbiAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZpZ2F0aW9uXCJcclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIHRhYkluZGV4PVwiMFwiXHJcbiAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4gaGFuZGxlVG9nZ2xlTWVudUNsaWNrKGV2ZW50LCAhb3Blbil9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwie3N0eWxlcy5oYW1idXJnZXItYm94fVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIntzdHlsZXMuaGFtYnVyZ2VyLWlubmVyIHJvdW5kZWR9XCI+PC9zcGFuPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuSGFtYnVyZ2VyLnByb3BUeXBlcyA9IHtcclxuICBvcGVuOiBib29sLmlzUmVxdWlyZWQsXHJcbiAgc2V0T3BlbjogZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9