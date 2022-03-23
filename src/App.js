import { Container } from '@mui/material';
import React from 'react';
import './App.css';
import Profile from './components/Profile';
import PurchaseHistory from './components/PurchaseHistory';
import SalesHistory from './components/SalesHistory';
import Community from './components/Community';

function MyPage() {

  return (
    <mypage>

    </mypage>
  );
}

function App() {

  return (
    <Container>
      <MyPage></MyPage>
      <SalesHistory></SalesHistory><hr />
      <PurchaseHistory></PurchaseHistory><hr />
      <Community></Community><hr />
      <Profile></Profile>
    </Container>
  );
}

export default App;
