import React, {Component} from 'react';
import PostItem from './PostItem';
import { fetchPosts } from '../actions/postsAction';
import { connect } from 'react-redux';

class PostList extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    render() {
        if (!this.props.posts.length) {
            return null;
        }

        const posts = this.props.posts.map((post, index) => {
            return <PostItem key={index} {...post} />
        });

        return (
            <div>
                <h1>Посты</h1>
                {posts}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(PostList);