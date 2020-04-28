import React from 'react';

const NavBar = () => (
  <div className="nav-bar">
    <img src="https://via.placeholder.com/56x56" alt="logo" />
    <ul>
      <li>Home</li>
      <li>Templates</li>
      <li>Discover</li>
      <li>Learn</li>
      <li>Pricing</li>
    </ul>
    <div className="login-buttons">
      <button type="button">Log in</button>
      <button type="button" className="btn-blue">Sign up</button>
    </div>
  </div>
);

export default NavBar;
