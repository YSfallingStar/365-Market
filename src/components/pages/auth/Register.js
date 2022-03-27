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
import { FormControlLabel, Checkbox, FormHelperText } from '@mui/material';

// dummy data
const data = {
  name: '365',
  email: '365@365.com',
}

const Register = ({handleClickOpen}) => {
  // input values
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    checked: false,
  });

  // validate
  const [validate, setValidate] = useState({
    emailError: false,
    emailChecked: false,
    nameError: false,
    nameChecked: false,
    passwordError: false,
    confirmPasswordError: false,
    checkError: false,
    emailMsg : '',
    nameMsg : '',
    passwordMsg : '',
    confirmPasswordMsg : '',
    checkMsg: '',
  });

  // input value change
  const handleChange = (prop) => (event) => {
    setValues((prevState) => ({...prevState, [prop]: event.target.value}));
  }

  // 동의 체크
  const handleAgree = (event) => {
    setValues((prevState) => ({...prevState, checked: event.target.value}));
  };

  // 비밀번호 보이기
  const handleClickShowPassword = () => {
    setValues((prevState) => ({...prevState, showPassword: !values.showPassword}));
  };
  
  // 비밀번호 확인 보이기
  const handleClickShowConfirmPassword = () => {
    setValues((prevState) => ({...prevState, showConfirmPassword: !values.showConfirmPassword}));
  };

  // 이름 중복 체크
  const handleCheckName = () => {
    if(values.name === '')
      alert('이름을 입력해주세요.');
    else if(data.name === values.name) 
      setValidate((prevState) => ({...prevState, nameError: true, nameMsg: '이미 사용중인 닉네임입니다.'}));
    else {
      setValidate((prevState) => ({...prevState, nameError: false, nameMsg: '사용 가능한 닉네임입니다.'}));
      setValidate((prevState) => ({...prevState, nameChecked: true}));
    }
  }

  // 이메일 중복 체크
  const handleCheckEmail = () => {
    // 이메일 정규식
    const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if(values.email === ''){
      alert('이메일을 입력해주세요.')
    }
    else if(!emailRegex.test(values.email)){
      setValidate((prevState) => ({...prevState, emailError: true, emailMsg: '유효한 이메일 형식이 아닙니다.'}));
    }else {
      if(data.email === values.email) {
        setValidate((prevState) => ({...prevState, emailError: true, emailMsg: '이미 사용중인 이메일입니다.'}));
      }else{
        setValidate((prevState) => ({...prevState, emailError: false, emailMsg: '사용 가능한 이메일입니다.'}));
        setValidate((prevState) => ({...prevState, emailChecked: true}));
      }
    }
  }

  // submit
  const onSubmit = (event) => {
    event.preventDefault();

    // 이름 유효성 체크
    if(validate.nameError || !validate.nameChecked){
      setValidate((prevState) => ({...prevState, nameError: true, nameMsg: '닉네임을 확인해주세요.'}));
    }

    // 이메일 유효성 체크
    if(validate.emailError || !validate.emailChecked){
      console.log(validate.emailChecked)
      setValidate((prevState) => ({...prevState, emailError: true, emailMsg: '이메일을 확인해주세요.'}));
    }

    // 비밀번호 유효성 체크
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(values.password))
      setValidate((prevState) => ({...prevState, passwordError:true, passwordMsg: '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!'}));
    else 
      setValidate((prevState) => ({...prevState, passwordError:false, passwordMsg: ''}));

    // 비밀번호 같은지 체크
    if (values.password !== values.confirmPassword) 
      setValidate((prevState) => ({...prevState, confirmPasswordError:true, confirmPasswordMsg: '비밀번호가 일치하지 않습니다.'}));
    else 
      setValidate((prevState) => ({...prevState, confirmPasswordError:false, confirmPasswordMsg: ''}));

    // 회원가입 동의 체크
    if (!values.checked)
      setValidate((prevState) => ({...prevState, checkError:true, checkMsg: '이용 약관에 동의해주세요.'}));

    if (
      !validate.emailError &&
      !validate.nameError &&
      !validate.passwordError &&
      !validate.confrimPasswordError &&
      values.checked
    ) {
      alert(`회원가입 성공\n${values.name}님 365일장에 오신 걸 환영합니다.`);
      handleClickOpen('login');
    }
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
                name="name"
                type='text'
                value={values.name}
                onChange={handleChange('name')}
                label="닉네임"
                error={validate.nameError}
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
            <FormHelperText
              error={validate.nameError}
              sx={!validate.nameError ? {color: 'success.main'} : null}
            >
              {validate.nameMsg}
            </FormHelperText>
            <FormControl sx={{width: '75%'}} margin="normal">
              <InputLabel htmlFor="email">이메일</InputLabel>
              <Input
                id="email"
                name="email"
                type='text'
                value={values.email}
                onChange={handleChange('email')}
                label="이메일"
                error={validate.emailError}
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
            <FormHelperText
              error={validate.emailError}
              sx={!validate.emailError ? {color: 'success.main'} : null}
            >
              {validate.emailMsg}
            </FormHelperText>
            <FormControl sx={{width: '90%'}} margin="normal">
              <InputLabel htmlFor="password">비밀번호 (숫자+영문자+특수문자 8자리 이상)</InputLabel>
              <Input
                id="password"
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
                error={validate.passwordError}
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
              />
            </FormControl>
            <FormHelperText
              error={validate.passwordError}
              sx={!validate.passwordError ? {color: 'success.main'} : null}
            >
              {validate.passwordMsg}
            </FormHelperText>
            <FormControl sx={{width: '90%'}} margin="normal">
              <InputLabel htmlFor="confirmPassword">비밀번호 확인</InputLabel>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={values.showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
                label="비밀번호 확인"
                error={validate.confirmPasswordError}
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
              />
            </FormControl>
            <FormHelperText
              error={validate.confirmPasswordError}
              sx={!validate.confirmPasswordError ? {color: 'success.main'} : null}
            >
              {validate.confirmPasswordMsg}
            </FormHelperText>
            <FormControlLabel
              control={<Checkbox onChange={handleAgree} color="primary" />}
              label="이용 약관에 동의합니다."
              error={validate.checkError}
            />
            <FormHelperText
              error={validate.checkError}
              sx={!validate.checkError ? {color: 'success.main'} : null}
            >
              {validate.checkMsg}
            </FormHelperText>    
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