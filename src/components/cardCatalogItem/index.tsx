import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions, IconButton } from "@mui/material";

interface CardCatalogItemProps {
  title: string;
  imageSource: string;
  action: () => void;
}

function CardCatalogItem({ title, imageSource, action }: CardCatalogItemProps) {
  return (
    <Card sx={{ margin: 1 }}>
      <CardActionArea>
        <CardMedia component="img" image={imageSource} alt={title} />
      </CardActionArea>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton sx={{ width: "2rem", height: "2rem" }} onClick={action}>
          +
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardCatalogItem;
