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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/searchbar */ \"./components/searchbar.js\");\n/* harmony import */ var _components_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/provider */ \"./components/provider.js\");\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    var getSearch = function getSearch(e) {\n        e.preventDefault();\n        setQuery(search);\n        console.log(query);\n    };\n    var hideMenu = function hideMenu() {\n        var prevScrollpos = window.pageYOffset;\n        window.onscroll = function() {\n            var currentScrollPos = window.pageYOffset;\n            if (prevScrollpos > currentScrollPos) {\n                document.getElementById(\"navbar\").style.top = \"0\";\n            } else {\n                document.getElementById(\"navbar\").style.top = \"-88px\";\n            }\n            prevScrollpos = currentScrollPos;\n        };\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), dark = ref[0], setDark = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), search = ref1[0], setSearch = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"chicken\"), query = ref2[0], setQuery = ref2[1];\n    var handleDark = function() {\n        return setDark(!dark);\n    };\n    var updateSearch = function(e) {\n        setSearch(e.target.value);\n        console.log(search);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        hideMenu();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: dark ? \"dark min-h-screen\" : '\"min-h-screen\"',\n        id: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"navbar\",\n                className: \"fixed top-0 z-99 w-full border drop-shadow-lg shadow-inner\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-row h-22 flex-nowrap border-b shadow-sm shadow-blue-400 p-4 bg-white dark:bg-gray-900 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"pt-2 text-4xl font-bold text-blue-500 dark:text-blue-300 sm:hidden\",\n                                children: \"Foodnow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbar__WEBPACK_IMPORTED_MODULE_6__.Searchbar, {\n                            placeholder: \"Search for recipes..\",\n                            getSearch: getSearch,\n                            updateSearch: updateSearch,\n                            query: query\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row m-4 font-bold text-gray-600 dark:text-gray-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-none flex-nowrap z-99 relative ml-5 sm:hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faMoon,\n                                        size: \"1x\",\n                                        color: dark ? \"gray-200\" : \"gray-600\",\n                                        className: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    \"/\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faSun,\n                                        size: \"1x\",\n                                        color: dark ? \"gray-200\" : \"gray-600\",\n                                        className: \"ml-1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleDark,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                            icon: dark ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faToggleOn : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faToggleOff,\n                                            size: \"lg\",\n                                            color: dark ? \"gray-200\" : \"gray-600\",\n                                            className: \"ml-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_provider__WEBPACK_IMPORTED_MODULE_7__.AppWrapper, {\n                query: query,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_5__.Footer, {}, void 0, false, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this));\n};\n_s(MyApp, \"AA8+OC3PFcakHdU9WivDMex6xco=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O29HQUdia0IsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQThEO2tIQUMxRUQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQW9EOztnSEFDaEVyQywyRUFBZTt3Q0FDZDJDLElBQUksRUFBRTFDLHFFQUFNO3dDQUNaMkMsSUFBSSxFQUFDLENBQUk7d0NBQ1RDLEtBQUssRUFBRWhCLElBQUksR0FBRyxDQUFVLFlBQUcsQ0FBVTt3Q0FDckNRLFNBQVMsRUFBQyxDQUFFOzs7Ozs7b0NBQ1gsQ0FBRztvQ0FBQyxDQUVQO2dIQUFDckMsMkVBQWU7d0NBQ2QyQyxJQUFJLEVBQUV6QyxvRUFBSzt3Q0FDWDBDLElBQUksRUFBQyxDQUFJO3dDQUNUQyxLQUFLLEVBQUVoQixJQUFJLEdBQUcsQ0FBVSxZQUFHLENBQVU7d0NBQ3JDUSxTQUFTLEVBQUMsQ0FBTTs7Ozs7O2dIQUVqQlMsQ0FBTTt3Q0FBQ0MsT0FBTyxFQUFFZixVQUFVOzhIQUN4QmhDLDJFQUFlOzRDQUNkMkMsSUFBSSxFQUFFZCxJQUFJLEdBQUd6Qix5RUFBVSxHQUFHRCwwRUFBVzs0Q0FDckN5QyxJQUFJLEVBQUMsQ0FBSTs0Q0FDVEMsS0FBSyxFQUFFaEIsSUFBSSxHQUFHLENBQVUsWUFBRyxDQUFVOzRDQUNyQ1EsU0FBUyxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFRM0I5Qiw0REFBVTtnQkFBQ1csS0FBSyxFQUFFQSxLQUFLO3NHQUNyQlQsU0FBUyxvQkFBS0MsU0FBUzs7Ozs7Ozs7Ozt3RkFHekJMLHNEQUFNOzs7Ozs7Ozs7OztBQUdiLENBQUM7R0F6RnVCRyxLQUFLO0tBQUxBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhTW9vbixcbiAgZmFTdW4sXG4gIGZhVG9nZ2xlT2ZmLFxuICBmYVRvZ2dsZU9uLFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCB7IFNlYXJjaGJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaGJhclwiO1xuaW1wb3J0IHsgQXBwV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcImNoaWNrZW5cIik7XG5cbiAgY29uc3QgaGFuZGxlRGFyayA9ICgpID0+IHNldERhcmsoIWRhcmspO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFNlYXJjaChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFF1ZXJ5KHNlYXJjaCk7XG4gICAgY29uc29sZS5sb2cocXVlcnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU1lbnUoKSB7XG4gICAgdmFyIHByZXZTY3JvbGxwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIikuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKS5zdHlsZS50b3AgPSBcIi04OHB4XCI7XG4gICAgICB9XG4gICAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvcztcbiAgICB9O1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoaWRlTWVudSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGFyayA/IFwiZGFyayBtaW4taC1zY3JlZW5cIiA6ICdcIm1pbi1oLXNjcmVlblwiJ30gaWQ9XCJhcHBcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgaWQ9XCJuYXZiYXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCB6LTk5IHctZnVsbCBib3JkZXIgZHJvcC1zaGFkb3ctbGcgc2hhZG93LWlubmVyXCJcbiAgICAgID5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGgtMjIgIGZsZXgtbm93cmFwIGJvcmRlci1iIHNoYWRvdy1zbSBzaGFkb3ctYmx1ZS00MDAgcC00IGJnLXdoaXRlIGRhcms6YmctZ3JheS05MDAgXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB0LTIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgZGFyazp0ZXh0LWJsdWUtMzAwIHNtOmhpZGRlblwiPlxuICAgICAgICAgICAgICBGb29kbm93XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxTZWFyY2hiYXJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciByZWNpcGVzLi5cIlxuICAgICAgICAgICAgZ2V0U2VhcmNoPXtnZXRTZWFyY2h9XG4gICAgICAgICAgICB1cGRhdGVTZWFyY2g9e3VwZGF0ZVNlYXJjaH1cbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IG0tNCBmb250LWJvbGQgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ub25lIGZsZXgtbm93cmFwIHotOTkgcmVsYXRpdmUgbWwtNSBzbTpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhTW9vbn1cbiAgICAgICAgICAgICAgICBzaXplPVwiMXhcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXtkYXJrID8gXCJncmF5LTIwMFwiIDogXCJncmF5LTYwMFwifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAvXG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICBpY29uPXtmYVN1bn1cbiAgICAgICAgICAgICAgICBzaXplPVwiMXhcIlxuICAgICAgICAgICAgICAgIGNvbG9yPXtkYXJrID8gXCJncmF5LTIwMFwiIDogXCJncmF5LTYwMFwifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURhcmt9PlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIGljb249e2RhcmsgPyBmYVRvZ2dsZU9uIDogZmFUb2dnbGVPZmZ9XG4gICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgY29sb3I9e2RhcmsgPyBcImdyYXktMjAwXCIgOiBcImdyYXktNjAwXCJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8QXBwV3JhcHBlciBxdWVyeT17cXVlcnl9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0FwcFdyYXBwZXI+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvbnRBd2Vzb21lSWNvbiIsImZhTW9vbiIsImZhU3VuIiwiZmFUb2dnbGVPZmYiLCJmYVRvZ2dsZU9uIiwiRm9vdGVyIiwiU2VhcmNoYmFyIiwiQXBwV3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0U2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0UXVlcnkiLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJoaWRlTWVudSIsInByZXZTY3JvbGxwb3MiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsIm9uc2Nyb2xsIiwiY3VycmVudFNjcm9sbFBvcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRvcCIsImRhcmsiLCJzZXREYXJrIiwic2V0U2VhcmNoIiwiaGFuZGxlRGFyayIsInVwZGF0ZVNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJuYXYiLCJocmVmIiwiYSIsInBsYWNlaG9sZGVyIiwiaWNvbiIsInNpemUiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});