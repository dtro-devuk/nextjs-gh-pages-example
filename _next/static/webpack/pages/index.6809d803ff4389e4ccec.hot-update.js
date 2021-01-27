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
  author,
  githubLink
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
        className: "sticky-header w-full\r bg-gray-800 flex flex-wrap items-center justify-between mt-0 py-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "inline-flex items-center p-2 w-auto cursor-pointer focus:outline-none",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "h-14 w-14 rounded-full mr-2 md:h-20 md:w-20\r border-4 border-white-200 \r transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "p-3 font-bold italic\r text-2xl md:text-3xl lg:text-4xl\r text-blue-400",
              children: ["@", author || '']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "inline-flex my-2 pt-2 ml-auto sm:w-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hamburger__WEBPACK_IMPORTED_MODULE_6__["default"], {
            open: open,
            setOpen: setOpen,
            "aria-controls": menuId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HamburgerMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          open: open,
          setOpen: setOpen,
          id: menuId,
          githubLink: githubLink
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
  author: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  githubLink: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwiYXV0aG9yIiwiZ2l0aHViTGluayIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJub2RlIiwidXNlUmVmIiwibWVudUlkIiwidXNlT25Nb3VzZUNsaWNrT3V0c2lkZU5hdiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUM7QUFBVixDQUFELEtBQTRCO0FBQUE7O0FBQ3pDLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsYUFBZjtBQUVBQyxpRkFBeUIsQ0FBQ0gsSUFBRCxFQUFPLE1BQU1GLE9BQU8sQ0FBQyxLQUFELENBQXBCLENBQXpCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBRUUsSUFBVjtBQUFnQixlQUFTLEVBQUMsRUFBMUI7QUFBQSw2QkFDRTtBQUNFLFVBQUUsRUFBQyxRQURMO0FBRUUsWUFBSSxFQUFDLFlBRlA7QUFHRSxpQkFBUyxFQUFDLDBGQUhaO0FBQUEsZ0NBTUUscUVBQUMsZ0RBQUQ7QUFBVSxjQUFJLEVBQUMsR0FBZjtBQUFBLGlDQUNFO0FBQUcscUJBQVMsRUFBQyx1RUFBYjtBQUFBLG9DQUNFLHFFQUFDLDBEQUFEO0FBQ0UsdUJBQVMsRUFBQztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFPRTtBQUNFLHVCQUFTLEVBQUMseUVBRFo7QUFBQSw4QkFLSUwsTUFBTSxJQUFJLEVBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUF3QkU7QUFBSyxtQkFBUyxFQUFDLHlDQUFmO0FBQUEsaUNBQ0UscUVBQUMsNkRBQUQ7QUFBVyxnQkFBSSxFQUFFRSxJQUFqQjtBQUF1QixtQkFBTyxFQUFFQyxPQUFoQztBQUF5Qyw2QkFBZUk7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEJGLGVBMkJFLHFFQUFDLGlFQUFEO0FBQWUsY0FBSSxFQUFFTCxJQUFyQjtBQUEyQixpQkFBTyxFQUFFQyxPQUFwQztBQUE2QyxZQUFFLEVBQUVJLE1BQWpEO0FBQXlELG9CQUFVLEVBQUVOO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQW1DRCxDQTFDRDs7R0FBTUYsTTtVQUtKUyx1RTs7O0tBTElULE07QUE0Q1NBLHFFQUFmO0FBRUFBLE1BQU0sQ0FBQ1UsU0FBUCxHQUFtQjtBQUNqQlQsUUFBTSxFQUFFVSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURSO0FBRWpCWCxZQUFVLEVBQUVTLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRlosQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjgwOWQ4MDNmZjQzODllNGNjZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBOYXZpZ2F0aW9uIE1lbnUgQmFyIENvbXBvbmVudFxyXG4gKiBAZGVzY3JpcHRpb24gSG9yaXpvbnRhbCBWZXJ0aWNhbGx5IGV4cGFuZGluZyBOYXZpZ2F0aW9uIE1lbnUgd2l0aCBhbmltYXRpb25zXHJcbiAqIEBhdXRob3IgZHRyby1kZXZ1ayBAZ2l0aHViOmR0cm8tZGV2dWsuaW9cclxuICovXHJcblxyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU9uTW91c2VDbGlja091dHNpZGVOYXYgfSBmcm9tICdAL2xpYi9ob29rcy5qcyc7XHJcblxyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0AvY29tcG9uZW50cy9BdmF0YXInO1xyXG5pbXBvcnQgSGFtQnVyZ2VyIGZyb20gJ0AvY29tcG9uZW50cy9IYW1idXJnZXInO1xyXG5pbXBvcnQgSGFtQnVyZ2VyTWVudSBmcm9tICdAL2NvbXBvbmVudHMvSGFtYnVyZ2VyTWVudSc7XHJcblxyXG4vKipcclxuICogTWFpbiBOYXZpZ2F0aW9uIE1lbnUgQmFyIChIb3Jpem9udGFsKVxyXG4gKi9cclxuY29uc3QgTmF2QmFyID0gKHsgYXV0aG9yLCBnaXRodWJMaW5rIH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgbm9kZSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBtZW51SWQgPSAnbW9iaWxlLW1lbnUnO1xyXG5cclxuICB1c2VPbk1vdXNlQ2xpY2tPdXRzaWRlTmF2KG5vZGUsICgpID0+IHNldE9wZW4oZmFsc2UpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgcmVmPXtub2RlfSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8bmF2XHJcbiAgICAgICAgICBpZD1cIm5hdmJhclwiXHJcbiAgICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdGlja3ktaGVhZGVyIHctZnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIGJnLWdyYXktODAwIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtMCBweS0yXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHAtMiB3LWF1dG8gY3Vyc29yLXBvaW50ZXIgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IHJvdW5kZWQtZnVsbCBtci0yIG1kOmgtMjAgbWQ6dy0yMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLTQgYm9yZGVyLXdoaXRlLTIwMCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUgaG92ZXI6Ymctb3BhY2l0eS01MCB0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBmb250LWJvbGQgaXRhbGljXHJcbiAgICAgICAgICAgICAgdGV4dC0yeGwgbWQ6dGV4dC0zeGwgbGc6dGV4dC00eGxcclxuICAgICAgICAgICAgICB0ZXh0LWJsdWUtNDAwXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBAe2F1dGhvciB8fCAnJ31cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTmV4dExpbms+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBteS0yIHB0LTIgbWwtYXV0byBzbTp3LWF1dG9cIj5cclxuICAgICAgICAgICAgPEhhbUJ1cmdlciBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSBhcmlhLWNvbnRyb2xzPXttZW51SWR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxIYW1CdXJnZXJNZW51IG9wZW49e29wZW59IHNldE9wZW49e3NldE9wZW59IGlkPXttZW51SWR9IGdpdGh1Ykxpbms9e2dpdGh1Ykxpbmt9IC8+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuXHJcbk5hdkJhci5wcm9wVHlwZXMgPSB7XHJcbiAgYXV0aG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZ2l0aHViTGluazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9