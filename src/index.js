import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import navigation from './navigation';
import { setActiveLink } from './navigation';

import home from './home';
import { addFooter } from './home';

import product from './product';
import about from './about';
import contact from './contact';

const App = () => {
    const app = document.createElement('main')

    app.setAttribute('id', 'main-body')

    app.appendChild(navigation())
    app.appendChild(home())
    app.appendChild(product())
    app.appendChild(about())
    app.appendChild(contact())
    app.appendChild(addFooter())

    return app
}

document.body.appendChild(App())

// * Set active status to navlinks when clicked

setActiveLink()

// * Add order number onclick fucntionality

const orderNumber = () => {
    const orderNumberElements = document.querySelectorAll('.order-number p')
    const minusButtons = document.querySelectorAll('.minus')
    const plusButtons = document.querySelectorAll('.plus')

    orderNumberElements.forEach(number => number.textContent = 1)

    const orderNumbers = new Array(orderNumberElements.length).fill(1)

    minusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (orderNumbers[index] > 0) {
                orderNumbers[index]--
            }
            orderNumberElements[index].textContent = orderNumbers[index]
        })
    })

    plusButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            orderNumbers[index]++
            orderNumberElements[index].textContent = orderNumbers[index]
        })
    })
}

orderNumber()

// * Reset inputted data in contact form after submission

const resetContactForm = () => {
    document.getElementById("myForm")
        .addEventListener("submit", () => {
            setTimeout(function () {
                document.getElementById("myForm").reset()
            }, 2000)
        })
}

resetContactForm()

// * hamburger onclick event

const colapseHamburger = () => {
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav')
    hamburger.addEventListener("click", () => {
        nav.classList.toggle('display')
        hamburger.classList.toggle('active')
    })
}

colapseHamburger()

// * Set Home section as active page onload

window.onload = () => {
    const navlinks = document.querySelectorAll('.nav-link')
    const home = document.querySelector('.nav-item:first-child .nav-link')
    const sections = document.querySelectorAll(['#Home', '#About', '#Products', '#Contact'])

    const activePage = sessionStorage.getItem('activePage');

    let activeLink = [...navlinks].find(link => link.textContent == activePage)

    if (activePage) {
        sections.forEach(section => section.classList.add('d-none'))
        document.getElementById(`${activePage}`)
            .classList.remove('d-none')

        activeLink.classList.add('active')
    } else {
        sections.forEach(section => section.classList.add('d-none'))
        document.getElementById('Home')
            .classList.remove('d-none')

        home.classList.add('active')
    }
}