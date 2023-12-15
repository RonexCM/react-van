import './App.css';
import React, { useEffect, useState } from 'react'
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
import HostLayout from './components/HostLayout.jsx';
import HostVan from './pages/Host/HostVan.jsx';
import HostVanDetail from './pages/Host/HostVanDetail.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>

        <Route path='vans'>
        <Route index element={<Vans/>}/>
        <Route path=':id' element={<VanDetail/>}/>
        </Route>

      <Route path='/host' element={<HostLayout />}>
        <Route index element={<Dashboard />}/>
        <Route path='income' element={<Income />}/>
        <Route path='vans' element={<HostVan />}/>
        <Route path='vans/:id' element={<HostVanDetail />}/>
        <Route path='reviews' element={<Reviews />}/>
      </Route>
      </Route>
      </Routes>
      
    </BrowserRouter>
  );
}


export default App;
