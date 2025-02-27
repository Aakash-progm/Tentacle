// src/pages/ViewLists.js
import React, { useState, useEffect } from 'react';
import './ViewLists.css';

function ViewLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const savedLists = JSON.parse(localStorage.getItem('top10Lists')) || [];
    setLists(savedLists);
  }, []);

  return (
    <div className="view-lists-container">
      <h1>Saved Top 10 Lists</h1>
      {lists.length === 0 ? (
        <p>No lists found. Create one to get started!</p>
      ) : (
        <ul>
          {lists.map((list, index) => (
            <li key={index} className="list-item">
              <h2>{list.listName}</h2>
              <ol>
                {list.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewLists;
