import React, {useState} from 'react';
import '../../asset/styles/Layout.css'
import { Outlet } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Modal, ModalTitle, ModalContent } from './Modal';
import Header from './Header';
import Footer from './Footer';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Location from '../pages/Location';

const Layout = () => {
  const [isLogined, setIsLogined] = useState(false); // 로그인 여부
  const [location, setLocation] = useState('역삼동'); // 선택한 지역
  const [condition, setCondition] = useState(""); // ModalContent 결정하는 state
  const [open, setOpen] = useState(false); // 모달

  // 모달 이벤트
  const handleClickOpen = (prop) => {
    setOpen(true);
    setCondition(prop);
  }
  const handleClose = () => setOpen(false);

  // 지역 선택
  const handleLocationClick = (prop) => {
    setOpen(false);
    setLocation(prop);
  }

  // topMenu 오른쪽 영역
  const topMenu = () => {
    if(isLogined){
      return (
        <Box>
          <Button
            variant='contained'
            onClick={() => {handleClickOpen("location")}}
          >
            {location}
          </Button>
        </Box>
      )
    }else{
      return (
        <Box>
          <Button 
            variant="text" 
            onClick={() => {handleClickOpen("login")}}
            sx={{mr: 2}}
            color='neutral'
          >
            로그인
          </Button>
          <Button 
            variant="contained" 
            onClick={() => {handleClickOpen("register")}}
          >
            회원가입
          </Button>
        </Box>
      )
    }
  }

  return (
    <div className='wrapper'>
      <Header topMenu={topMenu}/>
      <main className='content'>
        <Outlet/>
        {/* 모달 */}
        <Modal
          onClose={handleClose}
          aria-labelledby="modal"
          open={open}
          maxWidth='md'
          fullWidth={true}
        >
          <ModalTitle 
            id="modal" 
            onClose={handleClose}
            //sx={{mb: 3}}
          >
            {condition === 'location' ? '지역 선택' : null}
          </ModalTitle>
          <ModalContent>
            {
              (function() {
                if(condition === 'login') return <Login handleClickOpen={handleClickOpen} handleClose={handleClose} setIsLogined={setIsLogined} />
                if(condition === 'register') return <Register handleClickOpen={handleClickOpen}/>
                if(condition === 'location') return <Location handleLocationClick={handleLocationClick}/>
              })()
            }
          </ModalContent>
        </Modal>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;