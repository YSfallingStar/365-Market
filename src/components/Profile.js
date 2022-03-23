import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material';
import theme from './thema';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import User from '../assets/chatbot.png';

// 모달 창 
const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: '70%',
    border: 'none',
    p: 4,
};

function Profile(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function moveClick() {
        window.location.href('../index.html')
    }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Stack>
                    <Button variant="contained" size='large' color='secondary' onClick={handleOpen}>프로필 설정</Button>
                </Stack>
            </ThemeProvider>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                            <Card sx={{ position: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    alt="user image"
                                    height="100%"
                                    width="100%"
                                    image={User}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        userName
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        위치
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        자기 소개
                                    </Typography>
                                </CardContent>
                                <CardActions className='cardBtn' sx={{ justifyContent: "center", alignItems: "center" }}>
                                    <ThemeProvider theme={theme} className='cardBtn1'>
                                        <Stack direction="row" spacing={4}>
                                            <Button variant='contained' size="small" onClick={moveClick}>채팅</Button>
                                            <Button variant='contained' size="small" onClick={handleClose}>닫기</Button>
                                        </Stack>
                                    </ThemeProvider>
                                </CardActions>
                            </Card>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div >
    );
}

export default Profile;