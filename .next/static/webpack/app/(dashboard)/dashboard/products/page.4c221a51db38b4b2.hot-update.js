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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnlugeUploadClient: function() { return /* binding */ AnlugeUploadClient; }\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"(app-pages-browser)/./src/services/upload/utils/index.ts\");\n\nclass AnlugeUploadClient {\n    constructor(options){\n        /**\r\n   * @var {AnlugeUploadClientOptions}\r\n   *\r\n   * default options for the upload client\r\n   */ this.defaultOptions = {\n            imageSet: \"default\"\n        };\n        this.uploadFile = async (file, options)=>{\n            const uploadFileOptions = {\n                ...this.defaultOptions,\n                ...options || {}\n            };\n            // TODO: generate image variants\n            const formData = new FormData();\n            formData.append(\"file[name]\", file);\n            formData.append(\"file[alias]\", \"default\");\n            formData.append(\"file[set]\", uploadFileOptions.imageSet || \"default\");\n            const imageVariants = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getImageVariantsData)(uploadFileOptions.uploadedImageSizes);\n            console.log({\n                imageVariants\n            });\n        // const response = await axios.post<UploadedImage>(\n        //   `${process.env.NEXT_PUBLIC_ANLUGE_CDN_API_URL}/static/files/store`,\n        //   // `http://localhost/anluge-cdn/static/files/store`,\n        //   formData\n        // )\n        // return response.data\n        };\n        if (options) {\n            Object.assign(this.defaultOptions, options);\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy91cGxvYWQvQW5sdWdlVXBsb2FkQ2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzhDO0FBRXZDLE1BQU1DO0lBVVhDLFlBQVlDLE9BQW1DLENBQUU7UUFUakQ7Ozs7R0FJQyxRQUNnQkMsaUJBQTRDO1lBQzNEQyxVQUFVO1FBQ1o7YUFRQUMsYUFBYSxPQUNYQyxNQUNBSjtZQUVBLE1BQU1LLG9CQUErQztnQkFDbkQsR0FBRyxJQUFJLENBQUNKLGNBQWM7Z0JBQ3RCLEdBQUlELFdBQVcsQ0FBQyxDQUFDO1lBQ25CO1lBRUEsZ0NBQWdDO1lBRWhDLE1BQU1NLFdBQVcsSUFBSUM7WUFFckJELFNBQVNFLE1BQU0sQ0FBQyxjQUFjSjtZQUM5QkUsU0FBU0UsTUFBTSxDQUFDLGVBQWU7WUFDL0JGLFNBQVNFLE1BQU0sQ0FBQyxhQUFhSCxrQkFBa0JILFFBQVEsSUFBSTtZQUUzRCxNQUFNTyxnQkFBZ0JaLDREQUFvQkEsQ0FDeENRLGtCQUFrQkssa0JBQWtCO1lBR3RDQyxRQUFRQyxHQUFHLENBQUM7Z0JBQUVIO1lBQWM7UUFFNUIsb0RBQW9EO1FBQ3BELHdFQUF3RTtRQUN4RSx5REFBeUQ7UUFDekQsYUFBYTtRQUNiLElBQUk7UUFFSix1QkFBdUI7UUFDekI7UUFuQ0UsSUFBSVQsU0FBUztZQUNYYSxPQUFPQyxNQUFNLENBQUMsSUFBSSxDQUFDYixjQUFjLEVBQUVEO1FBQ3JDO0lBQ0Y7QUFpQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL3VwbG9hZC9Bbmx1Z2VVcGxvYWRDbGllbnQudHM/MDRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmx1Z2VVcGxvYWRDbGllbnRPcHRpb25zLCBVcGxvYWRlZEltYWdlIH0gZnJvbSAnLi90eXBlcydcclxuaW1wb3J0IHsgZ2V0SW1hZ2VWYXJpYW50c0RhdGEgfSBmcm9tICcuL3V0aWxzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFubHVnZVVwbG9hZENsaWVudCB7XHJcbiAgLyoqXHJcbiAgICogQHZhciB7QW5sdWdlVXBsb2FkQ2xpZW50T3B0aW9uc31cclxuICAgKlxyXG4gICAqIGRlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIHVwbG9hZCBjbGllbnRcclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBBbmx1Z2VVcGxvYWRDbGllbnRPcHRpb25zID0ge1xyXG4gICAgaW1hZ2VTZXQ6ICdkZWZhdWx0J1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IEFubHVnZVVwbG9hZENsaWVudE9wdGlvbnMpIHtcclxuICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwbG9hZEZpbGUgPSBhc3luYyAoXHJcbiAgICBmaWxlOiBGaWxlLFxyXG4gICAgb3B0aW9ucz86IEFubHVnZVVwbG9hZENsaWVudE9wdGlvbnNcclxuICApOiBQcm9taXNlPFVwbG9hZGVkSW1hZ2U+ID0+IHtcclxuICAgIGNvbnN0IHVwbG9hZEZpbGVPcHRpb25zOiBBbmx1Z2VVcGxvYWRDbGllbnRPcHRpb25zID0ge1xyXG4gICAgICAuLi50aGlzLmRlZmF1bHRPcHRpb25zLFxyXG4gICAgICAuLi4ob3B0aW9ucyB8fCB7fSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBnZW5lcmF0ZSBpbWFnZSB2YXJpYW50c1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcclxuXHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVbbmFtZV0nLCBmaWxlKVxyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlW2FsaWFzXScsICdkZWZhdWx0JylcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZVtzZXRdJywgdXBsb2FkRmlsZU9wdGlvbnMuaW1hZ2VTZXQgfHwgJ2RlZmF1bHQnKVxyXG5cclxuICAgIGNvbnN0IGltYWdlVmFyaWFudHMgPSBnZXRJbWFnZVZhcmlhbnRzRGF0YShcclxuICAgICAgdXBsb2FkRmlsZU9wdGlvbnMudXBsb2FkZWRJbWFnZVNpemVzXHJcbiAgICApXHJcblxyXG4gICAgY29uc29sZS5sb2coeyBpbWFnZVZhcmlhbnRzIH0pXHJcblxyXG4gICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0PFVwbG9hZGVkSW1hZ2U+KFxyXG4gICAgLy8gICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BTkxVR0VfQ0ROX0FQSV9VUkx9L3N0YXRpYy9maWxlcy9zdG9yZWAsXHJcbiAgICAvLyAgIC8vIGBodHRwOi8vbG9jYWxob3N0L2FubHVnZS1jZG4vc3RhdGljL2ZpbGVzL3N0b3JlYCxcclxuICAgIC8vICAgZm9ybURhdGFcclxuICAgIC8vIClcclxuXHJcbiAgICAvLyByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0SW1hZ2VWYXJpYW50c0RhdGEiLCJBbmx1Z2VVcGxvYWRDbGllbnQiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImltYWdlU2V0IiwidXBsb2FkRmlsZSIsImZpbGUiLCJ1cGxvYWRGaWxlT3B0aW9ucyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJpbWFnZVZhcmlhbnRzIiwidXBsb2FkZWRJbWFnZVNpemVzIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImFzc2lnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/upload/AnlugeUploadClient.ts\n"));

/***/ })

});