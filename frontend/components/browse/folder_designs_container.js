import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
import { requestFolder } from '../../actions/folder_actions';

const mapStateToProps = (state, ownProps) => {
  const designs = Object.values(state.entities.designs);
  const { folderId } = ownProps.match.params;
  return {
    folder: state.entities.folders[folderId],
    designs: designs.filter((design) => (
      design.userId === state.session.id
      && design.folderId === parseInt(folderId, 10)
      && !design.trash
    )),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestDesigns: () => dispatch(requestFolder(ownProps.match.params.folderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
