"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });

const createForm = () => {
    const contactForm = document.createElement('div');
    const form = document.createElement('form')
    const header = document.createElement('h5')
    const desc = document.createElement('p')
    const name = document.createElement('div')
    const email = document.createElement('div')
    const message = document.createElement('div')
    const submit = document.createElement('button')

    header.textContent = 'Feedback'
    desc.textContent = 'Share your thoughts with us!'

    name.innerHTML = `
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" id="name">
            `
    email.innerHTML = `
                <label for="email" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" id="email">
            `
    message.innerHTML = `
                <label for="text-area" class="form-label">Message</label>
                <textarea class="form-control" id="text-area" name="message" rows="3" ></textarea>
            `

    submit.className = 'btn'
    submit.setAttribute('type', 'submit')
    submit.textContent = 'Submit'

    form.className = 'form'
    form.id = 'myForm'
    form.setAttribute('action', 'https://formspree.io/f/mleyryar')
    form.setAttribute('method', 'POST')
    form.appendChild(header)
    form.appendChild(desc)
    form.appendChild(name)
    form.appendChild(email)
    form.appendChild(message)
    form.appendChild(submit)

    contactForm.className = 'contact-form'
    contactForm.appendChild(form)

    return contactForm
}

function contact() {
    const contact = document.createElement('section')
    const container = document.createElement('div')
    const map = document.createElement('div')
    const contactDetail = document.createElement('div')
    const email = document.createElement('p')
    const phone = document.createElement('p')

    contact.setAttribute('id', 'Contact')
    contact.className = 'd-flex w-100 min-vh-100 justify-content-center align-items-center'

    map.className = 'map shadow-sm d-flex position-relative'
    map.innerHTML = `<iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.5513960193636!2d123.87497475030797!3d12.658509335424956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0d6affb990a2b%3A0x7b28bb102716fe85!2sSabang%20Park%20and%20Beach%20Resort%2C%20Bulan%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1693980496635!5m2!1sen!2sph" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>`

    email.innerHTML = 'Email <br><span><a href="mailto:gunaorusty@gmail.com">gunaorusty@gmail.com</a></span>'
    phone.innerHTML = 'Phone <br><span>(+63) 995 201 6228</span>'

    contactDetail.className = 'contact-detail position-absolute d-flex gap-5 align-items-center justify-content-center px-5 py-4 shadow-sm'

    contactDetail.appendChild(email)
    contactDetail.appendChild(phone)

    map.appendChild(contactDetail)

    container.className = 'contact-wrapper d-flex w-100 justify-content-evenly align-items-center'
    container.appendChild(map)
    container.appendChild(createForm())

    contact.appendChild(container)

    return contact
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKVxyXG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcblxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0ZlZWRiYWNrJ1xyXG4gICAgZGVzYy50ZXh0Q29udGVudCA9ICdTaGFyZSB5b3VyIHRob3VnaHRzIHdpdGggdXMhJ1xyXG5cclxuICAgIG5hbWUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIm5hbWVcIj5cclxuICAgICAgICAgICAgYFxyXG4gICAgZW1haWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIGBcclxuICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRleHQtYXJlYVwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ0ZXh0LWFyZWFcIiBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCIzXCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIGBcclxuXHJcbiAgICBzdWJtaXQuY2xhc3NOYW1lID0gJ2J0bidcclxuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0JylcclxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXHJcblxyXG4gICAgZm9ybS5jbGFzc05hbWUgPSAnZm9ybSdcclxuICAgIGZvcm0uaWQgPSAnbXlGb3JtJ1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdodHRwczovL2Zvcm1zcHJlZS5pby9mL21sZXlyeWFyJylcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnUE9TVCcpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzYylcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZSlcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZW1haWwpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKG1lc3NhZ2UpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcclxuXHJcbiAgICBjb250YWN0Rm9ybS5jbGFzc05hbWUgPSAnY29udGFjdC1mb3JtJ1xyXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybSlcclxuXHJcbiAgICByZXR1cm4gY29udGFjdEZvcm1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgY29udGFjdERldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnQ29udGFjdCcpXHJcbiAgICBjb250YWN0LmNsYXNzTmFtZSA9ICdkLWZsZXggdy0xMDAgbWluLXZoLTEwMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlcidcclxuXHJcbiAgICBtYXAuY2xhc3NOYW1lID0gJ21hcCBzaGFkb3ctc20gZC1mbGV4IHBvc2l0aW9uLXJlbGF0aXZlJ1xyXG4gICAgbWFwLmlubmVySFRNTCA9IGA8aWZyYW1lIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQ1MjQuNTUxMzk2MDE5MzYzNiEyZDEyMy44NzQ5NzQ3NTAzMDc5NyEzZDEyLjY1ODUwOTMzNTQyNDk1NiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MzNhMGQ2YWZmYjk5MGEyYiUzQTB4N2IyOGJiMTAyNzE2ZmU4NSEyc1NhYmFuZyUyMFBhcmslMjBhbmQlMjBCZWFjaCUyMFJlc29ydCUyQyUyMEJ1bGFuJTJDJTIwU29yc29nb24hNWUwITNtMiExc2VuITJzcGghNHYxNjkzOTgwNDk2NjM1ITVtMiExc2VuITJzcGhcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPVwiXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2lmcmFtZT5gXHJcblxyXG4gICAgZW1haWwuaW5uZXJIVE1MID0gJ0VtYWlsIDxicj48c3Bhbj48YSBocmVmPVwibWFpbHRvOmd1bmFvcnVzdHlAZ21haWwuY29tXCI+Z3VuYW9ydXN0eUBnbWFpbC5jb208L2E+PC9zcGFuPidcclxuICAgIHBob25lLmlubmVySFRNTCA9ICdQaG9uZSA8YnI+PHNwYW4+KCs2MykgOTk1IDIwMSA2MjI4PC9zcGFuPidcclxuXHJcbiAgICBjb250YWN0RGV0YWlsLmNsYXNzTmFtZSA9ICdjb250YWN0LWRldGFpbCBwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggZ2FwLTUgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtNSBweS00IHNoYWRvdy1zbSdcclxuXHJcbiAgICBjb250YWN0RGV0YWlsLmFwcGVuZENoaWxkKGVtYWlsKVxyXG4gICAgY29udGFjdERldGFpbC5hcHBlbmRDaGlsZChwaG9uZSlcclxuXHJcbiAgICBtYXAuYXBwZW5kQ2hpbGQoY29udGFjdERldGFpbClcclxuXHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhY3Qtd3JhcHBlciBkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWV2ZW5seSBhbGlnbi1pdGVtcy1jZW50ZXInXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKVxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0oKSlcclxuXHJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuXHJcbiAgICByZXR1cm4gY29udGFjdFxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9