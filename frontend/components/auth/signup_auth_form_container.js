import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { signup } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  formType: 'signup',
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
