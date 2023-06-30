import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const MorePage = () => {
  return (
    <>
        <div className='more_feat'>
            <p><h1>Features</h1></p>
        </div>
        <Box
         sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: 215,
            height: 240,
            marginLeft: 7,
        },
      }}
    >
      <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />
      <Paper elevation={0} />

    </Box>
    </>
  );
}

export default MorePage