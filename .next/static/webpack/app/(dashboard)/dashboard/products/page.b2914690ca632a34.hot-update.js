"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/dashboard/products/page",{

/***/ "(app-pages-browser)/./src/services/upload/AnlugeUploadClient.ts":
/*!***************************************************!*\
  !*** ./src/services/upload/AnlugeUploadClient.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnlugeUploadClient: function() { return /* binding */ AnlugeUploadClient; }\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"(app-pages-browser)/./src/services/upload/utils/index.ts\");\n\nclass AnlugeUploadClient {\n    constructor(options){\n        /**\r\n   * @var {AnlugeUploadClientOptions}\r\n   *\r\n   * default options for the upload client\r\n   */ this.defaultOptions = {\n            imageSet: \"default\"\n        };\n        this.uploadFile = async (file, options)=>{\n            const uploadFileOptions = {\n                ...this.defaultOptions,\n                ...options || {}\n            };\n            // TODO: generate image variants\n            const formData = new FormData();\n            formData.append(\"file[name]\", file);\n            formData.append(\"file[alias]\", \"default\");\n            formData.append(\"file[set]\", uploadFileOptions.imageSet || \"default\");\n            const imageVariantsData = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getImageVariantsData)(uploadFileOptions.uploadedImageSizes);\n            const imageVariants = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateImageVariants)(file, imageVariantsData);\n            console.log({\n                imageVariants\n            });\n        // const response = await axios.post<UploadedImage>(\n        //   `${process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL}/static/files/store`,\n        //   // `http://localhost/anluge-cdn/static/files/store`,\n        //   formData\n        // )\n        // return response.data\n        };\n        if (options) {\n            Object.assign(this.defaultOptions, options);\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy91cGxvYWQvQW5sdWdlVXBsb2FkQ2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3FFO0FBRTlELE1BQU1FO0lBVVhDLFlBQVlDLE9BQW1DLENBQUU7UUFUakQ7Ozs7R0FJQyxRQUNnQkMsaUJBQTRDO1lBQzNEQyxVQUFVO1FBQ1o7YUFRQUMsYUFBYSxPQUNYQyxNQUNBSjtZQUVBLE1BQU1LLG9CQUErQztnQkFDbkQsR0FBRyxJQUFJLENBQUNKLGNBQWM7Z0JBQ3RCLEdBQUlELFdBQVcsQ0FBQyxDQUFDO1lBQ25CO1lBRUEsZ0NBQWdDO1lBRWhDLE1BQU1NLFdBQVcsSUFBSUM7WUFFckJELFNBQVNFLE1BQU0sQ0FBQyxjQUFjSjtZQUM5QkUsU0FBU0UsTUFBTSxDQUFDLGVBQWU7WUFDL0JGLFNBQVNFLE1BQU0sQ0FBQyxhQUFhSCxrQkFBa0JILFFBQVEsSUFBSTtZQUUzRCxNQUFNTyxvQkFBb0JaLDREQUFvQkEsQ0FDNUNRLGtCQUFrQkssa0JBQWtCO1lBR3RDLE1BQU1DLGdCQUFnQixNQUFNZiw2REFBcUJBLENBQUNRLE1BQU1LO1lBRXhERyxRQUFRQyxHQUFHLENBQUM7Z0JBQUVGO1lBQWM7UUFFNUIsb0RBQW9EO1FBQ3BELHdFQUF3RTtRQUN4RSx5REFBeUQ7UUFDekQsYUFBYTtRQUNiLElBQUk7UUFFSix1QkFBdUI7UUFDekI7UUFyQ0UsSUFBSVgsU0FBUztZQUNYYyxPQUFPQyxNQUFNLENBQUMsSUFBSSxDQUFDZCxjQUFjLEVBQUVEO1FBQ3JDO0lBQ0Y7QUFtQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL3VwbG9hZC9Bbmx1Z2VVcGxvYWRDbGllbnQudHM/MDRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmx1Z2VVcGxvYWRDbGllbnRPcHRpb25zLCBVcGxvYWRlZEltYWdlIH0gZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IHsgZ2VuZXJhdGVJbWFnZVZhcmlhbnRzLCBnZXRJbWFnZVZhcmlhbnRzRGF0YSB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgY2xhc3MgQW5sdWdlVXBsb2FkQ2xpZW50IHtcclxuICAvKipcclxuICAgKiBAdmFyIHtBbmx1Z2VVcGxvYWRDbGllbnRPcHRpb25zfVxyXG4gICAqXHJcbiAgICogZGVmYXVsdCBvcHRpb25zIGZvciB0aGUgdXBsb2FkIGNsaWVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IEFubHVnZVVwbG9hZENsaWVudE9wdGlvbnMgPSB7XHJcbiAgICBpbWFnZVNldDogJ2RlZmF1bHQnXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zPzogQW5sdWdlVXBsb2FkQ2xpZW50T3B0aW9ucykge1xyXG4gICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZSA9IGFzeW5jIChcclxuICAgIGZpbGU6IEZpbGUsXHJcbiAgICBvcHRpb25zPzogQW5sdWdlVXBsb2FkQ2xpZW50T3B0aW9uc1xyXG4gICk6IFByb21pc2U8VXBsb2FkZWRJbWFnZT4gPT4ge1xyXG4gICAgY29uc3QgdXBsb2FkRmlsZU9wdGlvbnM6IEFubHVnZVVwbG9hZENsaWVudE9wdGlvbnMgPSB7XHJcbiAgICAgIC4uLnRoaXMuZGVmYXVsdE9wdGlvbnMsXHJcbiAgICAgIC4uLihvcHRpb25zIHx8IHt9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IGdlbmVyYXRlIGltYWdlIHZhcmlhbnRzXHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG5cclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZVtuYW1lXScsIGZpbGUpXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVbYWxpYXNdJywgJ2RlZmF1bHQnKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlW3NldF0nLCB1cGxvYWRGaWxlT3B0aW9ucy5pbWFnZVNldCB8fCAnZGVmYXVsdCcpXHJcblxyXG4gICAgY29uc3QgaW1hZ2VWYXJpYW50c0RhdGEgPSBnZXRJbWFnZVZhcmlhbnRzRGF0YShcclxuICAgICAgdXBsb2FkRmlsZU9wdGlvbnMudXBsb2FkZWRJbWFnZVNpemVzXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgaW1hZ2VWYXJpYW50cyA9IGF3YWl0IGdlbmVyYXRlSW1hZ2VWYXJpYW50cyhmaWxlLCBpbWFnZVZhcmlhbnRzRGF0YSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyh7IGltYWdlVmFyaWFudHMgfSlcclxuXHJcbiAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3Q8VXBsb2FkZWRJbWFnZT4oXHJcbiAgICAvLyAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOTFVHRV9DRE5fQVBJX1VSTH0vc3RhdGljL2ZpbGVzL3N0b3JlYCxcclxuICAgIC8vICAgLy8gYGh0dHA6Ly9sb2NhbGhvc3QvYW5sdWdlLWNkbi9zdGF0aWMvZmlsZXMvc3RvcmVgLFxyXG4gICAgLy8gICBmb3JtRGF0YVxyXG4gICAgLy8gKVxyXG5cclxuICAgIC8vIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZUltYWdlVmFyaWFudHMiLCJnZXRJbWFnZVZhcmlhbnRzRGF0YSIsIkFubHVnZVVwbG9hZENsaWVudCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImRlZmF1bHRPcHRpb25zIiwiaW1hZ2VTZXQiLCJ1cGxvYWRGaWxlIiwiZmlsZSIsInVwbG9hZEZpbGVPcHRpb25zIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImltYWdlVmFyaWFudHNEYXRhIiwidXBsb2FkZWRJbWFnZVNpemVzIiwiaW1hZ2VWYXJpYW50cyIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJhc3NpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/upload/AnlugeUploadClient.ts\n"));

/***/ })

});