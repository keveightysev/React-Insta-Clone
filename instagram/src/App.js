import React, { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: '',
    }
  }

searchInput = e => {
  this.setState({
    searchTerm: e.target.value,
  })
}

  componentDidMount() {
    this.setState({
      data: dummyData,
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchTerm={this.state.searchTerm} searchInput={this.searchInput} />
        <PostContainer data={this.state.data} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
