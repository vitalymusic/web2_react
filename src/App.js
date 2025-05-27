import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';


// Importējam visas sadaļas
import About from './pages/About';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import Services from './pages/Services';
// Importējam visas sadaļas




import { useState } from 'react';

import './App.css';


function App() {


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
    </div>
  );
}

export default App;
