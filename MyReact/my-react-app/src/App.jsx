import React from 'react'
import Home from './Home'
import TextForm from './Components/TextForm'
import About from './Components/About'
import {BrowserRouter as Router,  Route, Routes } from 'react-router'
import Navbar from './Components/Navbar'

const App = () => {
  



  return (
    <div>
       <Router>
        {/* <Navbar/> */}
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App