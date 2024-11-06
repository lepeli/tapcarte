import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './navbar/Navbar'
import { Accueil } from './accueil/Accueil'
import { Formulaire } from './formulaire/Formulaire'
import { Login } from "./login/Login"
import { Services } from './services/Services'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Accueil/>}></Route>
          <Route path="/form" element={<Formulaire/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
