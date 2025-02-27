// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import CreateList from './Pages/CreateList';
import ViewLists from './Pages/ViewLists';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-list" element={<CreateList />} />
          <Route path="/view-lists" element={<ViewLists />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




