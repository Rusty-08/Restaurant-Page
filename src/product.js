import item1 from './img/Laccha.png';
import item2 from './img/Makki.png';
import item3 from './img/product-1.png';
import item4 from './img/Tandoori.png';
import item5 from './img/Alo.png';
import item6 from './img/Roghni.png';
import item7 from './img/tea-1.png';
import item8 from './img/tea-2.png';
import item9 from './img/tea-6.png';
import item10 from './img/tea-3.png';
import item11 from './img/tea-4.png';
import item12 from './img/tea-5.png';

const addProductsHeader = () => {
    const title = document.createElement('div');
    const header = document.createElement('h1');
    const desc = document.createElement('p');

    title.className = 'products-header d-flex align-items-center text-center flex-column h-auto mt-5'
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

    item.className = 'product-card card p-3 shadow-sm'

    image.setAttribute('alt', 'picture')
    image.src = pic

    name.className = 'food-name'
    name.textContent = title
    desc.className = 'food-desc text-center'
    desc.textContent = description

    buyButton.className = 'buy-btn btn'
    buyButton.innerHTML = '<i class="fa-solid fa-cart-plus"></i>'

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
    productBody.className = 'product-body mt-4 mb-5 d-flex justify-content-center align-items-center'
    productBody.appendChild(createProductCard(
        item1,
        'Laccha Paratha',
        'Lachha Paratha are crispy flaky layered whole wheat flatbreads made with a simple unleavened dough consisting of whole wheat flour, salt and ghee or oil. ',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        item2,
        'Makki ki Roti',
        'A winter favorite, makki ki roti is made with maize flour or makki atta, also called cornmeal and is very distinctly an eponymous fit as well.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        item3,
        'Naan',
        'Naan roti is made from wheat flour and typically cooked in a tandoor oven, resulting in a soft and slightly leavened bread with a slightly charred exterior.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        item4,
        'Tandoori',
        'Tandoori roti is a type of Indian flatbread made from wheat flour and cooked in a tandoor oven, giving it a distinct smoky flavor and slightly charred texture.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        item5,
        'Aloo Paratha',
        'Aloo paratha is an Indian stuffed flatbread made from wheat flour and filled with a spiced potato mixture, typically pan-fried with ghee or oil until golden brown.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        item6,
        'Roghni Naan',
        'Roghni naan is made from wheat flour, enriched with yogurt and ghee, and cooked in a tandoor oven, resulting in a soft, buttery, and slightly crispy bread.',
        '65.00'
    ))

    productBody.appendChild(createProductCard(
        item7,
        'Lemon Ginger Tea',
        'Lemon ginger tea is a soothing beverage made by steeping fresh ginger and lemon in hot water, known for its refreshing and comforting qualities.',
        '30.00'
    ))

    productBody.appendChild(createProductCard(
        item8,
        'Lemon Tea',
        'Lemon tea is a refreshing beverage made by infusing hot water with the bright, zesty flavor of fresh lemon, offering a tangy and invigorating drink.',
        '30.00'
    ))

    productBody.appendChild(createProductCard(
        item9,
        'Coffee',
        'Hot coffee is a beloved and energizing beverage prepared by brewing roasted coffee beans with hot water, offering a rich and aromatic pick-me-up.',
        '15.00'
    ))

    productBody.appendChild(createProductCard(
        item10,
        'Lemonade Iced Tea',
        'Lemonade iced tea is a delightful and thirst-quenching drink made by combining lemonade and chilled tea, creating a sweet-tart and refreshing fusion.',
        '45.00'
    ))

    productBody.appendChild(createProductCard(
        item11,
        'Milk Tea with Peanut',
        'Milk tea with peanut butter is a unique and creamy beverage that combines the richness of milk tea with the nutty and savory notes of peanut butter, offering a comforting and indulgent treat.',
        '45.00'
    ))

    productBody.appendChild(createProductCard(
        item12,
        'Iced Tea',
        'Iced tea is a refreshing cold beverage made by chilling brewed tea, typically served with ice cubes and optional sweeteners or citrus, providing a cool and revitalizing drink.',
        '25.00'
    ))

    product.appendChild(productBody)

    return product
}