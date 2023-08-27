import './style.css'
import 'bootstrap/dist/css/bootstrap.css';


import navigation from './navigation';
import home from './home';

function App() {
    const app = document.createElement('main')
    app.setAttribute('id', 'main-body')

    app.appendChild(navigation())

    return app
}

document.body.appendChild(App())