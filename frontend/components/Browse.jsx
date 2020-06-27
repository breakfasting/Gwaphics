import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './NavBar';
import SignupAuthFormContainer from './auth/SignupAuthFormContainer';
import LoginAuthFormContainer from './auth/LoginAuthFormContainer';
import MainAuth from './auth/MainAuth';
import BrowseIndexContainer from './browse/browse_index_container';
import styles from './Browse.module.css';
import ImageShow from './modal/ImageShow';

const Browse = ({ mode, sessionId }) => (
  <>
    <div className={`${styles.container} ${styles.blurred}`}>
      <NavBar mode={mode} />
      {!sessionId ? (
        <div className={mode === 'splash' ? 'container' : 'container-wide'}>
          <AuthRoute path="/" component={MainAuth} />
        </div>
      ) : null}
      <ProtectedRoute path="/" component={BrowseIndexContainer} />
    </div>
    <ImageShow active />
  </>
);

export default Browse;
