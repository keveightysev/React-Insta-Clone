import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: this.props.item.likes,
            likeClicked: false,
        }
    }

    likeClick = () => {
        
        if (this.state.likeClicked === false) {
            let likes = this.state.likes + 1;
            this.setState({
                likes: likes,
                likeClicked: true,
            })
        } else {
            let likes = this.state.likes - 1;
            this.setState({
                likes: likes,
                likeClicked: false,
            })
        }
    }

    render() {
        return(
            <section key={this.props.item.thumbnailUrl}>    
                <div className="post-header">
                    <img src={this.props.item.thumbnailUrl} alt={this.props.item.username} />
                    <h2>{this.props.item.username}</h2>
                </div>
                <div className="photo">
                    <img src={this.props.item.imageUrl} alt=""/>
                </div>
                <div className="post-icons">
                    <FontAwesomeIcon icon={faHeart} onClick={this.likeClick} />
                    <FontAwesomeIcon icon={faComment} />
                </div>
                <div className="likes">
                    <p>{this.state.likes} likes</p>
                </div>
                <CommentSection data={this.props.item} />
            </section>
        );
    }
}

export default Post;