import React from "react";
import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import StarIcon from "@mui/icons-material/Star";
import {
  DataGrid,
  GridColDef,
  GridColumnHeaderParams,
  GridRowsProp,
} from "@mui/x-data-grid";

function Products() {
  const rows: GridRowsProp = [];

  const columns: GridColDef[] = [
    {
      field: "title",
      headerName: "title",
      width: 150,
      renderHeader: (params: GridColumnHeaderParams) =>
        params.field.toUpperCase(),
    },
    {
      field: "category",
      headerName: "category",
      width: 150,
      renderHeader: (params: GridColumnHeaderParams) =>
        params.field.toUpperCase(),
    },
    {
      field: "tags",
      headerName: "tags",
      width: 150,
      renderHeader: (params: GridColumnHeaderParams) =>
        params.field.toUpperCase(),
    },
    {
      field: "price",
      headerName: "price",
      width: 150,
      renderHeader: (params: GridColumnHeaderParams) =>
        params.field.toUpperCase(),
    },
  ];

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
        }}
      >
        <TextField placeholder="Search Products" />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          overflow: "auto",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "25px",
            backgroundColor: "white",
            paddingInline: 1,
            color: "text.primary",
            marginRight: 1,
          }}
        >
          <StarIcon sx={{ fontSize: "1.2rem", marginRight: 0.4 }} />
          <Typography>Featured</Typography>
        </Box>
      </Box>

      <DataGrid
        sx={{ backgroundColor: "#fff", height: "80%" }}
        columns={columns}
        rows={rows}
      />
    </Container>
  );
}

export default Products;
