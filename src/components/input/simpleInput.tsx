import { Container, TextField, Typography } from "@mui/material";
import React from "react";

interface SimpleInputProps {
  label: string;
  name?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<any>) => void;
}

function SimpleInput({
  label,
  name = "",
  value,
  handleChange,
}: SimpleInputProps) {
  return (
    <Container sx={{ marginBottom: 2 }}>
      <Typography sx={{ fontSize: ".8rem", color: "primary.main" }}>
        {label.toUpperCase()}
      </Typography>
      <TextField
        variant="outlined"
        name={name}
        fullWidth
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
}

export default SimpleInput;
