import React from 'react';
import { Link } from 'react-router-dom';
import { FiMoreHorizontal, FiEye } from 'react-icons/fi';
import styles from './DesignIndexItem.module.css';
import IndexItemDropdownContainer from './index_item_dropdown_container';

// eslint-disable-next-line react/prefer-stateless-function
class DesignIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false, direction: true };
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

  toggleDropdown(event) {
    // console.log(event.clientX, event.clientY)
    const { dropdown } = this.state;
    this.setState({ dropdown: !dropdown, direction: event.clientX < 574 });
  }

  handleClickOutside(event) {
    if (this.wrapperRef
      && !this.wrapperRef.contains(event.target)) {
      this.setState({ dropdown: false });
    }
  }

  render() {
    const { design, image } = this.props;
    const { dropdown, direction } = this.state;
    return (
      <div className={styles.card} ref={this.setWrapperRef}>
        <div className={styles.thumb}>
          {design ? (
            <Link to={`/design/${design.id}`}>
              <img src={design.thumbnail} alt="" />
            </Link>
          ) : (
            <img src={image.url} alt="" />
          )}
        </div>
        <div className={styles.title}>
          {design && design.public ? <FiEye /> : ''}
          {design ? <span>{design.title}</span> : <span>{image.title}</span>}
        </div>
        <div className={styles.wrap}>
          <div className={`${styles.toggle} ${dropdown ? styles.active : ''}`}>
            <button type="button" className="btn-item" onClick={this.toggleDropdown}>
              <FiMoreHorizontal />
            </button>
          </div>
        </div>
        {dropdown ? <IndexItemDropdownContainer design={design} toggleDropdown={this.toggleDropdown} direction={direction} /> : ''}
      </div>
    );
  }
}

export default DesignIndexItem;
