import { connect } from 'react-redux';
import AllImages from './AllImages';

const mapStateToProps = (state) => ({
  folder: { name: 'Uploads' },
  images: [],
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserUploads: () => {},
  requestDesigns: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(AllImages);
