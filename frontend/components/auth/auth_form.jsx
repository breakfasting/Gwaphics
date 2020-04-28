import React from 'react';
import ExternalSignup from './ExternalSignup';

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
        <ExternalSignup />
      </div>
    );
  }
}

export default AuthForm;
