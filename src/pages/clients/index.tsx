import React, { useEffect, useState } from "react";
import { Box, Container, IconButton, TextField, Tooltip } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { DataGrid } from "@mui/x-data-grid";
import {
  CustomerFormated,
  columns,
  fetchCustomers,
  formatCustomers,
} from "./clientListUtils";

function Clients() {
  const [clients, setClients] = useState<CustomerFormated[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchCustomers();
      setClients(formatCustomers(data));
    };
    fetch();
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <TextField
          placeholder="Search Customers"
          sx={{
            "& fieldset": {
              borderColor: "#888",
            },
          }}
        />

        <Tooltip title="Add new customer">
          <IconButton>
            <PersonAddAlt1Icon sx={{ color: "primary.main" }} />
          </IconButton>
        </Tooltip>
        <IconButton>
          <TuneIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Box>
      <DataGrid
        sx={{ backgroundColor: "#fff", height: "85%" }}
        columns={columns}
        rows={clients}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Container>
  );
}

export default Clients;
