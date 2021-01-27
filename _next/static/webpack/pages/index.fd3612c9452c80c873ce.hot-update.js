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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Hamburger_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Hamburger.module.css */ "./components/Hamburger.module.css");
/* harmony import */ var _Hamburger_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Hamburger_module_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-gh-pages-example\\components\\Hamburger.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["", "\n            p-1 md:p-3 ml-3 mr-3\n            lg:hidden lg:ml-0 lg:w-0\n            text-yellow-500 hover:text-white\n            rounded\n            transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500\n            focus:outline-none"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

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
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["open", "setOpen"]);

  var isOpen = open ? true : false;
  /**
   * Show/Hide the Menu
   */

  var handleToggleMenuClick = function handleToggleMenuClick(event, open) {
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return; // let the browser deal with the click natively
    }

    var innerStyles = _Hamburger_module_css__WEBPACK_IMPORTED_MODULE_6___default.a;
    var hamburgerSpring = "{styles.hamburger--spring-r}";
    event.preventDefault();
    setOpen(open);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", _objectSpread(_objectSpread({
    className: {
      hamburgerSpring: hamburgerSpring
    }(_templateObject(), open ? 'is-active' : ''),
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
        lineNumber: 52,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
  open: prop_types__WEBPACK_IMPORTED_MODULE_5__["bool"].isRequired,
  setOpen: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"].isRequired
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWwuanMiXSwibmFtZXMiOlsiSGFtYnVyZ2VyIiwib3BlbiIsInNldE9wZW4iLCJwcm9wcyIsImlzT3BlbiIsImhhbmRsZVRvZ2dsZU1lbnVDbGljayIsImV2ZW50IiwiY3RybEtleSIsIm1ldGFLZXkiLCJzaGlmdEtleSIsImlubmVyU3R5bGVzIiwic3R5bGVzIiwiaGFtYnVyZ2VyU3ByaW5nIiwicHJldmVudERlZmF1bHQiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBaUM7QUFBQSxNQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsTUFBeEJDLE9BQXdCLFFBQXhCQSxPQUF3QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ2pELE1BQU1DLE1BQU0sR0FBR0gsSUFBSSxHQUFHLElBQUgsR0FBVSxLQUE3QjtBQUVBO0FBQ0Y7QUFDQTs7QUFDRSxNQUFNSSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLEtBQUQsRUFBUUwsSUFBUixFQUFpQjtBQUM3QyxRQUFJSyxLQUFLLENBQUNDLE9BQU4sSUFBaUJELEtBQUssQ0FBQ0UsT0FBdkIsSUFBa0NGLEtBQUssQ0FBQ0csUUFBNUMsRUFBc0Q7QUFDcEQsYUFEb0QsQ0FDNUM7QUFDVDs7QUFDRCxRQUFNQyxXQUFXLEdBQUdDLDREQUFwQjtBQUNBLFFBQU1DLGVBQWUsaUNBQXJCO0FBQ0FOLFNBQUssQ0FBQ08sY0FBTjtBQUVBWCxXQUFPLENBQUNELElBQUQsQ0FBUDtBQUNELEdBVEQ7O0FBV0Esc0JBQ0U7QUFDRSxhQUFTLEVBQUU7QUFBRVcscUJBQWUsRUFBZkE7QUFBRixLQUFGLG9CQUF3QlgsSUFBSSxHQUFHLFdBQUgsR0FBaUIsRUFBN0MsQ0FEWDtBQVFFLE1BQUUsRUFBQyxlQVJMO0FBU0Usa0JBQVcsZ0JBVGI7QUFVRSxxQkFBZUcsTUFWakI7QUFXRSxxQkFBYyxZQVhoQjtBQVlFLFFBQUksRUFBQyxRQVpQO0FBYUUsWUFBUSxFQUFDLEdBYlg7QUFjRSxXQUFPLEVBQUUsaUJBQUNFLEtBQUQ7QUFBQSxhQUFXRCxxQkFBcUIsQ0FBQ0MsS0FBRCxFQUFRLENBQUNMLElBQVQsQ0FBaEM7QUFBQTtBQWRYLEtBZU1FLEtBZk47QUFBQSwyQkFpQkU7QUFBTSxlQUFTLEVBQUMsd0JBQWhCO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXhDRDs7S0FBTUgsUztBQTBDTkEsU0FBUyxDQUFDYyxTQUFWLEdBQXNCO0FBQ3BCYixNQUFJLEVBQUVjLCtDQUFJLENBQUNDLFVBRFM7QUFFcEJkLFNBQU8sRUFBRWUsK0NBQUksQ0FBQ0Q7QUFGTSxDQUF0QjtBQUtlaEIsd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmQzNjEyYzk0NTJjODBjODczY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBIYW1idXJnZXIgVG9nZ2xlIEJ1dHRvbiB3aXRoIGFuaW1hdGlvblxyXG4gKiBAZGVzY3JpcHRpb24gVG9nZ2xlIEJ1cmdlciBidXR0b24sIG9wZW4gYW5kIGNsb3NlIGFuaW1hdGlvbnMgYW5kIGFyaWEgc3VwcG9ydFxyXG4gKiBAYXV0aG9yIGR0cm8tZGV2dWsgQGdpdGh1YjpkdHJvLWRldnVrLmlvXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYm9vbCwgZnVuYyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hhbWJ1cmdlci5tb2R1bGUuY3NzJztcclxuLyoqXHJcbiAqIEhhbWJ1cmdlciBUb2dnbGUgQnV0dG9uXHJcbiAqIFdpdGggYW5pbWF0ZWQgT3BlbiBhbmQgQ2xvc2UsIGFuaW1hdGlvbnMgY291cnRlc3kgb2YgSm9obnNodSwgc2VlIHJlYWRtZSBmb3IgYXR0cmlidXRpb25zXHJcbiAqIEBwYXJhbSB7Kn0gcGFyYW0wXHJcbiAqL1xyXG5jb25zdCBIYW1idXJnZXIgPSAoeyBvcGVuLCBzZXRPcGVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgaXNPcGVuID0gb3BlbiA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdy9IaWRlIHRoZSBNZW51XHJcbiAgICovXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlTWVudUNsaWNrID0gKGV2ZW50LCBvcGVuKSA9PiB7XHJcbiAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgIHJldHVybjsgLy8gbGV0IHRoZSBicm93c2VyIGRlYWwgd2l0aCB0aGUgY2xpY2sgbmF0aXZlbHlcclxuICAgIH1cclxuICAgIGNvbnN0IGlubmVyU3R5bGVzID0gc3R5bGVzO1xyXG4gICAgY29uc3QgaGFtYnVyZ2VyU3ByaW5nID0gYHtzdHlsZXMuaGFtYnVyZ2VyLS1zcHJpbmctcn1gO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBzZXRPcGVuKG9wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIGNsYXNzTmFtZT17eyBoYW1idXJnZXJTcHJpbmcgfWAke29wZW4gPyAnaXMtYWN0aXZlJyA6ICcnfVxyXG4gICAgICAgICAgICBwLTEgbWQ6cC0zIG1sLTMgbXItM1xyXG4gICAgICAgICAgICBsZzpoaWRkZW4gbGc6bWwtMCBsZzp3LTBcclxuICAgICAgICAgICAgdGV4dC15ZWxsb3ctNTAwIGhvdmVyOnRleHQtd2hpdGVcclxuICAgICAgICAgICAgcm91bmRlZFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTI1IGhvdmVyOmJnLW9wYWNpdHktNTAgdHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi01MDBcclxuICAgICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lYH1cclxuICAgICAgaWQ9XCJoYW1idXJnZXItYnRuXCJcclxuICAgICAgYXJpYS1sYWJlbD1cIkhhbWJ1cmdlciBNZW51XCJcclxuICAgICAgYXJpYS1leHBhbmRlZD17aXNPcGVufVxyXG4gICAgICBhcmlhLWNvbnRyb2xzPVwibmF2aWdhdGlvblwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICB0YWJJbmRleD1cIjBcIlxyXG4gICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IGhhbmRsZVRvZ2dsZU1lbnVDbGljayhldmVudCwgIW9wZW4pfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIntzdHlsZXMuaGFtYnVyZ2VyLWJveH1cIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ7c3R5bGVzLmhhbWJ1cmdlci1pbm5lciByb3VuZGVkfVwiPjwvc3Bhbj5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbkhhbWJ1cmdlci5wcm9wVHlwZXMgPSB7XHJcbiAgb3BlbjogYm9vbC5pc1JlcXVpcmVkLFxyXG4gIHNldE9wZW46IGZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlcjtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=