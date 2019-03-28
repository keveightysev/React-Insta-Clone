import React, { Component } from 'react';
import authenticate from './components/Authentication/Authenticate';

import PostsPage from './components/PostContainer/PostsPage'
import Login from './components/Login/Login'

import './App.css';

class App extends Component {
  render(){
    const Page = authenticate(PostsPage)(Login);
    return <Page {...this.state} />
  }
}

export default App;