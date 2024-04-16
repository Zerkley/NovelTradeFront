import React from 'react';
import './navbar.css';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <a href="/profile">Mi perfil</a>
      <a href="/news">Market</a>
      <a href="/">Contact</a>
    </nav>
    <div>
    <Outlet />
    </div>
    </>
  );
};

export default Navbar;