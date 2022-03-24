import React from 'react';
import { Container } from '@mui/material';
import SalesHistory from './myPage/SalesHistory';
import PurchaseHistory from './myPage/PurchaseHistory';
import Profile from './myPage/Profile';
import Community from './myPage/Community';

function Mypage(props) {
    return (
        <div>
            <Container>
                <SalesHistory></SalesHistory>
                <PurchaseHistory></PurchaseHistory>
                <Community></Community>
                <Profile></Profile>
            </Container>
        </div>
    );
}

export default Mypage;