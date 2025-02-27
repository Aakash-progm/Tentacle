// src/pages/CreateList.js
import React, { useState } from 'react';
import './CreateList.css';

function CreateList() {
  const [listName, setListName] = useState('');
  const [items, setItems] = useState(Array(10).fill(''));

  // Handle changes in the list name
  const handleListNameChange = (e) => {
    setListName(e.target.value);
  };

  // Handle changes for each item in the list
  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  // Save list to local storage
  const handleSubmit = (e) => {
    e.preventDefault();

    const newList = {
      listName,
      items,
      timestamp: new Date().toISOString(),
    };

    // Get existing lists or start with an empty array
    const savedLists = JSON.parse(localStorage.getItem('top10Lists')) || [];
    savedLists.push(newList);

    // Save the updated lists back to local storage
    localStorage.setItem('top10Lists', JSON.stringify(savedLists));

    alert('List saved!');

    // Clear the form
    setListName('');
    setItems(Array(10).fill(''));
  };

  return (
    <div className="create-list-container">
      <h1>Create Your Top 10 List</h1>
      <form onSubmit={handleSubmit}>
        <label>List Name:</label>
        <input
          type="text"
          placeholder="Enter your list name"
          value={listName}
          onChange={handleListNameChange}
          required
        />

        {items.map((item, index) => (
          <div key={index}>
            <label>Item {index + 1}:</label>
            <input
              type="text"
              placeholder={`Enter item ${index + 1}`}
              value={item}
              onChange={(e) => handleItemChange(index, e.target.value)}
              required
            />
          </div>
        ))}

        <button type="submit">Save List</button>
      </form>
    </div>
  );
}

export default CreateList;
