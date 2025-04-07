
import React from 'react'
import './App.css'
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogedHome from './Components/LogedHome';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/login';
import Patient from './Components/Patient';
import DoctorDashboard from './Components/DoctorDashboard';


const App = () => {

  return (
<Router>

<Routes>
  <Route path='/' element= {<Home/>}/>
  <Route path='/patient/*' element ={<Patient/>}/>
  <Route path='/doctor/*' element={<DoctorDashboard/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>
    </Router>
  )
}

export default App
