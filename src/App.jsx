
import React from 'react'
import './App.css'
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogedHome from './Components/LogedHome';
import Home from './Components/Home';
import Signup from './Components/Signup';


const App = () => {

  return (
<Router>

<Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/home' element ={<LogedHome/>}/>
  <Route path='/signup' element={<Signup/>}/>
</Routes>
    </Router>
  )
}

export default App
