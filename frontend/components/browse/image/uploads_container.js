import { connect } from 'react-redux';
import AllImages from './AllImages';
import { fetchUserUploads, receiveUpload } from '../../../actions/uploaded_image_actions';

const mapStateToProps = (state) => {
  const { uploadedImages } = state.entities.users[state.session.id];
  return {
    folder: { name: 'Uploads' },
    images: uploadedImages ? uploadedImages.map((id) => state.entities.uploadedImages[id]) : [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserUploads: () => dispatch(fetchUserUploads()),
  receiveUpload: (payload) => dispatch(receiveUpload(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllImages);
