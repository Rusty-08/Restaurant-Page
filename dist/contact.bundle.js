"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n\r\nconst createForm = () => {\r\n    const contactForm = document.createElement('div');\r\n    const form = document.createElement('form')\r\n    const header = document.createElement('h5')\r\n    const desc = document.createElement('p')\r\n    const name = document.createElement('div')\r\n    const email = document.createElement('div')\r\n    const message = document.createElement('div')\r\n    const submit = document.createElement('button')\r\n\r\n    header.textContent = 'Feedback'\r\n    desc.textContent = 'Share your thoughts with us!'\r\n\r\n    name.innerHTML = `\r\n                <label for=\"name\" class=\"form-label\">Name</label>\r\n                <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\">\r\n            `\r\n    email.innerHTML = `\r\n                <label for=\"email\" class=\"form-label\">Email</label>\r\n                <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\">\r\n            `\r\n    message.innerHTML = `\r\n                <label for=\"text-area\" class=\"form-label\">Message</label>\r\n                <textarea class=\"form-control\" id=\"text-area\" name=\"message\" rows=\"3\" ></textarea>\r\n            `\r\n\r\n    submit.className = 'btn'\r\n    submit.setAttribute('type', 'submit')\r\n    submit.textContent = 'Submit'\r\n\r\n    form.className = 'form'\r\n    form.id = 'myForm'\r\n    form.setAttribute('action', 'https://formspree.io/f/mleyryar')\r\n    form.setAttribute('method', 'POST')\r\n    form.appendChild(header)\r\n    form.appendChild(desc)\r\n    form.appendChild(name)\r\n    form.appendChild(email)\r\n    form.appendChild(message)\r\n    form.appendChild(submit)\r\n\r\n    contactForm.className = 'contact-form'\r\n    contactForm.appendChild(form)\r\n\r\n    return contactForm\r\n}\r\n\r\nfunction contact() {\r\n    const contact = document.createElement('section')\r\n    const container = document.createElement('div')\r\n    const map = document.createElement('div')\r\n    const contactDetail = document.createElement('div')\r\n    const email = document.createElement('p')\r\n    const phone = document.createElement('p')\r\n\r\n    contact.setAttribute('id', 'Contact')\r\n    contact.className = 'd-flex w-100 min-vh-100 justify-content-center align-items-center'\r\n\r\n    map.className = 'map shadow-sm d-flex position-relative'\r\n    map.innerHTML = `<iframe \r\n                        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.5513960193636!2d123.87497475030797!3d12.658509335424956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0d6affb990a2b%3A0x7b28bb102716fe85!2sSabang%20Park%20and%20Beach%20Resort%2C%20Bulan%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1693980496635!5m2!1sen!2sph\" \r\n                        allowfullscreen=\"\" \r\n                        loading=\"lazy\" \r\n                        referrerpolicy=\"no-referrer-when-downgrade\">\r\n                    </iframe>`\r\n\r\n    email.innerHTML = 'Email <br><span><a href=\"mailto:gunaorusty@gmail.com\">gunaorusty@gmail.com</a></span>'\r\n    phone.innerHTML = 'Phone <br><span>(+63) 995 201 6228</span>'\r\n\r\n    contactDetail.className = 'contact-detail position-absolute d-flex gap-5 align-items-center justify-content-center px-5 py-4 shadow-sm'\r\n\r\n    contactDetail.appendChild(email)\r\n    contactDetail.appendChild(phone)\r\n\r\n    map.appendChild(contactDetail)\r\n\r\n    container.className = 'contact-wrapper d-flex w-100 justify-content-evenly align-items-center'\r\n    container.appendChild(map)\r\n    container.appendChild(createForm())\r\n\r\n    contact.appendChild(container)\r\n\r\n    return contact\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);