import React, {Component} from 'react'
import User from './User';
import {fetchUsers} from '../actions/usersAction';
import {connect} from 'react-redux';

class UsersList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        if (!this.props.users.length) {
            return null;
        }

        const users = this.props.users.map((user, index) => {
            return <User key={index} {...user} />
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {users}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(UsersList);