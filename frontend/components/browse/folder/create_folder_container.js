import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateFolder from './CreateFolder';
import { createFolder } from '../../../actions/folder_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  toggleModal: ownProps.toggleModal,
  folder: { name: '' },
  formType: 'Create New Folder',
});

const mapDispatchToProps = (dispatch) => ({
  action: (folder) => dispatch(createFolder(folder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateFolder));
