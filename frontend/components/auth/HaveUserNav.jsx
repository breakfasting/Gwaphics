import React from 'react';
import { Link } from 'react-router-dom';
import { FiHelpCircle, FiSettings } from 'react-icons/fi';
import UserDropDown from './UserDropDown';
import styles from './HaveUserNav.module.css';

class HaveUserNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropDown: null };
    this.setUserWrapperRef = this.setUserWrapperRef.bind(this);
    this.setCreateWrapperRef = this.setCreateWrapperRef.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setUserWrapperRef(node) {
    this.wrapperRef = node;
  }

  setCreateWrapperRef(node) {
    this.createWrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef
      && !this.wrapperRef.contains(event.target)
      && !this.createWrapperRef.contains(event.target)) {
      this.setState({ dropDown: null });
    }
  }

  toggleDropdown(card) {
    const { dropDown } = this.state;
    if (dropDown === card) {
      this.setState({ dropDown: null });
    } else {
      this.setState({ dropDown: card });
    }
  }

  render() {
    const { currentUser, logout, updateMode } = this.props;
    const { dropDown } = this.state;
    return (
      <>
        <Link to="/">
          <button type="button" className="btn-icon">
            <FiHelpCircle />
          </button>
        </Link>
        <button type="button" className="btn-icon">
          <FiSettings />
        </button>
        <div className={styles.containerRef} ref={this.setCreateWrapperRef}>
          <button type="button" onClick={() => this.toggleDropdown('design')} className="btn-blue ml-8">
            <span className={styles.btnSpan}>Create a design</span>
          </button>
          {dropDown === 'design' ? <UserDropDown currentUser={currentUser} logout={logout} /> : ''}
        </div>
        <div className={`${styles.containerRef} ml-16`} ref={this.setUserWrapperRef}>
          <button type="button" className="btn-none" onClick={() => this.toggleDropdown('user')}>
            <img className={styles.profileImg} src="https://via.placeholder.com/40x40" alt="profile img" />
          </button>
          {dropDown === 'user' ? <UserDropDown currentUser={currentUser} logout={logout} /> : ''}
        </div>
      </>
    );
  }
}

export default HaveUserNav;
