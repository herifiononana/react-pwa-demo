import React, { useEffect, useState } from "react";
import { Box, Container, IconButton, TextField } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { DataGrid } from "@mui/x-data-grid";
import {
  ProductFormated,
  columns,
  formatProducts,
  getData,
} from "./ProductListUtils";
import CategoryButton from "../../components/buttons/categoryButton";

const CATEGORY_FILTER = [
  {
    name: "Featured",
    icon: <StarIcon sx={{ fontSize: "1rem", marginRight: 0.4 }} />,
  },
  {
    name: "On Sale",
    icon: <MonetizationOnIcon sx={{ fontSize: "1rem", marginRight: 0.4 }} />,
  },
  {
    name: "Select Category",
    icon: <FolderOpenIcon sx={{ fontSize: "1rem", marginRight: 0.4 }} />,
  },
  {
    name: "Select tag",
    icon: <LocalOfferIcon sx={{ fontSize: "1rem", marginRight: 0.4 }} />,
  },
];

function Products() {
  const [products, setProducts] = useState<ProductFormated[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getData();
      setProducts(formatProducts(data));
    };
    fetchProduct();
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
        }}
      >
        <TextField
          placeholder="Search Products"
          sx={{
            "& fieldset": {
              borderColor: "#888",
            },
          }}
        />
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
        {CATEGORY_FILTER.map(({ name, icon }, index) => (
          <CategoryButton key={index} {...{ name, icon }} />
        ))}
      </Box>

      <DataGrid
        sx={{ backgroundColor: "#fff", height: "85%" }}
        columns={columns}
        rows={products}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Container>
  );
}

export default Products;
