import React from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import useStyles from "./styles";

// todo: remove input border
function SAV() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>FRED ALLARD</Typography>
      <Box sx={{ width: "100%" }}>
        <IconButton className={classes.iconButton}>
          <ArrowBackIosIcon sx={{ color: "blue", fontSize: ".8rem" }} />
        </IconButton>
      </Box>

      <Box>
        <Typography
          className={[classes.subTitle, classes.textCenter].join(" ")}
        >
          PROFIL CLIENT
        </Typography>
        <Box className={classes.profilClientContainer}>
          <TextField
            placeholder="Nom du client"
            sx={{
              "& fieldset": {
                border: "none",
              },
              backgroundColor: "white",
            }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <Typography className={classes.subTitle}>PROFIL CLIENT</Typography>
        <TextField placeholder="Adresse e-mail" className={classes.textfield} />
        <TextField
          placeholder="Numero de telephone"
          className={classes.textfield}
        />
        <Select placeholder="Nationalite" className={classes.select}>
          <MenuItem>Francais</MenuItem>
          <MenuItem>Americain</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 3,
        }}
      >
        <Box sx={{ width: "50%", textAlign: "center" }}>
          <Typography className={classes.textNormalSize}>
            SUSCEPTIBILITE D'ACHAT
          </Typography>
          <Box className={classes.susceptibilityContainer}>
            <IconButton className={classes.iconButton}>
              <Typography>1</Typography>
            </IconButton>
            <IconButton className={classes.iconButton}>
              <Typography>2</Typography>
            </IconButton>
            <IconButton className={classes.iconButton}>
              <Typography>3</Typography>
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ width: "50%" }} className={classes.textCenter}>
          <Typography className={classes.textNormalSize}>
            DATE DE PRISE DE CONTACT
          </Typography>
          <DatePicker
            sx={{
              border: "none",
              "& fieldset": {
                border: "none",
              },
            }}
          />
        </Box>
      </Box>
      <Box>
        <Typography className={classes.textNormalSize}>
          INFORMATIONS CLIENT
        </Typography>
        <TextField
          multiline
          rows={7}
          placeholder="..."
          sx={{ width: "100%", marginBottom: 3 }}
        />
      </Box>
      <Button variant="contained" className={classes.submitButton}>
        ENREGISTRER
      </Button>
    </Box>
  );
}

export default SAV;
