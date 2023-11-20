import React from "react";
import SearchInput from "../../components/input/search";
import { Box, Typography } from "@mui/material";
import CardActionItem from "../../components/cardMenuItem";
import { MENUS } from "../../constants/constants";
import AddButton from "../../components/buttons/addButton";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 1,
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <Typography sx={{ width: "100%", textAlign: "center", fontSize: 20 }}>
          FRED ALLARD
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <SearchInput handleChange={() => {}} />
          <AddButton action={() => {}} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {MENUS.map(({ title, description, backgroundImageSource, action }) => (
          <CardActionItem
            {...{ title, description, backgroundImageSource }}
            action={action ? () => navigate("/home/profile") : () => {}}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
