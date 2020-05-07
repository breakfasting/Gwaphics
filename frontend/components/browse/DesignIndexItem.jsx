import React from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal, FiEye } from 'react-icons/fi';
import styles from './DesignIndexItem.module.css';
import IndexItemDropdownContainer from './index_item_dropdown_container';

// eslint-disable-next-line react/prefer-stateless-function
class DesignIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  toggleDropdown() {
    const { dropdown } = this.state;
    this.setState({ dropdown: !dropdown });
  }

  handleClickOutside(event) {
    if (this.wrapperRef
      && !this.wrapperRef.contains(event.target)) {
      this.setState({ dropdown: false });
    }
  }

  render() {
    const { design } = this.props;
    const { dropdown } = this.state;
    return (
      <div className={styles.card} ref={this.setWrapperRef}>
        <div className={styles.thumb}>
          <Link to={`/design/${design.id}`}>
            <img src={design.thumbnail} alt="" />
          </Link>
        </div>
        <div className={styles.title}>
          {design.public ? <FiEye /> : ''}
          <span>{design.title}</span>
        </div>
        <div className={styles.wrap}>
          <div className={`${styles.toggle} ${dropdown ? styles.active : ''}`}>
            <button type="button" className="btn-item" onClick={this.toggleDropdown}>
              <FiMoreHorizontal />
            </button>
          </div>
        </div>
        {dropdown ? <IndexItemDropdownContainer design={design} /> : ''}
      </div>
    );
  }
}

export default DesignIndexItem;
