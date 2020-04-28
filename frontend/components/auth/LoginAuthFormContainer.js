import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  formType: 'login',
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
