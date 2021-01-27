webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HamburgerMenu.js":
/*!*************************************!*\
  !*** ./components/HamburgerMenu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-gh-pages-example\\components\\HamburgerMenu.js";

/**
 * Hamburger Menu
 * @description Opens and Close based on properties passed from the associated Hamburger Toggle Button, see Hamburger.js
 * @author dtro-devuk @github:dtro-devuk.io
 */





const HamburgerMenu = (_ref) => {
  let {
    open
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["open"]);

  const isHidden = open ? true : false;
  const isOpen = open;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "aria-hidden": !isHidden,
    className: "mt-2 w-full lg:inline-flex lg:flex-grow lg:w-auto \n    ".concat(!isHidden ? 'hidden' : ''),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lg:translate-y-0\n            lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full \n            lg:items-center items-start flex flex-col lg:h-auto\n            transition ".concat(isOpen ? 'translate-y-0 ease-out duration-1000 transform ' : '-translate-y-full ease-in duration-1000 transform '),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/blog",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-lg\n          text-yellow-500 hover:text-white lg:hover:bg-yellow-500 \n          active:text-white focus:outline-none\n          transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/about",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-lg\n                text-yellow-400 hover:text-white lg:hover:bg-yellow-500 \n                active:text-white focus:outline-none \n                transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "https://www.github.com/dtro-devuk",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-lg\n                text-yellow-500 hover:text-white lg:hover:bg-yellow-500 \n                active:text-yellow-600 focus:outline-none\"\n                transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

_c = HamburgerMenu;
HamburgerMenu.propTypes = {
  open: prop_types__WEBPACK_IMPORTED_MODULE_4__["bool"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenu);

var _c;

$RefreshReg$(_c, "HamburgerMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IYW1idXJnZXJNZW51LmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlck1lbnUiLCJvcGVuIiwicHJvcHMiLCJpc0hpZGRlbiIsImlzT3BlbiIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBYSxHQUFHLFVBQXdCO0FBQUEsTUFBdkI7QUFBRUM7QUFBRixHQUF1QjtBQUFBLE1BQVpDLEtBQVk7O0FBQzVDLFFBQU1DLFFBQVEsR0FBR0YsSUFBSSxHQUFHLElBQUgsR0FBVSxLQUEvQjtBQUNBLFFBQU1HLE1BQU0sR0FBR0gsSUFBZjtBQUVBLHNCQUNFO0FBQ0UsbUJBQWEsQ0FBQ0UsUUFEaEI7QUFFRSxhQUFTLG9FQUNULENBQUNBLFFBQUQsR0FBWSxRQUFaLEdBQXVCLEVBRGQsQ0FGWDtBQUFBLDJCQUtFO0FBQ0UsZUFBUywyTEFJSEMsTUFBTSxHQUNGLGlEQURFLEdBRUYsb0RBTkQsQ0FEWDtBQUFBLDhCQVVFLHFFQUFDLGdEQUFEO0FBQVUsWUFBSSxFQUFDLE9BQWY7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLCtNQUdDLHNEQUhELENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGLGVBcUJFLHFFQUFDLGdEQUFEO0FBQVUsWUFBSSxFQUFDLFFBQWY7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLGtPQUdPLHNEQUhQLENBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXJCRixlQWdDRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxtQ0FBZjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsd09BR08sc0RBSFAsQ0FEWDtBQUtFLGdCQUFNLEVBQUMsUUFMVDtBQU1FLGFBQUcsRUFBQyxxQkFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFERCxDQXpERDs7S0FBTUosYTtBQTJETkEsYUFBYSxDQUFDSyxTQUFkLEdBQTBCO0FBQ3hCSixNQUFJLEVBQUVLLCtDQUFJLENBQUNDO0FBRGEsQ0FBMUI7QUFJZVAsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTk0YjU2NTkzYWE0OGFmNTgzNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBIYW1idXJnZXIgTWVudVxyXG4gKiBAZGVzY3JpcHRpb24gT3BlbnMgYW5kIENsb3NlIGJhc2VkIG9uIHByb3BlcnRpZXMgcGFzc2VkIGZyb20gdGhlIGFzc29jaWF0ZWQgSGFtYnVyZ2VyIFRvZ2dsZSBCdXR0b24sIHNlZSBIYW1idXJnZXIuanNcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IEhhbWJ1cmdlck1lbnUgPSAoeyBvcGVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgaXNIaWRkZW4gPSBvcGVuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIGNvbnN0IGlzT3BlbiA9IG9wZW47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGFyaWEtaGlkZGVuPXshaXNIaWRkZW59XHJcbiAgICAgIGNsYXNzTmFtZT17YG10LTIgdy1mdWxsIGxnOmlubGluZS1mbGV4IGxnOmZsZXgtZ3JvdyBsZzp3LWF1dG8gXHJcbiAgICAkeyFpc0hpZGRlbiA/ICdoaWRkZW4nIDogJyd9YH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGxnOnRyYW5zbGF0ZS15LTBcclxuICAgICAgICAgICAgbGc6aW5saW5lLWZsZXggbGc6ZmxleC1yb3cgbGc6bWwtYXV0byBsZzp3LWF1dG8gdy1mdWxsIFxyXG4gICAgICAgICAgICBsZzppdGVtcy1jZW50ZXIgaXRlbXMtc3RhcnQgZmxleCBmbGV4LWNvbCBsZzpoLWF1dG9cclxuICAgICAgICAgICAgdHJhbnNpdGlvbiAke1xyXG4gICAgICAgICAgICAgIGlzT3BlblxyXG4gICAgICAgICAgICAgICAgPyAndHJhbnNsYXRlLXktMCBlYXNlLW91dCBkdXJhdGlvbi0xMDAwIHRyYW5zZm9ybSAnXHJcbiAgICAgICAgICAgICAgICA6ICctdHJhbnNsYXRlLXktZnVsbCBlYXNlLWluIGR1cmF0aW9uLTEwMDAgdHJhbnNmb3JtICdcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTMgcHktMiByb3VuZGVkIHRleHQtbGdcclxuICAgICAgICAgIHRleHQteWVsbG93LTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGxnOmhvdmVyOmJnLXllbGxvdy01MDAgXHJcbiAgICAgICAgICBhY3RpdmU6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcclxuICAgICAgICAgIHRyYW5zZm9ybSAkeydob3ZlcjpzY2FsZS14LTkwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwJ31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuXHJcbiAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGxnOmlubGluZS1mbGV4IGxnOnctYXV0byB3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQgdGV4dC1sZ1xyXG4gICAgICAgICAgICAgICAgdGV4dC15ZWxsb3ctNDAwIGhvdmVyOnRleHQtd2hpdGUgbGc6aG92ZXI6YmcteWVsbG93LTUwMCBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkeydob3ZlcjpzY2FsZS14LTkwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwJ31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcblxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9kdHJvLWRldnVrXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BsZzppbmxpbmUtZmxleCBsZzp3LWF1dG8gdy1mdWxsIHB4LTMgcHktMiByb3VuZGVkIHRleHQtbGdcclxuICAgICAgICAgICAgICAgIHRleHQteWVsbG93LTUwMCBob3Zlcjp0ZXh0LXdoaXRlIGxnOmhvdmVyOmJnLXllbGxvdy01MDAgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6dGV4dC15ZWxsb3ctNjAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJHsnaG92ZXI6c2NhbGUteC05MCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMCd9YH1cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkhhbWJ1cmdlck1lbnUucHJvcFR5cGVzID0ge1xyXG4gIG9wZW46IGJvb2wuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlck1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=