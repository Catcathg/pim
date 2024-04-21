import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import Home from '../Pages/Home'
import Games from '../Pages/Games'
import Earthbound from '../Pages/Earthbound'
import Announces from '../Pages/Announces'
import Payment from '../Pages/Payment'
import Login from '../Pages/Login'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={'/Home/'} element={<Home />} />
        <Route path={'/Games/'} element={<Games />} />
        <Route path={'/Earthbound/'} element={<Earthbound />} />
        <Route path={'/Announces/'} element={<Announces />} />
        <Route path={'/Payment/'} element={<Payment />} />
        <Route path={'/Login/'} element={<Login />} />
        <Route path={'*'} element={<>Erreur 404</>} />
      </Routes>
    </div>
  )
}

export default App;
