import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { cleatCurrentCustomer } from "../../features/customer/currentCustomerSlice";
import CustomerSelected from "./customerSelected";
import Autocomplete from "../autoComplete/Autocomplete";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { useAppDispatch } from "../../store/store";
import { SearchOption } from "../../type/types";

interface HeaderProps {
  currentCustomer: SearchOption | null;
  options: SearchOption[];
  handleChange: (value: any) => void;
}
function Header({ currentCustomer, options, handleChange }: HeaderProps) {
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 1,
      }}
    >
      <Typography sx={{ color: "primary.main", marginRight: 0.5 }}>
        Customer:
      </Typography>
      <Box
        sx={{
          zIndex: 1000,
          width: "100%",
          textAlign: "left",
        }}
      >
        {currentCustomer?.value ? (
          <CustomerSelected
            value={currentCustomer.label}
            onClose={() => dispatch(cleatCurrentCustomer())}
          />
        ) : (
          <Autocomplete
            placeholder=" Select customer"
            {...{ handleChange, options }}
          />
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <IconButton sx={{ color: "primary.main" }}>
          <PersonAddAlt1Icon />
        </IconButton>
        <IconButton sx={{ color: "primary.main" }}>
          <TuneIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Header;
