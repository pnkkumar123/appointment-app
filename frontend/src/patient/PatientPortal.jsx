import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PatientProfile from './PatientProfile'

function PatientPortal() {
  return (
    <div>
      <Routes>
        <Route path='patientprofile' element={<PatientProfile/>}/>
        
      </Routes>
    </div>
  )
}

export default PatientPortal