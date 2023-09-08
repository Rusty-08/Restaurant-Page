"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["navigation"],{

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navigation),
/* harmony export */   setActiveLink: () => (/* binding */ setActiveLink)
/* harmony export */ });
function setActiveLink() {
    const project = document.querySelector('.nav-item:nth-child(2) .nav-link');
    const home = document.querySelector('.nav-item:nth-child(1) .nav-link');
    const navlink = document.querySelectorAll(['.nav-link', '.logo', '.product-btn'])
    const sections = document.querySelectorAll(['#Home', '#About', '#Products', '#Contact'])

    navlink.forEach(link => {
        link.addEventListener('click', () => {
            navlink.forEach(link => link.classList.remove('active'))
            sections.forEach(section => section.classList.add('d-none'))

            const linkHref = link.getAttribute('href')
            const activeLink = linkHref.toString().split('').splice(1, linkHref.length - 1).join('')

            document.getElementById(`${activeLink}`)
                .classList.remove('d-none')

            link.classList.add('active')

            if (linkHref == '#Products') {
                project.classList.add('active')
            }

            if (linkHref == '#Home') {
                home.classList.add('active')
            }

            sessionStorage.setItem('activePage', activeLink)
        })
    })
}

function navigation() {
    const container = document.createElement('div');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const name = document.createElement('a');

    container.className = 'container-fluid position-relative d-flex justify-content-center';
    nav.className = 'navbar fixed-top px-4'
    ul.className = 'nav gap-4'

    ul.appendChild(createNav('Home'))
    ul.appendChild(createNav('Products'))
    ul.appendChild(createNav('About'))
    ul.appendChild(createNav('Contact'))

    name.className = 'logo d-flex justify-content-center align-items-center gap-2 text-decoration-none'
    name.setAttribute('href', '#Home')
    name.innerHTML = `
                <i class="fa-solid fa-stroopwafel"></i> 
                <h2>ROTI</h2>
            `

    container.appendChild(name)
    container.appendChild(ul)

    nav.appendChild(container)

    return nav
}

const createNav = navlink => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.className = 'nav-item'

    a.className = 'nav-link'
    a.setAttribute('href', `#${navlink}`)
    a.textContent = navlink

    li.appendChild(a)

    return li
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/navigation.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZpZ2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVMaW5rKCkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaXRlbTpudGgtY2hpbGQoMikgLm5hdi1saW5rJyk7XHJcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1pdGVtOm50aC1jaGlsZCgxKSAubmF2LWxpbmsnKTtcclxuICAgIGNvbnN0IG5hdmxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFsnLm5hdi1saW5rJywgJy5sb2dvJywgJy5wcm9kdWN0LWJ0biddKVxyXG4gICAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFsnI0hvbWUnLCAnI0Fib3V0JywgJyNQcm9kdWN0cycsICcjQ29udGFjdCddKVxyXG5cclxuICAgIG5hdmxpbmsuZm9yRWFjaChsaW5rID0+IHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBuYXZsaW5rLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKVxyXG4gICAgICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4gc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtIcmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxyXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVMaW5rID0gbGlua0hyZWYudG9TdHJpbmcoKS5zcGxpdCgnJykuc3BsaWNlKDEsIGxpbmtIcmVmLmxlbmd0aCAtIDEpLmpvaW4oJycpXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHthY3RpdmVMaW5rfWApXHJcbiAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJylcclxuXHJcbiAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuXHJcbiAgICAgICAgICAgIGlmIChsaW5rSHJlZiA9PSAnI1Byb2R1Y3RzJykge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobGlua0hyZWYgPT0gJyNIb21lJykge1xyXG4gICAgICAgICAgICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVQYWdlJywgYWN0aXZlTGluaylcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2aWdhdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFpbmVyLWZsdWlkIHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJztcclxuICAgIG5hdi5jbGFzc05hbWUgPSAnbmF2YmFyIGZpeGVkLXRvcCBweC00J1xyXG4gICAgdWwuY2xhc3NOYW1lID0gJ25hdiBnYXAtNCdcclxuXHJcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVOYXYoJ0hvbWUnKSlcclxuICAgIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdignUHJvZHVjdHMnKSlcclxuICAgIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdignQWJvdXQnKSlcclxuICAgIHVsLmFwcGVuZENoaWxkKGNyZWF0ZU5hdignQ29udGFjdCcpKVxyXG5cclxuICAgIG5hbWUuY2xhc3NOYW1lID0gJ2xvZ28gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGdhcC0yIHRleHQtZGVjb3JhdGlvbi1ub25lJ1xyXG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnI0hvbWUnKVxyXG4gICAgbmFtZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLXN0cm9vcHdhZmVsXCI+PC9pPiBcclxuICAgICAgICAgICAgICAgIDxoMj5ST1RJPC9oMj5cclxuICAgICAgICAgICAgYFxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKVxyXG5cclxuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcblxyXG4gICAgcmV0dXJuIG5hdlxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVOYXYgPSBuYXZsaW5rID0+IHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcblxyXG4gICAgbGkuY2xhc3NOYW1lID0gJ25hdi1pdGVtJ1xyXG5cclxuICAgIGEuY2xhc3NOYW1lID0gJ25hdi1saW5rJ1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgIyR7bmF2bGlua31gKVxyXG4gICAgYS50ZXh0Q29udGVudCA9IG5hdmxpbmtcclxuXHJcbiAgICBsaS5hcHBlbmRDaGlsZChhKVxyXG5cclxuICAgIHJldHVybiBsaVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9