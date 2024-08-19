import React, { useState } from 'react'
import styled from 'styled-components'

function Book() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    mobile:"",
    problem:"",
    appointment:""
  });
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);

  const handleInput=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})

  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      setLoading(true);
      setError(false);
      const res = await fetch("http://localhost:5000/book/booking",{
        method:"POST",
        headers:
        {"Content-Type" : "application/json",},
        body:
        JSON.stringify(formData)

      });
      const response = await res.json();
      setLoading(false)
      if(!response.ok){
        setError(true)|| "something went wrong"
      }

    }catch(error){
      setError("somehting went wrongS");
      console.log(error.message)
      setLoading(false);
    }

  }
  return (
    <Wrapper>
        <div className="bookingForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleInput} type="text" name="name" id="name" placeholder='name'/>
                <label htmlFor="mobile">Mobile</label>
                <input onChange={handleInput} type="number" name="mobile" id="mobile" placeholder='mobile' />
                <label htmlFor="email">Email</label>
                <input onChange={handleInput} type="email" name="email" id="email" placeholder='Email'/>

                <label htmlFor="problem">problem</label>

                <input onChange={handleInput} type="text" name="problem" id="problem" placeholder='problem' />
               
                <label htmlFor="date">Date</label>

                <input onChange={handleInput} type="datetime-local" name="appointment" id="appointment" />
                {error && <p>{error}</p>}
                 <input type="submit" disabled={loading} value="Submit" />
            </form>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`

display:flex;
flex-direction:column;
min-height:80vh;
align-items:center;
justify-content:center;
margin:auto;

label{
text-align:left;

}


form{
display:flex;
flex-direction:column;
box-shadow: 0 0 10px rgba(111, 222, 177, 0.3);
align-items:center;
justify-content:center;

}
form input[type="text"] , input[type="number"] , input[type="email"],input[type="datetime-local"]{
border-radius:5px;
width:250px;
text-align:center;
height:30px;
margin:20px;
}
form input[type="submit"]{
width:200px;
height:30px;
text-align:center
}



`
export default Book