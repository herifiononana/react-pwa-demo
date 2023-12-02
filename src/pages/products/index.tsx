import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { ProductFormated, formatProducts, getData } from "./ProductListUtils";
import {
  AddToCartCell,
  ProductImageCell,
  ProductTitleCell,
} from "../../components/datagridCell";
import { formatAmount } from "../../utils/utils";
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

// const columnConfig = [
//   {
//     field: "image",
//     header: "Image",
//     width: 150,
//     render: (
//       params: GridValueGetterParams<any, any, GridTreeNodeWithRender>
//     ) => <ProductImageCell image={params.row.image} />,
//   },
//   {
//     field: "title",
//     header: "Title",
//     width: 150,
//     render: ({
//       row: { title },
//     }: GridValueGetterParams<any, any, GridTreeNodeWithRender>) => (
//       <ProductTitleCell title={title} />
//     ),
//   },
//   {
//     field: "category",
//     header: "Category",
//     width: 150,
//     render: ({
//       row: { category },
//     }: GridValueGetterParams<any, any, GridTreeNodeWithRender>) => (
//       <ProductCategoryeCell category={category} />
//     ),
//   },
//   { field: "tags", header: "Tags", width: 150 },
//   { field: "price", header: "Price", width: 150 },
//   { field: "action", header: "", flex: 1, render: () => <ActionCell /> },
// ];

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
          PRODUCT
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
          PRICE
        </Typography>
      </Grid>
      <Grid item xs={2} md={2}></Grid>
    </Grid>
  );
};
const ProductItem = ({ product }: any) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 1,
      }}
    >
      <Grid item xs={2} md={2}>
        <ProductImageCell image={product.image} />
      </Grid>
      <Grid item xs={5} md={5}>
        <ProductTitleCell title={product.title} category={product.category} />
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
          {formatAmount(parseInt(product.price))}
        </Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <AddToCartCell id={product.id} />
      </Grid>
    </Grid>
  );
};

function Products() {
  const [products, setProducts] = useState<ProductFormated[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // const columns = defineGridColDef(columnConfig);

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
          overflow: "auto",
        }}
      >
        <Box>
          <Columns />
          {loading ? (
            <CircularProgress />
          ) : (
            products.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default Products;
