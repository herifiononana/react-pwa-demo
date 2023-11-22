import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "./provider/ThemeProvider";
import RouterProvider from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AuthProvider } from "./provider/AuthProvider";

function App() {
  const { theme } = useTheme();

  return (
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <RouterProvider />
        </ThemeProvider>
      </LocalizationProvider>
    </AuthProvider>
  );
}

export default App;
