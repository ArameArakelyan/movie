import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/homepage';
import Search from './pages/searchpage';
import { SearchProvider } from './use';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchProvider>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/?search' element={<Search/>} />
      </Route>
    </Routes>
    </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

