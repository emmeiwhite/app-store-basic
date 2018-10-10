import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component { 
    //Parent feeds children on the children's demand.
    // WE MUST WORK WITH SINGLE SOURCE OF TRUTH TO MAKE SURE THE RESET WORKS
    // Again we have decided to use App as our Single source of truth.We are removing all the data and events from here and using them in App
    // Now Counters component is itself a CONTROLLED COMPONENT
    render() { 
        const {counters,onReset,onIncrement,onDelete} = this.props; // For Clean Code, We performed Object Destructuring from props object
        return ( 
            <div className="counters">
                <button className="btn btn-primary m-2 btn-lg" onClick={onReset}>Reset</button>
             {counters.map((counter)=>{ // particular counter {id:--,value:--} for particular Counter
                 return <Counter 
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDelete={onDelete}/> 
              })}
            </div>
           
        );
    }
}
 
export default Counters;