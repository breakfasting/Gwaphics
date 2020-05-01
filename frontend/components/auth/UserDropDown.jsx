/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import styles from './UserDropDown.module.css';

const UserDropDown = ({ currentUser, logout }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogout = () => {
    setAnimate(false);
    // setTimeout(logout, 2000);
  };

  return (
    <div className={`${styles.dropdownCard} ${animate ? styles.animate : ''}`}>
      <ul>
        <li className={styles.profile}>
          <div className={styles.profileImg}>
            <img src="https://via.placeholder.com/64x64" alt="profile img" />
          </div>
          <div className={styles.profileText}>
            <p>{currentUser.username}</p>
            <small>{currentUser.email}</small>
          </div>
        </li>
        <li>
          <hr className={styles.hr} />
        </li>
        <li className={`${styles.listItem} ${styles.disabled}`}>
          Account Settings
        </li>
        <li className={`${styles.listItem} ${styles.disabled}`}>
          Refer friends
        </li>
        <li className={`${styles.listItem} ${styles.disabled}`}>
          Get Help
        </li>
        <li
          className={styles.listItem}
          onClick={logout}
        >
          Sign out
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
