import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => ({
  mode: state.ui.mode,
});

export default connect(mapStateToProps, null)(App);
