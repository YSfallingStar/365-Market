import './App.css';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Theme';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Modal, ModalTitle, ModalContent } from './components/Modal';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import Community from './components/Community';

function App() {
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
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* HEADER */}
        <Header topMenu={topMenu}/>
        
        {/* CONTENTS */}
        <Box className='content'>
          <Community/>
        </Box>
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

        {/* FOOTER */}
        <Footer/>
        
        {/* Routes */}
        
      </ThemeProvider>
    </div>
  );
}

export default App;
