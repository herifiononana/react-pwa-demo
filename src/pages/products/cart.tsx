import { Box, Grid, Typography as MUITypography } from "@mui/material";
import React, { useState } from "react";
import CircularProgress from "../../components/progress";
import styled from "@emotion/styled";

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

const ListItem = (product: any) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 1,
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
        <Typography>X</Typography>
      </Grid>
    </Grid>
  );
};

function Cart() {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Box>
      <Columns />
      {loading ? (
        <CircularProgress />
      ) : (
        [1, 1, 1, 1, 1, 1].map((product, index) => (
          <ListItem key={index} product={product} />
        ))
      )}
    </Box>
  );
}

export default Cart;
