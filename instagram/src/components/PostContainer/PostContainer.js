import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import Post from './Post';

// import './PostContainer.css';

const Container = styled.div`
    width: 600px;
    margin: 0 auto;
`;

class PostContainer extends React.Component {
    
    render() {
        return (
            <Container>
                {this.props.data.map((item, index) => {
                if (item.username.includes(this.props.searchTerm)) {
                    return <Post item={item} key={index} update={this.props.update}/>
                } return null;
                })}
            </Container>
        );
    }
}

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number
    }))
}

export default PostContainer;