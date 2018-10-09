import React, { Component } from 'react';
import Counter from './counter';
import { timingSafeEqual } from 'crypto';

class Counters extends Component { 
    //Parent feeds children on the children's demand.
    state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
        ]
     }

    deleteHandler = (counterId)=>{
        const counters = this.state.counters.filter(c=>c.id!==counterId);
        this.setState({counters})
    }

    handleReset = ()=>{
        // Let's try to modify the state by setting the value of counters to 0, let's check the bahavior

        const counters = this.state.counters.map(counter=>{
            return counter.value=0;
        });

        this.setState({counters}); 


    }
    render() { 
        return ( 
            <div className="counters">
                <button className="btn btn-primary m-2 btn-lg" onClick={this.handleReset}>Reset</button>
             {this.state.counters.map((counter)=>{
                 return <Counter 
                        key={counter.id}
                        counter={counter}
                        onDelete={this.deleteHandler}/> 
              })}
            </div>
           
        );
    }
}
 
export default Counters;