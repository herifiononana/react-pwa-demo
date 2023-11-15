import React from "react";
import { Box, List } from "@mui/material";
import CardCatalogue from "../../components/cardCatalogue";
import { MENUS } from "../../constants/constants";
import CategoryButton from "../../components/buttons/categoryButton";
import AddButton from "../../components/buttons/addButton";

function VoiceMemo() {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        padding: 1,
      }}
    >
      <Box
        sx={{
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingInline: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              overflowX: "auto",
              flexWrap: "nowrap",
            }}
          >
            <CategoryButton name="nouveautes" action={() => {}} />
            <CategoryButton name="catalogues" action={() => {}} />
          </Box>
          <AddButton action={() => {}} />
        </Box>
      </Box>

      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "scroll",
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {MENUS.map(({ title, description, backgroundImageSource }) => (
          <Box sx={{ height: "50%", marginBottom: 2 }}>
            <CardCatalogue {...{ title, description, backgroundImageSource }} />
          </Box>
        ))}
      </List>
    </Box>
  );
}

export default VoiceMemo;
