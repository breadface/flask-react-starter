import React, { Component } from 'react';
import { Link } from 'react-router';
import NavLink from './NavLink';

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/"><h1>Flask React Starter Kit(dockerized)</h1></Link>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/post">Post</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    )
  }
}


export default Nav
