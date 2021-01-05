import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <div>
      <header>
        <div className="logo-container"><img src={ logo } alt="logo" /></div>
        <nav className="nav-bar">
        <ul>
            <li><a href="#featureurl">Features</a></li>
            <li><a href="#teamurl">Team</a></li>
            <li><a href="#signinurl">Sign In</a></li>
        </ul>
        </nav>
    </header>
    </div>
  );
}

export default Header;
