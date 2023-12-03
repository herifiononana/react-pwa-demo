import { Box, Grid, IconButton } from "@mui/material";
import COLORS from "../../styles/color";
import { Typography, styleTypographyWithBorder } from "./styles";
import CancelIcon from "@mui/icons-material/Cancel";

export const Columns = () => {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "#f1f5f9",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 2,
        paddingTop: 0.5,
        paddingBottom: 0.5,
        borderBottom: 0.3,
        borderColor: "#e1e5e9",
      }}
    >
      <Grid item xs={1} md={1}>
        <Typography>QTY</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography>NAME</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography>SKU</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography>PRICE</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography>SUBTOTAL</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography>TOTAL</Typography>
      </Grid>
      <Grid item xs={1} md={1}></Grid>
    </Grid>
  );
};

export const ListItem = ({
  product,
  even,
}: {
  product: any;
  even: boolean;
}) => {
  return (
    <Grid
      container
      spacing={0.5}
      sx={{
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-between",
        backgroundColor: even ? "#fafbfc" : "#FFF",
        paddingInline: 1,
        marginBottom: 1,
        color: COLORS.text.main,
      }}
    >
      <Grid item xs={1} md={1}>
        <Typography
          sx={{
            border: 1,
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          1
        </Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography sx={{ ...styleTypographyWithBorder }}>NAME</Typography>
        <Typography>name</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography>SKU</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography sx={{ ...styleTypographyWithBorder }}>1.00</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography sx={{ ...styleTypographyWithBorder }}>1.00</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography>$1.00</Typography>
      </Grid>
      <Grid item xs={1} md={1}>
        <IconButton>
          <CancelIcon sx={{ color: "#cf1124" }} />
        </IconButton>
      </Grid>
    </Grid>
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
