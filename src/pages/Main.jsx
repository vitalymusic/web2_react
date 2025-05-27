import { useState } from 'react';
import Card from  '../components/Card/Card';
export default function Main(){

    const produkti = [
  {
    nosaukums: "Ābolu sula",
    saturs: "100% dabīga ābolu sula bez pievienota cukura.",
    attels: "https://placehold.co/250x150/"
  },
  {
    nosaukums: "Rudzu maize",
    saturs: "Tradicionāla Latvijas rudzu maize, cepta krāsnī.",
    attels: "https://placehold.co/250x150/"
  },
  {
    nosaukums: "Medus burka",
    saturs: "Bioloģiski ievākts Latvijas pļavu ziedu medus.",
    attels: "https://placehold.co/250x150/"
  },
  {
    nosaukums: "Zemeņu ievārījums",
    saturs: "Mājās gatavots zemeņu ievārījums ar mazāk cukura.",
    attels: "https://placehold.co/250x150/"
  },
  {
    nosaukums: "Siers ar ķimenēm",
    saturs: "Mīksts siers ar ķimenēm, ideāli der uzkodu platei.",
    attels: "https://placehold.co/250x150/"
  }
];

     const [inputValue, setInputValue] = useState("");
      const [background, setBackground] = useState("");

    return(
        <>
            <h1>Galvenā lapa</h1>
            <h2 >{inputValue}</h2>

      <input type='text' onInput={(e)=>{
          setInputValue(e.target.value)
          }}/>

        <button onClick={()=>{
          setBackground("blue");
        }}>Set blue</button>

      <div className='cards'>

          {produkti.map((item,i)=>{
              return(
                <Card  nosaukums={item.nosaukums} saturs={item.saturs} attēls={item.attels} key={i}  background={background} />
              )
          })}
      </div>
        </>
    )
}