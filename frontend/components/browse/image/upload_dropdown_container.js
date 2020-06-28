import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ImageDropdown } from './ImageDropdown';

const mapDispatchToProps = (dispatch) => ({
  updateImage: dispatch(() => {}),
  deleteImage: dispatch(() => {}),
});

export default connect(null, mapDispatchToProps)(ImageDropdown);
