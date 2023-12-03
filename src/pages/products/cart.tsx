import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography as MUITypography,
} from "@mui/material";
import React, { useState } from "react";
import CircularProgress from "../../components/progress";
import styled from "@emotion/styled";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";

// todo: refactor code
const Typography = styled(MUITypography)({
  fontSize: ".8rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const Columns = () => {
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

const ListItem = ({ product, even }: { product: any; even: boolean }) => {
  return (
    <Grid
      container
      spacing={0.5}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: even ? "#fafbfc" : "#FFF",
        paddingInline: 1,
        marginBottom: 1,
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
        <Typography
          sx={{
            border: 1,
            padding: 0.4,
            borderRadius: "2px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          NAME
        </Typography>
        <Typography>name</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography>SKU</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography
          sx={{
            border: 1,
            padding: 0.4,
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          1.00
        </Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Typography
          sx={{
            border: 1,
            padding: 0.4,
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          1.00
        </Typography>
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
const BottomItem = ({ title, result, Action }: BottomItemProps) => {
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

function Cart() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 1,
          }}
        >
          <MUITypography sx={{ color: "primary.main" }}>
            Customer:
          </MUITypography>
          <Box></Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton sx={{ color: "primary.main" }}>
              <PersonAddAlt1Icon />
            </IconButton>
            <IconButton sx={{ color: "primary.main" }}>
              <TuneIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "40vh",
            borderRadius: "5px",
            backgroundColor: "white",
            overflow: "auto",
            overflowX: "hidden",
            marginBottom: 1,
          }}
        >
          <Columns />
          {loading ? (
            <CircularProgress />
          ) : (
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
              (product, index) => (
                <ListItem
                  key={index}
                  product={product}
                  even={index % 2 === 0}
                />
              )
            )
          )}
        </Box>
        <Box sx={{ marginBottom: 1 }}>
          <BottomItem
            title={"Add Fee:"}
            Action={
              <IconButton>
                <AddCircleIcon />
              </IconButton>
            }
          />
          <BottomItem
            title={"Add Shipping:"}
            Action={
              <IconButton>
                <AddCircleIcon />
              </IconButton>
            }
          />
          <BottomItem title={"Subtotal:"} result="$147.05" />
          <BottomItem title={"Discount:"} result="-$-18.00" />
          <BottomItem title={"Taxes:"} result="excl. US $14.71" />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 1,
          }}
        >
          <Button variant="outlined">Order Note</Button>
          <Button variant="outlined">Order Meta</Button>
          <Button variant="outlined">Save to server</Button>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 1,
          }}
        >
          <Button
            sx={{
              width: "25%",
              color: "#FFF",
              backgroundColor: "#cf1124",
              "&:focus": { backgroundColor: "#cf1124" },
            }}
          >
            Void
          </Button>
          <Button
            sx={{
              width: "75%",
              color: "#FFF",
              backgroundColor: "#0c6b58",
              "&:focus": { backgroundColor: "#0c6b58" },
            }}
          >
            Checkout $46.00
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", overflow: "auto", backgroundColor: "#FFF" }}>
        <MUITypography
          sx={{
            fontSize: ".8rem",
            whiteSpace: "nowrap",
            margin: 1,
            color: "#127fbf",
          }}
        >
          Cart $50.49
        </MUITypography>
        <MUITypography
          sx={{
            fontSize: ".8rem",
            whiteSpace: "nowrap",
            margin: 1,
            color: "#127fbf",
          }}
        >
          Cart $50.49
        </MUITypography>
        <MUITypography
          sx={{
            fontSize: ".8rem",
            whiteSpace: "nowrap",
            margin: 1,
            color: "#127fbf",
          }}
        >
          Cart $50.49
        </MUITypography>
        <MUITypography
          sx={{
            fontSize: ".8rem",
            whiteSpace: "nowrap",
            margin: 1,
            color: "#127fbf",
          }}
        >
          Cart $50.49
        </MUITypography>
        <MUITypography
          sx={{
            fontSize: ".8rem",
            whiteSpace: "nowrap",
            margin: 1,
            color: "#127fbf",
          }}
        >
          Cart $50.49
        </MUITypography>
      </Box>
    </>
  );
}

export default Cart;
