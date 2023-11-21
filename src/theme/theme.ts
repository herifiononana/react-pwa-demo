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
          background: "linear-gradient(to bottom right, #e0e0e0, #ffffff)",
          border: 0,
          borderRadius: "25px",
          "& fieldset": {
            border: "none",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          fontSize: ".8rem",
          background: "linear-gradient(to bottom right, #e0e0e0, #ffffff)",
          border: "none",
          borderRadius: "25px",
          "& fieldset": {
            border: "none",
          },
        },
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
      styleOverrides: {
        root: {
          fontSize: ".8rem",
          background: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
          border: 0,
          borderRadius: "25px",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          fontSize: ".8rem",
          background: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
          border: 0,
          borderRadius: "25px",
        },
      },
    },
  },
});
