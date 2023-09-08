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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFooter: () => (/* binding */ addFooter),\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _img_home_pic_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/home-pic-1.jpg */ \"./src/img/home-pic-1.jpg\");\n/* harmony import */ var _img_home_pic_3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/home-pic-3.jpg */ \"./src/img/home-pic-3.jpg\");\n/* harmony import */ var _img_home_pic_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/home-pic-2.jpg */ \"./src/img/home-pic-2.jpg\");\n\r\n\r\n\r\n\r\nconst addTitle = () => {\r\n    const container = document.createElement('div')\r\n    const title = document.createElement('h1')\r\n    const subTitle = document.createElement('span')\r\n\r\n    container.className = 'home-title text-center'\r\n    title.textContent = 'Roti Hub'\r\n    subTitle.textContent = 'Griddled, unleavened bread in Indian cuisine.'\r\n\r\n    container.appendChild(title)\r\n    container.appendChild(subTitle)\r\n\r\n    return container\r\n}\r\n\r\nconst addButtons = () => {\r\n    const container = document.createElement('div')\r\n    const productLink = document.createElement('a')\r\n    const orderLink = document.createElement('a')\r\n\r\n    container.className = 'home-buttons d-flex gap-2 mt-3'\r\n    productLink.className = 'product-btn'\r\n    productLink.textContent = 'Our products'\r\n    productLink.setAttribute('href', '#Products')\r\n\r\n    orderLink.textContent = 'Order now!'\r\n\r\n    container.appendChild(productLink)\r\n    container.appendChild(orderLink)\r\n\r\n    return container\r\n}\r\n\r\nconst addAccounts = () => {\r\n    const container = document.createElement('div')\r\n    const facebook = document.createElement('i')\r\n    const instagram = document.createElement('i')\r\n    const tiktok = document.createElement('i')\r\n\r\n    container.className = 'home-accounts d-flex gap-4'\r\n    facebook.className = 'fa-brands fa-facebook-f fs-5'\r\n    instagram.className = 'fa-brands fa-instagram fs-5'\r\n    tiktok.className = 'fa-brands fa-tiktok fs-5'\r\n\r\n    container.appendChild(facebook)\r\n    container.appendChild(instagram)\r\n    container.appendChild(tiktok)\r\n\r\n    return container\r\n}\r\n\r\n// * Add footer to each section\r\n\r\nfunction addFooter() {\r\n    const footer = document.createElement('div')\r\n    const project = document.createElement('p')\r\n    const year = document.createElement('p')\r\n    const owner = document.createElement('a')\r\n    const accounts = document.createElement('div')\r\n    const facebook = document.createElement('a')\r\n    const linkin = document.createElement('a')\r\n    const github = document.createElement('a')\r\n\r\n    project.textContent = 'The Odin Project — Rusty Gunao'\r\n    year.innerHTML = new Date().getFullYear() + ' <i class=\"fa-regular fa-copyright\"></i>'\r\n    owner.setAttribute('href', 'https://github.com/Rusty-08/Restaurant-Page')\r\n    owner.setAttribute('target', '__blank')\r\n    owner.innerHTML = 'Rusty-08 <i class=\"fa-brands fa-github\"></i>'\r\n\r\n    accounts.className = 'footer-accounts d-flex align-items-center'\r\n\r\n    facebook.setAttribute('target', '__blank')\r\n    facebook.setAttribute('href', 'https://www.facebook.com/gunaorusty')\r\n    facebook.innerHTML = `<i class=\"fa-brands fa-facebook-f\"></i>`\r\n\r\n    linkin.setAttribute('target', '__blank')\r\n    linkin.setAttribute('href', 'www.linkedin.com/in/gunaorusty')\r\n    linkin.innerHTML = `<i class=\"fa-brands fa-linkedin-in\"></i>`\r\n\r\n    github.setAttribute('target', '__blank')\r\n    github.setAttribute('href', 'https://github.com/Rusty-08')\r\n    github.innerHTML = `<i class=\"fa-brands fa-github\"></i>`\r\n\r\n    accounts.appendChild(facebook)\r\n    accounts.appendChild(linkin)\r\n    accounts.appendChild(github)\r\n    accounts.appendChild(year)\r\n\r\n    footer.className = 'footer w-100 pt-4 pb-2 d-flex justify-content-center align-items-center flex-column'\r\n    footer.appendChild(project)\r\n    footer.appendChild(owner)\r\n    footer.appendChild(accounts)\r\n\r\n    return footer\r\n}\r\n\r\nconst createImage = (className, image) => {\r\n    const product = document.createElement('img')\r\n\r\n    product.setAttribute('alt', 'picture')\r\n    product.className = className\r\n    product.src = image;\r\n\r\n    return product\r\n}\r\n\r\nfunction home() {\r\n    const home = document.createElement('section')\r\n    const homeDesc = document.createElement('div')\r\n    const homeProduct = document.createElement('div')\r\n    const pics = document.createElement('div')\r\n\r\n    home.setAttribute('id', 'Home')\r\n    homeDesc.className = 'homeDesc d-flex justify-content-center align-items-center flex-column gap-5'\r\n    home.className = 'd-flex w-100 h-100 justify-content-evenly align-items-center'\r\n\r\n    homeDesc.appendChild(addTitle())\r\n    homeDesc.appendChild(addButtons())\r\n    homeDesc.appendChild(addAccounts())\r\n\r\n    pics.className = 'd-flex flex-column gap-2'\r\n    pics.appendChild(createImage('home-product-2', _img_home_pic_3_jpg__WEBPACK_IMPORTED_MODULE_1__))\r\n    pics.appendChild(createImage('home-product-3', _img_home_pic_2_jpg__WEBPACK_IMPORTED_MODULE_2__))\r\n\r\n    homeProduct.className = 'image-container d-flex justify-content-center align-items-center gap-2 shadow-lg'\r\n    homeProduct.appendChild(pics)\r\n    homeProduct.appendChild(createImage('home-product-1', _img_home_pic_1_jpg__WEBPACK_IMPORTED_MODULE_0__))\r\n\r\n    home.appendChild(homeDesc)\r\n    home.appendChild(homeProduct)\r\n\r\n    return home\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/img/home-pic-1.jpg":
/*!********************************!*\
  !*** ./src/img/home-pic-1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/home-pic-1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/home-pic-1.jpg?");

/***/ }),

/***/ "./src/img/home-pic-2.jpg":
/*!********************************!*\
  !*** ./src/img/home-pic-2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/home-pic-2.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/home-pic-2.jpg?");

/***/ }),

/***/ "./src/img/home-pic-3.jpg":
/*!********************************!*\
  !*** ./src/img/home-pic-3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/home-pic-3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/home-pic-3.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);