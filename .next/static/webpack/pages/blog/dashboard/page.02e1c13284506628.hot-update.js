"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog/dashboard/page",{

/***/ "./src/components/tableordersitem.tsx":
/*!********************************************!*\
  !*** ./src/components/tableordersitem.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/globals.css */ \"./src/app/globals.css\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tableorders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableorders */ \"./src/components/tableorders.tsx\");\n/* harmony import */ var _public_order_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/order.json */ \"./public/order.json\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n/**\r\n * @component\r\n */ const TableOrdersItem = ()=>{\n    const uniqueKey = (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    return _public_order_json__WEBPACK_IMPORTED_MODULE_3__.map((dataitem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tableorders__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            phone: _public_order_json__WEBPACK_IMPORTED_MODULE_3__.phone,\n            description: _public_order_json__WEBPACK_IMPORTED_MODULE_3__.status,\n            price: _public_order_json__WEBPACK_IMPORTED_MODULE_3__.price\n        }, uniqueKey, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\Web development Projects\\\\Flit Apprenticeship Program\\\\Pizza Ordering App\\\\pizza-ordering-app-project\\\\src\\\\components\\\\tableordersitem.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        }, undefined));\n};\n_c = TableOrdersItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableOrdersItem);\nvar _c;\n$RefreshReg$(_c, \"TableOrdersItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YWJsZW9yZGVyc2l0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzRCO0FBQ1k7QUFFUTtBQUVaO0FBRXBDOztDQUVDLEdBRUQsTUFBTUksa0JBQWtCO0lBQ3RCLE1BQU1DLFlBQVlGLGdEQUFNQTtJQUV4QixPQUFPRiwrQ0FBU0EsQ0FBQ0ssR0FBRyxDQUFDLENBQUNDLFVBQVVDLHNCQUM5Qiw4REFBQ1Isb0RBQVdBO1lBRVZTLE9BQU9SLCtDQUFTQSxDQUFDUSxLQUFLO1lBQ3RCQyxhQUFhVCwrQ0FBU0EsQ0FBQ1UsTUFBTTtZQUM3QkMsT0FBT1gsK0NBQVNBLENBQUNXLEtBQUs7V0FIakJQOzs7OztBQU1YO0tBWE1EO0FBYU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFibGVvcmRlcnNpdGVtLnRzeD9hYjhkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgXCIuLi9hcHAvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFRhYmxlT3JkZXJzIGZyb20gXCIuL3RhYmxlb3JkZXJzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi9wdWJsaWMvZGF0YS5qc29uXCI7XHJcbmltcG9ydCBvcmRlckRhdGEgZnJvbSBcIi4uLy4uL3B1YmxpYy9vcmRlci5qc29uXCI7XHJcblxyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xyXG5cclxuLyoqXHJcbiAqIEBjb21wb25lbnRcclxuICovXHJcblxyXG5jb25zdCBUYWJsZU9yZGVyc0l0ZW0gPSAoKSA9PiB7XHJcbiAgY29uc3QgdW5pcXVlS2V5ID0gdXVpZHY0KCk7XHJcblxyXG4gIHJldHVybiBvcmRlckRhdGEubWFwKChkYXRhaXRlbSwgaW5kZXgpID0+IChcclxuICAgIDxUYWJsZU9yZGVyc1xyXG4gICAgICBrZXk9e3VuaXF1ZUtleX1cclxuICAgICAgcGhvbmU9e29yZGVyRGF0YS5waG9uZX1cclxuICAgICAgZGVzY3JpcHRpb249e29yZGVyRGF0YS5zdGF0dXN9XHJcbiAgICAgIHByaWNlPXtvcmRlckRhdGEucHJpY2V9XHJcbiAgICAvPlxyXG4gICkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJsZU9yZGVyc0l0ZW07XHJcbiJdLCJuYW1lcyI6WyJUYWJsZU9yZGVycyIsIm9yZGVyRGF0YSIsInY0IiwidXVpZHY0IiwiVGFibGVPcmRlcnNJdGVtIiwidW5pcXVlS2V5IiwibWFwIiwiZGF0YWl0ZW0iLCJpbmRleCIsInBob25lIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/tableordersitem.tsx\n"));

/***/ })

});