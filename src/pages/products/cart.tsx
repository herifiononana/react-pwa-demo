import React, { useEffect } from "react";
import { Box, Button, IconButton } from "@mui/material";
import CircularProgress from "../../components/progress";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { BoxFlex, ButtonText, Typography } from "./styles";
import {
  BottomItem,
  RemoveProductItem,
  formatCustomerOption,
} from "./cartUtil";
import { Columns, ListItem } from "../../components/ListView";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { getCustomers } from "../../features/customer/customerAction";
import { getCart } from "../../features/cart/cartAction";
import { ProductTitleCell } from "../../components/datagridCell";
import { formatAmount } from "../../utils/utils";
import { setCurrentCustomer } from "../../features/customer/currentCustomerSlice";
import Header from "../../components/customer/header";
import { SearchOption } from "../../type/types";

// todo: refactor code

function Cart() {
  const dispatch = useAppDispatch();
  const { data: customers } = useSelector((state: RootState) => state.customer);
  const options = formatCustomerOption(customers);
  const { data: currentCustomer } = useSelector(
    (state: RootState) => state.currentCustomer
  );

  const { status, data: cart } = useSelector(
    (state: RootState) => state.getCart
  );

  const handleChange = (selectedOption: any) => {
    dispatch(
      setCurrentCustomer({
        value: selectedOption.value,
        label: selectedOption.label,
      } as SearchOption)
    );
  };

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  useEffect(() => {
    if (currentCustomer?.value) {
      dispatch(getCart(currentCustomer?.value));
    }
  }, [currentCustomer, dispatch]);

  return (
    <>
      <Box>
        <Header {...{ currentCustomer, options, handleChange }} />
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
          {status === "loading" ? (
            <CircularProgress />
          ) : (
            cart?.data.map(
              (data: any, index: number) =>
                currentCustomer && (
                  <ListItem
                    key={index}
                    data={data?.product}
                    even={index % 2 === 0}
                    TitleView={
                      <ProductTitleCell
                        title={data?.product?.product_name || ""}
                        category={data?.product?.product_category || ""}
                      />
                    }
                    SecondContent={
                      <Typography
                        sx={{
                          fontSize: ".8rem",
                          textAlign: "center",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {formatAmount(parseInt(data?.total || "0"))}
                      </Typography>
                    }
                    ActionView={
                      <RemoveProductItem
                        id={parseInt(data?.product?.product_id)}
                      />
                    }
                  />
                )
            )
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
          <BottomItem
            title={"Subtotal:"}
            result={String(cart?.subtotal) || ""}
          />
          <BottomItem title={"Discount:"} result={String(cart?.discount)} />
          <BottomItem title={"Taxes:"} result={String(cart?.taxes)} />
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
