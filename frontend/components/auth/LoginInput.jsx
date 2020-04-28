import React from 'react';
import { googleIcon, facebookIcon } from './AuthIcons';

const LoginInput = () => (
  <>
    <h2>Log in to your account</h2>
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
      <a href="#">Sign up</a>
    </small>
  </>
);

export default LoginInput;
