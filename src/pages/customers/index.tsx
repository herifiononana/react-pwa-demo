import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import {
  CustomerFormated,
  fetchCustomers,
  formatCustomers,
} from "./customersListUtils";
import { ActionCell, TitleCustomerCell } from "../../components/datagridCell";
import SearchWichFilterAndNewData from "../../components/input/searchWichFilterAndNewData";
import CircularProgress from "../../components/progress";
import { Columns, ListItem } from "../../components/ListView";
import AddOrEditCustomerModal from "../../components/customer/addOrEditCustomer";

function Customers() {
  const [customers, setCustomers] = useState<CustomerFormated[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModalCustomer, setOpenModalCustomer] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCustomers();
        if (isMounted) {
          setCustomers(formatCustomers(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      // Cleanup function to run when the component is unmounted
      isMounted = false;
    };
  }, []);

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
            {loading ? (
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
                        firstname={customer.firstname}
                        lastname={customer.lastname}
                        email={customer.lastname}
                        billingAdress={customer.billingAdress}
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
                        {customer.dateCreated}
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
