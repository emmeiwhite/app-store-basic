import React, { Component } from 'react';


// Stateless Functional Component

const Navbar = ({totalCounters})=>{ // Object Destructuring to get only the specific property from props object
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Navbar <button className="btn btn-primary btn-sm">{totalCounters}</button>
            </a>
        </nav>
    );
}
 
export default Navbar;