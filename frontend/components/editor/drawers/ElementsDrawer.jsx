import React from 'react';
import styles from './ElementsDrawer.module.css';

class ElementsDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: false };
  }

  render() {
    return (
      <div className={styles.elementsDrawer}>
        <div className={styles.item}>circle</div>
        <div className={styles.item}>Square</div>
        <div className={styles.item}>Triangle</div>
        <div className={styles.item}>Hexagon</div>
        <div className={styles.item}>Square with border</div>
        <div className={styles.item}>Rounded square</div>
        <div className={styles.item}>Rounded square with border</div>
        <div className={styles.item}>Right-angled Triangle</div>
        <div className={styles.item}>Heart Shape</div>
      </div>
    );
  }
}

export default ElementsDrawer;
