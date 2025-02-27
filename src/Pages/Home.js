// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <p>"Connect, Share, and Celebrate Your Top 10!"</p>
      <button onClick={() => navigate('/create-list')}>
        Create Your List
      </button>
    </div>
  );
}

export default Home;

