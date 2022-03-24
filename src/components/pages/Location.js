import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import '../../asset/styles/Location.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Location = ({handleLocationClick}) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{mx: 3}}
    >
      <Item className='location' variant="outlined" onClick={() => handleLocationClick('역삼동')}>서울특별시 강남구 역삼동</Item>
      <Item className='location' variant="outlined" onClick={() => handleLocationClick('청담동')}>서울특별시 강남구 청담동</Item>
      <Button variant="contained" color="secondary">지역 추가</Button>
    </Stack>
  );
};

export default Location;