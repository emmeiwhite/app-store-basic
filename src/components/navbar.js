import React, { Component } from 'react';


// Stateless Functional Component

const Navbar = (props)=>{
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Navbar <button className="btn btn-primary btn-sm">{props.totalCounters}</button>
            </a>
        </nav>
          );
}
 
export default Navbar;