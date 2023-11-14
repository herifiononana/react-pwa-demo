import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import VoiceMemo from "./voiceMemo";
import Home from "./home";
import More from "./more";
import { Box } from "@mui/material";

const HOME_PAGES = [<Home />, <VoiceMemo />, <More />];

function Main() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const switchToPage = (page: number) => setCurrentPage(page);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Box sx={{ height: "100%" }}>{HOME_PAGES[currentPage]}</Box>

      <Navbar
        switchToHome={() => switchToPage(0)}
        switchToMemo={() => switchToPage(1)}
        switchToMore={() => switchToPage(2)}
      />
    </Box>
  );
}

export default Main;
