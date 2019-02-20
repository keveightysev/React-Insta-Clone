import React, { Component } from 'react';
import authenticate from './components/Authentication/Authenticate';

import PostsPage from './components/PostContainer/PostsPage'

import './App.css';

const App = () => {
  const Page = authenticate(PostsPage);
  return (
    <Page />
  );
}

export default App;