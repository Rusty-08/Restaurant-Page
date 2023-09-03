export default function about() {
    const about = document.createElement('section');

    about.setAttribute('id', 'About')
    about.className = 'd-flex w-100 min-vh-100 justify-content-center align-items-center'
    about.textContent = 'ABOUT'

    return about
}