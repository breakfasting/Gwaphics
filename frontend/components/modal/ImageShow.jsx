import React from 'react';
import withModal from './with_modal';
import modalStyles from './modal.module.css';
import styles from './imageShow.module.css';

// eslint-disable-next-line arrow-body-style
const ImageShow = (props) => {
  return (
    <div className={modalStyles.modal}>
      <div className={styles.content}>
        <div className={styles.preview}>
          <img src="https://via.placeholder.com/550" alt="" />
        </div>
        <div className={styles.info}>
          <h1>Untitled (1).svg</h1>
          <div className={styles.profile}>
            <div className={styles.profileImg} style={{ backgroundImage: `url(${'https://via.placeholder.com/320'})` }} />
            {/* <img src="https://via.placeholder.com/32" alt="" /> */}
            <p>
              By
              {' '}
              <span className={styles.name}>Wayne Su</span>
            </p>
          </div>
          <button type="button" className="btn-blue">
            Download
          </button>
        </div>
      </div>

    </div>
  );
};

export default withModal(ImageShow);
