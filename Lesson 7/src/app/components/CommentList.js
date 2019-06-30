import React, {Component} from 'react';
import CommentBody from './Comment';
import { fetchComments } from '../actions/commentsAction';
import { connect } from 'react-redux';

class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchComments());
    }

    render() {
        if (!this.props.comments.length) {
            return null;
        }

        const comments = this.props.comments.map((comment, index) => {
            return <CommentBody key={index} {...comment} />
        });

        return (
            <div>
                <h1>Комментарии</h1>
                {comments}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps)(CommentList);