import React from 'react';
import './Card.css';
import { useState } from "react";
import Card from '@mui/material/Card';
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
      <Card >
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {props.nosaukums}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               {props.saturs}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.primary' }}>
               {props.cena} &eur;
            </Typography>
         </CardContent>
         <CardMedia
            sx={{ height: 140 }}
            image={props.attēls}
            title={props.nosaukums}
         />
         <button data-id={props.id} onClick={handleOpenModal}>Redigēt</button>
      </Card>

       <EditProductModal open={openModal} setModalFunc={closeModal} productId={props.id}/>
       </>   
   )


};


export default Karte;
