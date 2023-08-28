export default function product() {
    const product = document.createElement('section');

    product.setAttribute('id', 'Product')
    product.className = 'd-flex w-100 h-100 justify-content-center align-items-center'
    product.textContent = 'PRODUCT'

    return product
}