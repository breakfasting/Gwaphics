import React from 'react';
import styles from './UserDropDown.module.css';

const UserDropDown = ({ currentUser, logout }) => (
  <div className={styles.dropdownCard}>
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
      <li className={styles.listItem} onClick={logout}>
        Sign out
      </li>
    </ul>
  </div>
);

export default UserDropDown;
