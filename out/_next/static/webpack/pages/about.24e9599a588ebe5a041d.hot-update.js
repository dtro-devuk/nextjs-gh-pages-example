webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-gh-pages-example\\components\\Footer.js";

/**
 * Site Footer Component
 * @description footer elements to be included here
 * @author dtro-devuk @github:dtro-devuk.io
 */


const Footer = ({
  caption,
  author,
  githubLink
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    id: "main-footer",
    role: "contentinfo",
    "aria-label": "main footer content info",
    className: "w-full p-3\r flex flex-col items-center text-center \r bg-gray-800 ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-white",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: " text-xl md:text-1xl lg:text-2xl p-3",
        children: caption || ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: " text-xl md:text-1xl lg:text-2xl p-3",
        children: ["Copyright ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          dangerouslySetInnerHTML: {
            __html: '&copy;'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: githubLink,
          className: " font-semibold\r text-yellow-600 dark:text-indigo-400 \r hover:text-yellow-200 dark:hover:text-pink-400",
          target: "_blank",
          rel: "noopener noreferrer",
          children: author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined), ' ', "2021"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);
Footer.propTypes = {
  caption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  githubLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwiY2FwdGlvbiIsImF1dGhvciIsImdpdGh1YkxpbmsiLCJfX2h0bWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUMsU0FBRjtBQUFXQyxRQUFYO0FBQW1CQztBQUFuQixDQUFELEtBQXFDO0FBQ2xELHNCQUNFO0FBQ0UsTUFBRSxFQUFDLGFBREw7QUFFRSxRQUFJLEVBQUMsYUFGUDtBQUdFLGtCQUFXLDBCQUhiO0FBSUUsYUFBUyxFQUFDLHFFQUpaO0FBQUEsMkJBUUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxzQ0FBYjtBQUFBLGtCQUFxREYsT0FBTyxJQUFJO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFHLGlCQUFTLEVBQUMsc0NBQWI7QUFBQSw4Q0FDWTtBQUFNLGlDQUF1QixFQUFFO0FBQUVHLGtCQUFNLEVBQUU7QUFBVjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURaLEVBQ3lFLEdBRHpFLGVBRUU7QUFDRSxjQUFJLEVBQUVELFVBRFI7QUFFRSxtQkFBUyxFQUFDLHlHQUZaO0FBS0UsZ0JBQU0sRUFBQyxRQUxUO0FBTUUsYUFBRyxFQUFDLHFCQU5OO0FBQUEsb0JBUUdEO0FBUkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixFQVdPLEdBWFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTRCRCxDQTdCRDs7S0FBTUYsTTtBQStCU0EscUVBQWY7QUFFQUEsTUFBTSxDQUFDSyxTQUFQLEdBQW1CO0FBQ2pCSixTQUFPLEVBQUVLLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRFQ7QUFFakJMLFlBQVUsRUFBRUcsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFGWixDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC4yNGU5NTk5YTU4OGViZTVhMDQxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFNpdGUgRm9vdGVyIENvbXBvbmVudFxyXG4gKiBAZGVzY3JpcHRpb24gZm9vdGVyIGVsZW1lbnRzIHRvIGJlIGluY2x1ZGVkIGhlcmVcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7IGNhcHRpb24sIGF1dGhvciwgZ2l0aHViTGluayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxmb290ZXJcclxuICAgICAgaWQ9XCJtYWluLWZvb3RlclwiXHJcbiAgICAgIHJvbGU9XCJjb250ZW50aW5mb1wiXHJcbiAgICAgIGFyaWEtbGFiZWw9XCJtYWluIGZvb3RlciBjb250ZW50IGluZm9cIlxyXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0zXHJcbiAgICAgICAgICAgIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIFxyXG4gICAgICAgICAgICBiZy1ncmF5LTgwMCBcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC14bCBtZDp0ZXh0LTF4bCBsZzp0ZXh0LTJ4bCBwLTNcIj57Y2FwdGlvbiB8fCAnJ308L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiIHRleHQteGwgbWQ6dGV4dC0xeGwgbGc6dGV4dC0yeGwgcC0zXCI+XHJcbiAgICAgICAgICBDb3B5cmlnaHQgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnJmNvcHk7JyB9fT48L3NwYW4+eycgJ31cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e2dpdGh1Ykxpbmt9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBmb250LXNlbWlib2xkXHJcbiAgICAgICAgICAgICAgICB0ZXh0LXllbGxvdy02MDAgZGFyazp0ZXh0LWluZGlnby00MDAgXHJcbiAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LXllbGxvdy0yMDAgZGFyazpob3Zlcjp0ZXh0LXBpbmstNDAwXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHthdXRob3J9XHJcbiAgICAgICAgICA8L2E+eycgJ31cclxuICAgICAgICAgIDIwMjFcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXHJcbkZvb3Rlci5wcm9wVHlwZXMgPSB7XHJcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIGdpdGh1Ykxpbms6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==