import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  formType: 'login',
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
