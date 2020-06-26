import { connect } from 'react-redux';
import DesignTools from './DesignTools';
import { receiveElement } from '../../actions/element_actions';

const mapStateToProps = (state, ownProps) => ({
  element: state.entities.elements[ownProps.selection],
});

const mapDispatchToProps = (dispatch) => ({
  receiveElement: (element) => dispatch(receiveElement(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesignTools);
