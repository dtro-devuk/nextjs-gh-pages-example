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
  const githubLink = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOlsiZGVzY3JpcHRpb24iLCJzaXRlVGl0bGUiLCJwcm9maWxlTmFtZSIsIkNvbnRhaW5lciIsImNoaWxkcmVuIiwiZ2l0aHViTGluayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQ3RCLHNIQURLO0FBRUEsTUFBTUMsU0FBUyxHQUFHLHdEQUFsQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQjs7QUFFUCxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDbEMsUUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBRUEsc0JBQ0U7QUFBSyxNQUFFLEVBQUMsV0FBUjtBQUFvQixhQUFTLEVBQUMsYUFBOUI7QUFBQSw0QkFDRSxxRUFBQyx3REFBRDtBQUFNLFdBQUssRUFBRUosU0FBYjtBQUF3QixpQkFBVyxFQUFFRDtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBUSxhQUFPLEVBQUVDLFNBQWpCO0FBQTRCLFlBQU0sRUFBRUMsV0FBcEM7QUFBaUQsaUJBQVcsRUFBRUY7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQ0UsUUFBRSxFQUFDLGNBREw7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLG9CQUFXLGdDQUhiO0FBSUUsZUFBUyxFQUFDLHNEQUpaO0FBQUEsZ0JBTUdJO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQVdFLHFFQUFDLDBEQUFEO0FBQVEsYUFBTyxFQUFFSCxTQUFqQjtBQUE0QixZQUFNLEVBQUVDLFdBQXBDO0FBQWlELGdCQUFVLEVBQUVHO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxDQWxCRDs7S0FBTUYsUztBQW9CU0Esd0VBQWY7QUFFQUEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCO0FBQ3BCRixVQUFRLEVBQUVHLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZDRjZWFmZTA3OWIxOTlmZDEzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbnRhaW5lclxyXG4gKiBAZGVzY3JpcHRpb24gTWFpbiBDb250YWluZXIgZm9yIHRoZSBBcHBcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbiA9XHJcbiAgJ1RoaXMgZXhhbXBsZSBjb25maWd1cmVzIGEgc2ltcGxlIE5leHQxMCBhbmQgVGFpbHdpbmQgQ1NTIGFwcCB3aXRoIHJvdXRpbmcgZm9yIGRlcGxveW1lbnQgdG8gR2l0SHViIFBhZ2VzIHJlcG9zaXRvcnkuJztcclxuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdOZXh0IDEwLCBUYWlsd2luZCBBcHAgZGVwbG95ZWQgdG8gR2l0SHViIHBhZ2VzIGV4YW1wbGUnO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSAnZHRyby1kZXZ1ayc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgZ2l0aHViTGluayA9ICcnO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwXCI+XHJcbiAgICAgIDxIZWFkIHRpdGxlPXtzaXRlVGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPEhlYWRlciBjYXB0aW9uPXtzaXRlVGl0bGV9IGF1dGhvcj17cHJvZmlsZU5hbWV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPG1haW5cclxuICAgICAgICBpZD1cIm1haW4tY29udGVudFwiXHJcbiAgICAgICAgcm9sZT1cIm1haW5cIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJtYWluIGNvbnRlbnQgYXJlYSBmb3IgdGhlIHBhZ2VcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBwLTMgb3ZlcmZsb3cteS1oaWRkZW4ganVzdGlmeS1jZW50ZXIgYmctd2hpdGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgY2FwdGlvbj17c2l0ZVRpdGxlfSBhdXRob3I9e3Byb2ZpbGVOYW1lfSBnaXRodWJMaW5rPXtnaXRodWJMaW5rfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcclxuXHJcbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=