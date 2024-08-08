import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CategoryForm({ category }) {
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch items when the component mounts
    fetchItems();
  }, [category]);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/${category}`);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8080/api/${category}`, {
        dishName,
        dishPrice,
      });

      console.log(`New ${category} added:`, response.data);

      // Clear the form fields
      setDishName('');
      setDishPrice('');

      // Fetch the updated list of items
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h2>Add New {category} Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dishName">Dish Name:</label>
          <input
            type="text"
            id="dishName"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dishPrice">Dish Price:</label>
          <input
            type="number"
            id="dishPrice"
            value={dishPrice}
            onChange={(e) => setDishPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>

      <h3>Existing {category} Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.dishName} - ${item.dishPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryForm;
