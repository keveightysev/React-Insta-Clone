import React from 'react';
import PropTypes from 'prop-types';


import Post from './Post';

import './PostContainer.css';

class PostContainer extends React.Component {
    render() {
        return (
            <main>
                {this.props.data.map((item, index) => {
                if (this.props.searchTerm.length === 0  || item.username.includes(this.props.searchTerm)) {
                    return <Post item={item} key={index} />
                } return null;
                })}
            </main>
        );
    }
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number
    }))
}

export default PostContainer;