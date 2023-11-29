import React, { useEffect, useState } from "react";
import { Box, Container, IconButton, TextField, Tooltip } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridTreeNodeWithRender,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import {
  CustomerFormated,
  fetchCustomers,
  formatCustomers,
} from "./clientListUtils";
import { ActionCell, ProductImageCell } from "../../components/datagridCell";
import { defineGridColDef } from "../../utils/utils";
import SearchWichFilterAndNewData from "../../components/input/searchWichFilterAndNewData";
import CircularProgress from "../../components/progress";

const columnConfig = [
  {
    field: "image",
    header: "",
    width: 150,
    render: (
      params: GridValueGetterParams<any, any, GridTreeNodeWithRender>
    ) => <ProductImageCell image={params.row.image} />,
  },
  {
    field: "firstname",
    header: "first name",
    width: 150,
  },
  {
    field: "lastname",
    header: "last name",
    width: 150,
  },
  {
    field: "email",
    header: "email",
    width: 150,
  },
  {
    field: "billing adress",
    header: "billing adress",
    width: 150,
  },
  {
    field: "date created",
    header: "date created",
    width: 150,
  },
  { field: "action", header: "", flex: 1, render: () => <ActionCell /> },
];

function Clients() {
  const [clients, setClients] = useState<CustomerFormated[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const columns = defineGridColDef(columnConfig);
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const data = await fetchCustomers();
      setClients(formatCustomers(data));
      setLoading(false);
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
      <SearchWichFilterAndNewData />
      <Box
        sx={{
          width: "100%",
          height: "85%",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <DataGrid
            sx={{ backgroundColor: "#fff", height: "100%" }}
            columns={columns as GridColDef[]}
            rows={clients}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[5, 10, 25]}
            rowHeight={100}
          />
        )}
      </Box>
    </Container>
  );
}

export default Clients;
