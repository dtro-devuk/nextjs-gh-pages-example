webpackHotUpdate_N_E("pages/blog",{

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
          className: "p-2 md:pt-10 font-bold text-gray-700 italic \r font-sans text-sm md:text-xl text-center",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiY2FwdGlvbiIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFNBQUY7QUFBV0MsUUFBWDtBQUFtQkM7QUFBbkIsQ0FBRCxLQUFzQztBQUNuRCxzQkFDRTtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxhQUFTLEVBQUMsNENBSFo7QUFBQSw0QkFPRSxxRUFBQywwREFBRDtBQUFRLFlBQU0sRUFBRUQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQVFFO0FBQ0UsZUFBUyxFQUFDLHNGQURaO0FBQUEsZ0JBS0dELE9BQU8sSUFBSTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFnQkU7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw2QkFDRTtBQUFTLHNCQUFXLGtCQUFwQjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyx5RkFEWjtBQUFBLG9CQUlHRTtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE2QkQsQ0E5QkQ7O0tBQU1ILE07QUFnQ1NBLHFFQUFmO0FBRUFBLE1BQU0sQ0FBQ0ksU0FBUCxHQUFtQjtBQUNqQkgsU0FBTyxFQUFFSSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURUO0FBRWpCTCxRQUFNLEVBQUVHLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRlI7QUFHakJKLGFBQVcsRUFBRUUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFIYixDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLjc4MTQyMzc4ZDJhOWE3OWI4NzMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSGVhZGVyIENvbXBvbmVudFxyXG4gKiBAZGVzY3JpcHRpb24gU2l0ZSBIZWFkZXIgaW5jbHVkaW5nIHRoZSBOYXZpZ2F0aW9uIG1lbnVcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnQC9jb21wb25lbnRzL05hdmJhcic7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoeyBjYXB0aW9uLCBhdXRob3IsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlclxyXG4gICAgICBpZD1cImhlYWRlclwiXHJcbiAgICAgIHJvbGU9XCJiYW5uZXJcIlxyXG4gICAgICBjbGFzc05hbWU9XCJzdGlja3ktaGVhZGVyIFxyXG4gICAgICAgICAgICAgIGJnLWdyYXktODAwXHJcbiAgICAgICAgICAgICAgdGV4dC1jZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8TmF2QmFyIGF1dGhvcj17YXV0aG9yfSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicC0yIGZvbnQtZXh0cmFib2xkIG1kOmZvbnQtYmxhY2tcclxuICAgICAgICAgICAgICAgdGV4dC1sZyBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFxyXG4gICAgICAgICAgICAgICB0ZXh0LXdoaXRlIG1iLTRcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NhcHRpb24gfHwgJyd9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMCB3LWZ1bGxcIj5cclxuICAgICAgICA8c2VjdGlvbiBhcmlhLWxhYmVsPVwiRGVtbyBkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBtZDpwdC0xMCBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCBpdGFsaWMgXHJcbiAgICAgICAgICAgIGZvbnQtc2FucyB0ZXh0LXNtIG1kOnRleHQteGwgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgYXV0aG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==