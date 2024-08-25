import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminMain from './AdminMain'
import Doctors from './Doctors'
import styled from 'styled-components'

function Admin() {
  return (
    <Wrapper>
        <div className="sidebar">
      
        </div>
        <div className="main">
          <AdminMain/>
          <Doctors/>
        </div>
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