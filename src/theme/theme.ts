import { createTheme, Theme } from "@mui/material/styles";

// todo: improve redundant code
export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
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
