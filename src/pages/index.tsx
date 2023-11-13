import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import VoiceMemo from "./voiceMemo";
import Home from "./home";
import More from "./more";

const HOME_PAGES = [<Home />, <VoiceMemo />, <More />];

function Main() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const switchToPage = (page: number) => setCurrentPage(page);

  return (
    <div>
      {HOME_PAGES[currentPage]}
      <Navbar
        switchToHome={() => switchToPage(0)}
        switchToMemo={() => switchToPage(1)}
        switchToMore={() => switchToPage(2)}
      />
    </div>
  );
}

export default Main;
