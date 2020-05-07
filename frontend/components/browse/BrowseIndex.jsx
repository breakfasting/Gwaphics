import React from 'react';
import { FiGrid, FiUploadCloud, FiTrash2, FiFolder, FiHome, FiHeart, FiStar } from 'react-icons/fi';
import AllDesignsContainer from './all_designs_container';
import styles from './BrowseIndex.module.css';

const BrowseIndex = () => (
  <div className={styles.container}>
    <div className={styles.sideBar}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <button type="button" className="btn-index active-route">
            <FiHome />
            <span className="ml-16">Recommended for you</span>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" className="btn-index">
            <FiGrid />
            <span className="ml-16">All your designs</span>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" className="btn-index">
            <FiFolder />
            <span className="ml-16">All your folders</span>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" className="btn-index">
            <FiHeart />
            <span className="ml-16">Likes</span>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" className="btn-index">
            <FiUploadCloud />
            <span className="ml-16">Uploads</span>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" className="btn-index">
            <FiStar />
            <span className="ml-16">Custom folder</span>
          </button>
        </li>
        <li className={styles.listItem}>
          <button type="button" className="btn-index">
            <FiTrash2 />
            <span className="ml-16">Trash</span>
          </button>
        </li>
      </ul>
    </div>
    <div className={styles.main}>
      <AllDesignsContainer />
    </div>
  </div>
);

export default BrowseIndex;
