import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

import dummyData from '../../dummy-data';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        data: dummyData,
        searchTerm: '',
      }
    }
  
    componentDidMount = () => {
      this.getLocalStorage();
  
      window.addEventListener(
        'beforeunload',
        this.saveLocalStorage
      );
    }
  
    componentWillUnmount = () => {
      window.removeEventListener(
        'beforeunload',
        this.saveLocalStorage
      );
    }
  
    getLocalStorage = () => {
      for (let key in this.state) {
        if (localStorage.hasOwnProperty(key)) {
          let value = localStorage.getItem(key);
          try {
            value = JSON.parse(value);
            this.setState({ [key]: value });
          } catch (e) {
            this.setState({ [key]: value });
          }
        }
      }
    }
  
    saveLocalStorage = () => {
      for (let key in this.state) {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }
  
    searchInput = e => {
    this.setState({
      searchTerm: e.target.value,
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