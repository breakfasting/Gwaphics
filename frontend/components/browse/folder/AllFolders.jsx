import React from 'react';
import {
  FiGrid, FiUploadCloud, FiTrash2, FiHeart, FiStar,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './AllFolders.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class AllFolders extends React.Component {
  render() {
    return (
      <div className={styles.indexArea}>
        <h1 className={styles.indexTitle}>All your folders</h1>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/folder/all-designs">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiGrid />
                </div>
                <span className="ml-16">All your designs</span>
              </button>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/folder/likes">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiHeart />
                </div>
                <span className="ml-16">Likes</span>
              </button>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/folder/uploads">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiUploadCloud />
                </div>
                <span className="ml-16">Uploads</span>
              </button>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/folder/:folderId">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>
                  <FiStar />
                </div>
                <span className="ml-16">Custom folder</span>
              </button>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/folder/trash">
              <button type="button" className="btn-index btn-folder">
                <div className={styles.iconWrap}>

                  <FiTrash2 />
                </div>
                <span className="ml-16">Trash</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default AllFolders;
