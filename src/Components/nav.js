import React from 'react';
import '../CSS/nav.css';
import {Link} from 'react-router-dom';

const navStyle = {
    color: 'white'
}

const NavBar= () => {
    return ( 
        <nav>
            <h1>Logo</h1>
            <ul className='Nav-Links'>
                <Link style={navStyle} to='/Home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/Shop' >
                    <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/About' >
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/Contact' >
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}
        

export default NavBar;

