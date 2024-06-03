"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/layout",{

/***/ "(app-pages-browser)/./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   empty: function() { return /* binding */ empty; },\n/* harmony export */   generateRandomId: function() { return /* binding */ generateRandomId; },\n/* harmony export */   getApiAccessToken: function() { return /* binding */ getApiAccessToken; },\n/* harmony export */   getObjectProps: function() { return /* binding */ getObjectProps; },\n/* harmony export */   getParentButtonElement: function() { return /* binding */ getParentButtonElement; },\n/* harmony export */   noEmpty: function() { return /* binding */ noEmpty; },\n/* harmony export */   range: function() { return /* binding */ range; },\n/* harmony export */   resolvePartnerCompanyNameByLoadingStockMapFormat: function() { return /* binding */ resolvePartnerCompanyNameByLoadingStockMapFormat; },\n/* harmony export */   stringifyCompanyTaxData: function() { return /* binding */ stringifyCompanyTaxData; },\n/* harmony export */   uploadedImageUrl: function() { return /* binding */ uploadedImageUrl; }\n/* harmony export */ });\nconst getApiAccessToken = ()=>{\n    // const authenticationToken = `cookies().get(\n    //   String(process.env.APP_AUTH_COOKIE_NAME)\n    // )`\n    // if (authenticationToken) {\n    //   return authenticationToken\n    // }\n    return \"token\";\n};\nconst stringifyCompanyTaxData = (companyTaxData)=>{\n    return companyTaxData.map((taxData)=>typeof taxData === \"string\" ? taxData : \"\".concat(taxData.label.toUpperCase(), \": \").concat(taxData.value)).join(\" | \");\n};\nconst getParentButtonElement = (element)=>{\n    if (element instanceof HTMLButtonElement) {\n        return element;\n    }\n    if (element.parentNode instanceof HTMLButtonElement) {\n        return element.parentNode;\n    }\n    if (!element.parentNode) {\n        throw new Error(\"The given element has not a parent button element\");\n    }\n    return getParentButtonElement(element.parentNode);\n};\nconst range = (num)=>{\n    const arr = [];\n    let i = 0;\n    while(i++ < num){\n        arr.push(i);\n    }\n    return arr;\n};\nconst noEmpty = (data)=>{\n    return typeof data === \"string\" && /\\S/.test(data);\n};\nconst empty = (data)=>!noEmpty(data);\nconst generateRandomId = ()=>\"10\" + Math.random().toString().replace(/\\./g, \"\") + Date.now() + Math.round(Date.now() * Math.random());\nconst getObjectProps = (object, props)=>{\n    const objectData = {};\n    props = props instanceof Array ? props : [\n        props\n    ];\n    for (const prop of props){\n        const key = prop;\n        if (noEmpty(prop) && typeof object[key] !== typeof undefined) {\n            objectData[key] = object[key];\n        }\n    }\n    return objectData;\n};\nconst resolvePartnerCompanyNameByLoadingStockMapFormat = (loadingStockMap)=>{\n    const re = /\\/([a-zA-Z0-9_\\-\\.]+)$/;\n    const companyNameMatch = re.exec(String(loadingStockMap));\n    if (!companyNameMatch) {\n        return \"\";\n    }\n    return String(companyNameMatch[1] || \"\");\n};\nconst uploadedImageUrl = (imageName, imageVariant)=>\"\".concat(\"http://localhost/anluge-cdn\", \"/static/images/\").concat(imageName.concat(noEmpty(imageVariant) ? \"@\".concat(imageVariant) : \"\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRU8sTUFBTUEsb0JBQW9CO0lBQy9CLDhDQUE4QztJQUM5Qyw2Q0FBNkM7SUFDN0MsS0FBSztJQUVMLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsSUFBSTtJQUVKLE9BQU87QUFDVCxFQUFDO0FBc0JNLE1BQU1DLDBCQUEwQixDQUFDQztJQUN0QyxPQUFPQSxlQUNKQyxHQUFHLENBQUNDLENBQUFBLFVBQ0gsT0FBT0EsWUFBWSxXQUNmQSxVQUNBLEdBQW1DQSxPQUFoQ0EsUUFBUUMsS0FBSyxDQUFDQyxXQUFXLElBQUcsTUFBa0IsT0FBZEYsUUFBUUcsS0FBSyxHQUVyREMsSUFBSSxDQUFDO0FBQ1YsRUFBQztBQUVNLE1BQU1DLHlCQUF5QixDQUNwQ0M7SUFFQSxJQUFJQSxtQkFBbUJDLG1CQUFtQjtRQUN4QyxPQUFPRDtJQUNUO0lBRUEsSUFBSUEsUUFBUUUsVUFBVSxZQUFZRCxtQkFBbUI7UUFDbkQsT0FBT0QsUUFBUUUsVUFBVTtJQUMzQjtJQUVBLElBQUksQ0FBQ0YsUUFBUUUsVUFBVSxFQUFFO1FBQ3ZCLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUVBLE9BQU9KLHVCQUF1QkMsUUFBUUUsVUFBVTtBQUNsRCxFQUFDO0FBRU0sTUFBTUUsUUFBdUJDLENBQUFBO0lBQ2xDLE1BQU1DLE1BQWdCLEVBQUU7SUFFeEIsSUFBSUMsSUFBSTtJQUVSLE1BQU9BLE1BQU1GLElBQUs7UUFDaEJDLElBQUlFLElBQUksQ0FBQ0Q7SUFDWDtJQUVBLE9BQU9EO0FBQ1QsRUFBQztBQUVNLE1BQU1HLFVBQVUsQ0FBQ0M7SUFDdEIsT0FBTyxPQUFPQSxTQUFTLFlBQVksS0FBS0MsSUFBSSxDQUFDRDtBQUMvQyxFQUFDO0FBRU0sTUFBTUUsUUFBUSxDQUFDRixPQUF1QixDQUFDRCxRQUFRQyxNQUFLO0FBRXBELE1BQU1HLG1CQUFtQixJQUM5QixPQUNBQyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsR0FBR0MsT0FBTyxDQUFDLE9BQU8sTUFDeENDLEtBQUtDLEdBQUcsS0FDUkwsS0FBS00sS0FBSyxDQUFDRixLQUFLQyxHQUFHLEtBQUtMLEtBQUtDLE1BQU0sSUFBRztBQUVqQyxNQUFNTSxpQkFBaUIsQ0FDNUJDLFFBQ0FDO0lBRUEsTUFBTUMsYUFBeUIsQ0FBQztJQUVoQ0QsUUFBUUEsaUJBQWlCRSxRQUFRRixRQUFRO1FBQUNBO0tBQU07SUFFaEQsS0FBSyxNQUFNRyxRQUFRSCxNQUFPO1FBQ3hCLE1BQU1JLE1BQU1EO1FBRVosSUFBSWpCLFFBQVFpQixTQUFTLE9BQU9KLE1BQU0sQ0FBQ0ssSUFBSSxLQUFLLE9BQU9DLFdBQVc7WUFDNURKLFVBQVUsQ0FBQ0csSUFBSSxHQUFHTCxNQUFNLENBQUNLLElBQUk7UUFDL0I7SUFDRjtJQUVBLE9BQU9IO0FBQ1QsRUFBQztBQUVNLE1BQU1LLG1EQUFtRCxDQUM5REM7SUFFQSxNQUFNQyxLQUFLO0lBRVgsTUFBTUMsbUJBQW1CRCxHQUFHRSxJQUFJLENBQUNDLE9BQU9KO0lBRXhDLElBQUksQ0FBQ0Usa0JBQWtCO1FBQ3JCLE9BQU87SUFDVDtJQUVBLE9BQU9FLE9BQU9GLGdCQUFnQixDQUFDLEVBQUUsSUFBSTtBQUN2QyxFQUFDO0FBRU0sTUFBTUcsbUJBQW1CLENBQzlCQyxXQUNBQyxlQUVBLEdBQStERCxPQUE1REUsNkJBQTBDLEVBQUMsbUJBQW1GLE9BQWxFRixVQUFVSyxNQUFNLENBQUNoQyxRQUFRNEIsZ0JBQWdCLElBQWlCLE9BQWJBLGdCQUFpQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9pbmRleC50cz9hY2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvYWRpbmdTdG9ja01hcCB9IGZyb20gJ34vVHlwZXMvUHJvZHVjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBcGlBY2Nlc3NUb2tlbiA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gIC8vIGNvbnN0IGF1dGhlbnRpY2F0aW9uVG9rZW4gPSBgY29va2llcygpLmdldChcclxuICAvLyAgIFN0cmluZyhwcm9jZXNzLmVudi5BUFBfQVVUSF9DT09LSUVfTkFNRSlcclxuICAvLyApYFxyXG5cclxuICAvLyBpZiAoYXV0aGVudGljYXRpb25Ub2tlbikge1xyXG4gIC8vICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uVG9rZW5cclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAndG9rZW4nXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvbXBhbnlUYXhEYXRhID0gQXJyYXk8XHJcbiAgfCBzdHJpbmdcclxuICB8IHtcclxuICAgICAgbGFiZWw6IHN0cmluZ1xyXG4gICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICB9XHJcbj5cclxuXHJcbmV4cG9ydCB0eXBlIFVwbG9hZGVkSW1hZ2VWYXJpYW50S2V5ID1cclxuICB8ICdsYXJnZSdcclxuICB8ICdzbWFsbCdcclxuICB8ICd0aHVtYidcclxuICB8ICdtZWRpdW0nXHJcbiAgfCAnZGVmYXVsdCdcclxuICB8ICd4LXNtYWxsJ1xyXG4gIHwgJ3gtbGFyZ2UnXHJcbiAgfCAneHgtbGFyZ2UnXHJcblxyXG50eXBlIFJhbmdlRnVuY3Rpb24gPSAobnVtOiBudW1iZXIpID0+IG51bWJlcltdXHJcblxyXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5Q29tcGFueVRheERhdGEgPSAoY29tcGFueVRheERhdGE6IENvbXBhbnlUYXhEYXRhKSA9PiB7XHJcbiAgcmV0dXJuIGNvbXBhbnlUYXhEYXRhXHJcbiAgICAubWFwKHRheERhdGEgPT5cclxuICAgICAgdHlwZW9mIHRheERhdGEgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgPyB0YXhEYXRhXHJcbiAgICAgICAgOiBgJHt0YXhEYXRhLmxhYmVsLnRvVXBwZXJDYXNlKCl9OiAke3RheERhdGEudmFsdWV9YFxyXG4gICAgKVxyXG4gICAgLmpvaW4oJyB8ICcpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQYXJlbnRCdXR0b25FbGVtZW50ID0gKFxyXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50XHJcbik6IEhUTUxCdXR0b25FbGVtZW50ID0+IHtcclxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG4gIH1cclxuXHJcbiAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlXHJcbiAgfVxyXG5cclxuICBpZiAoIWVsZW1lbnQucGFyZW50Tm9kZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZ2l2ZW4gZWxlbWVudCBoYXMgbm90IGEgcGFyZW50IGJ1dHRvbiBlbGVtZW50JylcclxuICB9XHJcblxyXG4gIHJldHVybiBnZXRQYXJlbnRCdXR0b25FbGVtZW50KGVsZW1lbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJhbmdlOiBSYW5nZUZ1bmN0aW9uID0gbnVtID0+IHtcclxuICBjb25zdCBhcnI6IG51bWJlcltdID0gW11cclxuXHJcbiAgbGV0IGkgPSAwXHJcblxyXG4gIHdoaWxlIChpKysgPCBudW0pIHtcclxuICAgIGFyci5wdXNoKGkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBub0VtcHR5ID0gKGRhdGE6IGFueSk6IGRhdGEgaXMgc3RyaW5nID0+IHtcclxuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICYmIC9cXFMvLnRlc3QoZGF0YSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVtcHR5ID0gKGRhdGE6IGFueSk6IGJvb2xlYW4gPT4gIW5vRW1wdHkoZGF0YSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJhbmRvbUlkID0gKCk6IHN0cmluZyA9PlxyXG4gICcxMCcgK1xyXG4gIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKS5yZXBsYWNlKC9cXC4vZywgJycpICtcclxuICBEYXRlLm5vdygpICtcclxuICBNYXRoLnJvdW5kKERhdGUubm93KCkgKiBNYXRoLnJhbmRvbSgpKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE9iamVjdFByb3BzID0gPE9iamVjdFR5cGUgPSBhbnk+KFxyXG4gIG9iamVjdDogT2JqZWN0VHlwZSxcclxuICBwcm9wczogQXJyYXk8a2V5b2YgT2JqZWN0VHlwZT4gfCBrZXlvZiBPYmplY3RUeXBlXHJcbik6IE9iamVjdFR5cGUgPT4ge1xyXG4gIGNvbnN0IG9iamVjdERhdGE6IE9iamVjdFR5cGUgPSB7fSBhcyBPYmplY3RUeXBlXHJcblxyXG4gIHByb3BzID0gcHJvcHMgaW5zdGFuY2VvZiBBcnJheSA/IHByb3BzIDogW3Byb3BzXVxyXG5cclxuICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcHMpIHtcclxuICAgIGNvbnN0IGtleSA9IHByb3AgYXMga2V5b2YgT2JqZWN0VHlwZVxyXG5cclxuICAgIGlmIChub0VtcHR5KHByb3ApICYmIHR5cGVvZiBvYmplY3Rba2V5XSAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xyXG4gICAgICBvYmplY3REYXRhW2tleV0gPSBvYmplY3Rba2V5XVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iamVjdERhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVQYXJ0bmVyQ29tcGFueU5hbWVCeUxvYWRpbmdTdG9ja01hcEZvcm1hdCA9IChcclxuICBsb2FkaW5nU3RvY2tNYXA/OiBMb2FkaW5nU3RvY2tNYXBcclxuKTogc3RyaW5nID0+IHtcclxuICBjb25zdCByZSA9IC9cXC8oW2EtekEtWjAtOV9cXC1cXC5dKykkL1xyXG5cclxuICBjb25zdCBjb21wYW55TmFtZU1hdGNoID0gcmUuZXhlYyhTdHJpbmcobG9hZGluZ1N0b2NrTWFwKSlcclxuXHJcbiAgaWYgKCFjb21wYW55TmFtZU1hdGNoKSB7XHJcbiAgICByZXR1cm4gJydcclxuICB9XHJcblxyXG4gIHJldHVybiBTdHJpbmcoY29tcGFueU5hbWVNYXRjaFsxXSB8fCAnJylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwbG9hZGVkSW1hZ2VVcmwgPSAoXHJcbiAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgaW1hZ2VWYXJpYW50PzogVXBsb2FkZWRJbWFnZVZhcmlhbnRLZXlcclxuKTogc3RyaW5nID0+XHJcbiAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQU5MVUdFX0NETl9BUElfVVJMfS9zdGF0aWMvaW1hZ2VzLyR7aW1hZ2VOYW1lLmNvbmNhdChub0VtcHR5KGltYWdlVmFyaWFudCkgPyBgQCR7aW1hZ2VWYXJpYW50fWAgOiAnJyl9YFxyXG4iXSwibmFtZXMiOlsiZ2V0QXBpQWNjZXNzVG9rZW4iLCJzdHJpbmdpZnlDb21wYW55VGF4RGF0YSIsImNvbXBhbnlUYXhEYXRhIiwibWFwIiwidGF4RGF0YSIsImxhYmVsIiwidG9VcHBlckNhc2UiLCJ2YWx1ZSIsImpvaW4iLCJnZXRQYXJlbnRCdXR0b25FbGVtZW50IiwiZWxlbWVudCIsIkhUTUxCdXR0b25FbGVtZW50IiwicGFyZW50Tm9kZSIsIkVycm9yIiwicmFuZ2UiLCJudW0iLCJhcnIiLCJpIiwicHVzaCIsIm5vRW1wdHkiLCJkYXRhIiwidGVzdCIsImVtcHR5IiwiZ2VuZXJhdGVSYW5kb21JZCIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJEYXRlIiwibm93Iiwicm91bmQiLCJnZXRPYmplY3RQcm9wcyIsIm9iamVjdCIsInByb3BzIiwib2JqZWN0RGF0YSIsIkFycmF5IiwicHJvcCIsImtleSIsInVuZGVmaW5lZCIsInJlc29sdmVQYXJ0bmVyQ29tcGFueU5hbWVCeUxvYWRpbmdTdG9ja01hcEZvcm1hdCIsImxvYWRpbmdTdG9ja01hcCIsInJlIiwiY29tcGFueU5hbWVNYXRjaCIsImV4ZWMiLCJTdHJpbmciLCJ1cGxvYWRlZEltYWdlVXJsIiwiaW1hZ2VOYW1lIiwiaW1hZ2VWYXJpYW50IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FOTFVHRV9DRE5fQVBJX1VSTCIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/index.ts\n"));

/***/ })

});