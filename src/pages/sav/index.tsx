import React from "react";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
  // makeStyles,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from "@mui/icons-material/Search";
import TextInput from "../../components/input/textInput";

function SAV() {
  return (
    <Box
      sx={{
        height: "90vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        padding: 1,
      }}
    >
      <Typography
        sx={{ width: "100%", textAlign: "center", fontSize: "1.2rem" }}
      >
        FRED ALLARD
      </Typography>
      <Box sx={{ width: "100%" }}>
        <IconButton>
          <ArrowBackIosIcon sx={{ color: "blue" }} />
        </IconButton>
      </Box>

      <Box>
        <Typography sx={{ textAlign: "center", fontSize: ".7rem" }}>
          PROFIL CLIENT
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            marginBottom: 3,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "25px",
            background: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
          }}
        >
          <TextField
            placeholder="Nom du client"
            sx={{
              width: "85%",
              border: 0,
              "& fieldset": {
                border: "none",
              },
            }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: ".7rem" }}>PROFIL CLIENT</Typography>
        <TextInput placeholder="Adresse e-mail" />
        <TextInput placeholder="Numero de telephone" />
        <Select
          placeholder="Nationalite"
          sx={{
            width: "100%",
            display: "flex",
            marginBottom: 3,
            border: 0,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "25px",
            background: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
          }}
          style={{ border: "none" }}
        >
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
          <Typography sx={{ fontSize: ".7rem" }}>
            SUSCEPTIBILITE D'ACHAT
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflowX: "auto",
              flexWrap: "nowrap",
            }}
          >
            <IconButton
              sx={{
                background:
                  "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
                width: "2rem",
                height: "2rem",
              }}
            >
              <Typography>1</Typography>
            </IconButton>
            <IconButton
              sx={{
                background:
                  "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
                width: "2rem",
                height: "2rem",
              }}
            >
              <Typography>2</Typography>
            </IconButton>
            <IconButton
              sx={{
                background:
                  "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
                width: "2rem",
                height: "2rem",
              }}
            >
              <Typography>3</Typography>
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ width: "50%", textAlign: "center" }}>
          <Typography sx={{ fontSize: ".7rem" }}>
            DATE DE PRISE DE CONTACT
          </Typography>
          <DatePicker sx={{ border: "none" }} />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: ".7rem" }}>INFORMATIONS CLIENT</Typography>
        <TextField
          multiline
          rows={7}
          placeholder="..."
          sx={{ width: "100%", marginBottom: 3 }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ width: "70%", borderRadius: "25px", alignSelf: "center" }}
      >
        ENREGISTRER
      </Button>
    </Box>
  );
}

export default SAV;
