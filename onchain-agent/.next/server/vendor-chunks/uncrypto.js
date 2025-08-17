"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uncrypto";
exports.ids = ["vendor-chunks/uncrypto"];
exports.modules = {

/***/ "(rsc)/./node_modules/uncrypto/dist/crypto.node.cjs":
/*!****************************************************!*\
  !*** ./node_modules/uncrypto/dist/crypto.node.cjs ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nconst nodeCrypto = __webpack_require__(/*! node:crypto */ \"node:crypto\");\n\nfunction _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }\n\nconst nodeCrypto__default = /*#__PURE__*/_interopDefaultCompat(nodeCrypto);\n\nconst subtle = nodeCrypto__default.webcrypto?.subtle || {};\nconst randomUUID = () => {\n  return nodeCrypto__default.randomUUID();\n};\nconst getRandomValues = (array) => {\n  return nodeCrypto__default.webcrypto.getRandomValues(array);\n};\nconst _crypto = {\n  randomUUID,\n  getRandomValues,\n  subtle\n};\n\nexports[\"default\"] = _crypto;\nexports.getRandomValues = getRandomValues;\nexports.randomUUID = randomUUID;\nexports.subtle = subtle;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5janMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxtQkFBbUIsbUJBQU8sQ0FBQyxnQ0FBYTs7QUFFeEMscUNBQXFDOztBQUVyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWU7QUFDZix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmNoYWluLWFnZW50Ly4vbm9kZV9tb2R1bGVzL3VuY3J5cHRvL2Rpc3QvY3J5cHRvLm5vZGUuY2pzPzRhNDgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jb25zdCBub2RlQ3J5cHRvID0gcmVxdWlyZSgnbm9kZTpjcnlwdG8nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0Q29tcGF0IChlKSB7IHJldHVybiBlICYmIHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiAnZGVmYXVsdCcgaW4gZSA/IGUuZGVmYXVsdCA6IGU7IH1cblxuY29uc3Qgbm9kZUNyeXB0b19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHRDb21wYXQobm9kZUNyeXB0byk7XG5cbmNvbnN0IHN1YnRsZSA9IG5vZGVDcnlwdG9fX2RlZmF1bHQud2ViY3J5cHRvPy5zdWJ0bGUgfHwge307XG5jb25zdCByYW5kb21VVUlEID0gKCkgPT4ge1xuICByZXR1cm4gbm9kZUNyeXB0b19fZGVmYXVsdC5yYW5kb21VVUlEKCk7XG59O1xuY29uc3QgZ2V0UmFuZG9tVmFsdWVzID0gKGFycmF5KSA9PiB7XG4gIHJldHVybiBub2RlQ3J5cHRvX19kZWZhdWx0LndlYmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoYXJyYXkpO1xufTtcbmNvbnN0IF9jcnlwdG8gPSB7XG4gIHJhbmRvbVVVSUQsXG4gIGdldFJhbmRvbVZhbHVlcyxcbiAgc3VidGxlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfY3J5cHRvO1xuZXhwb3J0cy5nZXRSYW5kb21WYWx1ZXMgPSBnZXRSYW5kb21WYWx1ZXM7XG5leHBvcnRzLnJhbmRvbVVVSUQgPSByYW5kb21VVUlEO1xuZXhwb3J0cy5zdWJ0bGUgPSBzdWJ0bGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/uncrypto/dist/crypto.node.cjs\n");

/***/ })

};
;