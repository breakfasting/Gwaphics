import { connect } from 'react-redux';
import AllDesigns from './AllDesigns';
import { requestTemplates } from '../../actions/design_actions';

const mapStateToProps = (state) => {
  const designs = Object.values(state.entities.designs);
  return {
    folder: { name: 'All public designs' },
    designs: designs.filter((design) => design.public && !design.trash),
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestDesigns: () => dispatch(requestTemplates()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDesigns);
