import { connect } from 'react-redux';
import Editor from './Editor';
import { requestDesign, updateDesign } from '../../actions/design_actions';
import elementsOnDesign from '../../reducers/design/elements_selector';
import { receiveElement } from '../../actions/element_actions';

const mapStateToProps = (state, ownProps) => {
  const design = state.entities.designs[ownProps.match.params.id];
  return {
    design,
    elements: (design) ? elementsOnDesign(state, design.id) : [],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestDesign: () => dispatch(requestDesign(ownProps.match.params.id)),
  updateDesign: (design) => dispatch(updateDesign(design)),
  receiveElement: (element) => dispatch(receiveElement(element)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
