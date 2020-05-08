import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IndexItemDropdown from './IndexItemDropdown';
import { deleteDesign, updateDesign } from '../../actions/design_actions';
import elementsOnDesign from '../../reducers/design/elements_selector';
import { requestFolders } from '../../actions/folder_actions';

const mapStateToProps = (state, ownProps) => {
  const folders = Object.values(state.entities.folders);
  return {
    currentUser: state.entities.users[state.session.id],
    design: ownProps.design,
    toggleDropdown: ownProps.toggleDropdown,
    folders: folders.filter((folder) => folder.ownerId === state.session.id),
    elements: (ownProps.design) ? elementsOnDesign(state, ownProps.design.id) : [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateDesign: (design) => dispatch(updateDesign(design)),
  deleteDesign: (designId) => dispatch(deleteDesign(designId)),
  requestFolders: () => dispatch(requestFolders()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IndexItemDropdown));
