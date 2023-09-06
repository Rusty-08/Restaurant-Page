
// const createForm = () => {
//     const
// }

export default function contact() {
    const contact = document.createElement('section')
    const container = document.createElement('div')
    const map = document.createElement('div')
    const contactDetail = document.createElement('div')
    const email = document.createElement('p')
    const phone = document.createElement('p')

    contact.setAttribute('id', 'Contact')
    contact.className = 'd-flex w-100 h-100 justify-content-center align-items-center'

    map.className = 'map shadow-sm d-flex position-relative'
    map.innerHTML = `<iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.5513960193636!2d123.87497475030797!3d12.658509335424956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0d6affb990a2b%3A0x7b28bb102716fe85!2sSabang%20Park%20and%20Beach%20Resort%2C%20Bulan%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1693980496635!5m2!1sen!2sph" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>`

    email.innerHTML = 'Email <br><span><a href="mailto:example@gmail.com">example@gmail.com</a></span>'
    phone.innerHTML = 'Phone <br><span>(+63) 012 345 6789</span>'

    contactDetail.className = 'contact-detail position-absolute d-flex gap-5 align-items-center justify-content-center px-5 py-4 shadow-sm'

    contactDetail.appendChild(email)
    contactDetail.appendChild(phone)

    map.appendChild(contactDetail)

    container.className = 'contact-wrapper d-flex w-100 justify-content-evenly align-items-center gap-3'
    container.appendChild(map)

    contact.appendChild(container)

    return contact
}