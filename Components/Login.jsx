"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userOtp, setUserOtp] = useState('');
    const [otp, setOtp] = useState('');
  
    const generateOTP = () => {
      const number = Math.floor(Math.random() * 1000000) + 1;
      console.log("This is the random number " + number);
      setOtp(number);
    };
  
    const api = async () => {
      try {
        const response = await axios.post('/api/otp', {
          phoneNumber: phoneNumber,
          otp: otp,
        });
  
        alert("OTP sent successfully");
  
      } catch (error) {
        console.error('Error during POST request:', error);
        alert("Error during OTP verification");
      }
    };
  
    const handleLogin = () => {
      console.log(`User logged in with phone number: ${phoneNumber}`);
      generateOTP();
    };
  
    const verifyOtp = () => {
     
    //   Add your OTP verification logic here
      if (otp == userOtp) {
        alert("OTP Verified");
      } else {
        alert("OTP Not Verified");
      }
    };
  
    // useEffect to trigger the API call after OTP is generated
    useEffect(() => {
      if (otp) {
        api();
      }
    }, [otp]);

  return (
    <div style={Styles.container} >

    <div>
      <h2 style={Styles.h1}>Login with Mobile Number</h2>
      <input
        style={Styles.input}
        type="tel"
        placeholder="Enter your mobile number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button style={Styles.button} onClick={handleLogin}>Send OTP</button>
    </div>
    <div>
        <h2 style={Styles.h1}>Verify OTP</h2>
      <input
        style={Styles.input}
        type="tel"
        placeholder="Enter your otp"
        value={userOtp}
        onChange={(e) => setUserOtp(e.target.value)}
      />
      <button style={Styles.button} onClick={verifyOtp}>Verify</button>
    </div>
    </div>

    
  );
};


const Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    width: '50%',
    height: '50%',
    padding: '40px ',
    border: '2px solid blue',
    // text color
    color: 'blue',
    
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px',
  },
  button: {
    width: '100%',
    padding: '10px',
    margin: '10px',
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },

  h1: {
    textAlign: 'center',
    textDecoration: 'underline',
    fontSize: '20px',
  },
};

export default LoginForm;
