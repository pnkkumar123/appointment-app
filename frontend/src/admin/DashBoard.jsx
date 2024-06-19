import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';
import Services from './Services';
import Team from './Team';
import Contact from './Contact';
import Patients from '../DashBoard/Patients';
import Timing from '../DashBoard/Timing';
import Blog from '../DashBoard/Blog';
import Payment from '../DashBoard/Payment';
import Settings from '../DashBoard/Settings';
import Appointment from '../DashBoard/Appointment';
import Message from '../DashBoard/Message';
import Overview from '../DashBoard/Overview';

function Dashboard() {
  return (
    <Wrapper>
      
      <Routes>
        <Route path="overview" element={<Overview />} />
      
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="patients" element={<Patients />} />
        <Route path="timing" element={<Timing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="payment" element={<Payment />} />
        <Route path="settings" element={<Settings />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="message" element={<Message />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

export default Dashboard;
