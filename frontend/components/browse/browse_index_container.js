import { connect } from 'react-redux';
import BrowseIndex from './BrowseIndex';
import { requestFolders } from '../../actions/folder_actions';

const mapStateToProps = (state) => {
  const folders = Object.values(state.entities.folders);
  return {
    folders: folders.filter((folder) => folder.ownerId === state.session.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestFolders: () => dispatch(requestFolders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrowseIndex);
