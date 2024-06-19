import React from 'react'
import styled from 'styled-components'

function Patients() {
  return (
    <Wrapper>
    <div>
      <div className="title">
        <h1>Good Morning Doctor gulati</h1>
      </div>
      <div className="view">
       <div className="count">
       <h2>Visitors for today</h2>
       <span>104</span>
       </div>
       <div className="patients">
        <div className="new">
          <h3 style={{marginLeft:"10px"}}>new patients</h3>
          <span style={{marginLeft:"10px"}}>44</span>
        </div>
        <div className="old">
          <h3 style={{marginLeft:"10px"}}>old patients</h3>
          <span style={{marginLeft:"10px"}}>44</span>
        </div>
       </div>
      </div>
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.title{
margin-left:10px;
}
.view{
background-color:#8fc5cc;
height:350px;
width:700px;
border-radius:10px;
margin-left:10px;
}
.count{
margin-left:10px;
}
.patients{
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
}
.new{
background-color:#b8cacc;
margin-left:10px;
height:100px;
width:200px;
border-radius:10px;

}
.old{
background-color:#b8cacc;
margin-right:10px;
height:100px;
width:200px;
border-radius:10px;
}
` 
export default Patients