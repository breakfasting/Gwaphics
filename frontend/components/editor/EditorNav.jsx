import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiSave, FiRefreshCw } from 'react-icons/fi';
import styles from './EditorNav.module.css';

const EditorNav = ({ updateDesign, loading }) => (
  <div className={styles.editorNav}>
    <nav className={styles.leftNav}>
      <Link to="/" className={loading ? 'disabled' : ''}>
        <button type="button" className="btn-icon btn-editor" disabled={loading}>
          <FiChevronLeft />
          Home
        </button>
      </Link>
      {/* <button type="button" className="btn-icon">
        File
      </button>
      <button type="button" className="btn-icon">
        Resize
      </button> */}

    </nav>
    <nav className={styles.rightNav}>
      <button type="button" className="btn-icon btn-editor" onClick={updateDesign} disabled={loading}>
        {loading ? <FiRefreshCw className="spin" /> : (
          <>
            <FiSave />
            <span className="ml-4">Save</span>
          </>
        )}
      </button>
    </nav>
  </div>
);

export default EditorNav;
