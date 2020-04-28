import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import UserDropDown from './UserDropDown';
import styles from './HaveUserNav.module.css';

class HaveUserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropDown: null };
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <>
        <Link to="/">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faCog} />
        </Link>
        <div>
          <Link to="/">
            <button type="button" className="btn-blue">
              <span className={styles.btnSpan}>Create a design</span>
            </button>
          </Link>
        </div>
        <div className={styles.profileImg}>
          <img src="https://via.placeholder.com/40x40" alt="profile img" />
          <UserDropDown currentUser={currentUser} logout={logout} />
        </div>
      </>
    );
  }
}

export default HaveUserNav;
