import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateFolder from './CreateFolder';
import { createFolder } from '../../../actions/folder_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  toggleCreate: ownProps.toggleCreate,
});

const mapDispatchToProps = (dispatch) => ({
  createFolder: (folder) => dispatch(createFolder(folder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateFolder));
