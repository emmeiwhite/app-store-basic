import React, { Component } from 'react';
import Counter from './counter';

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

    deleteHandler = (index)=>{
     const newState =  {...this.state}; // copied the state
     newState.counters.splice(index,1);
     this.setState(newState);
    }

    render() { 
        return ( 
            <div className="counters">
             {this.state.counters.map((counter,index)=>{
                 return <Counter key={counter.id} value={counter.value} onDelete={()=>this.deleteHandler(index)}/> 
             })}
            </div>
           
        );
    }
}
 
export default Counters;