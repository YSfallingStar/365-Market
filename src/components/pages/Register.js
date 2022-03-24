import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import logo from '../../asset/images/logo.png';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// dummy data
const data = {
  name: '캐럿',
  email: '365@365.com',
}

const Register = ({handleClickOpen}) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
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
  
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleCheckName = () => {
    if(data.name === values.name) alert('이미 사용중인 이름입니다.');
    else alert('사용 가능한 이름입니다.')
  }
  
  const handleCheckEmail = () => {
    if(data.email === values.email) alert('이미 사용중인 이메일입니다.');
    else alert('사용 가능한 이메일입니다.')
  }

  const onSubmit = (event) => {
    event.preventDefault();
    alert(`${values.name}님 365 일장에 오신 걸 환영합니다.`);
    handleClickOpen("login");
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
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 1 }}>
            <FormControl sx={{width: '75%'}} margin="normal">
              <InputLabel htmlFor="name">닉네임</InputLabel>
              <Input
                id="name"
                type='text'
                value={values.name}
                onChange={handleChange('name')}
                label="닉네임"
                endAdornment={
                  <Button
                    variant="outlined"
                    onClick={handleCheckName}
                    sx={{ml:2}}
                  >
                    중복 확인
                  </Button>
                }
              />
            </FormControl>
            <FormControl sx={{width: '75%'}} margin="normal">
              <InputLabel htmlFor="email">이메일</InputLabel>
              <Input
                id="email"
                type='text'
                value={values.email}
                onChange={handleChange('email')}
                label="이메일"
                endAdornment={
                  <Button
                    variant="outlined"
                    onClick={handleCheckEmail}
                    sx={{ml:2}}
                  >
                    중복 확인
                  </Button>
                }
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
            <FormControl sx={{width: '90%'}} margin="normal">
              <InputLabel htmlFor="confirmPassword">비밀번호 확인</InputLabel>
              <Input
                id="confirmPassword"
                type={values.showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="비밀번호 확인"
              />
            </FormControl>    
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              가입 
            </Button>
            <Button 
              variant='contained' 
              color="secondary"
              onClick={() => {handleClickOpen("login")}}
              fullWidth
            >
              로그인
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;