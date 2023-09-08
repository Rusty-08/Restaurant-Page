"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["product"],{

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ product)\n/* harmony export */ });\n/* harmony import */ var _img_Laccha_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/Laccha.png */ \"./src/img/Laccha.png\");\n/* harmony import */ var _img_Makki_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Makki.png */ \"./src/img/Makki.png\");\n/* harmony import */ var _img_product_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/product-1.png */ \"./src/img/product-1.png\");\n/* harmony import */ var _img_Tandoori_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Tandoori.png */ \"./src/img/Tandoori.png\");\n/* harmony import */ var _img_Alo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/Alo.png */ \"./src/img/Alo.png\");\n/* harmony import */ var _img_Roghni_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/Roghni.png */ \"./src/img/Roghni.png\");\n/* harmony import */ var _img_tea_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/tea-1.png */ \"./src/img/tea-1.png\");\n/* harmony import */ var _img_tea_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/tea-2.png */ \"./src/img/tea-2.png\");\n/* harmony import */ var _img_tea_6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/tea-6.png */ \"./src/img/tea-6.png\");\n/* harmony import */ var _img_tea_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/tea-3.png */ \"./src/img/tea-3.png\");\n/* harmony import */ var _img_tea_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/tea-4.png */ \"./src/img/tea-4.png\");\n/* harmony import */ var _img_tea_5_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/tea-5.png */ \"./src/img/tea-5.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst addProductsHeader = () => {\r\n    const title = document.createElement('div');\r\n    const header = document.createElement('h1');\r\n    const desc = document.createElement('p');\r\n\r\n    title.className = 'products-header d-flex align-items-center text-center flex-column h-auto mt-5'\r\n    header.textContent = 'HEALTHY ROTI & TEA'\r\n    desc.innerHTML = 'Come and try our deliciously balanced combination of Roti & Tea.'\r\n\r\n    title.appendChild(header)\r\n    title.appendChild(desc)\r\n\r\n    return title\r\n}\r\n\r\nconst createProductCard = (pic, title, description, itemPrice) => {\r\n    const item = document.createElement('div')\r\n    const cardBody = document.createElement('div')\r\n    const image = document.createElement('img')\r\n    const name = document.createElement('h3')\r\n    const desc = document.createElement('p')\r\n    const footer = document.createElement('div')\r\n    const buyButton = document.createElement('button')\r\n    const orderNumberDiv = document.createElement('div')\r\n    const minusBtn = document.createElement('button')\r\n    const orderNumber = document.createElement('p')\r\n    const plusBtn = document.createElement('button')\r\n    const price = document.createElement('p')\r\n\r\n    item.className = 'product-card card p-3 shadow-sm'\r\n\r\n    image.setAttribute('alt', 'picture')\r\n    image.src = pic\r\n\r\n    name.className = 'food-name'\r\n    name.textContent = title\r\n    desc.className = 'food-desc text-center'\r\n    desc.textContent = description\r\n\r\n    buyButton.className = 'buy-btn btn'\r\n    buyButton.innerHTML = '<i class=\"fa-solid fa-cart-plus\"></i>'\r\n\r\n    price.className = 'price m-0 shadow-lg d-flex justify-content-center align-items-center'\r\n    price.textContent = `₱ ${itemPrice}`\r\n\r\n    minusBtn.className = 'minus btn bg-transparent text-secondary'\r\n    minusBtn.innerHTML = '<i class=\"fa-solid fa-minus\"></i>'\r\n    orderNumber.className = 'm-0'\r\n    plusBtn.className = 'plus btn bg-transparent text-secondary'\r\n    plusBtn.innerHTML = '<i class=\"fa-solid fa-plus\"></i>'\r\n\r\n    orderNumberDiv.className = 'order-number d-flex justify-content-between align-items-center'\r\n    orderNumberDiv.appendChild(minusBtn)\r\n    orderNumberDiv.appendChild(orderNumber)\r\n    orderNumberDiv.appendChild(plusBtn)\r\n\r\n    footer.className = 'w-100 d-flex justify-content-between align-items-center'\r\n    footer.appendChild(orderNumberDiv)\r\n    footer.appendChild(buyButton)\r\n\r\n    cardBody.className = 'd-flex justify-content-center align-items-center flex-column'\r\n    cardBody.appendChild(image)\r\n    cardBody.appendChild(name)\r\n    cardBody.appendChild(desc)\r\n    cardBody.appendChild(footer)\r\n    cardBody.appendChild(price)\r\n\r\n    item.appendChild(cardBody)\r\n\r\n    return item\r\n}\r\n\r\nfunction product() {\r\n    const product = document.createElement('section')\r\n    const productBody = document.createElement('div')\r\n\r\n    product.setAttribute('id', 'Products')\r\n    product.className = 'd-flex w-100 min-vh-100 justify-content-center align-items-center flex-column'\r\n\r\n    product.appendChild(addProductsHeader())\r\n\r\n    // * Adding item to the menu\r\n    productBody.className = 'product-body mt-4 mb-5 d-flex justify-content-center align-items-center'\r\n    productBody.appendChild(createProductCard(\r\n        _img_Laccha_png__WEBPACK_IMPORTED_MODULE_0__,\r\n        'Laccha Paratha',\r\n        'Lachha Paratha are crispy flaky layered whole wheat flatbreads made with a simple unleavened dough consisting of whole wheat flour, salt and ghee or oil. ',\r\n        '65.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_Makki_png__WEBPACK_IMPORTED_MODULE_1__,\r\n        'Makki ki Roti',\r\n        'A winter favorite, makki ki roti is made with maize flour or makki atta, also called cornmeal and is very distinctly an eponymous fit as well.',\r\n        '65.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_product_1_png__WEBPACK_IMPORTED_MODULE_2__,\r\n        'Naan',\r\n        'Naan roti is made from wheat flour and typically cooked in a tandoor oven, resulting in a soft and slightly leavened bread with a slightly charred exterior.',\r\n        '65.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_Tandoori_png__WEBPACK_IMPORTED_MODULE_3__,\r\n        'Tandoori',\r\n        'Tandoori roti is a type of Indian flatbread made from wheat flour and cooked in a tandoor oven, giving it a distinct smoky flavor and slightly charred texture.',\r\n        '65.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_Alo_png__WEBPACK_IMPORTED_MODULE_4__,\r\n        'Aloo Paratha',\r\n        'Aloo paratha is an Indian stuffed flatbread made from wheat flour and filled with a spiced potato mixture, typically pan-fried with ghee or oil until golden brown.',\r\n        '65.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_Roghni_png__WEBPACK_IMPORTED_MODULE_5__,\r\n        'Roghni Naan',\r\n        'Roghni naan is made from wheat flour, enriched with yogurt and ghee, and cooked in a tandoor oven, resulting in a soft, buttery, and slightly crispy bread.',\r\n        '65.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_tea_1_png__WEBPACK_IMPORTED_MODULE_6__,\r\n        'Lemon Ginger Tea',\r\n        'Lemon ginger tea is a soothing beverage made by steeping fresh ginger and lemon in hot water, known for its refreshing and comforting qualities.',\r\n        '30.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_tea_2_png__WEBPACK_IMPORTED_MODULE_7__,\r\n        'Lemon Tea',\r\n        'Lemon tea is a refreshing beverage made by infusing hot water with the bright, zesty flavor of fresh lemon, offering a tangy and invigorating drink.',\r\n        '30.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_tea_6_png__WEBPACK_IMPORTED_MODULE_8__,\r\n        'Coffee',\r\n        'Hot coffee is a beloved and energizing beverage prepared by brewing roasted coffee beans with hot water, offering a rich and aromatic pick-me-up.',\r\n        '15.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_tea_3_png__WEBPACK_IMPORTED_MODULE_9__,\r\n        'Lemonade Iced Tea',\r\n        'Lemonade iced tea is a delightful and thirst-quenching drink made by combining lemonade and chilled tea, creating a sweet-tart and refreshing fusion.',\r\n        '45.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_tea_4_png__WEBPACK_IMPORTED_MODULE_10__,\r\n        'Milk Tea with Peanut',\r\n        'Milk tea with peanut butter is a unique and creamy beverage that combines the richness of milk tea with the nutty and savory notes of peanut butter, offering a comforting and indulgent treat.',\r\n        '45.00'\r\n    ))\r\n\r\n    productBody.appendChild(createProductCard(\r\n        _img_tea_5_png__WEBPACK_IMPORTED_MODULE_11__,\r\n        'Iced Tea',\r\n        'Iced tea is a refreshing cold beverage made by chilling brewed tea, typically served with ice cubes and optional sweeteners or citrus, providing a cool and revitalizing drink.',\r\n        '25.00'\r\n    ))\r\n\r\n    product.appendChild(productBody)\r\n\r\n    return product\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/product.js?");

/***/ }),

/***/ "./src/img/Alo.png":
/*!*************************!*\
  !*** ./src/img/Alo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Alo.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/Alo.png?");

/***/ }),

/***/ "./src/img/Laccha.png":
/*!****************************!*\
  !*** ./src/img/Laccha.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Laccha.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/Laccha.png?");

/***/ }),

/***/ "./src/img/Makki.png":
/*!***************************!*\
  !*** ./src/img/Makki.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Makki.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/Makki.png?");

/***/ }),

/***/ "./src/img/Roghni.png":
/*!****************************!*\
  !*** ./src/img/Roghni.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Roghni.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/Roghni.png?");

/***/ }),

/***/ "./src/img/Tandoori.png":
/*!******************************!*\
  !*** ./src/img/Tandoori.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/Tandoori.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/Tandoori.png?");

/***/ }),

/***/ "./src/img/product-1.png":
/*!*******************************!*\
  !*** ./src/img/product-1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/product-1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/product-1.png?");

/***/ }),

/***/ "./src/img/tea-1.png":
/*!***************************!*\
  !*** ./src/img/tea-1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/tea-1.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tea-1.png?");

/***/ }),

/***/ "./src/img/tea-2.png":
/*!***************************!*\
  !*** ./src/img/tea-2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/tea-2.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tea-2.png?");

/***/ }),

/***/ "./src/img/tea-3.png":
/*!***************************!*\
  !*** ./src/img/tea-3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/tea-3.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tea-3.png?");

/***/ }),

/***/ "./src/img/tea-4.png":
/*!***************************!*\
  !*** ./src/img/tea-4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/tea-4.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tea-4.png?");

/***/ }),

/***/ "./src/img/tea-5.png":
/*!***************************!*\
  !*** ./src/img/tea-5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/tea-5.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tea-5.png?");

/***/ }),

/***/ "./src/img/tea-6.png":
/*!***************************!*\
  !*** ./src/img/tea-6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/tea-6.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/tea-6.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/product.js"));
/******/ }
]);