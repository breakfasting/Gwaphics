import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  formType: 'signup',
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
