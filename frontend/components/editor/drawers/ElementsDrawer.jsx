import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './ElementsDrawer.module.css';

class ElementsDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: false };
  }

  render() {
    return (
      <div className={styles.elementsDrawer}>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <div className={styles.inputIcon}>
              <FiSearch />
              <input className={styles.input} type="text" placeholder="Search icons and shapes" />
            </div>
            <FiX />
          </div>
        </div>
        <div className={styles.itemList}>
          <div className={styles.item}>
            <img src="./assets/shapes/circle" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./assets/shapes/square" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./assets/shapes/triangle" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./assets/shapes/hexagon" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./assets/shapes/bordered-square" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./assets/shapes/rounded-square" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./assets/shapes/rounded-bordered-square" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./assets/shapes/right-angled-triangle" alt="" />
          </div>
          <div className={styles.item}>
            <img src="./assets/shapes/heart" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ElementsDrawer;
