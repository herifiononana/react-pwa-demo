import React from "react";
import {
  Box,
  Button,
  IconButton,
  Popover,
  Typography as MUITypography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SyncIcon from "@mui/icons-material/Sync";
import styled from "@emotion/styled";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";
import COLORS from "../../styles/color";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartService from "../../services/cart/cartService";
import { showToast } from "../../utils/utils";
import { toastMessage } from "../../constants/message";

const Typography = styled(MUITypography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export function ImageCell({ image }: { image: string }) {
  return (
    <Box sx={{ width: "100%", height: "50%", overflow: "hidden" }}>
      {image ? (
        <img
          src={image}
          alt={image}
          width={"100%"}
          height={"100%"}
          loading="lazy"
          style={{
            objectFit: "cover",
            maxWidth: "80px",
            maxHeight: "80px",
            minWidth: "40px",
            minHeight: "40px",
          }}
        />
      ) : (
        <BrokenImageIcon
          sx={{
            width: "100%",
            height: "100%",
            color: COLORS.background.disabled,
          }}
        />
      )}
    </Box>
  );
}

export function ProductCategoryeCell({ category }: { category: string }) {
  return (
    <Box
      sx={{
        border: 1,
        borderWidth: 1,
        padding: 0.3,
        borderColor: "#ddd",
        backgroundColor: "#627d98",
        borderRadius: "25px",
      }}
    >
      <Typography
        sx={{
          fontSize: ".8rem",
          color: "#fff",
        }}
      >
        {category}
      </Typography>
    </Box>
  );
}

export function ProductTitleCell({
  title,
  stock = 0,
  category,
}: {
  title: string;
  stock?: number;
  category: string;
}) {
  return (
    <Box
      sx={{
        padding: 0.3,
      }}
    >
      <Typography
        sx={{
          fontSize: ".8rem",
          fontWeight: "bold",
          color: "#444",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: ".7rem",
          color: "#666",
        }}
      >{`${stock} in stock`}</Typography>
      <ProductCategoryeCell category={category} />
    </Box>
  );
}

export function AddToCartCell({ id }: { id: number }) {
  const { data: currentCustomer } = useSelector(
    (state: RootState) => state.currentCustomer
  );

  const addToCart = async () => {
    if (currentCustomer) {
      const response = await CartService.addProduct({
        customer_id: currentCustomer?.value,
        product_id: id,
      });
      response.status === true &&
        showToast(
          "success",
          response?.message || toastMessage.cart.addProductSuccess
        );
    }
  };

  return (
    <IconButton disabled={!currentCustomer} onClick={addToCart}>
      <AddCircleIcon
        sx={{ color: currentCustomer ? "#0c6b58" : COLORS.background.disabled }}
      />
    </IconButton>
  );
}

const ActionButton = styled(Button)({
  border: 0,
  justifyContent: "start",
  width: "100%",
});

export function ActionCell() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ActionButton
            variant="outlined"
            sx={{ border: 0 }}
            startIcon={<ModeEditIcon />}
          >
            Edit
          </ActionButton>
          <ActionButton
            variant="outlined"
            sx={{ border: 0 }}
            startIcon={<SyncIcon />}
          >
            Sync
          </ActionButton>
          <ActionButton
            variant="outlined"
            sx={{ border: 0 }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </ActionButton>
        </Box>
      </Popover>
    </Box>
  );
}

export function TitleCustomerCell({
  firstname,
  lastname,
  email,
  billingAdress,
}: {
  firstname: string;
  lastname: string;
  email: string;
  billingAdress: string;
}) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: ".8rem",
        }}
      >{`${firstname} ${lastname}`}</Typography>
      <Typography
        sx={{
          fontSize: ".8rem",
          color: "primary.main",
        }}
      >
        {email}
      </Typography>
      <Typography
        sx={{
          fontSize: ".8rem",
          color: "#666",
        }}
      >
        {billingAdress}
      </Typography>
    </Box>
  );
}
