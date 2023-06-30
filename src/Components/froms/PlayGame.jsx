import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const PlayGame = () => {
  return (
    <>
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
                marginTop: 9,
                },
            }}
            >
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
        </Box>
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
                marginTop: 8,
            },
            }}
            >
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
        </Box>
        <Box
            sx={{
                display: 'flex',
                '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
                marginTop: 9,
                },
            }}
            >
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
            <Paper variant="outlined" />
        </Box>
    </>
    
  );
}

export default PlayGame