import React from "react";
import { Grid, Typography } from "@mui/material";
import { ImageCell } from "../datagridCell";

export const Columns = ({
  firstCol,
  secondCol,
}: {
  firstCol: string;
  secondCol: string;
}) => {
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
        justifyContent: "space-between",
        marginBottom: 2,
        paddingTop: 0.5,
        paddingBottom: 0.5,
        borderBottom: 0.3,
        borderColor: "#e1e5e9",
      }}
    >
      <Grid item xs={2} md={2}></Grid>
      <Grid item xs={5} md={5}>
        <Typography
          sx={{
            fontSize: ".8rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {firstCol}
        </Typography>
      </Grid>
      <Grid item xs={3} md={3}>
        <Typography
          sx={{
            fontSize: ".8rem",
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {secondCol}
        </Typography>
      </Grid>
      <Grid item xs={2} md={2}></Grid>
    </Grid>
  );
};

export const ListItem = ({
  data,
  TitleView,
  SecondContent,
  ActionView,
  even,
}: {
  data: any;
  TitleView: JSX.Element;
  SecondContent: JSX.Element;
  ActionView: JSX.Element;
  even: boolean;
}) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 1,
        backgroundColor: even ? "#fafbfc" : "#red",
        marginBottom: 1,
      }}
    >
      <Grid item xs={2} md={2}>
        <ImageCell image={data.image} />
      </Grid>
      <Grid item xs={5} md={5}>
        {TitleView}
      </Grid>
      <Grid item xs={3} md={3}>
        {SecondContent}
      </Grid>
      <Grid item xs={2} md={2}>
        {ActionView}
      </Grid>
    </Grid>
  );
};
