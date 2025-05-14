import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Search for:', query);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#343435', 
        borderRadius: '20px',
        padding: '4px',
        width: '100%',
        maxWidth: '500px',
        minWidth:'300px'
      }}
    >
      <TextField
        variant="standard"
        placeholder="An Astronaut riding a horse on mars, hd"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          disableUnderline: true,
          sx: { paddingX: 2,color:'#FFFFFF' },
        }}
        sx={{
          backgroundColor: '#343435',
        }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        sx={{
          background: 'linear-gradient(to right, #6A41FB, #F49957)',
          color: 'white',
          borderRadius: '20px',
          paddingX: 3,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#155fa0',
          },
          width:'200px',
          textAlign:'center',
        }}
      >
        Generate Now
      </Button>
    </Box>
  );
};

export default SearchBar;
