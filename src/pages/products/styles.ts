import styled from "@emotion/styled";
import {
  Box,
  Typography as MUITypography,
  SxProps,
  Theme,
} from "@mui/material";
import COLORS from "../../styles/color";

export const Typography = styled(MUITypography)({
  fontSize: ".8rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: COLORS.text.main,
});

export const ButtonText = styled(MUITypography)({
  fontSize: ".8rem",
  whiteSpace: "nowrap",
  margin: 10,
  color: "#127fbf",
});

export const BoxFlex = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  marginBottom: 10,
});

export const styleTypographyWithBorder: SxProps<Theme> = {
  border: 1,
  padding: 0.4,
  borderColor: "primary.light",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};
