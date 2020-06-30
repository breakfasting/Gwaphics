import { connect } from 'react-redux';
import UploadsDrawer from './UploadsDrawer';
import { fetchUserUploads, receiveUpload } from '../../../actions/uploaded_image_actions';

const mapStateToProps = (state) => {
  const { uploadedImages } = state.entities.users[state.session.id];
  return {
    images: uploadedImages ? uploadedImages.map((id) => state.entities.uploadedImages[id]) : [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserUploads: () => dispatch(fetchUserUploads()),
  receiveUpload: (payload) => dispatch(receiveUpload(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadsDrawer);
