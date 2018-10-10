import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component { 
    //Parent feeds children on the children's demand.
    // WE MUST WORK WITH SINGLE SOURCE OF TRUTH TO MAKE SURE THE RESET WORKS
    state = { 
        counters:[
            {id:1,value:0},
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
            <div className="counters">
                <button className="btn btn-primary m-2 btn-lg" onClick={this.handleReset}>Reset</button>
             {this.state.counters.map((counter)=>{ // particular counter {id:--,value:--} for particular Counter
                 return <Counter 
                        key={counter.id}
                        counter={counter}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}/> 
              })}
            </div>
           
        );
    }
}
 
export default Counters;