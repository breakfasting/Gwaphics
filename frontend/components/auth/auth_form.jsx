import React from 'react';
import ExternalSignup from './ExternalSignup';
import LoginInput from './LoginInput';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      external: true,
      username: '',
      email: '',
      password: '',
    };
  }

  render() {
    const { external } = this.state;
    return (
      <div className="auth-form">
        {/* <ExternalSignup /> */}
        <LoginInput />
      </div>
    );
  }
}

export default AuthForm;
