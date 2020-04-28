import React from 'react';
import { Link } from 'react-router-dom';
import { googleIcon, facebookIcon } from './AuthIcons';

const ExternalSignup = ({ changeView }) => (
  <div className="auth-form">
    <h1>
      Design anything.
      <br />
      Publish anywhere.
    </h1>
    <p>
      Create a account, it&apos;s free.
      Graphix is loved by beginners and experts, teams and individuals.
    </p>
    <button type="button" className="google">
      {googleIcon}
      <span>Sign up with Google</span>
    </button>
    <button type="button" className="facebook">
      {facebookIcon}
      <span>Sign up with Facebook</span>
    </button>
    <button type="button" className="btn-blue" onClick={changeView}>
      Sign up with E-mail
    </button>
    {/* <small>
          Don&apos;t want to sign up?&nbsp;
          <a href="#">Log in as demo user</a>
        </small> */}
    <small>
      Already signed up?&nbsp;
      <Link to="/login">Log in</Link>
    </small>
  </div>
);

export default ExternalSignup;
