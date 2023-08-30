import homeImage from './img/restaurant-bg.png';
import productSamples from './img/poop.png';

const addTitle = () => {
    const container = document.createElement('div')
    const title = document.createElement('h1')
    const subTitle = document.createElement('span')

    container.className = 'home-title text-center'
    title.textContent = 'Rottea'
    subTitle.textContent = 'The famous street food of Malaysia and Singapore'

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

export default function home() {
    const home = document.createElement('section')
    const homeDesc = document.createElement('div')
    const homeProduct = document.createElement('div')
    const homePicture = document.createElement('img')
    const bestProducts = document.createElement('img')

    home.setAttribute('id', 'Home')
    homeDesc.className = 'homeDesc d-flex justify-content-center align-items-center flex-column gap-5'
    home.className = 'd-flex w-100 h-100 justify-content-evenly align-items-center'

    homeDesc.appendChild(addTitle())
    homeDesc.appendChild(addButtons())
    homeDesc.appendChild(addAccounts())

    homePicture.setAttribute('alt', 'picture')
    homePicture.className = 'home-image'
    homePicture.src = homeImage;

    bestProducts.setAttribute('alt', 'picture')
    bestProducts.className = 'home-product'
    bestProducts.src = productSamples;

    homeProduct.className = 'image-container d-flex justify-content-center align-items-center'
    homeProduct.appendChild(homePicture)
    homeProduct.appendChild(bestProducts)

    home.appendChild(homeDesc)
    home.appendChild(homeProduct)

    return home
}