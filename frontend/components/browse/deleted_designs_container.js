import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
import { requestOwnedDesigns, deleteDesign } from '../../actions/design_actions';

const mapStateToProps = (state) => {
  const designs = Object.values(state.entities.designs);
  return {
    folder: { name: 'Trash' },
    designs: designs.filter((design) => design.userId === state.session.id && design.trash),
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestDesigns: () => dispatch(requestOwnedDesigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
