import React, { Component } from 'react';
import './App.css';

import Counters from './components/counters';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Counters/>
      </div>
    );
  }
}

export default App;
