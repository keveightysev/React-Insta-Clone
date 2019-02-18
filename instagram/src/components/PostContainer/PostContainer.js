import React from 'react';
import PropTypes from 'prop-types';

import CommentSection from '../CommentSection/CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <main>
            {props.data.map(item => (
            <section key={item.thumbnailUrl}>    
                <div className="post-header">
                    <img src={item.thumbnailUrl} alt={item.username} />
                    <h2>{item.username}</h2>
                </div>
                <div className="photo">
                    <img src={item.imageUrl} alt=""/>
                </div>
                <div className="post-icons">
                    <FontAwesomeIcon icon={faHeart} />
                    <FontAwesomeIcon icon={faComment} />
                </div>
                <div className="likes">
                    <p>{item.likes} likes</p>
                </div>
                <CommentSection data={item} />
            </section>
            ))}
        </main>
    );
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