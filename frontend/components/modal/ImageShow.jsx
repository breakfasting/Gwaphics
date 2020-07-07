import React from 'react';
import withModal from './with_modal';
import modalStyles from './modal.module.css';
import styles from './imageShow.module.css';

const download = (link) => {
  $.ajax({
    url: link,
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
  }).then((res) => {
    const reslink = document.createElement('a');
    reslink.href = res.url;
    reslink.target = '_blank';
    document.body.appendChild(reslink);
    reslink.click();
    document.body.removeChild(reslink);
  });
};

// eslint-disable-next-line arrow-body-style
const ImageShow = ({ image, user, external }) => {
  if (!image) return null;
  return (
    <div className={modalStyles.modal}>
      <div className={styles.content}>
        <div className={styles.preview} style={{ backgroundImage: `url(${window.transparent})` }}>
          <img src={image.full || image.url} alt="" className={styles.image} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{image.title}</h1>
          <div className={styles.profile}>
            <div className={styles.profileImg} style={{ backgroundImage: `url(${image.creator_thumb || 'https://via.placeholder.com/320'})` }} />
            {external ? (
              <p>
                Photo by
                {' '}
                <a className={styles.name} href={`${image.creator_link}?utm_source=Gwaphics&utm_medium=referral`}>{image.creator}</a>
                {' on '}
                <a className={styles.name} href="https://unsplash.com/?utm_source=Gwaphics&utm_medium=referral">Unsplash</a>
              </p>
            ) : (
              <p>
                By
                {' '}
                <span className={styles.name}>{user.username}</span>
              </p>
            )}

          </div>
          {external ? (
            <button type="button" className="btn-blue" onClick={() => download(image.download)}>
              Download
            </button>
          ) : (
            <a href={image.url} download className={styles.stretch}>
              <button type="button" className="btn-blue">
                Download
              </button>
            </a>
          )}
        </div>
      </div>

    </div>
  );
};

export default withModal(ImageShow);
