import React, { useEffect } from "react";
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
import {
  BottomItem,
  RemoveProductItem,
  formatCustomerOption,
} from "./cartUtil";
import { Columns, ListItem } from "../../components/ListView";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import Select from "react-select";
import COLORS from "../../styles/color";
import { getCustomers } from "../../features/customer/customerAction";
import CloseIcon from "@mui/icons-material/Close";
import { getCart } from "../../features/cart/cartAction";
import { ProductTitleCell } from "../../components/datagridCell";
import { formatAmount } from "../../utils/utils";
import {
  CustomerOption,
  cleatCurrentCustomer,
  setCurrentCustomer,
} from "../../features/customer/currentCustomerSlice";

// todo: refactor react-select component

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
      } as CustomerOption)
    );
  };

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  useEffect(() => {
    if (currentCustomer?.value) {
      dispatch(getCart(currentCustomer?.value));
      // setLoading(true);
    }
  }, [currentCustomer, dispatch]);

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
          <MUITypography sx={{ color: "primary.main", marginRight: 0.5 }}>
            Customer:
          </MUITypography>
          <Box
            sx={{
              zIndex: 1000,
              width: "100%",
              textAlign: "left",
            }}
          >
            {currentCustomer?.value ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MUITypography
                  sx={{
                    borderRadius: "25px",
                    paddingInline: 1,
                    color: COLORS.text.white,
                    fontSize: ".9rem",
                    backgroundColor: "primary.main",
                  }}
                >
                  {currentCustomer.label}
                </MUITypography>
                <IconButton
                  onClick={() => {
                    dispatch(cleatCurrentCustomer());
                  }}
                >
                  <CloseIcon sx={{ color: "primary.main" }} />
                </IconButton>
              </Box>
            ) : (
              <Select
                className="basic-single"
                classNamePrefix="select"
                // onInputChange={handleInputChange}
                onChange={handleChange}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="product"
                options={options}
                placeholder="Select customer"
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: "#888",
                    width: "100%",
                  }),
                  option: () => ({
                    fontSize: ".9rem",
                    margin: 20,
                    color: COLORS.text.main,
                  }),
                }}
              />
            )}
          </Box>
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
