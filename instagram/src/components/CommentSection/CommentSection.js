import React from 'react';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="comment-section">
            {props.data.comments.map(comment => (
                <p><span className="username">{comment.username}</span> {comment.text}</p>
            ))}
            <p className="timestamp">{moment(props.data.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</p>
            <form>
                <input placeholder="Add a comment..."/>
                <FontAwesomeIcon icon={faEllipsisH} />
            </form>
        </div>
    );
}

export default CommentSection;