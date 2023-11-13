import { createTheme, Theme } from "@mui/material/styles";

// todo: customize theme
export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
});
