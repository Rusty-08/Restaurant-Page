import './style.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const app = document.createElement('main')

    app.setAttribute('id', 'main-body')

    return app
}

document.body.appendChild(App())