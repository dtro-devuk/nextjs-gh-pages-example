webpackHotUpdate_N_E("pages/index",{

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
  const githubLink = 'https://www.github.com/dtro-devuk';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "container",
    className: "bg-gray-300",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: siteTitle,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      caption: siteTitle,
      author: profileName,
      description: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      id: "main-content",
      role: "main",
      "aria-label": "main content area for the page",
      className: "flex-1 p-3 overflow-y-hidden justify-center bg-white",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      caption: siteTitle,
      author: profileName,
      githubLink: githubLink
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb24iLCJzaXRlVGl0bGUiLCJwcm9maWxlTmFtZSIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiZ2l0aHViTGluayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQ3RCLHNIQURLO0FBRUEsTUFBTUMsU0FBUyxHQUFHLHdEQUFsQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQjs7QUFFUCxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDbEMsUUFBTUMsVUFBVSxHQUFHLG1DQUFuQjtBQUVBLHNCQUNFO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBb0IsYUFBUyxFQUFDLGFBQTlCO0FBQUEsNEJBQ0UscUVBQUMsd0RBQUQ7QUFBTSxXQUFLLEVBQUVKLFNBQWI7QUFBd0IsaUJBQVcsRUFBRUQ7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLDBEQUFEO0FBQVEsYUFBTyxFQUFFQyxTQUFqQjtBQUE0QixZQUFNLEVBQUVDLFdBQXBDO0FBQWlELGlCQUFXLEVBQUVGO0FBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUNFLFFBQUUsRUFBQyxjQURMO0FBRUUsVUFBSSxFQUFDLE1BRlA7QUFHRSxvQkFBVyxnQ0FIYjtBQUlFLGVBQVMsRUFBQyxzREFKWjtBQUFBLGdCQU1HSTtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFXRSxxRUFBQywwREFBRDtBQUFRLGFBQU8sRUFBRUgsU0FBakI7QUFBNEIsWUFBTSxFQUFFQyxXQUFwQztBQUFpRCxnQkFBVSxFQUFFRztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FsQkQ7O0tBQU1GLFM7QUFvQlNBLHdFQUFmO0FBRUFBLFNBQVMsQ0FBQ0csU0FBVixHQUFzQjtBQUNwQkYsVUFBUSxFQUFFRyxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREwsQ0FBdEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2JmYzZmNDc5M2FjY2YzZjEwN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb250YWluZXJcclxuICogQGRlc2NyaXB0aW9uIE1haW4gQ29udGFpbmVyIGZvciB0aGUgQXBwXHJcbiAqIEBhdXRob3IgZHRyby1kZXZ1ayBAZ2l0aHViOmR0cm8tZGV2dWsuaW9cclxuICovXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICdAL2NvbXBvbmVudHMvSGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb24gPVxyXG4gICdUaGlzIGV4YW1wbGUgY29uZmlndXJlcyBhIHNpbXBsZSBOZXh0MTAgYW5kIFRhaWx3aW5kIENTUyBhcHAgd2l0aCByb3V0aW5nIGZvciBkZXBsb3ltZW50IHRvIEdpdEh1YiBQYWdlcyByZXBvc2l0b3J5Lic7XHJcbmV4cG9ydCBjb25zdCBzaXRlVGl0bGUgPSAnTmV4dCAxMCwgVGFpbHdpbmQgQXBwIGRlcGxveWVkIHRvIEdpdEh1YiBwYWdlcyBleGFtcGxlJztcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gJ2R0cm8tZGV2dWsnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9kdHJvLWRldnVrJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTMwMFwiPlxyXG4gICAgICA8SGVhZCB0aXRsZT17c2l0ZVRpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDxIZWFkZXIgY2FwdGlvbj17c2l0ZVRpdGxlfSBhdXRob3I9e3Byb2ZpbGVOYW1lfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgaWQ9XCJtYWluLWNvbnRlbnRcIlxyXG4gICAgICAgIHJvbGU9XCJtYWluXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwibWFpbiBjb250ZW50IGFyZWEgZm9yIHRoZSBwYWdlXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgcC0zIG92ZXJmbG93LXktaGlkZGVuIGp1c3RpZnktY2VudGVyIGJnLXdoaXRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIGNhcHRpb249e3NpdGVUaXRsZX0gYXV0aG9yPXtwcm9maWxlTmFtZX0gZ2l0aHViTGluaz17Z2l0aHViTGlua30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XHJcblxyXG5Db250YWluZXIucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9