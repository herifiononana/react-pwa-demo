import React, { useEffect } from "react";
import { Box, Container, useTheme } from "@mui/material";
import { useAuth } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import ROUTE from "../routes/route";
import SwipableNavigation from "../components/navigation/SwipableNavigation";
import { Outlet } from "react-router-dom";

function Main() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate(ROUTE.LOGIN);
  }, [isAuthenticated, navigate]);
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ zIndex: 1 }}>
        <SwipableNavigation />
      </Box>

      <Container
        sx={{
          height: "100vh",
          marginTop: theme.spacing(6),
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
}

export default Main;
