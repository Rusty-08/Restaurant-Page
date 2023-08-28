import './style.css'
import 'bootstrap/dist/css/bootstrap.css';

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

// * Display active page when navlink is clicked

const displayActivePage = () => {

}

// * Set Home section as active page onload

window.onload = () => {
    const links = document.querySelector('.nav-item:first-child .nav-link')
    links.classList.add('active')
}