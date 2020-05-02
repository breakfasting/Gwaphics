import React from 'react';
import { FiChevronLeft, FiChevronsLeft } from 'react-icons/fi';
import styles from './EditorNav.module.css';

const EditorNav = () => (
  <div className={styles.editorNav}>
    <nav className={styles.leftNav}>
      <button type="button" className="btn-icon">
        <FiChevronLeft />
        Home
      </button>
      <button type="button" className="btn-icon">
        File
      </button>
      <button type="button" className="btn-icon">
        Resize
      </button>
    </nav>

  </div>
);

export default EditorNav;
