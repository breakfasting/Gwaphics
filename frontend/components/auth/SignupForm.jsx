import React from 'react';
import ExternalSignup from './ExternalSignup';
import EmailSignup from './EmailSignup';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExternal: true,
      username: '',
      email: '',
      password: '',
    };
    this.changeView = this.changeView.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  changeView() {
    const { showExternal } = this.state;
    this.setState({ showExternal: !showExternal });
  }

  handleChange(form) {
    return (e) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { action } = this.props;
    const { username, email, password } = this.state;
    action({ username, email, password });
  }

  render() {
    const { showExternal } = this.state;
    const { errors } = this.props;
    return (
      <>
        {
          showExternal
            ? <ExternalSignup changeView={this.changeView} />
            : (
              <EmailSignup
                errors={errors}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                changeView={this.changeView}
              />
            )
        }
      </>
    );
  }
}

export default SignupForm;
