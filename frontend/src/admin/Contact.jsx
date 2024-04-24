import React from 'react'
import styled from 'styled-components';

function Contact() {
  return (
  <Wrapper>
     
         <div className="wallpaper">
    <img src='./src/assets/image.jpg' alt="wallpaper" />
</div>
  <div className="headings">
  <h3>Get In Touch</h3>
    <h1>Contact Us</h1>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque.</h5>
  </div>
<div className="details">
  <div className="form">
    <form action="">
     <div className="detai">
    <div className='name'>
     <div className="firstName">
     <label htmlFor="">First Name</label>
    <input type="text" name="" placeholder='Enter your first name' id="" />
     </div>
    <div className="lastName">
    <label htmlFor="">Last Name</label>
      <input type="text" name="" placeholder='Enter your last name' id="" />
    </div>
    </div>
     <div className="contact">
     <div className="email">
     <label htmlFor="">Email</label>
     <input type="text" name="" placeholder='Enter your email' id="" />
     </div>
    <div className="phone">
    <label htmlFor="">Phone Number</label>
      <input type="text" name="" placeholder='Enter your phone number' id="" />
    </div>
     </div>
     </div>
     <div className="topic">
      <label htmlFor="">Choose a Topic</label>
     <select name="Select"  id="" >
      <option value="">Select an option</option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
     </select>
     </div>
     <div className="message">
      <label htmlFor="">Message</label>
      <input type="text" name="" id="" />
     </div>
    <div className="checkbox">
    <input type="checkbox" name="" id="" />
      <label htmlFor="">I accept the terms</label>
    </div>
   <div className="button">
  <button>Submit</button>
   </div>
   <div className="subscribe">
    <h5>Subscribe to Our NewsLetter</h5>
  <div className="inputSubscribe">
  <input type="text" name="" id="" />
    <button>Subscribe</button>
  </div>
   </div>
     
     
    </form>
  </div>
</div>

  </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:column;
margin:auto;
justify-items:center;
.headings{
  justify-items:center;
  margin:auto;
  display:flex;
  align-items:center;
  flex-direction:column;
}
.wallpaper img{
  height:500px;
  width:100%;
  border-radius:10px;
}
.details{
  display:flex;
  flex-direction:column;
  width:400px;
  margin:auto;
  justify-items:center;
  align-items:center;

}
.name{
display:flex;
flex-direction:row;
margin:10px;
width:100px;
gap:10px;
align-items:center;
}
.contact{
  display:flex;
flex-direction:row;
margin:10px;
width:100px;
gap:10px;
align-items:center;
}
.topic{
  margin-top:20px;
  gap:5px;
  display:flex;
  flex-direction:column;
}
.topic option{
  padding:8px;
  width:70px;
}
.message{
  display:flex;
  gap:5px;
  flex-direction:column;
  margin:auto;
  margin-top:20px;
}
.message input{
  height:150px;
  width:400px;
  border-radius:10px ;
}
.checkbox{
  margin-top:20px;
  display:flex;
  
}
.button{
display:flex;
flex-direction:column
justify-items:center;
align-items:center;
}
.button button{
  padding:10px;
  border-radius:6px;
  margin:auto;
  width:150px;
  background-color:darkgreen;
  color:white;
}
.subscribe{
  
  margin-top:20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-items:center;
  margin:auto;
}
.inputSubscirbe{
  gap:20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  margin:auto;
  justify-items:center;
}
.inputSubscribe input{
padding:10px;
hegiht:10px;
border-radius:10px;
}
.inputSubscribe button{
  padding:10px;
  width:80px;
  border-radius:10px;
  background-color:darkgreen;
  color:white;
}
`


export default Contact