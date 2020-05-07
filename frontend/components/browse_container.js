import { connect } from 'react-redux';
import Browse from './Browse';

const mapStateToProps = (state) => ({
  mode: state.ui.mode,
});

export default connect(mapStateToProps, null)(Browse);
