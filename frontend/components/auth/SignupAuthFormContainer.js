import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  formType: 'signup',
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
