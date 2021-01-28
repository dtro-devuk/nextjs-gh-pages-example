webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_hooks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/hooks.js */ "./lib/hooks.js");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Avatar */ "./components/Avatar.js");
/* harmony import */ var _components_Hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Hamburger */ "./components/Hamburger.js");
/* harmony import */ var _components_HamburgerMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/HamburgerMenu */ "./components/HamburgerMenu.js");



var _jsxFileName = "D:\\WorkArea\\GitHub\\nextjs-gh-pages-example\\components\\Navbar.js",
    _s = $RefreshSig$();

/**
 * Navigation Menu Bar Component
 * @description Horizontal Vertically expanding Navigation Menu with animations
 * @author dtro-devuk @github:dtro-devuk.io
 */







/**
 * Main Navigation Menu Bar (Horizontal)
 */

const NavBar = ({
  author
}) => {
  _s();

  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const node = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  const menuId = 'mobile-menu';
  Object(_lib_hooks_js__WEBPACK_IMPORTED_MODULE_4__["useOnMouseClickOutsideNav"])(node, () => setOpen(false));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: node,
      className: "",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        id: "navbar",
        role: "navigation",
        className: "w-full\r bg-gray-800 flex flex-wrap items-center justify-between \r mt-0 md:py-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "md:p-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "inline-flex items-center w-auto cursor-pointer focus:outline-none",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
                className: "h-12 w-12 rounded-full md:mr-2 md:h-20 md:w-20\r border-4 border-white-200 \r transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "p-3 font-bold italic\r text-xl md:text-3xl lg:text-4xl\r text-blue-400",
                children: ["@", author || '']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "inline-flex md:my-2 md:pt-2 ml-auto md:w-auto",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hamburger__WEBPACK_IMPORTED_MODULE_6__["default"], {
              open: open,
              setOpen: setOpen,
              "aria-controls": menuId
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HamburgerMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          open: open,
          setOpen: setOpen,
          id: menuId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

_s(NavBar, "eo+ALe2yXdMitpGGRHVPwEDJmcQ=", false, function () {
  return [_lib_hooks_js__WEBPACK_IMPORTED_MODULE_4__["useOnMouseClickOutsideNav"]];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);
NavBar.propTypes = {
  author: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

var _c;

$RefreshReg$(_c, "NavBar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwiYXV0aG9yIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIm5vZGUiLCJ1c2VSZWYiLCJtZW51SWQiLCJ1c2VPbk1vdXNlQ2xpY2tPdXRzaWRlTmF2IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsYUFBZjtBQUVBQyxpRkFBeUIsQ0FBQ0gsSUFBRCxFQUFPLE1BQU1GLE9BQU8sQ0FBQyxLQUFELENBQXBCLENBQXpCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBRUUsSUFBVjtBQUFnQixlQUFTLEVBQUMsRUFBMUI7QUFBQSw2QkFDRTtBQUNFLFVBQUUsRUFBQyxRQURMO0FBRUUsWUFBSSxFQUFDLFlBRlA7QUFHRSxpQkFBUyxFQUFDLGtGQUhaO0FBQUEsZ0NBT0U7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxrQ0FDRSxxRUFBQyxnREFBRDtBQUFVLGdCQUFJLEVBQUMsR0FBZjtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyxtRUFBYjtBQUFBLHNDQUNFLHFFQUFDLDBEQUFEO0FBQ0UseUJBQVMsRUFBQztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFPRTtBQUNFLHlCQUFTLEVBQUMsd0VBRFo7QUFBQSxnQ0FLSUosTUFBTSxJQUFJLEVBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFtQkU7QUFBSyxxQkFBUyxFQUFDLCtDQUFmO0FBQUEsbUNBQ0UscUVBQUMsNkRBQUQ7QUFBVyxrQkFBSSxFQUFFQyxJQUFqQjtBQUF1QixxQkFBTyxFQUFFQyxPQUFoQztBQUF5QywrQkFBZUk7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQThCRSxxRUFBQyxpRUFBRDtBQUFlLGNBQUksRUFBRUwsSUFBckI7QUFBMkIsaUJBQU8sRUFBRUMsT0FBcEM7QUFBNkMsWUFBRSxFQUFFSTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFzQ0QsQ0E3Q0Q7O0dBQU1QLE07VUFLSlEsdUU7OztLQUxJUixNO0FBK0NTQSxxRUFBZjtBQUVBQSxNQUFNLENBQUNTLFNBQVAsR0FBbUI7QUFDakJSLFFBQU0sRUFBRVMsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEUixDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wOTk5Nzk0MzlkNGQxY2RiY2I5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIE5hdmlnYXRpb24gTWVudSBCYXIgQ29tcG9uZW50XHJcbiAqIEBkZXNjcmlwdGlvbiBIb3Jpem9udGFsIFZlcnRpY2FsbHkgZXhwYW5kaW5nIE5hdmlnYXRpb24gTWVudSB3aXRoIGFuaW1hdGlvbnNcclxuICogQGF1dGhvciBkdHJvLWRldnVrIEBnaXRodWI6ZHRyby1kZXZ1ay5pb1xyXG4gKi9cclxuXHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlT25Nb3VzZUNsaWNrT3V0c2lkZU5hdiB9IGZyb20gJ0AvbGliL2hvb2tzLmpzJztcclxuXHJcbmltcG9ydCBBdmF0YXIgZnJvbSAnQC9jb21wb25lbnRzL0F2YXRhcic7XHJcbmltcG9ydCBIYW1CdXJnZXIgZnJvbSAnQC9jb21wb25lbnRzL0hhbWJ1cmdlcic7XHJcbmltcG9ydCBIYW1CdXJnZXJNZW51IGZyb20gJ0AvY29tcG9uZW50cy9IYW1idXJnZXJNZW51JztcclxuXHJcbi8qKlxyXG4gKiBNYWluIE5hdmlnYXRpb24gTWVudSBCYXIgKEhvcml6b250YWwpXHJcbiAqL1xyXG5jb25zdCBOYXZCYXIgPSAoeyBhdXRob3IgfSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBub2RlID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG1lbnVJZCA9ICdtb2JpbGUtbWVudSc7XHJcblxyXG4gIHVzZU9uTW91c2VDbGlja091dHNpZGVOYXYobm9kZSwgKCkgPT4gc2V0T3BlbihmYWxzZSkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiByZWY9e25vZGV9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxuYXZcclxuICAgICAgICAgIGlkPVwibmF2YmFyXCJcclxuICAgICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIGJnLWdyYXktODAwIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gXHJcbiAgICAgICAgICAgICAgICAgICAgbXQtMCBtZDpweS0yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnAtMlwiPlxyXG4gICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgdy1hdXRvIGN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMTIgcm91bmRlZC1mdWxsIG1kOm1yLTIgbWQ6aC0yMCBtZDp3LTIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItNCBib3JkZXItd2hpdGUtMjAwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEyNSBob3ZlcjpiZy1vcGFjaXR5LTUwIHRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGZvbnQtYm9sZCBpdGFsaWNcclxuICAgICAgICAgICAgICB0ZXh0LXhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsXHJcbiAgICAgICAgICAgICAgdGV4dC1ibHVlLTQwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEB7YXV0aG9yIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbWQ6bXktMiBtZDpwdC0yIG1sLWF1dG8gbWQ6dy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgPEhhbUJ1cmdlciBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSBhcmlhLWNvbnRyb2xzPXttZW51SWR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SGFtQnVyZ2VyTWVudSBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSBpZD17bWVudUlkfSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGF1dGhvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9