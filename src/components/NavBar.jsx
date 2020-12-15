import React from 'react';
import { Link } from 'react-router-dom';
// import Products from './Products';
import './NavBar.css';

const NavBar = () => {


  return (
    <div className="navbar">
      <Link to="/">
        <p>Routine Logs</p>
      </Link>
      <Link to="/products">
        <p>Products</p>
      </Link>
      <Link to="/routines">
        <p>Routines</p>
      </Link>
    </div>
  )
}

export default NavBar;