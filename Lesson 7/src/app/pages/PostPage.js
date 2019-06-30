import React, {Component} from 'react'
import axios from 'axios';
import PostItem from '../components/PostItem';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }

    render() {
        return (
            <div>
                {this.state.post && <PostItem {...this.state.post} />}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then(response => {
                this.setState({post: response.data})
            })
    }
}
