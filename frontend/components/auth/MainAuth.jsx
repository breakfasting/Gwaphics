import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../../util/route_util';
import SignupAuthFormContainer from './SignupAuthFormContainer';
import LoginAuthFormContainer from './LoginAuthFormContainer';
import styles from './MainAuth.module.css';

const MainAuth = () => (
  <div className={styles.main}>
    <Switch>
      <AuthRoute path="/login" component={LoginAuthFormContainer} />
      <AuthRoute path="/" component={SignupAuthFormContainer} />
    </Switch>
    <div className={styles.splash}>
      <img src={window.splash} alt="" />
    </div>
  </div>
);

export default MainAuth;
