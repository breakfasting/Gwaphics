import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-bar">
    <div id="logo">
      <img src="https://via.placeholder.com/56x56" alt="logo" />
    </div>
    <ul>
      <li>Home</li>
      <li>Templates</li>
      <li>Discover</li>
      <li>Learn</li>
      <li>Pricing</li>
    </ul>
    <div className="login-buttons">
      <Link to="/login">
        <button type="button">Log in</button>
      </Link>
      <Link to="/signup">
        <button type="button" className="btn-blue">Sign up</button>
      </Link>
    </div>
  </div>
);

export default NavBar;
