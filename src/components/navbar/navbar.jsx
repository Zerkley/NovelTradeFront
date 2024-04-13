import React from 'react';
import './navbar.css';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/news">News</a>
      <a href="/contact">Contact</a>
    </nav>
    <div>
    <Outlet />
    </div>
    </>
  );
};

export default Navbar;