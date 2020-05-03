import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browse from './Browse';
import { AuthRoute } from '../util/route_util';
import NavBar from './NavBar';
import SignupAuthFormContainer from './auth/SignupAuthFormContainer';
import LoginAuthFormContainer from './auth/LoginAuthFormContainer';
import EditorContainer from './editor/editor_container';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    const { mode } = this.props;
    return (
      <div className="main">
        <Switch>
          <Route path="/design/:id" component={EditorContainer} />
          <Route path="/" component={Browse} mode={mode} />
        </Switch>
      </div>
    );
  }
}

export default App;
