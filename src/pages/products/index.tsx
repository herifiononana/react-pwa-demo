import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  DataGrid,
  GridColDef,
  GridTreeNodeWithRender,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { ProductFormated, formatProducts, getData } from "./ProductListUtils";
import {
  ActionCell,
  ProductCategoryeCell,
  ProductImageCell,
  ProductTitleCell,
} from "../../components/datagridCell";
import { defineGridColDef } from "../../utils/utils";
import SearchAndFilter from "../../components/input/searchAndFilter";
import FilterByCategory, {
  Category,
} from "../../components/input/filterByCategory";
import CircularProgress from "../../components/progress";

const CATEGORY_FILTER: Category[] = [
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

const columnConfig = [
  {
    field: "image",
    header: "Image",
    width: 150,
    render: (
      params: GridValueGetterParams<any, any, GridTreeNodeWithRender>
    ) => <ProductImageCell image={params.row.image} />,
  },
  {
    field: "title",
    header: "Title",
    width: 150,
    render: ({
      row: { title },
    }: GridValueGetterParams<any, any, GridTreeNodeWithRender>) => (
      <ProductTitleCell title={title} />
    ),
  },
  {
    field: "category",
    header: "Category",
    width: 150,
    render: ({
      row: { category },
    }: GridValueGetterParams<any, any, GridTreeNodeWithRender>) => (
      <ProductCategoryeCell category={category} />
    ),
  },
  { field: "tags", header: "Tags", width: 150 },
  { field: "price", header: "Price", width: 150 },
  { field: "action", header: "", flex: 1, render: () => <ActionCell /> },
];

function Products() {
  const [products, setProducts] = useState<ProductFormated[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const columns = defineGridColDef(columnConfig);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    const fetchProduct = async () => {
      try {
        const data = await getData();
        if (isMounted) setProducts(formatProducts(data));
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchProduct();

    return () => {
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
      <SearchAndFilter />
      <FilterByCategory categories={CATEGORY_FILTER} />
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
            rows={products}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            pageSizeOptions={[5, 10, 25]}
            rowHeight={100}
          />
        )}{" "}
      </Box>
    </Container>
  );
}

export default Products;
