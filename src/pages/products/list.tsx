import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { ProductFormated, formatProducts, getData } from "./ProductListUtils";
import { AddToCartCell, ProductTitleCell } from "../../components/datagridCell";
import { formatAmount } from "../../utils/utils";
import SearchAndFilter from "../../components/input/searchAndFilter";
import FilterByCategory, {
  Category,
} from "../../components/input/filterByCategory";
import CircularProgress from "../../components/progress";
import { Columns, ListItem } from "../../components/ListView";

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
  const [products, setProducts] = useState<ProductFormated[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

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
    <>
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
          <Columns firstCol="PRODUCT" secondCol="PRICE" />
          {loading ? (
            <CircularProgress />
          ) : (
            products.map((product, index) => (
              <ListItem
                key={index}
                data={product}
                even={index % 2 === 0}
                TitleView={
                  <ProductTitleCell
                    title={product.title}
                    category={product.category}
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
                    {formatAmount(parseInt(product.price))}
                  </Typography>
                }
                ActionView={<AddToCartCell id={product.id} />}
              />
            ))
          )}
        </Box>
      </Box>
    </>
  );
}

export default List;
