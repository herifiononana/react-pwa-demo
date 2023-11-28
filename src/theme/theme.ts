import { createTheme, Theme } from "@mui/material/styles";

// todo: improve redundant code
export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#243b53", // Couleur principale (par défaut pour les boutons, la barre de navigation, etc.)
      dark: "#243b53",
    },
    secondary: {
      main: "#FFFFFF", // Couleur secondaire (par défaut pour certains éléments d'accent)
    },
    text: {
      primary: "#000", // Couleur du texte principal
      secondary: "#888", // Couleur du texte secondaire
    },
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
