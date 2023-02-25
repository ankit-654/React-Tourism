import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import './Login.css'
import img1 from '../images/login.avif'
export  function Navbar() {
  return (
    <>
    <Box>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Tourism
          </Typography>
        </Toolbar>
       
      </AppBar>
      </Box>
     
    </>
  );
}