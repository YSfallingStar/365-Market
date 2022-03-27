import React, { useState } from "react";
import useActions from "../../hooks/useActions";
import usePrototypes from "../../hooks/usePrototypes";
import ProductData from "../ProductData";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import ProductRegister from "../ProductRegister";

export default function Prototypes() {
  /* 상세 내역 */
  const [openPrdDetailView, setOpenPrdDetailView] = useState(false);

  const handleOpenPrdDetailView = () => {
    setOpenPrdDetailView(true);
  };
  const handleClosePrdDetailView = () => {
    setOpenPrdDetailView(false);
  };

  /* 상품 등록 */
  const [openPrdRegister, setOpenPrdRegister] = useState(false);

  const handleOpenPrdRegister = () => {
    setOpenPrdRegister(true);
  };
  const handleClosePrdRegister = () => {
    setOpenPrdRegister(false);
  };

  /* 카테고리 */
  const [category, setCategory] = useState([
    "카테고리 선택",
    "식품",
    "문구",
    "기타"
  ]);
  const [categorySelected, setCategorySelected] = useState("카테고리 선택");

  function handleCategoryChange(event) {
    setCategorySelected(event.target.value);
  }

  const prototypes = usePrototypes();
  const { addToOrder } = useActions();
  return (
    <div style={{margin: '50px 100px'}}>
      <Grid
        item xs={12}
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          {/* 카테고리 */}
          <FormControl
            style={{
              marginBottom: "1rem"
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
        <Grid
          item xs={6}
          style={{
            textAlign: "-webkit-right"
          }}
        >
          <Button variant="outlined" size="large" onClick={handleOpenPrdRegister}>상품 등록</Button>
          <ProductRegister isOpen={openPrdRegister} handleClose={handleClosePrdRegister} />
        </Grid>
      </Grid>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, thumbnail, title, price, desc } = prototype;
          
          const click = () => {
            addToOrder(id);
          };

          return (
            <div
              className="prototype"
              key={id}
              onClick={handleOpenPrdDetailView}>
              <div
                style={{
                  padding: "25px 0 33px 0",
                }}
              >
                <video
                  autoPlay
                  loop
                  playsInline
                  className="prototype__artwork prototype__edit"
                  src={thumbnail}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div
                    className="btn btn--primary float--right"
                    onClick={handleOpenPrdDetailView}
                  >
                    <div className="content">구매</div>
                  </div>

                  {title}
                </div>
                <p className="prototype__price">{price}원</p>
                <div className="prototype__desc">
                  상품명: <span>{desc.name}</span><br/><br/>
                  지역: <span>{desc.location}</span><br/><br/>
                  게시 시간: <span>{desc.uploadDate}</span><br/><br/>
                  물물 교환 여부: <span>{desc.barter ? 'O' : 'X'}</span>
                </div>
              </div>
            </div>
          );
        })}
        <ProductData index={1} isOpen={openPrdDetailView} handleClose={handleClosePrdDetailView} />
      </div>
    </div>
  );
}