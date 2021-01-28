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
        className: "w-full\r bg-gray-800 flex flex-wrap items-center justify-between \r mt-0 py-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "inline-flex items-center p-2 w-auto cursor-pointer focus:outline-none",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "h-12 w-12 rounded-full mr-2 md:h-20 md:w-20\r border-4 border-white-200 \r transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "p-3 font-bold italic\r text-xl md:text-3xl lg:text-4xl\r text-blue-400",
              children: ["@", author || '']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inline-flex my-2 pt-2 ml-auto sm:w-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hamburger__WEBPACK_IMPORTED_MODULE_6__["default"], {
            open: open,
            setOpen: setOpen,
            "aria-controls": menuId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HamburgerMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          open: open,
          setOpen: setOpen,
          id: menuId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwiYXV0aG9yIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIm5vZGUiLCJ1c2VSZWYiLCJtZW51SWQiLCJ1c2VPbk1vdXNlQ2xpY2tPdXRzaWRlTmF2IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsYUFBZjtBQUVBQyxpRkFBeUIsQ0FBQ0gsSUFBRCxFQUFPLE1BQU1GLE9BQU8sQ0FBQyxLQUFELENBQXBCLENBQXpCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBRUUsSUFBVjtBQUFnQixlQUFTLEVBQUMsRUFBMUI7QUFBQSw2QkFDRTtBQUNFLFVBQUUsRUFBQyxRQURMO0FBRUUsWUFBSSxFQUFDLFlBRlA7QUFHRSxpQkFBUyxFQUFDLCtFQUhaO0FBQUEsZ0NBT0UscUVBQUMsZ0RBQUQ7QUFBVSxjQUFJLEVBQUMsR0FBZjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQyx1RUFBYjtBQUFBLG9DQUNFLHFFQUFDLDBEQUFEO0FBQ0UsdUJBQVMsRUFBQztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFPRTtBQUNFLHVCQUFTLEVBQUMsd0VBRFo7QUFBQSw4QkFLSUosTUFBTSxJQUFJLEVBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUF5QkU7QUFBSyxtQkFBUyxFQUFDLHlDQUFmO0FBQUEsaUNBQ0UscUVBQUMsNkRBQUQ7QUFBVyxnQkFBSSxFQUFFQyxJQUFqQjtBQUF1QixtQkFBTyxFQUFFQyxPQUFoQztBQUF5Qyw2QkFBZUk7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJGLGVBNEJFLHFFQUFDLGlFQUFEO0FBQWUsY0FBSSxFQUFFTCxJQUFyQjtBQUEyQixpQkFBTyxFQUFFQyxPQUFwQztBQUE2QyxZQUFFLEVBQUVJO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW9DRCxDQTNDRDs7R0FBTVAsTTtVQUtKUSx1RTs7O0tBTElSLE07QUE2Q1NBLHFFQUFmO0FBRUFBLE1BQU0sQ0FBQ1MsU0FBUCxHQUFtQjtBQUNqQlIsUUFBTSxFQUFFUyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0ZmQzZGI1NjIwZjIxYzE4MjE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTmF2aWdhdGlvbiBNZW51IEJhciBDb21wb25lbnRcclxuICogQGRlc2NyaXB0aW9uIEhvcml6b250YWwgVmVydGljYWxseSBleHBhbmRpbmcgTmF2aWdhdGlvbiBNZW51IHdpdGggYW5pbWF0aW9uc1xyXG4gKiBAYXV0aG9yIGR0cm8tZGV2dWsgQGdpdGh1YjpkdHJvLWRldnVrLmlvXHJcbiAqL1xyXG5cclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VPbk1vdXNlQ2xpY2tPdXRzaWRlTmF2IH0gZnJvbSAnQC9saWIvaG9va3MuanMnO1xyXG5cclxuaW1wb3J0IEF2YXRhciBmcm9tICdAL2NvbXBvbmVudHMvQXZhdGFyJztcclxuaW1wb3J0IEhhbUJ1cmdlciBmcm9tICdAL2NvbXBvbmVudHMvSGFtYnVyZ2VyJztcclxuaW1wb3J0IEhhbUJ1cmdlck1lbnUgZnJvbSAnQC9jb21wb25lbnRzL0hhbWJ1cmdlck1lbnUnO1xyXG5cclxuLyoqXHJcbiAqIE1haW4gTmF2aWdhdGlvbiBNZW51IEJhciAoSG9yaXpvbnRhbClcclxuICovXHJcbmNvbnN0IE5hdkJhciA9ICh7IGF1dGhvciB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG5vZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbWVudUlkID0gJ21vYmlsZS1tZW51JztcclxuXHJcbiAgdXNlT25Nb3VzZUNsaWNrT3V0c2lkZU5hdihub2RlLCAoKSA9PiBzZXRPcGVuKGZhbHNlKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHJlZj17bm9kZX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPG5hdlxyXG4gICAgICAgICAgaWQ9XCJuYXZiYXJcIlxyXG4gICAgICAgICAgcm9sZT1cIm5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXHJcbiAgICAgICAgICAgICAgICAgICAgYmctZ3JheS04MDAgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBcclxuICAgICAgICAgICAgICAgICAgICBtdC0wIHB5LTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcC0yIHctYXV0byBjdXJzb3ItcG9pbnRlciBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgICA8QXZhdGFyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEyIHctMTIgcm91bmRlZC1mdWxsIG1yLTIgbWQ6aC0yMCBtZDp3LTIwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItNCBib3JkZXItd2hpdGUtMjAwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEyNSBob3ZlcjpiZy1vcGFjaXR5LTUwIHRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGZvbnQtYm9sZCBpdGFsaWNcclxuICAgICAgICAgICAgICB0ZXh0LXhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsXHJcbiAgICAgICAgICAgICAgdGV4dC1ibHVlLTQwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQHthdXRob3IgfHwgJyd9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L05leHRMaW5rPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggbXktMiBwdC0yIG1sLWF1dG8gc206dy1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxIYW1CdXJnZXIgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0gYXJpYS1jb250cm9scz17bWVudUlkfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SGFtQnVyZ2VyTWVudSBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSBpZD17bWVudUlkfSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGF1dGhvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9