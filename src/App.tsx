import React from "react";
import "./App.css";
import { ThemeProvider as MuiTheme } from "@mui/material/styles";
import { useTheme } from "./provider/ThemeProvider";
import { Typography } from "@mui/material";

function App() {
  const { theme } = useTheme();

  return (
    <MuiTheme theme={theme}>
      <Typography>Main page</Typography>
    </MuiTheme>
  );
}

export default App;
