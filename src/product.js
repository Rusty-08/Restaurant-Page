import item1 from './img/product-1.png';
import item2 from './img/product-2.png';
import item3 from './img/product-3.png';

const addProductsHeader = () => {
    const title = document.createElement('div');
    const header = document.createElement('h1');
    const desc = document.createElement('p');

    title.className = 'products-header d-flex align-items-center text-center flex-column h-auto mt-4';
    header.textContent = 'HEALTHY ROTI & TEA'
    desc.innerHTML = 'Come and try our deliciously balanced combination of Roti & Tea.'

    title.appendChild(header)
    title.appendChild(desc)

    return title
}

const createProductCard = (pic, title, description, itemPrice) => {
    const item = document.createElement('div')
    const cardBody = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('h3')
    const desc = document.createElement('p')
    const footer = document.createElement('div')
    const buyButton = document.createElement('button')
    const orderNumberDiv = document.createElement('div')
    const minusBtn = document.createElement('button')
    const orderNumber = document.createElement('p')
    const plusBtn = document.createElement('button')
    const price = document.createElement('p')

    item.className = 'product-card card p-3 shadow-lg'

    image.setAttribute('alt', 'picture')
    image.src = pic

    name.className = 'food-name fw-bold'
    name.textContent = title
    desc.className = 'text-secondary text-center fw-bold opacity-50'
    desc.textContent = description

    buyButton.className = 'buy-btn btn px-4 fw-bold'
    buyButton.innerHTML = 'Order <i class="fa-solid fa-plus"></i>'

    price.className = 'price m-0 shadow-lg d-flex justify-content-center align-items-center'
    price.textContent = `₱ ${itemPrice}`

    minusBtn.className = 'minus btn bg-transparent text-secondary'
    minusBtn.innerHTML = '<i class="fa-solid fa-minus"></i>'
    orderNumber.className = 'm-0'
    plusBtn.className = 'plus btn bg-transparent text-secondary'
    plusBtn.innerHTML = '<i class="fa-solid fa-plus"></i>'

    orderNumberDiv.className = 'order-number d-flex justify-content-between align-items-center'
    orderNumberDiv.appendChild(minusBtn)
    orderNumberDiv.appendChild(orderNumber)
    orderNumberDiv.appendChild(plusBtn)

    footer.className = 'w-100 d-flex justify-content-between align-items-center'
    footer.appendChild(orderNumberDiv)
    footer.appendChild(buyButton)

    cardBody.className = 'd-flex justify-content-center align-items-center flex-column'
    cardBody.appendChild(image)
    cardBody.appendChild(name)
    cardBody.appendChild(desc)
    cardBody.appendChild(footer)
    cardBody.appendChild(price)

    item.appendChild(cardBody)

    return item
}

export default function product() {
    const product = document.createElement('section')
    const productBody = document.createElement('div')

    product.setAttribute('id', 'Products')
    product.className = 'd-flex w-100 min-vh-100 justify-content-center align-items-center flex-column'

    product.appendChild(addProductsHeader())

    // * Adding item to the menu
    productBody.className = 'product-body my-4 d-flex justify-content-center align-items-center'
    productBody.appendChild(createProductCard(
        item1,
        'Plain',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        item2,
        'Plain',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        item3,
        'Plain',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        '65.00'
    ))

    product.appendChild(productBody)

    return product
}