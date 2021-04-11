import React from 'react';
import logo from './../../components/Assets/logo.jpeg';
import './Nav.css';

const Nav = () => {
    return ( 
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">SpeedRacer</p>
                </div>
                <div className="nar-right">
                    <a 
                    target="_blank"
                    className="nav-link"
                    href="https://github.com/natsumadan"
                    rel="noreferrer"
                    >
                        Mohit Madan 
                    </a>


            </div>
        </div>
    );
}


export default Nav;