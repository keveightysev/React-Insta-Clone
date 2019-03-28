import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

const PostHeader = styled.div`
    display: flex;
    height: 75px;
    align-items: center;
    padding-left: 5px;

    img {
        height: 45%;
        border-radius: 50%;
        margin: 0 10px;
    }
`;

const Photo = styled.div`
    width: 100%;

    img {
        width: 100%;
    }
`;

const PostIcons = styled.div`
    font-size: 2rem;
    width: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
`;

const Likes = styled.div`
    p {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        padding: 10px;
    }
`;

const PostStyle = styled.section`
    border: 1px solid lightgray;
    margin: 30px 0;
`;

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
            <PostStyle key={this.props.item.thumbnailUrl}>    
                <PostHeader>
                    <img src={this.props.item.thumbnailUrl} alt={this.props.item.username} />
                    <h2>{this.props.item.username}</h2>
                </PostHeader>
                <Photo>
                    <img src={this.props.item.imageUrl} alt=""/>
                </Photo>
                <PostIcons>
                    <FontAwesomeIcon icon={faHeart} onClick={this.likeClick} />
                    <FontAwesomeIcon icon={faComment} />
                </PostIcons>
                <Likes>
                    <p>{this.state.likes} likes</p>
                </Likes>
                <CommentSection data={this.props.item} />
            </PostStyle>
        );
    }
}

export default Post;