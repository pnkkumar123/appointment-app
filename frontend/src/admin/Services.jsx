import React from 'react';
import styled from 'styled-components';

function Services() {
  return (
    <Wrapper>
      <div className="title">
        <h1>Services We Provide</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illo cum debitis in soluta autem.</h5>
      </div>
      <div className="services">
        <div className="service">
          <img src="./src/assets/dentist.jpg" alt="Dental Treatment" />
          <h3>Dental Treatment</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
          <span>Learn More</span>
        </div>
        <div className="service">
          <img src="./src/assets/dentist.jpg" alt="Dental Treatment" />
          <h3>Dental Treatment</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
          <span>Learn More</span>
        </div>
        <div className="service">
          <img src="./src/assets/dentist.jpg" alt="Dental Treatment" />
          <h3>Dental Treatment</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
          <span>Learn More</span>
        </div>
        <div className="service">
          <img src="./src/assets/dentist.jpg" alt="Dental Treatment" />
          <h3>Dental Treatment</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
          <span>Learn More</span>
        </div>
        <div className="service">
          <img src="./src/assets/dentist.jpg" alt="Dental Treatment" />
          <h3>Dental Treatment</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
          <span>Learn More</span>
        </div>
        <div className="service">
          <img src="./src/assets/dentist.jpg" alt="Dental Treatment" />
          <h3>Dental Treatment</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nesciunt.</p>
          <span>Learn More</span>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
  margin: auto;
  padding: 0 20px;

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .service {
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

export default Services;
