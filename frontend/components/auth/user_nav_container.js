import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { updateMode } from '../../actions/mode_actions';
import UserNav from './UserNav';

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  updateMode: (mode) => dispatch(updateMode(mode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
