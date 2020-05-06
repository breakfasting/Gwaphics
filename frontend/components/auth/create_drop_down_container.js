import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateDropDown from './CreateDropDown';
import { createDesign } from '../../actions/design_actions';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  createDesign: (design) => dispatch(createDesign(design)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateDropDown));
