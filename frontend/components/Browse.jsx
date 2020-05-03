import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBar from './NavBar';
import SignupAuthFormContainer from './auth/SignupAuthFormContainer';
import LoginAuthFormContainer from './auth/LoginAuthFormContainer';

const Browse = ({ mode }) => {
  return (
    <div className={mode === 'splash' ? 'container' : 'container-wide'}>
      <NavBar />
      <Switch>
        <AuthRoute path="/login" component={LoginAuthFormContainer} />
        <AuthRoute path="/" component={SignupAuthFormContainer} />
      </Switch>
    </div>
  );
};

export default Browse;
