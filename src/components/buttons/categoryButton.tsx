import React from "react";
import { Box, Typography } from "@mui/material";

interface CategoryButtonProps {
  name: string;
  action?: () => void;
  icon: React.ReactNode;
}

function CategoryButton({
  name,
  action = () => {},
  icon,
}: CategoryButtonProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: "25px",
        backgroundColor: "white",
        paddingInline: 1,
        color: "text.primary",
        marginRight: 1,
        whiteSpace: "nowrap",
      }}
      onClick={action}
    >
      {icon}
      <Typography sx={{ fontSize: ".8rem" }}>{name}</Typography>
    </Box>
  );
}

export default CategoryButton;
