import { Box, IconButton } from "@mui/material";
import { Typography } from "./styles";
import CancelIcon from "@mui/icons-material/Cancel";
import { Customer } from "../../services/customer/customerService";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import CartService from "../../services/cart/cartService";
import { getCart } from "../../features/cart/cartAction";
import { showToast } from "../../utils/utils";
import { toastMessage } from "../../constants/message";
import { SearchOption } from "../../type/types";

interface BottomItemProps {
  title: string;
  result?: string;
  Action?: JSX.Element;
}

export const RemoveProductItem = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const { data: currentCustomer } = useSelector(
    (state: RootState) => state.currentCustomer
  );

  const removeProduct = async () => {
    if (currentCustomer) {
      const response = await CartService.removeProduct({
        product_id: id,
        customer_id: currentCustomer?.value,
      });

      response.status &&
        showToast(
          "success",
          response?.message || toastMessage.cart.removeProductSuccess
        );
      dispatch(getCart(currentCustomer?.value));
    }
  };
  return (
    <IconButton onClick={removeProduct}>
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

export const formatCustomerOption = (customers: Customer[]): SearchOption[] => {
  return customers.map(
    (customer) =>
      ({
        value: customer.id,
        label: customer.first_name,
      } as SearchOption)
  );
};
