import { connect } from 'react-redux';
import { toggleModal } from '../actions/modal_actions';
import App from './app';

const mapStateToProps = (state) => ({
  mode: state.ui.mode,
  externalModal: state.ui.modal.externalModal,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: (modal, id) => dispatch(toggleModal(modal, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
