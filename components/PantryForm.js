// components/PantryForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { db } from '../lib/firebase';
import { collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

const PantryForm = ({ editItem, setEditItem }) => {
  const [item, setItem] = useState(editItem ? editItem.name : '');
  const itemsCollectionRef = collection(db, 'items');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editItem) {
      const itemDoc = doc(db, 'items', editItem.id);
      await updateDoc(itemDoc, { name: item });
      setEditItem(null);
    } else {
      await addDoc(itemsCollectionRef, { name: item });
    }

    setItem('');
  };

  const handleDelete = async (id) => {
    const itemDoc = doc(db, 'items', id);
    await deleteDoc(itemDoc);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={item}
        onChange={(e) => setItem(e.target.value)}
        label="Item Name"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        {editItem ? 'Update' : 'Add'}
      </Button>
    </form>
  );
};

export default PantryForm;
