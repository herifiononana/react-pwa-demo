import styled from "@emotion/styled";
import { Box, Typography, Link as MUILink } from "@mui/material";

const Container = styled(Box)({
  height: "100vh",
  backgroundColor: "#eeeeee",
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

const ErrorMessage = styled(Typography)({
  fontSize: ".7rem",
  color: "red",
  paddingInlineStart: 10,
});

const Text = styled(Typography)({
  fontSize: ".9rem",
  color: "#444444",
});

const Link = styled(MUILink)({
  fontSize: ".8rem",
  color: "#444444",
  textDecoration: "none",
});

export { Container, HeadContainer, Title, ErrorMessage, Text, Link };
