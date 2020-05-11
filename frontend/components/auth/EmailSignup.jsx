import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';

const EmailSignup = ({
  handleChange, handleSubmit, errors, changeView, animate,
}) => (
  <form className={animate ? 'animated auth-form' : 'auth-form'} onSubmit={handleSubmit}>
    <div className="return-login">
      <button type="button" className="btn-none flex-center" onClick={changeView}>
        <FiChevronsLeft />
      </button>
      <h2>Create your account</h2>
    </div>
    <p>We&apos;ll have you designing in no time.</p>

    {errors.length ? <div className="error">{errors.join('. ')}</div> : ''}

    <input type="text" name="username" placeholder="Name" onChange={handleChange('username')} />
    <input type="text" name="email" placeholder="Email" onChange={handleChange('email')} />
    <input type="password" name="password" placeholder="Password" onChange={handleChange('password')} />
    <small>
      Use 6 or more characters
    </small>
    <button type="submit" className="btn-blue">
      Get started, it&apos;s free!
    </button>
    <small>
      By signing up, you agree to Gwaphics&apos;&nbsp;
      <u>Terms of Use</u>
      &nbsp;and&nbsp;
      <u>Privacy Policy</u>
      .
    </small>
    <small>
      Already signed up?&nbsp;
      <Link to="/login">Log in</Link>
    </small>
  </form>
);

export default EmailSignup;
