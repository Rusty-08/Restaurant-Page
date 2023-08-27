import logo from './img/restaurant-logo.png';

export function createNav(navlink) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    li.className = 'nav-item'

    a.className = 'nav-link'
    a.setAttribute('href', `#${navlink}`)
    a.textContent = navlink

    li.appendChild(a)

    return li
}

export default function navigation() {
    const container = document.createElement('div');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    container.className = 'container-fluid position-relative d-flex justify-content-center';
    nav.className = 'navbar fixed-top px-4'
    ul.className = 'nav gap-3'

    ul.appendChild(createNav('Home'))
    ul.appendChild(createNav('Products'))
    ul.appendChild(createNav('About'))
    ul.appendChild(createNav('Contact'))

    const headerLogo = document.createElement('img');
    headerLogo.setAttribute('alt', 'logo')
    headerLogo.className = 'logo'
    headerLogo.src = logo;

    container.appendChild(headerLogo)
    container.appendChild(ul)

    nav.appendChild(container)

    return nav
}

// export function displayActiveLink() {
//     const navLink = document.querySelectorAll('.nav-link')
//     navLink.forEach(link => {
//         link.addEventListener('click', e => {
//             navLink.forEach(link => link.classList.remove('active'));

//             e.target.classList.add('active')
//         })
//     })
// }