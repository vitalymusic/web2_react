import './Card.css';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Karte = (props) => {
  
   // const [background, setBackground] = useState("");
   return (
      <Card >
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {props.nosaukums}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               {props.saturs}
            </Typography>
         </CardContent>
         <CardMedia
            sx={{ height: 140 }}
            image={props.attēls}
            title={props.nosaukums}
         />
      </Card>
   )


};




export default Karte;
