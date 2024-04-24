import React from 'react';
import './navbar.css';
import { Outlet, useNavigate } from 'react-router-dom';
import  logoNovel from "./logoNovel.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('logout');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');

  };
  return (
    <>
    <nav className="navbar">
      <img src={logoNovel} className="logo"/>
      <a onClick={()=> handleLogout()}>Log out</a>
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