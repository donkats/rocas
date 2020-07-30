import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div class="NavBar">
      <h5>Rocas</h5>
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
     	</ul>
    </div>
  );
};

export default NavBar;