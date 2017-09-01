import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
let socket = io(`http://localhost:3100`)
// import socketMethods from './socket.js';

class App extends Component {

    componentDidMount() {
     socket.on('getInitial', (rows) => this.setState(rows))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reacasdft</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
