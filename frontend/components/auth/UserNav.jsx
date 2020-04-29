import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserNav.module.css';
import HaveUserNav from './HaveUserNav';

const UserNav = ({ currentUser, logout, updateMode }) => {
  const noUser = (
    <>
      <Link to="/login">
        <button type="button" className="btn-width btn-outline">Log in</button>
      </Link>
      <Link to="/signup">
        <button type="button" className="btn-width btn-blue">Sign up</button>
      </Link>
    </>
  );

  return (
    <div className={styles.userNav}>
      {currentUser ? (
        <HaveUserNav
          currentUser={currentUser}
          logout={logout}
          updateMode={updateMode}
        />
      ) : noUser}
    </div>
  );
};

export default UserNav;
