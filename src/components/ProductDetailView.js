import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import { Grid, Avatar, Button } from '@mui/material';
import { Typography } from '@mui/material';
import ImageSlider from './ImageSlider';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

const ProductDetailView = (props) => {
    return (
        <Dialog open={props.isOpen} onClose={props.handleClose}>
            <DialogTitle sx={{ m: 0, p: 2 }}>
                상세 조회
                {props.isOpen ? (
                    <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    >
                    <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <Divider/>
            <DialogContent>
                <Grid
                    container
                    spacing={4}
                >
                    {/* 이미지 */}
                    <Grid
                        item xs={12}
                        style={{
                            marginBottom: "1rem",
                            paddingRight: "0.05rem"
                        }}
                    >
                        <ImageSlider width="30%" index={0} />
                    </Grid>

                    {/* 게시자 및 게시글 정보 */}
                    <Grid
                        item xs={12}
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        {/* 게시자 */}
                        <Grid
                            item xs={6}
                            container
                            direction="row"
                            alignItems="center"
                        >
                            <Avatar src="../asset/images/t1.png" />
                            &nbsp;
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ margin: "0" }}>
                                {props.board.name}
                            </Typography>
                        </Grid>
                        {/* 게시글 정보 */}
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ margin: "0" }}>
                                {props.board.date}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* 제목 */}
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom component="div">
                            {props.board.title}
                        </Typography>
                    </Grid>

                    {/* 구분 및 요청사항 */}
                    <Grid
                        item xs={12}
                        container
                        spacing={2}
                    >
                        {/* 구분 */}
                        <Grid
                            item xs={12}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid
                                item xs={6}
                                container
                                direction="row"
                                alignItems="center"
                            >

                                <Button variant="outlined" disabled style={{ color: "black" }}>
                                    {props.board.condition}
                                </Button>
                                &nbsp;&nbsp;
                                <Typography variant="subtitle1" gutterBottom component="div" style={{ margin: "0" }}>
                                    {props.board.price}
                                </Typography>
                            </Grid>
                            <Grid
                                item xs={6}
                                container
                                direction="row"
                                alignItems="center"
                            >
                                <Button variant="outlined" disabled style={{ color: "black" }}>
                                    물물교환
                                </Button>
                                &nbsp;&nbsp;
                                <Typography variant="subtitle1" gutterBottom component="div" style={{ margin: "0" }}>
                                    {props.board.isExchange}
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* 요청사항 */}
                        <Grid item xs={12}>
                            <Button variant="outlined" disabled style={{ color: "black" }}>
                                요청사항
                            </Button>
                            <Typography variant="body1" gutterBottom style={{ margin: "0.5rem 0 0 1rem" }}>
                                {props.board.requestInfo}
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* 상품 상세 내용 */}
                    <Grid item xs={12}>
                        <Typography variant="body1" gutterBottom>
                            {props.board.productInfo}
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog >
    );
};

export default ProductDetailView;