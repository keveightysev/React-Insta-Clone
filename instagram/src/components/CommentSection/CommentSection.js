import React from 'react';
import moment from 'moment';
import Comment from './Comment';
import CommentForm from './CommentForm';

import styled from 'styled-components';

const CommentSectionStyle = styled.div`
    margin: 0 10px;

    p {
        font-size: 1.5rem;
        margin: 0 0 5px 0;
    }

    p.timestamp {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 600;
        color: lightgray;
    }

    form {
        border-top: 1px solid lightgray;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
            width: 90%;
            height: 30px;
            border: none;
            margin: 10px 0;

            &::placeholder {
                color: lightgray;
                font-weight: 700;
            }
        }
    }

    svg {
        font-size: 2rem;
    }
`;

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
        const newText = { username: localStorage.getItem('username'), text: this.state.newComment };
        const comments = [...this.state.comments];
        
        comments.push(newText);

        this.setState({
            comments,
            newComment: '',
        });
    }

    render() {
        return (
            <CommentSectionStyle>
                {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
                <p className="timestamp">{moment(this.props.data.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</p>
                <CommentForm 
                    newComment={this.state.newComment}  
                    addComment={this.addComment}
                    inputComment={this.inputComment}  
                />
            </CommentSectionStyle>
        );
    }
}

export default CommentSection;