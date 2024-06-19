import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Wrapper>

    
    <div className='container'>
      <form action="" className="form">
        <label htmlFor="">Email</label>
        <input className='input' type="email" placeholder='Email' />
        <label htmlFor="">Password</label>
        <input className='input' type="password" placeholder='Password'/>
        <input type="submit" value="Submit" />
      </form>
   
    </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
background-size:cover;
background-positon:center;
min-height:80vh;
margin:auto;
justify-items:center;
align-items:center;
.container{
margin-top:20px;
padding:20px;
border-radius:8px;
box-shadow:0 0 10px rgba(111,222,177,0.3);
width:600px;
display:flex;
flex-direction:column;
align-items:center;
}
.form{
display:flex;
flex-direction:column;
gap:20px;
}
.input{
padding:10px;
box-shadow:0 0 10px rgba (111,222,177,0.3);
border:1px solid #ccc;
border-radius:4px;
}
.button{
padding:10px;
background-color:#007bff;
color:#fff;
border:none;
border-radius:4px;

&:disabled{
opacity:0.8;
cursor:not-allowed;
}
}
`
export default Login