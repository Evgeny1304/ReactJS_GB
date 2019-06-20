import React from 'react';


class Login extends React.Component {
    render() {
        return (
            <form action="#">
                <h3>Форма авторизации</h3>
                <input type="text" placeholder="login"/>
                <input type="password" placeholder="password"/>
                <button type="submit">Sign In</button>
            </form>
        );
    }
}

export default Login;
