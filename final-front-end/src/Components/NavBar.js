import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class NavBar extends Component {

  render() {
    return (
      <div className="nav-bar">
        <ul>
          <Link to="/"> <li>Home</li> </Link>
          <Link to="/teams"><li>Teams</li> </Link>
          <Link to ="/news/:team"><li>News</li></Link>
        </ul>
      </div>
    );
  }

}

export default NavBar;
