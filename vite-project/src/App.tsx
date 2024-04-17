import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Home from '../Pages/Home'
import Products from '../Pages/Products'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/Produits'} element={<Products />} />
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
}

export default App;