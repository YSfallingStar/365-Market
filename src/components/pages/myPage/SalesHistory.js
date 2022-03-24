import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../layout/Theme';

// 모달 창 
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};

// 내역 테이블
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#2998f6',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, price, category, comment, time) {
    return { name, price, category, comment, time };
}

const rows = [
    createData('듀얼 스포츠 자전거', 780000, '운동', '3일 밖에 안탔어요', '14:08'),
    createData('롱 원피스', 20000, '여성 의류', '급처해요', '21:18'),
    createData('노래방 장비', 600000, '금영', '제시 가능', '22:00'),
];

function SalesHistory(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <mypage>
            <br />
            <ThemeProvider theme={theme}>
                <Stack>
                    <Button variant="contained" size='large' color='secondary' sx={{ background: 'linear-gradient(to right bottom, #ff93dd, #2998f6)' }} onClick={handleOpen}>판매 내역</Button>
                </Stack><br /><br />
            </ThemeProvider>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            판매 내역
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                            <StyledTableCell align="right">price</StyledTableCell>
                                            <StyledTableCell align="right">category</StyledTableCell>
                                            <StyledTableCell align="right">comment</StyledTableCell>
                                            <StyledTableCell align="right">time</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                                <StyledTableCell align="right">{row.category}</StyledTableCell>
                                                <StyledTableCell align="right">{row.comment}</StyledTableCell>
                                                <StyledTableCell align="right">{row.time}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </mypage>
    );
}

export default SalesHistory;