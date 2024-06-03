"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ecdsa-sig-formatter";
exports.ids = ["vendor-chunks/ecdsa-sig-formatter"];
exports.modules = {

/***/ "(rsc)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(rsc)/./node_modules/safe-buffer/index.js\").Buffer);\n\nvar getParamBytesForAlg = __webpack_require__(/*! ./param-bytes-for-alg */ \"(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\");\n\nvar MAX_OCTET = 0x80,\n\tCLASS_UNIVERSAL = 0,\n\tPRIMITIVE_BIT = 0x20,\n\tTAG_SEQ = 0x10,\n\tTAG_INT = 0x02,\n\tENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),\n\tENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);\n\nfunction base64Url(base64) {\n\treturn base64\n\t\t.replace(/=/g, '')\n\t\t.replace(/\\+/g, '-')\n\t\t.replace(/\\//g, '_');\n}\n\nfunction signatureAsBuffer(signature) {\n\tif (Buffer.isBuffer(signature)) {\n\t\treturn signature;\n\t} else if ('string' === typeof signature) {\n\t\treturn Buffer.from(signature, 'base64');\n\t}\n\n\tthrow new TypeError('ECDSA signature must be a Base64 string or a Buffer');\n}\n\nfunction derToJose(signature, alg) {\n\tsignature = signatureAsBuffer(signature);\n\tvar paramBytes = getParamBytesForAlg(alg);\n\n\t// the DER encoded param should at most be the param size, plus a padding\n\t// zero, since due to being a signed integer\n\tvar maxEncodedParamLength = paramBytes + 1;\n\n\tvar inputLength = signature.length;\n\n\tvar offset = 0;\n\tif (signature[offset++] !== ENCODED_TAG_SEQ) {\n\t\tthrow new Error('Could not find expected \"seq\"');\n\t}\n\n\tvar seqLength = signature[offset++];\n\tif (seqLength === (MAX_OCTET | 1)) {\n\t\tseqLength = signature[offset++];\n\t}\n\n\tif (inputLength - offset < seqLength) {\n\t\tthrow new Error('\"seq\" specified length of \"' + seqLength + '\", only \"' + (inputLength - offset) + '\" remaining');\n\t}\n\n\tif (signature[offset++] !== ENCODED_TAG_INT) {\n\t\tthrow new Error('Could not find expected \"int\" for \"r\"');\n\t}\n\n\tvar rLength = signature[offset++];\n\n\tif (inputLength - offset - 2 < rLength) {\n\t\tthrow new Error('\"r\" specified length of \"' + rLength + '\", only \"' + (inputLength - offset - 2) + '\" available');\n\t}\n\n\tif (maxEncodedParamLength < rLength) {\n\t\tthrow new Error('\"r\" specified length of \"' + rLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n\t}\n\n\tvar rOffset = offset;\n\toffset += rLength;\n\n\tif (signature[offset++] !== ENCODED_TAG_INT) {\n\t\tthrow new Error('Could not find expected \"int\" for \"s\"');\n\t}\n\n\tvar sLength = signature[offset++];\n\n\tif (inputLength - offset !== sLength) {\n\t\tthrow new Error('\"s\" specified length of \"' + sLength + '\", expected \"' + (inputLength - offset) + '\"');\n\t}\n\n\tif (maxEncodedParamLength < sLength) {\n\t\tthrow new Error('\"s\" specified length of \"' + sLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n\t}\n\n\tvar sOffset = offset;\n\toffset += sLength;\n\n\tif (offset !== inputLength) {\n\t\tthrow new Error('Expected to consume entire buffer, but \"' + (inputLength - offset) + '\" bytes remain');\n\t}\n\n\tvar rPadding = paramBytes - rLength,\n\t\tsPadding = paramBytes - sLength;\n\n\tvar dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);\n\n\tfor (offset = 0; offset < rPadding; ++offset) {\n\t\tdst[offset] = 0;\n\t}\n\tsignature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);\n\n\toffset = paramBytes;\n\n\tfor (var o = offset; offset < o + sPadding; ++offset) {\n\t\tdst[offset] = 0;\n\t}\n\tsignature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);\n\n\tdst = dst.toString('base64');\n\tdst = base64Url(dst);\n\n\treturn dst;\n}\n\nfunction countPadding(buf, start, stop) {\n\tvar padding = 0;\n\twhile (start + padding < stop && buf[start + padding] === 0) {\n\t\t++padding;\n\t}\n\n\tvar needsSign = buf[start + padding] >= MAX_OCTET;\n\tif (needsSign) {\n\t\t--padding;\n\t}\n\n\treturn padding;\n}\n\nfunction joseToDer(signature, alg) {\n\tsignature = signatureAsBuffer(signature);\n\tvar paramBytes = getParamBytesForAlg(alg);\n\n\tvar signatureBytes = signature.length;\n\tif (signatureBytes !== paramBytes * 2) {\n\t\tthrow new TypeError('\"' + alg + '\" signatures must be \"' + paramBytes * 2 + '\" bytes, saw \"' + signatureBytes + '\"');\n\t}\n\n\tvar rPadding = countPadding(signature, 0, paramBytes);\n\tvar sPadding = countPadding(signature, paramBytes, signature.length);\n\tvar rLength = paramBytes - rPadding;\n\tvar sLength = paramBytes - sPadding;\n\n\tvar rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;\n\n\tvar shortLength = rsBytes < MAX_OCTET;\n\n\tvar dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);\n\n\tvar offset = 0;\n\tdst[offset++] = ENCODED_TAG_SEQ;\n\tif (shortLength) {\n\t\t// Bit 8 has value \"0\"\n\t\t// bits 7-1 give the length.\n\t\tdst[offset++] = rsBytes;\n\t} else {\n\t\t// Bit 8 of first octet has value \"1\"\n\t\t// bits 7-1 give the number of additional length octets.\n\t\tdst[offset++] = MAX_OCTET\t| 1;\n\t\t// length, base 256\n\t\tdst[offset++] = rsBytes & 0xff;\n\t}\n\tdst[offset++] = ENCODED_TAG_INT;\n\tdst[offset++] = rLength;\n\tif (rPadding < 0) {\n\t\tdst[offset++] = 0;\n\t\toffset += signature.copy(dst, offset, 0, paramBytes);\n\t} else {\n\t\toffset += signature.copy(dst, offset, rPadding, paramBytes);\n\t}\n\tdst[offset++] = ENCODED_TAG_INT;\n\tdst[offset++] = sLength;\n\tif (sPadding < 0) {\n\t\tdst[offset++] = 0;\n\t\tsignature.copy(dst, offset, paramBytes);\n\t} else {\n\t\tsignature.copy(dst, offset, paramBytes + sPadding);\n\t}\n\n\treturn dst;\n}\n\nmodule.exports = {\n\tderToJose: derToJose,\n\tjoseToDer: joseToDer\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvZWNkc2Etc2lnLWZvcm1hdHRlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixhQUFhLDRGQUE2Qjs7QUFFMUMsMEJBQTBCLG1CQUFPLENBQUMsa0dBQXVCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWx1bmdlLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2VjZHNhLXNpZy1mb3JtYXR0ZXIvc3JjL2VjZHNhLXNpZy1mb3JtYXR0ZXIuanM/NTI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdzYWZlLWJ1ZmZlcicpLkJ1ZmZlcjtcblxudmFyIGdldFBhcmFtQnl0ZXNGb3JBbGcgPSByZXF1aXJlKCcuL3BhcmFtLWJ5dGVzLWZvci1hbGcnKTtcblxudmFyIE1BWF9PQ1RFVCA9IDB4ODAsXG5cdENMQVNTX1VOSVZFUlNBTCA9IDAsXG5cdFBSSU1JVElWRV9CSVQgPSAweDIwLFxuXHRUQUdfU0VRID0gMHgxMCxcblx0VEFHX0lOVCA9IDB4MDIsXG5cdEVOQ09ERURfVEFHX1NFUSA9IChUQUdfU0VRIHwgUFJJTUlUSVZFX0JJVCkgfCAoQ0xBU1NfVU5JVkVSU0FMIDw8IDYpLFxuXHRFTkNPREVEX1RBR19JTlQgPSBUQUdfSU5UIHwgKENMQVNTX1VOSVZFUlNBTCA8PCA2KTtcblxuZnVuY3Rpb24gYmFzZTY0VXJsKGJhc2U2NCkge1xuXHRyZXR1cm4gYmFzZTY0XG5cdFx0LnJlcGxhY2UoLz0vZywgJycpXG5cdFx0LnJlcGxhY2UoL1xcKy9nLCAnLScpXG5cdFx0LnJlcGxhY2UoL1xcLy9nLCAnXycpO1xufVxuXG5mdW5jdGlvbiBzaWduYXR1cmVBc0J1ZmZlcihzaWduYXR1cmUpIHtcblx0aWYgKEJ1ZmZlci5pc0J1ZmZlcihzaWduYXR1cmUpKSB7XG5cdFx0cmV0dXJuIHNpZ25hdHVyZTtcblx0fSBlbHNlIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHNpZ25hdHVyZSkge1xuXHRcdHJldHVybiBCdWZmZXIuZnJvbShzaWduYXR1cmUsICdiYXNlNjQnKTtcblx0fVxuXG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VDRFNBIHNpZ25hdHVyZSBtdXN0IGJlIGEgQmFzZTY0IHN0cmluZyBvciBhIEJ1ZmZlcicpO1xufVxuXG5mdW5jdGlvbiBkZXJUb0pvc2Uoc2lnbmF0dXJlLCBhbGcpIHtcblx0c2lnbmF0dXJlID0gc2lnbmF0dXJlQXNCdWZmZXIoc2lnbmF0dXJlKTtcblx0dmFyIHBhcmFtQnl0ZXMgPSBnZXRQYXJhbUJ5dGVzRm9yQWxnKGFsZyk7XG5cblx0Ly8gdGhlIERFUiBlbmNvZGVkIHBhcmFtIHNob3VsZCBhdCBtb3N0IGJlIHRoZSBwYXJhbSBzaXplLCBwbHVzIGEgcGFkZGluZ1xuXHQvLyB6ZXJvLCBzaW5jZSBkdWUgdG8gYmVpbmcgYSBzaWduZWQgaW50ZWdlclxuXHR2YXIgbWF4RW5jb2RlZFBhcmFtTGVuZ3RoID0gcGFyYW1CeXRlcyArIDE7XG5cblx0dmFyIGlucHV0TGVuZ3RoID0gc2lnbmF0dXJlLmxlbmd0aDtcblxuXHR2YXIgb2Zmc2V0ID0gMDtcblx0aWYgKHNpZ25hdHVyZVtvZmZzZXQrK10gIT09IEVOQ09ERURfVEFHX1NFUSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgZXhwZWN0ZWQgXCJzZXFcIicpO1xuXHR9XG5cblx0dmFyIHNlcUxlbmd0aCA9IHNpZ25hdHVyZVtvZmZzZXQrK107XG5cdGlmIChzZXFMZW5ndGggPT09IChNQVhfT0NURVQgfCAxKSkge1xuXHRcdHNlcUxlbmd0aCA9IHNpZ25hdHVyZVtvZmZzZXQrK107XG5cdH1cblxuXHRpZiAoaW5wdXRMZW5ndGggLSBvZmZzZXQgPCBzZXFMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1wic2VxXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyBzZXFMZW5ndGggKyAnXCIsIG9ubHkgXCInICsgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0KSArICdcIiByZW1haW5pbmcnKTtcblx0fVxuXG5cdGlmIChzaWduYXR1cmVbb2Zmc2V0KytdICE9PSBFTkNPREVEX1RBR19JTlQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGV4cGVjdGVkIFwiaW50XCIgZm9yIFwiclwiJyk7XG5cdH1cblxuXHR2YXIgckxlbmd0aCA9IHNpZ25hdHVyZVtvZmZzZXQrK107XG5cblx0aWYgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0IC0gMiA8IHJMZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ1wiclwiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgckxlbmd0aCArICdcIiwgb25seSBcIicgKyAoaW5wdXRMZW5ndGggLSBvZmZzZXQgLSAyKSArICdcIiBhdmFpbGFibGUnKTtcblx0fVxuXG5cdGlmIChtYXhFbmNvZGVkUGFyYW1MZW5ndGggPCByTGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdcInJcIiBzcGVjaWZpZWQgbGVuZ3RoIG9mIFwiJyArIHJMZW5ndGggKyAnXCIsIG1heCBvZiBcIicgKyBtYXhFbmNvZGVkUGFyYW1MZW5ndGggKyAnXCIgaXMgYWNjZXB0YWJsZScpO1xuXHR9XG5cblx0dmFyIHJPZmZzZXQgPSBvZmZzZXQ7XG5cdG9mZnNldCArPSByTGVuZ3RoO1xuXG5cdGlmIChzaWduYXR1cmVbb2Zmc2V0KytdICE9PSBFTkNPREVEX1RBR19JTlQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGV4cGVjdGVkIFwiaW50XCIgZm9yIFwic1wiJyk7XG5cdH1cblxuXHR2YXIgc0xlbmd0aCA9IHNpZ25hdHVyZVtvZmZzZXQrK107XG5cblx0aWYgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0ICE9PSBzTGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdcInNcIiBzcGVjaWZpZWQgbGVuZ3RoIG9mIFwiJyArIHNMZW5ndGggKyAnXCIsIGV4cGVjdGVkIFwiJyArIChpbnB1dExlbmd0aCAtIG9mZnNldCkgKyAnXCInKTtcblx0fVxuXG5cdGlmIChtYXhFbmNvZGVkUGFyYW1MZW5ndGggPCBzTGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdcInNcIiBzcGVjaWZpZWQgbGVuZ3RoIG9mIFwiJyArIHNMZW5ndGggKyAnXCIsIG1heCBvZiBcIicgKyBtYXhFbmNvZGVkUGFyYW1MZW5ndGggKyAnXCIgaXMgYWNjZXB0YWJsZScpO1xuXHR9XG5cblx0dmFyIHNPZmZzZXQgPSBvZmZzZXQ7XG5cdG9mZnNldCArPSBzTGVuZ3RoO1xuXG5cdGlmIChvZmZzZXQgIT09IGlucHV0TGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0byBjb25zdW1lIGVudGlyZSBidWZmZXIsIGJ1dCBcIicgKyAoaW5wdXRMZW5ndGggLSBvZmZzZXQpICsgJ1wiIGJ5dGVzIHJlbWFpbicpO1xuXHR9XG5cblx0dmFyIHJQYWRkaW5nID0gcGFyYW1CeXRlcyAtIHJMZW5ndGgsXG5cdFx0c1BhZGRpbmcgPSBwYXJhbUJ5dGVzIC0gc0xlbmd0aDtcblxuXHR2YXIgZHN0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKHJQYWRkaW5nICsgckxlbmd0aCArIHNQYWRkaW5nICsgc0xlbmd0aCk7XG5cblx0Zm9yIChvZmZzZXQgPSAwOyBvZmZzZXQgPCByUGFkZGluZzsgKytvZmZzZXQpIHtcblx0XHRkc3Rbb2Zmc2V0XSA9IDA7XG5cdH1cblx0c2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIHJPZmZzZXQgKyBNYXRoLm1heCgtclBhZGRpbmcsIDApLCByT2Zmc2V0ICsgckxlbmd0aCk7XG5cblx0b2Zmc2V0ID0gcGFyYW1CeXRlcztcblxuXHRmb3IgKHZhciBvID0gb2Zmc2V0OyBvZmZzZXQgPCBvICsgc1BhZGRpbmc7ICsrb2Zmc2V0KSB7XG5cdFx0ZHN0W29mZnNldF0gPSAwO1xuXHR9XG5cdHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCBzT2Zmc2V0ICsgTWF0aC5tYXgoLXNQYWRkaW5nLCAwKSwgc09mZnNldCArIHNMZW5ndGgpO1xuXG5cdGRzdCA9IGRzdC50b1N0cmluZygnYmFzZTY0Jyk7XG5cdGRzdCA9IGJhc2U2NFVybChkc3QpO1xuXG5cdHJldHVybiBkc3Q7XG59XG5cbmZ1bmN0aW9uIGNvdW50UGFkZGluZyhidWYsIHN0YXJ0LCBzdG9wKSB7XG5cdHZhciBwYWRkaW5nID0gMDtcblx0d2hpbGUgKHN0YXJ0ICsgcGFkZGluZyA8IHN0b3AgJiYgYnVmW3N0YXJ0ICsgcGFkZGluZ10gPT09IDApIHtcblx0XHQrK3BhZGRpbmc7XG5cdH1cblxuXHR2YXIgbmVlZHNTaWduID0gYnVmW3N0YXJ0ICsgcGFkZGluZ10gPj0gTUFYX09DVEVUO1xuXHRpZiAobmVlZHNTaWduKSB7XG5cdFx0LS1wYWRkaW5nO1xuXHR9XG5cblx0cmV0dXJuIHBhZGRpbmc7XG59XG5cbmZ1bmN0aW9uIGpvc2VUb0RlcihzaWduYXR1cmUsIGFsZykge1xuXHRzaWduYXR1cmUgPSBzaWduYXR1cmVBc0J1ZmZlcihzaWduYXR1cmUpO1xuXHR2YXIgcGFyYW1CeXRlcyA9IGdldFBhcmFtQnl0ZXNGb3JBbGcoYWxnKTtcblxuXHR2YXIgc2lnbmF0dXJlQnl0ZXMgPSBzaWduYXR1cmUubGVuZ3RoO1xuXHRpZiAoc2lnbmF0dXJlQnl0ZXMgIT09IHBhcmFtQnl0ZXMgKiAyKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignXCInICsgYWxnICsgJ1wiIHNpZ25hdHVyZXMgbXVzdCBiZSBcIicgKyBwYXJhbUJ5dGVzICogMiArICdcIiBieXRlcywgc2F3IFwiJyArIHNpZ25hdHVyZUJ5dGVzICsgJ1wiJyk7XG5cdH1cblxuXHR2YXIgclBhZGRpbmcgPSBjb3VudFBhZGRpbmcoc2lnbmF0dXJlLCAwLCBwYXJhbUJ5dGVzKTtcblx0dmFyIHNQYWRkaW5nID0gY291bnRQYWRkaW5nKHNpZ25hdHVyZSwgcGFyYW1CeXRlcywgc2lnbmF0dXJlLmxlbmd0aCk7XG5cdHZhciByTGVuZ3RoID0gcGFyYW1CeXRlcyAtIHJQYWRkaW5nO1xuXHR2YXIgc0xlbmd0aCA9IHBhcmFtQnl0ZXMgLSBzUGFkZGluZztcblxuXHR2YXIgcnNCeXRlcyA9IDEgKyAxICsgckxlbmd0aCArIDEgKyAxICsgc0xlbmd0aDtcblxuXHR2YXIgc2hvcnRMZW5ndGggPSByc0J5dGVzIDwgTUFYX09DVEVUO1xuXG5cdHZhciBkc3QgPSBCdWZmZXIuYWxsb2NVbnNhZmUoKHNob3J0TGVuZ3RoID8gMiA6IDMpICsgcnNCeXRlcyk7XG5cblx0dmFyIG9mZnNldCA9IDA7XG5cdGRzdFtvZmZzZXQrK10gPSBFTkNPREVEX1RBR19TRVE7XG5cdGlmIChzaG9ydExlbmd0aCkge1xuXHRcdC8vIEJpdCA4IGhhcyB2YWx1ZSBcIjBcIlxuXHRcdC8vIGJpdHMgNy0xIGdpdmUgdGhlIGxlbmd0aC5cblx0XHRkc3Rbb2Zmc2V0KytdID0gcnNCeXRlcztcblx0fSBlbHNlIHtcblx0XHQvLyBCaXQgOCBvZiBmaXJzdCBvY3RldCBoYXMgdmFsdWUgXCIxXCJcblx0XHQvLyBiaXRzIDctMSBnaXZlIHRoZSBudW1iZXIgb2YgYWRkaXRpb25hbCBsZW5ndGggb2N0ZXRzLlxuXHRcdGRzdFtvZmZzZXQrK10gPSBNQVhfT0NURVRcdHwgMTtcblx0XHQvLyBsZW5ndGgsIGJhc2UgMjU2XG5cdFx0ZHN0W29mZnNldCsrXSA9IHJzQnl0ZXMgJiAweGZmO1xuXHR9XG5cdGRzdFtvZmZzZXQrK10gPSBFTkNPREVEX1RBR19JTlQ7XG5cdGRzdFtvZmZzZXQrK10gPSByTGVuZ3RoO1xuXHRpZiAoclBhZGRpbmcgPCAwKSB7XG5cdFx0ZHN0W29mZnNldCsrXSA9IDA7XG5cdFx0b2Zmc2V0ICs9IHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCAwLCBwYXJhbUJ5dGVzKTtcblx0fSBlbHNlIHtcblx0XHRvZmZzZXQgKz0gc2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIHJQYWRkaW5nLCBwYXJhbUJ5dGVzKTtcblx0fVxuXHRkc3Rbb2Zmc2V0KytdID0gRU5DT0RFRF9UQUdfSU5UO1xuXHRkc3Rbb2Zmc2V0KytdID0gc0xlbmd0aDtcblx0aWYgKHNQYWRkaW5nIDwgMCkge1xuXHRcdGRzdFtvZmZzZXQrK10gPSAwO1xuXHRcdHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCBwYXJhbUJ5dGVzKTtcblx0fSBlbHNlIHtcblx0XHRzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgcGFyYW1CeXRlcyArIHNQYWRkaW5nKTtcblx0fVxuXG5cdHJldHVybiBkc3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkZXJUb0pvc2U6IGRlclRvSm9zZSxcblx0am9zZVRvRGVyOiBqb3NlVG9EZXJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nfunction getParamSize(keySize) {\n\tvar result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);\n\treturn result;\n}\n\nvar paramBytesForAlg = {\n\tES256: getParamSize(256),\n\tES384: getParamSize(384),\n\tES512: getParamSize(521)\n};\n\nfunction getParamBytesForAlg(alg) {\n\tvar paramBytes = paramBytesForAlg[alg];\n\tif (paramBytes) {\n\t\treturn paramBytes;\n\t}\n\n\tthrow new Error('Unknown algorithm \"' + alg + '\"');\n}\n\nmodule.exports = getParamBytesForAlg;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvcGFyYW0tYnl0ZXMtZm9yLWFsZy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FsdW5nZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9lY2RzYS1zaWctZm9ybWF0dGVyL3NyYy9wYXJhbS1ieXRlcy1mb3ItYWxnLmpzPzBlYzUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBnZXRQYXJhbVNpemUoa2V5U2l6ZSkge1xuXHR2YXIgcmVzdWx0ID0gKChrZXlTaXplIC8gOCkgfCAwKSArIChrZXlTaXplICUgOCA9PT0gMCA/IDAgOiAxKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIHBhcmFtQnl0ZXNGb3JBbGcgPSB7XG5cdEVTMjU2OiBnZXRQYXJhbVNpemUoMjU2KSxcblx0RVMzODQ6IGdldFBhcmFtU2l6ZSgzODQpLFxuXHRFUzUxMjogZ2V0UGFyYW1TaXplKDUyMSlcbn07XG5cbmZ1bmN0aW9uIGdldFBhcmFtQnl0ZXNGb3JBbGcoYWxnKSB7XG5cdHZhciBwYXJhbUJ5dGVzID0gcGFyYW1CeXRlc0ZvckFsZ1thbGddO1xuXHRpZiAocGFyYW1CeXRlcykge1xuXHRcdHJldHVybiBwYXJhbUJ5dGVzO1xuXHR9XG5cblx0dGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGFsZ29yaXRobSBcIicgKyBhbGcgKyAnXCInKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQYXJhbUJ5dGVzRm9yQWxnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\n");

/***/ })

};
;