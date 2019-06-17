import React from 'react';

class WelcomeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    render() {
        let modalBlock;
        if (this.state.modal) {
            modalBlock = <div>
                <h3>Добро пожаловать</h3>
                <p>Приветствуем Вас на нашем сайте</p>
                <button onClick={() => {
                    this.setState({modal: false})
                }}>ОК
                </button>
            </div>;
        }

        return (
            <div>
                {modalBlock}
            </div>
        );
    }

    componentDidMount() {
        this.setState({modal: true});
    }
}

export default WelcomeModal;
