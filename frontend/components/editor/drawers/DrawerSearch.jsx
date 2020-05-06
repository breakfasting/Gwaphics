import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './DrawerSearch.module.css';

class DrawerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryString: '' };
  }

  render() {
    const { placeholder } = this.props;
    return (
      <div className={styles.searchBar}>
        <div className={styles.searchInput}>
          <div className={styles.inputIcon}>
            <FiSearch />
            <input className={styles.input} type="text" placeholder={placeholder} />
          </div>
          <FiX />
        </div>
      </div>
    );
  }
}

export default DrawerSearch;
