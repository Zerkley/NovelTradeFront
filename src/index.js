import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/navbar';
import ProfilePage from './components/profilePage/profilePage';
import Login from './pages/login/login';import Landing from './pages/landing/Landing';
import Catalog from './pages/catalog/Catalog';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/catalog" element={<Catalog/>} />     
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
