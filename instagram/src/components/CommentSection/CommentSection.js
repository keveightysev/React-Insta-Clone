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

    componentDidMount = () => {
        this.getLocalStorage();
    
        window.addEventListener(
          'beforeunload',
          this.saveLocalStorage
        );
    }
    
    componentWillUnmount = () => {
        window.removeEventListener(
          'beforeunload',
          this.saveLocalStorage
        );
    }
    
    getLocalStorage = () => {
        for (let key in this.state) {
          if (localStorage.hasOwnProperty(key)) {
            let value = localStorage.getItem(key);
            try {
              value = JSON.parse(value);
              this.setState({ [key]: value });
            } catch (e) {
              this.setState({ [key]: value });
            }
          }
        }
    }
    
    saveLocalStorage = () => {
        for (let key in this.state) {
          localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    inputComment = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });

        localStorage.setItem(e.target.name, e.target.value);
    }

    addComment = e => {
        e.preventDefault();
        const newText = { username: 'kevin', text: this.state.newComment };
        const comments = [...this.state.comments];
        
        comments.push(newText);

        this.setState({
            comments,
            newComment: '',
        })

        localStorage.setItem('comments', JSON.stringify(comments));
        localStorage.setItem('newComment', '');
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