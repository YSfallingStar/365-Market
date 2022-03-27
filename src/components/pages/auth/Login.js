import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from '../../../asset/images/logo.png';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';

// dummy data
const data = {
  email: '365@365.com',
  password: 'test1234'
}

const Login = ({handleClickOpen, setIsLogined, handleClose}) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if(values.email === data.email && values.password === data.password) {
      alert('로그인 성공');
      setIsLogined(true);
      handleClose();
      sessionStorage.setItem("member", values.email ); // 저장
    }else
      alert('이메일 또는 비밀번호를 확인해주세요.');
  }

  return (
    <Grid container component="main" sx={{ height: '100%'}}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={5}
        md={5}
        sx={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[30] : t.palette.grey[900],
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={7} md={7} component={Paper} elevation={2} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
            <FormControl sx={{width: '90%'}} margin="normal">
              <InputLabel htmlFor="email">이메일</InputLabel>
              <Input
                id="email"
                type='text'
                value={values.email}
                onChange={handleChange('email')}
                label="이메일"
              />
            </FormControl>
            <FormControl sx={{width: '90%'}} margin="normal">
              <InputLabel htmlFor="password">비밀번호</InputLabel>
              <Input
                id="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="비밀번호"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2}}
            >
              로그인 
            </Button>
            <Divider />
            <Button 
              variant='contained' 
              color="secondary"
              onClick={() => {handleClickOpen("register")}}
              fullWidth
            >
              회원가입
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
