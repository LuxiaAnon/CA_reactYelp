import React from 'react';
// import logo from './logo.svg';
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
// import { render } from '@testing-library/react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App