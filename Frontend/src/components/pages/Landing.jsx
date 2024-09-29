// src/components/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css'; // Import the new styles

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to AgroBot</h1>
        <p>Your AI-powered Agriculture encyclopedia</p>
        <div className="landing-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
