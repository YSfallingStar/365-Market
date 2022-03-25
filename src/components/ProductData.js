import React, { useState } from 'react';
import ProductDetailView from './ProductDetailView';

function ProductData(props) {
    const [board, setBoard] = useState([
        {
            name: '홍길동',
            date: '2022-02-21',
            title: '우산 팝니다.',
            condition: '판매',
            price: '3,000',
            isExchange: 'O',
            requestInfo: '금액에 맞는 상품과 교환도 가능합니다.',
            productInfo: '새제품 입니다.'
        },
        {
            name: '김길동',
            date: '2022-03-21',
            title: '양산 팝니다.',
            condition: '판매',
            price: '6,000',
            isExchange: 'O',
            requestInfo: '금액에 맞는 상품과 교환도 가능합니다.',
            productInfo: '새제품 입니다.'
        }
    ]);
    return (
        <div>
            <ProductDetailView board={board[props.index]} isOpen={props.isOpen} handleClose={props.handleClose} />
        </div>
    );
}

export default ProductData;