import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <main>
            {props.data.dummyData.map(item => (
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

export default PostContainer;