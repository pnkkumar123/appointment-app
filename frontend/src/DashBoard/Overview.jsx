import React from 'react'
import styled from 'styled-components'

function Overview() {
  const data = [
    {number:"24.4k",name:"Appointment",color:"blue"},
    {number:"166k",name:"Total Patients",color:"pink"},
    {number:"53.5k",name:"Clinic Consultating",color:"yellow"},
    {number:"28k",name:"Video Consulting",color:"green"},

  ]
  return (
    <Wrapper>
    <div>
       <div className="title">
        <h1>Good Morning Doctor gulati</h1>
      </div>
      <div className='maindiv'>
        {
          data.map((item,index)=>{
            return (
              <div key={index} style={{backgroundColor:`${item.color}`}} className='box'>
                <h3>{item.name}</h3>
                <span>{item.number}</span>

              </div>
            )
          })
        }
      </div>
      {/* patients overview */}
      <div>
        {/* appointment requests */}
        <div className="appointments">
          <h3>Appointment Request</h3>
          <span>View All</span>
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
.maindiv{
display:flex;
flex-direction:row;
gap:20px;
margin-left:10px;
}
.box{
height:100px;

width:200px;
border-radius:10px;
}
`
export default Overview