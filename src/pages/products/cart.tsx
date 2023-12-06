import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography as MUITypography,
} from "@mui/material";
import CircularProgress from "../../components/progress";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { BoxFlex, ButtonText, Typography } from "./styles";
import { BottomItem, ProductItem, RemoveProductItem } from "./cartUtil";
import { Columns, ListItem } from "../../components/ListView";

// todo: refactor code

function Cart() {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <MUITypography sx={{ color: "primary.main" }}>
            Customer:
          </MUITypography>
          <Box></Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton sx={{ color: "primary.main" }}>
              <PersonAddAlt1Icon />
            </IconButton>
            <IconButton sx={{ color: "primary.main" }}>
              <TuneIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "40vh",
            borderRadius: "5px",
            backgroundColor: "white",
            overflow: "auto",
            overflowX: "hidden",
            marginBottom: 1,
          }}
        >
          <Columns firstCol={"PRODUCT"} secondCol={"TOTAL"} />
          {loading ? (
            <CircularProgress />
          ) : (
            [1, 1].map((product, index) => (
              <ListItem
                key={index}
                data={product}
                even={index % 2 === 0}
                TitleView={<ProductItem />}
                SecondContent={<Typography>$1.00</Typography>}
                ActionView={<RemoveProductItem />}
              />
            ))
          )}
        </Box>
        <Box sx={{ marginBottom: 1 }}>
          <BottomItem
            title={"Add Fee:"}
            Action={
              <IconButton>
                <AddCircleIcon />
              </IconButton>
            }
          />
          <BottomItem
            title={"Add Shipping:"}
            Action={
              <IconButton>
                <AddCircleIcon />
              </IconButton>
            }
          />
          <BottomItem title={"Subtotal:"} result="$147.05" />
          <BottomItem title={"Discount:"} result="-$-18.00" />
          <BottomItem title={"Taxes:"} result="excl. US $14.71" />
        </Box>
        <BoxFlex>
          <Button variant="outlined">Order Note</Button>
          <Button variant="outlined">Order Meta</Button>
          <Button variant="outlined">Save to server</Button>
        </BoxFlex>
        <BoxFlex>
          <Button
            sx={{
              width: "25%",
              color: "#FFF",
              backgroundColor: "#cf1124",
              "&:focus": { backgroundColor: "#cf1124" },
            }}
          >
            Void
          </Button>
          <Button
            sx={{
              width: "75%",
              color: "#FFF",
              backgroundColor: "#0c6b58",
              "&:focus": { backgroundColor: "#0c6b58" },
            }}
          >
            Checkout $46.00
          </Button>
        </BoxFlex>
      </Box>
      <Box sx={{ display: "flex", overflow: "auto", backgroundColor: "#FFF" }}>
        <ButtonText>Cart $50.49</ButtonText>
        <ButtonText>Cart $50.49</ButtonText>
        <ButtonText>Cart $50.49</ButtonText>
        <ButtonText>Cart $50.49</ButtonText>
        <ButtonText>Cart $50.49</ButtonText>
      </Box>
    </>
  );
}

export default Cart;
