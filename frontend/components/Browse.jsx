import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './NavBar';
import SignupAuthFormContainer from './auth/SignupAuthFormContainer';
import LoginAuthFormContainer from './auth/LoginAuthFormContainer';
import MainAuth from './auth/MainAuth';
import BrowseIndex from './browse/BrowseIndex';
import styles from './Browse.module.css';

const Browse = ({ mode }) => {
  return (
    <div className={styles.container}>
      <NavBar mode={mode} />
      <div className={mode === 'splash' ? 'container' : 'container-wide'}>
        <AuthRoute path="/" component={MainAuth} />
        <ProtectedRoute path="/" component={BrowseIndex} />
      </div>
    </div>
  );
};

export default Browse;
