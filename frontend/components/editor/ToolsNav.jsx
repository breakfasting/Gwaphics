import React from 'react';
import {
  FiLayout, FiImage, FiGrid, FiType, FiUploadCloud, FiDroplet, FiFolder, FiMoreHorizontal,
} from 'react-icons/fi';
import styles from './DesignDrawer.module.css';

const ToolsNav = ({
  changeDrawer, current, closed, animate,
}) => {
  const activeButton = (id) => (current === id && !closed ? 'active btn-tools' : 'btn-tools');
  return (
    <div className={styles.toolsNav}>
      <div className={animate ? styles.highlight : styles.highlightClosed} style={{ transform: `translate3d(0px, ${current * 72}px, 0px)` }}>
        <div className={`${styles.background} ${closed ? styles.hidden : ''}`} />
      </div>
      <nav className={styles.buttonsNav}>
        <button type="button" className={activeButton(0)} onClick={() => changeDrawer(0)}>
          <FiLayout />
          <span>Templates</span>
        </button>
        <button type="button" className={activeButton(1)} onClick={() => changeDrawer(1)}>
          <FiImage />
          <span>Photos</span>
        </button>
        <button type="button" className={activeButton(2)} onClick={() => changeDrawer(2)}>
          <FiGrid />
          <span>Elements</span>
        </button>
        <button type="button" className={activeButton(3)} onClick={() => changeDrawer(3)}>
          <FiType />
          <span>Text</span>
        </button>
        {/* <button type="button" className={activeButton(4)} onClick={() => changeDrawer(4)}>
          <FiDroplet />
          <span>Bkground</span>
        </button> */}
        <button type="button" className={activeButton(4)} onClick={() => changeDrawer(4)}>
          <FiUploadCloud />
          <span>Uploads</span>
        </button>
        <button type="button" className={activeButton(5)} onClick={() => changeDrawer(5)}>
          <FiFolder />
          <span>Folders</span>
        </button>
        <button type="button" className={activeButton(6)} onClick={() => changeDrawer(6)}>
          <FiMoreHorizontal />
          <span>More</span>
        </button>
      </nav>

    </div>
  );
};

export default ToolsNav;
