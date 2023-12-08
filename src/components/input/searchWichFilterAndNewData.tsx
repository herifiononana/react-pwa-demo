import React from "react";
import { Box, Tooltip, IconButton } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Select from "react-select";
import { Customer } from "../../services/customer/customerService";
import { formatCustomerOption } from "../../pages/products/cartUtil";
import COLORS from "../../styles/color";

export interface SearchOption {
  value: string;
  label: string;
}

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
      <Box sx={{ width: "100%", zIndex: 10000 }}>
        <Select
          className="basic-single"
          classNamePrefix="select"
          onChange={handleChange}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          name="product"
          options={options}
          placeholder="Search customer"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: "#888",
              width: "100%",
            }),
            option: () => ({
              fontSize: ".9rem",
              margin: 20,
              color: COLORS.text.main,
            }),
          }}
        />
      </Box>

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
