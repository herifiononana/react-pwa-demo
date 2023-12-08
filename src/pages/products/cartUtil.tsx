import { Box, IconButton } from "@mui/material";
import { Typography } from "./styles";
import CancelIcon from "@mui/icons-material/Cancel";
import { Customer } from "../../services/customer/customerService";
import { CustomerOption } from "../../features/customer/currentCustomerSlice";
// export interface Option {
//   value: number;
//   label: string;
// }

interface BottomItemProps {
  title: string;
  result?: string;
  Action?: JSX.Element;
}

export const RemoveProductItem = () => {
  return (
    <IconButton>
      <CancelIcon sx={{ color: "#cf1124" }} />
    </IconButton>
  );
};

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

export const formatCustomerOption = (
  customers: Customer[]
): CustomerOption[] => {
  return customers.map(
    (customer) =>
      ({
        value: customer.id,
        label: customer.first_name,
      } as CustomerOption)
  );
};
