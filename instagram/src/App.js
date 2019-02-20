import React, { Component } from 'react';
import authenticate from './components/Authentication/Authenticate';

import PostsPage from './components/PostContainer/PostsPage'
import Login from './components/Login/Login'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  loginSubmit = (username, password) => {
    this.setState({
      username: username,
      password: password,
    })
  }

  render(){
    const Page = authenticate(Login);
    return (
      <Page {...this.state} loginSubmit={this.loginSubmit}/>
    );
  }
}

export default App;