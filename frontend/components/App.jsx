import React from 'react';
import { Switch } from 'react-router-dom';
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
        {mode === 'edit' ? <EditorContainer /> : (
          <div className={mode === 'splash' ? 'container' : 'container-wide'}>
            <NavBar />
            <Switch>
              <AuthRoute path="/login" component={LoginAuthFormContainer} />
              <AuthRoute path="/" component={SignupAuthFormContainer} />
            </Switch>
          </div>
        )}
      </div>
    );
  }
}

export default App;
