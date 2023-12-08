import React from "react";
import { Box } from "@mui/material";
import COLORS from "../../styles/color";
import Select from "react-select";

interface AutocompleteProps {
  placeholder?: string;
  handleChange: (value: any) => void;
  handleInputChange?: (value: any) => void;
  options: any[];
}
function Autocomplete({
  placeholder,
  handleChange,
  handleInputChange,
  options,
}: AutocompleteProps) {
  return (
    <Box sx={{ width: "100%", zIndex: 10000 }}>
      <Select
        className="basic-single"
        classNamePrefix="select"
        onChange={handleChange}
        onInputChange={handleInputChange}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="product"
        options={options}
        placeholder={placeholder ? placeholder : "Search"}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "#888",
            width: "100%",
          }),
          option: () => ({
            fontSize: ".9rem",
            margin: 20,
            color: COLORS.text.main,
          }),
        }}
      />
    </Box>
  );
}

export default Autocomplete;
