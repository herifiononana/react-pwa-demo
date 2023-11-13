import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import VoiceMemo from "./voiceMemo";
import Home from "./home";
import More from "./more";
import { Box, Paper } from "@mui/material";

const HOME_PAGES = [<Home />, <VoiceMemo />, <More />];

function Main() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const switchToPage = (page: number) => setCurrentPage(page);

  return (
    <div>
      <Box sx={{ paddingInline: 2 }}>{HOME_PAGES[currentPage]}</Box>

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Navbar
          switchToHome={() => switchToPage(0)}
          switchToMemo={() => switchToPage(1)}
          switchToMore={() => switchToPage(2)}
        />
      </Paper>
    </div>
  );
}

export default Main;
