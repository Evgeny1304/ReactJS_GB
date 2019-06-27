import React, {Component} from 'react'
import axios from 'axios';
import PostItem from './PostItem';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    render() {
        if (!this.state.posts.length) {
            return null;
        }

        const posts = this.state.posts.map((post, index) => {
            return <PostItem key={index} {...post} />
        });

        return (
            <div>
                <h1>Посты</h1>
                {posts}
            </div>
        )
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
            });
    }
}