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

/***/ "(app-pages-browser)/./src/services/upload/utils/generateImageVariant.ts":
/*!***********************************************************!*\
  !*** ./src/services/upload/utils/generateImageVariant.ts ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateImageVariant: function() { return /* binding */ generateImageVariant; }\n/* harmony export */ });\nconst generateImageVariant = (imageFile, sizes)=>{\n    const canvasElement = document.createElement(\"canvas\");\n    const canvasContext = canvasElement.getContext(\"2d\");\n    const imageFileUrl = URL.createObjectURL(imageFile);\n    const imageElement = new Image(sizes.width, sizes.height);\n    imageElement.src = imageFileUrl;\n    if (!canvasContext) {\n        throw new Error(\"Could not generate image variant\");\n    }\n    return new Promise((resolve, reject)=>{\n        imageElement.onload = ()=>{\n            Object.assign(canvasElement, sizes);\n            canvasContext.drawImage(imageElement, 0, 0, sizes.width, sizes.height);\n            // canvasContext.fillStyle = '#daa540'\n            // canvasContext.fillRect(0, 0, sizes.width, 80)\n            // document.body.appendChild(canvasElement)\n            canvasElement.toBlob((canvasBlob)=>{\n                if (!canvasBlob) {\n                    return reject(\"Could not generate image variant\");\n                }\n                resolve({\n                    object: canvasBlob,\n                    url: URL.createObjectURL(canvasBlob)\n                });\n            }, \"image/jpeg\");\n        };\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy91cGxvYWQvdXRpbHMvZ2VuZXJhdGVJbWFnZVZhcmlhbnQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQU9PLE1BQU1BLHVCQUF1QixDQUNsQ0MsV0FDQUM7SUFFQSxNQUFNQyxnQkFBZ0JDLFNBQVNDLGFBQWEsQ0FBQztJQUM3QyxNQUFNQyxnQkFBZ0JILGNBQWNJLFVBQVUsQ0FBQztJQUUvQyxNQUFNQyxlQUFlQyxJQUFJQyxlQUFlLENBQUNUO0lBQ3pDLE1BQU1VLGVBQWUsSUFBSUMsTUFBTVYsTUFBTVcsS0FBSyxFQUFFWCxNQUFNWSxNQUFNO0lBRXhESCxhQUFhSSxHQUFHLEdBQUdQO0lBRW5CLElBQUksQ0FBQ0YsZUFBZTtRQUNsQixNQUFNLElBQUlVLE1BQU07SUFDbEI7SUFFQSxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0JSLGFBQWFTLE1BQU0sR0FBRztZQUNwQkMsT0FBT0MsTUFBTSxDQUFDbkIsZUFBZUQ7WUFFN0JJLGNBQWNpQixTQUFTLENBQUNaLGNBQWMsR0FBRyxHQUFHVCxNQUFNVyxLQUFLLEVBQUVYLE1BQU1ZLE1BQU07WUFFckUsc0NBQXNDO1lBQ3RDLGdEQUFnRDtZQUVoRCwyQ0FBMkM7WUFFM0NYLGNBQWNxQixNQUFNLENBQUNDLENBQUFBO2dCQUNuQixJQUFJLENBQUNBLFlBQVk7b0JBQ2YsT0FBT04sT0FBTztnQkFDaEI7Z0JBRUFELFFBQVE7b0JBQ05RLFFBQVFEO29CQUNSRSxLQUFLbEIsSUFBSUMsZUFBZSxDQUFDZTtnQkFDM0I7WUFDRixHQUFHO1FBQ0w7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL3VwbG9hZC91dGlscy9nZW5lcmF0ZUltYWdlVmFyaWFudC50cz82MTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEltYWdlU2l6ZXMgfSBmcm9tICcuLi90eXBlcydcclxuXHJcbmV4cG9ydCB0eXBlIEltYWdlVmFyaWFudCA9IHtcclxuICBvYmplY3Q6IEJsb2JcclxuICB1cmw6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVJbWFnZVZhcmlhbnQgPSAoXHJcbiAgaW1hZ2VGaWxlOiBGaWxlLFxyXG4gIHNpemVzOiBJbWFnZVNpemVzXHJcbik6IFByb21pc2U8SW1hZ2VWYXJpYW50PiA9PiB7XHJcbiAgY29uc3QgY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpXHJcbiAgY29uc3QgY2FudmFzQ29udGV4dCA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKVxyXG5cclxuICBjb25zdCBpbWFnZUZpbGVVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlRmlsZSlcclxuICBjb25zdCBpbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2Uoc2l6ZXMud2lkdGgsIHNpemVzLmhlaWdodClcclxuXHJcbiAgaW1hZ2VFbGVtZW50LnNyYyA9IGltYWdlRmlsZVVybFxyXG5cclxuICBpZiAoIWNhbnZhc0NvbnRleHQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGdlbmVyYXRlIGltYWdlIHZhcmlhbnQnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGltYWdlRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24oY2FudmFzRWxlbWVudCwgc2l6ZXMpXHJcblxyXG4gICAgICBjYW52YXNDb250ZXh0LmRyYXdJbWFnZShpbWFnZUVsZW1lbnQsIDAsIDAsIHNpemVzLndpZHRoLCBzaXplcy5oZWlnaHQpXHJcblxyXG4gICAgICAvLyBjYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9ICcjZGFhNTQwJ1xyXG4gICAgICAvLyBjYW52YXNDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHNpemVzLndpZHRoLCA4MClcclxuXHJcbiAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzRWxlbWVudClcclxuXHJcbiAgICAgIGNhbnZhc0VsZW1lbnQudG9CbG9iKGNhbnZhc0Jsb2IgPT4ge1xyXG4gICAgICAgIGlmICghY2FudmFzQmxvYikge1xyXG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgnQ291bGQgbm90IGdlbmVyYXRlIGltYWdlIHZhcmlhbnQnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICBvYmplY3Q6IGNhbnZhc0Jsb2IsXHJcbiAgICAgICAgICB1cmw6IFVSTC5jcmVhdGVPYmplY3RVUkwoY2FudmFzQmxvYilcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAnaW1hZ2UvanBlZycpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVJbWFnZVZhcmlhbnQiLCJpbWFnZUZpbGUiLCJzaXplcyIsImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImltYWdlRmlsZVVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImltYWdlRWxlbWVudCIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25sb2FkIiwiT2JqZWN0IiwiYXNzaWduIiwiZHJhd0ltYWdlIiwidG9CbG9iIiwiY2FudmFzQmxvYiIsIm9iamVjdCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/upload/utils/generateImageVariant.ts\n"));

/***/ })

});