import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

