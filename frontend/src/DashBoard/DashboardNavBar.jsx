import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaBell, FaMessage } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function DashBoardNavBar() {
  return (
    <Wrapper>
    <div className='logo'>
       <NavLink to='/'>
       <div>
            <img src="./src/assets/green.jpg" alt="" />
        </div>
       </NavLink>
       <nav className='navitems'>
        <input type="search" name="" id="" style={{width:"200px",height:"20px",borderRadius:"10px"}} />
        <FaSearch className='search' size={20}/>
       </nav>
    </div>
  <div className='navtwo'>
  <div className='icons'>
      <FaBell/>
      <FaMessage/>
    </div>
      <div className='profile'>
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height={60} width={60} style={{borderRadius:"50%"}} />
        <span>Name</span>
      </div>
  </div>
    </Wrapper>
  )
}
const Wrapper= styled.div`
display:flex;
height:90px;
background-color:white;
align-items:center;
flex-direction:row;
justify-content:space-between;
.logo{
display:flex;
flex-direction:row;
justify-content:space-between;
gap:400px;
}
.logo img{
width:120px;
height:90px;
}
.navitems{
display:flex;
flex-direction:row;
align-items:center;
gap:10px;

}
.navitems .search:hover{
cursor:pointer;
}
.profile{
display:flex;
flex-direction:row;
}
.navtwo{
display:flex;
flex-direction:row;
align-items:center;
gap:40px;

}
.icons{
gap:5px;
}
`
export default DashBoardNavBar;