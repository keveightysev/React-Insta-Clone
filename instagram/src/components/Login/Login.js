import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
          username: '',
          password: '',
        }
      }
    
    handleInput = e => {
        this.setState({
        [e.target.name]: e.target.value,
        });
    }

    loginSubmit = e => {
        localStorage.setItem("username", this.state.username);
    }

    render() {
        return (
            <form action="#" onSubmit={this.loginSubmit} className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" 
                    value={this.state.username} 
                    onChange={this.handleInput}
                    name="username"
                />
                <label htmlFor="password">Password</label>
                <input type="password"
                onChange={this.handleInput}
                name="password"
                />
                <button>Login now!</button>
            </form>
        );
    }
}

export default Login;