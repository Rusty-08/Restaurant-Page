import productSample1 from './img/home-pic-1.jpg';
import productSample2 from './img/home-pic-3.jpg';
import productSample3 from './img/home-pic-2.jpg';

const addTitle = () => {
    const container = document.createElement('div')
    const title = document.createElement('h1')
    const subTitle = document.createElement('span')

    container.className = 'home-title text-center'
    title.textContent = 'Roti Hub'
    subTitle.textContent = 'Griddled, unleavened bread in Indian cuisine.'

    container.appendChild(title)
    container.appendChild(subTitle)

    return container
}

const addButtons = () => {
    const container = document.createElement('div')
    const productLink = document.createElement('a')
    const orderLink = document.createElement('a')

    container.className = 'home-buttons d-flex gap-2 mt-3'
    productLink.className = 'product-btn'
    productLink.textContent = 'Our products'
    productLink.setAttribute('href', '#Products')

    orderLink.textContent = 'Order now!'

    container.appendChild(productLink)
    container.appendChild(orderLink)

    return container
}

const addAccounts = () => {
    const container = document.createElement('div')
    const facebook = document.createElement('i')
    const instagram = document.createElement('i')
    const tiktok = document.createElement('i')

    container.className = 'home-accounts d-flex gap-4'
    facebook.className = 'fa-brands fa-facebook fs-5'
    instagram.className = 'fa-brands fa-square-instagram fs-5'
    tiktok.className = 'fa-brands fa-tiktok fs-5'

    container.appendChild(facebook)
    container.appendChild(instagram)
    container.appendChild(tiktok)

    return container
}

// * Add footer to each section

export function addFooter() {
    const footer = document.createElement('div')
    const project = document.createElement('p')
    const wrapper = document.createElement('div')
    const year = document.createElement('p')
    const owner = document.createElement('a')

    project.textContent = 'The Odin Project - Rusty Gunao'
    year.innerHTML = new Date().getFullYear() + ' <i class="fa-regular fa-copyright"></i>'
    owner.setAttribute('href', 'https://github.com/Rusty-08/Restaurant-Page')
    owner.setAttribute('target', '__blank')
    owner.innerHTML = 'Rusty-08 <i class="fa-brands fa-github"></i>'

    footer.className = 'footer shadow-lg w-100 px-5 d-flex justify-content-between align-items-center'
    footer.appendChild(owner)
    footer.appendChild(project)
    footer.appendChild(year)

    return footer
}

export default function home() {
    const home = document.createElement('section')
    const homeDesc = document.createElement('div')
    const homeProduct = document.createElement('div')
    const pics = document.createElement('div')

    home.setAttribute('id', 'Home')
    homeDesc.className = 'homeDesc d-flex justify-content-center align-items-center flex-column gap-5'
    home.className = 'd-flex w-100 h-100 justify-content-evenly align-items-center'

    homeDesc.appendChild(addTitle())
    homeDesc.appendChild(addButtons())
    homeDesc.appendChild(addAccounts())

    pics.className = 'd-flex flex-column gap-2'
    pics.appendChild(createImage('home-product-2', productSample2))
    pics.appendChild(createImage('home-product-3', productSample3))

    homeProduct.className = 'image-container d-flex justify-content-center align-items-center gap-2 shadow-lg'
    homeProduct.appendChild(pics)
    homeProduct.appendChild(createImage('home-product-1', productSample1))

    home.appendChild(homeDesc)
    home.appendChild(homeProduct)

    return home
}

const createImage = (className, image) => {
    const product = document.createElement('img')

    product.setAttribute('alt', 'picture')
    product.className = className
    product.src = image;

    return product
}