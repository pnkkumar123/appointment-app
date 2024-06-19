import React from 'react'
import { FaRegCalendarDays } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegClock,FaFacebookMessenger  } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { GrBlog } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import styled from 'styled-components';
import { MdGridView } from "react-icons/md";
import {Link} from 'react-router-dom';

function SideBar() {
  return (
    <Wrapper>
<div className="overview">
<Link style={{textDecoration:'none' ,color:'black'}} to='/dashboard/overview'><MdGridView />
    <label style={{ marginLeft: '8px' }}>OverView</label>
    </Link>
</div>
<div className="calender">
<Link style={{textDecoration:'none' ,color:'black'}} to='/dashboard/appointment'><FaRegCalendarDays />
    <label style={{ marginLeft: '8px' }}>Appointment</label>
    </Link>
</div>
<div className="patient">
<Link style={{textDecoration:'none' ,color:'black'}} to='/dashboard/patients'>
<CgProfile />
<label style={{ marginLeft: '8px' }}>My Patients</label>
</Link>
</div>
<div className="schedule">
<Link style={{textDecoration:'none' ,color:'black'}} to='/dashboard/timing'>
<FaRegClock />
<label style={{ marginLeft: '8px' }} >Schedule Timings</label>
</Link>

</div>
<div className="payment">
<Link style={{textDecoration:'none' ,color:'black'}} to='/dashboard/payment'>

<CiCreditCard1 />
<label style={{ marginLeft: '8px' }} htmlFor=''>Payments</label>
</Link>
</div>
<div className="message">
<Link style={{textDecoration:'none' ,color:'black'}} to='/dashboard/message'>
<FaFacebookMessenger />
<label style={{ marginLeft: '8px' }} htmlFor=''>Message</label>
</Link>
</div>
<div className="blog">
<Link style={{textDecoration:'none' ,color:'black'}} to='/dashboard/blog'>
<GrBlog />
<label style={{ marginLeft: '8px' }} htmlFor=''>Blog</label>
</Link>
</div>
<div className="settings">
<Link style={{textDecoration:'none' ,color:'black'}} to='/dashboard/settings'>
<CiSettings />
<label style={{ marginLeft: '8px' }} htmlFor=''>Settings</label>
</Link>
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