import React, { useEffect } from "react";
import { Box, useTheme } from "@mui/material";
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

      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "#ecf0f4",
          position: "fixed",
          marginTop: theme.spacing(4),
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Main;
