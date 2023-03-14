import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
// import img1 from '../images/login.avif'
export  function Navbar() {
  return (
    <>
    <Box>
      <AppBar position="static" sx={{backgroundColor: "transparent"}}>
        <Toolbar>
          
          <Typography component="div" sx={{ flexGrow: 1 }}>
           <h6 className="tourism-app-font">Tourism</h6>
          </Typography>
        </Toolbar>
       
      </AppBar>
      </Box>
     
    </>
  );
}