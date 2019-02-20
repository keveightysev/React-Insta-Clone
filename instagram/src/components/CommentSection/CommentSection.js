import React from 'react';
import moment from 'moment';
import Comment from './Comment';
import CommentForm from './CommentForm';

import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.data.comments,
            newComment: '',
        }
    }

    inputComment = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    addComment = e => {
        e.preventDefault();
        const newText = { username: 'kevin', text: this.state.newComment };
        const comments = [...this.state.comments];
        
        comments.push(newText);

        this.setState({
            comments,
            newComment: '',
        });
    }

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                <p className="timestamp">{moment(this.props.data.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</p>
                <CommentForm 
                    newComment={this.state.newComment}  
                    addComment={this.addComment}
                    inputComment={this.inputComment}  
                />
            </div>
        );
    }
}

export default CommentSection;