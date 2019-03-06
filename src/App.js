import React, { Component } from 'react';
import './App.css';
import {request} from './api';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
          </header>
          <body>
          <button onClick={() => request('https://api.openbrewerydb.org/breweries')}>
            request
          </button>
          </body>
          <footer/>
        </div>
    );
  }
}

export default App;
