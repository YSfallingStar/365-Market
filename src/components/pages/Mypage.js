import React, { useState } from 'react';
// import { Container } from '@mui/material';
import SalesHistory from './myPage/SalesHistory';
import PurchaseHistory from './myPage/PurchaseHistory';
import MyProfile from './myPage/MyProfile';
import Community from './myPage/Community';
import { Stack, Button, ThemeProvider } from '@mui/material';
import { theme } from '../layout/Theme';
import { ModalContent } from '../layout/Modal';
import { Modal } from '@mui/material';

function Mypage() {
    const [condition, setCondition] = useState(""); // ModalContent 결정하는 state
    const [open, setOpen] = useState(false); // 모달
    const handleClickOpen = (prop) => {
        setOpen(true);
        setCondition(prop);
    }
    const handleClose = () => setOpen(false);
    return (
        <div>
            <br /><br /><br />
            <ThemeProvider theme={theme}>
                <Stack>
                    <Button
                        variant="contained"
                        size='large'
                        color='secondary'
                        sx={{ background: 'linear-gradient(to right bottom, #ff93dd, #2998f6)' }}
                        onClick={() => { handleClickOpen("sales") }}
                    >
                        판매 내역</Button>
                </Stack><br /><br />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <Stack>
                    <Button
                        variant="contained"
                        size='large'
                        color='secondary'
                        sx={{ background: 'linear-gradient(to right bottom, #ff93dd, #2998f6)' }}
                        onClick={() => { handleClickOpen("purchase") }}
                    >
                        구매 내역</Button>
                </Stack><br /><br />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <Stack>
                    <Button
                        variant="contained"
                        size='large'
                        color='secondary'
                        sx={{ background: 'linear-gradient(to right bottom, #ff93dd, #2998f6)' }}
                        onClick={() => { handleClickOpen("community") }}
                    >
                        커뮤니티</Button>
                </Stack><br /><br />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
                <Stack>
                    <Button
                        variant="contained"
                        size='large'
                        color='secondary'
                        sx={{ background: 'linear-gradient(to right bottom, #ff93dd, #2998f6)' }}
                        onClick={() => { handleClickOpen("myprofile") }}
                    >
                        프로필 설정</Button>
                </Stack>
            </ThemeProvider>
            <Modal
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={open}
                maxWidth=''
                fullWidth={true}
            >
                <ModalContent>
                    {
                        (function () {
                            if (condition === 'sales') return <SalesHistory />
                            if (condition === 'purchase') return <PurchaseHistory />
                            if (condition === 'community') return <Community />
                            if (condition === 'myprofile') return <MyProfile handleClickOpen={handleClickOpen} handleClose={handleClose} />
                        })()
                    }
                </ModalContent>
            </Modal>
        </div>
    );
}

export default Mypage;