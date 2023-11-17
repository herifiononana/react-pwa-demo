import styled from "@emotion/styled";
import { Box, Typography, TextField, Button } from "@mui/material";

const Container = styled(Box)({
  height: "100vh",
  paddingInline: 30,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const HeadContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled(Typography)({
  width: "100%",
  textAlign: "center",
  fontSize: "1.2rem",
  padding: 10,
});

const TextInput = styled(TextField)({
  "& fieldset": {
    border: "none",
  },
  backgroundColor: "white",
  marginTop: 20,
});

const ErrorMessage = styled(Typography)({
  fontSize: ".7rem",
  color: "red",
  paddingInlineStart: 10,
});

const SubmitButton = styled(Button)({
  borderRadius: "25px",
  marginTop: 10,
  marginBottom: 10,
});

export {
  Container,
  HeadContainer,
  Title,
  TextInput,
  ErrorMessage,
  SubmitButton,
};
