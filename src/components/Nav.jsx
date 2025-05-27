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
import { Outlet, Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function Nav() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

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
            <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'flex' } }}>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link to="/">Galvenā</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link to="about">Par mums</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link to="services">Pakalpojumi</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }}>
                  <Link to="contacts">Kontakti</Link>
                </Typography>
              </MenuItem>
            </Box>
            <Button color="inherit" onClick={handleClickOpen}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
      {/* Dialogs */}
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <DialogTitle>Ielogoties</DialogTitle>
        <DialogContent sx={{py:"20px"}}> 
          <DialogContentText>
            Ievadiet savu lietotājvārdu un paroli
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="username"
            label="Lietotājvārds"
            type="text"
            fullWidth
            variant="outlined"
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Parole"
            type="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button type="submit" variant="contained" size="large" onClick={handleSubmit}>Ielogoties</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Nav;

