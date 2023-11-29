import { Box, CircularProgress as InfinitProgress } from "@mui/material";
import React from "react";

function CircularProgress() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InfinitProgress />
    </Box>
  );
}

export default CircularProgress;
