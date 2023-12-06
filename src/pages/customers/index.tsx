import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { ActionCell, TitleCustomerCell } from "../../components/datagridCell";
import SearchWichFilterAndNewData from "../../components/input/searchWichFilterAndNewData";
import CircularProgress from "../../components/progress";
import { Columns, ListItem } from "../../components/ListView";
import AddOrEditCustomerModal from "../../components/customer/addOrEditCustomer";
import { RootState, useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import { getCustomers } from "../../features/customer/customerAction";

function Customers() {
  const [openModalCustomer, setOpenModalCustomer] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const {
    status,
    data: customers,
    error,
  } = useSelector((state: RootState) => state.customer);

  useEffect(() => {
    dispatch(getCustomers());
  }, [dispatch]);

  return (
    <Box sx={{ padding: 1, backgroundColor: "primary.light" }}>
      <Container
        sx={{
          backgroundColor: "primary.light",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
          padding: 1,
          borderRadius: "5px",
          height: "93vh",
        }}
      >
        <SearchWichFilterAndNewData
          addNewData={() => setOpenModalCustomer(true)}
        />
        <Box
          sx={{
            width: "100%",
            height: "85%",
            borderRadius: "5px",
            backgroundColor: "white",
            overflow: "auto",
          }}
        >
          <Box>
            <Columns firstCol="CUSTOMER" secondCol="DATE CREATED" />
            {status === "loading" ? (
              <CircularProgress />
            ) : (
              customers.map((customer, index) => (
                <Box key={index}>
                  <Divider sx={{ width: "100%" }} />
                  <ListItem
                    even={index % 2 === 0}
                    data={customer}
                    TitleView={
                      <TitleCustomerCell
                        firstname={customer?.first_name || ""}
                        lastname={customer?.last_name || ""}
                        email={customer?.email || ""}
                        billingAdress={customer.billing?.address_1 || ""}
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
                        {customer?.date_created}
                      </Typography>
                    }
                    ActionView={<ActionCell />}
                  />
                </Box>
              ))
            )}
          </Box>
        </Box>
        <AddOrEditCustomerModal
          open={openModalCustomer}
          handleClose={() => setOpenModalCustomer(false)}
        />
      </Container>
    </Box>
  );
}

export default Customers;
