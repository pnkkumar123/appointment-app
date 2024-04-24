import React from 'react'
import styled from 'styled-components'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

function Client() {
   
  return (
    <Wrapper>
        <div className="title">
        <h1>What Our client Say</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo cum debitis in soluta autem.</h5>
        </div>
      
       <div className="card">
        <div className="service">
            <img src="./src/assets/OIG4.jpeg" alt="" />
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
        <div className="service">
            <img src="./src/assets/OIG4.jpeg" alt="" />
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
        <div className="service">
            <img src="./src/assets/OIG4.jpeg" alt="" />
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
        <div className="service">
            <img src="./src/assets/OIG4.jpeg" alt="" />
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
        <div className="service">
            <img src="./src/assets/OIG4.jpeg" alt="" />
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
        </div>
        <div className="subscribe">
    <h5>Subscribe to Our NewsLetter</h5>
  <div className="inputSubscribe">
  <input type="text" name="" id="" />
    <button>Subscribe</button>
  </div>
   </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.title{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-items:center;
  margin:auto;
}
.card{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    gap:20px;
    overflow-x:auto;
}
.service{
    width:300px;
    height:360px;
    background-color:white;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    align-items:center;
    justify-items:center;
    margin:auto;
   
  }
  .service img{
  
    width::250px;
    height:250px;
    border-radius:50%;
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


export default Client