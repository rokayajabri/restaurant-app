import React from 'react';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  };

  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  };

  handleConfirmPasswordChange = (event) => {
    this.setState({confirmPassword: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle register logic using this.state.name, this.state.email, this.state.password, and this.state.confirmPassword
  };

  render() {
    return (
      <div className="register">
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleNameChange} />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleEmailChange} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" name="confirmPassword" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default Register ;
