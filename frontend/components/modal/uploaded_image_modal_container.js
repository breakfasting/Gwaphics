import { connect } from 'react-redux';
import ImageShow from './ImageShow';

const mapStateToProps = (state) => {
  const image = state.entities.uploadedImages[state.ui.modal.uploadedModal];
  return {
    image,
    user: image && state.entities.users[image.uploaderId],
  };
};

export default connect(mapStateToProps, null)(ImageShow);
