import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { Modal, ModalTitle, ModalContent } from './Modal';
import Header from './Header';
import Footer from './Footer';
import Login from './../pages/Login';
import Register from './../pages/Register';

const Layout = () => {
  const [isLogined, setIsLogined] = useState(false);
  const [condition, setCondition] = useState(""); // ModalContent 결정하는 state
  const [open, setOpen] = useState(false);

  // 모달 이벤트
  const handleClickOpen = (prop) => {
    setOpen(true);
    setCondition(prop);
  }
  const handleClose = () => setOpen(false);

  // topMenu 오른쪽 영역
  const topMenu = () => {
    if(isLogined){
      return (
        <Box>
          <Button
            variant='contained'
            onClick={() => {handleClickOpen("location")}}
          >
            지역
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
    <div>
      <Header topMenu={topMenu}/>
      <main>
        <Outlet/>
        {/* 모달 */}
        <Modal
          onClose={handleClose}
          aria-labelledby="modal"
          open={open}
        >
          <ModalTitle 
            id="modal" 
            onClose={handleClose}
            sx={{mb: 3}}
          />
          <ModalContent>
            {
              (function() {
                if(condition === 'login') return <Login handleClickOpen={handleClickOpen}/>
                if(condition === 'register') return <Register handleClickOpen={handleClickOpen}/>
                //if(condition === 'location') return <Location/>
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