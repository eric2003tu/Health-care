import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import DoctorPage from './DoctorPage';

const DoctorDashboard = () => {
  return (
    <div>
      <Routes>
      <Route index element = {<DoctorPage/>}/>
      </Routes>
    </div>
  )
}

export default DoctorDashboard
