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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateImageVariant: function() { return /* binding */ generateImageVariant; }\n/* harmony export */ });\nconst generateImageVariant = (imageFile, sizes)=>{\n    const canvasElement = document.createElement(\"canvas\");\n    const canvasContext = canvasElement.getContext(\"2d\");\n    const imageFileUrl = URL.createObjectURL(imageFile);\n    const imageElement = new Image(sizes.width, sizes.height);\n    imageElement.src = imageFileUrl;\n    if (!canvasContext) {\n        throw new Error(\"Could not generate image variant\");\n    }\n    return new Promise((resolve, reject)=>{\n        imageElement.onload = ()=>{\n            Object.assign(canvasElement, sizes);\n            canvasContext.drawImage(imageElement, 0, 0, sizes.width, sizes.height, 0, 0, sizes.width, sizes.height);\n            canvasContext.fillStyle = \"#daa540\";\n            canvasContext.fillRect(0, 0, sizes.width, 80);\n            document.body.appendChild(canvasElement);\n            canvasElement.toBlob((canvasBlob)=>{\n                if (!canvasBlob) {\n                    return reject(\"Could not generate image variant\");\n                }\n                resolve({\n                    object: canvasBlob,\n                    url: imageFileUrl\n                });\n            }, \"image/jpeg\");\n        };\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy91cGxvYWQvdXRpbHMvZ2VuZXJhdGVJbWFnZVZhcmlhbnQudHMiLCJtYXBwaW5ncyI6Ijs7OztBQU9PLE1BQU1BLHVCQUF1QixDQUNsQ0MsV0FDQUM7SUFFQSxNQUFNQyxnQkFBZ0JDLFNBQVNDLGFBQWEsQ0FBQztJQUM3QyxNQUFNQyxnQkFBZ0JILGNBQWNJLFVBQVUsQ0FBQztJQUUvQyxNQUFNQyxlQUFlQyxJQUFJQyxlQUFlLENBQUNUO0lBQ3pDLE1BQU1VLGVBQWUsSUFBSUMsTUFBTVYsTUFBTVcsS0FBSyxFQUFFWCxNQUFNWSxNQUFNO0lBRXhESCxhQUFhSSxHQUFHLEdBQUdQO0lBRW5CLElBQUksQ0FBQ0YsZUFBZTtRQUNsQixNQUFNLElBQUlVLE1BQU07SUFDbEI7SUFFQSxPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0JSLGFBQWFTLE1BQU0sR0FBRztZQUNwQkMsT0FBT0MsTUFBTSxDQUFDbkIsZUFBZUQ7WUFFN0JJLGNBQWNpQixTQUFTLENBQ3JCWixjQUNBLEdBQ0EsR0FDQVQsTUFBTVcsS0FBSyxFQUNYWCxNQUFNWSxNQUFNLEVBQ1osR0FDQSxHQUNBWixNQUFNVyxLQUFLLEVBQ1hYLE1BQU1ZLE1BQU07WUFHZFIsY0FBY2tCLFNBQVMsR0FBRztZQUMxQmxCLGNBQWNtQixRQUFRLENBQUMsR0FBRyxHQUFHdkIsTUFBTVcsS0FBSyxFQUFFO1lBRTFDVCxTQUFTc0IsSUFBSSxDQUFDQyxXQUFXLENBQUN4QjtZQUUxQkEsY0FBY3lCLE1BQU0sQ0FBQ0MsQ0FBQUE7Z0JBQ25CLElBQUksQ0FBQ0EsWUFBWTtvQkFDZixPQUFPVixPQUFPO2dCQUNoQjtnQkFFQUQsUUFBUTtvQkFDTlksUUFBUUQ7b0JBQ1JFLEtBQUt2QjtnQkFDUDtZQUNGLEdBQUc7UUFDTDtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvdXBsb2FkL3V0aWxzL2dlbmVyYXRlSW1hZ2VWYXJpYW50LnRzPzYxM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VTaXplcyB9IGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuZXhwb3J0IHR5cGUgSW1hZ2VWYXJpYW50ID0ge1xyXG4gIG9iamVjdDogQmxvYlxyXG4gIHVybDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUltYWdlVmFyaWFudCA9IChcclxuICBpbWFnZUZpbGU6IEZpbGUsXHJcbiAgc2l6ZXM6IEltYWdlU2l6ZXNcclxuKTogUHJvbWlzZTxJbWFnZVZhcmlhbnQ+ID0+IHtcclxuICBjb25zdCBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJylcclxuICBjb25zdCBjYW52YXNDb250ZXh0ID0gY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpXHJcblxyXG4gIGNvbnN0IGltYWdlRmlsZVVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaW1hZ2VGaWxlKVxyXG4gIGNvbnN0IGltYWdlRWxlbWVudCA9IG5ldyBJbWFnZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KVxyXG5cclxuICBpbWFnZUVsZW1lbnQuc3JjID0gaW1hZ2VGaWxlVXJsXHJcblxyXG4gIGlmICghY2FudmFzQ29udGV4dCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZ2VuZXJhdGUgaW1hZ2UgdmFyaWFudCcpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaW1hZ2VFbGVtZW50Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgT2JqZWN0LmFzc2lnbihjYW52YXNFbGVtZW50LCBzaXplcylcclxuXHJcbiAgICAgIGNhbnZhc0NvbnRleHQuZHJhd0ltYWdlKFxyXG4gICAgICAgIGltYWdlRWxlbWVudCxcclxuICAgICAgICAwLFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgc2l6ZXMud2lkdGgsXHJcbiAgICAgICAgc2l6ZXMuaGVpZ2h0LFxyXG4gICAgICAgIDAsXHJcbiAgICAgICAgMCxcclxuICAgICAgICBzaXplcy53aWR0aCxcclxuICAgICAgICBzaXplcy5oZWlnaHRcclxuICAgICAgKVxyXG5cclxuICAgICAgY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSAnI2RhYTU0MCdcclxuICAgICAgY2FudmFzQ29udGV4dC5maWxsUmVjdCgwLCAwLCBzaXplcy53aWR0aCwgODApXHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpXHJcblxyXG4gICAgICBjYW52YXNFbGVtZW50LnRvQmxvYihjYW52YXNCbG9iID0+IHtcclxuICAgICAgICBpZiAoIWNhbnZhc0Jsb2IpIHtcclxuICAgICAgICAgIHJldHVybiByZWplY3QoJ0NvdWxkIG5vdCBnZW5lcmF0ZSBpbWFnZSB2YXJpYW50JylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgb2JqZWN0OiBjYW52YXNCbG9iLFxyXG4gICAgICAgICAgdXJsOiBpbWFnZUZpbGVVcmxcclxuICAgICAgICB9KVxyXG4gICAgICB9LCAnaW1hZ2UvanBlZycpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVJbWFnZVZhcmlhbnQiLCJpbWFnZUZpbGUiLCJzaXplcyIsImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjYW52YXNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImltYWdlRmlsZVVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImltYWdlRWxlbWVudCIsIkltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25sb2FkIiwiT2JqZWN0IiwiYXNzaWduIiwiZHJhd0ltYWdlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ0b0Jsb2IiLCJjYW52YXNCbG9iIiwib2JqZWN0IiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/upload/utils/generateImageVariant.ts\n"));

/***/ })

});