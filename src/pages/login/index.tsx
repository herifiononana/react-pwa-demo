import React from "react";
import {
  Container,
  HeadContainer,
  Title,
  ErrorMessage,
  Text,
  Link,
} from "./styles";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Box,
  Container as MUIContainer,
  Divider,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import ROUTE from "../../routes/route";
import { useAuth } from "../../provider/AuthProvider";
import AuthService from "../../services/auth/authService";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../store/store";
// import { loginUser } from "../../features/authSlice/authAction";
import { AuthCredentials } from "../../services/auth/wooCommerceAuth";

interface Credential {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    // .email("Doit être un email valide")
    .required("Email obligatoire"),
  password: yup.string().trim().required("Mot de passe obligatoire"),
});

const initialValues: Credential = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  // const dispatch = useDispatch();
  // const { error, status, user } = useSelector((state: RootState) => state.auth);

  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit: async () => {
      const credential: AuthCredentials = {
        username: values.email,
        password: values.password,
      };
      try {
        await AuthService.login(credential, () => navigate(ROUTE.HOME));
        // resetForm();
      } catch (error) {
        // todo: Handle errors appropriately (show error Message)
        console.error("Error during authentication:", error);
      }
    },
  });

  const {
    errors,
    values,
    handleSubmit,
    isSubmitting,
    handleChange,
    // resetForm,
  } = formik;

  if (isAuthenticated) return <Navigate to={ROUTE.HOME} />;

  return (
    <Container>
      {/* todo: add Logo and remove Title */}
      <HeadContainer>
        <Divider sx={{ width: "100%" }} />
        <Title>Connexion</Title>
        <Divider sx={{ width: "100%" }} />
      </HeadContainer>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          padding: 1,
          paddingTop: 5,
          paddingBottom: 5,
          border: 1,
        }}
      >
        <form action="#" onSubmit={handleSubmit}>
          <MUIContainer sx={{ marginBottom: 2 }}>
            <Text>Username or Email Address</Text>
            <TextField
              variant="outlined"
              name="email"
              fullWidth
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </MUIContainer>
          <MUIContainer sx={{ marginBottom: 2 }}>
            <Text>Password</Text>
            <TextField
              variant="outlined"
              name="password"
              type="password"
              fullWidth
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </MUIContainer>
          <MUIContainer
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              sx={{ color: "#444444" }}
              control={<Checkbox />}
              label="Remember me"
            />
            <Button
              variant="contained"
              type="submit"
              onSubmit={() => handleSubmit()}
              onClick={() => handleSubmit()}
              disabled={isSubmitting}
            >
              Log In
            </Button>
          </MUIContainer>
        </form>
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link
          sx={{
            marginBottom: 1,
          }}
        >
          Lost your password?
        </Link>
        <Link>Go to Demo store</Link>
      </Box>
    </Container>
  );
}

export default Login;
