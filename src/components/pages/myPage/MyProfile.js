import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../layout/Theme';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import User from '../../../asset/images/365.png';

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
    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState(User);

    // 파일 저장
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };

    // 파일 삭제
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    };
    return (
        <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                <Card sx={{ position: 'auto' }}>
                    <>
                        <table className='imageBox'>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                            <div>
                                                {fileImage && (
                                                    <img
                                                        alt=''
                                                        src={fileImage}
                                                        style={{ margin: "auto", maxHeight: "300px" }}
                                                    />
                                                )}
                                            </div>
                                            <CardActions className='cardBtn' sx={{ justifyContent: "center", alignItems: "center" }}>
                                                <ThemeProvider theme={theme} className='cardBtn1'>
                                                    <Stack direction="row" spacing={4} >
                                                        <Button
                                                            variant='contained'
                                                            size="small"
                                                            color="primary"
                                                        ><label className='input-file-button' for="input-file">
                                                                프로필 선택</label></Button>
                                                        &nbsp;&nbsp;
                                                        <input
                                                            id='input-file'
                                                            name="imgUpload"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none", cursor: "pointer" }}
                                                            onChange={saveFileImage}
                                                        />

                                                        <Button
                                                            variant='contained'
                                                            size="small"
                                                            color="secondary"
                                                            onClick={() => deleteFileImage()}
                                                        >
                                                            삭제</Button>
                                                    </Stack>
                                                </ThemeProvider>
                                            </CardActions>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
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
                                >
                                    변경</Button>
                                <Button
                                    variant='contained'
                                    size="small"
                                    onClick={handleClose}
                                    color="secondary"
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