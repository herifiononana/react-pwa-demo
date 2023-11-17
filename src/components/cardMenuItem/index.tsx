import React from "react";
import { Box, Typography } from "@mui/material";

// todo: add action in props
interface CardActionItemProps {
  title: string;
  description: string;
  backgroundImageSource: string;
}

function CardActionItem({
  title,
  description,
  backgroundImageSource,
}: CardActionItemProps) {
  return (
    <Box
      sx={{
        height: "100%",
        marginTop: 0.5,
        marginBottom: 0.5,
        backgroundImage: `url(${backgroundImageSource})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: ".9rem" }}>
        {title.toLocaleUpperCase()}
      </Typography>
      <Typography sx={{ fontSize: ".8rem" }}>{description}</Typography>
    </Box>
  );
}

export default CardActionItem;
