import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './navbar/Navbar'
import { Accueil } from './accueil/Accueil'
import { Formulaire } from './formulaire/Formulaire'
import { Login } from "./login/Login"
import { Services } from './services/Services'
import { Bottom_bar } from './navbar/bottom_bar/Bottom_bar'
import { Restaurant } from './resto/Restaurant'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<><Accueil/><Bottom_bar/></>}></Route>
          <Route path="/form" element={<Formulaire/>}></Route>
          <Route path="/services" element={<><Services/><Bottom_bar/></>}></Route>
          <Route path="/restaurant" element={<><Restaurant/><Bottom_bar/></>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
