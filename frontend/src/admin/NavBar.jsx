import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
  return (
    <Navbar>
      <div className='title'>
        <NavLink style={{textDecoration:'none',color:'white'}} to='/'>  <h1 >Health Care</h1></NavLink>
      </div>
      <div className="links">
        <li><NavLink style={{textDecoration:'none',color:"white"}} to='/dashboard'>DashBoard</NavLink></li>
        <li><NavLink style={{textDecoration:'none',color:"white"}} to='/services'>Services</NavLink></li>
        <li><NavLink style={{textDecoration:'none',color:"white"}} to='/contact'>Contact Us</NavLink></li>
        
        
      </div>
      <div className="sign">
      <li><NavLink style={{textDecoration:'none',color:"white"}} to='/signup'>Sign Up</NavLink></li>
        <li><NavLink style={{textDecoration:'none',color:"white",padding:"20px",backgroundColor:"blue",borderRadius:"6px"}} to='/login'>Login</NavLink></li>
      </div>
    </Navbar>
  )
}
const Navbar = styled.div`
background-color:darkgreen;
color:white;
 display:flex;
 flex-direction:row;
 height:90px;
 border-radius:10px;
 width:100%; 
 justify-content:space-between;

.title h1 {
  top:0;
  height:50px;
}
.links{
  list-style:none;
  display:flex;
  align-items:center;
  margin:auto;
  margin:20px;
  gap:20px;
  flex-direction:row;
}
.sign{
  list-style:none;
  display:flex;
  align-items:center;
  margin:auto;
  margin:20px;
  gap:30px;
  flex-direction:row;
}
`;


export default NavBar