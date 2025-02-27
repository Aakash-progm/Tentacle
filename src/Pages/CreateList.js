// src/pages/CreateList.js
import React, { useState } from 'react';
import './CreateList.css';

function CreateList() {
  const [listName, setListName] = useState('');
  const [items, setItems] = useState(Array(10).fill(''));
  const [confirmation, setConfirmation] = useState('');

  const handleListNameChange = (e) => {
    setListName(e.target.value);
  };

  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!listName.trim() || items.some((item) => !item.trim())) {
      setConfirmation('Please fill out all fields.');
      return;
    }

    const newList = {
      listName,
      items,
      timestamp: new Date().toISOString(),
    };

    const savedLists = JSON.parse(localStorage.getItem('top10Lists')) || [];
    savedLists.push(newList);

    localStorage.setItem('top10Lists', JSON.stringify(savedLists));

    setConfirmation('List saved successfully!');
    setListName('');
    setItems(Array(10).fill(''));

    setTimeout(() => setConfirmation(''), 3000); // Auto-hide message after 3 seconds
  };

  return (
    <div className="create-list-container">
      <h1>Create Your Top 10 List</h1>
      {confirmation && <p className="confirmation">{confirmation}</p>}
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

