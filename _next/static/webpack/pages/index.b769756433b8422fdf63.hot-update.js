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
        className: "container mx-auto \r px-2 py-3\r flex items-center justify-between\r bg-gray-800  flex-wrap \r mt-4 md:py-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "md:p-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "inline-flex items-center w-auto cursor-pointer focus:outline-none",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Avatar__WEBPACK_IMPORTED_MODULE_5__["default"], {
                className: "h-12 w-12 rounded-full md:mr-2 md:h-20 md:w-20\r border-4 border-white-200 \r transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "p-3 font-bold italic\r text-xl md:text-3xl lg:text-4xl\r text-blue-400",
                children: author || ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "px-2 inline-flex md:my-2 ml-auto md:w-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Hamburger__WEBPACK_IMPORTED_MODULE_6__["default"], {
            open: open,
            setOpen: setOpen,
            "aria-controls": menuId
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_HamburgerMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          open: open,
          setOpen: setOpen,
          id: menuId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOlsiTmF2QmFyIiwiYXV0aG9yIiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIm5vZGUiLCJ1c2VSZWYiLCJtZW51SWQiLCJ1c2VPbk1vdXNlQ2xpY2tPdXRzaWRlTmF2IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbkI7QUFDQSxRQUFNQyxNQUFNLEdBQUcsYUFBZjtBQUVBQyxpRkFBeUIsQ0FBQ0gsSUFBRCxFQUFPLE1BQU1GLE9BQU8sQ0FBQyxLQUFELENBQXBCLENBQXpCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLFNBQUcsRUFBRUUsSUFBVjtBQUFnQixlQUFTLEVBQUMsRUFBMUI7QUFBQSw2QkFDRTtBQUNFLFVBQUUsRUFBQyxRQURMO0FBRUUsWUFBSSxFQUFDLFlBRlA7QUFHRSxpQkFBUyxFQUFDLDZHQUhaO0FBQUEsZ0NBU0U7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFVLGdCQUFJLEVBQUMsR0FBZjtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyxtRUFBYjtBQUFBLHNDQUNFLHFFQUFDLDBEQUFEO0FBQ0UseUJBQVMsRUFBQztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFPRTtBQUNFLHlCQUFTLEVBQUMsd0VBRFo7QUFBQSwwQkFLR0osTUFBTSxJQUFJO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixlQTRCRTtBQUFLLG1CQUFTLEVBQUMsNENBQWY7QUFBQSxpQ0FDRSxxRUFBQyw2REFBRDtBQUFXLGdCQUFJLEVBQUVDLElBQWpCO0FBQXVCLG1CQUFPLEVBQUVDLE9BQWhDO0FBQXlDLDZCQUFlSTtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkE1QkYsZUErQkUscUVBQUMsaUVBQUQ7QUFBZSxjQUFJLEVBQUVMLElBQXJCO0FBQTJCLGlCQUFPLEVBQUVDLE9BQXBDO0FBQTZDLFlBQUUsRUFBRUk7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBdUNELENBOUNEOztHQUFNUCxNO1VBS0pRLHVFOzs7S0FMSVIsTTtBQWdEU0EscUVBQWY7QUFFQUEsTUFBTSxDQUFDUyxTQUFQLEdBQW1CO0FBQ2pCUixRQUFNLEVBQUVTLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjc2OTc1NjQzM2I4NDIyZmRmNjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBOYXZpZ2F0aW9uIE1lbnUgQmFyIENvbXBvbmVudFxyXG4gKiBAZGVzY3JpcHRpb24gSG9yaXpvbnRhbCBWZXJ0aWNhbGx5IGV4cGFuZGluZyBOYXZpZ2F0aW9uIE1lbnUgd2l0aCBhbmltYXRpb25zXHJcbiAqIEBhdXRob3IgZHRyby1kZXZ1ayBAZ2l0aHViOmR0cm8tZGV2dWsuaW9cclxuICovXHJcblxyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU9uTW91c2VDbGlja091dHNpZGVOYXYgfSBmcm9tICdAL2xpYi9ob29rcy5qcyc7XHJcblxyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0AvY29tcG9uZW50cy9BdmF0YXInO1xyXG5pbXBvcnQgSGFtQnVyZ2VyIGZyb20gJ0AvY29tcG9uZW50cy9IYW1idXJnZXInO1xyXG5pbXBvcnQgSGFtQnVyZ2VyTWVudSBmcm9tICdAL2NvbXBvbmVudHMvSGFtYnVyZ2VyTWVudSc7XHJcblxyXG4vKipcclxuICogTWFpbiBOYXZpZ2F0aW9uIE1lbnUgQmFyIChIb3Jpem9udGFsKVxyXG4gKi9cclxuY29uc3QgTmF2QmFyID0gKHsgYXV0aG9yIH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgbm9kZSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBtZW51SWQgPSAnbW9iaWxlLW1lbnUnO1xyXG5cclxuICB1c2VPbk1vdXNlQ2xpY2tPdXRzaWRlTmF2KG5vZGUsICgpID0+IHNldE9wZW4oZmFsc2UpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgcmVmPXtub2RlfSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8bmF2XHJcbiAgICAgICAgICBpZD1cIm5hdmJhclwiXHJcbiAgICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBcclxuICAgICAgICAgICAgICAgICAgICBweC0yIHB5LTNcclxuICAgICAgICAgICAgICAgICAgICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cclxuICAgICAgICAgICAgICAgICAgICBiZy1ncmF5LTgwMCAgZmxleC13cmFwIFxyXG4gICAgICAgICAgICAgICAgICAgIG10LTQgbWQ6cHktMlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpwLTJcIj5cclxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHctYXV0byBjdXJzb3ItcG9pbnRlciBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMiB3LTEyIHJvdW5kZWQtZnVsbCBtZDptci0yIG1kOmgtMjAgbWQ6dy0yMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLTQgYm9yZGVyLXdoaXRlLTIwMCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUgaG92ZXI6Ymctb3BhY2l0eS01MCB0cmFuc2l0aW9uIGVhc2Utb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBmb250LWJvbGQgaXRhbGljXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXhsIG1kOnRleHQtM3hsIGxnOnRleHQtNHhsXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWJsdWUtNDAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge2F1dGhvciB8fCAnJ31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtMiBpbmxpbmUtZmxleCBtZDpteS0yIG1sLWF1dG8gbWQ6dy1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxIYW1CdXJnZXIgb3Blbj17b3Blbn0gc2V0T3Blbj17c2V0T3Blbn0gYXJpYS1jb250cm9scz17bWVudUlkfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8SGFtQnVyZ2VyTWVudSBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSBpZD17bWVudUlkfSAvPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcblxyXG5OYXZCYXIucHJvcFR5cGVzID0ge1xyXG4gIGF1dGhvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9