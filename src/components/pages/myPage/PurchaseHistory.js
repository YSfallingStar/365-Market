import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    createData('옛날 과자 세트', 10000, '과자', '옛날 과자로 추억팔이 하실 분 ㅋㅋ', '08:00'),
    createData('남성 구두', 180000, '남성 신발', '사이즈가 안맞아서 한 번도 못신고 팔아요 연락주세요~', '17:18'),
    createData('오트밀 먹고 싶으신 분', 0, '음식', '제시 가능, 물물교환 가능해요~~', '15:27'),
    createData('롯데월드 티켓 팔아용', 59000, '티켓', '의견 조율O, 맞교환O', '15:27'),
];

const PurchaseHistory = () => {
    return (
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                구매 내역
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
    );
}

export default PurchaseHistory;