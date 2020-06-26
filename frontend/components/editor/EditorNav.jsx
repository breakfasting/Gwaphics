import React from 'react';
import { withRouter } from 'react-router-dom';
import { FiChevronLeft, FiSave, FiRefreshCw } from 'react-icons/fi';
import styles from './EditorNav.module.css';

const EditorNav = ({ updateDesign, loading, history }) => (
  <div className={styles.editorNav}>
    <nav className={styles.leftNav}>
      <div to="/" className={loading ? 'disabled' : ''}>
        <button type="button" className="btn-icon btn-editor" disabled={loading} onClick={() => { history.goBack(); }}>
          <FiChevronLeft />
          Home
        </button>
      </div>
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

export default withRouter(EditorNav);
