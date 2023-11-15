import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "./provider/ThemeProvider";
import RouterProvider from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  const { theme } = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <RouterProvider />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
