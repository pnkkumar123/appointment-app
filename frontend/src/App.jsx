
import DashBoard from "./admin/DashBoard"
import { Route,Routes,useLocation } from "react-router-dom"
import Home from "./admin/Home"
import NavBar from "./admin/NavBar"
import Services from "./admin/Services"
import Contact from "./admin/Contact"
import Login from "./admin/Login"
import SignUp from "./admin/SignUp"
import './App.css'
import Team from "./admin/Team"
import Message from "./DashBoard/Message"
import Blog from "./DashBoard/Blog"
import Payment from "./DashBoard/Payment"
import Settings from "./DashBoard/Settings"
import Appointment from "./DashBoard/Appointment"
import Patients from "./DashBoard/Patients"
import Timing from "./DashBoard/Timing"

import styled from "styled-components"
import { ThemeProvider } from "@mui/material"
import { ColorModeContext,useMode } from "./Theme"
import Overview from "./DashBoard/Overview"
import SideBar from "./admin/SideBar"
import DashBoardNavBar from "./DashBoard/DashboardNavBar"
import Book from "./DashBoard/Book"
function App() {
 const [theme,colorMode] = useMode()
 const location = useLocation();
 const isDashboardPage = location.pathname.startsWith("/dashboard");


  return (
  <ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
      <Wrapper>
   {isDashboardPage ? (<DashBoardNavBar/>):(<NavBar/>)}
    <div className="routes">
    {isDashboardPage ? (<SideBar/>) : ""}

   <Routes>
    <Route exact path="/" element={<Home/>}/>
    {
      isDashboardPage && (
        <>
        
        <Route exact path="/overview" element={<Overview/>}/>
        <Route exact path="dashboard/*" element={<DashBoard/>}/>
   <Route exact path="/team" element={<Team/>}/>
   <Route exact path="/patients" element={<Patients/>}/>
   <Route exact path="/timing" element={<Timing/>}/>
   <Route exact path="/blog" element={<Blog/>}/>
   <Route exact path="/payment" element={<Payment/>}/>
   <Route exact path="/settings" element={<Settings/>}/>
   <Route exact path="/appointment" element={<Appointment/>}/>
   <Route exact path="/message" element={<Message/>}/>
        </>
      )
    }
    <Route exact path="/book" element={<Book/>}/>
    
   <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/services" element={<Services/>}/>
   <Route exact path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>
    </Wrapper>
  </ThemeProvider>
  </ColorModeContext.Provider>
  )
}
const Wrapper =styled.div`
.routes{
display:flex;
align-items:center;
justify-items:center;
}
`
export default App
