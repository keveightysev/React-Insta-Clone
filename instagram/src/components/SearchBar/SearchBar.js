import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import logo from '../../assets/iglogo.png';

import './SearchBar.css';

const SearchBar = props => {
    return (
        <header>
            <div className="logo">
                <FontAwesomeIcon icon={faInstagram} />
                <img src={logo} alt="Instagram logo"/>
            </div>
            <input type="search" value={props.searchTerm} onChange={props.searchInput} />
            <div className="icons">
                <FontAwesomeIcon icon={faCompass} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
}

export default SearchBar;