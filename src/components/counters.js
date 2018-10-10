import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component { 
    //Parent feeds children on the children's demand.
    // WE MUST WORK WITH SINGLE SOURCE OF TRUTH TO MAKE SURE THE RESET WORKS
    // Again we have decided to use App as our Single source of truth.We are removing all the data and events from here and using them in App
    // Now Counters component is itself a CONTROLLED COMPONENT
    render() { 
        return ( 
            <div className="counters">
                <button className="btn btn-primary m-2 btn-lg" onClick={this.props.onReset}>Reset</button>
             {this.props.counters.map((counter)=>{ // particular counter {id:--,value:--} for particular Counter
                 return <Counter 
                        key={counter.id}
                        counter={counter}
                        onIncrement={this.props.onIncrement}
                        onDelete={this.props.onDelete}/> 
              })}
            </div>
           
        );
    }
}
 
export default Counters;