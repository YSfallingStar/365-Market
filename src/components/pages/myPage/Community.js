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

function createData(name, category, comment, time) {
    return { name, category, comment, time };
}

const rows = [
    createData('일상 공유해요~', '운동', '아침에 같이 운동하실 분 구해요', '07:00'),
    createData('꽃꽃이 하실 분', '꽃', '심심한 일상 꽃꽃이 같이 하실 분 있나요?', '21:18'),
    createData('서든 내전 멤버 구함', '게임', '서든 대룰로 55 하실분 연락주세요', '13:17'),
    createData('편의점에 참맛 후랑크 파나요?', '음식', '참맛 후랑크 오랜만에 먹고 싶은데 파는곳을 못찾겠네요ㅜㅜ', '10:57'),
];
const Community = () => {
    return (

        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                커뮤니티
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
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

export default Community;