import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from "./components/Footer"
import ModernNavbar from './components/Navbar'

const App = () => {
  return (
   <BrowserRouter>
   <ModernNavbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App