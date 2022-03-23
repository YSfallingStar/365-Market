import './App.css';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/Theme';
import Button from '@mui/material/Button';
import { Modal, ModalTitle, ModalContent } from './components/Modal';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';

function App() {
  const [condition, setCondition] = useState(""); // ModalContent 결정하는 state
  const [open, setOpen] = useState(false);

  const handleClickOpen = (prop) => {
    setOpen(true);
    setCondition(prop);
  }
  const handleClose = () => setOpen(false);

  const topMenu = () => {
    return(
      <div>
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
      </div>
    )
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header topMenu={topMenu}/>
        {/* 로그인/ 회원가입 모달 */}
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
            {condition === "login" ? <Login/> : <Register/>}
          </ModalContent>
        </Modal>
      </ThemeProvider>
    </div>
  );
}

export default App;
