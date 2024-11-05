import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './navbar/Navbar'
import { Accueil } from './accueil/Accueil'
import { Formulaire } from './formulaire/Formulaire'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Formulaire/>}></Route>
          <Route path="/home" element={<Accueil/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
