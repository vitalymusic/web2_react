import './nav.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import { positions, position, top } from '@mui/system';
function Nav() {
  // Dažādas darbības


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" color="secondary" className='' top="0">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pirmā lapa ar React
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'block', md:'flex'} }}>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>Galvenā</Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>Par mums</Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>Pakalpojumi</Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>Kontakti</Typography>
              </MenuItem>
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Nav;