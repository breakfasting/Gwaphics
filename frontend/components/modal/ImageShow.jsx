import React from 'react';
import withModal from './with_modal';
import modalStyles from './modal.module.css';

// eslint-disable-next-line arrow-body-style
const ImageShow = (props) => {
  return (
    <div className={modalStyles.modal}>
      testing
    </div>
  );
};

export default withModal(ImageShow);
