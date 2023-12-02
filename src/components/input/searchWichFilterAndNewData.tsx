import React from "react";
import { Box, TextField, Tooltip, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

function SearchWichFilterAndNewData({
  addNewData,
}: {
  addNewData: () => void;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <TextField
        placeholder="Search Customers"
        sx={{
          "& fieldset": {
            borderColor: "#888",
          },
        }}
      />

      <Tooltip title="Add new customer">
        <IconButton onClick={addNewData}>
          <PersonAddAlt1Icon sx={{ color: "primary.main" }} />
        </IconButton>
      </Tooltip>
      <IconButton>
        <TuneIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </Box>
  );
}

export default SearchWichFilterAndNewData;
