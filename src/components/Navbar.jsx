

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Images/logo.png';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#000000', py: 1 }}>
        <Toolbar>

        
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ fontSize: '40px' }}/>
          </IconButton>

         
          <Box sx={{ fontSize:'30px',flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" component="div">
              <img src={logo}/>
            </Typography>
          </Box>

          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: '#1976d2',
                borderRadius: '30px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: 'white',
                borderRadius: '30px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
                 background: 'linear-gradient(to right, #6A41FB, #F49957)',
              }}
            >
              Sign Up
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
