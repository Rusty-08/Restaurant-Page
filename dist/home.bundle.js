"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n\r\n\r\nfunction home() {\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createNav: () => (/* binding */ createNav),\n/* harmony export */   \"default\": () => (/* binding */ navigation)\n/* harmony export */ });\n/* harmony import */ var _img_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant-logo.png */ \"./src/img/restaurant-logo.png\");\n\r\n\r\nfunction createNav(navlink) {\r\n    const li = document.createElement('li');\r\n    const a = document.createElement('a');\r\n\r\n    li.className = 'nav-item'\r\n    a.className = 'nav-link'\r\n\r\n    a.setAttribute('href', `#${navlink}`)\r\n\r\n    a.textContent = navlink\r\n\r\n    li.appendChild(a)\r\n\r\n    return li\r\n}\r\n\r\nfunction navigation() {\r\n    const container = document.createElement('div');\r\n    const nav = document.createElement('nav');\r\n    const ul = document.createElement('ul');\r\n\r\n    container.className = 'container-fluid d-flex justify-content-between'\r\n    nav.className = 'navbar fixed-top px-3'\r\n    ul.className = 'nav'\r\n\r\n    ul.appendChild(createNav('Home'))\r\n    ul.appendChild(createNav('Products'))\r\n    ul.appendChild(createNav('About'))\r\n    ul.appendChild(createNav('Contact'))\r\n\r\n    container.appendChild(_img_restaurant_logo_png__WEBPACK_IMPORTED_MODULE_0__)\r\n    container.appendChild(ul)\r\n\r\n    nav.appendChild(container)\r\n\r\n    return nav\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/navigation.js?");

/***/ }),

/***/ "./src/img/restaurant-logo.png":
/*!*************************************!*\
  !*** ./src/img/restaurant-logo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/restaurant-logo.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/restaurant-logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);