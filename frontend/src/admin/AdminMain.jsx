import React from 'react'
import styled from 'styled-components'
import { useGetDoctorQuery } from '../redux/slice/DoctorSlice'

function AdminMain() {
  const {data,isFetching,error}=useGetDoctorQuery();
  if(isFetching)return <div><img src="./src/assets/green.jpg" alt="green" style={{display:'block',height:'400px',width:'800px',alignItems:'center',justifyContent:'center'}} /></div>
  const{doctors}=data;
  console.log(doctors.length);
  const datas = [
    {number:`${doctors.length}`,name:"Doctors",color:"lightgreen"},
    {number:"166k",name:"Total Patients",color:"pink"},
    {number:"53.5k",name:"Trasactions",color:"yellow"},
    {number:"28k",name:"Feedbacks",color:"green"},

  ]
  const time = ()=>{
    const date=new Date();
    const hour = date.getHours();

    if(hour<12){
      return{ greeting:"good morning"};
    }else if(hour<16){
      return "good afternoon";
    }else {
      return "good night";
    }
    
  }
  return (
    <Wrapper>
    <div>
       <div className="title">
        <h1>{time()} Admin</h1>
      </div>
      <div className='maindiv'>
        {
          datas.map((item,index)=>{
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
export default AdminMain