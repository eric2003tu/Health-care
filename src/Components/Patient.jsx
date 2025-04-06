import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import LogedHome from './LogedHome';
import Doctor from './doctor';

const Patient = () => {
  return (
    <div>
        <Routes>
        <Route index element = {<LogedHome/>}/>
        <Route path ='findDoctors' element = {<Doctor/>}/>
    </Routes>
    </div>
  )
}

export default Patient
