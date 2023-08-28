export default function contact() {
    const contact = document.createElement('section');

    contact.setAttribute('id', 'Contact')
    contact.className = 'd-flex w-100 h-100 justify-content-center align-items-center'
    contact.textContent = 'CONTACT'

    return contact
}