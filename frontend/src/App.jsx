import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './Theme';
import Home from './admin/Home';
import NavBar from './admin/NavBar';
import Services from './admin/Services';
import Contact from './admin/Contact';
import Login from './admin/Login';
import SignUp from './admin/SignUp';
import Team from './admin/Team';
import Admin from './admin/Admin';
import AdminSidebar from './admin/AdminSidebar';
import Transactions from './admin/Transactions';
import Doctors from './admin/Doctors';
import Feedback from './admin/Feedback';
import SideBar from './admin/SideBar';
import DashBoardNavBar from './DashBoard/DashboardNavBar';
import Overview from './DashBoard/Overview';
import DashBoard from './admin/DashBoard'; // Adjusted this path
import Patients from './DashBoard/Patients';
import Timing from './DashBoard/Timing';
import Blog from './DashBoard/Blog';
import Payment from './DashBoard/Payment';
import Settings from './DashBoard/Settings';
import Appointment from './DashBoard/Appointment';
import Message from './DashBoard/Message';
import Book from './DashBoard/Book';
import AdminMain from './admin/AdminMain';
import PatientPortal from './patient/PatientPortal';
import PatientHistory from './patient/PatientHistory';
import PatientDiscuss from './patient/PatientDiscuss';
import PatientDashBoard from './patient/PatientDashBoard';
import PatientReports from './patient/PatientReports';
import PatientAppointments from './patient/PatientAppointments';
import PatientSignIn from './patient/PatientSignIn';
import PatientSignUp from './patient/PatientSignUp';
import PatientProfile from './patient/PatientProfile';
import PatientSidebar from './patient/PatientSidebar';

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  const isDashboardPage = location.pathname.startsWith('/dashboard');
  const isAdmin = location.pathname.startsWith('/admin');
const isPatient = location.pathname.startsWith('/portal');
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          {/* Render the correct navbar based on the route */}
          {isDashboardPage ? <DashBoardNavBar /> : <NavBar />}
          
          {/* Sidebar Layout */}
          <div className="container">
            {isAdmin && <AdminSidebar />}
            {isDashboardPage && <SideBar />}
            {isPatient && <PatientSidebar/>}

            {/* Main Routes */}
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/book" element={<Book />} />
                
                {/* Admin Routes */}
                {isAdmin && (
                  <>
                    <Route exact path="/admin/*" element={<Admin />} />
                    <Route exact path='/main' element={<AdminMain/>}/>
                    <Route exact path="/transactions" element={<Transactions />} />
                    <Route exact path="/doctors" element={<Doctors />} />
                    <Route exact path="/feedback" element={<Feedback />} />
                  </>
                )}

                {/* Dashboard Routes */}
                {isDashboardPage && (
                  <>
                    <Route exact path="/overview" element={<Overview />} />
                    <Route exact path="/dashboard/*" element={<DashBoard />} />
                    <Route exact path="/team" element={<Team />} />
                    <Route exact path="/patients" element={<Patients />} />
                    <Route exact path="/timing" element={<Timing />} />
                    <Route exact path="/blog" element={<Blog />} />
                    <Route exact path="/payment" element={<Payment />} />
                    <Route exact path="/settings" element={<Settings />} />
                    <Route exact path="/appointment" element={<Appointment />} />
                    <Route exact path="/message" element={<Message />} />
                  </>
                )}
                {
                    isPatient && (
                      <>
                      <Route exact path='/portal/*' element={<PatientPortal/>}/>
                      <Route exact path='/patientprofile' element={<PatientProfile/>}/>
                      <Route exact path='/patienthistory' element={<PatientHistory/>}/>
                      <Route exact path='/patientdiscuss' element={<PatientDiscuss/>}/>
                      <Route exact path='patientdashboard' element={<PatientDashBoard/>}/>
                      <Route exact path='/patientreports' element={<PatientReports/>}/>
                      <Route exact path='/patientappointment' element={<PatientAppointments/>}/>
                      </>
                    )
                }
                <Route exact path='/patientsignin' element={<PatientSignIn/>}/>
                <Route exact path='/patientsignup' element={<PatientSignUp/>}/>
              </Routes>
            </div>
          </div>
        </Wrapper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-direction: row;
  }

  .routes {
    flex: 1; /* Ensures the main content takes up the remaining space */
    padding: 20px;
  }

  /* Example styling to give the sidebar and main content some structure */
  .sidebar {
    width: 250px;
    background-color: #f4f4f4;
  }
`;

export default App;
