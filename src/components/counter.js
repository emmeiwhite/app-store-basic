import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value:0
    }

    getbadgeClass = ()=>{
        // Conditional Rendering
        let classes = 'badge badge-';
        classes+= this.state.value===0?'warning':'danger';
        return classes;
    }

    handleIncrement = ()=>{
        this.setState({value:this.state.value+1});
    }
    render() { 
        return ( 
            <div>
                <span className={this.getbadgeClass()}>{this.state.value}</span>
                <button className="btn btn-primary btn-lg" onClick={this.handleIncrement}>Increment</button>
            </div> 
        );
    }
}
 
export default Counter;