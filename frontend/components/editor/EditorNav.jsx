import React from 'react';
import { FiChevronLeft, FiSave } from 'react-icons/fi';
import styles from './EditorNav.module.css';

const EditorNav = ({ updateDesign }) => (
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
    <nav className={styles.rightNav}>
      <button type="button" className="btn-icon" onClick={updateDesign}>
        <FiSave />
        <span className="ml-4">Save</span>
      </button>
    </nav>
  </div>
);

export default EditorNav;
