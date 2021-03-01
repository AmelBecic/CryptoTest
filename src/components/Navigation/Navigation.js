import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';


const Nav = () => {

    return (
        <nav>
            <h3 className="naslov">CRYPTO TEST</h3>
            <ul>
                <Link className="link" to="/home"> 
                    <li>Top 100</li>
                </Link>
                <Link className="link" to="/settings">
                    <li>Settings</li>
                </Link>
                
            </ul>
        </nav>
    )
}

export default Nav;
