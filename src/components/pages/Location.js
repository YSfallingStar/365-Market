import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../asset/styles/Location.css'
import Divider from '@mui/material/Divider';

const Location = ({handleLocationClick, location}) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{mx: 3}}
    >
      <Button 
        className='location' 
        variant="outlined"
        sx={location === '역삼동' ? {bgcolor: 'primary.main', color: '#fff !important'} : null}
        disabled = {location === '역삼동' ? true : false}
        onClick={() => handleLocationClick('역삼동')}
      >
        서울특별시 강남구 역삼동
      </Button>
      <Button 
        className='location' 
        variant="outlined"
        sx={location === '청담동' ? {bgcolor: 'primary.main', color: '#fff !important'} : null}
        disabled = {location === '청담동' ? true : false}
        onClick={() => handleLocationClick('청담동')}
      >
        서울특별시 강남구 청담동
      </Button>
      <Button variant="contained" color="secondary">지역 추가</Button>
      <Box>
        <Divider/>
      </Box>
    </Stack>
  );
};

export default Location;