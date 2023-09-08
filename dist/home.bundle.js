"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFooter: () => (/* binding */ addFooter),
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _img_home_pic_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/home-pic-1.jpg */ "./src/img/home-pic-1.jpg");
/* harmony import */ var _img_home_pic_3_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/home-pic-3.jpg */ "./src/img/home-pic-3.jpg");
/* harmony import */ var _img_home_pic_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/home-pic-2.jpg */ "./src/img/home-pic-2.jpg");




const addTitle = () => {
    const container = document.createElement('div')
    const title = document.createElement('h1')
    const subTitle = document.createElement('span')

    container.className = 'home-title text-center'
    title.textContent = 'Roti Hub'
    subTitle.textContent = 'Griddled, unleavened bread in Indian cuisine.'

    container.appendChild(title)
    container.appendChild(subTitle)

    return container
}

const addButtons = () => {
    const container = document.createElement('div')
    const productLink = document.createElement('a')
    const orderLink = document.createElement('a')

    container.className = 'home-buttons d-flex gap-2 mt-3'
    productLink.className = 'product-btn'
    productLink.textContent = 'Our products'
    productLink.setAttribute('href', '#Products')

    orderLink.textContent = 'Order now!'

    container.appendChild(productLink)
    container.appendChild(orderLink)

    return container
}

const addAccounts = () => {
    const container = document.createElement('div')
    const facebook = document.createElement('i')
    const instagram = document.createElement('i')
    const tiktok = document.createElement('i')

    container.className = 'home-accounts d-flex gap-4'
    facebook.className = 'fa-brands fa-facebook-f fs-5'
    instagram.className = 'fa-brands fa-instagram fs-5'
    tiktok.className = 'fa-brands fa-tiktok fs-5'

    container.appendChild(facebook)
    container.appendChild(instagram)
    container.appendChild(tiktok)

    return container
}

// * Add footer to each section

function addFooter() {
    const footer = document.createElement('div')
    const project = document.createElement('p')
    const year = document.createElement('p')
    const owner = document.createElement('a')
    const accounts = document.createElement('div')
    const facebook = document.createElement('a')
    const linkin = document.createElement('a')
    const github = document.createElement('a')

    project.textContent = 'The Odin Project — Rusty Gunao'
    year.innerHTML = new Date().getFullYear() + ' <i class="fa-regular fa-copyright"></i>'
    owner.setAttribute('href', 'https://github.com/Rusty-08/Restaurant-Page')
    owner.setAttribute('target', '__blank')
    owner.innerHTML = 'Rusty-08 <i class="fa-brands fa-github"></i>'

    accounts.className = 'footer-accounts d-flex align-items-center'

    facebook.setAttribute('target', '__blank')
    facebook.setAttribute('href', 'https://www.facebook.com/gunaorusty')
    facebook.innerHTML = `<i class="fa-brands fa-facebook-f"></i>`

    linkin.setAttribute('target', '__blank')
    linkin.setAttribute('href', 'www.linkedin.com/in/gunaorusty')
    linkin.innerHTML = `<i class="fa-brands fa-linkedin-in"></i>`

    github.setAttribute('target', '__blank')
    github.setAttribute('href', 'https://github.com/Rusty-08')
    github.innerHTML = `<i class="fa-brands fa-github"></i>`

    accounts.appendChild(facebook)
    accounts.appendChild(linkin)
    accounts.appendChild(github)
    accounts.appendChild(year)

    footer.className = 'footer w-100 pt-4 pb-2 d-flex justify-content-center align-items-center flex-column'
    footer.appendChild(project)
    footer.appendChild(owner)
    footer.appendChild(accounts)

    return footer
}

const createImage = (className, image) => {
    const product = document.createElement('img')

    product.setAttribute('alt', 'picture')
    product.className = className
    product.src = image;

    return product
}

function home() {
    const home = document.createElement('section')
    const homeDesc = document.createElement('div')
    const homeProduct = document.createElement('div')
    const pics = document.createElement('div')

    home.setAttribute('id', 'Home')
    homeDesc.className = 'homeDesc d-flex justify-content-center align-items-center flex-column gap-5'
    home.className = 'd-flex w-100 h-100 justify-content-evenly align-items-center'

    homeDesc.appendChild(addTitle())
    homeDesc.appendChild(addButtons())
    homeDesc.appendChild(addAccounts())

    pics.className = 'd-flex flex-column gap-2'
    pics.appendChild(createImage('home-product-2', _img_home_pic_3_jpg__WEBPACK_IMPORTED_MODULE_1__))
    pics.appendChild(createImage('home-product-3', _img_home_pic_2_jpg__WEBPACK_IMPORTED_MODULE_2__))

    homeProduct.className = 'image-container d-flex justify-content-center align-items-center gap-2 shadow-lg'
    homeProduct.appendChild(pics)
    homeProduct.appendChild(createImage('home-product-1', _img_home_pic_1_jpg__WEBPACK_IMPORTED_MODULE_0__))

    home.appendChild(homeDesc)
    home.appendChild(homeProduct)

    return home
}

/***/ }),

/***/ "./src/img/home-pic-1.jpg":
/*!********************************!*\
  !*** ./src/img/home-pic-1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/home-pic-1.jpg";

/***/ }),

/***/ "./src/img/home-pic-2.jpg":
/*!********************************!*\
  !*** ./src/img/home-pic-2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/home-pic-2.jpg";

/***/ }),

/***/ "./src/img/home-pic-3.jpg":
/*!********************************!*\
  !*** ./src/img/home-pic-3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/home-pic-3.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDQTtBQUNBO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0RBQWM7QUFDakUsbURBQW1ELGdEQUFjO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnREFBYztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjdFNhbXBsZTEgZnJvbSAnLi9pbWcvaG9tZS1waWMtMS5qcGcnO1xyXG5pbXBvcnQgcHJvZHVjdFNhbXBsZTIgZnJvbSAnLi9pbWcvaG9tZS1waWMtMy5qcGcnO1xyXG5pbXBvcnQgcHJvZHVjdFNhbXBsZTMgZnJvbSAnLi9pbWcvaG9tZS1waWMtMi5qcGcnO1xyXG5cclxuY29uc3QgYWRkVGl0bGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaG9tZS10aXRsZSB0ZXh0LWNlbnRlcidcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1JvdGkgSHViJ1xyXG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSAnR3JpZGRsZWQsIHVubGVhdmVuZWQgYnJlYWQgaW4gSW5kaWFuIGN1aXNpbmUuJ1xyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUaXRsZSlcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbn1cclxuXHJcbmNvbnN0IGFkZEJ1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcHJvZHVjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGNvbnN0IG9yZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaG9tZS1idXR0b25zIGQtZmxleCBnYXAtMiBtdC0zJ1xyXG4gICAgcHJvZHVjdExpbmsuY2xhc3NOYW1lID0gJ3Byb2R1Y3QtYnRuJ1xyXG4gICAgcHJvZHVjdExpbmsudGV4dENvbnRlbnQgPSAnT3VyIHByb2R1Y3RzJ1xyXG4gICAgcHJvZHVjdExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyNQcm9kdWN0cycpXHJcblxyXG4gICAgb3JkZXJMaW5rLnRleHRDb250ZW50ID0gJ09yZGVyIG5vdyEnXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3RMaW5rKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG9yZGVyTGluaylcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbn1cclxuXHJcbmNvbnN0IGFkZEFjY291bnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGZhY2Vib29rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBjb25zdCBpbnN0YWdyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcclxuICAgIGNvbnN0IHRpa3RvayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnaG9tZS1hY2NvdW50cyBkLWZsZXggZ2FwLTQnXHJcbiAgICBmYWNlYm9vay5jbGFzc05hbWUgPSAnZmEtYnJhbmRzIGZhLWZhY2Vib29rLWYgZnMtNSdcclxuICAgIGluc3RhZ3JhbS5jbGFzc05hbWUgPSAnZmEtYnJhbmRzIGZhLWluc3RhZ3JhbSBmcy01J1xyXG4gICAgdGlrdG9rLmNsYXNzTmFtZSA9ICdmYS1icmFuZHMgZmEtdGlrdG9rIGZzLTUnXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZhY2Vib29rKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RhZ3JhbSlcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aWt0b2spXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclxyXG59XHJcblxyXG4vLyAqIEFkZCBmb290ZXIgdG8gZWFjaCBzZWN0aW9uXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRm9vdGVyKCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHllYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IG93bmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBjb25zdCBhY2NvdW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBmYWNlYm9vayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgY29uc3QgbGlua2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuXHJcbiAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gJ1RoZSBPZGluIFByb2plY3Qg4oCUIFJ1c3R5IEd1bmFvJ1xyXG4gICAgeWVhci5pbm5lckhUTUwgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyAnIDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1jb3B5cmlnaHRcIj48L2k+J1xyXG4gICAgb3duZXIuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9SdXN0eS0wOC9SZXN0YXVyYW50LVBhZ2UnKVxyXG4gICAgb3duZXIuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX19ibGFuaycpXHJcbiAgICBvd25lci5pbm5lckhUTUwgPSAnUnVzdHktMDggPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPidcclxuXHJcbiAgICBhY2NvdW50cy5jbGFzc05hbWUgPSAnZm9vdGVyLWFjY291bnRzIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInXHJcblxyXG4gICAgZmFjZWJvb2suc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX19ibGFuaycpXHJcbiAgICBmYWNlYm9vay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2d1bmFvcnVzdHknKVxyXG4gICAgZmFjZWJvb2suaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtYnJhbmRzIGZhLWZhY2Vib29rLWZcIj48L2k+YFxyXG5cclxuICAgIGxpbmtpbi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfX2JsYW5rJylcclxuICAgIGxpbmtpbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnd3d3LmxpbmtlZGluLmNvbS9pbi9ndW5hb3J1c3R5JylcclxuICAgIGxpbmtpbi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtbGlua2VkaW4taW5cIj48L2k+YFxyXG5cclxuICAgIGdpdGh1Yi5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfX2JsYW5rJylcclxuICAgIGdpdGh1Yi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL1J1c3R5LTA4JylcclxuICAgIGdpdGh1Yi5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PC9pPmBcclxuXHJcbiAgICBhY2NvdW50cy5hcHBlbmRDaGlsZChmYWNlYm9vaylcclxuICAgIGFjY291bnRzLmFwcGVuZENoaWxkKGxpbmtpbilcclxuICAgIGFjY291bnRzLmFwcGVuZENoaWxkKGdpdGh1YilcclxuICAgIGFjY291bnRzLmFwcGVuZENoaWxkKHllYXIpXHJcblxyXG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdmb290ZXIgdy0xMDAgcHQtNCBwYi0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWNvbHVtbidcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKG93bmVyKVxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGFjY291bnRzKVxyXG5cclxuICAgIHJldHVybiBmb290ZXJcclxufVxyXG5cclxuY29uc3QgY3JlYXRlSW1hZ2UgPSAoY2xhc3NOYW1lLCBpbWFnZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcblxyXG4gICAgcHJvZHVjdC5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdwaWN0dXJlJylcclxuICAgIHByb2R1Y3QuY2xhc3NOYW1lID0gY2xhc3NOYW1lXHJcbiAgICBwcm9kdWN0LnNyYyA9IGltYWdlO1xyXG5cclxuICAgIHJldHVybiBwcm9kdWN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXHJcbiAgICBjb25zdCBob21lRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBob21lUHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBwaWNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnSG9tZScpXHJcbiAgICBob21lRGVzYy5jbGFzc05hbWUgPSAnaG9tZURlc2MgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtY29sdW1uIGdhcC01J1xyXG4gICAgaG9tZS5jbGFzc05hbWUgPSAnZC1mbGV4IHctMTAwIGgtMTAwIGp1c3RpZnktY29udGVudC1ldmVubHkgYWxpZ24taXRlbXMtY2VudGVyJ1xyXG5cclxuICAgIGhvbWVEZXNjLmFwcGVuZENoaWxkKGFkZFRpdGxlKCkpXHJcbiAgICBob21lRGVzYy5hcHBlbmRDaGlsZChhZGRCdXR0b25zKCkpXHJcbiAgICBob21lRGVzYy5hcHBlbmRDaGlsZChhZGRBY2NvdW50cygpKVxyXG5cclxuICAgIHBpY3MuY2xhc3NOYW1lID0gJ2QtZmxleCBmbGV4LWNvbHVtbiBnYXAtMidcclxuICAgIHBpY3MuYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2UoJ2hvbWUtcHJvZHVjdC0yJywgcHJvZHVjdFNhbXBsZTIpKVxyXG4gICAgcGljcy5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZSgnaG9tZS1wcm9kdWN0LTMnLCBwcm9kdWN0U2FtcGxlMykpXHJcblxyXG4gICAgaG9tZVByb2R1Y3QuY2xhc3NOYW1lID0gJ2ltYWdlLWNvbnRhaW5lciBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZ2FwLTIgc2hhZG93LWxnJ1xyXG4gICAgaG9tZVByb2R1Y3QuYXBwZW5kQ2hpbGQocGljcylcclxuICAgIGhvbWVQcm9kdWN0LmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlKCdob21lLXByb2R1Y3QtMScsIHByb2R1Y3RTYW1wbGUxKSlcclxuXHJcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVEZXNjKVxyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lUHJvZHVjdClcclxuXHJcbiAgICByZXR1cm4gaG9tZVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9