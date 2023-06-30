import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FullWidthTextField() {
  return (
    <Box
      sx={{
        width: 260,
        maxWidth: '100%',
        marginLeft: 2.5,
        marginTop: 2,
        borderRadius: 2,
        backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? 'rgba(225, 225, 225, 0.1)'
          : 'rgb(255 225 225 / 25%)',
      }}
    >
      <TextField fullWidth label="chats" id="fullWidth" 
      />
    </Box>
  );
}