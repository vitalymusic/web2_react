import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    nosaukums: '',
    apraksts: '',
    cena: '',
    attels: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formas dati:', formData);

    
    // Te vari sūtīt datus uz serveri ar axios/fetch
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, m: 'auto', mt: 4 }}
    >
      <Typography variant="h5" align="center">Produkta forma</Typography>

      <TextField
        label="Nosaukums"
        name="nosaukums"
        value={formData.nosaukums}
        onChange={handleChange}
        required
      />

      <TextField
        label="Apraksts"
        name="apraksts"
        value={formData.apraksts}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />

      <TextField
        label="Cena (€)"
        name="cena"
        type="number"
        value={formData.cena}
        onChange={handleChange}
        required
      />

      <TextField
        label="Attēla URL"
        name="attels"
        value={formData.attels}
        onChange={handleChange}
      />

      <Button type="submit" variant="contained" color="primary">
        Saglabāt
      </Button>
    </Box>
  );
};

export default ProductForm;
