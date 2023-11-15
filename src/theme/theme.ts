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
