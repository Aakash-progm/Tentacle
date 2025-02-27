// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CreateList from './Pages/CreateList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <img 
          src="https://via.placeholder.com/100" 
          alt="Tentacle Logo" 
          style={{ borderRadius: '50%', marginBottom: '20px' }}
        />
        <h1>Tentacle</h1>
        <p>Showcase your personality with your own Top 10 lists!</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-list" element={<CreateList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




