import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';

class App extends Component {
    render() {
        const posts = [
            {
                title: "Post 1",
                postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto dignissimos eum harum, ipsam iste nostrum praesentium tempore voluptas voluptate!"
            },
            {
                title: "Post 2",
                postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque error in ipsa ipsam modi nisi perspiciatis quas quo voluptatem!"
            },
            {
                title: "Post 3",
                postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, ipsa iure. Beatae deserunt facilis, inventore maxime pariatur perferendis suscipit ut!"
            },
            {
                title: "Post 4",
                postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur eius ipsam neque nobis nostrum numquam omnis provident quibusdam sed."
            }
        ];
        return (
            <div>
                <WelcomeModal/>
                <Blog items={posts}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));