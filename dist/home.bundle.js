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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _img_restaurant_bg_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/restaurant-bg.png */ \"./src/img/restaurant-bg.png\");\n\r\n\r\nconst addTitle = () => {\r\n    const container = document.createElement('div')\r\n    const title = document.createElement('h1')\r\n    const subTitle = document.createElement('span')\r\n\r\n    container.className = 'home-title text-center'\r\n    title.textContent = 'Rottea'\r\n    subTitle.textContent = 'The famous street food of Malaysia and Singapore'\r\n\r\n    container.appendChild(title)\r\n    container.appendChild(subTitle)\r\n\r\n    return container\r\n}\r\n\r\nconst addButtons = () => {\r\n    const container = document.createElement('div')\r\n    const productLink = document.createElement('a')\r\n    const orderLink = document.createElement('a')\r\n\r\n    container.className = 'home-buttons d-flex gap-2 mt-3'\r\n    productLink.className = 'product-btn'\r\n    productLink.textContent = 'Our products'\r\n    productLink.setAttribute('href', '#Product')\r\n\r\n    orderLink.textContent = 'Order now!'\r\n\r\n    container.appendChild(productLink)\r\n    container.appendChild(orderLink)\r\n\r\n    return container\r\n}\r\n\r\nconst addAccounts = () => {\r\n    const container = document.createElement('div')\r\n    const facebook = document.createElement('i')\r\n    const instagram = document.createElement('i')\r\n    const tiktok = document.createElement('i')\r\n\r\n    container.className = 'home-accounts d-flex gap-4'\r\n    facebook.className = 'fa-brands fa-facebook fs-5'\r\n    instagram.className = 'fa-brands fa-square-instagram fs-5'\r\n    tiktok.className = 'fa-brands fa-tiktok fs-5'\r\n\r\n    container.appendChild(facebook)\r\n    container.appendChild(instagram)\r\n    container.appendChild(tiktok)\r\n\r\n    return container\r\n}\r\n\r\nfunction home() {\r\n    const home = document.createElement('section')\r\n    const homeDesc = document.createElement('div')\r\n    const homePicture = document.createElement('img')\r\n\r\n    home.setAttribute('id', 'Home')\r\n    homeDesc.className = 'homeDesc d-flex justify-content-center align-items-center flex-column gap-5'\r\n    home.className = 'd-flex w-100 h-100 justify-content-evenly align-items-center'\r\n\r\n    homeDesc.appendChild(addTitle())\r\n    homeDesc.appendChild(addButtons())\r\n    homeDesc.appendChild(addAccounts())\r\n\r\n    homePicture.setAttribute('alt', 'picture')\r\n    homePicture.className = 'home-image'\r\n    homePicture.src = _img_restaurant_bg_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    home.appendChild(homeDesc)\r\n    home.appendChild(homePicture)\r\n\r\n    return home\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/img/restaurant-bg.png":
/*!***********************************!*\
  !*** ./src/img/restaurant-bg.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/restaurant-bg.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/restaurant-bg.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);