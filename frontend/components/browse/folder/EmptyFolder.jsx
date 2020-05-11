import React from 'react';
import styles from '../AllDesigns.module.css';

const EmptyFolder = ({ folderName }) => (
  <div className={styles.indexArea}>
    <h1 className={styles.indexTitle}>{folderName}</h1>
  </div>
);

export default EmptyFolder;
