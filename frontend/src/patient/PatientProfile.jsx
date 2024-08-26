import React from 'react'
import styled from 'styled-components'
import { CiUser } from "react-icons/ci";
function PatientProfile() {
  return (
    <Wrapper>
        <div className="head">
            <div className="profile">
            <CiUser size={80} style={{color:'green'}} />
                <span>name</span>
            </div>
            <div className="other">
                <div className="darkmode">
                    <h3>darkmode</h3>
                    <h3>edit</h3>
                </div>

            </div>
        </div>
        <hr/>
        <div className="body">
            <h3>appointments</h3>
            <h3>history</h3>
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
.head{
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
width:100%;

}
hr{
width:100%;
color:black;
}
.profile{
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
gap:10px;
}
.body{
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
gap:20px;
}


`
export default PatientProfile