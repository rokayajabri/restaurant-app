import React from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  };

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle login logic using this.state.email and this.state.password
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};
export default Login