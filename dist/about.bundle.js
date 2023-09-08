"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["about"],{

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _img_about_header_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/about-header-bg.jpg */ "./src/img/about-header-bg.jpg");
/* harmony import */ var _img_about_body_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/about-body-bg.jpg */ "./src/img/about-body-bg.jpg");



const createHeader = () => {
    const container = document.createElement('div')
    const welcome = document.createElement('p')
    const title = document.createElement('h1')
    const subTitle = document.createElement('span')

    container.className = 'about-title text-center mt-5'
    welcome.textContent = 'WELCOME'
    title.textContent = 'The Roti Hub'
    subTitle.textContent = "At Roti Hub, we're passionate about serving you the finest and healthiest Roti and Tea combinations. Our story is one of culinary exploration and a deep-rooted commitment to offering you a delightful dining experience."

    container.appendChild(welcome)
    container.appendChild(title)
    container.appendChild(subTitle)

    return container
}

const createSection = (headerContent, bodyContent) => {
    const container = document.createElement('div')
    const header = document.createElement('h3')
    const body = document.createElement('p')

    header.textContent = headerContent
    body.textContent = bodyContent

    container.className = 'about-content shadow-lg d-flex flex-column align-items-flex-start p-4'
    container.appendChild(header)
    container.appendChild(body)

    return container
}

const createBodyCard = (iconClass, headerContent, bodyContent) => {
    const container = document.createElement('div')
    const iconBox = document.createElement('div')
    const icon = document.createElement('i')
    const header = document.createElement('h3')
    const body = document.createElement('p')
    const link = document.createElement('a')

    icon.className = iconClass
    iconBox.className = 'icon-box d-flex justify-content-center align-items-center'
    iconBox.appendChild(icon)

    header.textContent = headerContent
    body.textContent = bodyContent
    link.setAttribute('href', '#')
    link.innerHTML = 'Learn More <i class="fa-solid fa-arrow-right"></i>'

    container.className = 'about-body-content w-100 d-flex flex-column align-items-flex-start my-3'
    container.appendChild(iconBox)
    container.appendChild(header)
    container.appendChild(body)
    container.appendChild(link)

    return container
}

const createTestimonial = () => {
    const wrapper = document.createElement('div')
    const bodyText = document.createElement('p');
    const author = document.createElement('p');
    const occupation = document.createElement('span');

    bodyText.textContent = `"I can't express how much I love Roti Hub! The moment I walked in, I was greeted by the warm aroma of freshly baked Roti. The taste? Absolutely divine! The Roti is soft, and the tea is the perfect pairing. It's become my go-to spot for a quick and delicious meal. The staff is friendly and welcoming, making every visit a delightful experience. I can't recommend Roti Hub enough!"`
    author.textContent = 'CARDO DALISAY'
    occupation.textContent = 'Professional Artists'

    wrapper.appendChild(bodyText)
    wrapper.appendChild(author)
    wrapper.appendChild(occupation)
    wrapper.className = 'testimony card d-flex justify-content-center align-items-center flex-column'

    return wrapper
}

function about() {
    const about = document.createElement('section');
    const AboutJourney = document.createElement('div')
    const headerImage = document.createElement('img')
    const AboutBody = document.createElement('div')
    const wrapper = document.createElement('div')
    const image = document.createElement('div')
    const bodyImage = document.createElement('img')
    const testimonySection = document.createElement('div')

    about.setAttribute('id', 'About')
    about.className = 'd-flex w-100 min-vh-100 position-relative justify-content-flex-start align-items-center flex-column'

    headerImage.className = 'about-header-pic position-absolute shadow-lg'
    headerImage.src = _img_about_header_bg_jpg__WEBPACK_IMPORTED_MODULE_0__

    AboutJourney.className = 'about-journey d-flex my-5 justify-content-center'

    AboutJourney.appendChild(createSection(
        'Our Journey',
        'Our journey began in the heart of the bustling city, where the aroma of freshly baked Roti wafted through the air. Inspired by the traditional recipes passed down through generations, we set out on a mission to bring these authentic flavors to your plate.'
    ))
    AboutJourney.appendChild(createSection(
        'The Roti Experience',
        "Our Roti is more than just a flatbread; it's a labor of love. We handcraft each Roti with precision and care, using only the finest ingredients. The result? A Roti that's soft, flavorful, and healthy – the perfect accompaniment to a cup of our aromatic tea."
    ))

    bodyImage.src = _img_about_body_bg_jpg__WEBPACK_IMPORTED_MODULE_1__
    image.className = 'about-body-pic shadow-lg'
    image.appendChild(bodyImage)

    AboutBody.className = 'about-body h-auto d-flex justify-content-center align-items-center py-5 pt-4'

    wrapper.className = 'about-wrapper d-flex justify-content-flex-start flex-column align-items-center'
    wrapper.appendChild(createBodyCard(
        'fa-solid fa-hand-fist icon',
        'Our Commitment',
        "At Roti Hub, we're committed to sustainability and responsible sourcing. We work closely with local farmers and suppliers to ensure that our ingredients are of the highest quality and sourced ethically."
    ))
    wrapper.appendChild(createBodyCard(
        'fa-solid fa-mug-hot icon',
        'The Tea Connection',
        "Tea, an integral part of our culture, is at the heart of our menu. We've curated a selection of teas from around the world to complement our Roti offerings. From soothing herbal infusions to robust black teas, there's a tea for every palate."
    ))
    wrapper.appendChild(createBodyCard(
        'fa-regular fa-handshake icon',
        'Join Us',
        "We invite you to join us on this culinary journey. Whether you're looking for a quick bite or a leisurely meal, Roti Hub is the place to savor the flavors of tradition and innovation."
    ))

    AboutBody.appendChild(image)
    AboutBody.appendChild(wrapper)

    testimonySection.className = 'testimony-section d-flex justify-content-center align-items-center my-5'
    testimonySection.appendChild(createTestimonial())

    about.appendChild(headerImage)
    about.appendChild(createHeader())
    about.appendChild(AboutJourney)
    about.appendChild(AboutBody)
    about.appendChild(testimonySection)

    return about
}

/***/ }),

/***/ "./src/img/about-body-bg.jpg":
/*!***********************************!*\
  !*** ./src/img/about-body-bg.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about-body-bg.jpg";

/***/ }),

/***/ "./src/img/about-header-bg.jpg":
/*!*************************************!*\
  !*** ./src/img/about-header-bg.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about-header-bg.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNKO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscURBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxvQkFBb0IsbURBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZWFkZXJQaWN0dXJlIGZyb20gJy4vaW1nL2Fib3V0LWhlYWRlci1iZy5qcGcnXHJcbmltcG9ydCBib2R5UGljdHVyZSBmcm9tICcuL2ltZy9hYm91dC1ib2R5LWJnLmpwZydcclxuXHJcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcblxyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdhYm91dC10aXRsZSB0ZXh0LWNlbnRlciBtdC01J1xyXG4gICAgd2VsY29tZS50ZXh0Q29udGVudCA9ICdXRUxDT01FJ1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIFJvdGkgSHViJ1xyXG4gICAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSBcIkF0IFJvdGkgSHViLCB3ZSdyZSBwYXNzaW9uYXRlIGFib3V0IHNlcnZpbmcgeW91IHRoZSBmaW5lc3QgYW5kIGhlYWx0aGllc3QgUm90aSBhbmQgVGVhIGNvbWJpbmF0aW9ucy4gT3VyIHN0b3J5IGlzIG9uZSBvZiBjdWxpbmFyeSBleHBsb3JhdGlvbiBhbmQgYSBkZWVwLXJvb3RlZCBjb21taXRtZW50IHRvIG9mZmVyaW5nIHlvdSBhIGRlbGlnaHRmdWwgZGluaW5nIGV4cGVyaWVuY2UuXCJcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZSlcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJUaXRsZSlcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAoaGVhZGVyQ29udGVudCwgYm9keUNvbnRlbnQpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyQ29udGVudFxyXG4gICAgYm9keS50ZXh0Q29udGVudCA9IGJvZHlDb250ZW50XHJcblxyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdhYm91dC1jb250ZW50IHNoYWRvdy1sZyBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtZmxleC1zdGFydCBwLTQnXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVCb2R5Q2FyZCA9IChpY29uQ2xhc3MsIGhlYWRlckNvbnRlbnQsIGJvZHlDb250ZW50KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaWNvbkJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcblxyXG4gICAgaWNvbi5jbGFzc05hbWUgPSBpY29uQ2xhc3NcclxuICAgIGljb25Cb3guY2xhc3NOYW1lID0gJ2ljb24tYm94IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcclxuICAgIGljb25Cb3guYXBwZW5kQ2hpbGQoaWNvbilcclxuXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBoZWFkZXJDb250ZW50XHJcbiAgICBib2R5LnRleHRDb250ZW50ID0gYm9keUNvbnRlbnRcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKVxyXG4gICAgbGluay5pbm5lckhUTUwgPSAnTGVhcm4gTW9yZSA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFycm93LXJpZ2h0XCI+PC9pPidcclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2Fib3V0LWJvZHktY29udGVudCB3LTEwMCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtZmxleC1zdGFydCBteS0zJ1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Cb3gpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGluaylcclxuXHJcbiAgICByZXR1cm4gY29udGFpbmVyXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVRlc3RpbW9uaWFsID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBib2R5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IG9jY3VwYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgYm9keVRleHQudGV4dENvbnRlbnQgPSBgXCJJIGNhbid0IGV4cHJlc3MgaG93IG11Y2ggSSBsb3ZlIFJvdGkgSHViISBUaGUgbW9tZW50IEkgd2Fsa2VkIGluLCBJIHdhcyBncmVldGVkIGJ5IHRoZSB3YXJtIGFyb21hIG9mIGZyZXNobHkgYmFrZWQgUm90aS4gVGhlIHRhc3RlPyBBYnNvbHV0ZWx5IGRpdmluZSEgVGhlIFJvdGkgaXMgc29mdCwgYW5kIHRoZSB0ZWEgaXMgdGhlIHBlcmZlY3QgcGFpcmluZy4gSXQncyBiZWNvbWUgbXkgZ28tdG8gc3BvdCBmb3IgYSBxdWljayBhbmQgZGVsaWNpb3VzIG1lYWwuIFRoZSBzdGFmZiBpcyBmcmllbmRseSBhbmQgd2VsY29taW5nLCBtYWtpbmcgZXZlcnkgdmlzaXQgYSBkZWxpZ2h0ZnVsIGV4cGVyaWVuY2UuIEkgY2FuJ3QgcmVjb21tZW5kIFJvdGkgSHViIGVub3VnaCFcImBcclxuICAgIGF1dGhvci50ZXh0Q29udGVudCA9ICdDQVJETyBEQUxJU0FZJ1xyXG4gICAgb2NjdXBhdGlvbi50ZXh0Q29udGVudCA9ICdQcm9mZXNzaW9uYWwgQXJ0aXN0cydcclxuXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGJvZHlUZXh0KVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhdXRob3IpXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG9jY3VwYXRpb24pXHJcbiAgICB3cmFwcGVyLmNsYXNzTmFtZSA9ICd0ZXN0aW1vbnkgY2FyZCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW4nXHJcblxyXG4gICAgcmV0dXJuIHdyYXBwZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnN0IEFib3V0Sm91cm5leSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBoZWFkZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBjb25zdCBBYm91dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBib2R5SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgdGVzdGltb255U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgYWJvdXQuc2V0QXR0cmlidXRlKCdpZCcsICdBYm91dCcpXHJcbiAgICBhYm91dC5jbGFzc05hbWUgPSAnZC1mbGV4IHctMTAwIG1pbi12aC0xMDAgcG9zaXRpb24tcmVsYXRpdmUganVzdGlmeS1jb250ZW50LWZsZXgtc3RhcnQgYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtY29sdW1uJ1xyXG5cclxuICAgIGhlYWRlckltYWdlLmNsYXNzTmFtZSA9ICdhYm91dC1oZWFkZXItcGljIHBvc2l0aW9uLWFic29sdXRlIHNoYWRvdy1sZydcclxuICAgIGhlYWRlckltYWdlLnNyYyA9IGhlYWRlclBpY3R1cmVcclxuXHJcbiAgICBBYm91dEpvdXJuZXkuY2xhc3NOYW1lID0gJ2Fib3V0LWpvdXJuZXkgZC1mbGV4IG15LTUganVzdGlmeS1jb250ZW50LWNlbnRlcidcclxuXHJcbiAgICBBYm91dEpvdXJuZXkuYXBwZW5kQ2hpbGQoY3JlYXRlU2VjdGlvbihcclxuICAgICAgICAnT3VyIEpvdXJuZXknLFxyXG4gICAgICAgICdPdXIgam91cm5leSBiZWdhbiBpbiB0aGUgaGVhcnQgb2YgdGhlIGJ1c3RsaW5nIGNpdHksIHdoZXJlIHRoZSBhcm9tYSBvZiBmcmVzaGx5IGJha2VkIFJvdGkgd2FmdGVkIHRocm91Z2ggdGhlIGFpci4gSW5zcGlyZWQgYnkgdGhlIHRyYWRpdGlvbmFsIHJlY2lwZXMgcGFzc2VkIGRvd24gdGhyb3VnaCBnZW5lcmF0aW9ucywgd2Ugc2V0IG91dCBvbiBhIG1pc3Npb24gdG8gYnJpbmcgdGhlc2UgYXV0aGVudGljIGZsYXZvcnMgdG8geW91ciBwbGF0ZS4nXHJcbiAgICApKVxyXG4gICAgQWJvdXRKb3VybmV5LmFwcGVuZENoaWxkKGNyZWF0ZVNlY3Rpb24oXHJcbiAgICAgICAgJ1RoZSBSb3RpIEV4cGVyaWVuY2UnLFxyXG4gICAgICAgIFwiT3VyIFJvdGkgaXMgbW9yZSB0aGFuIGp1c3QgYSBmbGF0YnJlYWQ7IGl0J3MgYSBsYWJvciBvZiBsb3ZlLiBXZSBoYW5kY3JhZnQgZWFjaCBSb3RpIHdpdGggcHJlY2lzaW9uIGFuZCBjYXJlLCB1c2luZyBvbmx5IHRoZSBmaW5lc3QgaW5ncmVkaWVudHMuIFRoZSByZXN1bHQ/IEEgUm90aSB0aGF0J3Mgc29mdCwgZmxhdm9yZnVsLCBhbmQgaGVhbHRoeSDigJMgdGhlIHBlcmZlY3QgYWNjb21wYW5pbWVudCB0byBhIGN1cCBvZiBvdXIgYXJvbWF0aWMgdGVhLlwiXHJcbiAgICApKVxyXG5cclxuICAgIGJvZHlJbWFnZS5zcmMgPSBib2R5UGljdHVyZVxyXG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gJ2Fib3V0LWJvZHktcGljIHNoYWRvdy1sZydcclxuICAgIGltYWdlLmFwcGVuZENoaWxkKGJvZHlJbWFnZSlcclxuXHJcbiAgICBBYm91dEJvZHkuY2xhc3NOYW1lID0gJ2Fib3V0LWJvZHkgaC1hdXRvIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBweS01IHB0LTQnXHJcblxyXG4gICAgd3JhcHBlci5jbGFzc05hbWUgPSAnYWJvdXQtd3JhcHBlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWZsZXgtc3RhcnQgZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyJ1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVCb2R5Q2FyZChcclxuICAgICAgICAnZmEtc29saWQgZmEtaGFuZC1maXN0IGljb24nLFxyXG4gICAgICAgICdPdXIgQ29tbWl0bWVudCcsXHJcbiAgICAgICAgXCJBdCBSb3RpIEh1Yiwgd2UncmUgY29tbWl0dGVkIHRvIHN1c3RhaW5hYmlsaXR5IGFuZCByZXNwb25zaWJsZSBzb3VyY2luZy4gV2Ugd29yayBjbG9zZWx5IHdpdGggbG9jYWwgZmFybWVycyBhbmQgc3VwcGxpZXJzIHRvIGVuc3VyZSB0aGF0IG91ciBpbmdyZWRpZW50cyBhcmUgb2YgdGhlIGhpZ2hlc3QgcXVhbGl0eSBhbmQgc291cmNlZCBldGhpY2FsbHkuXCJcclxuICAgICkpXHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUJvZHlDYXJkKFxyXG4gICAgICAgICdmYS1zb2xpZCBmYS1tdWctaG90IGljb24nLFxyXG4gICAgICAgICdUaGUgVGVhIENvbm5lY3Rpb24nLFxyXG4gICAgICAgIFwiVGVhLCBhbiBpbnRlZ3JhbCBwYXJ0IG9mIG91ciBjdWx0dXJlLCBpcyBhdCB0aGUgaGVhcnQgb2Ygb3VyIG1lbnUuIFdlJ3ZlIGN1cmF0ZWQgYSBzZWxlY3Rpb24gb2YgdGVhcyBmcm9tIGFyb3VuZCB0aGUgd29ybGQgdG8gY29tcGxlbWVudCBvdXIgUm90aSBvZmZlcmluZ3MuIEZyb20gc29vdGhpbmcgaGVyYmFsIGluZnVzaW9ucyB0byByb2J1c3QgYmxhY2sgdGVhcywgdGhlcmUncyBhIHRlYSBmb3IgZXZlcnkgcGFsYXRlLlwiXHJcbiAgICApKVxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVCb2R5Q2FyZChcclxuICAgICAgICAnZmEtcmVndWxhciBmYS1oYW5kc2hha2UgaWNvbicsXHJcbiAgICAgICAgJ0pvaW4gVXMnLFxyXG4gICAgICAgIFwiV2UgaW52aXRlIHlvdSB0byBqb2luIHVzIG9uIHRoaXMgY3VsaW5hcnkgam91cm5leS4gV2hldGhlciB5b3UncmUgbG9va2luZyBmb3IgYSBxdWljayBiaXRlIG9yIGEgbGVpc3VyZWx5IG1lYWwsIFJvdGkgSHViIGlzIHRoZSBwbGFjZSB0byBzYXZvciB0aGUgZmxhdm9ycyBvZiB0cmFkaXRpb24gYW5kIGlubm92YXRpb24uXCJcclxuICAgICkpXHJcblxyXG4gICAgQWJvdXRCb2R5LmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgQWJvdXRCb2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpXHJcblxyXG4gICAgdGVzdGltb255U2VjdGlvbi5jbGFzc05hbWUgPSAndGVzdGltb255LXNlY3Rpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIG15LTUnXHJcbiAgICB0ZXN0aW1vbnlTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRlc3RpbW9uaWFsKCkpXHJcblxyXG4gICAgYWJvdXQuYXBwZW5kQ2hpbGQoaGVhZGVySW1hZ2UpXHJcbiAgICBhYm91dC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKEFib3V0Sm91cm5leSlcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKEFib3V0Qm9keSlcclxuICAgIGFib3V0LmFwcGVuZENoaWxkKHRlc3RpbW9ueVNlY3Rpb24pXHJcblxyXG4gICAgcmV0dXJuIGFib3V0XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=