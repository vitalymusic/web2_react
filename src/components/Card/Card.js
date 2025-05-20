import './Card.css';
import { useState } from "react";

const Card = (props) => {
   const [color, setColor] = useState("");
   const [fontsize, setFontSize] = useState("1rem");

   const  hello = ()=>{
    setColor("red");
    setFontSize("2rem");
  }


return (
   <div className="card" onClick={hello}>
      <h3 style={{backgroundColor:color,fontSize:fontsize}}>{props.nosaukums}</h3>
      <p>{props.saturs}</p>
      <img src={props.attēls} alt="ok"/>
   </div>
)};


export default Card;
