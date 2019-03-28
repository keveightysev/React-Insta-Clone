import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../../assets/iglogo.png';
import styled from 'styled-components';

// import './SearchBar.css';

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
`;

const Logo = styled.div`
    width: 30%;
    font-size: 7rem;
    padding: 20px 12px;
    display: flex;
    align-items: center;

    svg {
        padding: 0 12px;
    }

    img {
        width: 60%;
        border-left: 1px solid black;
        padding: 0 12px;
    }
`;

const Search = styled.input`
    width: 30%;
`;

const TopIcons = styled.div`
    display: flex;
    width: 30%;
    font-size: 5rem;
    justify-content: space-around;
`;

const SearchBar = props => {
    return (
        <Header>
            <Logo>
                <FontAwesomeIcon icon={faInstagram} />
                <img src={logo} alt="Instagram logo"/>
            </Logo>
            <Search type="search" value={props.searchTerm} onChange={props.searchInput} />
            <TopIcons>
                <FontAwesomeIcon icon={faCompass} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faUser} />
            </TopIcons>
        </Header>
    );
}

export default SearchBar;