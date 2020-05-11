import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
// import { requestOwnedDesigns } from '../../actions/design_actions';

const mapStateToProps = (state) => {
  // const designs = Object.values(state.entities.designs);
  return {
    folder: { name: 'Likes' },
    designs: [],
  };
};

const mapDispatchToProps = (dispatch) => ({
  // requestDesigns: () => dispatch(requestOwnedDesigns()),
  requestDesigns: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
