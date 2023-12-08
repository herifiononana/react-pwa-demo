import React from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Customer } from "../../services/customer/customerService";
import { formatCustomerOption } from "../../pages/products/cartUtil";
import Autocomplete from "../autoComplete/Autocomplete";
import { SearchOption } from "../../type/types";

interface SearchAndFilterProps {
  data: Customer[];
  setSelectedCustomer: React.Dispatch<
    React.SetStateAction<SearchOption | null>
  >;
  setOpenModalCustomer: React.Dispatch<React.SetStateAction<boolean>>;
}
function SearchWichFilterAndNewData({
  data,
  setSelectedCustomer,
  setOpenModalCustomer,
}: SearchAndFilterProps) {
  const options = formatCustomerOption(data);

  const handleChange = (selectedOption: any) => {
    setSelectedCustomer(selectedOption as SearchOption);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
      }}
    >
      <Autocomplete
        placeholder="Search customer"
        {...{ handleChange, options }}
      />
      <Tooltip title="Add new customer">
        <IconButton onClick={() => setOpenModalCustomer(true)}>
          <PersonAddAlt1Icon sx={{ color: "primary.main" }} />
        </IconButton>
      </Tooltip>
      <IconButton>
        <TuneIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </Box>
  );
}

export default SearchWichFilterAndNewData;
