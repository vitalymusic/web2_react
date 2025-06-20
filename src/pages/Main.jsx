import { useState, useEffect } from 'react';
import  axios from 'axios';    
import ProductModal from '../components/AddProductModal';
import EditProduct from '../components/EditProductModal';


import Karte from '../components/Card/Karte';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EditProductModal from '../components/EditProductModal';


export default function Main() {

   

    
    const [inputValue, setInputValue] = useState("");
    const [products, setProducts] = useState([]);
    const [EditProductModalOpen, setEditProductModalOpen] = useState(false);

     const [refresh, setRefresh] = useState(false);


        const handleRefresh = ()=>{
            setRefresh(!refresh);
        }

     useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL+'/products') // aizstāj ar savu URL
      .then(response => {
        setProducts(response.data);
        // console.log(products);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, [refresh]); 



    let filteredItems = products.filter((item)=>{
        if(item.nosaukums.toLowerCase().includes(inputValue.toLowerCase())){
            return item
        }
    })
    return (

        <>
            <Container maxWidth="lg">
                <Typography align="center" variant="h1">Galvenā lapa</Typography>

                <Box sx={{
                    m:'2rem'
                }}>
                     <TextField id="outlined-basic" label="Ievadi produkta nosaukumu" variant="outlined" sx={{width:"100%",my:"20px"}} value={inputValue} onInput={(e) => {
                    setInputValue(e.target.value)
                }}/>
                </Box>

                <div className='cards'>
                    {filteredItems.map((item, i) => {
                        return (
                            <Karte nosaukums={item.nosaukums} saturs={item.apraksts} attēls={item.attels} cena={item.cena} key={i} id={item.id} refresh={handleRefresh}/>
                        )
                    })}
                </div>
                <div className="container">
                    <ProductModal mainWindowRefresh={handleRefresh}/>

                   
                </div>
            </Container>
        </>
    )
}