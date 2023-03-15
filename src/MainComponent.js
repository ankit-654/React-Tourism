import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Navbar } from './Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';


export  function MainComponent() {
  const [value, setValue] = React.useState(0);
 const navigate=useNavigate();
  return (
    <>   
    <Navbar/>
    <Outlet/>
     <Box sx={{ bottom:0,left:"0",right:0,position:'fixed'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* <BottomNavigationAction label="Profile" icon={<RestoreIcon />} /> */}
        <BottomNavigationAction label="Explore" icon={<FavoriteIcon />} onClick={()=> navigate("/tourism/explore")}/>
        <BottomNavigationAction label="Destination" icon={<LocationOnIcon />} onClick={() => navigate("/tourism/destiantion")}/>
      </BottomNavigation>
      
    </Box>
    </>

  );
} 