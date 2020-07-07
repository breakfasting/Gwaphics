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
      animate: false,
    };
    this.changeView = this.changeView.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
    const { clearErrors } = this.props;
    clearErrors();
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
    const { action, history } = this.props;
    const { username, email, password } = this.state;
    action({ username, email, password });
    history.push('/');
  }


  render() {
    const { showExternal, animate } = this.state;
    const { errors, demoLogin } = this.props;
    return (
      <>
        {
          showExternal
            ? (
              <ExternalSignup
                changeView={this.changeView}
                demoLogin={demoLogin}
                animate={animate}
              />
            )
            : (
              <EmailSignup
                errors={errors}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                changeView={this.changeView}
                animate={animate}
              />
            )
        }
      </>
    );
  }
}

export default SignupForm;
