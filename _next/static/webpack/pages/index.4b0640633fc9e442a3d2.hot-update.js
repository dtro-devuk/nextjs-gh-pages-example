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
    className: "block mt-2 w-full lg:inline-flex lg:flex-grow lg:w-auto \n    ".concat(!isHidden ? 'hidden' : ''),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "lg:translate-y-0\n            lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full \n            lg:items-center items-start flex flex-col lg:h-auto\n            transition ".concat(isOpen ? 'translate-y-0 ease-out duration-1000 transform ' : '-translate-y-full ease-in duration-1000 transform '),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/blog",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "block w-full px-3 py-2 rounded md:text-lg\n          text-yellow-500 hover:text-white lg:hover:bg-yellow-500 \n          active:text-white focus:outline-none\n          transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
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
          className: "block mt-1 w-full px-3 py-2 rounded md:text-lg\n                text-yellow-400 hover:text-white lg:hover:bg-yellow-500 \n                active:text-white focus:outline-none \n                transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "https://www.github.com/dtro-devuk",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "block mt-1 w-full px-3 py-2 rounded md:text-lg\n                text-yellow-500 hover:text-white lg:hover:bg-yellow-500 \n                active:text-yellow-600 focus:outline-none\"\n                transform ".concat('hover:scale-x-90 transition ease-in-out duration-500'),
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IYW1idXJnZXJNZW51LmpzIl0sIm5hbWVzIjpbIkhhbWJ1cmdlck1lbnUiLCJvcGVuIiwicHJvcHMiLCJpc0hpZGRlbiIsImlzT3BlbiIsInByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxVQUF3QjtBQUFBLE1BQXZCO0FBQUVDO0FBQUYsR0FBdUI7QUFBQSxNQUFaQyxLQUFZOztBQUM1QyxRQUFNQyxRQUFRLEdBQUdGLElBQUksR0FBRyxJQUFILEdBQVUsS0FBL0I7QUFDQSxRQUFNRyxNQUFNLEdBQUdILElBQWY7QUFFQSxzQkFDRTtBQUNFLG1CQUFhLENBQUNFLFFBRGhCO0FBRUUsYUFBUywwRUFDVCxDQUFDQSxRQUFELEdBQVksUUFBWixHQUF1QixFQURkLENBRlg7QUFBQSwyQkFLRTtBQUNFLGVBQVMsMkxBSUhDLE1BQU0sR0FDRixpREFERSxHQUVGLG9EQU5ELENBRFg7QUFBQSw4QkFVRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxPQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUywrTEFHQyxzREFIRCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixlQXFCRSxxRUFBQyxnREFBRDtBQUFVLFlBQUksRUFBQyxRQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyx1TkFHTyxzREFIUCxDQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFyQkYsZUFnQ0UscUVBQUMsZ0RBQUQ7QUFBVSxZQUFJLEVBQUMsbUNBQWY7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLDZOQUdPLHNEQUhQLENBRFg7QUFLRSxnQkFBTSxFQUFDLFFBTFQ7QUFNRSxhQUFHLEVBQUMscUJBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxREQsQ0F6REQ7O0tBQU1KLGE7QUEyRE5BLGFBQWEsQ0FBQ0ssU0FBZCxHQUEwQjtBQUN4QkosTUFBSSxFQUFFSywrQ0FBSSxDQUFDQztBQURhLENBQTFCO0FBSWVQLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRiMDY0MDYzM2ZjOWU0NDJhM2QyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSGFtYnVyZ2VyIE1lbnVcclxuICogQGRlc2NyaXB0aW9uIE9wZW5zIGFuZCBDbG9zZSBiYXNlZCBvbiBwcm9wZXJ0aWVzIHBhc3NlZCBmcm9tIHRoZSBhc3NvY2lhdGVkIEhhbWJ1cmdlciBUb2dnbGUgQnV0dG9uLCBzZWUgSGFtYnVyZ2VyLmpzXHJcbiAqIEBhdXRob3IgZHRyby1kZXZ1ayBAZ2l0aHViOmR0cm8tZGV2dWsuaW9cclxuICovXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IGJvb2wgfSBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IEhhbWJ1cmdlck1lbnUgPSAoeyBvcGVuLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgaXNIaWRkZW4gPSBvcGVuID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIGNvbnN0IGlzT3BlbiA9IG9wZW47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGFyaWEtaGlkZGVuPXshaXNIaWRkZW59XHJcbiAgICAgIGNsYXNzTmFtZT17YGJsb2NrIG10LTIgdy1mdWxsIGxnOmlubGluZS1mbGV4IGxnOmZsZXgtZ3JvdyBsZzp3LWF1dG8gXHJcbiAgICAkeyFpc0hpZGRlbiA/ICdoaWRkZW4nIDogJyd9YH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGxnOnRyYW5zbGF0ZS15LTBcclxuICAgICAgICAgICAgbGc6aW5saW5lLWZsZXggbGc6ZmxleC1yb3cgbGc6bWwtYXV0byBsZzp3LWF1dG8gdy1mdWxsIFxyXG4gICAgICAgICAgICBsZzppdGVtcy1jZW50ZXIgaXRlbXMtc3RhcnQgZmxleCBmbGV4LWNvbCBsZzpoLWF1dG9cclxuICAgICAgICAgICAgdHJhbnNpdGlvbiAke1xyXG4gICAgICAgICAgICAgIGlzT3BlblxyXG4gICAgICAgICAgICAgICAgPyAndHJhbnNsYXRlLXktMCBlYXNlLW91dCBkdXJhdGlvbi0xMDAwIHRyYW5zZm9ybSAnXHJcbiAgICAgICAgICAgICAgICA6ICctdHJhbnNsYXRlLXktZnVsbCBlYXNlLWluIGR1cmF0aW9uLTEwMDAgdHJhbnNmb3JtICdcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgID5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9ibG9nXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayB3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQgbWQ6dGV4dC1sZ1xyXG4gICAgICAgICAgdGV4dC15ZWxsb3ctNTAwIGhvdmVyOnRleHQtd2hpdGUgbGc6aG92ZXI6YmcteWVsbG93LTUwMCBcclxuICAgICAgICAgIGFjdGl2ZTp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVxyXG4gICAgICAgICAgdHJhbnNmb3JtICR7J2hvdmVyOnNjYWxlLXgtOTAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgbXQtMSB3LWZ1bGwgcHgtMyBweS0yIHJvdW5kZWQgbWQ6dGV4dC1sZ1xyXG4gICAgICAgICAgICAgICAgdGV4dC15ZWxsb3ctNDAwIGhvdmVyOnRleHQtd2hpdGUgbGc6aG92ZXI6YmcteWVsbG93LTUwMCBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAkeydob3ZlcjpzY2FsZS14LTkwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwJ31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcblxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9kdHJvLWRldnVrXCI+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BibG9jayBtdC0xIHctZnVsbCBweC0zIHB5LTIgcm91bmRlZCBtZDp0ZXh0LWxnXHJcbiAgICAgICAgICAgICAgICB0ZXh0LXllbGxvdy01MDAgaG92ZXI6dGV4dC13aGl0ZSBsZzpob3ZlcjpiZy15ZWxsb3ctNTAwIFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOnRleHQteWVsbG93LTYwMCBmb2N1czpvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtICR7J2hvdmVyOnNjYWxlLXgtOTAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi01MDAnfWB9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBHaXRodWJcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5IYW1idXJnZXJNZW51LnByb3BUeXBlcyA9IHtcclxuICBvcGVuOiBib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXJNZW51O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9