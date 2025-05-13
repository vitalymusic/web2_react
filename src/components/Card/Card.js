import './Card.css';
const Card = (props) => (
   <div className="card">
      <h3>{props.nosaukums}</h3>
      <p>{props.saturs}</p>
      <img src={props.attēls}/>
   </div>
);


export default Card;
