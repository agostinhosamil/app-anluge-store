"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/file-selector";
exports.ids = ["vendor-chunks/file-selector"];
exports.modules = {

/***/ "(ssr)/./node_modules/file-selector/dist/es5/file-selector.js":
/*!**************************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/file-selector.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromEvent: () => (/* binding */ fromEvent)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"(ssr)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file */ \"(ssr)/./node_modules/file-selector/dist/es5/file.js\");\n\n\nvar FILES_TO_IGNORE = [\n    // Thumbnail cache files for macOS and Windows\n    '.DS_Store',\n    'Thumbs.db' // Windows\n];\n/**\n * Convert a DragEvent's DataTrasfer object to a list of File objects\n * NOTE: If some of the items are folders,\n * everything will be flattened and placed in the same list but the paths will be kept as a {path} property.\n *\n * EXPERIMENTAL: A list of https://developer.mozilla.org/en-US/docs/Web/API/FileSystemHandle objects can also be passed as an arg\n * and a list of File objects will be returned.\n *\n * @param evt\n */\nfunction fromEvent(evt) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            if (isObject(evt) && isDataTransfer(evt.dataTransfer)) {\n                return [2 /*return*/, getDataTransferFiles(evt.dataTransfer, evt.type)];\n            }\n            else if (isChangeEvt(evt)) {\n                return [2 /*return*/, getInputFiles(evt)];\n            }\n            else if (Array.isArray(evt) && evt.every(function (item) { return 'getFile' in item && typeof item.getFile === 'function'; })) {\n                return [2 /*return*/, getFsHandleFiles(evt)];\n            }\n            return [2 /*return*/, []];\n        });\n    });\n}\nfunction isDataTransfer(value) {\n    return isObject(value);\n}\nfunction isChangeEvt(value) {\n    return isObject(value) && isObject(value.target);\n}\nfunction isObject(v) {\n    return typeof v === 'object' && v !== null;\n}\nfunction getInputFiles(evt) {\n    return fromList(evt.target.files).map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); });\n}\n// Ee expect each handle to be https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileHandle\nfunction getFsHandleFiles(handles) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        var files;\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, Promise.all(handles.map(function (h) { return h.getFile(); }))];\n                case 1:\n                    files = _a.sent();\n                    return [2 /*return*/, files.map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); })];\n            }\n        });\n    });\n}\nfunction getDataTransferFiles(dt, type) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        var items, files;\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    if (!dt.items) return [3 /*break*/, 2];\n                    items = fromList(dt.items)\n                        .filter(function (item) { return item.kind === 'file'; });\n                    // According to https://html.spec.whatwg.org/multipage/dnd.html#dndevents,\n                    // only 'dragstart' and 'drop' has access to the data (source node)\n                    if (type !== 'drop') {\n                        return [2 /*return*/, items];\n                    }\n                    return [4 /*yield*/, Promise.all(items.map(toFilePromises))];\n                case 1:\n                    files = _a.sent();\n                    return [2 /*return*/, noIgnoredFiles(flatten(files))];\n                case 2: return [2 /*return*/, noIgnoredFiles(fromList(dt.files)\n                        .map(function (file) { return (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file); }))];\n            }\n        });\n    });\n}\nfunction noIgnoredFiles(files) {\n    return files.filter(function (file) { return FILES_TO_IGNORE.indexOf(file.name) === -1; });\n}\n// IE11 does not support Array.from()\n// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Browser_compatibility\n// https://developer.mozilla.org/en-US/docs/Web/API/FileList\n// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList\nfunction fromList(items) {\n    if (items === null) {\n        return [];\n    }\n    var files = [];\n    // tslint:disable: prefer-for-of\n    for (var i = 0; i < items.length; i++) {\n        var file = items[i];\n        files.push(file);\n    }\n    return files;\n}\n// https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem\nfunction toFilePromises(item) {\n    if (typeof item.webkitGetAsEntry !== 'function') {\n        return fromDataTransferItem(item);\n    }\n    var entry = item.webkitGetAsEntry();\n    // Safari supports dropping an image node from a different window and can be retrieved using\n    // the DataTransferItem.getAsFile() API\n    // NOTE: FileSystemEntry.file() throws if trying to get the file\n    if (entry && entry.isDirectory) {\n        return fromDirEntry(entry);\n    }\n    return fromDataTransferItem(item);\n}\nfunction flatten(items) {\n    return items.reduce(function (acc, files) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(acc), false), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)((Array.isArray(files) ? flatten(files) : [files])), false); }, []);\n}\nfunction fromDataTransferItem(item) {\n    var file = item.getAsFile();\n    if (!file) {\n        return Promise.reject(\"\".concat(item, \" is not a File\"));\n    }\n    var fwp = (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file);\n    return Promise.resolve(fwp);\n}\n// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemEntry\nfunction fromEntry(entry) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            return [2 /*return*/, entry.isDirectory ? fromDirEntry(entry) : fromFileEntry(entry)];\n        });\n    });\n}\n// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry\nfunction fromDirEntry(entry) {\n    var reader = entry.createReader();\n    return new Promise(function (resolve, reject) {\n        var entries = [];\n        function readEntries() {\n            var _this = this;\n            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry/createReader\n            // https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader/readEntries\n            reader.readEntries(function (batch) { return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(_this, void 0, void 0, function () {\n                var files, err_1, items;\n                return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            if (!!batch.length) return [3 /*break*/, 5];\n                            _a.label = 1;\n                        case 1:\n                            _a.trys.push([1, 3, , 4]);\n                            return [4 /*yield*/, Promise.all(entries)];\n                        case 2:\n                            files = _a.sent();\n                            resolve(files);\n                            return [3 /*break*/, 4];\n                        case 3:\n                            err_1 = _a.sent();\n                            reject(err_1);\n                            return [3 /*break*/, 4];\n                        case 4: return [3 /*break*/, 6];\n                        case 5:\n                            items = Promise.all(batch.map(fromEntry));\n                            entries.push(items);\n                            // Continue reading\n                            readEntries();\n                            _a.label = 6;\n                        case 6: return [2 /*return*/];\n                    }\n                });\n            }); }, function (err) {\n                reject(err);\n            });\n        }\n        readEntries();\n    });\n}\n// https://developer.mozilla.org/en-US/docs/Web/API/FileSystemFileEntry\nfunction fromFileEntry(entry) {\n    return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {\n        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {\n            return [2 /*return*/, new Promise(function (resolve, reject) {\n                    entry.file(function (file) {\n                        var fwp = (0,_file__WEBPACK_IMPORTED_MODULE_0__.toFileWithPath)(file, entry.fullPath);\n                        resolve(fwp);\n                    }, function (err) {\n                        reject(err);\n                    });\n                })];\n        });\n    });\n}\n//# sourceMappingURL=file-selector.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9maWxlLXNlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRTtBQUM5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLE1BQU07QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxXQUFXLGdEQUFTO0FBQ3BCLGVBQWUsa0RBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGlFQUFpRTtBQUN4STtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsT0FBTyxxREFBYyxTQUFTO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQSxlQUFlLGtEQUFXO0FBQzFCO0FBQ0Esb0ZBQW9GLHFCQUFxQjtBQUN6RztBQUNBO0FBQ0Esc0VBQXNFLE9BQU8scURBQWMsU0FBUztBQUNwRztBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEI7QUFDQSxlQUFlLGtEQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDhCQUE4QjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxPQUFPLHFEQUFjLFNBQVM7QUFDN0U7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSwwQ0FBMEMsbURBQW1EO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTyxvREFBYSxDQUFDLG9EQUFhLEtBQUssNkNBQU0sZUFBZSw2Q0FBTSw4REFBOEQ7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxREFBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0RBQVM7QUFDcEIsZUFBZSxrREFBVztBQUMxQjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsT0FBTyxnREFBUztBQUNsRTtBQUNBLHVCQUF1QixrREFBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnREFBUztBQUNwQixlQUFlLGtEQUFXO0FBQzFCO0FBQ0E7QUFDQSxrQ0FBa0MscURBQWM7QUFDaEQ7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdW5nZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9maWxlLXNlbGVjdG9yL2Rpc3QvZXM1L2ZpbGUtc2VsZWN0b3IuanM/MjYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yLCBfX3JlYWQsIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IHRvRmlsZVdpdGhQYXRoIH0gZnJvbSAnLi9maWxlJztcbnZhciBGSUxFU19UT19JR05PUkUgPSBbXG4gICAgLy8gVGh1bWJuYWlsIGNhY2hlIGZpbGVzIGZvciBtYWNPUyBhbmQgV2luZG93c1xuICAgICcuRFNfU3RvcmUnLFxuICAgICdUaHVtYnMuZGInIC8vIFdpbmRvd3Ncbl07XG4vKipcbiAqIENvbnZlcnQgYSBEcmFnRXZlbnQncyBEYXRhVHJhc2ZlciBvYmplY3QgdG8gYSBsaXN0IG9mIEZpbGUgb2JqZWN0c1xuICogTk9URTogSWYgc29tZSBvZiB0aGUgaXRlbXMgYXJlIGZvbGRlcnMsXG4gKiBldmVyeXRoaW5nIHdpbGwgYmUgZmxhdHRlbmVkIGFuZCBwbGFjZWQgaW4gdGhlIHNhbWUgbGlzdCBidXQgdGhlIHBhdGhzIHdpbGwgYmUga2VwdCBhcyBhIHtwYXRofSBwcm9wZXJ0eS5cbiAqXG4gKiBFWFBFUklNRU5UQUw6IEEgbGlzdCBvZiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbUhhbmRsZSBvYmplY3RzIGNhbiBhbHNvIGJlIHBhc3NlZCBhcyBhbiBhcmdcbiAqIGFuZCBhIGxpc3Qgb2YgRmlsZSBvYmplY3RzIHdpbGwgYmUgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIGV2dFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUV2ZW50KGV2dCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KGV2dCkgJiYgaXNEYXRhVHJhbnNmZXIoZXZ0LmRhdGFUcmFuc2ZlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZ2V0RGF0YVRyYW5zZmVyRmlsZXMoZXZ0LmRhdGFUcmFuc2ZlciwgZXZ0LnR5cGUpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzQ2hhbmdlRXZ0KGV2dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZ2V0SW5wdXRGaWxlcyhldnQpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZXZ0KSAmJiBldnQuZXZlcnkoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICdnZXRGaWxlJyBpbiBpdGVtICYmIHR5cGVvZiBpdGVtLmdldEZpbGUgPT09ICdmdW5jdGlvbic7IH0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGdldEZzSGFuZGxlRmlsZXMoZXZ0KV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgW11dO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzRGF0YVRyYW5zZmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzQ2hhbmdlRXZ0KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBpc09iamVjdCh2YWx1ZS50YXJnZXQpO1xufVxuZnVuY3Rpb24gaXNPYmplY3Qodikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGdldElucHV0RmlsZXMoZXZ0KSB7XG4gICAgcmV0dXJuIGZyb21MaXN0KGV2dC50YXJnZXQuZmlsZXMpLm1hcChmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gdG9GaWxlV2l0aFBhdGgoZmlsZSk7IH0pO1xufVxuLy8gRWUgZXhwZWN0IGVhY2ggaGFuZGxlIHRvIGJlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRmlsZUhhbmRsZVxuZnVuY3Rpb24gZ2V0RnNIYW5kbGVGaWxlcyhoYW5kbGVzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZmlsZXM7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKGhhbmRsZXMubWFwKGZ1bmN0aW9uIChoKSB7IHJldHVybiBoLmdldEZpbGUoKTsgfSkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGZpbGVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmlsZXMubWFwKGZ1bmN0aW9uIChmaWxlKSB7IHJldHVybiB0b0ZpbGVXaXRoUGF0aChmaWxlKTsgfSldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldERhdGFUcmFuc2ZlckZpbGVzKGR0LCB0eXBlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXRlbXMsIGZpbGVzO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIWR0Lml0ZW1zKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMgPSBmcm9tTGlzdChkdC5pdGVtcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0ua2luZCA9PT0gJ2ZpbGUnOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQWNjb3JkaW5nIHRvIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2RuZC5odG1sI2RuZGV2ZW50cyxcbiAgICAgICAgICAgICAgICAgICAgLy8gb25seSAnZHJhZ3N0YXJ0JyBhbmQgJ2Ryb3AnIGhhcyBhY2Nlc3MgdG8gdGhlIGRhdGEgKHNvdXJjZSBub2RlKVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gJ2Ryb3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgaXRlbXNdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKGl0ZW1zLm1hcCh0b0ZpbGVQcm9taXNlcykpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGZpbGVzID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbm9JZ25vcmVkRmlsZXMoZmxhdHRlbihmaWxlcykpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovLCBub0lnbm9yZWRGaWxlcyhmcm9tTGlzdChkdC5maWxlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGZpbGUpIHsgcmV0dXJuIHRvRmlsZVdpdGhQYXRoKGZpbGUpOyB9KSldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG5vSWdub3JlZEZpbGVzKGZpbGVzKSB7XG4gICAgcmV0dXJuIGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkgeyByZXR1cm4gRklMRVNfVE9fSUdOT1JFLmluZGV4T2YoZmlsZS5uYW1lKSA9PT0gLTE7IH0pO1xufVxuLy8gSUUxMSBkb2VzIG5vdCBzdXBwb3J0IEFycmF5LmZyb20oKVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZnJvbSNCcm93c2VyX2NvbXBhdGliaWxpdHlcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlTGlzdFxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RhdGFUcmFuc2Zlckl0ZW1MaXN0XG5mdW5jdGlvbiBmcm9tTGlzdChpdGVtcykge1xuICAgIGlmIChpdGVtcyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBmaWxlcyA9IFtdO1xuICAgIC8vIHRzbGludDpkaXNhYmxlOiBwcmVmZXItZm9yLW9mXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZmlsZSA9IGl0ZW1zW2ldO1xuICAgICAgICBmaWxlcy5wdXNoKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmlsZXM7XG59XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRGF0YVRyYW5zZmVySXRlbVxuZnVuY3Rpb24gdG9GaWxlUHJvbWlzZXMoaXRlbSkge1xuICAgIGlmICh0eXBlb2YgaXRlbS53ZWJraXRHZXRBc0VudHJ5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmcm9tRGF0YVRyYW5zZmVySXRlbShpdGVtKTtcbiAgICB9XG4gICAgdmFyIGVudHJ5ID0gaXRlbS53ZWJraXRHZXRBc0VudHJ5KCk7XG4gICAgLy8gU2FmYXJpIHN1cHBvcnRzIGRyb3BwaW5nIGFuIGltYWdlIG5vZGUgZnJvbSBhIGRpZmZlcmVudCB3aW5kb3cgYW5kIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmdcbiAgICAvLyB0aGUgRGF0YVRyYW5zZmVySXRlbS5nZXRBc0ZpbGUoKSBBUElcbiAgICAvLyBOT1RFOiBGaWxlU3lzdGVtRW50cnkuZmlsZSgpIHRocm93cyBpZiB0cnlpbmcgdG8gZ2V0IHRoZSBmaWxlXG4gICAgaWYgKGVudHJ5ICYmIGVudHJ5LmlzRGlyZWN0b3J5KSB7XG4gICAgICAgIHJldHVybiBmcm9tRGlyRW50cnkoZW50cnkpO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbURhdGFUcmFuc2Zlckl0ZW0oaXRlbSk7XG59XG5mdW5jdGlvbiBmbGF0dGVuKGl0ZW1zKSB7XG4gICAgcmV0dXJuIGl0ZW1zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmaWxlcykgeyByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYWNjKSwgZmFsc2UpLCBfX3JlYWQoKEFycmF5LmlzQXJyYXkoZmlsZXMpID8gZmxhdHRlbihmaWxlcykgOiBbZmlsZXNdKSksIGZhbHNlKTsgfSwgW10pO1xufVxuZnVuY3Rpb24gZnJvbURhdGFUcmFuc2Zlckl0ZW0oaXRlbSkge1xuICAgIHZhciBmaWxlID0gaXRlbS5nZXRBc0ZpbGUoKTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFwiXCIuY29uY2F0KGl0ZW0sIFwiIGlzIG5vdCBhIEZpbGVcIikpO1xuICAgIH1cbiAgICB2YXIgZndwID0gdG9GaWxlV2l0aFBhdGgoZmlsZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmd3ApO1xufVxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1FbnRyeVxuZnVuY3Rpb24gZnJvbUVudHJ5KGVudHJ5KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZW50cnkuaXNEaXJlY3RvcnkgPyBmcm9tRGlyRW50cnkoZW50cnkpIDogZnJvbUZpbGVFbnRyeShlbnRyeSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRGlyZWN0b3J5RW50cnlcbmZ1bmN0aW9uIGZyb21EaXJFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWFkZXIgPSBlbnRyeS5jcmVhdGVSZWFkZXIoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgICAgICBmdW5jdGlvbiByZWFkRW50cmllcygpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVN5c3RlbURpcmVjdG9yeUVudHJ5L2NyZWF0ZVJlYWRlclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVTeXN0ZW1EaXJlY3RvcnlSZWFkZXIvcmVhZEVudHJpZXNcbiAgICAgICAgICAgIHJlYWRlci5yZWFkRW50cmllcyhmdW5jdGlvbiAoYmF0Y2gpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsZXMsIGVycl8xLCBpdGVtcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFiYXRjaC5sZW5ndGgpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKGVudHJpZXMpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IFByb21pc2UuYWxsKGJhdGNoLm1hcChmcm9tRW50cnkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyaWVzLnB1c2goaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHJlYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkRW50cmllcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVhZEVudHJpZXMoKTtcbiAgICB9KTtcbn1cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlU3lzdGVtRmlsZUVudHJ5XG5mdW5jdGlvbiBmcm9tRmlsZUVudHJ5KGVudHJ5KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5maWxlKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZndwID0gdG9GaWxlV2l0aFBhdGgoZmlsZSwgZW50cnkuZnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmd3ApO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZpbGUtc2VsZWN0b3IuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/file-selector/dist/es5/file-selector.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/file-selector/dist/es5/file.js":
/*!*****************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/file.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   COMMON_MIME_TYPES: () => (/* binding */ COMMON_MIME_TYPES),\n/* harmony export */   toFileWithPath: () => (/* binding */ toFileWithPath)\n/* harmony export */ });\nvar COMMON_MIME_TYPES = new Map([\n    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types\n    ['aac', 'audio/aac'],\n    ['abw', 'application/x-abiword'],\n    ['arc', 'application/x-freearc'],\n    ['avif', 'image/avif'],\n    ['avi', 'video/x-msvideo'],\n    ['azw', 'application/vnd.amazon.ebook'],\n    ['bin', 'application/octet-stream'],\n    ['bmp', 'image/bmp'],\n    ['bz', 'application/x-bzip'],\n    ['bz2', 'application/x-bzip2'],\n    ['cda', 'application/x-cdf'],\n    ['csh', 'application/x-csh'],\n    ['css', 'text/css'],\n    ['csv', 'text/csv'],\n    ['doc', 'application/msword'],\n    ['docx', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],\n    ['eot', 'application/vnd.ms-fontobject'],\n    ['epub', 'application/epub+zip'],\n    ['gz', 'application/gzip'],\n    ['gif', 'image/gif'],\n    ['heic', 'image/heic'],\n    ['heif', 'image/heif'],\n    ['htm', 'text/html'],\n    ['html', 'text/html'],\n    ['ico', 'image/vnd.microsoft.icon'],\n    ['ics', 'text/calendar'],\n    ['jar', 'application/java-archive'],\n    ['jpeg', 'image/jpeg'],\n    ['jpg', 'image/jpeg'],\n    ['js', 'text/javascript'],\n    ['json', 'application/json'],\n    ['jsonld', 'application/ld+json'],\n    ['mid', 'audio/midi'],\n    ['midi', 'audio/midi'],\n    ['mjs', 'text/javascript'],\n    ['mp3', 'audio/mpeg'],\n    ['mp4', 'video/mp4'],\n    ['mpeg', 'video/mpeg'],\n    ['mpkg', 'application/vnd.apple.installer+xml'],\n    ['odp', 'application/vnd.oasis.opendocument.presentation'],\n    ['ods', 'application/vnd.oasis.opendocument.spreadsheet'],\n    ['odt', 'application/vnd.oasis.opendocument.text'],\n    ['oga', 'audio/ogg'],\n    ['ogv', 'video/ogg'],\n    ['ogx', 'application/ogg'],\n    ['opus', 'audio/opus'],\n    ['otf', 'font/otf'],\n    ['png', 'image/png'],\n    ['pdf', 'application/pdf'],\n    ['php', 'application/x-httpd-php'],\n    ['ppt', 'application/vnd.ms-powerpoint'],\n    ['pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],\n    ['rar', 'application/vnd.rar'],\n    ['rtf', 'application/rtf'],\n    ['sh', 'application/x-sh'],\n    ['svg', 'image/svg+xml'],\n    ['swf', 'application/x-shockwave-flash'],\n    ['tar', 'application/x-tar'],\n    ['tif', 'image/tiff'],\n    ['tiff', 'image/tiff'],\n    ['ts', 'video/mp2t'],\n    ['ttf', 'font/ttf'],\n    ['txt', 'text/plain'],\n    ['vsd', 'application/vnd.visio'],\n    ['wav', 'audio/wav'],\n    ['weba', 'audio/webm'],\n    ['webm', 'video/webm'],\n    ['webp', 'image/webp'],\n    ['woff', 'font/woff'],\n    ['woff2', 'font/woff2'],\n    ['xhtml', 'application/xhtml+xml'],\n    ['xls', 'application/vnd.ms-excel'],\n    ['xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],\n    ['xml', 'application/xml'],\n    ['xul', 'application/vnd.mozilla.xul+xml'],\n    ['zip', 'application/zip'],\n    ['7z', 'application/x-7z-compressed'],\n    // Others\n    ['mkv', 'video/x-matroska'],\n    ['mov', 'video/quicktime'],\n    ['msg', 'application/vnd.ms-outlook']\n]);\nfunction toFileWithPath(file, path) {\n    var f = withMimeType(file);\n    if (typeof f.path !== 'string') { // on electron, path is already set to the absolute path\n        var webkitRelativePath = file.webkitRelativePath;\n        Object.defineProperty(f, 'path', {\n            value: typeof path === 'string'\n                ? path\n                // If <input webkitdirectory> is set,\n                // the File will have a {webkitRelativePath} property\n                // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory\n                : typeof webkitRelativePath === 'string' && webkitRelativePath.length > 0\n                    ? webkitRelativePath\n                    : file.name,\n            writable: false,\n            configurable: false,\n            enumerable: true\n        });\n    }\n    return f;\n}\nfunction withMimeType(file) {\n    var name = file.name;\n    var hasExtension = name && name.lastIndexOf('.') !== -1;\n    if (hasExtension && !file.type) {\n        var ext = name.split('.')\n            .pop().toLowerCase();\n        var type = COMMON_MIME_TYPES.get(ext);\n        if (type) {\n            Object.defineProperty(file, 'type', {\n                value: type,\n                writable: false,\n                configurable: false,\n                enumerable: true\n            });\n        }\n    }\n    return file;\n}\n//# sourceMappingURL=file.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9maWxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLG9CQUFvQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx1bmdlLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2VsZWN0b3IvZGlzdC9lczUvZmlsZS5qcz9kYmNlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgQ09NTU9OX01JTUVfVFlQRVMgPSBuZXcgTWFwKFtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL01JTUVfdHlwZXMvQ29tbW9uX3R5cGVzXG4gICAgWydhYWMnLCAnYXVkaW8vYWFjJ10sXG4gICAgWydhYncnLCAnYXBwbGljYXRpb24veC1hYml3b3JkJ10sXG4gICAgWydhcmMnLCAnYXBwbGljYXRpb24veC1mcmVlYXJjJ10sXG4gICAgWydhdmlmJywgJ2ltYWdlL2F2aWYnXSxcbiAgICBbJ2F2aScsICd2aWRlby94LW1zdmlkZW8nXSxcbiAgICBbJ2F6dycsICdhcHBsaWNhdGlvbi92bmQuYW1hem9uLmVib29rJ10sXG4gICAgWydiaW4nLCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ10sXG4gICAgWydibXAnLCAnaW1hZ2UvYm1wJ10sXG4gICAgWydieicsICdhcHBsaWNhdGlvbi94LWJ6aXAnXSxcbiAgICBbJ2J6MicsICdhcHBsaWNhdGlvbi94LWJ6aXAyJ10sXG4gICAgWydjZGEnLCAnYXBwbGljYXRpb24veC1jZGYnXSxcbiAgICBbJ2NzaCcsICdhcHBsaWNhdGlvbi94LWNzaCddLFxuICAgIFsnY3NzJywgJ3RleHQvY3NzJ10sXG4gICAgWydjc3YnLCAndGV4dC9jc3YnXSxcbiAgICBbJ2RvYycsICdhcHBsaWNhdGlvbi9tc3dvcmQnXSxcbiAgICBbJ2RvY3gnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnXSxcbiAgICBbJ2VvdCcsICdhcHBsaWNhdGlvbi92bmQubXMtZm9udG9iamVjdCddLFxuICAgIFsnZXB1YicsICdhcHBsaWNhdGlvbi9lcHViK3ppcCddLFxuICAgIFsnZ3onLCAnYXBwbGljYXRpb24vZ3ppcCddLFxuICAgIFsnZ2lmJywgJ2ltYWdlL2dpZiddLFxuICAgIFsnaGVpYycsICdpbWFnZS9oZWljJ10sXG4gICAgWydoZWlmJywgJ2ltYWdlL2hlaWYnXSxcbiAgICBbJ2h0bScsICd0ZXh0L2h0bWwnXSxcbiAgICBbJ2h0bWwnLCAndGV4dC9odG1sJ10sXG4gICAgWydpY28nLCAnaW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uJ10sXG4gICAgWydpY3MnLCAndGV4dC9jYWxlbmRhciddLFxuICAgIFsnamFyJywgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZSddLFxuICAgIFsnanBlZycsICdpbWFnZS9qcGVnJ10sXG4gICAgWydqcGcnLCAnaW1hZ2UvanBlZyddLFxuICAgIFsnanMnLCAndGV4dC9qYXZhc2NyaXB0J10sXG4gICAgWydqc29uJywgJ2FwcGxpY2F0aW9uL2pzb24nXSxcbiAgICBbJ2pzb25sZCcsICdhcHBsaWNhdGlvbi9sZCtqc29uJ10sXG4gICAgWydtaWQnLCAnYXVkaW8vbWlkaSddLFxuICAgIFsnbWlkaScsICdhdWRpby9taWRpJ10sXG4gICAgWydtanMnLCAndGV4dC9qYXZhc2NyaXB0J10sXG4gICAgWydtcDMnLCAnYXVkaW8vbXBlZyddLFxuICAgIFsnbXA0JywgJ3ZpZGVvL21wNCddLFxuICAgIFsnbXBlZycsICd2aWRlby9tcGVnJ10sXG4gICAgWydtcGtnJywgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5pbnN0YWxsZXIreG1sJ10sXG4gICAgWydvZHAnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nXSxcbiAgICBbJ29kcycsICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0J10sXG4gICAgWydvZHQnLCAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0J10sXG4gICAgWydvZ2EnLCAnYXVkaW8vb2dnJ10sXG4gICAgWydvZ3YnLCAndmlkZW8vb2dnJ10sXG4gICAgWydvZ3gnLCAnYXBwbGljYXRpb24vb2dnJ10sXG4gICAgWydvcHVzJywgJ2F1ZGlvL29wdXMnXSxcbiAgICBbJ290ZicsICdmb250L290ZiddLFxuICAgIFsncG5nJywgJ2ltYWdlL3BuZyddLFxuICAgIFsncGRmJywgJ2FwcGxpY2F0aW9uL3BkZiddLFxuICAgIFsncGhwJywgJ2FwcGxpY2F0aW9uL3gtaHR0cGQtcGhwJ10sXG4gICAgWydwcHQnLCAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnXSxcbiAgICBbJ3BwdHgnLCAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbiddLFxuICAgIFsncmFyJywgJ2FwcGxpY2F0aW9uL3ZuZC5yYXInXSxcbiAgICBbJ3J0ZicsICdhcHBsaWNhdGlvbi9ydGYnXSxcbiAgICBbJ3NoJywgJ2FwcGxpY2F0aW9uL3gtc2gnXSxcbiAgICBbJ3N2ZycsICdpbWFnZS9zdmcreG1sJ10sXG4gICAgWydzd2YnLCAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXSxcbiAgICBbJ3RhcicsICdhcHBsaWNhdGlvbi94LXRhciddLFxuICAgIFsndGlmJywgJ2ltYWdlL3RpZmYnXSxcbiAgICBbJ3RpZmYnLCAnaW1hZ2UvdGlmZiddLFxuICAgIFsndHMnLCAndmlkZW8vbXAydCddLFxuICAgIFsndHRmJywgJ2ZvbnQvdHRmJ10sXG4gICAgWyd0eHQnLCAndGV4dC9wbGFpbiddLFxuICAgIFsndnNkJywgJ2FwcGxpY2F0aW9uL3ZuZC52aXNpbyddLFxuICAgIFsnd2F2JywgJ2F1ZGlvL3dhdiddLFxuICAgIFsnd2ViYScsICdhdWRpby93ZWJtJ10sXG4gICAgWyd3ZWJtJywgJ3ZpZGVvL3dlYm0nXSxcbiAgICBbJ3dlYnAnLCAnaW1hZ2Uvd2VicCddLFxuICAgIFsnd29mZicsICdmb250L3dvZmYnXSxcbiAgICBbJ3dvZmYyJywgJ2ZvbnQvd29mZjInXSxcbiAgICBbJ3hodG1sJywgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCddLFxuICAgIFsneGxzJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCddLFxuICAgIFsneGxzeCcsICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQuc3ByZWFkc2hlZXRtbC5zaGVldCddLFxuICAgIFsneG1sJywgJ2FwcGxpY2F0aW9uL3htbCddLFxuICAgIFsneHVsJywgJ2FwcGxpY2F0aW9uL3ZuZC5tb3ppbGxhLnh1bCt4bWwnXSxcbiAgICBbJ3ppcCcsICdhcHBsaWNhdGlvbi96aXAnXSxcbiAgICBbJzd6JywgJ2FwcGxpY2F0aW9uL3gtN3otY29tcHJlc3NlZCddLFxuICAgIC8vIE90aGVyc1xuICAgIFsnbWt2JywgJ3ZpZGVvL3gtbWF0cm9za2EnXSxcbiAgICBbJ21vdicsICd2aWRlby9xdWlja3RpbWUnXSxcbiAgICBbJ21zZycsICdhcHBsaWNhdGlvbi92bmQubXMtb3V0bG9vayddXG5dKTtcbmV4cG9ydCBmdW5jdGlvbiB0b0ZpbGVXaXRoUGF0aChmaWxlLCBwYXRoKSB7XG4gICAgdmFyIGYgPSB3aXRoTWltZVR5cGUoZmlsZSk7XG4gICAgaWYgKHR5cGVvZiBmLnBhdGggIT09ICdzdHJpbmcnKSB7IC8vIG9uIGVsZWN0cm9uLCBwYXRoIGlzIGFscmVhZHkgc2V0IHRvIHRoZSBhYnNvbHV0ZSBwYXRoXG4gICAgICAgIHZhciB3ZWJraXRSZWxhdGl2ZVBhdGggPSBmaWxlLndlYmtpdFJlbGF0aXZlUGF0aDtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsICdwYXRoJywge1xuICAgICAgICAgICAgdmFsdWU6IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gcGF0aFxuICAgICAgICAgICAgICAgIC8vIElmIDxpbnB1dCB3ZWJraXRkaXJlY3Rvcnk+IGlzIHNldCxcbiAgICAgICAgICAgICAgICAvLyB0aGUgRmlsZSB3aWxsIGhhdmUgYSB7d2Via2l0UmVsYXRpdmVQYXRofSBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MSW5wdXRFbGVtZW50L3dlYmtpdGRpcmVjdG9yeVxuICAgICAgICAgICAgICAgIDogdHlwZW9mIHdlYmtpdFJlbGF0aXZlUGF0aCA9PT0gJ3N0cmluZycgJiYgd2Via2l0UmVsYXRpdmVQYXRoLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyB3ZWJraXRSZWxhdGl2ZVBhdGhcbiAgICAgICAgICAgICAgICAgICAgOiBmaWxlLm5hbWUsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGY7XG59XG5mdW5jdGlvbiB3aXRoTWltZVR5cGUoZmlsZSkge1xuICAgIHZhciBuYW1lID0gZmlsZS5uYW1lO1xuICAgIHZhciBoYXNFeHRlbnNpb24gPSBuYW1lICYmIG5hbWUubGFzdEluZGV4T2YoJy4nKSAhPT0gLTE7XG4gICAgaWYgKGhhc0V4dGVuc2lvbiAmJiAhZmlsZS50eXBlKSB7XG4gICAgICAgIHZhciBleHQgPSBuYW1lLnNwbGl0KCcuJylcbiAgICAgICAgICAgIC5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgdHlwZSA9IENPTU1PTl9NSU1FX1RZUEVTLmdldChleHQpO1xuICAgICAgICBpZiAodHlwZSkge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZpbGUsICd0eXBlJywge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmaWxlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmlsZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/file-selector/dist/es5/file.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/file-selector/dist/es5/index.js":
/*!******************************************************!*\
  !*** ./node_modules/file-selector/dist/es5/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromEvent: () => (/* reexport safe */ _file_selector__WEBPACK_IMPORTED_MODULE_0__.fromEvent)\n/* harmony export */ });\n/* harmony import */ var _file_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-selector */ \"(ssr)/./node_modules/file-selector/dist/es5/file-selector.js\");\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmlsZS1zZWxlY3Rvci9kaXN0L2VzNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0QztBQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdW5nZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9maWxlLXNlbGVjdG9yL2Rpc3QvZXM1L2luZGV4LmpzPzhhZDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAnLi9maWxlLXNlbGVjdG9yJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/file-selector/dist/es5/index.js\n");

/***/ })

};
;