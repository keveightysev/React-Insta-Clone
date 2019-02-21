import React from 'react';
import styled from 'styled-components';

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;

    label {
        font-size: 2.5rem;
        font-weight: 700;
    }

    input {
        width: 75%;
        height: 25px;
        margin: 10px 0;
        border: 1px solid black;
    }

    button {
        background: black;
        color: white;
        border: 1px solid black;
        padding: 5px 20px;
        font-size: 2.5rem;
        margin-top: 10px;
    }
`;

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
            <LoginForm onSubmit={this.loginSubmit}>
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
            </LoginForm>
        );
    }
}

export default Login;