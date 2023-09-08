"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["navigation"],{

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ navigation),\n/* harmony export */   setActiveLink: () => (/* binding */ setActiveLink)\n/* harmony export */ });\nfunction setActiveLink() {\r\n    const project = document.querySelector('.nav-item:nth-child(2) .nav-link');\r\n    const home = document.querySelector('.nav-item:nth-child(1) .nav-link');\r\n    const navlink = document.querySelectorAll(['.nav-link', '.logo', '.product-btn'])\r\n    const sections = document.querySelectorAll(['#Home', '#About', '#Products', '#Contact'])\r\n\r\n    navlink.forEach(link => {\r\n        link.addEventListener('click', () => {\r\n            navlink.forEach(link => link.classList.remove('active'))\r\n            sections.forEach(section => section.classList.add('d-none'))\r\n\r\n            const linkHref = link.getAttribute('href')\r\n            const activeLink = linkHref.toString().split('').splice(1, linkHref.length - 1).join('')\r\n\r\n            document.getElementById(`${activeLink}`)\r\n                .classList.remove('d-none')\r\n\r\n            link.classList.add('active')\r\n\r\n            if (linkHref == '#Products') {\r\n                project.classList.add('active')\r\n            }\r\n\r\n            if (linkHref == '#Home') {\r\n                home.classList.add('active')\r\n            }\r\n\r\n            sessionStorage.setItem('activePage', activeLink)\r\n        })\r\n    })\r\n}\r\n\r\nfunction navigation() {\r\n    const container = document.createElement('div');\r\n    const nav = document.createElement('nav');\r\n    const ul = document.createElement('ul');\r\n    const name = document.createElement('a');\r\n\r\n    container.className = 'container-fluid position-relative d-flex justify-content-center';\r\n    nav.className = 'navbar fixed-top px-4'\r\n    ul.className = 'nav gap-4'\r\n\r\n    ul.appendChild(createNav('Home'))\r\n    ul.appendChild(createNav('Products'))\r\n    ul.appendChild(createNav('About'))\r\n    ul.appendChild(createNav('Contact'))\r\n\r\n    name.className = 'logo d-flex justify-content-center align-items-center gap-2 text-decoration-none'\r\n    name.setAttribute('href', '#Home')\r\n    name.innerHTML = `\r\n                <i class=\"fa-solid fa-stroopwafel\"></i> \r\n                <h2>ROTI</h2>\r\n            `\r\n\r\n    container.appendChild(name)\r\n    container.appendChild(ul)\r\n\r\n    nav.appendChild(container)\r\n\r\n    return nav\r\n}\r\n\r\nconst createNav = navlink => {\r\n    const li = document.createElement('li');\r\n    const a = document.createElement('a');\r\n\r\n    li.className = 'nav-item'\r\n\r\n    a.className = 'nav-link'\r\n    a.setAttribute('href', `#${navlink}`)\r\n    a.textContent = navlink\r\n\r\n    li.appendChild(a)\r\n\r\n    return li\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/navigation.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/navigation.js"));
/******/ }
]);