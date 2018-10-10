import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';



class App extends Component {
  state = { 
      counters:[
          {id:1,value:4},
          {id:2,value:0},
          {id:3,value:0},
          {id:4,value:0},
      ]
  }

  handleDelete = (counterId)=>{
      const counters = this.state.counters.filter(c=>c.id!==counterId);
      this.setState({counters})
  }

  handleReset = ()=>{
      // Let's try to modify the state by setting the value of counters to 0, let's check the bahavior

      const counters = this.state.counters.map(counter=>{
          counter.value=0;
          return counter;
      });

      this.setState({counters}); 
  }

  handleIncrement = (counter)=>{
      const counters = [...this.state.counters];//copied the counters
      // We just need to modify that counter on which user clicks. let's find the index of that counter
      const index = counters.indexOf(counter);
      counters[index] =  {...counter}; 
      counters[index].value++;

      this.setState({counters});

  }
  render() {
    return (
      <div className="row">
          <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
          <main className="container">
            <Counters 
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              counters={this.state.counters}
              onReset={this.handleReset}
            />
          </main>
          
      </div>
    );
  }
}

export default App;
