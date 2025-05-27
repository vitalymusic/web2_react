import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from  './components/Nav';
import Card from  './components/Card/Card';
import List from './components/List';
// Importējam visas sadaļas
import About from './pages/About';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import Services from './pages/Services';
// Importējam visas sadaļas




import { useState } from 'react';

import './App.css';


function App() {
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



  return (
    <div className="App" id="test1">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>

      <h1 >Hello world!!!</h1>
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

          {/* Ielādēsies saraksts */}


          <List />

    </div>
  );
}

export default App;
