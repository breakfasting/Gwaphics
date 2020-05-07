import React from 'react';
// import UserNav from './auth/UserNav';
import UserNavContainer from './auth/user_nav_container';
import styles from './NavBar.module.css';


const NavBar = ({ mode }) => (
  <div className={mode === 'splash' ? 'container' : 'container-wide border-bottom'}>
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src="https://via.placeholder.com/56x56" alt="logo" />
      </div>
      <ul className={styles.nav}>
        <li>Home</li>
        <li>Templates</li>
        <li>Discover</li>
        <li>Learn</li>
        <li>Pricing</li>
      </ul>
      <UserNavContainer />
    </div>
  </div>
);

export default NavBar;
