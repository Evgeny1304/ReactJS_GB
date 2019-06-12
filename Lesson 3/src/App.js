import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Developer from './Developer';
import Menu from './Menu';
import Login from './Login';

class App extends Component {
    render() {
        const menuItems = [
            { href: "/", title: "Главная" },
            { href: "/about" , title: "О нас" },
            { href: "/service" , title: "Услуги" },
            { href: "/contacts" , title: "Контакты" }
        ];

        return (<div>
                <h1>Первое приложение на React</h1>
                <Menu items={menuItems} titleMenu="Меню навигации"/>
                <Login/>
                <Developer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));