import React, { Component } from 'react';
class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div className = "row navbar">
                <a href="browse">browse</a>
                <a href="detail" >detail</a>

            </div>
            );
    }
}
 
export default Navbar;