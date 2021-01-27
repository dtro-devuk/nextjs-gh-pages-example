webpackHotUpdate_N_E("pages/blog",{

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
      description: description
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
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      caption: siteTitle,
      author: profileName
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb24iLCJzaXRlVGl0bGUiLCJwcm9maWxlTmFtZSIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FDdEIsc0hBREs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsd0RBQWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLFlBQXBCOztBQUVQLE1BQU1DLFNBQVMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNsQyxzQkFDRTtBQUFLLE1BQUUsRUFBQyxXQUFSO0FBQW9CLGFBQVMsRUFBQyxhQUE5QjtBQUFBLDRCQUNFLHFFQUFDLHdEQUFEO0FBQU0sV0FBSyxFQUFFSCxTQUFiO0FBQXdCLGlCQUFXLEVBQUVEO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQywwREFBRDtBQUFRLGFBQU8sRUFBRUMsU0FBakI7QUFBNEIsWUFBTSxFQUFFQyxXQUFwQztBQUFpRCxpQkFBVyxFQUFFRjtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFDRSxRQUFFLEVBQUMsY0FETDtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0Usb0JBQVcsZ0NBSGI7QUFJRSxlQUFTLEVBQUMsc0RBSlo7QUFBQSxnQkFNR0k7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBV0UscUVBQUMsMERBQUQ7QUFBUSxhQUFPLEVBQUVILFNBQWpCO0FBQTRCLFlBQU0sRUFBRUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWVELENBaEJEOztLQUFNQyxTO0FBa0JTQSx3RUFBZjtBQUVBQSxTQUFTLENBQUNFLFNBQVYsR0FBc0I7QUFDcEJELFVBQVEsRUFBRUUsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURMLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuZWY1NzViODgwZTdjYjIxNGEyNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb250YWluZXJcclxuICogQGRlc2NyaXB0aW9uIE1haW4gQ29udGFpbmVyIGZvciB0aGUgQXBwXHJcbiAqIEBhdXRob3IgZHRyby1kZXZ1ayBAZ2l0aHViOmR0cm8tZGV2dWsuaW9cclxuICovXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICdAL2NvbXBvbmVudHMvSGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb24gPVxyXG4gICdUaGlzIGV4YW1wbGUgY29uZmlndXJlcyBhIHNpbXBsZSBOZXh0MTAgYW5kIFRhaWx3aW5kIENTUyBhcHAgd2l0aCByb3V0aW5nIGZvciBkZXBsb3ltZW50IHRvIEdpdEh1YiBQYWdlcyByZXBvc2l0b3J5Lic7XHJcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnTmV4dCAxMCwgVGFpbHdpbmQgQXBwIGRlcGxveWVkIHRvIEdpdEh1YiBwYWdlcyBleGFtcGxlJztcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gJ2R0cm8tZGV2dWsnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiY29udGFpbmVyXCIgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDBcIj5cclxuICAgICAgPEhlYWQgdGl0bGU9e3NpdGVUaXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8SGVhZGVyIGNhcHRpb249e3NpdGVUaXRsZX0gYXV0aG9yPXtwcm9maWxlTmFtZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIGlkPVwibWFpbi1jb250ZW50XCJcclxuICAgICAgICByb2xlPVwibWFpblwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIm1haW4gY29udGVudCBhcmVhIGZvciB0aGUgcGFnZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHAtMyBvdmVyZmxvdy15LWhpZGRlbiBqdXN0aWZ5LWNlbnRlciBiZy13aGl0ZVwiXHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciBjYXB0aW9uPXtzaXRlVGl0bGV9IGF1dGhvcj17cHJvZmlsZU5hbWV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xyXG5cclxuQ29udGFpbmVyLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==