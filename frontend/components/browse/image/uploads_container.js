import { connect } from 'react-redux';
import AllImages from './AllImages';
import { fetchUserUploads } from '../../../actions/uploaded_image_actions';

const mapStateToProps = (state) => ({
  folder: { name: 'Uploads' },
  images: [],
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserUploads: () => dispatch(fetchUserUploads()),
  requestDesigns: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(AllImages);
