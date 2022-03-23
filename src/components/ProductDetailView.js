import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import { Grid, Avatar, Button } from '@mui/material';
import { Typography } from '@mui/material';
import ImageSlider from './ImageSlider';

const ProductDetailView = () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="lg">
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
                        <ImageSlider width="30%" />
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
                            <Avatar src="/static/images/t1.png" />
                            &nbsp;
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ margin: "0" }}>
                                닉네임
                            </Typography>
                        </Grid>
                        {/* 게시글 정보 */}
                        <Grid item xs={6} style={{ textAlign: "right" }}>
                            <Typography variant="subtitle1" gutterBottom component="div" style={{ margin: "0" }}>
                                2022.03.22
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* 제목 */}
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom component="div">
                            제목
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
                                    판매
                                </Button>
                                &nbsp;&nbsp;
                                <Typography variant="subtitle1" gutterBottom component="div" style={{ margin: "0" }}>
                                    300,000
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
                                    O
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* 요청사항 */}
                        <Grid item xs={12}>
                            <Button variant="outlined" disabled style={{ color: "black" }}>
                                요청사항
                            </Button>
                            <Typography variant="body1" gutterBottom style={{ margin: "0.5rem 0 0 1rem" }}>
                                요청 내용 요청 내용 요청 내용 요청 내용 요청 내용 요청 내용 요청 내용 요청 내용 요청 내용 요청 내용<br />
                                요청 내용 요청 내용 요청 내용<br />
                                요청 내용 요청 내용 요청 내용 요청 내용 요청 내용 요청 내용<br />
                                요청 내용 요청 내용 요청 내용<br />
                            </Typography>
                        </Grid>
                    </Grid>

                    {/* 상품 상세 내용 */}
                    <Grid item xs={12}>
                        <Typography variant="body1" gutterBottom>
                            상품 내용 상품 내용 상품 내용 상품 내용 상품 내용 상품 내용 상품 내용 상품 내용 상품 내용 상품 내용<br />
                            상품 내용 상품 내용 상품 내용<br />
                            상품 내용 상품 내용 상품 내용 상품 내용 상품 내용 상품 내용<br />
                            상품 내용 상품 내용 상품 내용<br />
                        </Typography>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>
                    닫기
                </Button>
            </DialogActions>
        </Dialog >
    );
};

export default ProductDetailView;