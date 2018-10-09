import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value:this.props.value // from parent props is being passed 
    }

    getbadgeClass = ()=>{
        // Conditional Rendering
        let classes = 'btn btn-';
        classes+= this.state.value===0?'warning':'danger';
        return classes;
    }

    handleIncrement = ()=>{
        // this.props.value = 23; props are read only and cannot be modified
        this.setState({value:this.state.value+1});
    }

    render() { 
        return ( 
            <div className="counter">
                <span className={this.getbadgeClass()+' value'}>{this.state.value===0?"Zero":this.state.value}</span>
                <button className="btn btn-primary btn-lg" onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-danger  btn-sm m-2" onClick={this.props.onDelete}>Delete</button> {/* Idea:function was passed as prop*/}
            </div> 
        );
    }
}
 
export default Counter;