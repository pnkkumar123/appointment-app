import React from 'react'
import styled  from 'styled-components'
function Team() {
  return (
    <Wrapper>
      <div className="title">
        <h1>Meet our Team Members</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo cum debitis in soluta autem.</h5>
        </div>
        <div className="services">
          <div className="service">

            <img src="./src/assets/team.webp" alt="" />
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
          <div className="service">
            <img src="./src/assets/team.webp" alt="" />
          
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
          <div className="service">
            <img src="./src/assets/team.webp" alt="" />
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
          <div className="service">
            <img src="./src/assets/team.webp" alt="" />
       
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
          <div className="service">
            <img src="./src/assets/team.webp" alt="" />
         
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
          </div>
          <div className="service">
            <img src="./src/assets/team.webp" alt="" />
         
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
            <span>Learn More</span>
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
.services{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:20px;
  margin-top: 20px;
  @media(max-width:1024px) and (min-width:768px){
    grid-template-columns:repeat(2,1fr);
  }
  @media (max-width:768px) and(min-width:480px){
    grid-template-columns:repeat(2,1fr);
  }
  @media(max-width:480px){
    grid-template-columns:repeat(1,1fr);
  }


}
.service{
  width:200px;
  height:400px;
  background-color:white;
  display:flex;
    flex-direction:column;
  border-radius:10px;
  align-items:center;
  justify-items:center;
  margin:auto;
 
}
.service img{

  width::100%;
  height:250px;
  border-radius:50%;
}
`
export default Team;