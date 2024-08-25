import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
  return (
    <Navbar>
      <div className='title'>
        <NavLink style={{textDecoration:'none',color:'darkgreen'}} to='/'>  <img src="./src/assets/green.jpg" alt="" /></NavLink>
      </div>
      <div className="links">
        <li><NavLink style={{textDecoration:'none',color:"darkgreen"}} to='/dashboard'>DashBoard</NavLink></li>
        <li><NavLink style={{textDecoration:'none',color:"darkgreen"}} to='/services'>Services</NavLink></li>
        <li><NavLink style={{textDecoration:'none',color:"darkgreen"}} to='/contact'>Contact Us</NavLink></li>
        
        
      </div>
      <div className="sign">
      <li><NavLink style={{textDecoration:'none',color:"darkgreen"}} to='/signup'>Sign Up</NavLink></li>
        <li><NavLink style={{textDecoration:'none',color:"darkgreen",padding:"20px",backgroundColor:"blue",borderRadius:"6px"}} to='/login'>Login</NavLink></li>
      </div>
    </Navbar>
  )
}
const Navbar = styled.div`
background-color:white;
color:darkgreen;
 display:flex;
 flex-direction:row;
 align-items:center;
 height:90px;
 
 width:100%; 
 justify-content:space-between;

.title img {
  top:0;
  height:90px;
  width:120px;
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