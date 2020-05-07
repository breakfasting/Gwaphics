import React from 'react';
import DesignIndexItem from './DesignIndexItem';
import styles from './AllDesigns.module.css';

class AllDesigns extends React.Component {
  componentDidMount() {
    const { requestOwnedDesigns } = this.props;
    requestOwnedDesigns();
  }

  render() {
    const { designs } = this.props;
    return (
      <div className={styles.indexArea}>
        <h1 className={styles.indexTitle}>All your designs</h1>
        <div className={styles.masonry}>
          {designs.map((design) => (
            <div key={design.id} className={styles.masonItem}>
              <DesignIndexItem design={design} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllDesigns;
