webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: description, siteTitle, profileName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileName", function() { return profileName; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Head */ "./components/Head.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Footer */ "./components/Footer.js");

var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-gh-pages-example\\components\\Container.js";

/**
 * Container
 * @description Main Container for the App
 * @author dtro-devuk @github:dtro-devuk.io
 */




const description = 'This example configures a simple Next10 and Tailwind CSS app with routing for deployment to GitHub Pages repository.';
const siteTitle = 'Next 10, Tailwind App deployed to GitHub pages example';
const profileName = 'dtro-devuk';

const Container = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "container",
    className: "bg-gray-300",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: siteTitle,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      caption: siteTitle,
      author: profileName,
      description: description,
      githubLink: githubLink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "main-content",
      role: "main",
      "aria-label": "main content area for the page",
      className: "flex-1 p-3 overflow-y-hidden justify-center bg-white",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      caption: siteTitle,
      author: profileName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

_c = Container;
/* harmony default export */ __webpack_exports__["default"] = (Container);
Container.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

var _c;

$RefreshReg$(_c, "Container");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb24iLCJzaXRlVGl0bGUiLCJwcm9maWxlTmFtZSIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiZ2l0aHViTGluayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQ3RCLHNIQURLO0FBRUEsTUFBTUMsU0FBUyxHQUFHLHdEQUFsQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQjs7QUFFUCxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDbEMsc0JBQ0U7QUFBSyxNQUFFLEVBQUMsV0FBUjtBQUFvQixhQUFTLEVBQUMsYUFBOUI7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFNLFdBQUssRUFBRUgsU0FBYjtBQUF3QixpQkFBVyxFQUFFRDtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsMERBQUQ7QUFDRSxhQUFPLEVBQUVDLFNBRFg7QUFFRSxZQUFNLEVBQUVDLFdBRlY7QUFHRSxpQkFBVyxFQUFFRixXQUhmO0FBSUUsZ0JBQVUsRUFBRUs7QUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBUUU7QUFDRSxRQUFFLEVBQUMsY0FETDtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0Usb0JBQVcsZ0NBSGI7QUFJRSxlQUFTLEVBQUMsc0RBSlo7QUFBQSxnQkFNR0Q7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJGLGVBZ0JFLHFFQUFDLDBEQUFEO0FBQVEsYUFBTyxFQUFFSCxTQUFqQjtBQUE0QixZQUFNLEVBQUVDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0JELENBckJEOztLQUFNQyxTO0FBdUJTQSx3RUFBZjtBQUVBQSxTQUFTLENBQUNHLFNBQVYsR0FBc0I7QUFDcEJGLFVBQVEsRUFBRUcsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURMLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjIyNmY1ODZmMjQwYTEzNmI3NDgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29udGFpbmVyXHJcbiAqIEBkZXNjcmlwdGlvbiBNYWluIENvbnRhaW5lciBmb3IgdGhlIEFwcFxyXG4gKiBAYXV0aG9yIGR0cm8tZGV2dWsgQGdpdGh1YjpkdHJvLWRldnVrLmlvXHJcbiAqL1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnQC9jb21wb25lbnRzL0hlYWQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ0AvY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uID1cclxuICAnVGhpcyBleGFtcGxlIGNvbmZpZ3VyZXMgYSBzaW1wbGUgTmV4dDEwIGFuZCBUYWlsd2luZCBDU1MgYXBwIHdpdGggcm91dGluZyBmb3IgZGVwbG95bWVudCB0byBHaXRIdWIgUGFnZXMgcmVwb3NpdG9yeS4nO1xyXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ05leHQgMTAsIFRhaWx3aW5kIEFwcCBkZXBsb3llZCB0byBHaXRIdWIgcGFnZXMgZXhhbXBsZSc7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZSA9ICdkdHJvLWRldnVrJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwXCI+XHJcbiAgICAgIDxIZWFkIHRpdGxlPXtzaXRlVGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNhcHRpb249e3NpdGVUaXRsZX1cclxuICAgICAgICBhdXRob3I9e3Byb2ZpbGVOYW1lfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICBnaXRodWJMaW5rPXtnaXRodWJMaW5rfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIGlkPVwibWFpbi1jb250ZW50XCJcclxuICAgICAgICByb2xlPVwibWFpblwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIm1haW4gY29udGVudCBhcmVhIGZvciB0aGUgcGFnZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHAtMyBvdmVyZmxvdy15LWhpZGRlbiBqdXN0aWZ5LWNlbnRlciBiZy13aGl0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciBjYXB0aW9uPXtzaXRlVGl0bGV9IGF1dGhvcj17cHJvZmlsZU5hbWV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==