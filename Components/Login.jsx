"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userOtp, setUserOtp] = useState('');
    const [otp, setOtp] = useState('');
  
    // Function to generate OTP
    const generateOTP = () => {

      const number = Math.floor(Math.random() * 1000000) + 1;  // 6 digit random number
      setOtp(number);

    };
  
    // API call to send OTP
    // Endpoint - /api/otp
    const api = async () => {
      
      //post request using axios to send OTP to the user registered mobile number.
      try {
        const response = await axios.post('/api/otp', {
          phoneNumber: phoneNumber, 
          otp: otp,
        });
        
        // if OTP is sent successfully, give a alert message to the user.
        alert("OTP sent successfully");
  
      } catch (error) {  // catch error if any error occurs during the API call.
        // console.error('Error during POST request:', error);
        alert("Error during OTP verification");
      }
    };
  
    // Function to handle Send OTP button
    const handleLogin = () => {
      // call generateOTP function to generate OTP
      generateOTP();
    };

    // Function to handle mobile number entered by the user
    const handleUserPhoneNumber = (e) => {
      // call generateOTP function to generate OTP
      setPhoneNumber(e.target.value);
    }

    // Function to handle OTP entered by the user
    const handleUserOtp = (e) => {
      // call generateOTP function to generate OTP
      setUserOtp(e.target.value);
    }
  
    // Function to verify OTP
    const verifyOtp = () => {

      // if OTP entered by the user is same as the OTP generated, give a alert message to the user.
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
        onChange={(e) => handleUserPhoneNumber(e)}  // call handleUserPhoneNumber function to handle mobile number entered by the user
      />

      {/* button to send OTP */}
      <button
      style={Styles.button}
      onClick={handleLogin}>
      Send OTP
      </button>

    </div>

    <div>

      <h2 style={Styles.h1}>Verify OTP</h2>
      <input
        style={Styles.input}
        type="tel"
        placeholder="Enter your otp"
        value={userOtp}
        onChange={(e) => handleUserOtp(e)}  // call handleUserOtp function to handle OTP entered by the user
      />

      {/* button to verify OTP */}
      <button 
      style={Styles.button}
      onClick={verifyOtp}>
      Verify
      </button>

    </div>
    
  </div>

    
  );
};

// There are the css styles used in the above component.
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
