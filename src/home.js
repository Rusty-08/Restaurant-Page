export default function home() {
    const home = document.createElement('section');

    home.setAttribute('id', 'Home')
    home.className = 'd-flex w-100 h-100 justify-content-center align-items-center'
    home.textContent = 'HOME'

    return home
}