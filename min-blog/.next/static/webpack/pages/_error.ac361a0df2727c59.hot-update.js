"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_error",{

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styles_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/Main */ \"./styles/Main.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\a0104\\\\Documents\\\\GitHub\\\\Project\\\\min-log\\\\min-blog\\\\pages\\\\_error.tsx\";\n\n\n\nconst Refresh = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(styles_Main__WEBPACK_IMPORTED_MODULE_0__.ErrorContainer, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: \"\\uAE30\\uB2E4\\uB824\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 3\n  }, undefined);\n};\n\n_c = Refresh;\n\nconst Error = _ref => {\n  let {\n    statusCode,\n    message = null\n  } = _ref;\n  if (statusCode === 408) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Refresh, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 33\n  }, undefined);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(styles_Main__WEBPACK_IMPORTED_MODULE_0__.ErrorContainer, {\n    children: message ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 24\n    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: \"\\uC5D0\\uB7EC\\uAC00 \\uBC1C\\uC0DD\\uD588\\uC5B4\\uC694\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 43\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 9\n  }, undefined);\n};\n\n_c2 = Error;\nError.getInitialProp = {\n  res,\n  err\n};\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Refresh\");\n$RefreshReg$(_c2, \"Error\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZXJyb3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQU9BLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0VBQ3JCLG9CQUNDLDhEQUFDLHVEQUFEO0lBQUEsdUJBQ0M7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERDtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREQ7QUFLQSxDQU5EOztLQUFNQTs7QUFRTixNQUFNQyxLQUFLLEdBQUcsUUFBZ0Q7RUFBQSxJQUEvQztJQUFFQyxVQUFGO0lBQWNDLE9BQU8sR0FBRztFQUF4QixDQUErQztFQUM3RCxJQUFJRCxVQUFVLEtBQUssR0FBbkIsRUFBd0Isb0JBQU8sOERBQUMsT0FBRDtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBQVA7RUFFckIsb0JBQ0ksOERBQUMsdURBQUQ7SUFBQSxVQUNLQyxPQUFPLGdCQUFHO01BQUEsVUFBSUE7SUFBSjtNQUFBO01BQUE7TUFBQTtJQUFBLGFBQUgsZ0JBQXNCO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBRGxDO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFESjtBQUtILENBUkQ7O01BQU1GO0FBZU5BLEtBQUssQ0FBQ0csY0FBTixHQUF3QjtFQUFFQyxHQUFGO0VBQU9DO0FBQVAsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2Vycm9yLnRzeD8yNjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yQ29udGFpbmVyIH0gZnJvbSAnc3R5bGVzL01haW4nO1xyXG5cclxuaW50ZXJmYWNlIEVycm9yUHJvcHMge1xyXG5cdHN0YXR1c0NvZGU6IG51bWJlcjtcclxuXHRtZXNzYWdlOiBzdHJpbmcgfCBudWxsO1xyXG59XHJcblxyXG5jb25zdCBSZWZyZXNoID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8RXJyb3JDb250YWluZXI+XHJcblx0XHRcdDxwPuq4sOuLpOugpDwvcD5cclxuXHRcdDwvRXJyb3JDb250YWluZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmNvbnN0IEVycm9yID0gKHsgc3RhdHVzQ29kZSwgbWVzc2FnZSA9IG51bGwgfTogRXJyb3JQcm9wcykgPT4ge1xyXG5cdGlmIChzdGF0dXNDb2RlID09PSA0MDgpIHJldHVybiA8UmVmcmVzaCAvPjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFcnJvckNvbnRhaW5lcj5cclxuICAgICAgICAgICAge21lc3NhZ2UgPyA8cD57bWVzc2FnZX08L3A+IDogPHA+7JeQ65+s6rCAIOuwnOyDne2WiOyWtOyalDwvcD59XHJcbiAgICAgICAgPC9FcnJvckNvbnRhaW5lcj5cclxuICAgIClcclxufTtcclxuXHJcbmludGVyZmFjZSBHSVBQcm9wcyB7XHJcbiAgICByZXM6IGFueTtcclxuICAgIGVycjogYW55O1xyXG59XHJcblxyXG5FcnJvci5nZXRJbml0aWFsUHJvcCA9ICh7IHJlcywgZXJyIH0pIl0sIm5hbWVzIjpbIkVycm9yQ29udGFpbmVyIiwiUmVmcmVzaCIsIkVycm9yIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJnZXRJbml0aWFsUHJvcCIsInJlcyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_error.tsx\n"));

/***/ })

});