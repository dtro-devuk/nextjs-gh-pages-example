webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Navbar */ "./components/Navbar.js");

var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-gh-pages-example\\components\\Header.js";

/**
 * Header Component
 * @description Site Header including the Navigation menu
 * @author dtro-devuk @github:dtro-devuk.io
 */



const Header = ({
  caption,
  author,
  description
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    id: "header",
    role: "banner",
    className: "sticky-header \r bg-gray-800\r text-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      author: author
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-2 font-extrabold md:font-black\r text-lg md:text-3xl lg:text-4xl\r text-white mb-4",
      children: caption || ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bg-gray-300 w-full",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
        "aria-label": "Demo description",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "p- md:pt-10 font-bold text-gray-700 italic \r font-sans text-sm md:text-xl text-center",
          children: description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);
Header.propTypes = {
  caption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var _c;

$RefreshReg$(_c, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2FwdGlvbiIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFNBQUY7QUFBV0MsUUFBWDtBQUFtQkM7QUFBbkIsQ0FBRCxLQUFzQztBQUNuRCxzQkFDRTtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxhQUFTLEVBQUMsNENBSFo7QUFBQSw0QkFPRSxxRUFBQywwREFBRDtBQUFRLFlBQU0sRUFBRUQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVFFO0FBQ0UsZUFBUyxFQUFDLHNGQURaO0FBQUEsZ0JBS0dELE9BQU8sSUFBSTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFnQkU7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw2QkFDRTtBQUFTLHNCQUFXLGtCQUFwQjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyx3RkFEWjtBQUFBLG9CQUlHRTtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE2QkQsQ0E5QkQ7O0tBQU1ILE07QUFnQ1NBLHFFQUFmO0FBRUFBLE1BQU0sQ0FBQ0ksU0FBUCxHQUFtQjtBQUNqQkgsU0FBTyxFQUFFSSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURUO0FBRWpCTCxRQUFNLEVBQUVHLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRlI7QUFHakJKLGFBQVcsRUFBRUUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFIYixDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC40N2VmYTkwMDQxYmEwNzM1N2Q1YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEhlYWRlciBDb21wb25lbnRcclxuICogQGRlc2NyaXB0aW9uIFNpdGUgSGVhZGVyIGluY2x1ZGluZyB0aGUgTmF2aWdhdGlvbiBtZW51XHJcbiAqIEBhdXRob3IgZHRyby1kZXZ1ayBAZ2l0aHViOmR0cm8tZGV2dWsuaW9cclxuICovXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgTmF2QmFyIGZyb20gJ0AvY29tcG9uZW50cy9OYXZiYXInO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgY2FwdGlvbiwgYXV0aG9yLCBkZXNjcmlwdGlvbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXJcclxuICAgICAgaWQ9XCJoZWFkZXJcIlxyXG4gICAgICByb2xlPVwiYmFubmVyXCJcclxuICAgICAgY2xhc3NOYW1lPVwic3RpY2t5LWhlYWRlciBcclxuICAgICAgICAgICAgICBiZy1ncmF5LTgwMFxyXG4gICAgICAgICAgICAgIHRleHQtY2VudGVyXCJcclxuICAgID5cclxuICAgICAgPE5hdkJhciBhdXRob3I9e2F1dGhvcn0gLz5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInAtMiBmb250LWV4dHJhYm9sZCBtZDpmb250LWJsYWNrXHJcbiAgICAgICAgICAgICAgIHRleHQtbGcgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGxcclxuICAgICAgICAgICAgICAgdGV4dC13aGl0ZSBtYi00XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtjYXB0aW9uIHx8ICcnfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgdy1mdWxsXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gYXJpYS1sYWJlbD1cIkRlbW8gZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLSBtZDpwdC0xMCBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBpdGFsaWMgXHJcbiAgICAgICAgICAgIGZvbnQtc2FucyB0ZXh0LXNtIG1kOnRleHQteGwgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXV0aG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==