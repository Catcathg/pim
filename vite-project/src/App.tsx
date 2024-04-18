import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Home from '../Pages/Home'
import Games from '../Pages/Games'
import Earthbound from '../Pages/Earthbound'
import Announces from '../Pages/Announces'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/Games/'} element={<Games />} />
        <Route path={'/Earthbound/'} element={<Earthbound />} />
        <Route path={'/Announces/'} element={<Announces />} />
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
}

export default App;
