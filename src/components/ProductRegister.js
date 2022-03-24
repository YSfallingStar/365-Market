import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions } from '@mui/material';
import { Grid, Box } from '@mui/material';
import { Button, TextField } from '@mui/material';
import { Radio, RadioGroup } from '@mui/material';
import { Checkbox } from '@mui/material';
import { FormGroup, FormControl, FormControlLabel } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { Typography } from '@mui/material';
import ImageSlider from './ImageSlider';

const ProductRegister = () => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    /* 카테고리 */
    const [category, setCategory] = useState([
        "카테고리 선택",
        "1",
        "2",
        "3"
    ]);
    const [categorySelected, setCategorySelected] = useState("카테고리 선택");

    function handleCategoryChange(event) {
        setCategorySelected(event.target.value);
    }

    /* 지역 */
    const [location, setLocation] = useState([
        "지역 선택",
        "1",
        "2",
        "3"
    ]);
    const [locationSelected, setLocationSelected] = useState("지역 선택");

    function handleLocationChange(event) {
        setLocationSelected(event.target.value);
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md">
            <DialogContent>
                <Grid
                    container
                    spacing={2}
                >
                    {/* 타이틀 */}
                    <Grid
                        item xs={12}
                        style={{
                            textAlign: "-webkit-center",
                        }}
                    >
                        <Box
                            sx={{
                                width: 300,
                                border: "1px solid Gray",
                                borderRadius: 1
                            }}
                        >
                            <Typography variant="subtitle1" gutterBottom component="div"
                                style={{
                                    fontSize: "15pt",
                                    fontWeight: "bold",
                                    margin: "0.5rem 0 0.5rem 0"
                                }}>
                                상품 등록
                            </Typography>
                        </Box>
                    </Grid>
                    {/* 이미지 */}
                    <Grid
                        item xs={5}
                        style={{
                            alignSelf: "center"
                        }}>
                        <ImageSlider width="100%" />
                    </Grid>
                    {/* 등록 폼 */}
                    <Grid item xs={7}>
                        {/* 카테고리 */}
                        <Grid item xs={12}>
                            <FormControl
                                style={{
                                    width: "100%"
                                }}
                            >
                                <Select
                                    value={categorySelected}
                                    onChange={handleCategoryChange}
                                >
                                    {category.map((value, index) => {
                                        return <MenuItem value={value}>{value}</MenuItem>;
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        {/* 상품 이름 */}
                        <Grid
                            item xs={12}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            style={{
                                marginTop: "0.5rem"
                            }}
                        >
                            <Grid item xs={3}>
                                <Button variant="outlined" size="large" disabled style={{ color: "black" }}>
                                    상품 이름
                                </Button>
                            </Grid>
                            <Grid item xs={9}>
                                <TextField id="standard-basic" label="상품 이름 입력" variant="standard"
                                    style={{
                                        width: "100%",
                                        margin: "0",
                                        padding: "0"
                                    }} />
                            </Grid>
                        </Grid>
                        {/* 구분 */}
                        <Grid
                            item xs={12}
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            style={{
                                marginTop: "0.5rem"
                            }}
                        >
                            <Grid item xs={3}>
                                <Button variant="outlined" size="large" disabled style={{ color: "black" }}>
                                    구　 　분
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="buy" control={<Radio />} label="구입" />
                                        <FormControlLabel value="sell" control={<Radio />} label="판매" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="물물 교환" />
                                </FormGroup>
                            </Grid>
                        </Grid>
                        {/* 지역 선택 */}
                        <Grid item xs={12}>
                            <FormControl
                                style={{
                                    width: "100%",
                                    marginTop: "0.7rem"
                                }}
                            >
                                <Select
                                    value={locationSelected}
                                    onChange={handleLocationChange}
                                >
                                    {location.map((value, index) => {
                                        return <MenuItem value={value}>{value}</MenuItem>;
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        {/* 요청 사항 */}
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-basic"
                                multiline
                                rows={3}
                                label="요청 사항 입력"
                                variant="outlined"
                                style={{
                                    width: "100%",
                                    marginTop: "0.7rem"
                                }}
                            />
                        </Grid>
                        {/* 상품 상세 내용 */}
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-basic"
                                multiline
                                rows={3}
                                label="상품 상세 내용"
                                variant="outlined"
                                style={{
                                    width: "100%",
                                    marginTop: "0.7rem"
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleClose}>
                    등록
                </Button>
                <Button variant="contained" onClick={handleClose}>
                    취소
                </Button>
            </DialogActions>
        </Dialog >
    );
};

export default ProductRegister;