import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface CardCatalogueProps {
  title: string;
  description: string;
  backgroundImageSource: string;
}

function CardCatalogue({
  title,
  description,
  backgroundImageSource,
}: CardCatalogueProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingBottom: 1,
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image={backgroundImageSource}
        sx={{ height: "80%", objectFit: "cover" }}
      />
      <CardContent
        sx={{
          flex: 1,
          padding: 0,
          textAlign: "center",
        }}
      >
        <Typography gutterBottom component="div" sx={{ fontSize: ".8rem" }}>
          {title.toLocaleUpperCase()}
        </Typography>
        <Typography color="text.secondary" sx={{ fontSize: ".8rem" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardCatalogue;
