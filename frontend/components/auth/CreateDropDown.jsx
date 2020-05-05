import React, { useState, useEffect } from 'react';
import styles from './UserDropDown.module.css';

const CreateDropDown = ({ updateMode }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`${styles.dropdownCard} ${animate ? styles.animate : ''}`}>
      <ul>
        <button type="button" className="btn-none" onClick={() => updateMode('edit')}>
          <li className={styles.listItem}>
            Create
          </li>
        </button>
      </ul>
    </div>
  );
};

export default CreateDropDown;
