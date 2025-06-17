import React from 'react';
import './Card.css';
import { useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditProductModal from '../EditProductModal';




const Karte = (props) => {
  const [openModal, setOpenModal] = useState(false);
   

  let handleOpenModal = (e)=>{
      let id = e.target.dataset.id;
      setOpenModal(true);
      // alert(id);
  }
let closeModal = ()=>{
   setOpenModal(false)
}

   // const [background, setBackground] = useState("");
   return (
      <>
      <Card sx={{width:'300px',height:'350px'}} >
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {props.nosaukums}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               {props.saturs}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
               {props.cena} &#8364;
            </Typography>
         </CardContent>
         <CardMedia
            sx={{ height: 140 }}
            image={props.attēls}
            title={props.nosaukums}
         />
         <Button data-id={props.id} onClick={handleOpenModal} variant="contained" sx={{display: 'block', margin: 'auto',marginBottom:'10px',marginTop:'10px'}}>Redigēt</Button>
      </Card>

       <EditProductModal open={openModal} setModalFunc={closeModal} productId={props.id} mainWindowRefresh={props.refresh}/>
       </>   
   )


};


export default Karte;
