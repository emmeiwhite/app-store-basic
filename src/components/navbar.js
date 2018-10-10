import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Navbar <button className="btn btn-primary btn-sm">{this.props.totalCounters}</button>
            </a>
        </nav>
          );
    }
}
 
export default Navbar;