import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const CommentSection = props => {
    return (
        <div>
            {props.data.comments.map(comment => (
                <p><span className="username">{comment.username}</span> {comment.text}</p>
            ))}
            <p>{props.data.timestamp}</p>
            <form>
                <input placeholder="Add a comment..."/>
                <FontAwesomeIcon icon={faEllipsisH} />
            </form>
        </div>
    );
}

export default CommentSection;