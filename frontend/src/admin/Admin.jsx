import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminMain from './AdminMain'
import Doctors from './Doctors'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'

function Admin() {
  return (
    <Wrapper>
      <Routes>
        <Route path='doctors' element={<Doctors/>}/>
     <Route path='main' element={<AdminMain/>}/>
      </Routes>
       
     
        
       
    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

`
export default Admin