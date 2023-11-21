import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddButton({ action }: { action: () => void }) {
  return (
    <IconButton onClick={action}>
      <AddIcon sx={{ color: "blue" }} />
    </IconButton>
  );
}

export default AddButton;
