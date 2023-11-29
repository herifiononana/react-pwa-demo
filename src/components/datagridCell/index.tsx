import React from "react";
import { Box, Button, IconButton, Popover, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SyncIcon from "@mui/icons-material/Sync";
import styled from "@emotion/styled";
import { shortenText } from "../../utils/utils";

export function ProductImageCell({ image }: { image: string }) {
  return (
    <Box>
      <img src={image} alt={image} width={95} height={95} loading="lazy" />
    </Box>
  );
}

export function ProductTitleCell({ title }: { title: string }) {
  return (
    <Box
      sx={{
        border: 1,
        borderWidth: 1,
        padding: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ fontSize: ".9rem", fontWeight: "bold" }}>
        {shortenText(title, 10)}
      </Typography>
    </Box>
  );
}

export function ProductCategoryeCell({ category }: { category: string }) {
  return (
    <Box
      sx={{
        border: 1,
        borderWidth: 1,
        padding: 1,
        borderColor: "#ddd",
        backgroundColor: "primary.main",
        borderRadius: "25px",
      }}
    >
      <Typography sx={{ fontSize: ".9rem", color: "#fff" }}>
        {shortenText(category, 10)}
      </Typography>
    </Box>
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
