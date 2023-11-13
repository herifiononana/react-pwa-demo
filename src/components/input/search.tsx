import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput({ handleChange }: { handleChange: () => void }) {
  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        borderRadius: 50,
      }}
      onChange={handleChange}
    />
  );
}

export default SearchInput;
