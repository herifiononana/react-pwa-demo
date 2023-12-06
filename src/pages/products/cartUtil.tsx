import { Box, IconButton } from "@mui/material";
import { Typography, styleTypographyWithBorder } from "./styles";
import CancelIcon from "@mui/icons-material/Cancel";

export const ProductItem = () => {
  return (
    <>
      <Typography sx={{ ...styleTypographyWithBorder }}>NAME</Typography>
      <Typography>name</Typography>
      <Typography>SKU</Typography>
    </>
  );
};

export const RemoveProductItem = () => {
  return (
    <IconButton>
      <CancelIcon sx={{ color: "#cf1124" }} />
    </IconButton>
  );
};

interface BottomItemProps {
  title: string;
  result?: string;
  Action?: JSX.Element;
}
export const BottomItem = ({ title, result, Action }: BottomItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>{title}</Typography>
      {result && <Typography>{result}</Typography>}
      {Action && Action}
    </Box>
  );
};
