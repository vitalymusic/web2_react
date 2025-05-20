import './Card.css';
import { useState } from "react";

const Card = (props) => {
   const [color, setColor] = useState("");
   const [fontsize, setFontSize] = useState("1rem");
   const [background, setBackground] = useState("");
   const [hidden, setHidden] = useState(false);

   const  hello = ()=>{
    setColor("red");
    setFontSize("2rem");
    setBackground("");
  }
  if(hidden === false){
      return (
   <div className="card" onClick={hello} style={{backgroundColor:props.background}}>
      <button onClick={()=>{
         setHidden(!hidden);
      }}>{hidden?"show image":"Hide Image"}</button>
      <h3 style={{backgroundColor:color,fontSize:fontsize}}>{props.nosaukums}</h3>
      <p>{props.saturs}</p>
      <img src={props.attēls} alt="ok" />
   </div>
)
            
   }else{
       return (
         <div className="card" onClick={hello} style={{backgroundColor:props.background}}>
         <button onClick={()=>{
         setHidden(!hidden);
      }}>{hidden?"show image":"Hide Image"}</button>
            <h3 style={{backgroundColor:color,fontSize:fontsize}}>{props.nosaukums}</h3>
            <p>{props.saturs}</p>
         </div>
)
   }

};




export default Card;
