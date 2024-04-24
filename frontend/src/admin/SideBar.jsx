import React from 'react'
import { FaRegCalendarDays } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegClock,FaFacebookMessenger  } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { GrBlog } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import styled from 'styled-components';
import { MdGridView } from "react-icons/md";
import {NavLink} from 'react-router-dom';

function SideBar() {
  return (
    <Wrapper>
<div className="overview">
<NavLink style={{textDecoration:'none' ,color:'black'}} to='/dashboard'><MdGridView />
    <label style={{ marginLeft: '8px' }}>OverView</label>
    </NavLink>
</div>
<div className="calender">
<NavLink style={{textDecoration:'none' ,color:'black'}} to='/appointment'><FaRegCalendarDays />
    <label style={{ marginLeft: '8px' }}>Appointment</label>
    </NavLink>
</div>
<div className="patient">
<NavLink style={{textDecoration:'none' ,color:'black'}} to='patients'>
<CgProfile />
<label style={{ marginLeft: '8px' }}>My Patients</label>
</NavLink>
</div>
<div className="schedule">
<NavLink style={{textDecoration:'none' ,color:'black'}} to='/timing'>
<FaRegClock />
<label style={{ marginLeft: '8px' }} >Schedule Timings</label>
</NavLink>

</div>
<div className="payment">
<NavLink style={{textDecoration:'none' ,color:'black'}} to='/payment'>

<CiCreditCard1 />
<label style={{ marginLeft: '8px' }} htmlFor=''>Payments</label>
</NavLink>
</div>
<div className="message">
<NavLink style={{textDecoration:'none' ,color:'black'}} to='/message'>
<FaFacebookMessenger />
<label style={{ marginLeft: '8px' }} htmlFor=''>Message</label>
</NavLink>
</div>
<div className="blog">
<NavLink style={{textDecoration:'none' ,color:'black'}} to='/blog'>
<GrBlog />
<label style={{ marginLeft: '8px' }} htmlFor=''>Blog</label>
</NavLink>
</div>
<div className="settings">
<NavLink style={{textDecoration:'none' ,color:'black'}} to='/settings'>
<CiSettings />
<label style={{ marginLeft: '8px' }} htmlFor=''>Settings</label>
</NavLink>
</div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:column;
height:522px;
width:180px;
border-right:1px solid black;
.overview{
    margin-top:40px;
}
 .message{
    margin-top:40px;
    justify-content:space-between;
 }
 .payment{
    margin-top:40px;
 }
 .schedule{
    margin-top:40px;
 }
 .patient{
    margin-top:40px;
 }
 .settings{
    margin-top:40px;
 }
 .blog{
    margin-top:40px;
 }
 .calender{
    margin-top:40px;
 }
`
export default SideBar