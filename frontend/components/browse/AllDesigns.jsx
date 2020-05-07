import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className={styles.masonItem}>
              <Link to={`/design/${design.id}`}>
                <img src={design.thumbnail} alt="" />
            </Link>
              </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllDesigns;
