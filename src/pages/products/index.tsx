import React, { useEffect, useState } from "react";
import { Box, Container, Tab, Tabs } from "@mui/material";
import Cart from "./cart";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "./list";
import { RootState, useAppDispatch } from "../../store/store";
import { getProducts } from "../../features/product/productAction";
import { useSelector } from "react-redux";

function Products() {
  const dispatch = useAppDispatch();
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "94vh",
        paddingTop: 1,
      }}
    >
      <Container>
        <Box
          sx={{
            backgroundColor: "primary.light",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
            borderRadius: "5px",
            padding: 1,
            height: "83vh",
          }}
        >
          {tabValue === 1 ? <List /> : <Cart />}
        </Box>
      </Container>

      <Tabs
        sx={{
          width: "100%",
          backgroundColor: "#FFF",
          alignItems: "center",
          height: "5vh",
        }}
        value={tabValue}
        onChange={handleChangeTab}
      >
        <Tab
          sx={{
            width: "50%",
            fontSize: ".8rem",
            textTransform: "none",
          }}
          iconPosition="start"
          icon={<ShoppingCartIcon />}
          label="Cart"
          value={0}
        />
        <Tab
          sx={{
            width: "50%",
            fontSize: ".8rem",
            textTransform: "none",
          }}
          iconPosition="start"
          icon={<Inventory2Icon />}
          label="Product"
          value={1}
        />
      </Tabs>
    </Box>
  );
}

export default Products;
