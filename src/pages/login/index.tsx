import React from "react";
import {
  Container,
  HeadContainer,
  SubmitButton,
  TextInput,
  Title,
  ErrorMessage,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Link } from "@mui/material";
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
    <Container>
      <HeadContainer>
        <Divider sx={{ width: "100%" }} />
        <Title>Connexion</Title>
        <Divider sx={{ width: "100%" }} />
      </HeadContainer>

      <Box sx={{ width: "100%" }}>
        <form action="#" onSubmit={handleSubmit}>
          <TextInput
            placeholder="Adresse e-mail"
            name="email"
            fullWidth
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <TextInput
            placeholder="Mot de passe"
            name="password"
            type="password"
            fullWidth
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          <SubmitButton
            variant="contained"
            type="submit"
            onSubmit={() => handleSubmit()}
            onClick={() => handleSubmit()}
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? "Veuillez patienter" : "Se connecter"}
          </SubmitButton>
        </form>
      </Box>
      <Link sx={{ fontSize: ".8rem", textDecoration: "none" }}>
        Mot de passe oublier ?
      </Link>
    </Container>
  );
}

export default Login;
