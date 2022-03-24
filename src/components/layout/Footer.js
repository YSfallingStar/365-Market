import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
;

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © 
      <Link color="inherit" href="#">
        365 일장
      </Link>&nbsp;
      2022.
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box component="footer" sx={{ background: 'linear-gradient(to right bottom, #ff93dd, #2998f6)', py: 3}}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          365 일장
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          중고 거래에 물물교환을 더하다!
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;