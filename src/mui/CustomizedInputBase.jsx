import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { colors } from '@mui/material';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
        sx={{ p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 250, 
              marginLeft: 4,
              marginTop: 4, 
              borderRadius: 10, 
              backgroundColor: '#a6eef057'
           }}
    >
      <IconButton type="button" sx={{ p: '10px', color: 'white' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white' }}
        placeholder="Search games"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
    </Paper>
  );
}