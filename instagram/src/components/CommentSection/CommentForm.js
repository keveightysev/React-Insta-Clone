import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const CommentForm = props => {
    return (
        <form onSubmit={props.addComment}>
            <input 
                type="text"
                placeholder="Add a comment..." 
                value={props.newComment} 
                name="newComment"
                onChange={props.inputComment}
            />
            <button><FontAwesomeIcon icon={faEllipsisH} /></button>
        </form>
    );
}

export default CommentForm;