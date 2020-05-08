import React from 'react';
import DesignIndexItem from './DesignIndexItem';
import styles from './AllDesigns.module.css';

class AllDesigns extends React.Component {
  componentDidMount() {
    const { requestDesigns } = this.props;
    requestDesigns();
  }

  render() {
    const { designs, pageTitle } = this.props;
    return (
      <div className={styles.indexArea}>
        <h1 className={styles.indexTitle}>{pageTitle}</h1>
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
