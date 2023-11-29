import React from "react";
import { Box } from "@mui/material";
import CategoryButton from "../buttons/categoryButton";

export interface Category {
  name: string;
  icon: React.ReactNode;
}

function FilterByCategory({ categories }: { categories: Category[] }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        overflow: "auto",
        padding: 2,
      }}
    >
      {categories.map(({ name, icon }, index) => (
        <CategoryButton key={index} {...{ name, icon }} />
      ))}
    </Box>
  );
}

export default FilterByCategory;
