import React from "react";
import { Box, TextField, TextFieldProps } from "@mui/material";

function TextInput({ placeholder, name, onChange, ...props }: TextFieldProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        padding: 0,
        marginBottom: 3,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "25px",
        background: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
      }}
    >
      <TextField
        placeholder={placeholder}
        sx={{
          width: "85%",
          border: 0,
          "& fieldset": {
            border: "none",
          },
        }}
      />
    </Box>
  );
}

export default TextInput;
