import { useState } from 'react';
import Karte from '../components/Card/Karte';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Main() {

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


    let filteredItems = produkti.filter((item)=>{
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
                            <Karte nosaukums={item.nosaukums} saturs={item.saturs} attēls={item.attels} key={i} />
                        )
                    })}
                </div>
            </Container>
        </>
    )
}