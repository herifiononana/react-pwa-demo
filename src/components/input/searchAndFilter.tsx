import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, TextField, IconButton } from "@mui/material";

function SearchAndFilter() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextField
        placeholder="Search Products"
        sx={{
          "& fieldset": {
            borderColor: "#888",
          },
        }}
      />
      <IconButton>
        <TuneIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </Box>
  );
}

export default SearchAndFilter;
