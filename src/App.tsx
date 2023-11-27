import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "./provider/ThemeProvider";
import RouterProvider from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AuthProvider } from "./provider/AuthProvider";
import { Provider as StoreProvider } from "react-redux";
import store from "./store/store";

function App() {
  const { theme } = useTheme();

  return (
    <StoreProvider store={store}>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <RouterProvider />
          </ThemeProvider>
        </LocalizationProvider>
      </AuthProvider>
    </StoreProvider>
  );
}

export default App;
