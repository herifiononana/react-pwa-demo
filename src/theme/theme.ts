import { createTheme, Theme } from "@mui/material/styles";

// todo: improve redundant code
export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#243b53", // Main color (default for buttons, navigation bar, etc.)
      dark: "#243b53",
      light: "#e2e8f0",
    },
    secondary: {
      main: "#FFFFFF", // Secondary color (default for some accent elements)
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#486581",
      secondary: "#888",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          fontSize: ".8rem",
          "& fieldset": {
            borderColor: "black",
          },
          color: "black",
          backgroundColor: "white",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
    },
  },
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
    },
  },
});
