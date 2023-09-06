import headerPicture from './img/about-header-bg.jpg'
import bodyPicture from './img/about-body-bg.jpg'

const createHeader = () => {
    const container = document.createElement('div')
    const welcome = document.createElement('p')
    const title = document.createElement('h1')
    const subTitle = document.createElement('span')

    container.className = 'about-title text-center mt-5'
    welcome.textContent = 'WELCOME'
    title.textContent = 'The Roti Hub'
    subTitle.textContent = "At Roti Hub, we're passionate about serving you the finest and healthiest Roti and Tea combinations. Our story is one of culinary exploration and a deep-rooted commitment to offering you a delightful dining experience."

    container.appendChild(welcome)
    container.appendChild(title)
    container.appendChild(subTitle)

    return container
}

const createSection = (headerContent, bodyContent) => {
    const container = document.createElement('div')
    const header = document.createElement('h3')
    const body = document.createElement('p')

    header.textContent = headerContent
    body.textContent = bodyContent

    container.className = 'about-content shadow-lg d-flex flex-column align-items-flex-start p-4'
    container.appendChild(header)
    container.appendChild(body)

    return container
}

const createBodyCard = (iconClass, headerContent, bodyContent) => {
    const container = document.createElement('div')
    const iconBox = document.createElement('div')
    const icon = document.createElement('i')
    const header = document.createElement('h3')
    const body = document.createElement('p')
    const link = document.createElement('a')

    icon.className = iconClass
    iconBox.className = 'icon-box d-flex justify-content-center align-items-center'
    iconBox.appendChild(icon)

    header.textContent = headerContent
    body.textContent = bodyContent
    link.setAttribute('href', '#')
    link.innerHTML = 'Learn More <i class="fa-solid fa-arrow-right"></i>'

    container.className = 'about-body-content w-100 d-flex flex-column align-items-flex-start my-3'
    container.appendChild(iconBox)
    container.appendChild(header)
    container.appendChild(body)
    container.appendChild(link)

    return container
}

const createTestimonial = () => {
    const wrapper = document.createElement('div')
    const bodyText = document.createElement('p');
    const author = document.createElement('p');
    const occupation = document.createElement('span');

    bodyText.textContent = `"I can't express how much I love Roti Hub! The moment I walked in, I was greeted by the warm aroma of freshly baked Roti. The taste? Absolutely divine! The Roti is soft, and the tea is the perfect pairing. It's become my go-to spot for a quick and delicious meal. The staff is friendly and welcoming, making every visit a delightful experience. I can't recommend Roti Hub enough!"`
    author.textContent = 'CARDO DALISAY'
    occupation.textContent = 'Professional Artists'

    wrapper.appendChild(bodyText)
    wrapper.appendChild(author)
    wrapper.appendChild(occupation)
    wrapper.className = 'testimony card d-flex justify-content-center align-items-center flex-column'

    return wrapper
}

export default function about() {
    const about = document.createElement('section');
    const AboutJourney = document.createElement('div')
    const headerImage = document.createElement('img')
    const AboutBody = document.createElement('div')
    const wrapper = document.createElement('div')
    const image = document.createElement('div')
    const bodyImage = document.createElement('img')
    const testimonySection = document.createElement('div')

    about.setAttribute('id', 'About')
    about.className = 'd-flex w-100 min-vh-100 position-relative justify-content-flex-start align-items-center flex-column'

    headerImage.className = 'about-header-pic position-absolute shadow-lg'
    headerImage.src = headerPicture

    AboutJourney.className = 'about-journey d-flex my-5 justify-content-center'

    AboutJourney.appendChild(createSection(
        'Our Journey',
        'Our journey began in the heart of the bustling city, where the aroma of freshly baked Roti wafted through the air. Inspired by the traditional recipes passed down through generations, we set out on a mission to bring these authentic flavors to your plate.'
    ))
    AboutJourney.appendChild(createSection(
        'The Roti Experience',
        "Our Roti is more than just a flatbread; it's a labor of love. We handcraft each Roti with precision and care, using only the finest ingredients. The result? A Roti that's soft, flavorful, and healthy – the perfect accompaniment to a cup of our aromatic tea."
    ))

    bodyImage.src = bodyPicture
    image.className = 'about-body-pic shadow-lg'
    image.appendChild(bodyImage)

    AboutBody.className = 'about-body h-auto d-flex justify-content-center align-items-center py-5 pt-4'

    wrapper.className = 'about-wrapper d-flex justify-content-flex-start flex-column align-items-center'
    wrapper.appendChild(createBodyCard(
        'fa-solid fa-hand-fist icon',
        'Our Commitment',
        "At Roti Hub, we're committed to sustainability and responsible sourcing. We work closely with local farmers and suppliers to ensure that our ingredients are of the highest quality and sourced ethically."
    ))
    wrapper.appendChild(createBodyCard(
        'fa-solid fa-mug-hot icon',
        'The Tea Connection',
        "Tea, an integral part of our culture, is at the heart of our menu. We've curated a selection of teas from around the world to complement our Roti offerings. From soothing herbal infusions to robust black teas, there's a tea for every palate."
    ))
    wrapper.appendChild(createBodyCard(
        'fa-regular fa-handshake icon',
        'Join Us',
        "We invite you to join us on this culinary journey. Whether you're looking for a quick bite or a leisurely meal, Roti Hub is the place to savor the flavors of tradition and innovation."
    ))

    AboutBody.appendChild(image)
    AboutBody.appendChild(wrapper)

    testimonySection.className = 'testimony-section d-flex justify-content-center align-items-center my-5'
    testimonySection.appendChild(createTestimonial())

    about.appendChild(headerImage)
    about.appendChild(createHeader())
    about.appendChild(AboutJourney)
    about.appendChild(AboutBody)
    about.appendChild(testimonySection)

    return about
}