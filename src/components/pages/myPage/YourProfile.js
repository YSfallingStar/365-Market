import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../layout/Theme';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import User from '../../../asset/images/365.png'

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

const Profile = ({ handleClickOpen, handleClose }) => {
    return (
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
                            강김박서정정
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            위치 : 서울특별시 중구 세종대로 40
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            comment : 물물 교환 가능한가요..?
                        </Typography>
                    </CardContent>
                    <CardActions className='cardBtn' sx={{ justifyContent: "center", alignItems: "center" }}>
                        <ThemeProvider theme={theme} className='cardBtn1'>
                            <Stack direction="row" spacing={4}>
                                <Button
                                    variant='contained'
                                    size="small"
                                    onClick={() => { handleClickOpen("chat") }}
                                >
                                    채팅</Button>
                                <Button
                                    variant='contained'
                                    size="small"
                                    onClick={handleClose}
                                >
                                    닫기</Button>
                            </Stack>
                        </ThemeProvider>
                    </CardActions>
                </Card>
            </Typography>
        </Box>
    );
}

export default Profile;