import React from 'react';
import withModal from './with_modal';
import modalStyles from './modal.module.css';
import styles from './imageShow.module.css';

// eslint-disable-next-line arrow-body-style
const ImageShow = ({ image, user }) => {
  if (!image) return null;
  return (
    <div className={modalStyles.modal}>
      <div className={styles.content}>
        <div className={styles.preview}>
          <img src={image.url} alt="" className={styles.image} />
        </div>
        <div className={styles.info}>
          <h1>{image.title}</h1>
          <div className={styles.profile}>
            <div className={styles.profileImg} style={{ backgroundImage: `url(${'https://via.placeholder.com/320'})` }} />
            {/* <img src="https://via.placeholder.com/32" alt="" /> */}
            <p>
              By
              {' '}
              <span className={styles.name}>{user.username}</span>
            </p>
          </div>
          <a href={image.url} download className={styles.stretch}>
            <button type="button" className="btn-blue">
              Download
            </button>
          </a>
        </div>
      </div>

    </div>
  );
};

export default withModal(ImageShow);
