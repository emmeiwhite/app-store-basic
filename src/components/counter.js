import React, { Component } from 'react';

class Counter extends Component {
    // Removing local state from the child
   

    getbadgeClass = ()=>{
        // Conditional Rendering
        let classes = 'btn btn-';
        classes+= this.props.counter.value===0?'warning':'danger';
        return classes;
    }

    formatCount = ()=>{
        let {value} =  {...this.props.counter} // Destructuring: from counter object {id:--,value:--}, we are fetching hte value
        console.log(value);
        return value===0?"ZERO":value;
     
    }
    // handleIncrement will also come from the parent only: In short both data and implementation will be handled by Parent
    render() { 
        return ( 
            <div className="counter">
                <span className={this.getbadgeClass()+' value'}>{this.formatCount()}</span>
                <button className="btn btn-primary btn-lg" onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
                <button className="btn btn-danger  btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button> {/* Idea:function was passed as prop*/}
            </div> 
        );
    }
}
 
export default Counter;