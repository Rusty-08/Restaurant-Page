
const createForm = () => {
    const contactForm = document.createElement('div');
    const form = document.createElement('form')
    const header = document.createElement('h5')
    const desc = document.createElement('p')
    const name = document.createElement('div')
    const email = document.createElement('div')
    const message = document.createElement('div')
    const submit = document.createElement('button')

    header.textContent = 'Feedback'
    desc.textContent = 'Share your thoughts with us!'

    name.innerHTML = `
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" class="form-control" id="name">
            `
    email.innerHTML = `
                <label for="email" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" id="email">
            `
    message.innerHTML = `
                <label for="text-area" class="form-label">Message</label>
                <textarea class="form-control" id="text-area" name="message" rows="3" ></textarea>
            `

    submit.className = 'btn'
    submit.setAttribute('type', 'submit')
    submit.textContent = 'Submit'

    form.className = 'form'
    form.id = 'myForm'
    form.setAttribute('action', 'https://formspree.io/f/mleyryar')
    form.setAttribute('method', 'POST')
    form.appendChild(header)
    form.appendChild(desc)
    form.appendChild(name)
    form.appendChild(email)
    form.appendChild(message)
    form.appendChild(submit)

    contactForm.className = 'contact-form'
    contactForm.appendChild(form)

    return contactForm
}

export default function contact() {
    const contact = document.createElement('section')
    const container = document.createElement('div')
    const map = document.createElement('div')
    const contactDetail = document.createElement('div')
    const email = document.createElement('p')
    const phone = document.createElement('p')

    contact.setAttribute('id', 'Contact')
    contact.className = 'd-flex w-100 min-vh-100 justify-content-center align-items-center'

    map.className = 'map shadow-sm d-flex position-relative'
    map.innerHTML = `<iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.5513960193636!2d123.87497475030797!3d12.658509335424956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0d6affb990a2b%3A0x7b28bb102716fe85!2sSabang%20Park%20and%20Beach%20Resort%2C%20Bulan%2C%20Sorsogon!5e0!3m2!1sen!2sph!4v1693980496635!5m2!1sen!2sph" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>`

    email.innerHTML = 'Email <br><span><a href="mailto:gunaorusty@gmail.com">gunaorusty@gmail.com</a></span>'
    phone.innerHTML = 'Phone <br><span>(+63) 995 201 6228</span>'

    contactDetail.className = 'contact-detail position-absolute d-flex gap-5 align-items-center justify-content-center px-5 py-4 shadow-sm'

    contactDetail.appendChild(email)
    contactDetail.appendChild(phone)

    map.appendChild(contactDetail)

    container.className = 'contact-wrapper d-flex w-100 justify-content-evenly align-items-center'
    container.appendChild(map)
    container.appendChild(createForm())

    contact.appendChild(container)

    return contact
}