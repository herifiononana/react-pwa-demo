import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "./provider/ThemeProvider";
import RouterProvider from "./routes";

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider />
    </ThemeProvider>
  );
}

export default App;
