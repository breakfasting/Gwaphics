import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ImageDropdown from './ImageDropdown';
import { updateUpload, deleteUpload } from '../../../actions/uploaded_image_actions';

const mapDispatchToProps = (dispatch) => ({
  updateImage: (uploadedImage) => dispatch(updateUpload(uploadedImage)),
  deleteImage: (uploadedImageId) => dispatch(deleteUpload(uploadedImageId)),
});

export default connect(null, mapDispatchToProps)(ImageDropdown);
