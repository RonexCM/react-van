import './App.css';
import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import { createServer } from 'miragejs';
import VanDetail from './pages/Vans/VanDetail';
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard.jsx"
import Income from "./pages/Host/Income.jsx"
import Reviews from "./pages/Host/Reviews.jsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/vans' element={<Vans/>}/>
        <Route path='/vans/:id' element={<VanDetail/>}/>
        <Route path='/host' element={<Dashboard />}/>
        <Route path='/host/income' element={<Income />}/>
        <Route path='/host/reviews' element={<Reviews />}/>
        </Route>
      </Routes>
      <footer>
      <div>
        <p>Ⓒ 2023 #VANLIFE</p>
      </div>
      </footer>
    </BrowserRouter>
  );
}


export default App;
