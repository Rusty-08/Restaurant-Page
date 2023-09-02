import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import navigation from './navigation';
import { setActiveLink } from './navigation';

import home from './home';
import product from './product';
import about from './about';
import contact from './contact';

function App() {
    const app = document.createElement('main')

    app.setAttribute('id', 'main-body')

    app.appendChild(navigation())
    app.appendChild(home())
    app.appendChild(product())
    app.appendChild(about())
    app.appendChild(contact())

    return app
}

document.body.appendChild(App())

// * Set active status to navlinks when clicked

setActiveLink()

// * Add order number onclick fucntionality

function orderNumber() {
    const orderNumberElement = document.querySelector('.order-number p')
    const minus = document.querySelector('.minus')
    const plus = document.querySelector('.plus')

    let number = 1

    minus.addEventListener('click', () => {
        if (number > 0) {
            number--
        }
        orderNumberElement.textContent = number
    })

    plus.addEventListener('click', () => {
        number++
        orderNumberElement.textContent = number
    })

    orderNumberElement.textContent = number
}

orderNumber()


// * Set Home section as active page onload

window.onload = () => {
    const links = document.querySelector('.nav-item:first-child .nav-link')
    const sections = document.querySelectorAll(['#Home', '#About', '#Products', '#Contact'])

    sections.forEach(section => section.classList.add('d-none'))
    document.getElementById('Products')
        .classList.remove('d-none')

    links.classList.add('active')
}