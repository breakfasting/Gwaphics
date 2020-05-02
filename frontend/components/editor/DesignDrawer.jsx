import React from 'react';
import { FiLayout, FiImage, FiGrid, FiType, FiUploadCloud, FiDroplet, FiFolder, FiMoreHorizontal } from 'react-icons/fi';
import styles from './DesignDrawer.module.css';

class DesignDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawer: 'template' };
  }

  render() {
    return (
      <div className={styles.designDrawer}>
        <nav className={styles.toolsNav}>
          <button type="button" className="btn-tools">
            <FiLayout />
            <span>Templates</span>
          </button>
          <button type="button" className="btn-tools">
            <FiImage />
            <span>Photos</span>
          </button>
          <button type="button" className="btn-tools">
            <FiGrid />
            <span>Elements</span>
          </button>
          <button type="button" className="btn-tools">
            <FiType />
            <span>Text</span>
          </button>
          <button type="button" className="btn-tools">
            <FiDroplet />
            <span>Bkground</span>
          </button>
          <button type="button" className="btn-tools">
            <FiUploadCloud />
            <span>Uploads</span>
          </button>
          <button type="button" className="btn-tools">
            <FiFolder />
            <span>Folders</span>
          </button>
          <button type="button" className="btn-tools">
            <FiMoreHorizontal />
            <span>More</span>
          </button>
        </nav>
        <div className={styles.drawer}>
        </div>
      </div>
    );
  }
}

export default DesignDrawer;
