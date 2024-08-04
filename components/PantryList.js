// components/PantryList.js
import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs } from "firebase/firestore";
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const PantryList = ({ setEditItem }) => {
  const [items, setItems] = useState([]);
  const itemsCollectionRef = collection(db, 'items');

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemsCollectionRef);
      setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <ListItemText primary={item.name} />
          <IconButton edge="end" aria-label="edit" onClick={() => setEditItem(item)}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default PantryList;
