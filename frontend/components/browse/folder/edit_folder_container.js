import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateFolder from './CreateFolder';
import { updateFolder, deleteFolder } from '../../../actions/folder_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  toggleModal: ownProps.toggleModal,
  folder: ownProps.folder,
  formType: 'Edit Folder',
});

const mapDispatchToProps = (dispatch) => ({
  action: (folder) => dispatch(updateFolder(folder)),
  deleteFolder: (folderId) => dispatch(deleteFolder(folderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateFolder));
