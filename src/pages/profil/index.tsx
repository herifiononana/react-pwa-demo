import React from "react";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";

// todo: improve page
function Profil() {
  const navigate = useNavigate();
  const { logedOut } = useAuth();

  // const handleLogout = () => {
  //   logout()
  // };
  return (
    <Box
      sx={{
        height: "100vh",
        padding: 1,
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
      }}
    >
      <IconButton
        sx={{
          background: "linear-gradient(to bottom right, #f0f0f0, #ffffff)",
          marginInline: ".1rem",
          width: "2rem",
          height: "2rem",
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosIcon sx={{ color: "blue", fontSize: ".8rem" }} />
      </IconButton>
      <Box
        sx={{
          paddingTop: "10%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: "5rem", height: "5rem", marginBottom: 2 }} />
        <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          John Cruif
        </Typography>
        <Typography sx={{ fontSize: ".9rem", color: "#888888" }}>
          +261 33 54 465 12
        </Typography>
        <Typography sx={{ fontSize: ".9rem" }}>JohnCruif@gmail.com</Typography>
        <Button
          variant="contained"
          onClick={logedOut}
          sx={{ borderRadius: 25, marginTop: 2 }}
        >
          Se deconnecter
        </Button>
      </Box>
    </Box>
  );
}

export default Profil;
