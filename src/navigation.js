import logo from './img/restaurant-logo.png';

export function setActiveLink() {
    const project = document.querySelector('.nav-item:nth-child(2) .nav-link');
    const navlink = document.querySelectorAll(['.nav-link', '.product-btn'])
    const sections = document.querySelectorAll(['#Home', '#About', '#Product', '#Contact'])

    navlink.forEach(link => {
        link.addEventListener('click', () => {
            navlink.forEach(link => link.classList.remove('active'))
            sections.forEach(section => section.classList.add('d-none'))

            const linkHref = link.getAttribute('href')
            const activeLink = linkHref.toString().split('').splice(1, linkHref.length - 1).join('')

            document.getElementById(`${activeLink}`)
                .classList.remove('d-none')

            link.classList.add('active')

            const projectBtn = [...navlink].pop().getAttribute('href')

            if (linkHref == projectBtn) {
                project.classList.add('active')
            }
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