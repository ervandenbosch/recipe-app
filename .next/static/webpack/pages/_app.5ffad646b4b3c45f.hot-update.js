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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_searchbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/searchbar */ \"./components/searchbar.js\");\n/* harmony import */ var _components_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/provider */ \"./components/provider.js\");\n\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    var getSearch = function getSearch(e) {\n        e.preventDefault();\n        setQuery(search);\n        console.log(query);\n    };\n    var hideMenu = function hideMenu() {\n        var prevScrollpos = window.pageYOffset;\n        window.onscroll = function() {\n            var currentScrollPos = window.pageYOffset;\n            if (prevScrollpos > currentScrollPos) {\n                document.getElementById(\"navbar\").style.top = \"0\";\n            } else {\n                document.getElementById(\"navbar\").style.transitionDuration = \"0.3s\";\n                document.getElementById(\"navbar\").style.top = \"-82px\";\n            }\n            prevScrollpos = currentScrollPos;\n        };\n    };\n    var hideMenu2 = function hideMenu2() {\n        var h = jQuery(\"navbar\").height();\n        jQuery(window).onscroll = function() {\n            if (jQuery(window).scrollTop() > h) {\n                jQuery(\"navbar\").fadeIn();\n            } else {\n                jQuery(\"navbar\").fadeOut();\n            }\n        };\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), dark = ref[0], setDark = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), search = ref1[0], setSearch = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"chicken\"), query = ref2[0], setQuery = ref2[1];\n    var handleDark = function() {\n        return setDark(!dark);\n    };\n    var updateSearch = function(e) {\n        setSearch(e.target.value);\n        console.log(search);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        window.$ = window.jQuery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n        hideMenu();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: dark ? \"dark min-h-screen\" : '\"min-h-screen\"',\n        id: \"app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"navbar\",\n                className: \"fixed top-0 z-99 w-full border drop-shadow-lg shadow-inner\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-row h-20 flex-nowrap border-b shadow-sm shadow-blue-400 p-4 bg-white dark:bg-gray-900 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"pt-2 text-4xl font-bold text-blue-500 dark:text-blue-300 sm:hidden\",\n                                children: \"Foodnow\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchbar__WEBPACK_IMPORTED_MODULE_6__.Searchbar, {\n                            placeholder: \"Search for recipes..\",\n                            getSearch: getSearch,\n                            updateSearch: updateSearch,\n                            query: query\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row m-4 font-bold text-gray-600 dark:text-gray-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-none flex-nowrap z-99 relative ml-5 sm:hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faMoon,\n                                        size: \"1x\",\n                                        color: dark ? \"gray-200\" : \"gray-600\",\n                                        className: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this),\n                                    \" \",\n                                    \"/\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faSun,\n                                        size: \"1x\",\n                                        color: dark ? \"gray-200\" : \"gray-600\",\n                                        className: \"ml-1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleDark,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n                                            icon: dark ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faToggleOn : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faToggleOff,\n                                            size: \"lg\",\n                                            color: dark ? \"gray-200\" : \"gray-600\",\n                                            className: \"ml-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_provider__WEBPACK_IMPORTED_MODULE_7__.AppWrapper, {\n                query: query,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_5__.Footer, {}, void 0, false, {\n                fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ezravandenbosch/Documents/GitHub/ervandenbosch.github.io/recipe-app/pages/_app.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this));\n};\n_s(MyApp, \"AA8+OC3PFcakHdU9WivDMex6xco=\");\n_c = MyApp;\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2RxRCxJQUFJLEVBQUVoQixJQUFJLEdBQUdqQyx5RUFBVSxHQUFHRCwwRUFBVzs0Q0FDckNtRCxJQUFJLEVBQUMsQ0FBSTs0Q0FDVEMsS0FBSyxFQUFFbEIsSUFBSSxHQUFHLENBQVUsWUFBRyxDQUFVOzRDQUNyQ1UsU0FBUyxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFRM0J4Qyw0REFBVTtnQkFBQ1csS0FBSyxFQUFFQSxLQUFLO3NHQUNyQlQsU0FBUyxvQkFBS0MsU0FBUzs7Ozs7Ozs7Ozt3RkFHekJMLHNEQUFNOzs7Ozs7Ozs7OztBQUdiLENBQUM7R0F0R3VCRyxLQUFLO0tBQUxBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhTW9vbixcbiAgZmFTdW4sXG4gIGZhVG9nZ2xlT2ZmLFxuICBmYVRvZ2dsZU9uLFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCB7IFNlYXJjaGJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NlYXJjaGJhclwiO1xuaW1wb3J0IHsgQXBwV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcImNoaWNrZW5cIik7XG5cbiAgY29uc3QgaGFuZGxlRGFyayA9ICgpID0+IHNldERhcmsoIWRhcmspO1xuXG4gIGNvbnN0IHVwZGF0ZVNlYXJjaCA9IChlKSA9PiB7XG4gICAgc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldFNlYXJjaChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFF1ZXJ5KHNlYXJjaCk7XG4gICAgY29uc29sZS5sb2cocXVlcnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU1lbnUoKSB7XG4gICAgdmFyIHByZXZTY3JvbGxwb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGN1cnJlbnRTY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIikuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmJhclwiKS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBcIjAuM3NcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIikuc3R5bGUudG9wID0gXCItODJweFwiO1xuICAgICAgfVxuICAgICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3M7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVNZW51MigpIHtcbiAgICB2YXIgaCA9IGpRdWVyeShcIm5hdmJhclwiKS5oZWlnaHQoKTtcbiAgICBqUXVlcnkod2luZG93KS5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChqUXVlcnkod2luZG93KS5zY3JvbGxUb3AoKSA+IGgpIHtcbiAgICAgICAgalF1ZXJ5KFwibmF2YmFyXCIpLmZhZGVJbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwibmF2YmFyXCIpLmZhZGVPdXQoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xuICAgIGhpZGVNZW51KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrID8gXCJkYXJrIG1pbi1oLXNjcmVlblwiIDogJ1wibWluLWgtc2NyZWVuXCInfSBpZD1cImFwcFwiPlxuICAgICAgPGRpdlxuICAgICAgICBpZD1cIm5hdmJhclwiXG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIHotOTkgdy1mdWxsIGJvcmRlciBkcm9wLXNoYWRvdy1sZyBzaGFkb3ctaW5uZXJcIlxuICAgICAgPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaC0yMCAgZmxleC1ub3dyYXAgYm9yZGVyLWIgc2hhZG93LXNtIHNoYWRvdy1ibHVlLTQwMCBwLTQgYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMCBcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHQtMiB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC1ibHVlLTUwMCBkYXJrOnRleHQtYmx1ZS0zMDAgc206aGlkZGVuXCI+XG4gICAgICAgICAgICAgIEZvb2Rub3dcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPFNlYXJjaGJhclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHJlY2lwZXMuLlwiXG4gICAgICAgICAgICBnZXRTZWFyY2g9e2dldFNlYXJjaH1cbiAgICAgICAgICAgIHVwZGF0ZVNlYXJjaD17dXBkYXRlU2VhcmNofVxuICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbS00IGZvbnQtYm9sZCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LW5vbmUgZmxleC1ub3dyYXAgei05OSByZWxhdGl2ZSBtbC01IHNtOmhpZGRlblwiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgaWNvbj17ZmFNb29ufVxuICAgICAgICAgICAgICAgIHNpemU9XCIxeFwiXG4gICAgICAgICAgICAgICAgY29sb3I9e2RhcmsgPyBcImdyYXktMjAwXCIgOiBcImdyYXktNjAwXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgIC9cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgIGljb249e2ZhU3VufVxuICAgICAgICAgICAgICAgIHNpemU9XCIxeFwiXG4gICAgICAgICAgICAgICAgY29sb3I9e2RhcmsgPyBcImdyYXktMjAwXCIgOiBcImdyYXktNjAwXCJ9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGFya30+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17ZGFyayA/IGZhVG9nZ2xlT24gOiBmYVRvZ2dsZU9mZn1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICBjb2xvcj17ZGFyayA/IFwiZ3JheS0yMDBcIiA6IFwiZ3JheS02MDBcIn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxBcHBXcmFwcGVyIHF1ZXJ5PXtxdWVyeX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXBwV3JhcHBlcj5cblxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiZmFNb29uIiwiZmFTdW4iLCJmYVRvZ2dsZU9mZiIsImZhVG9nZ2xlT24iLCJGb290ZXIiLCJTZWFyY2hiYXIiLCJBcHBXcmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRTZWFyY2giLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRRdWVyeSIsInNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImhpZGVNZW51IiwicHJldlNjcm9sbHBvcyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwib25zY3JvbGwiLCJjdXJyZW50U2Nyb2xsUG9zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwidG9wIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiaGlkZU1lbnUyIiwiaCIsImpRdWVyeSIsImhlaWdodCIsInNjcm9sbFRvcCIsImZhZGVJbiIsImZhZGVPdXQiLCJkYXJrIiwic2V0RGFyayIsInNldFNlYXJjaCIsImhhbmRsZURhcmsiLCJ1cGRhdGVTZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIiQiLCJyZXF1aXJlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJuYXYiLCJocmVmIiwiYSIsInBsYWNlaG9sZGVyIiwiaWNvbiIsInNpemUiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});