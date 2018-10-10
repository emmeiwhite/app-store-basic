import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="row">
          <Navbar/>
          <Counters className="col-md-8"/>
      </div>
    );
  }
}

export default App;
