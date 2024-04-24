
import DashBoard from "./admin/DashBoard"
import { Route,Routes } from "react-router-dom"
import Home from "./admin/Home"
import NavBar from "./admin/NavBar"
import Services from "./admin/Services"
import Contact from "./admin/Contact"
import Login from "./admin/Login"
import SignUp from "./admin/SignUp"


function App() {
 

  return (
    <>
    <NavBar/>
   <Routes>
    <Route exact path="/" element={<DashBoard/>}/>
   <Route exact path="/services" element={<Services/>}/>
   <Route exact path="/contact" element={<Contact/>}/>
   <Route exact path="/login" element={<Login/>}/>
   <Route exact path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
