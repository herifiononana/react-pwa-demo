import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Link, TextField, Typography } from "@mui/material";
import useStyles from "./styles";

function Login() {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.headContainer}>
        <Divider sx={{ width: "100%" }} />
        <Typography className={classes.title}>Connexion</Typography>
        <Divider sx={{ width: "100%" }} />
      </Box>
      <TextField placeholder="Adresse e-mail" className={classes.input} />
      <TextField placeholder="Mot de passe" className={classes.input} />
      <Button
        variant="contained"
        onClick={() => navigate("/home")}
        fullWidth
        className={classes.submitButton}
      >
        Se connecter
      </Button>
      <Link sx={{ fontSize: ".8rem", textDecoration: "none" }}>
        Mot de passe oublier ?
      </Link>
    </Box>
  );
}

export default Login;
