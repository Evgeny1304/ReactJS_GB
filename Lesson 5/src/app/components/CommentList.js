import React, {Component} from 'react'
import axios from 'axios';
import CommentBody from './Comment';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    render() {
        if (!this.state.comments.length) {
            return null;
        }

        const comments = this.state.comments.map((comment, index) => {
            return <CommentBody key={index} {...comment} />
        });

        return (
            <div>
                <h1>Комментарии</h1>
                {comments}
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/comments')
            .then(response => {
                this.setState({comments: response.data})
            });
    }
}