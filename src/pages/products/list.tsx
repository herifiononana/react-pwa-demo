import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { AddToCartCell, ProductTitleCell } from "../../components/datagridCell";
import { formatAmount } from "../../utils/utils";
import SearchAndFilter from "../../components/input/searchAndFilter";
import FilterByCategory, {
  Category,
} from "../../components/input/filterByCategory";
import CircularProgress from "../../components/progress";
import { Columns, ListItem } from "../../components/ListView";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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

function List() {
  const [selectedProduct, setSelectedProduct] = useState<
    { value: string; label: string } | undefined
  >(undefined);

  const { data: products, status } = useSelector(
    (state: RootState) => state.product
  );

  const filterProduct = (id: string) => {
    if (id) return products.filter((product) => product.product_id === id);
    return products;
  };

  return (
    <>
      <SearchAndFilter
        data={products}
        setSelectedProduct={setSelectedProduct}
      />
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
          <Columns firstCol="PRODUCT" secondCol="PRICE" />
          {status === "loading" ? (
            <CircularProgress />
          ) : (
            filterProduct(selectedProduct?.value || "").map(
              (product, index) => (
                <ListItem
                  key={index}
                  data={product}
                  even={index % 2 === 0}
                  TitleView={
                    <ProductTitleCell
                      title={product?.product_name || ""}
                      category={product?.product_category || ""}
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
                      {formatAmount(parseInt(product.product_price || "0"))}
                    </Typography>
                  }
                  ActionView={
                    <AddToCartCell id={parseInt(product.product_id)} />
                  }
                />
              )
            )
          )}
        </Box>
      </Box>
    </>
  );
}

export default List;
