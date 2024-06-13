import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <h1>BRIJAMOHAN JHA</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

