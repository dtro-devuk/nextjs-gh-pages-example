webpackHotUpdate_N_E("pages/blog",{

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
    className: "block mt-2 w-full lg:inline-flex lg:flex-grow lg:w-auto \n    ".concat(!isHidden ? 'hidden' : ''),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lg:translate-y-0\n            lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full \n            lg:items-center items-start flex flex-col lg:h-auto\n            transition ".concat(isOpen ? 'translate-y-0 ease-out duration-1000 transform ' : '-translate-y-full ease-in duration-1000 transform '),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/blog",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "block w-full\n             md:px-3 md:py-2 rounded md:text-lg\n            text-yellow-500 hover:text-white lg:hover:bg-yellow-500 \n            active:text-white focus:outline-none\n            transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
          children: "Blog"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/about",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "block mt-1 w-full rounded \n                md:px-3 md:py-2 md:text-lg\n                text-yellow-400 hover:text-white \n                lg:hover:bg-yellow-500 \n                active:text-white focus:outline-none \n                transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
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
          className: "block mt-1 w-full \n                md:px-3 md:py-2 rounded md:text-lg\n                text-yellow-500 hover:text-white lg:hover:bg-yellow-500 \n                active:text-yellow-600 focus:outline-none\"\n                transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IYW1idXJnZXJNZW51LmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlck1lbnUiLCJvcGVuIiwicHJvcHMiLCJpc0hpZGRlbiIsImlzT3BlbiIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxVQUF3QjtBQUFBLE1BQXZCO0FBQUVDO0FBQUYsR0FBdUI7QUFBQSxNQUFaQyxLQUFZOztBQUM1QyxRQUFNQyxRQUFRLEdBQUdGLElBQUksR0FBRyxJQUFILEdBQVUsS0FBL0I7QUFDQSxRQUFNRyxNQUFNLEdBQUdILElBQWY7QUFFQSxzQkFDRTtBQUNFLG1CQUFhLENBQUNFLFFBRGhCO0FBRUUsYUFBUywwRUFDVCxDQUFDQSxRQUFELEdBQVksUUFBWixHQUF1QixFQURkLENBRlg7QUFBQSwyQkFLRTtBQUNFLGVBQVMsMkxBSUhDLE1BQU0sR0FDRixpREFERSxHQUVGLG9EQU5ELENBRFg7QUFBQSw4QkFVRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxPQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyx5TkFJRyxzREFKSCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQXNCRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxpUUFLTyxzREFMUCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF0QkYsZUFtQ0UscUVBQUMsZ0RBQUQ7QUFBVSxZQUFJLEVBQUMsbUNBQWY7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLHFQQUlPLHNEQUpQLENBRFg7QUFNRSxnQkFBTSxFQUFDLFFBTlQ7QUFPRSxhQUFHLEVBQUMscUJBUE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5REQsQ0E3REQ7O0tBQU1KLGE7QUErRE5BLGFBQWEsQ0FBQ0ssU0FBZCxHQUEwQjtBQUN4QkosTUFBSSxFQUFFSywrQ0FBSSxDQUFDQztBQURhLENBQTFCO0FBSWVQLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuMjMyOWUwMDVjNmJlNDcwMGUxMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBIYW1idXJnZXIgTWVudVxyXG4gKiBAZGVzY3JpcHRpb24gT3BlbnMgYW5kIENsb3NlIGJhc2VkIG9uIHByb3BlcnRpZXMgcGFzc2VkIGZyb20gdGhlIGFzc29jaWF0ZWQgSGFtYnVyZ2VyIFRvZ2dsZSBCdXR0b24sIHNlZSBIYW1idXJnZXIuanNcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuY29uc3QgSGFtYnVyZ2VyTWVudSA9ICh7IG9wZW4sIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBpc0hpZGRlbiA9IG9wZW4gPyB0cnVlIDogZmFsc2U7XHJcbiAgY29uc3QgaXNPcGVuID0gb3BlbjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgYXJpYS1oaWRkZW49eyFpc0hpZGRlbn1cclxuICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgbXQtMiB3LWZ1bGwgbGc6aW5saW5lLWZsZXggbGc6ZmxleC1ncm93IGxnOnctYXV0byBcclxuICAgICR7IWlzSGlkZGVuID8gJ2hpZGRlbicgOiAnJ31gfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgbGc6dHJhbnNsYXRlLXktMFxyXG4gICAgICAgICAgICBsZzppbmxpbmUtZmxleCBsZzpmbGV4LXJvdyBsZzptbC1hdXRvIGxnOnctYXV0byB3LWZ1bGwgXHJcbiAgICAgICAgICAgIGxnOml0ZW1zLWNlbnRlciBpdGVtcy1zdGFydCBmbGV4IGZsZXgtY29sIGxnOmgtYXV0b1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uICR7XHJcbiAgICAgICAgICAgICAgaXNPcGVuXHJcbiAgICAgICAgICAgICAgICA/ICd0cmFuc2xhdGUteS0wIGVhc2Utb3V0IGR1cmF0aW9uLTEwMDAgdHJhbnNmb3JtICdcclxuICAgICAgICAgICAgICAgIDogJy10cmFuc2xhdGUteS1mdWxsIGVhc2UtaW4gZHVyYXRpb24tMTAwMCB0cmFuc2Zvcm0gJ1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgPlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJsb2NrIHctZnVsbFxyXG4gICAgICAgICAgICAgbWQ6cHgtMyBtZDpweS0yIHJvdW5kZWQgbWQ6dGV4dC1sZ1xyXG4gICAgICAgICAgICB0ZXh0LXllbGxvdy01MDAgaG92ZXI6dGV4dC13aGl0ZSBsZzpob3ZlcjpiZy15ZWxsb3ctNTAwIFxyXG4gICAgICAgICAgICBhY3RpdmU6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcclxuICAgICAgICAgICAgdHJhbnNmb3JtICR7J2hvdmVyOnNjYWxlLXgtOTAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgbXQtMSB3LWZ1bGwgcm91bmRlZCBcclxuICAgICAgICAgICAgICAgIG1kOnB4LTMgbWQ6cHktMiBtZDp0ZXh0LWxnXHJcbiAgICAgICAgICAgICAgICB0ZXh0LXllbGxvdy00MDAgaG92ZXI6dGV4dC13aGl0ZSBcclxuICAgICAgICAgICAgICAgIGxnOmhvdmVyOmJnLXllbGxvdy01MDAgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmU6dGV4dC13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmUgXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJHsnaG92ZXI6c2NhbGUteC05MCB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMCd9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vZHRyby1kZXZ1a1wiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgbXQtMSB3LWZ1bGwgXHJcbiAgICAgICAgICAgICAgICBtZDpweC0zIG1kOnB5LTIgcm91bmRlZCBtZDp0ZXh0LWxnXHJcbiAgICAgICAgICAgICAgICB0ZXh0LXllbGxvdy01MDAgaG92ZXI6dGV4dC13aGl0ZSBsZzpob3ZlcjpiZy15ZWxsb3ctNTAwIFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOnRleHQteWVsbG93LTYwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtICR7J2hvdmVyOnNjYWxlLXgtOTAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAnfWB9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHaXRodWJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IYW1idXJnZXJNZW51LnByb3BUeXBlcyA9IHtcclxuICBvcGVuOiBib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXJNZW51O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9