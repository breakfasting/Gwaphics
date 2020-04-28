import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import SignupAuthFormContainer from './auth/SignupAuthFormContainer';
import LoginAuthFormContainer from './auth/LoginAuthFormContainer';

const App = () => (
  <div className="main">
    <NavBar />
    <Switch>
      <Route path="/login" component={LoginAuthFormContainer} />
      <Route path="/" component={SignupAuthFormContainer} />
    </Switch>
  </div>
);

export default App;
