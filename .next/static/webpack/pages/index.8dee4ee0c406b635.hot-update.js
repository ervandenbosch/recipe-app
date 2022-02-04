"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/recipe */ \"./components/recipe.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/provider */ \"./components/provider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var recipes = (0,_components_provider__WEBPACK_IMPORTED_MODULE_3__.useRecipesState)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-b from-white to-blue-200 dark:from-gray-900 dark:to-gray-600 py-8\",\n        children: [\n            recipes.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"pt-24 font-bold text-center text-2xl py-4 dark:text-white\",\n                        children: \" Click on a recipe to find directions\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/index.js\",\n                        lineNumber: 12,\n                        columnNumber: 26\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 flex flex-wrap justify-center gap-5 mx-[10px]\",\n                        children: recipes.map(function(recipe) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_recipe__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                title: recipe.recipe.label,\n                                image: recipe.recipe.image,\n                                ingredientList: recipe.recipe.ingredientLines,\n                                calories: recipe.recipe.calories,\n                                url: recipe.recipe.url\n                            }, void 0, false, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/index.js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/index.js\",\n                        lineNumber: 13,\n                        columnNumber: 1\n                    }, this)\n                ]\n            }, void 0, true),\n            recipes.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"pt-24 font-bold text-center text-2xl py-4 dark:text-white\",\n                children: \"No recipes found, try another keyword!\"\n            }, void 0, false, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 26\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 1\n    }, this));\n};\n_s(Home, \"gZNLjcosFC8czLUkyEdCA0FNENo=\", false, function() {\n    return [\n        _components_provider__WEBPACK_IMPORTED_MODULE_3__.useRecipesState\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFDWjtBQUMyQjs7QUFFekMsUUFBUSxDQUFDRyxJQUFJLEdBQUcsQ0FBQzs7O0lBRWhDLEdBQUssQ0FBQ0MsT0FBTyxHQUFHRixxRUFBZTtJQUU3QixNQUFNLDZFQUNQRyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrRjs7WUFFaEdGLE9BQU8sQ0FBQ0csTUFBTSxHQUFHLENBQUM7O2dHQUFPQyxDQUFFO3dCQUFDRixTQUFTLEVBQUMsQ0FBMkQ7a0NBQUMsQ0FBcUM7Ozs7OztnR0FDdklELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFvRDtrQ0FDMURGLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDQyxRQUFRLENBQVJBLE1BQU07MENBQ2pCLE1BQU0sK0RBQUxWLDBEQUFNO2dDQUNMVyxLQUFLLEVBQUVELE1BQU0sQ0FBQ0EsTUFBTSxDQUFDRSxLQUFLO2dDQUMxQkMsS0FBSyxFQUFFSCxNQUFNLENBQUNBLE1BQU0sQ0FBQ0csS0FBSztnQ0FDMUJDLGNBQWMsRUFBRUosTUFBTSxDQUFDQSxNQUFNLENBQUNLLGVBQWU7Z0NBQzdDQyxRQUFRLEVBQUVOLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDTSxRQUFRO2dDQUNoQ0MsR0FBRyxFQUFFUCxNQUFNLENBQUNBLE1BQU0sQ0FBQ08sR0FBRzs7Ozs7Ozs7Ozs7Ozs7WUFJakNiLE9BQU8sQ0FBQ0csTUFBTSxLQUFLLENBQUMsZ0ZBQUtDLENBQUU7Z0JBQUNGLFNBQVMsRUFBQyxDQUEyRDswQkFBQyxDQUFzQzs7Ozs7Ozs7Ozs7O0FBSXpJLENBQUM7R0F2QnVCSCxJQUFJOztRQUVaRCxpRUFBZTs7O0tBRlBDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVjaXBlIGZyb20gJy4uL2NvbXBvbmVudHMvcmVjaXBlJ1xuaW1wb3J0IHsgUmVhY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJlY2lwZXNTdGF0ZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvdmlkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbmNvbnN0IHJlY2lwZXMgPSB1c2VSZWNpcGVzU3RhdGUoKTtcblxuICByZXR1cm4gKFxuPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUgdG8tYmx1ZS0yMDAgZGFyazpmcm9tLWdyYXktOTAwIGRhcms6dG8tZ3JheS02MDAgcHktOFwiPlxuXG57cmVjaXBlcy5sZW5ndGggPiAwICYmIDw+PGgyIGNsYXNzTmFtZT1cInB0LTI0IGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBweS00IGRhcms6dGV4dC13aGl0ZVwiPiBDbGljayBvbiBhIHJlY2lwZSB0byBmaW5kIGRpcmVjdGlvbnM8L2gyPlxuPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC01IG14LVsxMHB4XVwiPlxuICAgICAgICB7cmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICA8UmVjaXBlXG4gICAgICAgICAgICB0aXRsZT17cmVjaXBlLnJlY2lwZS5sYWJlbH1cbiAgICAgICAgICAgIGltYWdlPXtyZWNpcGUucmVjaXBlLmltYWdlfVxuICAgICAgICAgICAgaW5ncmVkaWVudExpc3Q9e3JlY2lwZS5yZWNpcGUuaW5ncmVkaWVudExpbmVzfVxuICAgICAgICAgICAgY2Fsb3JpZXM9e3JlY2lwZS5yZWNpcGUuY2Fsb3JpZXN9XG4gICAgICAgICAgICB1cmw9e3JlY2lwZS5yZWNpcGUudXJsfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PjwvPiB9XG5cbntyZWNpcGVzLmxlbmd0aCA9PT0gMCAmJiA8aDIgY2xhc3NOYW1lPVwicHQtMjQgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtMnhsIHB5LTQgZGFyazp0ZXh0LXdoaXRlXCI+Tm8gcmVjaXBlcyBmb3VuZCwgdHJ5IGFub3RoZXIga2V5d29yZCE8L2gyPiB9IFxuXG48L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVjaXBlIiwiUmVhY3QiLCJ1c2VSZWNpcGVzU3RhdGUiLCJIb21lIiwicmVjaXBlcyIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsImgyIiwibWFwIiwicmVjaXBlIiwidGl0bGUiLCJsYWJlbCIsImltYWdlIiwiaW5ncmVkaWVudExpc3QiLCJpbmdyZWRpZW50TGluZXMiLCJjYWxvcmllcyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});