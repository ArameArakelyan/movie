import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/homepage';
import Search from './pages/searchpage';
import { SearchProvider } from './use';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchProvider>
    <Router>
      <App/>
    </Router>
    </SearchProvider>
  </React.StrictMode>
);

