import React from "react";
import useStyles from "./styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Link, TextField, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

interface Credential {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Doit être un email valide")
    .required("Email obligatoire"),
  password: yup.string().trim().required("Mot de passe obligatoire"),
});

const initialValues: Credential = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const classes = useStyles();

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: () => {
      // todo: add logic here
      setTimeout(() => {
        alert(JSON.stringify(values || errors));
        navigate("/home");
      }, 2000);
    },
  });

  const { errors, values, handleSubmit, isSubmitting, handleChange } = formik;

  return (
    <Box className={classes.container}>
      <Box className={classes.headContainer}>
        <Divider sx={{ width: "100%" }} />
        <Typography className={classes.title}>Connexion</Typography>
        <Divider sx={{ width: "100%" }} />
      </Box>

      <form action="#" onSubmit={handleSubmit}>
        <TextField
          placeholder="Adresse e-mail"
          className={classes.input}
          name="email"
          fullWidth
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && (
          <Typography className={classes.error}>{errors.email}</Typography>
        )}
        <TextField
          placeholder="Mot de passe"
          className={classes.input}
          name="password"
          type="password"
          fullWidth
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && (
          <Typography className={classes.error}>{errors.password}</Typography>
        )}
        <Button
          variant="contained"
          type="submit"
          onSubmit={() => handleSubmit()}
          onClick={() => handleSubmit()}
          fullWidth
          className={classes.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Veuillez patienter" : "Se connecter"}
        </Button>
      </form>
      <Link sx={{ fontSize: ".8rem", textDecoration: "none" }}>
        Mot de passe oublier ?
      </Link>
    </Box>
  );
}

export default Login;
