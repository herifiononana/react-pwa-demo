import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import {
  CustomerFormated,
  fetchCustomers,
  formatCustomers,
} from "./clientListUtils";
import {
  ActionCell,
  ProductImageCell,
  ProductTitleCell,
  TitleCustomerCell,
} from "../../components/datagridCell";
import SearchWichFilterAndNewData from "../../components/input/searchWichFilterAndNewData";
import CircularProgress from "../../components/progress";

const Columns = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "#f1f5f9",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 2,
        paddingTop: 0.5,
        paddingBottom: 0.5,
        borderBottom: 0.3,
        borderColor: "#e1e5e9",
      }}
    >
      <Grid item xs={2} md={2}></Grid>
      <Grid item xs={5} md={5}>
        <Typography
          sx={{
            fontSize: ".8rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          CUSTOMER
        </Typography>
      </Grid>
      <Grid item xs={3} md={3}>
        <Typography
          sx={{
            fontSize: ".8rem",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          DATE CREATED
        </Typography>
      </Grid>
      <Grid item xs={2} md={2}></Grid>
    </Grid>
  );
};

const CustomerItem = ({ customer }: { customer: CustomerFormated }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 1,
        // marginBottom: 1,
      }}
    >
      <Grid item xs={2} md={2}>
        <ProductImageCell image={customer.image} />
      </Grid>
      <Grid item xs={5} md={5}>
        <TitleCustomerCell
          firstname={customer.firstname}
          lastname={customer.lastname}
          email={customer.lastname}
          billingAdress={customer.billingAdress}
        />
      </Grid>
      <Grid item xs={3} md={3}>
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
      </Grid>
      <Grid item xs={2} md={2}>
        <ActionCell />
      </Grid>
    </Grid>
  );
};

function Clients() {
  const [clients, setClients] = useState<CustomerFormated[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCustomers();
        if (isMounted) {
          setClients(formatCustomers(data));
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
    <Container
      sx={{
        backgroundColor: "primary.light",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: "5px",
        height: "90%",
      }}
    >
      <SearchWichFilterAndNewData />
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
          <Columns />
          {loading ? (
            <CircularProgress />
          ) : (
            clients.map((customer, index) => (
              <Box key={index}>
                <Divider sx={{ width: "100%" }} />
                <CustomerItem customer={customer} />
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default Clients;
