import React, { useState } from "react";
import VoiceMemo from "./voiceMemo";
import Home from "./home";
import { Box } from "@mui/material";
import SAV from "./sav";
import Catalog from "./catalog";
import Navbar from "../components/navigation/Navbar";

// todo: all page not specified
const HOME_PAGES = [<Home />, <VoiceMemo />, <Catalog />, <SAV />];

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
        overflowX: "hidden",
      }}
    >
      <Box sx={{ height: "100%" }}>{HOME_PAGES[currentPage]}</Box>

      <Navbar
        switchToHome={() => switchToPage(0)}
        switchToSAV={() => switchToPage(3)}
        switchToCatalog={() => switchToPage(2)}
        switchToClient={() => switchToPage(0)}
        switchToCommand={() => switchToPage(1)}
      />
    </Box>
  );
}

export default Main;
