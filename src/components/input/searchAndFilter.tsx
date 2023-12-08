import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, IconButton } from "@mui/material";
import { Product } from "../../services/product/productService";
import Autocomplete from "../autoComplete/Autocomplete";

interface SearchOption {
  value: string;
  label: string;
}

interface SearchAndFilterProps {
  data: Product[];
  setSelectedProduct: React.Dispatch<
    React.SetStateAction<SearchOption | undefined>
  >;
}

function SearchAndFilter({ data, setSelectedProduct }: SearchAndFilterProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const transformProductOptions = (searchTerm: string) => {
    return data
      .filter((product) => {
        // Filter products that match your search terms
        const searchTerms = searchTerm.toLowerCase().split(" ");
        return searchTerms.every((term) =>
          `${product.product_name} ${product.product_category}`
            .toLowerCase()
            .includes(term)
        );
      })
      .map((product) => ({
        value: product.product_id,
        label: product.product_name,
      }));
  };

  const handleChange = (selectedOption: any) => {
    setSelectedProduct(selectedOption as SearchOption);
  };

  const handleInputChange = (input: React.SetStateAction<string>) => {
    setSearchTerm(input);
  };

  const options = transformProductOptions(searchTerm);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Autocomplete
        placeholder="Search Product"
        {...{ options, handleChange, handleInputChange }}
      />
      <IconButton>
        <TuneIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </Box>
  );
}

export default SearchAndFilter;
