import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './DrawerSearch.module.css';

class DrawerSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryString: '' };
  }

  render() {
    const { placeholder, handleSearch, value, handleSubmit } = this.props;
    return (
      <div className={styles.searchBar}>
        <form onSubmit={handleSubmit}>
          <div className={styles.searchInput}>
            <div className={styles.inputIcon}>
              <FiSearch />
              <input className={styles.input} type="text" placeholder={placeholder} onChange={handleSearch} value={value} />
            </div>
            <FiX />
          </div>
          <button type="submit" className={styles.hiddenButton}>Search</button>
        </form>
      </div>
    );
  }
}

export default DrawerSearch;
