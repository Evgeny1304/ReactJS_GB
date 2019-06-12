import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Developer from './Developer';

class App extends Component {
    render() {
        return (<div>
                <h1>Первое приложение на React</h1>
                <Developer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));