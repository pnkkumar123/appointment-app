
import DashBoard from "./admin/DashBoard"
import { Route,Routes } from "react-router-dom"
import Home from "./admin/Home"
import NavBar from "./admin/NavBar"
import Services from "./admin/Services"
import Contact from "./admin/Contact"
import Login from "./admin/Login"
import SignUp from "./admin/SignUp"
import './App.css'
import Team from "./admin/Team"

function App() {
 

  return (
    <>
    <NavBar/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/dashboard" element={<DashBoard/>}/>
   <Route exact path="/services" element={<Services/>}/>
   <Route exact path="/team" element={<Team/>}/>
   <Route exact path="/contact" element={<Contact/>}/>
   <Route exact path="/login" element={<Login/>}/>
   <Route exact path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
