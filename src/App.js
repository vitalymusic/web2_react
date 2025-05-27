import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './components/Nav';
import Box from '@mui/material/Box';



// Importējam visas sadaļas
import About from './pages/About';
import Contacts from './pages/Contacts';
import Main from './pages/Main';
import Services from './pages/Services';
// Importējam visas sadaļas




import { useState } from 'react';

import './App.css';


function App() {

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
      <Box sx={{
        width:"100%",
        height:"50px",
        mt:"50px",
        bgcolor: 'secondary.main',
          '&:hover': {
            bgcolor: 'secondary.dark',
        }
        }}/>
    </div>
  );
}

export default App;
