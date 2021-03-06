import React from 'react';

import Post from './Post'

class Blog extends React.Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return (
                <Post key={index} title={item.title} postBody={item.postBody}/>
            );
        });

        return (
            <div>
                {items}
            </div>
        );

    }
}

export default Blog;
