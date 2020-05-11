import React from 'react';
import DesignIndexItem from './DesignIndexItem';
import styles from './AllDesigns.module.css';

class AllDesigns extends React.Component {
  componentDidMount() {
    const { requestDesigns } = this.props;
    requestDesigns();
  }

  render() {
    const { designs, folder } = this.props;
    if (!folder) return null;
    return (
      <div className={styles.indexArea}>
        <h1 className={styles.indexTitle}>{folder.name}</h1>
        {designs.length === 0 ? (
          <div className="grey">
            <h2>This folder is empty.</h2>
          </div>
        ) : (
          <div className={styles.masonry}>
            {designs.map((design) => (
              <div key={design.id} className={styles.masonItem}>
                <DesignIndexItem design={design} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AllDesigns;
