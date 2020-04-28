import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { googleIcon, facebookIcon } from './AuthIcons';

const LoginForm = () => (
  <div className="auth-form">
    <div className="return-login">
      <Link to="/signup">
        <FontAwesomeIcon icon={faAngleLeft} />
      </Link>
      <h2>Log in to your account</h2>
    </div>
    <button type="button" className="google">
      {googleIcon}
      <span>Log in with Google</span>
    </button>
    <button type="button" className="facebook">
      {facebookIcon}
      <span>Log in with Facebook</span>
    </button>
    <div className="divider">
      <hr />
      <span>OR</span>
      <hr />
    </div>
    <input type="text" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button type="button" className="btn-blue">
      Log in
    </button>
    <small>
      New to Graphix?&nbsp;
      <Link to="/signup">Sign up</Link>
    </small>
  </div>
);

export default LoginForm;
