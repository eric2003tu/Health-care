
import React from 'react'
import './App.css'
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogedHome from './Components/LogedHome';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/login';
import Doctor from './Components/doctor';


const App = () => {

  return (
<Router>

<Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/home' element ={<LogedHome/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/doctor' element={<Doctor/>}/>
</Routes>
    </Router>
  )
}

export default App
