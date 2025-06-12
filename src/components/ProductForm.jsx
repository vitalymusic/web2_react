import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from 'axios';

const ProductForm = (props) => {
  const [formData, setFormData] = useState({
    nosaukums: props.nosaukums,
    apraksts: props.apraksts,
    cena: props.cena,
    attels: props.attels,
    id:props.id
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const  handleSubmit = async (e) => {
    e.preventDefault();

    // console.log('Formas dati:', formData);

     const data = new FormData();
      data.append('nosaukums', formData.nosaukums);
      data.append('apraksts', formData.apraksts);
      data.append('cena', formData.cena);
      data.append('attels', formData.attels);

     try {
      let response;

        if(props.id === ""){
        response = await axios.post('http://localhost:8888/web2_api/public/products/create', data);
        }
        else{
          response = await axios.post(`http://localhost:8888/web2_api/public/products/update/${props.id}`, data);

        }

        console.log('Atbilde:', response.data);
        alert('Produkts veiksmīgi pievienots!');
    } catch (error) {
        console.error('Kļūda:', error);
        alert('Neizdevās pievienot produktu!');
    }


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
