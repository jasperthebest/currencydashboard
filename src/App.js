import React, { Component } from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Mainbar from './Mainbar.js';
import Bottomnumber from './Bottomnumber.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Sidebar/>
        <Mainbar />
        <Bottomnumber />
      </div>
    );
  }
}

export default App;
