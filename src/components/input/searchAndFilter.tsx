import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, IconButton } from "@mui/material";
import Select from "react-select";
import { Product } from "../../services/product/productService";

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
  const [isDisabled] = useState(false);
  const [isLoading] = useState(false);
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
      <Box sx={{ width: "100%", zIndex: 10000 }}>
        <Select
          className="basic-single"
          classNamePrefix="select"
          onInputChange={handleInputChange}
          onChange={handleChange}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name="product"
          options={options}
          placeholder="Search Products"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: "#888",
              width: "100%",
            }),
          }}
        />
      </Box>
      <IconButton>
        <TuneIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </Box>
  );
}

export default SearchAndFilter;
