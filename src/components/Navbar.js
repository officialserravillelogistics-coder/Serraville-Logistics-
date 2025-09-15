import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div">
          Serraville Logistics Admin Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
