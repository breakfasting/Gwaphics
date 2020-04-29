import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBar from './NavBar';
import SignupAuthFormContainer from './auth/SignupAuthFormContainer';
import LoginAuthFormContainer from './auth/LoginAuthFormContainer';

const App = ({ currentUser }) => (
  <div className="main">
    <div className={currentUser ? 'container' : 'container-wide'}>
      <NavBar />
      <Switch>
        <AuthRoute path="/login" component={LoginAuthFormContainer} />
        <AuthRoute path="/" component={SignupAuthFormContainer} />
      </Switch>
    </div>
  </div>
);

export default App;
