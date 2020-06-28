import { connect } from 'react-redux';
import Browse from './Browse';
import { toggleModal } from '../actions/modal_actions';

const mapStateToProps = (state) => ({
  mode: state.ui.mode,
  sessionId: state.session.id,
  uploadedModal: state.ui.modal.uploadedModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modal, id) => dispatch(toggleModal(modal, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
