import React, { useState } from 'react';
import { FormWrapper, Email, Password } from 'react-smartest-form';

const LoginForm = () => {
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form submission
  const handleSubmit = (data) => {
    console.log('Submitted Data:', data); // Logs the submitted form data
    setSubmittedData(data);

    // Simulating a successful login response (no backend)
    setTimeout(() => {
      console.log('Login successful!');
      alert('Login successful!');
    }, 1000); // Simulate a 1-second delay (mock API call)
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Login</h1>
      <FormWrapper onSubmit={handleSubmit} className="login-form">
        <Email
          name="email"
          placeholder="Enter your email"
          errorMessage="Please enter a valid email address"
          style={styles.input}
        />
        <Password
          name="password"
          placeholder="Enter your password"
          minLength={6}
          errorMessage="Password must be at least 6 characters"
          style={styles.input}
          showStrengthIndicator
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </FormWrapper>
      {submittedData && (
        <div style={styles.submittedData}>
          <h2>Submitted Data:</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '40px',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '14px',
    margin: '12px 0',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '18px',
    marginTop: '25px',
    transition: 'background-color 0.3s ease',
  },
  submittedData: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};

export default LoginForm;
