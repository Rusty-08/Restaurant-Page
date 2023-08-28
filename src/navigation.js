import logo from './img/restaurant-logo.png';

export function setActiveLink() {
    const navlink = document.querySelectorAll('.nav-link')

    navlink.forEach(link => {
        link.addEventListener('click', () => {
            navlink.forEach(link => link.classList.remove('active'))

            link.classList.add('active')
        })
    })
}

export default function navigation() {
    const container = document.createElement('div');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const headerLogo = document.createElement('img');

    container.className = 'container-fluid position-relative d-flex justify-content-center';
    nav.className = 'navbar fixed-top px-4'
    ul.className = 'nav gap-4'

    ul.appendChild(createNav('Home'))
    ul.appendChild(createNav('Product'))
    ul.appendChild(createNav('About'))
    ul.appendChild(createNav('Contact'))

    headerLogo.setAttribute('alt', 'logo')
    headerLogo.className = 'logo'
    headerLogo.src = logo;

    container.appendChild(headerLogo)
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