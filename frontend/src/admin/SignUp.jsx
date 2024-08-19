import React, { useState } from "react";
import styled from "styled-components";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "", // Fixed the inconsistency here
        password: "",
        mobile: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(false);

            const res = await fetch('http://localhost:5000/sign/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            setLoading(false);

            if (!res.ok) {
                setError(data.error || "Something went wrong");
                return;
            }

            alert("User created successfully");

        } catch (e) {
            setError("Error occurred while submitting the form");
            setLoading(false);
        }
    }

   
    return (
        <Wrapper>
            <div className="container">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={handleInputChange}
                        className="input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleInputChange}
                        className="input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleInputChange}
                        className="input"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        
                    />
                    <label htmlFor="number">Mobile</label>
                    <input
                        onChange={handleInputChange}
                        className="input"
                        type="number"
                        name="mobile"
                        id="mobile"
                        placeholder="Mobile"
                        
                    />
                    <label htmlFor="userName">User Name</label>
                    <input
                        onChange={handleInputChange}
                        className="input"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input
                        className="button"
                        type="submit"
                        value="Submit"
                        disabled={loading}
                    />
                </form>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
background-size:cover;
background-position:center;
min-height:80vh;
display:flex;
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

;

export default SignUp;
