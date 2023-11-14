import React from "react";
import { Button } from "@mui/material";

interface CategoryButtonProps {
  name: string;
  action: () => void;
}

function CategoryButton({ name, action }: CategoryButtonProps) {
  return (
    <Button
      size="small"
      sx={{
        minWidth: "100px",
        fontSize: ".7rem",
        color: "black",
        fontWeight: 1,
      }}
      onClick={action}
    >
      {name.toLocaleUpperCase()}
    </Button>
  );
}

export default CategoryButton;
