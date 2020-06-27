import { connect } from 'react-redux';
import Browse from './Browse';
import { toggleModal } from '../actions/modal_actions';

const mapStateToProps = (state) => ({
  mode: state.ui.mode,
  sessionId: state.session.id,
  imageShow: state.ui.modal.imageShow,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modal) => dispatch(toggleModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
