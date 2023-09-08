"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["product"],{

/***/ "./src/product.js":
/*!************************!*\
  !*** ./src/product.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ product)
/* harmony export */ });
/* harmony import */ var _img_Laccha_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/Laccha.png */ "./src/img/Laccha.png");
/* harmony import */ var _img_Makki_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/Makki.png */ "./src/img/Makki.png");
/* harmony import */ var _img_product_1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/product-1.png */ "./src/img/product-1.png");
/* harmony import */ var _img_Tandoori_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Tandoori.png */ "./src/img/Tandoori.png");
/* harmony import */ var _img_Alo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/Alo.png */ "./src/img/Alo.png");
/* harmony import */ var _img_Roghni_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/Roghni.png */ "./src/img/Roghni.png");
/* harmony import */ var _img_tea_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/tea-1.png */ "./src/img/tea-1.png");
/* harmony import */ var _img_tea_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/tea-2.png */ "./src/img/tea-2.png");
/* harmony import */ var _img_tea_6_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/tea-6.png */ "./src/img/tea-6.png");
/* harmony import */ var _img_tea_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./img/tea-3.png */ "./src/img/tea-3.png");
/* harmony import */ var _img_tea_4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./img/tea-4.png */ "./src/img/tea-4.png");
/* harmony import */ var _img_tea_5_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./img/tea-5.png */ "./src/img/tea-5.png");













const addProductsHeader = () => {
    const title = document.createElement('div');
    const header = document.createElement('h1');
    const desc = document.createElement('p');

    title.className = 'products-header d-flex align-items-center text-center flex-column h-auto mt-5'
    header.textContent = 'HEALTHY ROTI & TEA'
    desc.innerHTML = 'Come and try our deliciously balanced combination of Roti & Tea.'

    title.appendChild(header)
    title.appendChild(desc)

    return title
}

const createProductCard = (pic, title, description, itemPrice) => {
    const item = document.createElement('div')
    const cardBody = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('h3')
    const desc = document.createElement('p')
    const footer = document.createElement('div')
    const buyButton = document.createElement('button')
    const orderNumberDiv = document.createElement('div')
    const minusBtn = document.createElement('button')
    const orderNumber = document.createElement('p')
    const plusBtn = document.createElement('button')
    const price = document.createElement('p')

    item.className = 'product-card card p-3 shadow-sm'

    image.setAttribute('alt', 'picture')
    image.src = pic

    name.className = 'food-name'
    name.textContent = title
    desc.className = 'food-desc text-center'
    desc.textContent = description

    buyButton.className = 'buy-btn btn'
    buyButton.innerHTML = '<i class="fa-solid fa-cart-plus"></i>'

    price.className = 'price m-0 shadow-lg d-flex justify-content-center align-items-center'
    price.textContent = `₱ ${itemPrice}`

    minusBtn.className = 'minus btn bg-transparent text-secondary'
    minusBtn.innerHTML = '<i class="fa-solid fa-minus"></i>'
    orderNumber.className = 'm-0'
    plusBtn.className = 'plus btn bg-transparent text-secondary'
    plusBtn.innerHTML = '<i class="fa-solid fa-plus"></i>'

    orderNumberDiv.className = 'order-number d-flex justify-content-between align-items-center'
    orderNumberDiv.appendChild(minusBtn)
    orderNumberDiv.appendChild(orderNumber)
    orderNumberDiv.appendChild(plusBtn)

    footer.className = 'w-100 d-flex justify-content-between align-items-center'
    footer.appendChild(orderNumberDiv)
    footer.appendChild(buyButton)

    cardBody.className = 'd-flex justify-content-center align-items-center flex-column'
    cardBody.appendChild(image)
    cardBody.appendChild(name)
    cardBody.appendChild(desc)
    cardBody.appendChild(footer)
    cardBody.appendChild(price)

    item.appendChild(cardBody)

    return item
}

function product() {
    const product = document.createElement('section')
    const productBody = document.createElement('div')

    product.setAttribute('id', 'Products')
    product.className = 'd-flex w-100 min-vh-100 justify-content-center align-items-center flex-column'

    product.appendChild(addProductsHeader())

    // * Adding item to the menu
    productBody.className = 'product-body mt-4 mb-5 d-flex justify-content-center align-items-center'
    productBody.appendChild(createProductCard(
        _img_Laccha_png__WEBPACK_IMPORTED_MODULE_0__,
        'Laccha Paratha',
        'Lachha Paratha are crispy flaky layered whole wheat flatbreads made with a simple unleavened dough consisting of whole wheat flour, salt and ghee or oil. ',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        _img_Makki_png__WEBPACK_IMPORTED_MODULE_1__,
        'Makki ki Roti',
        'A winter favorite, makki ki roti is made with maize flour or makki atta, also called cornmeal and is very distinctly an eponymous fit as well.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        _img_product_1_png__WEBPACK_IMPORTED_MODULE_2__,
        'Naan',
        'Naan roti is made from wheat flour and typically cooked in a tandoor oven, resulting in a soft and slightly leavened bread with a slightly charred exterior.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        _img_Tandoori_png__WEBPACK_IMPORTED_MODULE_3__,
        'Tandoori',
        'Tandoori roti is a type of Indian flatbread made from wheat flour and cooked in a tandoor oven, giving it a distinct smoky flavor and slightly charred texture.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        _img_Alo_png__WEBPACK_IMPORTED_MODULE_4__,
        'Aloo Paratha',
        'Aloo paratha is an Indian stuffed flatbread made from wheat flour and filled with a spiced potato mixture, typically pan-fried with ghee or oil until golden brown.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        _img_Roghni_png__WEBPACK_IMPORTED_MODULE_5__,
        'Roghni Naan',
        'Roghni naan is made from wheat flour, enriched with yogurt and ghee, and cooked in a tandoor oven, resulting in a soft, buttery, and slightly crispy bread.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        _img_tea_1_png__WEBPACK_IMPORTED_MODULE_6__,
        'Lemon Ginger Tea',
        'Lemon ginger tea is a soothing beverage made by steeping fresh ginger and lemon in hot water, known for its refreshing and comforting qualities.',
        '30.00'
    ))

    productBody.appendChild(createProductCard(
        _img_tea_2_png__WEBPACK_IMPORTED_MODULE_7__,
        'Lemon Tea',
        'Lemon tea is a refreshing beverage made by infusing hot water with the bright, zesty flavor of fresh lemon, offering a tangy and invigorating drink.',
        '30.00'
    ))

    productBody.appendChild(createProductCard(
        _img_tea_6_png__WEBPACK_IMPORTED_MODULE_8__,
        'Coffee',
        'Hot coffee is a beloved and energizing beverage prepared by brewing roasted coffee beans with hot water, offering a rich and aromatic pick-me-up.',
        '15.00'
    ))

    productBody.appendChild(createProductCard(
        _img_tea_3_png__WEBPACK_IMPORTED_MODULE_9__,
        'Lemonade Iced Tea',
        'Lemonade iced tea is a delightful and thirst-quenching drink made by combining lemonade and chilled tea, creating a sweet-tart and refreshing fusion.',
        '45.00'
    ))

    productBody.appendChild(createProductCard(
        _img_tea_4_png__WEBPACK_IMPORTED_MODULE_10__,
        'Milk Tea with Peanut',
        'Milk tea with peanut butter is a unique and creamy beverage that combines the richness of milk tea with the nutty and savory notes of peanut butter, offering a comforting and indulgent treat.',
        '45.00'
    ))

    productBody.appendChild(createProductCard(
        _img_tea_5_png__WEBPACK_IMPORTED_MODULE_11__,
        'Iced Tea',
        'Iced tea is a refreshing cold beverage made by chilling brewed tea, typically served with ice cubes and optional sweeteners or citrus, providing a cool and revitalizing drink.',
        '25.00'
    ))

    product.appendChild(productBody)

    return product
}

/***/ }),

/***/ "./src/img/Alo.png":
/*!*************************!*\
  !*** ./src/img/Alo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Alo.png";

/***/ }),

/***/ "./src/img/Laccha.png":
/*!****************************!*\
  !*** ./src/img/Laccha.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Laccha.png";

/***/ }),

/***/ "./src/img/Makki.png":
/*!***************************!*\
  !*** ./src/img/Makki.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Makki.png";

/***/ }),

/***/ "./src/img/Roghni.png":
/*!****************************!*\
  !*** ./src/img/Roghni.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Roghni.png";

/***/ }),

/***/ "./src/img/Tandoori.png":
/*!******************************!*\
  !*** ./src/img/Tandoori.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Tandoori.png";

/***/ }),

/***/ "./src/img/product-1.png":
/*!*******************************!*\
  !*** ./src/img/product-1.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/product-1.png";

/***/ }),

/***/ "./src/img/tea-1.png":
/*!***************************!*\
  !*** ./src/img/tea-1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/tea-1.png";

/***/ }),

/***/ "./src/img/tea-2.png":
/*!***************************!*\
  !*** ./src/img/tea-2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/tea-2.png";

/***/ }),

/***/ "./src/img/tea-3.png":
/*!***************************!*\
  !*** ./src/img/tea-3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/tea-3.png";

/***/ }),

/***/ "./src/img/tea-4.png":
/*!***************************!*\
  !*** ./src/img/tea-4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/tea-4.png";

/***/ }),

/***/ "./src/img/tea-5.png":
/*!***************************!*\
  !*** ./src/img/tea-5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/tea-5.png";

/***/ }),

/***/ "./src/img/tea-6.png":
/*!***************************!*\
  !*** ./src/img/tea-6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/tea-6.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/product.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUNEO0FBQ0k7QUFDRDtBQUNMO0FBQ0c7QUFDRDtBQUNBO0FBQ0E7QUFDQztBQUNBO0FBQ0E7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUNBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkNBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJDQUFLO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyQ0FBTTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNENBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDRDQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Byb2R1Y3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGl0ZW0xIGZyb20gJy4vaW1nL0xhY2NoYS5wbmcnO1xyXG5pbXBvcnQgaXRlbTIgZnJvbSAnLi9pbWcvTWFra2kucG5nJztcclxuaW1wb3J0IGl0ZW0zIGZyb20gJy4vaW1nL3Byb2R1Y3QtMS5wbmcnO1xyXG5pbXBvcnQgaXRlbTQgZnJvbSAnLi9pbWcvVGFuZG9vcmkucG5nJztcclxuaW1wb3J0IGl0ZW01IGZyb20gJy4vaW1nL0Fsby5wbmcnO1xyXG5pbXBvcnQgaXRlbTYgZnJvbSAnLi9pbWcvUm9naG5pLnBuZyc7XHJcbmltcG9ydCBpdGVtNyBmcm9tICcuL2ltZy90ZWEtMS5wbmcnO1xyXG5pbXBvcnQgaXRlbTggZnJvbSAnLi9pbWcvdGVhLTIucG5nJztcclxuaW1wb3J0IGl0ZW05IGZyb20gJy4vaW1nL3RlYS02LnBuZyc7XHJcbmltcG9ydCBpdGVtMTAgZnJvbSAnLi9pbWcvdGVhLTMucG5nJztcclxuaW1wb3J0IGl0ZW0xMSBmcm9tICcuL2ltZy90ZWEtNC5wbmcnO1xyXG5pbXBvcnQgaXRlbTEyIGZyb20gJy4vaW1nL3RlYS01LnBuZyc7XHJcblxyXG5jb25zdCBhZGRQcm9kdWN0c0hlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAncHJvZHVjdHMtaGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgZmxleC1jb2x1bW4gaC1hdXRvIG10LTUnXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnSEVBTFRIWSBST1RJICYgVEVBJ1xyXG4gICAgZGVzYy5pbm5lckhUTUwgPSAnQ29tZSBhbmQgdHJ5IG91ciBkZWxpY2lvdXNseSBiYWxhbmNlZCBjb21iaW5hdGlvbiBvZiBSb3RpICYgVGVhLidcclxuXHJcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChoZWFkZXIpXHJcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChkZXNjKVxyXG5cclxuICAgIHJldHVybiB0aXRsZVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVQcm9kdWN0Q2FyZCA9IChwaWMsIHRpdGxlLCBkZXNjcmlwdGlvbiwgaXRlbVByaWNlKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgYnV5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IG9yZGVyTnVtYmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1pbnVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IG9yZGVyTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgaXRlbS5jbGFzc05hbWUgPSAncHJvZHVjdC1jYXJkIGNhcmQgcC0zIHNoYWRvdy1zbSdcclxuXHJcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdwaWN0dXJlJylcclxuICAgIGltYWdlLnNyYyA9IHBpY1xyXG5cclxuICAgIG5hbWUuY2xhc3NOYW1lID0gJ2Zvb2QtbmFtZSdcclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0aXRsZVxyXG4gICAgZGVzYy5jbGFzc05hbWUgPSAnZm9vZC1kZXNjIHRleHQtY2VudGVyJ1xyXG4gICAgZGVzYy50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uXHJcblxyXG4gICAgYnV5QnV0dG9uLmNsYXNzTmFtZSA9ICdidXktYnRuIGJ0bidcclxuICAgIGJ1eUJ1dHRvbi5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jYXJ0LXBsdXNcIj48L2k+J1xyXG5cclxuICAgIHByaWNlLmNsYXNzTmFtZSA9ICdwcmljZSBtLTAgc2hhZG93LWxnIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcclxuICAgIHByaWNlLnRleHRDb250ZW50ID0gYOKCsSAke2l0ZW1QcmljZX1gXHJcblxyXG4gICAgbWludXNCdG4uY2xhc3NOYW1lID0gJ21pbnVzIGJ0biBiZy10cmFuc3BhcmVudCB0ZXh0LXNlY29uZGFyeSdcclxuICAgIG1pbnVzQnRuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhLXNvbGlkIGZhLW1pbnVzXCI+PC9pPidcclxuICAgIG9yZGVyTnVtYmVyLmNsYXNzTmFtZSA9ICdtLTAnXHJcbiAgICBwbHVzQnRuLmNsYXNzTmFtZSA9ICdwbHVzIGJ0biBiZy10cmFuc3BhcmVudCB0ZXh0LXNlY29uZGFyeSdcclxuICAgIHBsdXNCdG4uaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtcGx1c1wiPjwvaT4nXHJcblxyXG4gICAgb3JkZXJOdW1iZXJEaXYuY2xhc3NOYW1lID0gJ29yZGVyLW51bWJlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyJ1xyXG4gICAgb3JkZXJOdW1iZXJEaXYuYXBwZW5kQ2hpbGQobWludXNCdG4pXHJcbiAgICBvcmRlck51bWJlckRpdi5hcHBlbmRDaGlsZChvcmRlck51bWJlcilcclxuICAgIG9yZGVyTnVtYmVyRGl2LmFwcGVuZENoaWxkKHBsdXNCdG4pXHJcblxyXG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICd3LTEwMCBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyJ1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKG9yZGVyTnVtYmVyRGl2KVxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGJ1eUJ1dHRvbilcclxuXHJcbiAgICBjYXJkQm9keS5jbGFzc05hbWUgPSAnZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtY29sdW1uJ1xyXG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpXHJcbiAgICBjYXJkQm9keS5hcHBlbmRDaGlsZChuYW1lKVxyXG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoZGVzYylcclxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGZvb3RlcilcclxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKHByaWNlKVxyXG5cclxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2FyZEJvZHkpXHJcblxyXG4gICAgcmV0dXJuIGl0ZW1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdCgpIHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcclxuICAgIGNvbnN0IHByb2R1Y3RCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICBwcm9kdWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnUHJvZHVjdHMnKVxyXG4gICAgcHJvZHVjdC5jbGFzc05hbWUgPSAnZC1mbGV4IHctMTAwIG1pbi12aC0xMDAganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW4nXHJcblxyXG4gICAgcHJvZHVjdC5hcHBlbmRDaGlsZChhZGRQcm9kdWN0c0hlYWRlcigpKVxyXG5cclxuICAgIC8vICogQWRkaW5nIGl0ZW0gdG8gdGhlIG1lbnVcclxuICAgIHByb2R1Y3RCb2R5LmNsYXNzTmFtZSA9ICdwcm9kdWN0LWJvZHkgbXQtNCBtYi01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcclxuICAgIHByb2R1Y3RCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2R1Y3RDYXJkKFxyXG4gICAgICAgIGl0ZW0xLFxyXG4gICAgICAgICdMYWNjaGEgUGFyYXRoYScsXHJcbiAgICAgICAgJ0xhY2hoYSBQYXJhdGhhIGFyZSBjcmlzcHkgZmxha3kgbGF5ZXJlZCB3aG9sZSB3aGVhdCBmbGF0YnJlYWRzIG1hZGUgd2l0aCBhIHNpbXBsZSB1bmxlYXZlbmVkIGRvdWdoIGNvbnNpc3Rpbmcgb2Ygd2hvbGUgd2hlYXQgZmxvdXIsIHNhbHQgYW5kIGdoZWUgb3Igb2lsLiAnLFxyXG4gICAgICAgICc2NS4wMCdcclxuICAgICkpXHJcblxyXG4gICAgcHJvZHVjdEJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvZHVjdENhcmQoXHJcbiAgICAgICAgaXRlbTIsXHJcbiAgICAgICAgJ01ha2tpIGtpIFJvdGknLFxyXG4gICAgICAgICdBIHdpbnRlciBmYXZvcml0ZSwgbWFra2kga2kgcm90aSBpcyBtYWRlIHdpdGggbWFpemUgZmxvdXIgb3IgbWFra2kgYXR0YSwgYWxzbyBjYWxsZWQgY29ybm1lYWwgYW5kIGlzIHZlcnkgZGlzdGluY3RseSBhbiBlcG9ueW1vdXMgZml0IGFzIHdlbGwuJyxcclxuICAgICAgICAnNjUuMDAnXHJcbiAgICApKVxyXG5cclxuICAgIHByb2R1Y3RCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2R1Y3RDYXJkKFxyXG4gICAgICAgIGl0ZW0zLFxyXG4gICAgICAgICdOYWFuJyxcclxuICAgICAgICAnTmFhbiByb3RpIGlzIG1hZGUgZnJvbSB3aGVhdCBmbG91ciBhbmQgdHlwaWNhbGx5IGNvb2tlZCBpbiBhIHRhbmRvb3Igb3ZlbiwgcmVzdWx0aW5nIGluIGEgc29mdCBhbmQgc2xpZ2h0bHkgbGVhdmVuZWQgYnJlYWQgd2l0aCBhIHNsaWdodGx5IGNoYXJyZWQgZXh0ZXJpb3IuJyxcclxuICAgICAgICAnNjUuMDAnXHJcbiAgICApKVxyXG5cclxuICAgIHByb2R1Y3RCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2R1Y3RDYXJkKFxyXG4gICAgICAgIGl0ZW00LFxyXG4gICAgICAgICdUYW5kb29yaScsXHJcbiAgICAgICAgJ1RhbmRvb3JpIHJvdGkgaXMgYSB0eXBlIG9mIEluZGlhbiBmbGF0YnJlYWQgbWFkZSBmcm9tIHdoZWF0IGZsb3VyIGFuZCBjb29rZWQgaW4gYSB0YW5kb29yIG92ZW4sIGdpdmluZyBpdCBhIGRpc3RpbmN0IHNtb2t5IGZsYXZvciBhbmQgc2xpZ2h0bHkgY2hhcnJlZCB0ZXh0dXJlLicsXHJcbiAgICAgICAgJzY1LjAwJ1xyXG4gICAgKSlcclxuXHJcbiAgICBwcm9kdWN0Qm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0Q2FyZChcclxuICAgICAgICBpdGVtNSxcclxuICAgICAgICAnQWxvbyBQYXJhdGhhJyxcclxuICAgICAgICAnQWxvbyBwYXJhdGhhIGlzIGFuIEluZGlhbiBzdHVmZmVkIGZsYXRicmVhZCBtYWRlIGZyb20gd2hlYXQgZmxvdXIgYW5kIGZpbGxlZCB3aXRoIGEgc3BpY2VkIHBvdGF0byBtaXh0dXJlLCB0eXBpY2FsbHkgcGFuLWZyaWVkIHdpdGggZ2hlZSBvciBvaWwgdW50aWwgZ29sZGVuIGJyb3duLicsXHJcbiAgICAgICAgJzY1LjAwJ1xyXG4gICAgKSlcclxuXHJcbiAgICBwcm9kdWN0Qm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0Q2FyZChcclxuICAgICAgICBpdGVtNixcclxuICAgICAgICAnUm9naG5pIE5hYW4nLFxyXG4gICAgICAgICdSb2dobmkgbmFhbiBpcyBtYWRlIGZyb20gd2hlYXQgZmxvdXIsIGVucmljaGVkIHdpdGggeW9ndXJ0IGFuZCBnaGVlLCBhbmQgY29va2VkIGluIGEgdGFuZG9vciBvdmVuLCByZXN1bHRpbmcgaW4gYSBzb2Z0LCBidXR0ZXJ5LCBhbmQgc2xpZ2h0bHkgY3Jpc3B5IGJyZWFkLicsXHJcbiAgICAgICAgJzY1LjAwJ1xyXG4gICAgKSlcclxuXHJcbiAgICBwcm9kdWN0Qm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0Q2FyZChcclxuICAgICAgICBpdGVtNyxcclxuICAgICAgICAnTGVtb24gR2luZ2VyIFRlYScsXHJcbiAgICAgICAgJ0xlbW9uIGdpbmdlciB0ZWEgaXMgYSBzb290aGluZyBiZXZlcmFnZSBtYWRlIGJ5IHN0ZWVwaW5nIGZyZXNoIGdpbmdlciBhbmQgbGVtb24gaW4gaG90IHdhdGVyLCBrbm93biBmb3IgaXRzIHJlZnJlc2hpbmcgYW5kIGNvbWZvcnRpbmcgcXVhbGl0aWVzLicsXHJcbiAgICAgICAgJzMwLjAwJ1xyXG4gICAgKSlcclxuXHJcbiAgICBwcm9kdWN0Qm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0Q2FyZChcclxuICAgICAgICBpdGVtOCxcclxuICAgICAgICAnTGVtb24gVGVhJyxcclxuICAgICAgICAnTGVtb24gdGVhIGlzIGEgcmVmcmVzaGluZyBiZXZlcmFnZSBtYWRlIGJ5IGluZnVzaW5nIGhvdCB3YXRlciB3aXRoIHRoZSBicmlnaHQsIHplc3R5IGZsYXZvciBvZiBmcmVzaCBsZW1vbiwgb2ZmZXJpbmcgYSB0YW5neSBhbmQgaW52aWdvcmF0aW5nIGRyaW5rLicsXHJcbiAgICAgICAgJzMwLjAwJ1xyXG4gICAgKSlcclxuXHJcbiAgICBwcm9kdWN0Qm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0Q2FyZChcclxuICAgICAgICBpdGVtOSxcclxuICAgICAgICAnQ29mZmVlJyxcclxuICAgICAgICAnSG90IGNvZmZlZSBpcyBhIGJlbG92ZWQgYW5kIGVuZXJnaXppbmcgYmV2ZXJhZ2UgcHJlcGFyZWQgYnkgYnJld2luZyByb2FzdGVkIGNvZmZlZSBiZWFucyB3aXRoIGhvdCB3YXRlciwgb2ZmZXJpbmcgYSByaWNoIGFuZCBhcm9tYXRpYyBwaWNrLW1lLXVwLicsXHJcbiAgICAgICAgJzE1LjAwJ1xyXG4gICAgKSlcclxuXHJcbiAgICBwcm9kdWN0Qm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9kdWN0Q2FyZChcclxuICAgICAgICBpdGVtMTAsXHJcbiAgICAgICAgJ0xlbW9uYWRlIEljZWQgVGVhJyxcclxuICAgICAgICAnTGVtb25hZGUgaWNlZCB0ZWEgaXMgYSBkZWxpZ2h0ZnVsIGFuZCB0aGlyc3QtcXVlbmNoaW5nIGRyaW5rIG1hZGUgYnkgY29tYmluaW5nIGxlbW9uYWRlIGFuZCBjaGlsbGVkIHRlYSwgY3JlYXRpbmcgYSBzd2VldC10YXJ0IGFuZCByZWZyZXNoaW5nIGZ1c2lvbi4nLFxyXG4gICAgICAgICc0NS4wMCdcclxuICAgICkpXHJcblxyXG4gICAgcHJvZHVjdEJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvZHVjdENhcmQoXHJcbiAgICAgICAgaXRlbTExLFxyXG4gICAgICAgICdNaWxrIFRlYSB3aXRoIFBlYW51dCcsXHJcbiAgICAgICAgJ01pbGsgdGVhIHdpdGggcGVhbnV0IGJ1dHRlciBpcyBhIHVuaXF1ZSBhbmQgY3JlYW15IGJldmVyYWdlIHRoYXQgY29tYmluZXMgdGhlIHJpY2huZXNzIG9mIG1pbGsgdGVhIHdpdGggdGhlIG51dHR5IGFuZCBzYXZvcnkgbm90ZXMgb2YgcGVhbnV0IGJ1dHRlciwgb2ZmZXJpbmcgYSBjb21mb3J0aW5nIGFuZCBpbmR1bGdlbnQgdHJlYXQuJyxcclxuICAgICAgICAnNDUuMDAnXHJcbiAgICApKVxyXG5cclxuICAgIHByb2R1Y3RCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZVByb2R1Y3RDYXJkKFxyXG4gICAgICAgIGl0ZW0xMixcclxuICAgICAgICAnSWNlZCBUZWEnLFxyXG4gICAgICAgICdJY2VkIHRlYSBpcyBhIHJlZnJlc2hpbmcgY29sZCBiZXZlcmFnZSBtYWRlIGJ5IGNoaWxsaW5nIGJyZXdlZCB0ZWEsIHR5cGljYWxseSBzZXJ2ZWQgd2l0aCBpY2UgY3ViZXMgYW5kIG9wdGlvbmFsIHN3ZWV0ZW5lcnMgb3IgY2l0cnVzLCBwcm92aWRpbmcgYSBjb29sIGFuZCByZXZpdGFsaXppbmcgZHJpbmsuJyxcclxuICAgICAgICAnMjUuMDAnXHJcbiAgICApKVxyXG5cclxuICAgIHByb2R1Y3QuYXBwZW5kQ2hpbGQocHJvZHVjdEJvZHkpXHJcblxyXG4gICAgcmV0dXJuIHByb2R1Y3RcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==