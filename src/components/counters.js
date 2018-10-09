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
     console.log("Delete Handler!!!",counterId);
    //  const newState =  {...this.state}; // copied the state
    //  newState.counters.splice((counterId-1),1);
    //  this.setState(newState);

        const counters = this.state.counters.filter(c=>c.id!==counterId);
        this.setState({counters})
    }

    render() { 
        return ( 
            <div className="counters">
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