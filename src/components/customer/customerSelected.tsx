import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import COLORS from "../../styles/color";

interface CustomerSelectedProps {
  value: string;
  onClose: () => void;
}

function CustomerSelected({ value, onClose }: CustomerSelectedProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          borderRadius: "25px",
          paddingInline: 1,
          color: COLORS.text.white,
          fontSize: ".9rem",
          backgroundColor: "primary.main",
        }}
      >
        {value}
      </Typography>
      <IconButton onClick={onClose}>
        <CloseIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </Box>
  );
}

export default CustomerSelected;
