import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CategoryForm.css';

function CategoryForm({ category }) {
  const [image, setImage] = useState('');
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
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
        image,
        dishName,
        description,
        dishPrice,
      });
      console.log(`New ${category} added:`, response.data);
      setImage('');
      setDishName('');
      setDescription('');
      setDishPrice('');
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/${category}/${id}`);
      fetchItems();  // Fetch the updated list after deleting an item
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div id="cat" style={{backgroundColor:'black',height:'200vh'}}>
      <h2 id="clh">Add New {category} Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="catform">
          <label htmlFor="image" style={{color:'white'}}>Image:</label>
          <input
            
            type="text"
            id="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <div className="catform">
          <label htmlFor="dishName" style={{color:'white'}}>Dish Name:</label>
          <input
            type="text"
            id="text"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            required
          />
        </div>
        <div className="catform">
          <label htmlFor="dishPrice" style={{color:'white'}}>Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="catform">
          <label htmlFor="dishPrice" style={{color:'white'}}>Dish Price:</label>
          <input
            type="number"
            id="price"
            value={dishPrice}
            onChange={(e) => setDishPrice(e.target.value)}
            required
          />
        </div>
        <button id="adbt" type="submit">Add Item</button>
      </form>

      <h2 id="clh">Existing {category} Items</h2>
      <ul id="ulct">
        {items.map((item) => (
          <li id="lict" key={item.id}>
            <img id="imct" src={item.image}/> -- {item.dishName} -- {item.description} -- ₹{item.dishPrice}
            <button style={{backgroundColor:'#367c37',color:'white'}}onClick={() => handleDelete(item.id)}>Delete</button> {/* Delete button for each item */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryForm;
