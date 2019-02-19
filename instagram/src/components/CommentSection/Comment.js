import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

const Comment = props => {
    return(
        <p><span className="username">{props.comment.username}</span> {props.comment.text}</p>
    );
};

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
};

export default Comment;