"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/searchbar.js":
/*!*********************************!*\
  !*** ./components/searchbar.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Searchbar\": function() { return /* binding */ Searchbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Searchbar(param) {\n    var placeholder = param.placeholder, getSearch = param.getSearch, updateSearch = param.updateSearch, search = param.search;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: getSearch,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row p-1 ml-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 border-b hover:border dark:border-none text-gray-400 rounded-lg font-bold bg-white dark:bg-gray-600 dark:hover:bg-gray-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: placeholder,\n                            className: \"m-1 bg-transparent outline-none w-full\",\n                            value: search,\n                            onChange: updateSearch\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/components/searchbar.js\",\n                            lineNumber: 7,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/components/searchbar.js\",\n                        lineNumber: 6,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"flex-none ml-4 w-100px p-1 border-b hover:border dark:border-none rounded-lg text-white dark:text-gray-900 font-bold bg-blue-400 dark:bg-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Search!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/components/searchbar.js\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/components/searchbar.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/components/searchbar.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/components/searchbar.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/components/searchbar.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this));\n}\n_c = Searchbar;\nvar _c;\n$RefreshReg$(_c, \"Searchbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaGJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sU0FBU0EsU0FBUyxDQUFDLEtBQWdELEVBQUUsQ0FBQztRQUFqREMsV0FBVyxHQUFiLEtBQWdELENBQTlDQSxXQUFXLEVBQUVDLFNBQVMsR0FBeEIsS0FBZ0QsQ0FBakNBLFNBQVMsRUFBRUMsWUFBWSxHQUF0QyxLQUFnRCxDQUF0QkEsWUFBWSxFQUFFQyxNQUFNLEdBQTlDLEtBQWdELENBQVJBLE1BQU07SUFDdEUsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBUTs4RkFDcEJDLENBQUk7WUFBQ0MsUUFBUSxFQUFFTixTQUFTO2tHQUN0QkcsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXdCOztnR0FDcENELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFvSTs4R0FDaEpHLENBQUs7NEJBQ0pDLElBQUksRUFBQyxDQUFNOzRCQUNYVCxXQUFXLEVBQUVBLFdBQVc7NEJBQ3hCSyxTQUFTLEVBQUMsQ0FBd0M7NEJBQ2xESyxLQUFLLEVBQUVQLE1BQU07NEJBQ2JRLFFBQVEsRUFBRVQsWUFBWTs7Ozs7Ozs7Ozs7Z0dBR3pCVSxDQUFJO3dCQUFDUCxTQUFTLEVBQUMsQ0FBbUo7OEdBQ2hLUSxDQUFNOzRCQUFDSixJQUFJLEVBQUMsQ0FBUTtzQ0FBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekMsQ0FBQztLQXJCZVYsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlYXJjaGJhci5qcz85ZTExIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBTZWFyY2hiYXIoeyBwbGFjZWhvbGRlciwgZ2V0U2VhcmNoLCB1cGRhdGVTZWFyY2gsIHNlYXJjaCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtnZXRTZWFyY2h9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcC0xIG1sLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBib3JkZXItYiBob3Zlcjpib3JkZXIgZGFyazpib3JkZXItbm9uZSAgdGV4dC1ncmF5LTQwMCByb3VuZGVkLWxnIGZvbnQtYm9sZCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNjAwIGRhcms6aG92ZXI6YmctZ3JheS01MDBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0xIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSB3LWZ1bGxcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlU2VhcmNofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4LW5vbmUgbWwtNCB3LTEwMHB4IHAtMSBib3JkZXItYiBob3Zlcjpib3JkZXIgZGFyazpib3JkZXItbm9uZSByb3VuZGVkLWxnIHRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktOTAwIGZvbnQtYm9sZCBiZy1ibHVlLTQwMCBkYXJrOmJnLWdyYXktMjAwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2ghPC9idXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTZWFyY2hiYXIiLCJwbGFjZWhvbGRlciIsImdldFNlYXJjaCIsInVwZGF0ZVNlYXJjaCIsInNlYXJjaCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/searchbar.js\n");

/***/ })

});