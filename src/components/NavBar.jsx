import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/routine-logs">
        <h5>Routine Logs</h5>
      </Link>
      <Link to="/products">
        <h5>Products</h5>
      </Link>
      <Link to="/routines">
        <h5>Routines</h5>
      </Link>
    </div>
  )
}

export default NavBar;