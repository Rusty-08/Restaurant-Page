export function setActiveLink() {
    const project = document.querySelector('.nav-item:nth-child(2) .nav-link');
    const home = document.querySelector('.nav-item:nth-child(1) .nav-link');
    const navlink = document.querySelectorAll(['.nav-link', '.logo', '.product-btn'])
    const sections = document.querySelectorAll(['#Home', '#About', '#Products', '#Contact'])
    const hamburger = document.querySelector('.hamburger')
    const nav = document.querySelector('.nav')

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

            nav.classList.remove('display')
            hamburger.classList.remove('active')

            sessionStorage.setItem('activePage', activeLink)
        })
    })
}

export default function navigation() {
    const container = document.createElement('div');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const name = document.createElement('a');
    const hamburger = document.createElement('button')

    hamburger.className = 'hamburger btn position-absolute'
    hamburger.innerHTML = `<i class="fa-solid fa-burger"></i>`

    container.className = 'container-fluid position-relative d-flex justify-content-center';
    nav.className = 'navbar fixed-top px-2'
    ul.className = 'nav gap-4 d-lg-flex flex-lg-row flex-column align-items-center justify-content-center'

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
    container.appendChild(hamburger)

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