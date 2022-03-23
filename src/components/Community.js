import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(number, category, title, writer, views, date) {
  return { number, category, title, writer, views, date };
}

const rows = [
  createData(1, '공지', '365 일장 사용법 안내', '관리자', 20, '2022-03-21'),
  createData(2, '공지', '커뮤니티 이용 안내', '관리자', 10, '2022-03-21'),
  createData(3, '질문', '프로필 수정 어디서 하나요?', '캐럿', 2,'2022-03-22'),
  createData(4, '생활공유', '이번 주 할인 정보 공유', '캐럿', 5,'2022-03-23'),
  createData(5, '지역소식', '벚꽃이 피었네요', '장범준', 3,'2022-03-24'),
];

const Community = () => {
  return (
    <Box sx={{m:'auto', p:3, justifyContent:'center', alignItems: 'center', width: '80%'}}>
      <Button endIcon={<CreateIcon/>} variant='contained'>글쓰기</Button>
      <TableContainer component={Paper} sx={{mt: 2}}>
      <Table sx={{ minWidth: 650 }} aria-label="coummunity">
          <TableHead sx={{bgcolor: 'secondary.main'}}>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>카테고리</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>조회</TableCell>
              <TableCell>작성 날짜</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.number}
                </TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.writer}</TableCell>
                <TableCell>{row.views}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Community;