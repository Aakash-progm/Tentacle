// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Tentacle</h1>
      <p>Showcase your personality with your own Top 10 lists!</p>
      <button onClick={() => navigate('/create-list')}>
        Create Your List
      </button>
    </div>
  );
}

export default Home;

