import React from 'react';
import './navbar.css';
import { Outlet } from 'react-router-dom';
import  logoNovel from "./logoNovel.jpg";

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <img src={logoNovel} className="logo" />
      <a href="/profile">Mi perfil</a>
      <a href="/Catalog">Market</a>
      <a href="/">Mis ofertas</a>
    </nav>
    <div>
    <Outlet />
    </div>
    </>
  );
};

export default Navbar;