import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBar from './NavBar';
import SignupAuthFormContainer from './auth/SignupAuthFormContainer';
import LoginAuthFormContainer from './auth/LoginAuthFormContainer';

const App = () => (
  <div className="main">
    <NavBar />
    <Switch>
      <AuthRoute path="/login" component={LoginAuthFormContainer} />
      <AuthRoute path="/" component={SignupAuthFormContainer} />
    </Switch>
  </div>
);

export default App;
