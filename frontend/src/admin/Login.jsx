import React, { useState } from 'react';
import styled from 'styled-components';

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // Update to store error message
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(""); // Clear any previous errors

      const res = await fetch('http://localhost:5000/sign/signin', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      // Check for error response
      if (!res.ok) {
        setError(data.error || "An error occurred while signing in.");
        return;
      }

      // Success message or redirect logic here
      alert("Signed in successfully!");

    } catch (e) {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className='container'>
        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            onChange={handleInputChange}
            className='input'
            type="email"
            placeholder='Email'
            id='email'
            name='email'
            value={formData.email}
          />
          <label>Password</label>
          <input
            onChange={handleInputChange}
            className='input'
            type="password"
            placeholder='Password'
            id='password'
            name='password'
            value={formData.password}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error */}
          <input
            disabled={loading}
            className='button'
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  margin: auto;
  justify-items: center;
  align-items: center;

  .container {
    margin-top: 20px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(111, 222, 177, 0.3);
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input {
    padding: 10px;
    box-shadow: 0 0 10px rgba(111, 222, 177, 0.3);
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;

    &:disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
`;

export default Login;
