import React, { useEffect, useState } from 'react';
import { useGetDoctorQuery } from '../redux/slice/DoctorSlice';
import styled from 'styled-components';

function Doctors() {
  const { data, isFetching, error } = useGetDoctorQuery();
  const [visibleItems, setVisibleItems] = useState(6);

  // Infinite scrolling logic
  const loadMoreItems = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setVisibleItems((prev) => prev + 6);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', loadMoreItems);
    return () => window.removeEventListener('scroll', loadMoreItems);
  }, []);

  // Slice the data to only show the current visible items
  const displayedDoctors = data?.doctors?.slice(0, visibleItems) || [];

  return (
    <Wrapper>
      <div className='container'>
        {displayedDoctors.map((item, index) => {
          const { name, mobile, qualification } = item;
          return (
            <div key={index} className='card'>
              <img src="" alt="" />
              <h2>{name}</h2>
              <span>{mobile ? mobile : ""}</span>
              <span>{qualification ? qualification : ""}</span>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .container {
    display: flex;
    flex-direction: column; /* Ensures cards are stacked vertically */
    gap: 20px; /* Space between cards */
    width: 100%;
    max-width: 1200px; /* Optional: limit the width of the container */
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%; /* Make each card take full width of container */
    max-width: 300px; /* Optional: limit the width of each card */
    margin: auto; /* Center cards horizontally within the container */
  }

  .card img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }

  span {
    display: block;
    margin-bottom: 4px;
    color: #555;
  }
`;

export default Doctors;

