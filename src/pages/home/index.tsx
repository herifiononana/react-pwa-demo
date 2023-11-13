import React from "react";
import SearchInput from "../../components/input/search";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Home() {
  return (
    <div>
      Accueil
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <SearchInput handleChange={() => {}} />
        <IconButton>
          <AddIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default Home;
