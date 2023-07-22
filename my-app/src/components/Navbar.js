import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav class="navbar background">
        <ul class="nav-list">
            
            <li><a href="#/">Home</a></li>
            <li><a href="#/Projects">Projects</a></li>
            <li><a href="#/About">About</a></li>
            <li><a href="#/contact">Contact</a></li>
        </ul>
      </nav>
      </div>

  );
};
  
export default Navbar;