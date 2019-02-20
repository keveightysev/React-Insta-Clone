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
            <form action="#" onSubmit={this.loginSubmit}>
                <input type="text" 
                    value={this.state.username} 
                    onChange={this.handleInput}
                    name="username"
                />
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