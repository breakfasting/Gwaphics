import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IndexItemDropdown from './IndexItemDropdown';
import { deleteDesign, updateDesign } from '../../actions/design_actions';
import elementsOnDesign from '../../reducers/design/elements_selector';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  design: ownProps.design,
  elements: (ownProps.design) ? elementsOnDesign(state, ownProps.design.id) : [],
});

const mapDispatchToProps = (dispatch) => ({
  updateDesign: (design) => dispatch(updateDesign(design)),
  deleteDesign: (designId) => dispatch(deleteDesign(designId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IndexItemDropdown));