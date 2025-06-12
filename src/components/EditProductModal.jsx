import * as React from 'react';
import { useState,useEffect } from "react";
import  axios from 'axios'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductForm from './ProductForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditProductModal(props) {


  const [nosaukums, setNosaukums] = useState('');
  const [apraksts, setApraksts] = useState('');
  const [attels, setAttels] = useState('');
  const [cena, setCena] = useState('');
  const [id, setId] = useState('');

  const [formReady,setFormReady] = useState(false);


  // const handleOpen = () => setOpen(true);
  const handleClose = () => props.setModalFunc();
   
  useEffect(() => {
      if(props.open){
          getProductInfo(props.productId);
      }
      
  }, [props.open]);
  

  const getProductInfo = (productId)=>{
    // console.log(productId);
      axios.get(`http://localhost:8888/web2_api/public/products/${productId}`) // aizstāj ar savu URL
      .then(response => {
        // setProducts(response.data);
        // console.log(response.data[0]);

        setNosaukums(response.data[0].nosaukums);
        setApraksts(response.data[0].apraksts);
        setAttels(response.data[0].attels);
        setCena(response.data[0].cena);
        setId(response.data[0].id);
        setFormReady(true);

      })
      .catch(err => {
        console.log(err.message);
      });


  }

  return (
    <div>
      <Modal
        open={props.open}
        //open={getProductInfo(props.productId)}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Pievienot produktu
          </Typography>
          {formReady?
            <ProductForm  nosaukums={nosaukums} apraksts={apraksts} attels={attels} cena={cena} />
            :
            <>Loading data...</>
        }
        </Box>
      </Modal>
    </div>
  );
}
