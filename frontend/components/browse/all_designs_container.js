import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
import { requestOwnedDesigns } from '../../actions/design_actions';

const mapStateToProps = (state) => {
  const designs = Object.values(state.entities.designs);
  return {
    designs: designs.filter((design) => design.userId === state.session.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestOwnedDesigns: () => dispatch(requestOwnedDesigns()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
