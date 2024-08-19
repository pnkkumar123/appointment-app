// SignUpLogic.js
import React, { useState } from 'react';
import SignUp from './SignUp';

function SignUpLogic() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e,formData) => {
        setLoading(true);
        setError(null);
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/sign/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setLoading(false);

            if (!data.success) {
                setError('Signup failed. Please try again.');
                return;
            }

            // Handle successful signup, e.g., redirect or show a success message
            console.log('Signup successful:', data);

        } catch (e) {
            console.error('Error during signup:', e);
            setError('An error occurred during signup.');
            setLoading(false);
        }
    };

    return (
        <div>
            <SignUp handleSubmit={handleSubmit} loading={loading} error={error} />
        </div>
    );
}

export default SignUpLogic;
